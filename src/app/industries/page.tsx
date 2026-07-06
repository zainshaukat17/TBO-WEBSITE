import type { Metadata } from "next";
import Link from "next/link";
import { Section, Kicker, Button, CornerBrackets } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TBO serves twelve home-services trades — HVAC, electrical, flooring, home inspection, lawn care, plumbing, remodeling, restoration, roofing, solar, painting, and pest control.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <Kicker tone="light">Industries</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            Twelve trades. Zero generalist guesswork.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">
            We work exclusively with home-services contractors, which means every audit, page,
            and campaign starts from how your specific trade actually gets searched for and sold.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group rounded-xl border border-hairline bg-white p-7 hover:border-gold hover:shadow-lg transition-all flex flex-col"
            >
              <IconTile name={ind.icon} />
              <h2 className="mt-4 font-display font-bold text-xl text-ink">{ind.pluralName}</h2>
              <p className="mt-2 text-sm text-steel leading-relaxed flex-1">{ind.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark group-hover:gap-2.5 transition-all">
                See the approach <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="rounded-2xl border border-ink-2 bg-ink-elevated p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            Don&rsquo;t see your exact trade listed?
          </h2>
          <p className="mt-4 text-mist max-w-lg mx-auto">
            We&rsquo;re expanding deliberately, one documented trade at a time. Tell us about your
            business — we&rsquo;ll tell you honestly if we&rsquo;re the right fit yet.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get in Touch</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
