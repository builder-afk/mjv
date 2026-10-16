import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import skyeAirLogo from "@/assets/logos/skye-air.webp";
import basecareLogo from "@/assets/logos/4basecare.webp";
import staquLogo from "@/assets/logos/staqu.webp";
import dilFoodsLogo from "@/assets/logos/dil-foods.webp";
import convegeniusLogo from "@/assets/logos/convegenius.webp";
import loFoodsLogo from "@/assets/logos/lo-foods.webp";
import internshalaLogo from "@/assets/logos/internshala-zoomed.png";
import freshtohomeLogo from "@/assets/logos/freshtohome.webp";

import skyeAirFounder from "@/assets/founders/skyeair.jpeg";
import staquFounder from "@/assets/founders/staqu.jpeg";
import internshalaFounder from "@/assets/press/fortuneindia-ac5d9ed415.webp";
import proteinChefFounder from "@/assets/founders/Lofoods.png";

type SpotlightItem =
  | {
      type: "stat";
      slug: string;
      company: string;
      date: string;
      headline: string;
      source: string;
      tag: string;
      logo: string;
      stat: string;
      bg: string;
    }
  | {
      type: "feature";
      slug: string;
      company: string;
      date: string;
      headline: string;
      source: string;
      tag: string;
      logo: string;
      founderName: string;
      founderRole: string;
      photo: string;
    };

const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  // ── ROW 1: 1 col (Stat) + 2 cols (Feature) + 1 col (Stat) + 2 cols (Feature) = 6 cols ──
  {
    type: "stat",
    slug: "4basecare",
    company: "4baseCare",
    date: "24 August 2026",
    headline: "Oncology Leader 4baseCare Closes ₹128 Crore Series B to Expand Indigenous Genomic Panels",
    source: "THE ECONOMIC TIMES",
    tag: "PRECISION ONCOLOGY",
    logo: basecareLogo,
    stat: "₹128 Cr",
    bg: "bg-[#ecfadc]",
  },
  {
    type: "feature",
    slug: "skye-air",
    company: "Skye Air",
    date: "23 September 2026",
    headline: "Skye Air Deploys Autonomous AI Doorstep Delivery Corridors Across NCR",
    source: "ANI NEWS",
    tag: "LOGISTICS",
    logo: skyeAirLogo,
    founderName: "Ankit Kumar",
    founderRole: "Founder & CEO",
    photo: skyeAirFounder,
  },
  {
    type: "stat",
    slug: "dil-foods",
    company: "Dil Foods",
    date: "15 July 2026",
    headline: "Dil Foods Activates 100+ Restaurant Kitchens with Turnkey Virtual Food Brands",
    source: "YOURSTORY",
    tag: "FOOD INFRASTRUCTURE",
    logo: dilFoodsLogo,
    stat: "100+ Kitchens",
    bg: "bg-[#fae8f3]",
  },
  {
    type: "feature",
    slug: "internshala",
    company: "Internshala",
    date: "15 June 2026",
    headline: "upGrad Completes Strategic Acquisition of MJV-Backed Internshala",
    source: "TECHCRUNCH",
    tag: "M&A EXIT",
    logo: internshalaLogo,
    founderName: "Sarvesh Agrawal",
    founderRole: "Founder & CEO",
    photo: internshalaFounder,
  },

  // ── ROW 2: 2 cols (Feature) + 1 col (Stat) + 2 cols (Feature) + 1 col (Stat) = 6 cols ──
  {
    type: "feature",
    slug: "staqu",
    company: "Staqu",
    date: "22 August 2026",
    headline: "Staqu Powers JARVIS AI Video Intelligence Across 12+ State Police Forces & 100+ Enterprises",
    source: "INC42",
    tag: "COMPUTER VISION",
    logo: staquLogo,
    founderName: "Atul Rai",
    founderRole: "Co-Founder & CEO",
    photo: staquFounder,
  },
  {
    type: "stat",
    slug: "convegenius",
    company: "ConveGenius",
    date: "26 May 2026",
    headline: "ConveGenius Scales WhatsApp-Native Generative AI to 100M+ Learners",
    source: "FINANCIAL EXPRESS",
    tag: "EDTECH AI",
    logo: convegeniusLogo,
    stat: "100M+ Learners",
    bg: "bg-[#fff9c8]",
  },
  {
    type: "feature",
    slug: "protein-chef",
    company: "The Protein Chef",
    date: "15 April 2026",
    headline: "The Protein Chef Backed by Rainmatter Nears ₹100 Crore ARR Trajectory",
    source: "MINT",
    tag: "METABOLIC HEALTH",
    logo: loFoodsLogo,
    founderName: "Sudarshan Gangrade",
    founderRole: "Founder & CEO",
    photo: proteinChefFounder,
  },
  {
    type: "stat",
    slug: "freshtohome",
    company: "FreshToHome",
    date: "20 March 2026",
    headline: "FreshToHome Deepens AI Cold-Chain Rail Across 4,000+ Coastal Fishermen",
    source: "THE HINDU",
    tag: "SUPPLY CHAIN",
    logo: freshtohomeLogo,
    stat: "4,000+ Fishermen",
    bg: "bg-[#e1f0fe]",
  },
];

export function CategoryLeadersGrid() {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5 items-stretch">
        {SPOTLIGHT_ITEMS.map((item) => {
          if (item.type === "stat") {
            return (
              <div
                key={item.slug}
                className={`${item.bg} rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] border border-black/[0.04] shadow-2xs hover:shadow-md transition-all duration-300 group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/[0.05] text-neutral-700 font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-medium tracking-tight text-neutral-900 leading-[1.1] whitespace-normal">
                    {item.stat}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 mt-3 leading-relaxed">
                    {item.headline}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/[0.06] flex items-end justify-between gap-3">
                  <div className="flex flex-col">
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: item.slug }}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="h-6 sm:h-7 max-w-[120px] object-contain object-left"
                      />
                    </Link>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 mt-1">
                      {item.source} · {item.date}
                    </span>
                  </div>

                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: item.slug }}
                    className="shrink-0 p-1.5 rounded-full hover:bg-black/5 text-neutral-900 transition-colors"
                    aria-label={`Read dossier for ${item.company}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          }

          // Feature Card (Double Width on Desktop & Tablet)
          return (
            <div
              key={item.slug}
              className="lg:col-span-2 xl:col-span-2 sm:col-span-2 bg-white rounded-2xl sm:rounded-3xl border border-black/10 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row min-h-[280px] group"
            >
              {/* Left: Photo with 2-Tier Name Badge */}
              <div className="relative w-full md:w-[42%] min-h-[220px] md:min-h-full overflow-hidden bg-neutral-100 shrink-0">
                <img
                  src={item.photo}
                  alt={item.founderName}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* 2-Tier Name & Role Badge pinned to bottom-left */}
                <div className="absolute bottom-3 left-3 flex flex-col items-start select-none shadow-sm z-10">
                  <div className="bg-white/95 backdrop-blur-xs px-2.5 py-0.5 text-neutral-900 font-sans text-xs font-bold leading-tight">
                    {item.founderName}
                  </div>
                  <div className="bg-[#001744] px-2.5 py-0.5 text-white font-sans text-[10px] font-medium uppercase tracking-wider leading-tight">
                    {item.founderRole}
                  </div>
                </div>
              </div>

              {/* Right: Editorial Quote & Logo Footer */}
              <div className="w-full md:w-[58%] flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-semibold">
                      <span className="h-1 w-1 rounded-full bg-[#3b66ff]" />
                      {item.source} · {item.date}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 font-semibold border border-black/5">
                      {item.tag}
                    </span>
                  </div>

                  <blockquote className="font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                    &ldquo;{item.headline}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between gap-3 mt-4">
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: item.slug }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-6 sm:h-7 max-w-[130px] object-contain object-left"
                    />
                  </Link>

                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: item.slug }}
                    className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#3b66ff] transition-colors"
                  >
                    <span>Read Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA / Action Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium">
            8 Category-Defining Portfolio Leaders
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/portfolio"
            className="font-mono text-xs font-semibold text-neutral-900 hover:text-[#3b66ff] transition-all inline-flex items-center gap-1.5"
          >
            <span>Explore all portfolio companies</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 text-[10px] font-mono tracking-wider transition-all uppercase font-semibold inline-flex items-center gap-2 shadow-xs group"
          >
            <span>Founders: pitch to us</span>
            <span className="w-4 h-4 rounded-full bg-[#d8fb35] text-neutral-900 flex items-center justify-center text-[10px] group-hover:scale-105 transition-transform">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PortfolioShowcase() {
  return (
    <section
      id="portfolio-spotlight"
      className="w-full px-3 sm:px-5 lg:px-8 xl:px-10 py-12 md:py-20 border-t border-[var(--ink)]/15"
    >
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-4">
        <div className="inline-block bg-[#fef08a] text-neutral-900 font-mono text-[11px] font-semibold px-3 py-1 rounded uppercase tracking-wider mb-4 shadow-2xs">
          Portfolio Spotlight
        </div>
        <h2
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-neutral-900 font-normal sm:font-medium tracking-tight leading-[1.08] text-balance"
          style={{ fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}
        >
          Category Leaders in Motion
        </h2>
        <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Verified commercial milestones, regulatory approvals, and institutional rounds across the Mount Judi Ventures portfolio.
        </p>
      </div>

      <CategoryLeadersGrid />
    </section>
  );
}
