import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Kicker, Button, CornerBrackets, Card } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { services, getServiceBySlug } from "@/data/services";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedIndustries = industries.filter((i) => i.featuredServices.includes(service.slug));
  const otherServices = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="flex items-center gap-2 text-xs text-mist mb-6">
            <Link href="/services" className="hover:text-gold">Services</Link>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </div>
          <IconTile name={service.icon} tone="dark" />
          <Kicker tone="light" className="mt-6">{service.category}</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            {service.name}
          </h1>
          <p className="mt-4 text-xl text-gold font-display">{service.tagline}</p>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">{service.summary}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Request a Proposal</Button>
            <Button href="/process" variant="outline" size="lg">See our process</Button>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <Section tone="paper">
        <Kicker>The Problem, Plainly</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance">
          What usually brings a contractor to this page
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {service.painPoints.map((p) => (
            <Card key={p}>
              <p className="text-sm text-text leading-relaxed">{p}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section tone="white" className="border-y border-hairline">
        <Kicker>What&rsquo;s Included</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance">
          {service.name}, broken into what you actually receive
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
          {service.deliverables.map((d) => (
            <div key={d.title} className="flex gap-4">
              <div className="mt-1 h-7 w-7 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                <Icon name="check" className="h-4 w-4 text-gold-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-ink text-lg">{d.title}</h3>
                <p className="mt-1.5 text-sm text-steel leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* APPROACH */}
      <Section tone="ink">
        <Kicker tone="light">How We Run It</Kicker>
        <h2 className="font-display font-bold text-3xl text-balance max-w-xl">
          The documented process, applied to {service.name}
        </h2>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {service.approach.map((a) => (
            <div key={a.step}>
              <div className="font-display font-bold text-4xl text-ink-4">{a.step}</div>
              <h3 className="mt-3 font-display font-bold text-lg">{a.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-xl border border-ink-2 bg-ink-elevated p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
          <div>
            <div className="font-display font-bold text-3xl text-gold">{service.stat.value}</div>
            <div className="mt-1 text-sm text-mist">{service.stat.label}</div>
          </div>
          <Button href="/contact">Request a Proposal</Button>
        </div>
      </Section>

      {/* RELATED INDUSTRIES */}
      {relatedIndustries.length > 0 && (
        <Section tone="paper">
          <Kicker>Where This Matters Most</Kicker>
          <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance">
            Trades where {service.name} carries the most weight
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-hairline bg-white p-5 hover:border-gold hover:shadow-lg transition-all"
              >
                <IconTile name={ind.icon} />
                <div>
                  <h3 className="font-display font-bold text-ink text-sm">{ind.name}</h3>
                  <span className="text-xs text-gold-dark font-bold inline-flex items-center gap-1">
                    View page <Icon name="arrowRight" className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section tone="white" className="border-y border-hairline">
        <Kicker>Questions</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance mb-10">
          Frequently asked about {service.name}
        </h2>
        <div className="max-w-3xl space-y-6">
          {service.faqs.map((f) => (
            <div key={f.q} className="border-b border-hairline pb-6">
              <h3 className="font-display font-bold text-ink text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OTHER SERVICES */}
      {otherServices.length > 0 && (
        <Section tone="paper">
          <Kicker>Related Services</Kicker>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-hairline bg-white p-6 hover:border-gold hover:shadow-lg transition-all"
              >
                <IconTile name={s.icon} />
                <h3 className="mt-4 font-display font-bold text-lg text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section tone="ink">
        <div className="rounded-2xl border border-ink-2 bg-ink-elevated p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            Let&rsquo;s scope {service.name} against a real audit of your business.
          </h2>
          <div className="mt-8">
            <Button href="/contact" size="lg">Request a Marketing Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
