import Link from "next/link";
import { Section, Kicker, Button, CornerBrackets, Stat, Pill, Card } from "@/components/ui";
import { Icon, IconTile } from "@/components/icons";
import { services, serviceCategories } from "@/data/services";
import { industries } from "@/data/industries";
import { processStages, coreValues } from "@/data/process";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[420px] h-[420px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle at top right, #D9992E, transparent 70%)" }}
        />
        <div className="container-tbo relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl">
            <Kicker tone="light">Contractor Growth Partners</Kicker>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-balance">
              A documented marketing system, built for home-services contractors.
            </h1>
            <p className="mt-6 text-lg text-mist max-w-xl leading-relaxed">
              Websites, paid ads, SEO, and AI search visibility, run on one repeatable process —
              audit, strategy, execution, reporting, iteration — for HVAC, roofing, plumbing, solar,
              and eight more trades across the U.S. and Canada.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                Request a Marketing Audit
              </Button>
              <Button href="/process" variant="outline" size="lg">
                See Our Process
              </Button>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-2.5">
            {industries.map((ind) => (
              <Pill key={ind.slug} tone="dark">
                {ind.name}
              </Pill>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE PILLARS */}
      <Section tone="paper">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Kicker>What We Run</Kicker>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink text-balance">
              Fourteen services. One documented system.
            </h2>
          </div>
          <p className="max-w-md text-steel text-sm leading-relaxed">
            Every engagement pulls from the same set of disciplined services — mixed and
            sequenced by what your trade and market actually need, not a one-size template.
          </p>
        </div>

        <div className="space-y-12">
          {serviceCategories.map((cat) => (
            <div key={cat}>
              <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-dark mb-4">
                {cat}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group rounded-xl border border-hairline bg-white p-6 hover:border-gold hover:shadow-lg transition-all duration-200 flex flex-col"
                    >
                      <IconTile name={s.icon} />
                      <h3 className="mt-4 font-display font-bold text-lg text-ink">{s.name}</h3>
                      <p className="mt-2 text-sm text-steel leading-relaxed flex-1">{s.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark group-hover:gap-2.5 transition-all">
                        Learn more <Icon name="arrowRight" className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="ink">
        <Kicker tone="light">The Order of Operations</Kicker>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-balance max-w-xl">
          The same five-stage process, every client, every time.
        </h2>
        <p className="mt-4 max-w-xl text-mist leading-relaxed">
          &ldquo;Documented process&rdquo; is not a slogan here — it is the operating principle.
          Every engagement runs in this sequence.
        </p>

        <div className="mt-14 grid md:grid-cols-5 gap-6">
          {processStages.map((stage, i) => (
            <div key={stage.step} className="relative">
              <div className="font-display font-bold text-5xl text-ink-4">{stage.step}</div>
              <h3 className="mt-3 font-display font-bold text-lg text-white">{stage.name}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{stage.description}</p>
              {i < processStages.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:block absolute top-6 -right-3 h-[1px] w-6 bg-ink-4"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Button href="/process" variant="outline">
            See the full process
          </Button>
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section tone="paper">
        <Kicker>Why TBO</Kicker>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink text-balance max-w-xl">
          Institutional discipline. Trade-fluent execution.
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* STATS / OPERATIONAL COMMITMENTS */}
      <Section tone="white" className="border-y border-hairline">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value="12" label="Home-services trades served as a specialist, not a generalist" />
          <Stat value="5" label="Documented process stages, the same for every client" />
          <Stat value="1" label="Fixed-format report, sent on the same date every cycle" />
          <Stat value="60/30/10" label="Transparent color and — just as important — pricing discipline" />
        </div>
      </Section>

      {/* INDUSTRIES PREVIEW */}
      <Section tone="paper">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Kicker>Who We Serve</Kicker>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink text-balance">
              Twelve trades. Zero generalist guesswork.
            </h2>
          </div>
          <Button href="/industries" variant="outline-dark">
            View all industries
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-hairline bg-white p-5 hover:border-gold hover:shadow-lg transition-all"
            >
              <IconTile name={ind.icon} />
              <div>
                <h3 className="font-display font-bold text-ink">{ind.name}</h3>
                <span className="text-xs text-gold-dark font-bold inline-flex items-center gap-1 mt-0.5">
                  View page <Icon name="arrowRight" className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FOUNDING PARTNER PROGRAM */}
      <Section tone="ink">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Kicker tone="light">Founding Partner Program</Kicker>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-balance">
              We&rsquo;re building our founding cohort across ten trades — with full documentation, from day one.
            </h2>
            <p className="mt-5 text-mist leading-relaxed max-w-xl">
              Rather than recycle borrowed numbers, we&rsquo;d rather show you exactly how we work
              before you sign anything: the audit format, the reporting template, and the process
              your account will run on. Every founding partner gets that visibility first.
            </p>
            <div className="mt-8">
              <Button href="/contact">Apply for the Founding Cohort</Button>
            </div>
          </div>
          <div className="rounded-xl border border-ink-2 bg-ink-elevated p-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-5">
              What you see before you sign
            </div>
            <ul className="space-y-4">
              {[
                "A full audit of your current site, ads, and rankings — documented, not summarized.",
                "The exact reporting template your account will receive, every cycle.",
                "A written 90-day plan tied to your specific services and service area.",
                "Transparent, plain-language pricing with no bundled surprises.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-cloud leading-relaxed">
                  <Icon name="check" className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section tone="paper">
        <div className="rounded-2xl bg-ink text-white p-10 md:p-16 relative overflow-hidden text-center">
          <CornerBrackets />
          <h2 className="font-display font-bold text-3xl md:text-4xl max-w-2xl mx-auto text-balance">
            Let&rsquo;s document what a documented marketing system looks like for your trade.
          </h2>
          <p className="mt-4 text-mist max-w-xl mx-auto">
            A single call, a real audit, and a written plan — no pressure, no fabricated urgency.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Request a Marketing Audit
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
