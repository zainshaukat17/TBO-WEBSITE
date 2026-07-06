# TBO — The Brand Order

Marketing website for TBO, a home-based contractor growth agency serving home-services
businesses across the U.S. and Canada. Built with Next.js (App Router), TypeScript, and
Tailwind CSS v4.

## Structure

- `src/app` — routes. Core pages (home, about, process, pricing, case-studies, contact) plus
  dynamic `services/[slug]` and `industries/[slug]` templates.
- `src/data` — all site content: `services.ts` (14 services), `industries.ts` (12 trades),
  `process.ts` (the five-stage documented process, core values, brand personality).
- `src/components` — shared UI: `site-header` (mega menu nav), `site-footer`, `logo`, `ui.tsx`
  (Section/Button/Card/Stat primitives), `icons.tsx` (hand-built SVG icon set), `contact-form.tsx`.
- `src/lib/types.ts` — `Service` and `Industry` type definitions.

Adding a new service or industry is a matter of adding one object to the relevant data file —
the `[slug]` page templates, nav mega menu, and footer links pick it up automatically.

## Brand system

Design tokens live in `src/app/globals.css`, sourced from the brand governance framework:

- **Charcoal Ink** `#101824` (dominant), **Signature Gold** `#D9992E` (accent), **Paper**
  `#F7F5F0` (canvas), plus a neutral scale for text/borders on light and dark fields.
- Display type: Georgia / "Times New Roman" / serif. Body type: Calibri / "Helvetica Neue" /
  Arial / sans-serif. Both are system fonts by design — no web font loading required.
- Logo is a code component (`src/components/logo.tsx`), not an image, so it stays crisp at any
  size and themes correctly on light or dark backgrounds.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Before going live

- Replace the placeholder email (`hello@thebrandorder.com`) and phone number
  (`+1 800 555-0143`) throughout `src/components/site-footer.tsx` and `src/app/contact/page.tsx`.
- Wire `src/components/contact-form.tsx` up to a real CRM, email service, or API route — it
  currently only shows a confirmation state client-side.
- Pricing figures on `/pricing` are illustrative starting ranges; confirm against real cost
  structure before publishing.
- Swap `metadataBase` in `src/app/layout.tsx` for the real production domain.
