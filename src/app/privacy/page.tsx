import type { Metadata } from "next";
import { Section, Kicker, CornerBrackets } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TBO — The Brand Order collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <CornerBrackets />
        <div className="container-tbo relative pt-20 pb-14 md:pt-28 md:pb-16">
          <Kicker tone="light">Legal</Kicker>
          <h1 className="font-display font-bold text-4xl md:text-5xl max-w-2xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-mist">Last updated July 2026</p>
        </div>
      </section>

      <Section tone="paper">
        <div className="max-w-2xl space-y-8 text-sm text-text leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Information We Collect</h2>
            <p>
              When you submit a form on this site, we collect the information you provide directly
              — name, business name, contact details, trade, and service area — solely to respond
              to your request for a marketing audit or proposal. We also collect standard analytics
              data (pages visited, general location, device type) to understand how the site is
              used.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-ink mb-2">How We Use It</h2>
            <p>
              Information submitted through this site is used only to respond to your inquiry,
              prepare a proposal, and — if you become a client — deliver the services described in
              your agreement. We do not sell contact information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Cookies and Tracking</h2>
            <p>
              This site may use cookies and similar technologies for analytics and to support
              advertising campaign measurement, consistent with standard practice for a marketing
              agency site. You can control cookie behavior through your browser settings.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of any personal information we
              hold about you by contacting hello@thebrandorder.com. We will respond within a
              reasonable timeframe and in accordance with applicable U.S. and Canadian privacy law.
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Contact</h2>
            <p>Questions about this policy can be directed to hello@thebrandorder.com.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
