import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { companies, type Company } from "@/lib/portfolio-data";
import { CompanyOverlay } from "@/components/company-overlay";
import { FoundersBento } from "@/components/founders-bento";
import { FAQSection } from "@/components/faq-section";
import { HomeHero } from "@/components/home-hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mount Judi Ventures | Backing Visionary Founders Building the Future of India" },
      {
        name: "description",
        content:
          "Mount Judi Ventures backs high-integrity, tenacious founders tackling systemic challenges through innovation and ingenuity.",
      },
      { property: "og:title", content: "Mount Judi Ventures | Backing Visionary Founders" },
      {
        property: "og:description",
        content:
          "Seed to Series A capital for innovation-first, ethical businesses with strong unit economics.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// Companies shown in the home page logo loop (upGrad is the acquirer of Internshala, not a portfolio company).
const LOOP_EXCLUDED_SLUGS = new Set(["upgrad"]);
const loopCompanies = companies.filter((c) => !LOOP_EXCLUDED_SLUGS.has(c.slug));

function Index() {
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen overflow-x-clip">
      {/* 1. HERO SECTION (Split editorial hero with portfolio spotlight carousel) */}
      <HomeHero />

      {/* 1b. KEY METRICS */}
      <section
        id="home-stats"
        className="scroll-mt-4 border-b border-[var(--ink)]/15 bg-[var(--paper)] py-10 md:py-14"
      >
        <div className="container-tight">
          <div className="rounded-[32px] bg-[#f8f8f6] border border-black/10 p-2.5 sm:p-3 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-left">
            <div className="rounded-[24px] bg-white p-5 sm:p-6 border border-black/5 flex flex-col justify-between shadow-2xs group hover:border-black/20 transition-all">
              <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                [01 // PORTFOLIO]
              </div>
              <div className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                17+
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
                Active Companies
              </div>
            </div>
            <div className="rounded-[24px] bg-white p-5 sm:p-6 border border-black/5 flex flex-col justify-between shadow-2xs group hover:border-black/20 transition-all">
              <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                [02 // DILIGENCE]
              </div>
              <div className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                3,000+
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
                Deals Evaluated
              </div>
            </div>
            <div className="rounded-[24px] bg-[#3b66ff] text-white p-5 sm:p-6 shadow-2xs flex flex-col justify-between group hover:shadow-md transition-all">
              <div className="font-mono text-[10px] uppercase tracking-wider text-white/80 font-semibold">
                [03 // REGISTRY]
              </div>
              <div className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                02
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-wider text-white/80 uppercase">
                SEBI CAT-II AIFs
              </div>
            </div>
            <div className="rounded-[24px] bg-[#d8fb35] text-neutral-900 p-5 sm:p-6 shadow-2xs flex flex-col justify-between group hover:shadow-md transition-all">
              <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-800 font-semibold">
                [04 // STEWARDSHIP]
              </div>
              <div className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                2016
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-wider text-neutral-800 uppercase font-medium">
                Deploying Capital
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED PORTFOLIO CONTINUOUS TICKER STRIP */}
      <section className="overflow-hidden border-b border-[var(--ink)]/15 bg-[var(--paper)] select-none">
        {/* Strip Telemetry Header Bar */}
        <div className="container-tight flex items-center justify-between gap-4 py-5 font-mono text-[11px] uppercase tracking-[0.16em]">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 text-[10px] font-semibold text-white shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35] animate-pulse" />
            <span>Portfolio Corridor</span>
            <span className="text-white/40">·</span>
            <span className="text-[#d8fb35]">Seventeen Ventures</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-semibold text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3b66ff]" />
            <span>SEBI CAT-II AIF · Active Portfolio</span>
          </div>
        </div>

        {/* Continuous Portfolio Card Loop */}
        <div className="relative overflow-hidden bg-[var(--paper-subtle)] py-5">
          {/* Edge Vignette Masks for Smooth Flow */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--paper-subtle)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--paper-subtle)] to-transparent z-10" />

          {/* Marquee Track: Seamless Rounded Cards */}
          <div className="flex w-max animate-marquee items-stretch gap-4 px-4 sm:px-8">
            {[...loopCompanies, ...loopCompanies].map((c, i) => (
              <button
                key={`${c.slug}-${i}`}
                type="button"
                onClick={() => setActiveCompany(c)}
                aria-label={`${c.name}: view company details`}
                className="group flex h-24 w-48 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-md sm:h-28 sm:w-56"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-10 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-12 sm:max-w-[150px]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUNDER VOICES (ELEVATION-INSPIRED BENTO GRID) */}
      <FoundersBento />

      {/* 4. OPERATOR ADVANTAGE + FAQ (CURVED BENTO) */}
      <FAQSection />

      {/* COMPANY OVERLAY MODAL */}
      <CompanyOverlay company={activeCompany} onClose={() => setActiveCompany(null)} />
    </div>
  );
}
