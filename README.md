# Mount Judi Ventures — Website

Premium marketing website for **Mount Judi Ventures (MJV)**, a SEBI-registered venture capital firm backing ethical founders building the future of India.

- **Preview:** https://id-preview--1a05cd12-81b2-414d-9833-24810352a39a.lovable.app
- **Published:** https://mountjudiventures.lovable.app

---

## 1. Tech Stack

| Layer         | Choice                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| Framework     | [TanStack Start v1](https://tanstack.com/start) (React 19 + SSR)       |
| Router        | TanStack Router (file-based, auto-generated route tree)                |
| Build tool    | Vite 7 (via `@lovable.dev/vite-tanstack-config`)                       |
| Styling       | Tailwind CSS v4 (native `@import` + `@theme` in `src/styles.css`)      |
| UI primitives | shadcn/ui (Radix) — `src/components/ui/*`                              |
| Data fetching | TanStack Query 5 (wired in router context)                             |
| Icons         | lucide-react                                                           |
| Deploy target | Cloudflare Workers (edge) via Nitro                                    |

The project is currently **frontend-only** — no database, no auth, no server functions. All content is static and lives in `src/lib/*-data.ts`.

---

## 2. Getting Started

```bash
bun install           # or npm/pnpm install
bun run dev           # http://localhost:8080
bun run build         # production build
bun run build:dev     # dev-mode build (used by Lovable prerender)
bun run lint
bun run format
```

Node ≥ 20 recommended. The dev server binds to port **8080**.

> If you edit the project inside Lovable, the dev server auto-restarts. Locally, only restart Vite after touching `vite.config.ts` or lockfiles.

---

## 3. Project Structure

```
src/
├── routes/                     # File-based routes (TanStack Router)
│   ├── __root.tsx              # Root shell — <html>, <head>, providers, header/footer
│   ├── index.tsx               # / — landing page
│   ├── about.tsx               # /about
│   ├── portfolio.tsx           # /portfolio — logo grid + modal
│   ├── portfolio.$slug.tsx     # /portfolio/:slug — dedicated case-study page
│   ├── team.tsx                # /team — roster with ProfileOverlay modal
│   ├── thesis.tsx              # /thesis
│   ├── founders.tsx            # /founders
│   ├── insights.tsx            # /insights
│   ├── contact.tsx             # /contact
│   ├── resources.tsx           # /resources
│   ├── why-we-invested.tsx     # /why-we-invested
│   └── sitemap[.]xml.ts        # /sitemap.xml
│
├── components/
│   ├── site-chrome.tsx         # SiteHeader + SiteFooter (used by __root)
│   ├── portfolio-showcase.tsx  # Homepage featured-company carousel
│   ├── company-overlay.tsx     # Full-screen portfolio modal (shared)
│   └── ui/                     # shadcn/ui primitives
│
├── lib/
│   ├── portfolio-data.ts       # ★ All 17 portfolio companies
│   ├── team-data.ts            # ★ Executive team bios, timelines, quotes
│   ├── utils.ts                # cn() helper
│   ├── error-capture.ts
│   ├── error-page.ts
│   └── lovable-error-reporting.ts
│
├── assets/
│   ├── logos/                  # Portfolio company logos (imported via ?url)
│   └── team/                   # Team headshots
│
├── hooks/use-mobile.tsx
├── styles.css                  # Tailwind v4 entrypoint + design tokens
├── router.tsx                  # createRouter() + QueryClient
├── routeTree.gen.ts            # AUTO-GENERATED — never edit
├── server.ts                   # SSR entry wrapper (Cloudflare Worker)
└── start.ts                    # TanStack Start instance config
```

### File-based routing rules

Filenames map to URLs by TanStack conventions:

- `portfolio.tsx` → `/portfolio`
- `portfolio.$slug.tsx` → `/portfolio/:slug` — use `<Link to="/portfolio/$slug" params={{ slug }} />`
- `sitemap[.]xml.ts` → `/sitemap.xml`

The string passed to `createFileRoute("/...")` MUST match the filename-derived route ID exactly. Never edit `src/routeTree.gen.ts` — it regenerates on every build.

---

## 4. Design System

All colors, gradients, shadows, and typography are **semantic tokens** defined in `src/styles.css` under `@theme` and CSS variables. **Never hardcode Tailwind colors** (`text-white`, `bg-[#123]`) in components — they bypass theming and break the aesthetic.

### Palette (semantic)

| Token             | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `--navy-deep`     | Primary brand navy — headers, dark cards, footer  |
| `--cream`         | Warm off-white — page backgrounds, hero sections  |
| `--gold`          | Accent — logo mark, subtle highlights             |
| `--burgundy` etc. | Team profile cards (with hex pattern overlay)     |
| `--foreground`, `--muted-foreground`, `--background`, `--border`, `--primary` — shadcn/ui roles |

### Typography

Fonts are loaded via a `<link>` tag in `src/routes/__root.tsx` (never `@import`'d in CSS — Tailwind v4 Lightning CSS resolves imports from the filesystem).

- **Fraunces** — headlines, display type (`.font-display`)
- **Inter** — UI, short labels, nav
- **Montserrat** — long-form body copy (any block > ~4 lines)

### Component conventions

- Wrapping container: `.container-tight` (defined in `styles.css`)
- Chrome components (`SiteHeader`, `SiteFooter`) are used by `__root.tsx` — do not re-import per page.
- Every page uses a section rhythm of `py-20 md:py-28` unless it's a dense component-heavy view.

---

## 5. Content: How to Edit

### Portfolio companies — `src/lib/portfolio-data.ts`

Single source of truth for all 17 portfolio companies. Each entry:

```ts
{
  slug: "skye-air",              // URL segment + key
  name: "Skye Air Mobility",
  tagline: "Drone logistics for medical and industrial payloads.",
  sector: "Deep Tech",
  stage: "Series A",
  logo: skyeAirLogo,             // imported from src/assets/logos
  heroImage: skyeAirHero,        // optional cinematic background
  founders: "Ankit Kumar & Swapnik Jakkampudi",
  description: "...",
  whyInvested: "Every investment starts with the founding team...",
  convictionPoints: ["...", "..."],
  mediaMentions: [               // rendered as "Press & Media"
    { title: "...", source: "Economic Times", url: "https://..." },
  ],
}
```

Both `/portfolio` (logo grid → `CompanyOverlay` modal) and `/portfolio/$slug` (dedicated page) read from this file. Adding a new company requires:

1. Drop logo into `src/assets/logos/`.
2. Import it in `portfolio-data.ts`.
3. Add the entry — the slug automatically becomes `/portfolio/{slug}`.

### Team — `src/lib/team-data.ts`

Executive profiles are rendered as circular headshots on `/team`; clicking one triggers a full-screen `ProfileOverlay` (z-index `9999`) inside `src/routes/team.tsx`. There is **no** `/team/$slug` route — the profile view is a modal, not a page.

Currently active members: Sherif Kottapurath (Managing Partner), Ebaad Momin, Mohammed Ali Shariff, Imad Shariff, Praharsh Shahi. Ajish Rahman & Mohammed Mobeen are filtered out at render time.

### SEO / metadata

Root defaults live in `src/routes/__root.tsx` under `head()`. Every leaf route **must** override `title` and `description` in its own `head()` for SEO. `og:image` is set only on the root right now — add per-route `og:image` for leaf pages that have a distinctive hero.

---

## 6. Key UX Patterns

### Portfolio modal from anywhere

The homepage carousel (`PortfolioShowcase`) and `/portfolio` both open the same `CompanyOverlay` modal (`src/components/company-overlay.tsx`) via `activeCompany` state. The modal covers the header (`z-[9999]`) and has a top-left **← Back** button (no top-right close). To open it from a new surface, mirror the state pattern from `src/routes/index.tsx`.

### Team profile modal

Same pattern, implemented inline in `src/routes/team.tsx` as `ProfileOverlay`. Left column = portrait + contact; right column = bio + career timeline + philosophy quote.

### Navigation

Use `<Link to="/route" />` from `@tanstack/react-router` — never `<a href>` — so preloading and type-safety kick in. Dynamic segments require `params`:

```tsx
<Link to="/portfolio/$slug" params={{ slug: company.slug }}>View →</Link>
```

---

## 7. Constraints & Gotchas

- **Tailwind v4:** CSS `@import` rules must sit at the top of `src/styles.css`, before `@theme` / selectors. Load web fonts via `<link>` in `__root.tsx`, not `@import`.
- **`vite.config.ts`:** `@lovable.dev/vite-tanstack-config` already registers TanStack Start, React, Tailwind, tsconfig-paths, Nitro (Cloudflare target), and dev plugins. Do NOT add these again.
- **Route tree:** never hand-edit `src/routeTree.gen.ts`. Create/rename files under `src/routes/` and let the plugin regenerate.
- **Server runtime:** if backend logic is added later, it runs on Cloudflare Workers (workerd). No `child_process`, `sharp`, `puppeteer`, `fs.watch`, or native-addon npm packages.
- **`src/pages/` is banned** — this project uses `src/routes/`, not the Next.js/React-Router convention.
- **Layout routes need `<Outlet />`.** If a parent route has children (e.g. `portfolio.tsx` has `portfolio.$slug.tsx`), its component must render `<Outlet />` or child routes render blank.

---

## 8. Deployment

The project is hosted on Lovable and auto-deploys on every accepted change:

- **Preview:** every save updates the id-preview URL.
- **Production:** click **Publish** in the Lovable editor to promote to `mountjudiventures.lovable.app`.

To attach a custom domain, use Lovable's Project Settings → Domains.

---

## 9. Contributing Workflow

1. Read this README plus the file(s) you plan to touch.
2. For content changes (companies, team, copy), edit the relevant `src/lib/*-data.ts` — do not fork the display components.
3. For visual changes, edit tokens in `src/styles.css` first; only reach for component styles if a token is insufficient.
4. Run `bun run build` locally before opening a PR — the TanStack code-splitter is strict and catches issues that dev doesn't.
5. Keep commits scoped: one topic per commit (e.g. "add portfolio company: Foo", not "misc updates").

---

## 10. Roadmap Ideas (not yet implemented)

- CMS-backed portfolio/team data (Lovable Cloud + Supabase)
- Insights → actual blog with MDX or a headless CMS
- Contact form wired to an email/webhook endpoint (`/api/public/contact`)
- Per-route `og:image` generation for social sharing

---

**Questions?** Ping the MJV team or open an issue against this project inside Lovable.
# firm-mjv
