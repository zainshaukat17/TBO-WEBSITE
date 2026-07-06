"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { industries } from "@/data/industries";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your CRM, form backend, or email service before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-hairline bg-white p-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 mb-4">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-dark" fill="none">
            <polyline points="5,13 9,17 19,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-ink">Request received.</h3>
        <p className="mt-2 text-sm text-steel leading-relaxed max-w-sm mx-auto">
          We document every request the same way — expect a reply within one business day with
          next steps for your audit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-hairline bg-white p-7 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field label="Business name" name="business" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="trade" className="block text-xs font-bold uppercase tracking-wider text-steel mb-2">
            Trade
          </label>
          <select
            id="trade"
            name="trade"
            required
            className="w-full rounded-md border border-hairline px-3.5 py-2.5 text-sm text-text bg-paper focus:border-gold outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select your trade
            </option>
            {industries.map((ind) => (
              <option key={ind.slug} value={ind.name}>
                {ind.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <Field label="Service area (city/state or province)" name="serviceArea" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-steel mb-2">
          What&rsquo;s the biggest gap in your marketing right now?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-hairline px-3.5 py-2.5 text-sm text-text bg-paper focus:border-gold outline-none resize-none"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Request a Marketing Audit
      </Button>
      <p className="text-xs text-steel">
        No pressure, no fabricated urgency. We&rsquo;ll reply with real next steps, in writing.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider text-steel mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-hairline px-3.5 py-2.5 text-sm text-text bg-paper focus:border-gold outline-none"
      />
    </div>
  );
}
