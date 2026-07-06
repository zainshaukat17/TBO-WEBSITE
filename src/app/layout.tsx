import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thebrandorder.com"),
  title: {
    default: "TBO — Contractor Growth Partners | Home Services Marketing",
    template: "%s | TBO — The Brand Order",
  },
  description:
    "TBO runs a documented, repeatable marketing system for U.S. and Canadian home-services contractors — websites, Google Ads, LSAs, Meta Ads, SEO, AEO, GEO, and full-funnel content that turns local demand into booked jobs.",
  keywords: [
    "home services marketing agency",
    "contractor marketing",
    "HVAC marketing",
    "roofing marketing",
    "local service ads",
    "contractor SEO",
  ],
  openGraph: {
    title: "TBO — Contractor Growth Partners",
    description:
      "A documented, repeatable marketing system for home-services contractors across the U.S. and Canada.",
    siteName: "The Brand Order",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
