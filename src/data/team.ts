/**
 * Leadership and team.
 *
 * Three co-founders lead ApexStack. All three carry the "Co-Founder" prefix, so
 * the titles read as equal standing; the second half of each title separates
 * what each one owns, because three identical titles tell a buyer nothing about
 * who to talk to.
 *
 * Names, titles and profiles are all confirmed by the founders.
 *
 * ORDER IS DELIBERATE, and no longer matches the id numbering. Aariz leads the
 * list: he is the publisher of record on the App Store, and he hosts the
 * discovery call every CTA on the site books. The `id` still maps to the photo
 * filename, so reordering here never moves a photograph.
 *
 * No biography, credential, education or achievement is invented anywhere here.
 * `bio` states scope of responsibility only, which follows from the title.
 */

export interface TeamMember {
  /** Stable key; also the photo filename stem. */
  id: string;
  /** Full name, confirmed by the founders. */
  name: string;
  /** Executive title. All three open with "Co-Founder" by design. */
  role: string;
  /**
   * Written in a human voice, grounded only in work that is already public.
   *
   * The first pass here was three sentences off one template — "Owns X and is
   * accountable for Y", repeated with the nouns swapped. It was accurate and it
   * read like an org chart. These name real, checkable things instead: apps on
   * apps on the stores, published under this company's own name. Nothing
   * below asserts a history, a qualification or a past employer, because none
   * of that has been supplied.
   *
   * Claims point at the APP STORES, never at GitHub. Every repository behind
   * this work is private, so "it is in his repositories" sent a reader to a
   * profile showing nothing and quietly weakened the sentence it was meant to
   * strengthen. Store listings are public and check out on the first click.
   */
  bio: string;
  /** Areas of ownership. */
  focus: string[];
  photo: string;
  /** X handle without the @. Renders on the card and as `sameAs` in schema. */
  handle?: string;
  linkedin?: string;
  /** GitHub username without the @. Renders on the card and as `sameAs`. */
  github?: string;
}

export const LEADERSHIP: TeamMember[] = [
  {
    id: "leadership-03",
    name: "Aariz Rasheed",
    role: "Co-Founder & Chief Product Officer",
    bio: "Decides what gets built and what gets cut. Aariz shapes the products before a line of code is written, and he publishes them too — the App Store listings for our apps are filed under his name, which means store review, rejections and resubmissions land on his desk.",
    focus: ["Product strategy", "Design practice", "User research"],
    photo: "/team/leadership-03.jpg",
    handle: "RasheedAariz",
    github: "aariz51",
  },
  {
    id: "leadership-01",
    name: "Aman Maqsood",
    role: "Co-Founder & Chief Executive Officer",
    bio: "The person you will actually talk to. Aman runs the company and stays on the client side of every engagement rather than handing you to an account manager after the first call. He still ships: the SalafiMatch web build is his.",
    focus: ["Company strategy", "Client partnerships", "Commercial"],
    photo: "/team/leadership-01.jpg",
    handle: "amanmaqsood",
    github: "amanmaqsood",
  },
  {
    id: "leadership-02",
    name: "Anas Maqsood",
    role: "Co-Founder & Chief Technology Officer",
    bio: "Writes the code and sets the standards the rest of us build to. Most of what ApexStack has shipped runs through Anas — Decorly, NutriNudge and the SalafiMatch web app among them — so the architecture decisions on your project are made by someone who will also be the one maintaining them.",
    focus: ["Architecture", "Engineering standards", "Cloud & infrastructure"],
    photo: "/team/leadership-02.jpg",
    handle: "itsanasmaqsood",
    github: "itsanasmaqsood",
  },
];

/**
 * Disciplines the team is organised around. Rendering these rather than
 * inventing headcount means the section stays honest today and scales without a
 * redesign as real people are added — each becomes a `TeamMember[]` here.
 */
export interface Discipline {
  name: string;
  description: string;
}

export const DISCIPLINES: Discipline[] = [
  {
    name: "Engineering",
    description:
      "Backend, frontend and mobile engineers who own features from architecture through to production.",
  },
  {
    name: "Architecture",
    description:
      "System design, data modelling and the technical decisions that are expensive to reverse.",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Infrastructure as code, delivery pipelines, monitoring and cost control.",
  },
  {
    name: "AI Engineering",
    description:
      "Model integration, retrieval systems, agent design, evaluation and guardrails.",
  },
  {
    name: "Product & Design",
    description:
      "Discovery, user research, interface design and the component systems engineering builds from.",
  },
  {
    name: "Quality Assurance",
    description:
      "Automated testing, accessibility and performance verification before anything reaches production.",
  },
];

/** True while the photo file has not been added yet. */
export function isPlaceholder(member: TeamMember): boolean {
  return member.name.startsWith("TODO:");
}
