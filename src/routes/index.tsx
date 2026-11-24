import { createFileRoute, Link } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import { FoundersBento } from "@/components/founders-bento";
import { HomeHero } from "@/components/home-hero";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mount Judi Ventures | Backing visionary founders building the future of India" },
      {
        name: "description",
        content:
          "Mount Judi Ventures backs high-integrity, tenacious founders tackling systemic challenges through innovation and ingenuity.",
      },
      { property: "og:title", content: "Mount Judi Ventures | Backing visionary founders" },
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

// 5 balanced slices of companies for the 5 background loops
const row1 = [
  loopCompanies[0],
  loopCompanies[3],
  loopCompanies[1],
  loopCompanies[2],
  loopCompanies[5],
  loopCompanies[10],
  loopCompanies[17],
  loopCompanies[18],
].filter(Boolean);

const row2 = [
  loopCompanies[4],
  loopCompanies[6],
  loopCompanies[7],
  loopCompanies[19],
  loopCompanies[9],
  loopCompanies[11],
  loopCompanies[12],
  loopCompanies[13],
].filter(Boolean);

const row3 = [
  loopCompanies[14],
  loopCompanies[15],
  loopCompanies[16],
  loopCompanies[8],
  loopCompanies[0],
  loopCompanies[3],
  loopCompanies[1],
  loopCompanies[2],
].filter(Boolean);

const row4 = [
  loopCompanies[10],
  loopCompanies[17],
  loopCompanies[18],
  loopCompanies[4],
  loopCompanies[6],
  loopCompanies[7],
  loopCompanies[19],
  loopCompanies[9],
].filter(Boolean);

const row5 = [
  loopCompanies[5],
  loopCompanies[11],
  loopCompanies[12],
  loopCompanies[13],
  loopCompanies[14],
  loopCompanies[15],
  loopCompanies[16],
  loopCompanies[8],
].filter(Boolean);

function Index() {

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen overflow-x-clip">
      {/* 1. HERO SECTION (Split editorial hero with portfolio spotlight carousel) */}
      <HomeHero />

      {/* 2. PORTFOLIO CORRIDOR: 5 BACKGROUND MOVING LOOPS (GREYSCALE) + FLOATING METRICS OVERLAY */}
      <section
        id="home-stats"
        className="relative overflow-hidden bg-[var(--paper)] py-14 sm:py-20 select-none border-b border-black/10"
      >
        {/* Section Header matching reference layout */}
        <div className="container-tight mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs font-black tracking-[0.25em] text-[#036089] flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C78D1E] animate-pulse" />
                <span>Portfolio Corridor </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-neutral-950 tracking-tight leading-[1.02]">
                The startups &amp; founders
                <br />
                who are the <span className="text-[#036089]">Category Creators</span>
              </h2>
            </div>

            {/* Subtitle Annotation with Arrow */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#036089] font-bold bg-[#036089]/10 px-4 py-2 rounded-full border border-[#036089]/20 self-start sm:self-end">
              <span>Our portfolio Startups</span>
              <span className="text-base leading-none">↗</span>
            </div>
          </div>
        </div>

        {/* Outer Frame with 5 Background Moving Loops and Overlaid Floating Stats Card */}
        <div className="relative py-8 sm:py-12 overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center">
          {/* Edge Vignette Masks for Smooth Flow */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[var(--paper)] via-[var(--paper)]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[var(--paper)] via-[var(--paper)]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--paper)] to-transparent z-10" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--paper)] to-transparent z-10" />

          {/* ── 5 BACKGROUND MOVING LOOPS IN GREYSCALE ── */}
          <div className="absolute inset-0 flex flex-col justify-center gap-3 sm:gap-3.5 overflow-hidden">
            {/* Loop 1: Left */}
            <div className="flex w-max animate-marquee items-center gap-3 sm:gap-4 [animation-duration:45s]">
              {[...row1, ...row1, ...row1].map((c, i) => (
                <Link
                  key={`r1-${c.slug}-${i}`}
                  to="/portfolio/$slug"
                  params={{ slug: c.slug }}
                  aria-label={`${c.name}: view company details`}
                  className="group flex h-16 sm:h-20 lg:h-22 w-44 sm:w-56 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-black/8 bg-white/75 backdrop-blur-xs shadow-2xs transition-all duration-300 hover:scale-105 hover:bg-white hover:border-black/20 hover:shadow-md"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-7 sm:max-h-9 w-auto max-w-[110px] sm:max-w-[130px] object-contain filter grayscale contrast-75 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>

            {/* Loop 2: Right (Reverse) */}
            <div className="flex w-max animate-marquee-reverse items-center gap-3 sm:gap-4 [animation-duration:38s]">
              {[...row2, ...row2, ...row2].map((c, i) => (
                <Link
                  key={`r2-${c.slug}-${i}`}
                  to="/portfolio/$slug"
                  params={{ slug: c.slug }}
                  aria-label={`${c.name}: view company details`}
                  className="group flex h-16 sm:h-20 lg:h-22 w-44 sm:w-56 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-black/8 bg-white/75 backdrop-blur-xs shadow-2xs transition-all duration-300 hover:scale-105 hover:bg-white hover:border-black/20 hover:shadow-md"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-7 sm:max-h-9 w-auto max-w-[110px] sm:max-w-[130px] object-contain filter grayscale contrast-75 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>

            {/* Loop 3: Left */}
            <div className="flex w-max animate-marquee items-center gap-3 sm:gap-4 [animation-duration:52s]">
              {[...row3, ...row3, ...row3].map((c, i) => (
                <Link
                  key={`r3-${c.slug}-${i}`}
                  to="/portfolio/$slug"
                  params={{ slug: c.slug }}
                  aria-label={`${c.name}: view company details`}
                  className="group flex h-16 sm:h-20 lg:h-22 w-44 sm:w-56 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-black/8 bg-white/75 backdrop-blur-xs shadow-2xs transition-all duration-300 hover:scale-105 hover:bg-white hover:border-black/20 hover:shadow-md"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-7 sm:max-h-9 w-auto max-w-[110px] sm:max-w-[130px] object-contain filter grayscale contrast-75 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>

            {/* Loop 4: Right (Reverse) */}
            <div className="flex w-max animate-marquee-reverse items-center gap-3 sm:gap-4 [animation-duration:42s]">
              {[...row4, ...row4, ...row4].map((c, i) => (
                <Link
                  key={`r4-${c.slug}-${i}`}
                  to="/portfolio/$slug"
                  params={{ slug: c.slug }}
                  aria-label={`${c.name}: view company details`}
                  className="group flex h-16 sm:h-20 lg:h-22 w-44 sm:w-56 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-black/8 bg-white/75 backdrop-blur-xs shadow-2xs transition-all duration-300 hover:scale-105 hover:bg-white hover:border-black/20 hover:shadow-md"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-7 sm:max-h-9 w-auto max-w-[110px] sm:max-w-[130px] object-contain filter grayscale contrast-75 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>

            {/* Loop 5: Left */}
            <div className="flex w-max animate-marquee items-center gap-3 sm:gap-4 [animation-duration:48s]">
              {[...row5, ...row5, ...row5].map((c, i) => (
                <Link
                  key={`r5-${c.slug}-${i}`}
                  to="/portfolio/$slug"
                  params={{ slug: c.slug }}
                  aria-label={`${c.name}: view company details`}
                  className="group flex h-16 sm:h-20 lg:h-22 w-44 sm:w-56 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-black/8 bg-white/75 backdrop-blur-xs shadow-2xs transition-all duration-300 hover:scale-105 hover:bg-white hover:border-black/20 hover:shadow-md"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-7 sm:max-h-9 w-auto max-w-[110px] sm:max-w-[130px] object-contain filter grayscale contrast-75 opacity-40 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* ── FOREGROUND FLOATING STATS OVERLAY CARD ── */}
          <div className="container-tight relative z-20 pointer-events-auto">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white/90 backdrop-blur-md border-2 border-transparent hover:border-neutral-950 p-6 sm:p-8 lg:p-10 shadow-xl transition-all duration-300">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#036089] font-bold flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                    <span>PORTFOLIO</span>
                  </div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
                    20+
                  </div>
                  <div className="mt-1 font-mono text-[11px] tracking-wider text-neutral-600 uppercase font-bold">
                    Active Companies
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-2">
                    DILIGENCE
                  </div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
                    3,000+
                  </div>
                  <div className="mt-1 font-mono text-[11px] tracking-wider text-neutral-600 uppercase font-bold">
                    Deals Evaluated
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#C78D1E] font-bold flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C78D1E]" />
                    <span>REGISTRY</span>
                  </div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
                    03
                  </div>
                  <div className="mt-1 font-mono text-[11px] tracking-wider text-neutral-600 uppercase font-bold">
                    SEBI AIFs
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-2">
                    Vintage
                  </div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
                    2020
                  </div>
                  <div className="mt-1 font-mono text-[11px] tracking-wider text-neutral-600 uppercase font-bold">
                    Deploying Capital
                  </div>
                </div>
              </div>

              {/* Bottom Action Strip with Buttons matching reference */}
              <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-600">
                  <span className="w-2 h-2 rounded-full bg-[#C78D1E] animate-pulse" />
                  <span>Seed to Series A · Direct Partner Sponsorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-[#036089] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xs"
                  >
                    <span>View all</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 border border-black/15 font-mono text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER VOICES (ELEVATION-INSPIRED BENTO GRID) */}
      <FoundersBento />
    </div>
  );
}
