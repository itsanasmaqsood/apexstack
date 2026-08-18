import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: "cloud-cost-optimisation",
  title: "Cloud Cost Optimisation: Where the Money Actually Goes",
  seoTitle: "Cloud Cost Optimisation: Where the Money Goes",
  description:
    "The line items that dominate a cloud bill — idle compute, data transfer, orphaned storage, logging — and the specific fix for each one.",
  excerpt:
    "A technical account of what a first cloud cost audit actually finds: over-provisioned instances, forgotten environments, cross-AZ traffic and logging spend, plus the structural levers that keep the bill down afterwards.",
  category: "Legacy Modernisation",
  primaryKeyword: "cloud cost optimisation",
  secondaryKeywords: [
    "how to reduce AWS costs",
    "cloud cost audit checklist",
    "reserved instances vs savings plans",
    "cloud data transfer costs",
    "right-sizing cloud instances",
  ],
  published: "2026-08-12",
  authorId: "leadership-02",
  serviceSlug: "cloud-devops",
  keyTakeaway:
    "Most cloud spend concentrates in a small number of line items: compute provisioned for a peak that never arrives, non-production environments running around the clock, storage and snapshots nobody deleted, data transfer between availability zones and out to the internet, managed service tiers bought a size too large, and logging that grows faster than traffic. A first cloud cost optimisation pass usually recovers the majority of its savings from a handful of those items, because cloud bills are steeply skewed rather than evenly spread. The durable fixes are measured right-sizing, autoscaling that actually scales down, storage lifecycle policies, and tagging good enough that every dollar has an owner.",
  sections: [
    {
      heading: "Where does cloud spend actually accumulate?",
      blocks: [
        {
          type: "p",
          text: "Every cloud cost optimisation exercise starts the same way: export three months of billing data at resource level and sort descending. The result is almost always steeply skewed. A handful of resources — a database cluster, one instance family, a NAT gateway, a logging pipeline — account for the bulk of the bill, and a long tail accounts for the rest. Production runs on a few large, always-on things; the tail is experiments, forgotten environments and defaults nobody revisited.",
        },
        {
          type: "p",
          text: "This is why the first audit is disproportionately productive and the fifth is not. The first pass works the top ten line items and finds real money in most of them. Fifty resources at twenty dollars a month take as long to investigate and return a fraction of the saving. Work the head of the distribution, automate the tail through policy, and stop.",
        },
        {
          type: "callout",
          text: "Take the top ten lines of the bill and ask of each: what breaks if this is half the size, switched off at night, or deleted? Most of the answers are cheaper than the resource.",
        },
      ],
    },
    {
      heading: "Compute you are paying for and are not using",
      blocks: [
        {
          type: "p",
          text: "The largest recurring waste is compute sized for a peak that never comes. An instance chosen during a launch, or copied from the last project, sits at single-digit CPU utilisation for two years because nobody was asked to check. Right-sizing is only credible when it comes from measurement: take the p95 of CPU and memory over at least a fortnight, keep headroom for your real traffic pattern, and resize. Guessing downward is how you get a rollback and a team that never tries again.",
        },
        {
          type: "p",
          text: "Kubernetes hides the same problem behind a layer. The scheduler places pods using resource requests rather than actual usage, so a fleet with generous requests runs nodes at low utilisation while reporting itself as full. Set requests from observed usage — the Vertical Pod Autoscaler in recommendation mode is a reasonable source — and stop pinning limits to requests out of habit.",
        },
        {
          type: "p",
          text: "Non-production environments are the other reliable win, because they are sized like production and used during office hours. Staging, QA and demo each running continuously pay for 168 hours a week to be useful for perhaps fifty. A scheduled stop overnight and at weekends removes most of that without touching an application setting. The objection is always that someone might need it at 2am; the answer is a self-service start button.",
        },
        {
          type: "list",
          items: [
            "Instances left running after a load test, a cutover or a proof of concept — check anything over 90 days old with no recent deployment.",
            "Unattached block storage volumes, which bill at the full provisioned rate whether or not anything reads them.",
            "Snapshot chains with no retention policy, accumulating for years because each looks cheap in isolation.",
            "Old machine images and registry layers, especially where CI pushes an image on every commit.",
            "Public IPv4 addresses, which AWS now charges for hourly whether attached or not.",
            "Development clusters outliving the project, still paying a control plane charge.",
          ],
        },
      ],
    },
    {
      heading: "Why data transfer charges surprise everyone",
      blocks: [
        {
          type: "p",
          text: "Nobody models data transfer during design, because in a data centre the network is a fixed cost and in a cloud it is a meter. Three charges do most of the damage. Traffic between availability zones inside one region is billed in both directions, so a service chatting to a database in another zone pays twice for the same bytes. Egress to the internet is billed per gigabyte on a tiered scale after a small free allowance. And a NAT gateway is charged by the hour and per gigabyte processed, so every private-subnet workload pulling images or calling an external API pays a toll on traffic it assumes is free. Check current published pricing before modelling any of this — rate cards move.",
        },
        {
          type: "p",
          text: "So a chatty architecture converts service decomposition straight into a data transfer line item. A request fanning out across six services spread over three zones can cross a zone boundary a dozen times, at both ends, before it returns to the user. Zone-aware routing, keeping caches and databases in the same zone as their heaviest readers, and VPC endpoints so traffic to managed services stays off the NAT gateway address most of it. For bulk egress — media, exports, model artefacts — a CDN in front of the origin is normally cheaper per gigabyte than serving directly.",
        },
      ],
    },
    {
      heading: "Managed services, idle load balancers and observability spend",
      blocks: [
        {
          type: "p",
          text: "Managed services are where a size-too-large decision compounds: the tier bills continuously and is rarely revisited. A managed database running multi-AZ costs roughly double the single-instance price, correct for production and hard to justify for the QA copy nobody would miss for an hour. Storage autoscaling grows and never shrinks, so one runaway log table permanently raises the floor of the bill. Provisioned IOPS bought during an incident stay long after the query that caused it was fixed, and search and cache clusters are usually sized for a projected data volume rather than a reached one.",
        },
        {
          type: "p",
          text: "Load balancers are individually cheap and collectively invisible. Each application load balancer bills an hourly charge regardless of traffic, plus a capacity-unit charge. One is a rounding error; thirty — one per environment per service, created by a template and never removed — is a standing monthly cost for infrastructure that often serves nothing. Consolidating onto shared listeners with host or path routing removes most of them.",
        },
        {
          type: "p",
          text: "Observability is the fastest-growing line on most modern bills, and it grows faster than traffic rather than in step with it. Log platforms typically charge for ingestion, indexing and retention separately, so volume hits the bill up to three times. Debug logging left on after an incident, a health check logging every probe, and an architecture emitting a line per hop between services all push volume up without changing user-facing traffic. Sample high-volume traces, route audit logs to object storage rather than an indexed store, set retention per service, and check whether you are paying to index fields nobody queries.",
        },
      ],
    },
    {
      heading: "Cost category, typical cause, and the fix that works",
      blocks: [
        {
          type: "table",
          caption: "What a first audit finds, and the fix for each.",
          head: ["Cost category", "Typical cause", "The specific fix", "Effort"],
          rows: [
            [
              "Over-provisioned compute",
              "Sized for a projected peak, never revisited",
              "Right-size from p95 CPU and memory over 14+ days; move to a newer instance generation",
              "Low",
            ],
            [
              "Always-on non-production",
              "Staging and QA sized like production, running 24/7",
              "Scheduled stop outside working hours with a self-service start; smaller tiers",
              "Low",
            ],
            [
              "Orphaned storage",
              "Unattached volumes, unbounded snapshots, old images",
              "Cleanup past a grace period; snapshot and registry lifecycle rules",
              "Low",
            ],
            [
              "Data transfer",
              "Cross-AZ chatter, NAT processing, uncached egress",
              "Zone-aware placement, VPC endpoints, CDN in front of bulk egress",
              "Medium",
            ],
            [
              "Managed service tier",
              "Multi-AZ in non-production, autoscaled storage, stale IOPS",
              "Downgrade non-production, rebuild storage at size, re-baseline IOPS",
              "Medium",
            ],
            [
              "Logging and tracing",
              "Ingestion, indexing and retention billed on volume that grows per hop",
              "Trace sampling, per-service retention, archive to object storage",
              "Medium",
            ],
            [
              "Idle load balancers",
              "One per service per environment, created by templates",
              "Consolidate onto shared listeners with host or path routing",
              "Low",
            ],
            [
              "No commitment coverage",
              "Steady baseline running on on-demand pricing",
              "Cover the measured floor with savings plans",
              "Low, hard to reverse",
            ],
          ],
        },
      ],
    },
    {
      heading: "Structural levers, and where committed-use discounts trap you",
      blocks: [
        { type: "h3", text: "Autoscaling that scales down" },
        {
          type: "p",
          text: "Most autoscaling groups scale up quickly and scale down never, because a nervous scale-down policy caused an incident once. That is a configuration for peak-cost operation. Scale down on a longer cooldown than you scale up, use a request or queue-depth signal where the workload is I/O-bound, and set the minimum to what the quiet period needs rather than to whatever makes the graph look reassuring.",
        },
        { type: "h3", text: "Commitments, and the shape of the trap" },
        {
          type: "p",
          text: "AWS publishes discounts of up to around 72% for three-year all-upfront reserved instances and up to around 66% for Compute Savings Plans, with equivalent programmes on Azure and Google Cloud. The saving is genuine. The trap is that a three-year commitment bets your architecture will not change, and three years is long enough for a move to containers or a newer instance family to strand a chunk of it. Cover only your measured floor, prefer flexible commitment types, and ladder terms so they do not all expire in one quarter. Committing to a bloated baseline locks in the waste: right-size first, commit second.",
        },
        { type: "h3", text: "Spot capacity for the right workloads" },
        {
          type: "p",
          text: "Spot capacity is heavily discounted and can be reclaimed on short notice — two minutes on AWS, around thirty seconds elsewhere. That suits CI runners, batch processing, media encoding, checkpointed training and stateless workers behind a queue. It does not suit anything holding session state in memory or a single-replica database. Diversify across instance types and zones so one pool being reclaimed cannot take the whole fleet, and handle the interruption notice rather than assuming it will not fire.",
        },
        { type: "h3", text: "Storage lifecycle instead of manual tidying" },
        {
          type: "p",
          text: "Object storage tiering pays off as a policy, not as a periodic clean-up. Note the constraints first: infrequent-access tiers carry minimum storage durations and per-object minimum billable sizes, and archive tiers add retrieval fees and latency measured in hours. Millions of small objects can cost more in an IA tier than in standard once minimums apply, and intelligent tiering charges a per-object monitoring fee at high object counts. A lifecycle rule is a few lines and removes the decision permanently:",
        },
        {
          type: "code",
          lang: "json",
          code: "{\n  \"Rules\": [\n    {\n      \"ID\": \"logs-tiering\",\n      \"Filter\": { \"Prefix\": \"logs/\" },\n      \"Status\": \"Enabled\",\n      \"Transitions\": [\n        { \"Days\": 30, \"StorageClass\": \"STANDARD_IA\" },\n        { \"Days\": 120, \"StorageClass\": \"GLACIER\" }\n      ],\n      \"Expiration\": { \"Days\": 730 },\n      \"AbortIncompleteMultipartUpload\": { \"DaysAfterInitiation\": 7 }\n    }\n  ]\n}",
        },
        {
          type: "p",
          text: "That last clause earns its place: failed multipart uploads leave partial data that is billed as storage but does not appear in a normal object listing, so on a busy bucket it accumulates unnoticed for years.",
        },
      ],
    },
    {
      heading: "Why nothing is fixable until cost is attributable",
      blocks: [
        {
          type: "p",
          text: "Cloud waste persists not because engineers are careless but because the bill arrives as one number addressed to nobody. Until each resource carries an owner, an environment and a service tag, no team can see its own spend, and a cost that belongs to everyone is optimised by no one.",
        },
        {
          type: "p",
          text: "Tagging has a detail that catches people out: on AWS, cost allocation tags must be activated in the billing console before they appear in cost reports, and activation is not retrospective — untagged history stays untagged. Turn them on before the audit. Enforce required tags at creation time through infrastructure-as-code policy rather than a wiki page, keep the vocabulary short (owner, environment, service, cost-centre), and accept that four enforced tags beat twelve aspirational.",
        },
        {
          type: "p",
          text: "With attribution in place, showback does most of the remaining work. A monthly figure per team, visible to that team, changes behaviour faster than any central mandate, because the engineers who see the number are the only people who know which resources are genuinely needed.",
        },
      ],
    },
    {
      heading: "How to run the first cloud cost optimisation pass",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Activate cost allocation tags and enable resource-level billing export first, so next month’s data is usable.",
            "Sort three months of spend by resource and take the top twenty lines. Everything below that waits.",
            "Delete first — orphaned volumes, dead snapshots, idle load balancers, unused IPs, finished environments. Deletion needs no planning.",
            "Right-size from measured p95 utilisation, and schedule non-production off outside working hours.",
            "Fix the structural charges: zone-aware placement, VPC endpoints, CDN for egress, trace sampling, log retention.",
            "Only now buy commitments, against the floor you have just lowered, laddered across terms.",
            "Set budget alerts and a per-service anomaly alert so the next regression surfaces in days, not in the next invoice.",
          ],
        },
        {
          type: "p",
          text: "Sequence matters more than technique. Every step except the last two makes the baseline smaller, and commitments bought against a fat baseline lock the fat in for years. Reverse the order and you book an impressive saving in month one, then spend three years paying for infrastructure you had already decided to remove.",
        },
        {
          type: "p",
          text: "If your bill has grown faster than your traffic and nobody can say precisely why, that is a solvable problem and usually a quick one to diagnose. We are glad to walk through a cloud cost optimisation review with your team and hand back the findings with the reasoning attached — talk to ApexStack about it.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much can you realistically save on a cloud bill?",
      answer:
        "It depends entirely on how the estate was built, so treat any headline percentage with suspicion. What is predictable is where the savings sit: mostly in a handful of line items — over-provisioned compute, always-on non-production environments, orphaned storage, data transfer and logging. Sort your bill by resource and inspect the top twenty lines. That exercise takes a day and gives you your own number rather than an industry average.",
    },
    {
      question: "What is the difference between reserved instances and savings plans?",
      answer:
        "Reserved instances commit you to a specific instance family, size and region in exchange for a discount. Savings plans commit you to a dollar-per-hour spend level and apply the discount across matching usage more flexibly. Reserved instances typically discount slightly more; savings plans survive architectural change better. If your workload may move instance family or shift to containers within the term, that flexibility is usually worth the smaller discount.",
    },
    {
      question: "Why is my AWS data transfer bill so high?",
      answer:
        "Three charges dominate. Traffic between availability zones in one region is billed in both directions, so cross-zone chatter between services and databases pays twice. NAT gateways charge hourly and per gigabyte processed, catching every private-subnet call to an external API or image registry. Internet egress is billed per gigabyte after a small free allowance. Zone-aware placement, VPC endpoints and a CDN in front of bulk egress address most of it.",
    },
    {
      question: "Are spot instances safe to use in production?",
      answer:
        "For the right workloads, yes. Spot capacity can be reclaimed on short notice — two minutes on AWS, around thirty seconds elsewhere — so it suits stateless workers behind a queue, CI runners, batch jobs and checkpointed training. It is unsuitable for single-replica databases or anything holding session state in memory. Diversify across instance types and availability zones so one capacity pool being reclaimed cannot take out the whole fleet.",
    },
    {
      question: "How do I stop cloud costs creeping back up after an audit?",
      answer:
        "Convert every one-off cleanup into a policy. Storage lifecycle rules instead of manual deletion, scheduled shutdown for non-production, required tags enforced at resource creation through infrastructure-as-code, per-team showback so spend has an owner, and anomaly alerts per service so a misconfigured job is caught in days. A one-off audit decays within a couple of quarters; policy holds because it does not rely on anyone remembering.",
    },
    {
      question: "Should I right-size before buying committed-use discounts?",
      answer:
        "Always. A commitment bought against an over-provisioned baseline locks that waste in for one to three years, and the discount makes the oversized resource look acceptable on the bill so nobody revisits it. Delete, right-size and schedule first, observe the new floor for a few weeks, then commit only to the level below which usage has not dropped, leaving the variable layer on on-demand or spot pricing.",
    },
  ],
};
