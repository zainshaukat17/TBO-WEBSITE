import type { Metadata } from "next";
import { Section, Kicker, Button, CornerBrackets, Card } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, plain-language pricing for TBO's home-services marketing system — no bundled surprises, no fabricated urgency.",
};

const tiers = [
  {
    name: "Foundation",
    price: "From $3,500",
    unit: "one-time build, plus a $750/mo maintenance retainer",
    description: "For contractors who need a real digital foundation before spending on ads.",
    includes: [
      "Conversion-first Website Design",
      "Technical SEO baseline and Google Business Profile setup",
      "Call tracking and analytics implementation",
      "Monthly maintenance and reporting",
    ],
  },
  {
    name: "Growth",
    price: "From $2,750/mo",
    unit: "plus ad spend, managed transparently",
    description: "The most common starting point — a website plus active demand generation.",
    includes: [
      "Everything in Foundation",
      "Google Ads and/or Local Service Ads management",
      "Ongoing SEO across service and location pages",
      "Fixed-format monthly reporting on cost per booked job",
    ],
    featured: true,
  },
  {
    name: "Full-Funnel",
    price: "From $5,500/mo",
    unit: "plus ad spend, managed transparently",
    description: "For contractors ready to run the complete documented system end to end.",
    includes: [
      "Everything in Growth",
      "AEO, GEO, and VEO visibility work",
      "Social media management, content strategy, and design/editing",
      "Lead nurturing and pipeline automation",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <Kicker tone="light">Pricing</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            Plain-language pricing. No bundled surprises.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">
            These are illustrative starting ranges, not a final quote. Every engagement is scoped
            against a real audit of your business before a number is proposed in writing.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.featured
                  ? "bg-ink text-white border-2 border-gold relative"
                  : "bg-white border border-hairline text-text"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 bg-gold text-ink text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Common
                </span>
              )}
              <h3 className={`font-display font-bold text-2xl ${tier.featured ? "text-white" : "text-ink"}`}>
                {tier.name}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${tier.featured ? "text-mist" : "text-steel"}`}>
                {tier.description}
              </p>
              <div className="mt-6">
                <div className={`font-display font-bold text-3xl ${tier.featured ? "text-gold" : "text-ink"}`}>
                  {tier.price}
                </div>
                <div className={`mt-1 text-xs ${tier.featured ? "text-mist" : "text-steel"}`}>{tier.unit}</div>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <Icon
                      name="check"
                      className={`h-4 w-4 shrink-0 mt-0.5 ${tier.featured ? "text-gold" : "text-gold-dark"}`}
                    />
                    <span className={tier.featured ? "text-cloud" : "text-text"}>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant={tier.featured ? "gold" : "outline-dark"} className="mt-8 w-full">
                Request This Scope
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-steel max-w-xl mx-auto">
          Ad spend is always billed separately, at cost, and reported line by line. We don&rsquo;t
          mark up media spend or bundle it into a management fee without disclosure.
        </p>
      </Section>

      <Section tone="white" className="border-y border-hairline">
        <Kicker>Pricing Philosophy</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance mb-10">
          Why we show ranges instead of a locked price list
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-display font-bold text-lg text-ink">Scope follows the audit</h3>
            <p className="mt-2 text-sm text-steel leading-relaxed">
              A single-location plumber and a five-state restoration company need different
              scopes. Pricing is proposed in writing after the audit, not before.
            </p>
          </Card>
          <Card>
            <h3 className="font-display font-bold text-lg text-ink">No long-term lock-in by default</h3>
            <p className="mt-2 text-sm text-steel leading-relaxed">
              Engagements run month to month after an initial evaluation period long enough to
              reach a stable data baseline — typically 60 to 90 days.
            </p>
          </Card>
          <Card>
            <h3 className="font-display font-bold text-lg text-ink">Every invoice is itemized</h3>
            <p className="mt-2 text-sm text-steel leading-relaxed">
              Management fees and media spend are always shown separately, so you can see exactly
              what you&rsquo;re paying for and what it produced.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="ink">
        <div className="rounded-2xl border border-ink-2 bg-ink-elevated p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            Get a written proposal, scoped to your trade and market.
          </h2>
          <div className="mt-8">
            <Button href="/contact" size="lg">Request a Marketing Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
