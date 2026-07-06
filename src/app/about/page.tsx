import type { Metadata } from "next";
import { Section, Kicker, Button, CornerBrackets, Card } from "@/components/ui";
import { Icon } from "@/components/icons";
import { coreValues, personalityTraits } from "@/data/process";

export const metadata: Metadata = {
  title: "About",
  description:
    "TBO — The Brand Order is a documented, repeatable marketing system built exclusively for home-services contractors across the U.S. and Canada.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <Kicker tone="light">About TBO</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            The Order is the standard. Not a slogan — an operating principle.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">
            TBO — The Brand Order — is a documented, repeatable marketing system built for one
            kind of client: home-services contractors across the United States and Canada.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <Section tone="paper">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Kicker>Mission</Kicker>
            <h2 className="font-display font-bold text-3xl text-ink text-balance">
              A documented, repeatable system for turning local demand into booked jobs.
            </h2>
            <p className="mt-5 text-steel leading-relaxed">
              We exist to give U.S. and Canadian home-services contractors — in HVAC, roofing,
              solar, lawn care, plumbing, remodeling, painting, flooring, home inspection, and
              electrical work, among other trades — a documented, repeatable system for
              converting local demand into booked jobs, delivered with the discipline of an
              institution and the responsiveness of a specialist partner.
            </p>
          </div>
          <div>
            <Kicker>Vision</Kicker>
            <h2 className="font-display font-bold text-3xl text-ink text-balance">
              To become the standard serious contractors measure other agencies against.
            </h2>
            <p className="mt-5 text-steel leading-relaxed">
              We&rsquo;re building toward the recognized benchmark for disciplined, cross-border
              contractor growth partnerships — expanding deliberately from our founding trades
              into a marketing institution built specifically for the trades economy.
            </p>
          </div>
        </div>
      </Section>

      {/* PERSONA */}
      <Section tone="white" className="border-y border-hairline">
        <Kicker>Who We&rsquo;re Built For</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance mb-10">
          Three things we design around, every time
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Time-poor",
              body: "Owner-operators who vet vendors nights and weekends. Everything we build has to communicate credibility fast — most of it in the first few seconds of a visit.",
            },
            {
              title: "Risk-aware",
              body: "Contractors are rightly cautious of marketing promises that don't hold up. We front-load proof: documented process, transparent pricing, honest reporting.",
            },
            {
              title: "Trade-fluent by necessity",
              body: "A plumber and a solar installer are sold to differently. We build campaigns and content around the specific way each trade actually gets hired.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="font-display font-bold text-lg text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-steel leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section tone="paper">
        <Kicker>Core Values</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance mb-10">
          What actually governs the work
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((v) => (
            <Card key={v.name}>
              <div className="h-9 w-9 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <Icon name="checkCircle" className="h-5 w-5 text-gold-dark" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">{v.name}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{v.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PERSONALITY */}
      <Section tone="ink">
        <Kicker tone="light">Brand Personality</Kicker>
        <h2 className="font-display font-bold text-3xl max-w-2xl text-balance">
          Institutional discipline in how we operate. Peer-level tone in how we talk.
        </h2>
        <p className="mt-4 max-w-xl text-mist leading-relaxed">
          The rigor of a professional, the directness of a fellow tradesperson — not the
          arrogance of a corporate vendor, and not the informality of a hobbyist.
        </p>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr className="text-left">
                <th className="text-[11px] font-bold uppercase tracking-wider text-white bg-ink-2 px-4 py-3 border border-ink-2">
                  Trait
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wider text-white bg-ink-2 px-4 py-3 border border-ink-2">
                  Is
                </th>
                <th className="text-[11px] font-bold uppercase tracking-wider text-white bg-ink-2 px-4 py-3 border border-ink-2">
                  Is Not
                </th>
              </tr>
            </thead>
            <tbody>
              {personalityTraits.map((t, i) => (
                <tr key={t.trait} className={i % 2 === 1 ? "bg-ink-elevated" : ""}>
                  <td className="px-4 py-3.5 border border-ink-2 font-bold text-gold text-sm">{t.trait}</td>
                  <td className="px-4 py-3.5 border border-ink-2 text-sm text-cloud">{t.is}</td>
                  <td className="px-4 py-3.5 border border-ink-2 text-sm text-mist">{t.isNot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CROSS BORDER */}
      <Section tone="paper">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Kicker>Built Cross-Border</Kicker>
            <h2 className="font-display font-bold text-3xl text-ink text-balance">
              Operating across the border is an engineering constraint. We solve it with process.
            </h2>
          </div>
          <p className="text-steel leading-relaxed">
            We counter distance with radical operational transparency — documented deliverables,
            scheduled reporting cadences, and structural discipline that a single-founder local
            competitor can&rsquo;t match at scale. U.S. clients get American spelling, MM/DD/YYYY
            dates, and USD pricing. Canadian clients get their own conventions matched, CAD
            pricing, and bilingual disclosure wherever it&rsquo;s legally required. Every case
            study and testimonial we publish represents both markets proportionately, and every
            page we ship meets WCAG AA contrast standards under both ADA and AODA guidance.
          </p>
        </div>
      </Section>

      <Section tone="ink">
        <div className="rounded-2xl border border-ink-2 bg-ink-elevated p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            Read the documented process before you talk to us.
          </h2>
          <p className="mt-4 text-mist max-w-lg mx-auto">
            It&rsquo;s the same process every client runs on — see it in full.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/process" size="lg">See Our Process</Button>
            <Button href="/contact" variant="outline" size="lg">Get in Touch</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
