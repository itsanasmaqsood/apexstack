# ApexStack Booking Flow — Cal.com Setup

**Why this exists:** every "Book a Discovery Call" button on the site (21 of them,
across 10 pages) currently lands on the contact form. A visitor fills ten fields,
submits, and waits for a human to reply and agree a time.

The two studios you asked me to analyse — **ignytlabs.com** and
**dreamlaunch.studio** — both send every CTA straight to a Cal.com page. Pick a
day, pick a slot, answer a few qualifying questions, booked. Calendar invite and
Google Meet link sent automatically. **Two clicks instead of a form and a wait.**

The site is already wired for that flow. Create the event below, paste the URL
into one field, and all 21 buttons switch over at once.

---

## Step 1 — Create the event

Sign up free at **cal.com** using **apexstack.dev@gmail.com**, then create an
event type with these settings.

| Setting | Value |
|---|---|
| **Host** | Aariz Rasheed |
| **URL** | `cal.com/apexstack/discovery` |
| **Event name** | Discovery Call with Aariz @ApexStack |
| **Duration** | 20 minutes |
| **Location** | Google Meet |
| **Availability** | Your working hours. Cal.com converts to the visitor's timezone automatically |

Connect the Google Calendar on that account so double-bookings are impossible.

---

## Step 2 — Event description

This is the panel on the left of the booking page. Dreamlaunch uses theirs to
list funded clients. Ours uses the products you actually shipped — all of it
verifiable, none of it invented:

```
A free 20-minute call to work out whether software is the answer,
and what it would take.

We are a product engineering company. We have shipped 21 apps of our
own to the App Store and Google Play, including:

- Iqra — 150,000+ downloads, 4.9 rating
- SalafiMatch — 10,000+ downloads
- SafeMama, NutriNudge, CaptionLab, SnapChef and 15 more

We build custom software, AI products, mobile apps and cloud
platforms for businesses worldwide.

No cost, no obligation, no sales script.
```

> Only the two figures you supplied appear. Add more once you have numbers you
> can stand behind.

---

## Step 3 — Booking questions

Cal.com → your event → **Advanced → Booking questions**. This mirrors the
qualification the competitors run, in ApexStack's language.

| # | Question | Type | Required | Options / placeholder |
|---|---|---|---|---|
| 1 | Your name | Name | ✅ | *(built in)* |
| 2 | Email address | Email | ✅ | *(built in)* |
| 3 | Company or product name | Short text | — | placeholder: `Optional` |
| 4 | What do you need built? | Multi-select | ✅ | Launch a new product · Build custom or enterprise software · Improve or scale an existing product · Automate a manual process · Add AI to our product · Design and brand work · Not sure yet — need advice |
| 5 | What are you trying to build? | Long text | ✅ | placeholder: `The problem you are solving, and what "done" looks like` |
| 6 | When do you need it live? | Select | ✅ | As soon as possible · Within 1–3 months · Within 3–6 months · Still planning |
| 7 | Indicative budget | Select | — | Not sure yet · Under $10k · $10k–$25k · $25k–$50k · $50k–$100k · $100k+ |
| 8 | How did you hear about us? | Select | — | Google search · X / Twitter · LinkedIn · One of our apps · Referral · Other |
| 9 | Anything else we should read first? | Long text | — | placeholder: `Links, docs, designs, or context that would help us come prepared` |

**Two deliberate differences from the competitors' forms:**

- **Question 4 leads with engineering**, and design sits last — the ordering
  you asked for everywhere on the site.
- **Question 7 is optional and starts at "Not sure yet."** Dreamlaunch makes
  budget mandatory. Making it required loses the enquiry from someone who has
  not costed the work yet, which for a first call is most people. It also keeps
  you consistent with the no-pricing position: you are asking for their range,
  not publishing yours.

---

## Step 4 — Turn it on

Paste the URL into **one line** — `src/data/company.ts`:

```ts
calendlyUrl: "https://cal.com/apexstack/discovery",
```

That is the entire change. Every button flips from the contact form to the
booking page, opening in a new tab so the visitor keeps the site behind them.

**Verified before shipping:** I temporarily set that exact URL and confirmed all
**21 buttons across 10 pages** switched to Cal.com with `target="_blank"` and
`rel="noopener noreferrer"`, then reverted it. Nothing points at a live URL until
you create the event.

---

## Step 5 — Confirmation email

Cal.com → **Workflows** → *After event is booked*:

```
Subject: Your call with ApexStack — {EVENT_DATE}

Hi {ATTENDEE_NAME},

You are booked in with Aariz for {EVENT_TIME}. The Google Meet link
is on the calendar invite.

Nothing to prepare. We will ask what you are trying to build and tell
you honestly whether software is the answer and what it would take.

If you want a look at our work first: https://apexstack.dev/products

— ApexStack
APEXMART INTERNET PRIVATE LIMITED
```

---

## What these two competitors do that you do not

Straight from reading both sites:

| | IgnytLabs | Dreamlaunch | ApexStack |
|---|---|---|---|
| Booking | Cal.com, 10 CTAs, one destination | Cal.com | **Contact form** ← the gap |
| Headline | "Build and Validate in **21 days**" | "AI-native design + development partner" | "Your technology partner from idea to scale" |
| Proof above the fold | 40+ MVPs · $2M+ raised · 20+ founders | Named clients + case studies | 21 shipped apps |
| Named clients | Logos | Riti, Mizu AI, Mrsam AI + case studies | **None yet** |
| Case studies | Listed | Full write-ups | **None yet** |
| Page count | ~5 | ~5 | **35** |
| Homepage words | 1,351 | short | 1,698 |

**Three things worth copying:**

1. **The booking flow.** Steps 1–4 above. Biggest single conversion gain
   available to you.
2. **A specific, time-bound promise.** "Build and Validate in 21 days" is
   concrete in a way "from idea to scale" is not. If you can commit to a real
   number — a two-week discovery, a six-week MVP — say it.
3. **Case studies with named clients.** Both competitors lead with them. It is
   still your largest gap, and the only fix is permission from a client.

**Three things you already do better:** 35 pages against their ~5, full
structured data on every one, and 21 shipped products that a visitor can
download and use. Neither of them has that.

**One thing not to copy:** both publish pricing pages. You decided against that,
and against fake urgency and countdown timers. Nothing above changes it.
