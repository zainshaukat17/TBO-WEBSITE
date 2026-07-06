import type { Metadata } from "next";
import { Section, Kicker, Button, CornerBrackets } from "@/components/ui";
import { Icon } from "@/components/icons";
import { processStages } from "@/data/process";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Audit, strategy, execution, reporting, iteration — the same five-stage documented process behind every TBO engagement, every client, every time.",
};

const stageDetails: Record<string, { timeline: string; deliverables: string[] }> = {
  Audit: {
    timeline: "Weeks 1–2",
    deliverables: [
      "Full technical review of the current site, campaigns, and rankings",
      "Call tracking and lead-source review, where data exists",
      "Competitive review of the top-performing businesses in your market",
      "A written audit document — not a verbal summary",
    ],
  },
  Strategy: {
    timeline: "Weeks 2–3",
    deliverables: [
      "A documented 90-day plan tied to your specific services and service areas",
      "Channel and budget recommendations, with the reasoning shown, not just the number",
      "A defined starting benchmark for cost per lead and cost per booked job",
      "Sign-off before a single dollar of ad spend or build hour begins",
    ],
  },
  Execution: {
    timeline: "Ongoing, weeks 3+",
    deliverables: [
      "Builds, campaigns, and content shipped on a documented, fixed schedule",
      "Weekly internal checkpoints during any active build or launch phase",
      "A single point of contact who can answer where things stand, without a runaround",
      "No scope changes without a documented conversation first",
    ],
  },
  Reporting: {
    timeline: "Same date, every cycle",
    deliverables: [
      "One fixed-format report — spend, leads, cost per lead, cost per booked job",
      "Plain-language explanation of what happened and why, not a raw dashboard export",
      "Wins and misses both included, every time",
      "Delivered on the same date every cycle, not \"whenever it's ready\"",
    ],
  },
  Iteration: {
    timeline: "Every reporting cycle",
    deliverables: [
      "A specific decision on what continues, what changes, and what gets cut",
      "Updated targets when the data supports moving them",
      "A documented record of every change made and why, over the life of the account",
      "No quiet strategy drift — every shift is written down and explained",
    ],
  },
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <Kicker tone="light">Our Process</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            &ldquo;Documented process&rdquo; is not a slogan. It&rsquo;s the operating principle.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">
            Every engagement runs on the same five-stage sequence, in the same order, for every
            client, every time. Here is exactly what happens at each stage.
          </p>
        </div>
      </section>

      {processStages.map((stage, i) => {
        const details = stageDetails[stage.name];
        const tone = i % 2 === 0 ? "paper" : "white";
        return (
          <Section key={stage.step} tone={tone} className={i % 2 === 1 ? "border-y border-hairline" : undefined}>
            <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-10 items-start">
              <div className="font-display font-bold text-6xl md:text-7xl text-hairline lg:w-24">
                {stage.step}
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark mb-2">
                  {stage.name} · {details.timeline}
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-ink text-balance">
                  {stage.title}
                </h2>
                <p className="mt-4 text-steel leading-relaxed max-w-md">{stage.description}</p>
              </div>
              <ul className="space-y-3 lg:pt-1">
                {details.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-text leading-relaxed">
                    <Icon name="check" className="h-4 w-4 text-gold-dark shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        );
      })}

      <Section tone="ink">
        <div className="rounded-2xl border border-ink-2 bg-ink-elevated p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            The process doesn&rsquo;t change based on the trade. The plan built inside it does.
          </h2>
          <p className="mt-4 text-mist max-w-lg mx-auto">
            See how it applies to your specific trade, or request an audit to see stage one in action.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/industries" size="lg">Find Your Trade</Button>
            <Button href="/contact" variant="outline" size="lg">Request a Marketing Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
