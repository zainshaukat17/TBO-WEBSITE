import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink" | "white";
  id?: string;
}) {
  const bg =
    tone === "ink" ? "bg-ink text-white" : tone === "white" ? "bg-white text-text" : "bg-paper text-text";
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="container-tbo py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Kicker({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
      <span className="h-[2px] w-9 bg-gold rounded-full" />
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.28em] ${
          tone === "light" ? "text-mist" : "text-steel"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md font-bold text-sm tracking-wide transition-all duration-200 whitespace-nowrap";

const buttonSizes = {
  md: "px-6 py-3.5",
  sm: "px-4 py-2.5 text-xs",
  lg: "px-8 py-4.5 text-base",
};

const buttonVariants = {
  gold: "bg-gold text-ink hover:bg-gold-dark",
  ink: "bg-ink text-white hover:bg-ink-elevated",
  outline: "border border-ink-4 text-white hover:border-gold hover:text-gold",
  "outline-dark": "border border-hairline text-ink hover:border-gold hover:text-gold-dark",
  ghost: "text-ink hover:text-gold-dark",
};

export function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `${buttonBase} ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function CornerBrackets({ tone = "gold" }: { tone?: "gold" | "steel" }) {
  const color = tone === "gold" ? "border-gold/40" : "border-ink-4";
  const corners = [
    "top-6 left-6 md:top-10 md:left-10 border-l border-t",
    "top-6 right-6 md:top-10 md:right-10 border-r border-t",
    "bottom-6 left-6 md:bottom-10 md:left-10 border-l border-b",
    "bottom-6 right-6 md:bottom-10 md:right-10 border-r border-b",
  ];
  return (
    <>
      {corners.map((pos) => (
        <span key={pos} aria-hidden className={`pointer-events-none absolute h-4 w-4 ${color} ${pos}`} />
      ))}
    </>
  );
}

export function Stat({
  value,
  label,
  tone = "light",
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div>
      <div className={`font-display font-bold text-4xl md:text-5xl ${tone === "dark" ? "text-white" : "text-ink"}`}>
        {value}
      </div>
      <div className={`mt-2 text-sm leading-snug ${tone === "dark" ? "text-mist" : "text-steel"}`}>{label}</div>
    </div>
  );
}

export function Pill({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
        tone === "dark"
          ? "bg-white/10 text-white border border-white/15"
          : "bg-white text-steel border border-hairline"
      }`}
    >
      {children}
    </span>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-hairline bg-white p-7 ${className}`}>{children}</div>
  );
}
