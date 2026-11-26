import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import { getMilestoneDate } from "@/lib/utils";
import mdWatermark from "@/assets/md-watermark.png";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Facebook,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Newspaper,
} from "lucide-react";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const company = companies.find((c) => c.slug === params.slug);
    if (!company) throw notFound();
    return { company };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
        { title: `${loaderData.company.name} | Portfolio Dossier | Mount Judi Ventures` },
        { name: "description", content: loaderData.company.oneLiner },
        { property: "og:title", content: `${loaderData.company.name} | Mount Judi Ventures` },
        { property: "og:description", content: loaderData.company.oneLiner },
        { property: "og:image", content: loaderData.company.image },
        { property: "og:type", content: "article" },
      ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-tight py-32 text-center bg-[var(--paper)]">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider mb-4">
        404 Not Found
      </div>
      <h1 className="font-display text-4xl font-extrabold uppercase text-neutral-950">
        Record Missing from Registry
      </h1>
      <Link
        to="/portfolio"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors"
      >
        Return to Portfolio
      </Link>
    </div>
  ),
  component: CompanyPage,
});

function CompanyPage() {
  const { company: c } = Route.useLoaderData();

  // Per-category color mapping (Consumer / Consumer Enablers / Disruptive Tech)
  const thesisColor =
    c.thesis === "Consumer Brands"
      ? { bg: "bg-[#b78c2d]", text: "text-[#b78c2d]", dot: "#b78c2d" }
      : c.thesis === "Consumer Enablers"
        ? { bg: "bg-[#0ab1d7]", text: "text-[#0ab1d7]", dot: "#0ab1d7" }
        : { bg: "bg-[#1e6086]", text: "text-[#1e6086]", dot: "#1e6086" };

  // Find adjacent companies for footer navigation
  const currentIndex = companies.findIndex((item) => item.slug === c.slug);
  const prevCompany = companies[(currentIndex - 1 + companies.length) % companies.length];
  const nextCompany = companies[(currentIndex + 1) % companies.length];

  const vehicleName =
    c.fund === "Both"
      ? "MJIMF & MJIGF"
      : c.fund === "Growth Fund"
        ? "MJIGF"
        : c.fund === "Micro Fund"
          ? "MJIMF"
          : (c.fund ?? "MJIGF");

  const statusDotColor =
    c.status === "Active"
      ? "bg-emerald-500 ring-emerald-500/20"
      : c.status === "Acquired"
        ? "bg-blue-500 ring-blue-500/20"
        : c.status === "Partially Exited"
          ? "bg-amber-500 ring-amber-500/20"
          : "bg-neutral-900 ring-neutral-900/20";

  return (
    <article className="bg-[var(--paper)] text-[var(--ink)] min-h-screen selection:bg-[#036089]/20 selection:text-neutral-900">
      {/* ── 1. ARCHIVAL HERO & METADATA SPREAD ── */}
      <section className="border-b border-neutral-200/80 pt-10 pb-0 md:pt-14 bg-white relative overflow-hidden">
        {/* Mountain watermark texture */}
        <div className="absolute -top-8 -right-4 w-[560px] h-[680px] pointer-events-none hidden md:block opacity-[0.70] mix-blend-multiply">
          <img
            src={mdWatermark}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain object-right-top"
          />
        </div>

        <div className="container-tight relative z-10">
          {/* Breadcrumb Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-neutral-500 hover:text-neutral-950 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Portfolio</span>
              <span className="text-neutral-300">/</span>
              <span className={thesisColor.text}>{c.thesis}</span>
            </Link>

            <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              <span>MJV Portfolio Dossier</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-900">{c.vintage || `FY${String(c.year).slice(-2)}`}</span>
            </div>
          </div>

          {/* Main Hero Header: Company Info + Architectural Logo Card */}
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-end pb-12 md:pb-16">
            <div>
              {/* Badges Cluster */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${thesisColor.bg} text-white font-mono text-[11px] uppercase tracking-wider font-bold shadow-2xs`}>
                  {c.thesis}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200/90 font-mono text-[11px] uppercase tracking-wider font-bold">
                  {c.sector}
                </span>
                {c.vintage && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-50 text-neutral-600 border border-neutral-200/70 font-mono text-[11px] uppercase tracking-wider font-bold">
                    VINTAGE {c.vintage}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/90 text-neutral-800 font-mono text-[11px] uppercase tracking-wider font-bold shadow-2xs">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor.split(" ")[0]}`} />
                  {c.status}
                </span>
              </div>

              {/* Stage Progression Pipeline */}
              {c.stages && c.stages.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold mr-1">
                    Stages:
                  </span>
                  {c.stages.map((s, i) => {
                    const isLatest = i === c.stages.length - 1;
                    return (
                      <span key={i} className="inline-flex items-center gap-1">
                        {i > 0 && <span className="text-neutral-300 font-mono text-[10px]">→</span>}
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-bold ${isLatest
                            ? "bg-neutral-950 text-white shadow-2xs"
                            : "bg-neutral-100 text-neutral-600 border border-neutral-200/70"
                            }`}
                        >
                          {s}
                        </span>
                      </span>
                    );
                  })}
                </div>
              )}

              {/* Large Display Title */}
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight leading-[0.92] text-neutral-950">
                {c.name}
              </h1>

              {/* Editorial Tagline */}
              <p className="mt-5 font-serif italic text-xl sm:text-2xl md:text-[26px] text-neutral-700 max-w-3xl leading-snug border-l-2 border-[#036089]/60 pl-4 py-0.5">
                &ldquo;{c.tagline}&rdquo;
              </p>

              {/* Quick Web & Social Links */}
              <div className="mt-7 flex flex-wrap items-center gap-2">
                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 text-neutral-900 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-bold shadow-2xs group cursor-pointer"
                  >
                    <Globe className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    <span>{c.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {c.socials?.instagram && (
                  <a
                    href={c.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 hover:border-neutral-950 text-neutral-800 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group cursor-pointer"
                  >
                    <Instagram className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {c.socials?.youtube && (
                  <a
                    href={c.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 hover:border-neutral-950 text-neutral-800 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group cursor-pointer"
                  >
                    <Youtube className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    <span>YouTube</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {c.socials?.linkedin && (
                  <a
                    href={c.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 hover:border-neutral-950 text-neutral-800 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group cursor-pointer"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {c.socials?.twitter && (
                  <a
                    href={c.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 hover:border-neutral-950 text-neutral-800 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group cursor-pointer"
                  >
                    <Twitter className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    <span>X</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {c.socials?.facebook && (
                  <a
                    href={c.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 hover:border-neutral-950 text-neutral-800 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group cursor-pointer"
                  >
                    <Facebook className="h-3.5 w-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    <span>Facebook</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>

            {/* Architectural Logo Canvas Card */}
            <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 flex items-center justify-center h-36 sm:h-44 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all relative overflow-hidden group">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000 1px, transparent 1px),
                    linear-gradient(to bottom, #000 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Minimalist Sub-Bar Metadata Strip */}
        <div className="w-full border-t border-neutral-200/80 bg-neutral-50/70 text-neutral-900 px-6 sm:px-10 py-3.5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: thesisColor.dot }} />
            <span className="text-neutral-950">{c.thesis}</span>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-700">{c.sector}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] text-neutral-600">
            <span>Stage: <span className="text-neutral-900">{c.stages.join(" → ")}</span></span>
            <span className="text-neutral-300">·</span>
            {c.vintage && (
              <>
                <span>Vintage: <span className="text-neutral-900">{c.vintage}</span></span>
                <span className="text-neutral-300">·</span>
              </>
            )}
            <span>
              Vehicle: <span className="text-neutral-900">{vehicleName}</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. CORE DOSSIER & OPERATIONAL SPREAD ── */}
      <section className="container-tight py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ═══════════════════════════════════════════════════════
              LEFT COLUMN: FIELD DEPLOYMENT & TECHNICAL SPEC SHEET
             ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 space-y-7 lg:sticky lg:top-24 lg:self-start">
            {/* Operational Field Deployment Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-sm bg-neutral-950 group">
              <img
                src={c.image}
                alt={c.name}
                className={`h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${c.imagePosition ?? (c.slug === "internshala" ? "object-top" : "")}`}
                width={1200}
                height={900}
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider border border-white/20 font-bold shadow-md">
                  {c.name} · FIELD DEPLOYMENT
                </div>
              </div>
            </div>

            {/* Technical Attributes Ledger (Specification Sheet) */}
            <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: thesisColor.dot }} />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900">
                    Investment Specs
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 font-mono text-[10px] font-bold tracking-wider uppercase text-neutral-700">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor.split(" ")[0]}`} />
                  {c.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                {/* Thesis Pillar Header Tile */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950 text-white col-span-2 shadow-2xs">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                    Thesis Pillar
                  </div>
                  <div className="mt-1 font-bold text-sm sm:text-base text-white">
                    {c.thesis}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50/90 border border-neutral-200/60">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Sector
                  </div>
                  <div className="mt-1 font-bold text-xs sm:text-sm text-neutral-950 truncate">
                    {c.sector}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50/90 border border-neutral-200/60">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Current Stage
                  </div>
                  <div className="mt-1 font-bold text-xs sm:text-sm text-neutral-950 truncate">
                    {c.stage}
                  </div>
                </div>

                {/* Stage Progression Tile */}
                {c.stages && c.stages.length > 1 && (
                  <div className="p-3.5 rounded-xl bg-neutral-50/90 border border-neutral-200/60 col-span-2">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
                      Stage Progression
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {c.stages.map((s, i) => (
                        <span key={i} className="inline-flex items-center gap-1">
                          {i > 0 && <span className="text-neutral-400 text-[10px]">→</span>}
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold ${i === c.stages.length - 1
                              ? "bg-neutral-950 text-white"
                              : "bg-neutral-200/80 text-neutral-700"
                              }`}
                          >
                            {s}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-neutral-50/90 border border-neutral-200/60">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Vintage
                  </div>
                  <div className="mt-1 font-bold text-xs sm:text-sm text-neutral-950">
                    {c.vintage || `FY${String(c.year).slice(-2)}`}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50/90 border border-neutral-200/60">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Status
                  </div>
                  <div className="mt-1 font-bold text-xs sm:text-sm text-neutral-950 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor.split(" ")[0]}`} />
                    {c.status}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50/90 border border-neutral-200/60">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Fund Vehicle
                  </div>
                  <div className="mt-1 font-bold text-xs sm:text-sm text-neutral-950">
                    {vehicleName}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50/90 border border-neutral-200/60">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Direct Domain
                  </div>
                  <div className="mt-1 font-bold text-xs sm:text-sm truncate">
                    {c.website ? (
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-950 hover:text-[#036089] underline font-bold inline-flex items-center gap-0.5 transition-colors"
                      >
                        <span>{c.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                        <ArrowUpRight className="h-3 w-3 inline" />
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Associated Brand Card (e.g. Maison X for Thimblerr) */}
            {c.associatedBrand && (
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#036089]" />
                    <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900">
                      {c.associatedBrand.name}
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#036089]/10 text-[#036089] font-mono text-[10px] font-bold tracking-wider uppercase">
                    {c.associatedBrand.category || "D2C Brand"}
                  </span>
                </div>

                {/* Header Tile */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950 text-white shadow-2xs mb-3">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                    {c.associatedBrand.relationship || `Operated by ${c.name}`}
                  </div>
                  <div className="mt-1 font-bold text-sm sm:text-base text-white">
                    {c.associatedBrand.name} {c.associatedBrand.tagline ? `· ${c.associatedBrand.tagline}` : ""}
                  </div>
                  {c.associatedBrand.description && (
                    <p className="mt-1 text-xs text-neutral-300 font-sans leading-relaxed">
                      {c.associatedBrand.description}
                    </p>
                  )}
                </div>

                {/* Links */}
                <div className="space-y-2 font-mono text-xs">
                  {c.associatedBrand.website && (
                    <a
                      href={c.associatedBrand.website}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl bg-neutral-50/90 border border-neutral-200/60 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:border-neutral-800 group-hover:text-white transition-colors shrink-0">
                          <Globe className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0 truncate">
                          <div className="text-[9px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400 font-bold">
                            Website
                          </div>
                          <div className="font-bold text-xs text-neutral-950 group-hover:text-white truncate">
                            {c.associatedBrand.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors shrink-0 ml-2" />
                    </a>
                  )}

                  {c.associatedBrand.socials?.instagram && (
                    <a
                      href={c.associatedBrand.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl bg-neutral-50/90 border border-neutral-200/60 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:border-neutral-800 group-hover:text-white transition-colors shrink-0">
                          <Instagram className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0 truncate">
                          <div className="text-[9px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400 font-bold">
                            Instagram
                          </div>
                          <div className="font-bold text-xs text-neutral-950 group-hover:text-white truncate">
                            @{c.associatedBrand.socials.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, "").replace(/\/$/, "")}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors shrink-0 ml-2" />
                    </a>
                  )}

                  {c.associatedBrand.socials?.twitter && (
                    <a
                      href={c.associatedBrand.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl bg-neutral-50/90 border border-neutral-200/60 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:border-neutral-800 group-hover:text-white transition-colors shrink-0">
                          <Twitter className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0 truncate">
                          <div className="text-[9px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400 font-bold">
                            X (Twitter)
                          </div>
                          <div className="font-bold text-xs text-neutral-950 group-hover:text-white truncate">
                            @{c.associatedBrand.socials.twitter.replace(/^https?:\/\/(www\.)?(twitter|x)\.com\//, "").replace(/\/$/, "")}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors shrink-0 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ═══════════════════════════════════════════════════════
              RIGHT COLUMN: EDITORIAL DOSSIER & INVESTMENT MEMO
             ═══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-14">
            {/* 01 // OVERVIEW */}
            {c.description && (
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#036089] font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                  <span>Company Overview</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-tight mb-4">
                  What {c.name} Does
                </h2>
                <div className="font-sans text-base sm:text-[17px] leading-relaxed text-neutral-700 space-y-4">
                  {c.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* 02 // WHY WE INVESTED MEMORANDUM */}
            {c.whyInvested && (
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#036089] font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                  <span>Investment Thesis</span>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-[#fbfbfb] p-7 sm:p-9 shadow-2xs hover:border-neutral-300 transition-colors relative overflow-hidden">
                  <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-neutral-200/70">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#036089]/10 text-[#036089] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#036089]/20">
                      <Sparkles className="w-3 h-3" />
                      <span>Why We Invested</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                      MJV Partner Memorandum
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 mb-4 tracking-tight">
                    Core Investment Rationale
                  </h3>
                  <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-800 space-y-3.5">
                    {c.whyInvested.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 03 // THE PROBLEM WE SAW (If Defined) */}
            {c.problem && (
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#036089] font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                  <span>Market Inefficiency</span>
                </div>
                <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-7 shadow-2xs">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-950 mb-3 tracking-tight">
                    The Problem Solved
                  </h3>
                  <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-700 space-y-3">
                    {c.problem.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 04 // SCALE & TRACTION */}
            {c.growthSinceInvestment && (
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#036089] font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                  <span>04 // Scale &amp; Traction</span>
                </div>
                <div className="rounded-2xl bg-white border border-neutral-200/90 border-l-4 border-l-[#036089] p-6 sm:p-8 shadow-2xs">
                  <div className="flex items-center gap-2 font-display font-bold text-lg sm:text-xl text-neutral-950 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#036089]" />
                    <span>Growth Since Investment</span>
                  </div>
                  <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-800 space-y-3">
                    {c.growthSinceInvestment.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 05 // KEY ACHIEVEMENTS / CONVICTION POINTS */}
            {(() => {
              const points = c.keyAchievements ?? c.convictionPoints;
              if (!points || points.length === 0) return null;
              return (
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#036089] font-bold mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                    <span> {c.keyAchievements ? "Key Achievements" : "Conviction Points"}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 mb-5 tracking-tight">
                    Operating Milestones &amp; Proof Points
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {points.map((p: string, i: number) => (
                      <li
                        key={p}
                        className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-md bg-[#036089]/10 text-[#036089] flex items-center justify-center font-mono text-[11px] font-bold shrink-0 mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-800 font-medium">
                            {p}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* 06 // FOUNDING LEADERSHIP */}
            {(() => {
              const raw = c.founders ?? "";
              if (!raw || /^founding\b/i.test(raw.trim())) return null;
              const names = raw
                .split("·")
                .map((n: string) => n.replace(/\(.*?\)/g, "").trim())
                .filter(Boolean);
              if (names.length === 0) return null;
              return (
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#036089] font-bold mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                    <span>Leadership Team</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 mb-5 tracking-tight">
                    Founders &amp; Operators
                  </h3>
                  <ul className="grid gap-3.5 sm:grid-cols-2">
                    {names.map((name: string) => {
                      const direct = c.founderLinkedins?.[name];
                      const q = encodeURIComponent(`${name} ${c.name}`);
                      const href = direct || `https://www.linkedin.com/search/results/people/?keywords=${q}`;
                      return (
                        <li key={name}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200/90 bg-white p-4 sm:p-5 hover:border-neutral-950 hover:shadow-sm transition-all shadow-2xs"
                          >
                            <div className="min-w-0">
                              <span className="font-display text-sm sm:text-base font-bold text-neutral-950 group-hover:text-neutral-900 transition-colors truncate block">
                                {name}
                              </span>
                              <span className="font-mono text-[11px] text-neutral-500 font-medium block mt-0.5">
                                Co-Founder - Leadership
                              </span>
                            </div>
                            <span className="px-3 py-1.5 rounded-full bg-neutral-100 font-mono text-[10px] uppercase tracking-wider text-neutral-800 group-hover:bg-[#036089] group-hover:text-white transition-all inline-flex items-center gap-1 font-bold shrink-0 border border-neutral-200 group-hover:border-[#036089]">
                              <span>LinkedIn</span>
                              <ArrowUpRight className="h-3 w-3" />
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })()}

            {/* 07 // MEDIA COVERAGE */}
            {c.milestones && c.milestones.length > 0 && (
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#036089] font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                  <span> Media Coverage</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 mb-5 tracking-tight">
                  Press &amp; Citations
                </h3>
                <div className="space-y-3">
                  {c.milestones.map((m: { title: string; url: string; image?: string; date?: string }) => {
                    const articleDate = getMilestoneDate(m, c.year);
                    return (
                      <a
                        key={m.title}
                        href={m.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 sm:p-5 rounded-2xl border border-neutral-200/80 bg-white flex items-center justify-between gap-4 font-mono text-xs hover:border-neutral-950 hover:shadow-xs transition-all shadow-2xs group"
                      >
                        <span className="font-sans font-bold text-xs sm:text-sm text-neutral-900 group-hover:text-[#036089] transition-colors flex items-center gap-2.5 min-w-0">
                          <span className="text-neutral-400 group-hover:text-[#036089] group-hover:translate-x-0.5 transition-all shrink-0">
                            →
                          </span>
                          <span className="truncate">{m.title}</span>
                        </span>
                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="px-2.5 py-1 rounded-full bg-neutral-100 font-mono text-[10px] text-neutral-700 font-bold tracking-wider uppercase border border-neutral-200/60">
                            {articleDate}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ── 3. ADJACENT COMPANY PAGINATION ── */}
        <div className="mt-14 pt-8 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/portfolio/$slug"
            params={{ slug: prevCompany.slug }}
            className="p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-950 transition-all shadow-2xs group flex items-center gap-4"
          >
            <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                Previous Company
              </div>
              <div className="font-display font-bold text-base text-neutral-950 truncate">
                {prevCompany.name}
              </div>
            </div>
          </Link>

          <Link
            to="/portfolio/$slug"
            params={{ slug: nextCompany.slug }}
            className="p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-950 transition-all shadow-2xs group flex items-center justify-between text-right gap-4"
          >
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                Next Company
              </div>
              <div className="font-display font-bold text-base text-neutral-950 truncate">
                {nextCompany.name}
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* ── 4. FOOTER INTAKE BANNER ── */}
        <div className="mt-12 md:mt-16 rounded-2xl sm:rounded-3xl border border-neutral-900 bg-neutral-950 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs tracking-wider font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d9a13b]" />
              <span>BUILDING IN {c.sector.toUpperCase()}?</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Building wealth through symbiotic growth
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans max-w-md">
              Initial cheques of ₹2 Cr to ₹25 Cr. Direct review by General Partners.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md shrink-0 relative z-10 group"
          >
            <span>Submit Your Deck</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
