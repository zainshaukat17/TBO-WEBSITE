"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui";
import { services, serviceCategories } from "@/data/services";
import { industries } from "@/data/industries";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
];

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<"services" | "industries" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"services" | "industries" | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-ink-2">
      <div className="container-tbo flex items-center justify-between h-20">
        <Logo variant="light" />

        <nav
          className="hidden lg:flex items-center gap-1 text-sm"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="relative" onMouseEnter={() => setOpenMenu("services")}>
            <button
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-md font-bold uppercase tracking-wide text-xs transition-colors ${
                openMenu === "services" ? "text-gold" : "text-white hover:text-gold"
              }`}
            >
              Services
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                <polyline points="6,9 12,15 18,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {openMenu === "services" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px]">
                <div className="rounded-xl border border-ink-2 bg-ink-elevated shadow-2xl p-6 grid grid-cols-3 gap-x-6 gap-y-5">
                  {serviceCategories.map((cat) => (
                    <div key={cat}>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-dark mb-2.5">
                        {cat}
                      </div>
                      <ul className="space-y-1">
                        {services
                          .filter((s) => s.category === cat)
                          .map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={() => setOpenMenu(null)}
                                className="flex items-center gap-2 py-1.5 text-[13px] text-cloud hover:text-gold transition-colors"
                              >
                                <Icon name={s.icon} className="h-3.5 w-3.5 shrink-0 text-gold/70" />
                                {s.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 pt-3 border-t border-ink-2 flex items-center justify-between">
                    <span className="text-xs text-mist">Every service runs on the same documented process.</span>
                    <Link href="/services" onClick={() => setOpenMenu(null)} className="text-xs font-bold text-gold hover:text-white">
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setOpenMenu("industries")}>
            <button
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-md font-bold uppercase tracking-wide text-xs transition-colors ${
                openMenu === "industries" ? "text-gold" : "text-white hover:text-gold"
              }`}
            >
              Industries
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                <polyline points="6,9 12,15 18,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {openMenu === "industries" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]">
                <div className="rounded-xl border border-ink-2 bg-ink-elevated shadow-2xl p-6 grid grid-cols-3 gap-x-6 gap-y-2.5">
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-center gap-2 py-1.5 text-[13px] text-cloud hover:text-gold transition-colors"
                    >
                      <Icon name={ind.icon} className="h-3.5 w-3.5 shrink-0 text-gold/70" />
                      {ind.name}
                    </Link>
                  ))}
                  <div className="col-span-3 pt-3 mt-1 border-t border-ink-2 flex items-center justify-between">
                    <span className="text-xs text-mist">Ten founding trades, one documented system.</span>
                    <Link href="/industries" onClick={() => setOpenMenu(null)} className="text-xs font-bold text-gold hover:text-white">
                      View all industries →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2.5 rounded-md font-bold uppercase tracking-wide text-xs text-white hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/contact" variant="gold" size="sm">
            Get a Proposal
          </Button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink-2 bg-ink max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container-tbo py-5 flex flex-col gap-1">
            <button
              className="flex items-center justify-between py-3 text-white font-bold uppercase text-xs tracking-wide"
              onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
            >
              Services
              <span>{mobileSection === "services" ? "−" : "+"}</span>
            </button>
            {mobileSection === "services" && (
              <div className="pb-3 pl-2 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="py-2 text-sm text-cloud"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
                <Link href="/services" className="py-2 text-sm font-bold text-gold" onClick={() => setMobileOpen(false)}>
                  View all services →
                </Link>
              </div>
            )}

            <button
              className="flex items-center justify-between py-3 text-white font-bold uppercase text-xs tracking-wide border-t border-ink-2"
              onClick={() => setMobileSection(mobileSection === "industries" ? null : "industries")}
            >
              Industries
              <span>{mobileSection === "industries" ? "−" : "+"}</span>
            </button>
            {mobileSection === "industries" && (
              <div className="pb-3 pl-2 flex flex-col gap-1">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="py-2 text-sm text-cloud"
                    onClick={() => setMobileOpen(false)}
                  >
                    {ind.name}
                  </Link>
                ))}
                <Link href="/industries" className="py-2 text-sm font-bold text-gold" onClick={() => setMobileOpen(false)}>
                  View all industries →
                </Link>
              </div>
            )}

            <div className="border-t border-ink-2 pt-2 flex flex-col">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="py-3 text-white font-bold uppercase text-xs tracking-wide" onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>

            <Button href="/contact" variant="gold" className="mt-3 w-full">
              Get a Proposal
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
