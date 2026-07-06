import type { Metadata } from "next";
import { Section, Kicker, Button, CornerBrackets } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See exactly what a documented TBO engagement looks like — the audit format, the reporting template, and the process behind every founding partner account.",
};

const sampleReportRows = [
  { metric: "Ad Spend", value: "Tracked to the dollar, by campaign" },
  { metric: "Leads", value: "Tagged real vs. disqualified, by source" },
  { metric: "Cost per Booked Job", value: "The one number every other metric serves" },
  { metric: "Ranking Movement", value: "Tracked keyword by keyword, month over month" },
  { metric: "Changes Made", value: "Documented — what changed, and why" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <Kicker tone="light">Case Studies</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            An honest word before you scroll further.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">
            TBO is onboarding its founding cohort of contractor partners now. We&rsquo;d rather
            tell you that plainly than recycle borrowed numbers or stage a testimonial. Here is
            what we can show you instead: exactly how a documented engagement works.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <Kicker>Why We Don&rsquo;t Publish Fabricated Numbers</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-2xl text-balance">
          Radical transparency means telling you what we don&rsquo;t have yet, too.
        </h2>
        <p className="mt-5 max-w-2xl text-steel leading-relaxed">
          Our brand standard bans unqualified superlatives without a cited source — the same
          standard applies to our own case studies page. Rather than publish generic
          &ldquo;300% ROI&rdquo; claims with no attribution, we&rsquo;re showing you the actual
          documentation every founding partner receives, so you can judge the system on its
          merits before a single result exists to point to.
        </p>
      </Section>

      <Section tone="white" className="border-y border-hairline">
        <Kicker>Illustrative Sample</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance mb-3">
          The reporting format every account receives
        </h2>
        <p className="text-sm text-steel mb-10 max-w-xl">
          This is the structure, not fabricated figures from a real account — every founding
          partner sees their own real numbers in this exact format, every cycle.
        </p>
        <div className="overflow-x-auto rounded-xl border border-hairline">
          <table className="w-full border-collapse min-w-[520px]">
            <thead>
              <tr>
                <th className="text-left text-[11px] font-bold uppercase tracking-wider text-white bg-ink px-5 py-3">
                  Reported Metric
                </th>
                <th className="text-left text-[11px] font-bold uppercase tracking-wider text-white bg-ink px-5 py-3">
                  What It Shows
                </th>
              </tr>
            </thead>
            <tbody>
              {sampleReportRows.map((row, i) => (
                <tr key={row.metric} className={i % 2 === 1 ? "bg-paper" : "bg-white"}>
                  <td className="px-5 py-4 border-t border-hairline font-bold text-ink text-sm">{row.metric}</td>
                  <td className="px-5 py-4 border-t border-hairline text-sm text-steel">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="ink">
        <Kicker tone="light">What Founding Partners Get</Kicker>
        <h2 className="font-display font-bold text-3xl max-w-xl text-balance">
          First documentation, then a real track record built alongside you
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Full visibility from day one",
              body: "Every audit finding, every plan decision, and every report is shared in writing — nothing is summarized down to a slide.",
            },
            {
              title: "Founding-cohort pricing",
              body: "Early trade partners are priced to reflect that we're building a track record together, documented in the proposal itself.",
            },
            {
              title: "A say in what gets measured",
              body: "You help define what a booked job and a qualified lead mean for your business before reporting begins, not after.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-ink-2 bg-ink-elevated p-7">
              <Icon name="checkCircle" className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display font-bold text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="rounded-2xl bg-ink text-white p-10 md:p-14 text-center relative overflow-hidden">
          <CornerBrackets />
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            Be one of the first documented results on this page.
          </h2>
          <p className="mt-4 text-mist max-w-lg mx-auto">
            Apply for the founding cohort and see the exact audit and reporting format before you commit to anything.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Apply for the Founding Cohort</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
