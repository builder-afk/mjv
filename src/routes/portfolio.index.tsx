import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import {
  ArrowUpRight,
  Search,
  ArrowLeft,
  ArrowRight,
  Grid3X3,
  List,
  Table2,
  X,
  Building2,
  MapPin,
  Tag,
  Zap,
  Users,
  Calendar,
} from "lucide-react";
import { useState, useMemo, useRef } from "react";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Seventeen founders. One long conviction. Mount Judi backs mission-led category leaders across healthcare, AI, consumer, logistics, and enterprise in India.",
      },
      { property: "og:title", content: "Portfolio | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "Category leaders across healthcare, AI, consumer, logistics, and enterprise in India.",
      },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioIndex,
});

type FundFilter = "ALL" | "MJIGF" | "MJIMF";
type Company = (typeof companies)[number];

const COMPANY_LOCATIONS: Record<string, string> = {
  "skye-air": "Gurugram",
  "4basecare": "Bengaluru",
  "staqu": "Gurugram",
  "dil-foods": "Bengaluru",
  "convegenius": "Noida",
  "protein-chef": "Bengaluru",
  "innaccel": "Bengaluru",
  "rubickai": "Bengaluru",
  "sp-robotic-works": "Chennai",
  "internshala": "Gurugram",
  "upgrad": "Mumbai",
  "freshtohome": "Bengaluru",
  "wiffy": "Delhi NCR",
  "gooru": "Bengaluru",
  "thimblerr": "Mumbai",
  "boingg": "Gurugram",
  "hexalog": "Bengaluru",
  "extramile": "Mumbai",
  "freshleaf-tea": "Ludhiana",
  "sandowitch": "Bengaluru",
  "flawsome": "Indore",
};

function getCompanyLocation(slug: string): string {
  return COMPANY_LOCATIONS[slug] || "India";
}

function getFundBadge(fund?: "Growth Fund" | "Micro Fund" | "Both"): string {
  if (fund === "Both") return "MJIMF & MJIGF";
  if (fund === "Growth Fund") return "MJIGF";
  if (fund === "Micro Fund") return "MJIMF";
  return "MJIGF";
}

const FUND_META: Record<
  FundFilter,
  {
    code: FundFilter;
    badge: string;
    name: string;
    blurb: string;
    checkSize: string;
    stage: string;
    corpus: string;
  }
> = {
  ALL: {
    code: "ALL",
    badge: "All Investments",
    name: "Complete Conviction Portfolio",
    blurb:
      "All active & exited investments across Mount Judi India Growth Fund (MJIGF) and Mount Judi India Micro Fund (MJIMF).",
    checkSize: "₹2 Cr – ₹25 Cr Initial Cheques",
    stage: "Seed to Growth Stage",
    corpus: "Two SEBI AIFs",
  },
  MJIGF: {
    code: "MJIGF",
    badge: "Growth Fund",
    name: "Mount Judi India Growth Fund",
    blurb:
      "Growth-stage conviction bets across healthcare, deep-tech AI, consumer brands, and logistics leaders in India.",
    checkSize: "₹10 Cr – ₹25 Cr Check Sizes",
    stage: "Series A to Growth",
    corpus: "INR 100 Cr Corpus · Cat II AIF",
  },
  MJIMF: {
    code: "MJIMF",
    badge: "Micro Fund",
    name: "Mount Judi India Micro Fund",
    blurb:
      "Early conviction cheques into visionary founders building at the edge of emerging tech and new consumer markets.",
    checkSize: "₹2 Cr – ₹10 Cr Check Sizes",
    stage: "Seed to Pre-Series A",
    corpus: "Cat I AIF Angel Vehicle",
  },
};

function matchesFund(c: Company, filter: FundFilter): boolean {
  if (filter === "ALL") return true;
  if (filter === "MJIGF") return c.fund === "Growth Fund" || c.fund === "Both";
  if (filter === "MJIMF") return c.fund === "Micro Fund" || c.fund === "Both";
  return true;
}

export default function PortfolioIndex() {
  const navigate = useNavigate();
  const [activeFund, setActiveFund] = useState<FundFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "ledger">("grid");

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 380;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Fund counts
  const allCount = companies.length;
  const growthCount = useMemo(
    () => companies.filter((c) => c.fund === "Growth Fund" || c.fund === "Both").length,
    []
  );
  const microCount = useMemo(
    () => companies.filter((c) => c.fund === "Micro Fund" || c.fund === "Both").length,
    []
  );

  const fundCounts: Record<FundFilter, number> = {
    ALL: allCount,
    MJIGF: growthCount,
    MJIMF: microCount,
  };

  // Distinct sectors
  const sectors = useMemo(() => {
    const set = new Set<string>();
    companies.forEach((c) => {
      if (c.sector) set.add(c.sector);
    });
    return Array.from(set).sort();
  }, []);

  // Filtered companies (sorted newest to oldest by year)
  const filteredCompanies = useMemo(() => {
    return companies.filter((c) => {
      if (!matchesFund(c, activeFund)) return false;
      if (selectedSector !== "ALL" && c.sector !== selectedSector) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesSector = c.sector?.toLowerCase().includes(q);
        const matchesThesis = c.thesis?.toLowerCase().includes(q);
        const matchesStage =
          c.stages?.some((s) => s.toLowerCase().includes(q)) || c.stage?.toLowerCase().includes(q);
        const matchesVintage = c.vintage?.toLowerCase().includes(q);
        const matchesOneLiner = c.oneLiner?.toLowerCase().includes(q);
        const matchesTagline = c.tagline?.toLowerCase().includes(q);
        const matchesFounders = c.founders?.toLowerCase().includes(q);
        if (
          !matchesName &&
          !matchesSector &&
          !matchesThesis &&
          !matchesStage &&
          !matchesVintage &&
          !matchesOneLiner &&
          !matchesTagline &&
          !matchesFounders
        ) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => b.year - a.year);
  }, [activeFund, selectedSector, searchQuery]);

  const currentMeta = FUND_META[activeFund];

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen selection:bg-neutral-900 selection:text-white">

      {/* ── 2. FEATURED BRAND RAIL / CAROUSEL (DIRECTLY INSPIRED BY SPRING SCREENSHOT 2) ── */}


      {/* ── 3. MODERN BRAND-FIRST CORPORATE UI: COMPLETE DIRECTORY & FILTER ENGINE ── */}
      <section id="portfolio-directory" className="py-14 sm:py-20 md:py-24 bg-[var(--paper)]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Section Header */}
          <div className="pb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                All companies we have invested in
              </h2>

              {/* Fund Vehicle Tabs */}
              <div
                role="tablist"
                aria-label="Filter companies by fund vehicle"
                className="inline-flex flex-wrap items-center gap-1.5 self-start sm:self-auto rounded-full border-2 border-[#cee7fc] bg-white p-1.5 shadow-2xs transition-colors duration-200"
              >
                {(["ALL", "MJIGF", "MJIMF"] as FundFilter[]).map((tab) => {
                  const active = tab === activeFund;
                  const count = fundCounts[tab];
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFund(tab)}
                      className={`relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 font-sans text-xs font-semibold transition-all duration-200 ${active
                        ? "bg-[#0284c7] text-white shadow-xs"
                        : "text-neutral-700 hover:text-[#0284c7] hover:bg-[#f0f8ff]"
                        }`}
                    >
                      <span>{tab === "ALL" ? "All Investments" : tab}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-sans font-bold leading-none ${active ? "bg-white text-[#0284c7]" : "bg-[#f0f8ff] text-neutral-700"
                          }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── 4A. VIEW MODE: BRAND CARDS GRID ── */}
          {viewMode === "grid" && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
              {filteredCompanies.map((company) => {
                const isExited = company.slug === "internshala" || company.status === "Exited";
                const fundBadge = getFundBadge(company.fund);
                const city = getCompanyLocation(company.slug);

                return (
                  <Link
                    key={company.slug}
                    to="/portfolio/$slug"
                    params={{ slug: company.slug }}
                    className="group relative flex flex-col rounded-2xl border-2 border-[#cee7fc] bg-neutral-900 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 aspect-[4/3] sm:aspect-[16/11] min-h-[220px]"
                  >
                    {/* Full Card Image (Base Visual) */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-900">
                      {company.image ? (
                        <img
                          src={company.image}
                          alt={`${company.name} photography`}
                          loading="lazy"
                          className={`h-full w-full object-cover ${company.imagePosition ||
                            (company.slug === "internshala" ? "object-top" : company.slug === "boingg" ? "object-[center_25%]" : company.slug === "convegenius" ? "object-[78%_center]" : company.slug === "protein-chef" ? "object-[15%_center]" : "object-center")
                            } transition-transform duration-700 ease-out group-hover:scale-108`}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-neutral-900 p-8">
                          <img
                            src={company.whiteLogo || company.logo}
                            alt=""
                            className="max-h-14 w-auto object-contain"
                          />
                        </div>
                      )}

                      {/* Gentle Gradient Scrim for Base Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

                      {/* Top Badges (Visible on Image) */}
                      <div className="absolute inset-x-0 top-0 p-3 sm:p-3.5 flex items-center justify-between z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-200">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-md px-2 py-0.5 font-sans text-[11px] font-semibold text-[#0284c7] border border-[#cee7fc] shadow-xs">
                            {fundBadge}
                          </span>
                          {isExited && (
                            <span className="inline-flex items-center rounded-full bg-emerald-500/95 backdrop-blur-md px-2 py-0.5 font-sans text-[11px] font-semibold text-white shadow-xs">
                              M&amp;A Exit
                            </span>
                          )}
                        </div>

                        <span className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-md text-[#0284c7] flex items-center justify-center shadow-xs">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Bottom Brand Bar (Visible on Image) */}
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 z-10 flex items-end justify-between gap-2.5 group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="px-2 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-[#cee7fc]/80 shadow-xs inline-flex items-center shrink-0">
                            <img
                              src={company.logo}
                              alt={`${company.name} logo`}
                              className="h-4 sm:h-4.5 w-auto max-w-[80px] object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-sans text-sm sm:text-base font-bold text-white drop-shadow-xs truncate">
                              {company.name}
                            </h3>
                            <span className="inline-flex items-center gap-1 font-sans text-[10px] sm:text-[11px] text-white/85 font-normal">
                              <MapPin className="w-3 h-3 text-[#38bdf8]" />
                              {city}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Info Surface: Replaces image with full company details */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-3.5 sm:p-4 bg-white/98 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-y-1 group-hover:translate-y-0">
                      <div>
                        {/* Top: Logo & Fund Badges & Action Arrow */}
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#cee7fc]/70">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <div className="px-1.5 py-0.5 rounded bg-[#f0f8ff] border border-[#cee7fc] shadow-2xs inline-flex items-center">
                              <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="h-3.5 sm:h-4 w-auto max-w-[70px] object-contain"
                              />
                            </div>
                            <span className="inline-flex items-center rounded-full bg-[#f0f8ff] px-2 py-0.5 font-sans text-[10px] sm:text-[11px] font-semibold text-[#0284c7] border border-[#cee7fc]">
                              {fundBadge}
                            </span>
                            {isExited && (
                              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 font-sans text-[10px] sm:text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                                Exit
                              </span>
                            )}
                          </div>

                          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0284c7] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        </div>

                        {/* Title & Location */}
                        <div className="mt-2">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#0284c7] transition-colors truncate">
                              {company.name}
                            </h3>
                            <span className="inline-flex items-center gap-1 font-sans text-xs text-neutral-500 font-normal shrink-0">
                              <MapPin className="w-3 h-3 text-[#0284c7]" />
                              {city}
                            </span>
                          </div>

                          {/* One-Liner Description (NO CAPS, Sentence Case) */}
                          <p className="mt-1 font-sans text-xs sm:text-[13px] text-neutral-600 line-clamp-2 leading-relaxed">
                            {company.oneLiner || company.tagline}
                          </p>

                          {/* AJVC Pill Badges (Sector, Stage, Thesis) */}
                          <div className="mt-2 flex flex-wrap items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-sans font-medium bg-[#f0f8ff] text-[#0284c7] border border-[#cee7fc] flex items-center gap-1 shrink-0">
                              <Tag className="w-3 h-3 text-[#0284c7]" />
                              {company.sector}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-sans font-medium bg-[#f0f8ff] text-[#0284c7] border border-[#cee7fc] flex items-center gap-1 shrink-0">
                              <Zap className="w-3 h-3 text-[#0284c7]" />
                              {company.stage}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-sans font-medium bg-[#f8fafc] text-neutral-600 border border-neutral-200 shrink-0">
                              {company.thesis}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Footer Row: Founders, Vintage & Info CTA */}
                      <div className="pt-2 border-t border-[#cee7fc]/70 flex flex-col gap-1 mt-auto">
                        {company.founders && (
                          <div className="flex items-center gap-1.5 font-sans text-[11px] sm:text-xs text-neutral-500 truncate">
                            <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span className="truncate">{company.founders}</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between font-sans text-[11px] sm:text-xs pt-0.5">
                          <div className="flex items-center gap-1.5 text-neutral-600 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{company.vintage ? `Vintage ${company.vintage}` : `Invested in ${company.year}`}</span>
                          </div>
                          <span className="font-semibold text-[#0284c7] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 text-[11px] sm:text-xs">
                            View details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* ── 4B. VIEW MODE: HORIZONTAL CARDS LIST ── */}
          {viewMode === "ledger" && (
            <div className="mt-10 space-y-4">
              {filteredCompanies.map((company) => {
                const isExited = company.slug === "internshala" || company.status === "Exited";
                const fundBadge = getFundBadge(company.fund);
                const city = getCompanyLocation(company.slug);

                return (
                  <Link
                    key={company.slug}
                    to="/portfolio/$slug"
                    params={{ slug: company.slug }}
                    className="rounded-2xl border-2 border-[#cee7fc] bg-white p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 shadow-2xs hover:shadow-md transition-all group cursor-pointer"
                  >
                    {/* Left: Rounded Logo Box */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f7fbff] border border-[#cee7fc]/80 p-2.5 flex items-center justify-center shrink-0 shadow-2xs transition-colors">
                      <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                    </div>

                    {/* Middle: Content details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#0284c7] transition-colors">
                            {company.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 font-sans text-xs sm:text-sm text-neutral-500 font-normal">
                            <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
                            {city}
                          </span>
                        </div>

                        {/* Right: Cohort / Fund badge ( style) */}
                        <div className="flex items-center gap-2">
                          <span className="font-sans text-xs font-bold text-[#0284c7] tracking-wider">
                            {fundBadge} · {company.vintage || company.year}
                          </span>
                          {isExited && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              M&amp;A Exit
                            </span>
                          )}
                        </div>
                      </div>

                      {/* One-Liner Description (NO CAPS, sentence case) */}
                      <p className="mt-1.5 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                        {company.oneLiner || company.tagline}
                      </p>

                      {/* Bottom: AJVC Pill tags + Founders */}
                      <div className="mt-3.5 flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-0.5 rounded-full text-xs font-sans font-medium bg-[#f0f8ff] text-[#0284c7] border border-[#cee7fc] flex items-center gap-1">
                            <Tag className="w-3 h-3 text-[#0284c7]" />
                            {company.sector}
                          </span>
                          <span className="px-3 py-0.5 rounded-full text-xs font-sans font-medium bg-[#f0f8ff] text-[#0284c7] border border-[#cee7fc] flex items-center gap-1">
                            <Zap className="w-3 h-3 text-[#0284c7]" />
                            {company.stage}
                          </span>
                          <span className="px-3 py-0.5 rounded-full text-xs font-sans font-medium bg-[#f8fafc] text-neutral-600 border border-neutral-200">
                            {company.thesis}
                          </span>
                        </div>

                        {company.founders && (
                          <div className="flex items-center gap-1.5 font-sans text-xs text-neutral-500">
                            <Users className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{company.founders}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Arrow Button */}
                    <div className="hidden md:flex w-9 h-9 rounded-full bg-[#f0f8ff] group-hover:bg-[#0284c7] text-[#0284c7] group-hover:text-white items-center justify-center transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Empty Search Result State */}
          {filteredCompanies.length === 0 && (
            <div className="py-24 text-center border-2 border-dashed border-neutral-300 rounded-2xl bg-neutral-50/50 mt-10">
              <Building2 className="w-10 h-10 mx-auto text-neutral-400 mb-3" />
              <p className="font-display font-bold text-lg text-neutral-900">
                No portfolio companies match your criteria
              </p>
              <p className="mt-1 font-mono text-xs text-neutral-500">
                Try searching another sector, company name, or founder.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSector("ALL");
                  setActiveFund("ALL");
                }}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0284c7] text-white font-sans text-xs font-semibold hover:bg-[#036089] transition-colors"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. CORPORATE TELEMETRY & FOUNDER VOICES STRIP ── */}
      <section className="py-14 sm:py-18 border-y-2 border-neutral-900 bg-neutral-950 text-white">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">{companies.length}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Category Leaders Backed
              </div>
            </div>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">2</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                SEBI-Registered AIFs
              </div>
            </div>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">₹2-25 Cr</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Institutional Cheques
              </div>
            </div>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">100%</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Direct Partner Lead
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. NEXT STEPS (FOR FOUNDERS & INVESTORS) ── */}
      <section className="container-tight py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Callout Card: Pitch Us */}
          <div
            onClick={() => navigate({ to: "/contact" })}
            role="button"
            tabIndex={0}
            className="group relative h-72 sm:h-80 rounded-[28px] border-2 border-neutral-900/15 hover:border-neutral-950 bg-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer hover:bg-neutral-50 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-950 text-white font-bold">
                NEXT
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-950 text-white font-bold">
                ● ACTIVE INTAKE
              </span>
            </div>
            <div className="my-auto text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">
                FOR FOUNDERS
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-neutral-950">
                Pitch Your Startup
              </h4>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Seed to Series A checks from ₹2 Cr to ₹25 Cr. Direct partner evaluation within 14
                days.
              </p>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-neutral-950 font-bold flex items-center justify-between pt-4 border-t border-black/10">
              <span>Submit Pitch Deck</span>
              <span className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform font-bold">
                →
              </span>
            </div>
          </div>

          {/* Callout Card: Funds & LPs */}
          <div
            onClick={() => navigate({ to: "/funds" })}
            role="button"
            tabIndex={0}
            className="group relative h-72 sm:h-80 rounded-[28px] border-2 border-neutral-800 hover:border-white bg-neutral-950 text-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer hover:bg-neutral-900 transition-all shadow-md hover:shadow-xl"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">
                ALLOCATION
              </span>
              <span className="text-white/60 font-semibold">SEBI AIFs</span>
            </div>
            <div className="my-auto text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                FOR INVESTORS
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-white">
                Funds &amp; LPs
              </h4>
              <p className="mt-2 font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                Institutional LP access, co-investment rights, and audited fiduciary governance.
              </p>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center justify-between pt-4 border-t border-white/15">
              <span>Explore Vehicles</span>
              <span className="w-7 h-7 rounded-full bg-white text-neutral-950 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform font-bold">
                →
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


