/**
 * Turns an App Store listing into something with a shape.
 *
 * WHY THIS EXISTS: store copy is written for a single scrolling text field, so
 * it arrives as one unbroken run. The page used to split that on sentence
 * boundaries and group every three into a paragraph, which produced a wall of
 * text and threw away structure the copy already had.
 *
 * It does have structure. Every listing is the same shape: a lead paragraph,
 * then ALL-CAPS group headings ("COMPLETE QURAN", "QIBLA COMPASS"), each
 * followed by features separated by bullets or dashes, then legal and billing
 * notes at the end. This reads that structure back out so the page can render
 * it as groups and lists rather than as prose.
 *
 * Nothing is rewritten. Every word rendered is a word Apple already publishes.
 */

/** One feature line. `title` is present when the copy wrote "Name: detail". */
export interface StoryItem {
  title?: string;
  text: string;
}

/** A heading and the features under it. */
export interface StoryGroup {
  heading: string;
  items: StoryItem[];
  /** Copy under the heading that was not written as a list. */
  prose?: string;
  /**
   * Legal, privacy and billing blocks. Rendered small and last: they are
   * required, and they are not why anyone is reading the page.
   */
  isNote: boolean;
}

export interface ParsedStory {
  /** The opening paragraph, before any heading. */
  lead: string;
  groups: StoryGroup[];
  /** The sign-off after the last group, where the listing has one. */
  closing?: string;
}

const NOTE_HEADING =
  /DISCLAIMER|SUBSCRIPTION|PRIVACY|MEDICAL|TERMS|LEGAL|NOTE|IMPORTANT/i;

/** Bullet and dash markers used as list separators in store copy. */
const SPLIT_ITEMS = /\s*(?:•|·|(?:^|\s)[-–]\s)\s*/;

const tidy = (s: string) =>
  s
    .replace(/ /g, " ")
    .replace(/\s+/g, " ")
    .replace(/^[:•·\-–,\s]+/, "")
    .replace(/[\s,]+$/, "")
    .trim();

/**
 * Splits "Instant Answers: ask about..." into a title and its detail.
 *
 * Only a short leading fragment counts. Without the length cap, any sentence
 * containing a colon turns its whole first clause into a heading, which reads
 * worse than leaving the sentence alone.
 */
function splitTitle(raw: string): StoryItem {
  const text = tidy(raw);
  // No dotAll flag: `tidy` has already collapsed every run of whitespace to a
  // single space, so there is no newline left for `.` to miss.
  const match = text.match(/^([^:]{3,42}):\s+(.{10,})$/);
  if (match) return { title: tidy(match[1]), text: tidy(match[2]) };
  return { text };
}

function toItems(body: string): { items: StoryItem[]; prose?: string } {
  const parts = body
    .split(SPLIT_ITEMS)
    .map(tidy)
    .filter((p) => p.length > 2);

  // One part means the copy never used a list marker here, so it is prose.
  if (parts.length <= 1) {
    const prose = tidy(body);
    return { items: [], prose: prose.length > 2 ? prose : undefined };
  }

  return { items: parts.map(splitTitle) };
}

/**
 * HEADINGS ARE FOUND BY TOKENISING RATHER THAN BY ONE REGEX.
 *
 * A single expression kept failing on real copy in ways that were awkward to
 * patch: "DHIKR & DUAS" broke because "&" is one character, "UMRAH GUIDE
 * (NEW!)" lost its suffix to a word boundary, and "SCAN THE LABEL, A BARCODE"
 * split at the comma into two headings with a stray fragment between them.
 *
 * Walking the words instead makes each of those a property of the token test
 * rather than a special case, so a run of shouted words stays one run.
 */
const STRIP_EDGE = /^[^A-Za-z0-9&(]+|[^A-Za-z0-9&)!]+$/g;

function isShouted(word: string): boolean {
  const bare = word.replace(STRIP_EDGE, "");
  if (!bare) return false;
  if (bare === "&") return true;
  if (/[a-z]/.test(bare)) return false;
  // Digits continue a run so "A CLEAR 0-100 HEALTH SCORE" stays one heading.
  // They cannot qualify one on their own: `substantial` counts letters only.
  return /[A-Z0-9]/.test(bare);
}

/** Words carrying at least two letters, used to reject one-word matches. */
const substantial = (run: string[]) =>
  run.filter((w) => w.replace(STRIP_EDGE, "").replace(/[^A-Z]/g, "").length >= 2)
    .length;

interface Found {
  heading: string;
  start: number;
  end: number;
  /**
   * False for a shouted run that turned out to open a sentence rather than
   * label a section. It is still recorded, because it is still a boundary: the
   * copy shouts precisely where one thought ends and the next begins, and
   * without it the closing paragraph gets swallowed into the last bullet of
   * the group above.
   */
  isHeading: boolean;
}

function findHeadings(source: string): Found[] {
  const found: Found[] = [];
  const wordRe = /\S+/g;
  let run: Array<{ word: string; start: number; end: number }> = [];

  const flush = () => {
    if (run.length) {
      const words = run.map((r) => r.word);
      const last = words[words.length - 1];
      // Two shouted words, or one that closed with a colon: "DISCLAIMER:" is a
      // heading on its own, "AI" in the middle of a sentence is not.
      const colonTerminated = /:$/.test(last);
      const qualifies =
        substantial(words) >= 2 || (words.length === 1 && colonTerminated);
      const heading = tidy(words.join(" ")).replace(/:$/, "");

      // A run running straight into a lowercase word was never a heading, it
      // was the loud opening of a sentence: "BUILT WITH LOVE for the Muslim
      // Ummah" is one sentence, and cutting it leaves a section whose body
      // starts mid-clause. Punctuation or a list marker in between means the
      // copy really did stop, so those still count.
      const after = source.slice(run[run.length - 1].end);
      const runsIntoSentence = /^\s+[a-z]/.test(after) && !colonTerminated;

      if (qualifies && heading.length >= 6) {
        found.push({
          heading,
          start: run[0].start,
          // A demoted run stays in the prose, so nothing is dropped from the
          // page; only a real heading is consumed as a label.
          end: runsIntoSentence ? run[0].start : run[run.length - 1].end,
          isHeading: !runsIntoSentence,
        });
      }
    }
    run = [];
  };

  for (const m of source.matchAll(wordRe)) {
    const word = m[0];
    const start = m.index ?? 0;
    if (isShouted(word)) {
      run.push({ word, start, end: start + word.length });
      // A colon ends a heading, so "DISCLAIMER: AI Islam is..." does not steal
      // the first word of the sentence that follows it.
      if (/:$/.test(word)) flush();
    } else {
      flush();
    }
  }
  flush();

  return found;
}

export function parseStory(raw: string): ParsedStory {
  const source = raw.replace(/ /g, " ").trim();
  if (!source) return { lead: "", groups: [] };

  const found = findHeadings(source);
  const headings = found.filter((f) => f.isHeading);
  if (headings.length === 0) return { lead: tidy(source), groups: [] };

  const lead = tidy(source.slice(0, found[0].start));

  const groups: StoryGroup[] = headings.map((h) => {
    // Body ends at the next boundary of ANY kind, so a demoted run still stops
    // the group rather than being absorbed into its final bullet.
    const next = found.find((f) => f.start >= h.end);
    const body = source.slice(h.end, next?.start ?? source.length);
    const { items, prose } = toItems(body);
    return {
      heading: h.heading,
      items,
      prose,
      isNote: NOTE_HEADING.test(h.heading),
    };
  });

  // Anything after the final boundary that was not itself a heading is the
  // sign-off: "BUILT WITH LOVE for the Muslim Ummah. Download today."
  const lastBoundary = found[found.length - 1];
  const closing = lastBoundary.isHeading
    ? undefined
    : tidy(source.slice(lastBoundary.start));

  return {
    lead,
    // A heading with nothing under it was a false positive, not a group.
    groups: groups.filter((g) => g.items.length > 0 || (g.prose?.length ?? 0) > 2),
    closing: closing && closing.length > 20 ? closing : undefined,
  };
}
