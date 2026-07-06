import Link from "next/link";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cloud border-t border-ink-2">
      <div className="container-tbo py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-mist max-w-xs leading-relaxed">
              A documented, repeatable marketing system for home-services contractors across the
              United States and Canada.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href="mailto:hello@thebrandorder.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Icon name="mail" className="h-4 w-4 text-gold" />
                hello@thebrandorder.com
              </a>
              <a href="tel:+18005550143" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Icon name="phone" className="h-4 w-4 text-gold" />
                +1 (800) 555-0143
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-steel-dark mb-4">Services</div>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-gold transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-bold text-gold hover:text-white">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-steel-dark mb-4">Industries</div>
            <ul className="space-y-2 text-sm">
              {industries.slice(0, 8).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-gold transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="font-bold text-gold hover:text-white">
                  All industries →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-steel-dark mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/process" className="hover:text-gold transition-colors">Our Process</Link></li>
              <li><Link href="/case-studies" className="hover:text-gold transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel-dark">
          <span>© {year} The Brand Order. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-gold transition-colors">Accessibility</Link>
            <span className="uppercase tracking-widest">Contractor Growth Partners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
