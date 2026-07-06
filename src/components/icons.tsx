import type { SVGProps } from "react";

export type IconName =
  | "monitor"
  | "target"
  | "mapPin"
  | "search"
  | "message"
  | "sparkles"
  | "play"
  | "share"
  | "fileText"
  | "palette"
  | "sliders"
  | "funnel"
  | "wind"
  | "bolt"
  | "layers"
  | "houseSearch"
  | "leaf"
  | "wrench"
  | "hammer"
  | "shieldCheck"
  | "home"
  | "sun"
  | "roller"
  | "bug"
  | "arrowRight"
  | "check"
  | "checkCircle"
  | "phone"
  | "mail"
  | "calendar"
  | "chart"
  | "users"
  | "clock"
  | "flag"
  | "ring";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function paths(name: IconName) {
  switch (name) {
    case "monitor":
      return (
        <>
          <rect x="3" y="4" width="18" height="13" rx="1.5" {...base} />
          <line x1="8" y1="21" x2="16" y2="21" {...base} />
          <line x1="12" y1="17" x2="12" y2="21" {...base} />
        </>
      );
    case "target":
      return (
        <>
          <circle cx="12" cy="12" r="8" {...base} />
          <circle cx="12" cy="12" r="4.5" {...base} />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </>
      );
    case "mapPin":
      return (
        <>
          <path d="M12 21c-4-4.5-7-8-7-11.5A7 7 0 0 1 19 9.5C19 13 16 16.5 12 21z" {...base} />
          <circle cx="12" cy="9.5" r="2.25" {...base} />
        </>
      );
    case "search":
      return (
        <>
          <circle cx="11" cy="11" r="7" {...base} />
          <line x1="16.2" y1="16.2" x2="21" y2="21" {...base} />
        </>
      );
    case "message":
      return <path d="M4 5h16v10H9l-5 4V5z" {...base} />;
    case "sparkles":
      return (
        <path
          d="M12 3l1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3z"
          {...base}
        />
      );
    case "play":
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" {...base} />
          <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
        </>
      );
    case "share":
      return (
        <>
          <circle cx="6" cy="12" r="2.25" {...base} />
          <circle cx="18" cy="6" r="2.25" {...base} />
          <circle cx="18" cy="18" r="2.25" {...base} />
          <line x1="8" y1="11" x2="16" y2="7" {...base} />
          <line x1="8" y1="13" x2="16" y2="17" {...base} />
        </>
      );
    case "fileText":
      return (
        <>
          <rect x="5" y="3" width="14" height="18" rx="1.5" {...base} />
          <line x1="8" y1="8" x2="16" y2="8" {...base} />
          <line x1="8" y1="12" x2="16" y2="12" {...base} />
          <line x1="8" y1="16" x2="13" y2="16" {...base} />
        </>
      );
    case "palette":
      return (
        <>
          <circle cx="12" cy="12" r="9" {...base} />
          <circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="15" cy="9" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="8.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="13" cy="16" r="1.2" fill="currentColor" stroke="none" />
        </>
      );
    case "sliders":
      return (
        <>
          <line x1="4" y1="6" x2="20" y2="6" {...base} />
          <circle cx="14" cy="6" r="2" {...base} />
          <line x1="4" y1="12" x2="20" y2="12" {...base} />
          <circle cx="8" cy="12" r="2" {...base} />
          <line x1="4" y1="18" x2="20" y2="18" {...base} />
          <circle cx="16" cy="18" r="2" {...base} />
        </>
      );
    case "funnel":
      return <path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" {...base} />;
    case "wind":
      return (
        <>
          <path d="M4 8h9.5a2.25 2.25 0 1 0-2.2-2.75" {...base} />
          <path d="M4 12.5h12.5a2.25 2.25 0 1 1-2.2 2.75" {...base} />
          <line x1="4" y1="17" x2="12" y2="17" {...base} />
        </>
      );
    case "bolt":
      return <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" {...base} strokeLinejoin="round" />;
    case "layers":
      return (
        <>
          <polygon points="12,3 21,8 12,13 3,8" {...base} />
          <polyline points="3,13 12,18 21,13" {...base} />
        </>
      );
    case "houseSearch":
      return (
        <>
          <path d="M4 11.5 12 5l8 6.5" {...base} />
          <path d="M6 10v9h5.5" {...base} />
          <circle cx="15.5" cy="15.5" r="3" {...base} />
          <line x1="17.8" y1="17.8" x2="20" y2="20" {...base} />
        </>
      );
    case "leaf":
      return (
        <>
          <path d="M5 19c0-8 4-14 14-14 0 9-5 14-14 14z" {...base} />
          <line x1="5" y1="19" x2="13" y2="11" {...base} />
        </>
      );
    case "wrench":
      return (
        <>
          <path d="M14.5 6.5a4 4 0 0 1-5.4 5.4L4 17l3 3 5.1-5.1a4 4 0 0 1 5.4-5.4l-3 3-2-2 3-3z" {...base} />
        </>
      );
    case "hammer":
      return (
        <>
          <rect x="3" y="13" width="8" height="4" rx="0.75" transform="rotate(-45 7 15)" {...base} />
          <path d="M12 12l5.5-5.5a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L15.5 15.5" {...base} />
        </>
      );
    case "shieldCheck":
      return (
        <>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" {...base} />
          <polyline points="9,12 11,14.5 15.5,10" {...base} />
        </>
      );
    case "home":
      return (
        <>
          <path d="M4 11.5 12 5l8 6.5" {...base} />
          <path d="M6 10v10h12V10" {...base} />
          <line x1="10" y1="20" x2="10" y2="15" {...base} />
          <line x1="14" y1="20" x2="14" y2="15" {...base} />
        </>
      );
    case "sun":
      return (
        <>
          <circle cx="12" cy="12" r="4.5" {...base} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="12"
              y1="2.5"
              x2="12"
              y2="5"
              transform={`rotate(${deg} 12 12)`}
              {...base}
            />
          ))}
        </>
      );
    case "roller":
      return (
        <>
          <rect x="4" y="4" width="12" height="6" rx="1" {...base} />
          <line x1="8" y1="10" x2="8" y2="14" {...base} />
          <rect x="6" y="14" width="4" height="6" rx="0.75" {...base} />
        </>
      );
    case "bug":
      return (
        <>
          <ellipse cx="12" cy="13" rx="5" ry="6" {...base} />
          <line x1="12" y1="7" x2="12" y2="19" {...base} />
          <line x1="7.5" y1="9" x2="4" y2="7" {...base} />
          <line x1="7.5" y1="17" x2="4" y2="19" {...base} />
          <line x1="16.5" y1="9" x2="20" y2="7" {...base} />
          <line x1="16.5" y1="17" x2="20" y2="19" {...base} />
          <line x1="10" y1="4" x2="9" y2="6.5" {...base} />
          <line x1="14" y1="4" x2="15" y2="6.5" {...base} />
        </>
      );
    case "arrowRight":
      return (
        <>
          <line x1="4" y1="12" x2="20" y2="12" {...base} />
          <polyline points="14,6 20,12 14,18" {...base} />
        </>
      );
    case "check":
      return <polyline points="5,13 9,17 19,7" {...base} />;
    case "checkCircle":
      return (
        <>
          <circle cx="12" cy="12" r="9" {...base} />
          <polyline points="8,12.5 11,15.5 16,9.5" {...base} />
        </>
      );
    case "phone":
      return (
        <path
          d="M7 3H10l1.5 4.5-2 1.75c1 2.75 2.75 4.5 5.5 5.5l1.75-2L21 14.5V17.5A1.5 1.5 0 0 1 19.5 19C11.5 19 5 12.5 5 4.5A1.5 1.5 0 0 1 6.5 3H7z"
          {...base}
        />
      );
    case "mail":
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="1.5" {...base} />
          <polyline points="3,7 12,13 21,7" {...base} />
        </>
      );
    case "calendar":
      return (
        <>
          <rect x="3" y="5" width="18" height="16" rx="1.5" {...base} />
          <line x1="3" y1="10" x2="21" y2="10" {...base} />
          <line x1="8" y1="3" x2="8" y2="7" {...base} />
          <line x1="16" y1="3" x2="16" y2="7" {...base} />
        </>
      );
    case "chart":
      return (
        <>
          <line x1="4" y1="20" x2="20" y2="20" {...base} />
          <line x1="7" y1="20" x2="7" y2="12" {...base} />
          <line x1="12" y1="20" x2="12" y2="6" {...base} />
          <line x1="17" y1="20" x2="17" y2="15" {...base} />
        </>
      );
    case "users":
      return (
        <>
          <circle cx="9" cy="8" r="3" {...base} />
          <path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" {...base} />
          <circle cx="17" cy="9" r="2.25" {...base} />
          <path d="M15.2 14.2c2.3.4 4.3 2.6 4.3 5.8" {...base} />
        </>
      );
    case "clock":
      return (
        <>
          <circle cx="12" cy="12" r="9" {...base} />
          <polyline points="12,7 12,12 16,14.5" {...base} />
        </>
      );
    case "flag":
      return (
        <>
          <line x1="5" y1="3" x2="5" y2="21" {...base} />
          <path d="M5 4h13l-3 4.5L18 13H5" {...base} />
        </>
      );
    case "ring":
      return <circle cx="12" cy="12" r="7" {...base} />;
  }
}

export function Icon({
  name,
  className = "h-6 w-6",
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      {paths(name)}
    </svg>
  );
}

export function IconTile({
  name,
  tone = "light",
}: {
  name: IconName;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${
        tone === "dark" ? "bg-white/10 text-gold" : "bg-ink text-gold"
      }`}
    >
      <Icon name={name} className="h-6 w-6" />
    </div>
  );
}
