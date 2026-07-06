import type { Metadata } from "next";
import Link from "next/link";
import { Section, Kicker, Button, CornerBrackets } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, Google Ads, Meta Ads, Local Service Ads, SEO, AEO, GEO, VEO, social media, content, design, editing, and lead nurturing — for home-services contractors.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <Kicker tone="light">Services</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            Fourteen services. One documented system behind every one of them.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">
            We don&rsquo;t sell services individually and hope they add up. Every engagement is
            scoped from an audit of your specific trade, market, and goals — then built from the
            services below.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat}>
              <div className="flex items-baseline gap-3 mb-6">
                <h2 className="font-display font-bold text-2xl text-ink">{cat}</h2>
                <span className="h-[1px] flex-1 bg-hairline" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group rounded-xl border border-hairline bg-white p-7 hover:border-gold hover:shadow-lg transition-all flex flex-col"
                    >
                      <IconTile name={s.icon} />
                      <h3 className="mt-4 font-display font-bold text-xl text-ink">{s.name}</h3>
                      <p className="mt-2 text-sm text-steel leading-relaxed flex-1">{s.summary}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark group-hover:gap-2.5 transition-all">
                        See how it works <Icon name="arrowRight" className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="rounded-2xl border border-ink-2 bg-ink-elevated p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            Not sure which services your trade actually needs?
          </h2>
          <p className="mt-4 text-mist max-w-lg mx-auto">
            That&rsquo;s what the audit is for. We&rsquo;ll tell you plainly, in writing.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Request a Marketing Audit
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
