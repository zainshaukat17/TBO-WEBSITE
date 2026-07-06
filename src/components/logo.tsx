import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  tagline?: boolean;
};

/**
 * Wordmark per brand governance 2.1 — "TBO" with a Signature Gold ring
 * standing in for the O, set on a fixed dark or light field.
 */
export function Logo({ variant = "dark", className = "", tagline = true }: LogoProps) {
  const ink = variant === "dark" ? "text-ink" : "text-white";
  const sub = variant === "dark" ? "text-steel" : "text-mist";

  return (
    <Link href="/" className={`inline-flex flex-col group ${className}`} aria-label="TBO — The Brand Order, home">
      <span className="inline-flex items-center leading-none">
        <span className={`font-display font-bold text-[1.75rem] tracking-tight ${ink}`}>TB</span>
        <span
          aria-hidden
          className="ml-[0.06em] inline-block rounded-full border-[3px] border-gold w-[0.62em] h-[0.62em] transition-transform duration-300 group-hover:rotate-45"
          style={{ marginTop: "0.02em" }}
        />
      </span>
      {tagline && (
        <span className={`mt-1 text-[9px] font-body font-bold uppercase tracking-[0.32em] ${sub}`}>
          The Brand Order
        </span>
      )}
    </Link>
  );
}
