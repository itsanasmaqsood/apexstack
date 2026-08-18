"use client";

import { useEffect, useRef } from "react";

/**
 * Tab-level attention: while the tab is hidden, cycle the document title and
 * swap the favicon. The moment it is visible again, everything is restored.
 *
 * Renders nothing. No popup, no toast, no in-page element, no notification
 * permission — the whole effect lives in `document.title` and the favicon link
 * tags, so it cannot shift layout or touch the UI.
 *
 * ── WHAT BROWSERS ACTUALLY ALLOW ─────────────────────────────────────────────
 * Worth stating plainly, because a lot of "tab attention" code assumes more
 * control than exists:
 *
 *   • Title changes in a background tab: reliable everywhere.
 *   • Favicon swaps: reliable in Chrome, Edge and Firefox. Safari is
 *     inconsistent about re-reading <link rel="icon"> after load — the title
 *     still cycles there, so the effect degrades rather than breaks.
 *   • Background timers are throttled to roughly one tick per second, and more
 *     aggressively on battery saver. CYCLE_MS is 2s so the sequence survives
 *     that throttling; anything faster would stutter or be coalesced away.
 *   • Flashing the taskbar, bouncing the dock or forcing focus is not
 *     available to a web page at all, and is not attempted here.
 *
 * Tab strips truncate hard — often to 15-20 characters with several tabs open —
 * so every message below is short enough to survive that.
 */

const IDLE_TITLE = "ApexStack — Product Engineering";

const ATTENTION_MESSAGES = [
  "Still there?",
  "Come back →",
  "Let's build it.",
] as const;

const IDLE_ICON = "/brand/favicon/idle-32.png";
const ALERT_ICON = "/brand/favicon/alert-32.png";

/** Two seconds a message: under background-timer throttling, and readable. */
const CYCLE_MS = 2000;

/** Rewrites the favicon link, creating it if the document has none. */
function setFavicon(href: string) {
  const existing =
    document.querySelector<HTMLLinkElement>('link[data-tab-attention="true"]');

  if (existing) {
    existing.href = href;
    return;
  }

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.dataset.tabAttention = "true";
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Drops our override so the icons declared in the app metadata take over again.
 * Removing the element is cleaner than pointing it back at the original: it
 * leaves the document exactly as Next.js rendered it, so nothing about the
 * existing SEO or icon configuration is permanently altered.
 */
function clearFaviconOverride() {
  document
    .querySelector<HTMLLinkElement>('link[data-tab-attention="true"]')
    ?.remove();
}

export default function TabAttention() {
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef(0);
  /**
   * The title to put back when the tab returns.
   *
   * Captured at the moment the tab is hidden, NOT at mount. This component is
   * mounted once in the root layout and survives every client-side navigation,
   * so a title read at mount is the title of whichever page the visitor first
   * landed on. Reading it there meant browsing to /contact, switching tabs and
   * coming back restored the *homepage's* title onto the contact page, and it
   * stayed wrong until a full reload.
   */
  const restoreTitleRef = useRef<string>("");

  useEffect(() => {
    const stop = () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const restore = () => {
      stop();
      stepRef.current = 0;
      if (restoreTitleRef.current) {
        document.title = restoreTitleRef.current;
      }
      clearFaviconOverride();
    };

    const start = () => {
      stop();
      stepRef.current = 0;

      // Snapshot the real title first. Guarded against our own messages so a
      // second `start()` before a `restore()` cannot bake "Still there?" in as
      // the page's title forever.
      const current = document.title;
      if (!ATTENTION_MESSAGES.includes(current as (typeof ATTENTION_MESSAGES)[number])) {
        restoreTitleRef.current = current || IDLE_TITLE;
      }

      // Fire the first message immediately: waiting a full cycle would mean the
      // tab shows its normal title for two seconds after the user has gone.
      document.title = ATTENTION_MESSAGES[0];
      setFavicon(ALERT_ICON);

      timerRef.current = window.setInterval(() => {
        stepRef.current += 1;
        const message =
          ATTENTION_MESSAGES[stepRef.current % ATTENTION_MESSAGES.length];
        document.title = message;
        // Alternate the icon with the message so the tab reads as alive
        // without either state flickering.
        setFavicon(stepRef.current % 2 === 0 ? ALERT_ICON : IDLE_ICON);
      }, CYCLE_MS);
    };

    const onVisibilityChange = () => {
      if (document.hidden) start();
      else restore();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    // `pagehide` covers bfcache and tab close, where visibilitychange may not
    // fire in time; `focus` is a belt-and-braces restore for browsers that
    // report visible late after an alt-tab.
    window.addEventListener("pagehide", restore);
    window.addEventListener("focus", restore);

    // If the tab is already hidden at mount — opened in the background, or
    // restored from a previous session — start straight away.
    if (document.hidden) start();

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pagehide", restore);
      window.removeEventListener("focus", restore);
      restore();
    };
  }, []);

  return null;
}
