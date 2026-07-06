import type { Metadata } from "next";
import { Section, Kicker, CornerBrackets } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { processStages } from "@/data/process";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a marketing audit from TBO — Contractor Growth Partners for home-services businesses across the U.S. and Canada.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-16 md:pt-28 md:pb-20">
          <Kicker tone="light">Contact</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            Request a marketing audit. Get a written answer, not a sales pitch.
          </h1>
          <p className="mt-5 max-w-xl text-mist leading-relaxed">
            Tell us about your trade and your market. We&rsquo;ll tell you plainly whether
            we&rsquo;re the right fit — and what stage one of the process looks like for you.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <Kicker>Direct Contact</Kicker>
            <h2 className="font-display font-bold text-2xl text-ink mb-6">Reach us directly</h2>
            <div className="space-y-4 mb-10">
              <a href="mailto:hello@thebrandorder.com" className="flex items-center gap-3 text-ink hover:text-gold-dark transition-colors">
                <span className="h-10 w-10 rounded-full bg-white border border-hairline flex items-center justify-center">
                  <Icon name="mail" className="h-4.5 w-4.5 text-gold-dark" />
                </span>
                hello@thebrandorder.com
              </a>
              <a href="tel:+18005550143" className="flex items-center gap-3 text-ink hover:text-gold-dark transition-colors">
                <span className="h-10 w-10 rounded-full bg-white border border-hairline flex items-center justify-center">
                  <Icon name="phone" className="h-4.5 w-4.5 text-gold-dark" />
                </span>
                +1 (800) 555-0143
              </a>
              <div className="flex items-center gap-3 text-ink">
                <span className="h-10 w-10 rounded-full bg-white border border-hairline flex items-center justify-center">
                  <Icon name="mapPin" className="h-4.5 w-4.5 text-gold-dark" />
                </span>
                Remote-first — serving contractors across the U.S. and Canada
              </div>
              <div className="flex items-center gap-3 text-ink">
                <span className="h-10 w-10 rounded-full bg-white border border-hairline flex items-center justify-center">
                  <Icon name="clock" className="h-4.5 w-4.5 text-gold-dark" />
                </span>
                Replies within one business day, documented
              </div>
            </div>

            <Kicker>What Happens Next</Kicker>
            <ol className="space-y-4">
              {processStages.slice(0, 2).map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="font-display font-bold text-2xl text-hairline">{s.step}</span>
                  <div>
                    <div className="font-bold text-ink text-sm">{s.name}</div>
                    <p className="text-sm text-steel mt-0.5 leading-relaxed">{s.description}</p>
                  </div>
                </li>
              ))}
              <li className="flex gap-4">
                <span className="font-display font-bold text-2xl text-hairline">→</span>
                <p className="text-sm text-steel leading-relaxed pt-1">
                  See the full five-stage process on our <a href="/process" className="text-gold-dark font-bold">Process page</a>.
                </p>
              </li>
            </ol>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
