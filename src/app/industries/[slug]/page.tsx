import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Kicker, Button, CornerBrackets, Stat } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { industries, getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.pluralName} Marketing`,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const featured = industry.featuredServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const otherIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="flex items-center gap-2 text-xs text-mist mb-6">
            <Link href="/industries" className="hover:text-gold">Industries</Link>
            <span>/</span>
            <span className="text-white">{industry.name}</span>
          </div>
          <IconTile name={industry.icon} tone="dark" />
          <Kicker tone="light" className="mt-6">Marketing for {industry.pluralName}</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            {industry.pluralName} deserve a trade-fluent marketing partner.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">{industry.summary}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Request a Marketing Audit</Button>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <Section tone="paper">
        <Kicker>What We See in This Trade</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance">
          The recurring challenges behind most {industry.name} marketing
        </h2>
        <div className="mt-10 space-y-5">
          {industry.challenges.map((c, i) => (
            <div key={c} className="flex gap-5 items-start rounded-xl border border-hairline bg-white p-6">
              <span className="font-display font-bold text-3xl text-hairline shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-text leading-relaxed pt-1">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* APPROACH */}
      <Section tone="ink">
        <Kicker tone="light">Our Approach</Kicker>
        <h2 className="font-display font-bold text-3xl text-balance max-w-xl">
          How the documented process adapts to {industry.name}
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {industry.approach.map((a) => (
            <div key={a.title} className="rounded-xl border border-ink-2 bg-ink-elevated p-7">
              <h3 className="font-display font-bold text-lg text-white">{a.title}</h3>
              <p className="mt-3 text-sm text-mist leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-10 max-w-xl">
          {industry.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} tone="dark" />
          ))}
        </div>
      </Section>

      {/* FEATURED SERVICES */}
      <Section tone="paper">
        <Kicker>Services We Lead With</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance">
          Where {industry.name} accounts typically start
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl border border-hairline bg-white p-6 hover:border-gold hover:shadow-lg transition-all flex flex-col"
            >
              <IconTile name={s.icon} />
              <h3 className="mt-4 font-display font-bold text-base text-ink">{s.name}</h3>
              <p className="mt-2 text-xs text-steel leading-relaxed flex-1">{s.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark group-hover:gap-2.5 transition-all">
                Learn more <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" className="border-y border-hairline">
        <Kicker>Questions</Kicker>
        <h2 className="font-display font-bold text-3xl text-ink max-w-xl text-balance mb-10">
          Frequently asked by {industry.pluralName}
        </h2>
        <div className="max-w-3xl space-y-6">
          {industry.faqs.map((f) => (
            <div key={f.q} className="border-b border-hairline pb-6">
              <h3 className="font-display font-bold text-ink text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OTHER INDUSTRIES */}
      <Section tone="paper">
        <Kicker>Other Trades We Serve</Kicker>
        <div className="grid sm:grid-cols-3 gap-5">
          {otherIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group rounded-xl border border-hairline bg-white p-6 hover:border-gold hover:shadow-lg transition-all"
            >
              <IconTile name={ind.icon} />
              <h3 className="mt-4 font-display font-bold text-lg text-ink">{ind.name}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{ind.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="rounded-2xl border border-ink-2 bg-ink-elevated p-10 md:p-14 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto text-balance">
            Let&rsquo;s audit your {industry.name} marketing against what&rsquo;s actually working.
          </h2>
          <div className="mt-8">
            <Button href="/contact" size="lg">Request a Marketing Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
