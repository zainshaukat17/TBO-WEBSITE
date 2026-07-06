export const processStages = [
  {
    step: "01",
    name: "Audit",
    title: "We document what's actually happening before we propose anything.",
    description:
      "Every engagement opens with a full audit of the current site, campaigns, rankings, and lead flow — a documented starting point, not a guess.",
  },
  {
    step: "02",
    name: "Strategy",
    title: "A written plan tied to your services, service area, and goals.",
    description:
      "Findings turn into a specific plan: which channels, which service lines, which service areas, and what a successful first 90 days looks like.",
  },
  {
    step: "03",
    name: "Execution",
    title: "Work ships against the plan, on a fixed schedule.",
    description:
      "Builds, campaigns, and content go live on documented timelines — the same sequence, every time, for every client.",
  },
  {
    step: "04",
    name: "Reporting",
    title: "One fixed-format report, on the same date, every cycle.",
    description:
      "No dashboards to log into and decode. A plain-language report shows what happened, what it cost, and what it produced.",
  },
  {
    step: "05",
    name: "Iteration",
    title: "The plan gets updated based on what the data actually shows.",
    description:
      "Every reporting cycle ends in a specific decision — what continues, what changes, and what gets cut. Documented, not informal.",
  },
] as const;

export const coreValues = [
  {
    name: "Documented Process",
    description: "Every deliverable follows a written, repeatable methodology.",
  },
  {
    name: "Radical Transparency",
    description: "Trust earned through visible reporting and plain-language pricing.",
  },
  {
    name: "Trade Fluency",
    description: "We speak the specific language of each trade we serve.",
  },
  {
    name: "Operator Respect",
    description: "We treat every contractor as the expert practitioner they are.",
  },
] as const;

export const personalityTraits = [
  { trait: "Disciplined", is: "Structured, methodical, process-driven", isNot: "Rigid, bureaucratic, slow to act" },
  { trait: "Direct", is: "Plain-spoken, specific, evidence-led", isNot: "Blunt to the point of coldness" },
  { trait: "Confident", is: "Assured in our system and results", isNot: "Arrogant, dismissive of concerns" },
  { trait: "Grounded", is: "Trade-fluent, practical, no fluff", isNot: "Casual to the point of unprofessional" },
  { trait: "Accountable", is: "Transparent about wins, losses, timelines", isNot: "Defensive or evasive under scrutiny" },
] as const;
