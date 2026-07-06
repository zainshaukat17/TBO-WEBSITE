import type { Metadata } from "next";
import { Section, Kicker, CornerBrackets } from "@/components/ui";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "TBO's accessibility commitments for U.S. (ADA) and Canadian (AODA) standards.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-14 md:pt-28 md:pb-16">
          <Kicker tone="light">Legal</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            Accessibility Statement
          </h1>
        </div>
      </section>

      <Section tone="paper">
        <div className="max-w-2xl space-y-8 text-sm text-text leading-relaxed">
          <p>
            TBO serves a cross-border audience spanning ADA (U.S.) and AODA (Ontario, Canada)
            jurisdictions. We hold our own site — and every site we build for clients — to the
            following minimum standards:
          </p>
          <ul className="space-y-3 list-none">
            {[
              "Minimum contrast ratio of 4.5:1 for body text and 3:1 for large text (18pt+ or 14pt+ bold).",
              "Every interactive element has a visible focus state — never color alone.",
              "All images carry descriptive alt text; all video carries captions.",
              "Navigation is fully operable by keyboard, without a mouse.",
              "Case studies and testimonials represent both U.S. and Canadian markets proportionately.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold-dark font-bold">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            We target WCAG 2.1 AA conformance across this site. If you encounter a barrier using
            this site with assistive technology, contact hello@thebrandorder.com and we will
            address it directly.
          </p>
        </div>
      </Section>
    </>
  );
}
