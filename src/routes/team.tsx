import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  team,
  generalPartners,
  advisoryBoard,
  type TeamMember,
  type GeneralPartner,
  type ProfilePerson,
} from "@/lib/team-data";
import { ArrowUpRight, X, Sparkles, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Operators & Partners | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Four decades of operating pedigree. Entrepreneurs, operators, and investment committee partners backing category leaders across India.",
      },
      { property: "og:title", content: "Operators & Partners | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "Operators, founders, and investors committed to backing enduring companies with patience and conviction.",
      },
      { property: "og:url", content: "/team" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const EXCLUDED = new Set(["ajish-rahman", "mohammed-mobeen-ismail-batla"]);

/* ─── 3D Glossy Cobalt Pushpin Component (Matches Slide 1) ─── */
function BluePushpin({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Drop shadow */}
      <div className="absolute top-4 w-4 h-2 bg-black/20 rounded-full blur-[1.5px]" />
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" className="relative z-10">
        {/* Needle pin */}
        <path d="M14 24L14 31" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" />
        {/* Pin base collar */}
        <ellipse cx="14" cy="23" rx="6" ry="2.2" fill="#0047cc" />
        <ellipse cx="14" cy="22" rx="4.8" ry="1.8" fill="#1d6bf3" />
        {/* Pin neck */}
        <path d="M9.5 15C9.5 19 11.2 22 14 22C16.8 22 18.5 19 18.5 15L17.5 11.5C17.5 11.5 10.5 11.5 10.5 11.5L9.5 15Z" fill="url(#pinGrad)" />
        {/* Sphere dome */}
        <circle cx="14" cy="9.5" r="8" fill="url(#domeGrad)" />
        {/* Specular high-gloss highlight */}
        <ellipse cx="11.5" cy="7" rx="3.5" ry="2" fill="#ffffff" opacity="0.8" transform="rotate(-28 11.5 7)" />
        <circle cx="16.5" cy="11.5" r="1.2" fill="#93c5fd" opacity="0.6" />
        <defs>
          <linearGradient id="pinGrad" x1="9.5" y1="11.5" x2="18.5" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0052e0" />
            <stop offset="1" stopColor="#0035a8" />
          </linearGradient>
          <radialGradient id="domeGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="40%" stopColor="#3b66ff" />
            <stop offset="100%" stopColor="#0035a8" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Angled Folder Tab Deck (Matches Slide 1 & Slide 2 Bottom Tabs) ─── */
function FolderTabDeck({ label }: { label: string }) {
  return (
    <div className="w-full pb-10 md:pb-14">
      {/* Rounded pill strip — matches home page "Stage Focus" bar */}
      <div className="rounded-full border border-[rgba(12,26,46,0.08)] bg-[var(--paper-subtle)] pl-2 pr-2 py-2 flex items-center justify-between gap-3 select-none shadow-2xs">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35]" />
          {label}
        </span>
        <span className="w-8 h-8 rounded-full bg-[#d8fb35] text-neutral-900 flex items-center justify-center font-bold text-sm">
          →
        </span>
      </div>
    </div>
  );
}

/* ─── Clinking Champagne Glasses Icon (Matches Slide 1 Blue Badge) ─── */
function ClinkingGlassesIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      {/* Left Champagne Flute */}
      <g transform="translate(1, 1) rotate(14 13 18)">
        <path d="M10 5 C10 13, 14 14, 14 14 C14 14, 18 13, 18 5 Z" fill="#ffffff" />
        <path d="M11.5 6 C11.5 11, 14 12.5, 14 12.5 C14 12.5, 16.5 11, 16.5 6 Z" fill="#fef08a" opacity="0.65" />
        <line x1="14" y1="14" x2="14" y2="23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="14" cy="23.5" rx="4" ry="1.4" fill="#ffffff" />
      </g>
      {/* Right Champagne Flute */}
      <g transform="translate(1, 1) rotate(-14 21 18)">
        <path d="M17 5 C17 13, 21 14, 21 14 C21 14, 25 13, 25 5 Z" fill="#ffffff" />
        <path d="M18.5 6 C18.5 11, 21 12.5, 21 12.5 C21 12.5, 23.5 11, 23.5 6 Z" fill="#fef08a" opacity="0.65" />
        <line x1="21" y1="14" x2="21" y2="23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="21" cy="23.5" rx="4" ry="1.4" fill="#ffffff" />
      </g>
      {/* Bubbles / Sparkle */}
      <circle cx="17.5" cy="6" r="1.1" fill="#ffffff" />
      <circle cx="19.5" cy="4.5" r="0.8" fill="#ffffff" />
      <circle cx="15.5" cy="4" r="0.8" fill="#ffffff" />
    </svg>
  );
}

/* ─── Geometric Emblem Marks (Matches Slide 2 Alternating Squircles) ─── */
function GeometricEmblem({ type }: { type: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const color = "#171717"; // Ink emblem matching home theme
  switch (type) {
    case 1: // Amphora / Vessel
      return (
        <svg width="44" height="52" viewBox="0 0 44 52" fill={color}>
          <path d="M14 4H30V8C30 8 36 12 36 20C36 28 30 32 30 36V44H14V36C14 32 8 28 8 20C8 12 14 8 14 8V4Z" />
          <path d="M12 2H32V5H12V2Z" />
          <path d="M10 44H34V48H10V44Z" />
        </svg>
      );
    case 2: // Geometric Biscuit / Wafer
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill={color}>
          <rect x="8" y="10" width="32" height="28" rx="6" />
          <circle cx="8" cy="16" r="3" fill="#f4f4f0" />
          <circle cx="8" cy="24" r="3" fill="#f4f4f0" />
          <circle cx="8" cy="32" r="3" fill="#f4f4f0" />
          <circle cx="40" cy="16" r="3" fill="#f4f4f0" />
          <circle cx="40" cy="24" r="3" fill="#f4f4f0" />
          <circle cx="40" cy="32" r="3" fill="#f4f4f0" />
        </svg>
      );
    case 3: // Bowtie / Hourglass Polygon
      return (
        <svg width="46" height="42" viewBox="0 0 46 42" fill={color}>
          <path d="M6 8C6 8 18 21 18 21L6 34C6 34 23 29 23 21C23 13 6 8 6 8Z" />
          <path d="M40 8C40 8 28 21 28 21L40 34C40 34 23 29 23 21C23 13 40 8 40 8Z" />
        </svg>
      );
    case 4: // Architectural Urn / Tiered Pedestal
      return (
        <svg width="48" height="44" viewBox="0 0 48 44" fill={color}>
          <ellipse cx="24" cy="12" rx="14" ry="7" />
          <path d="M16 14C16 14 14 26 18 32H30C34 26 32 14 32 14H16Z" />
          <rect x="14" y="32" width="20" height="6" rx="2" />
        </svg>
      );
    case 5: // Shield / Crown Cap
      return (
        <svg width="46" height="44" viewBox="0 0 46 44" fill={color}>
          <path d="M8 12L23 6L38 12V24C38 34 23 40 23 40C23 40 8 34 8 24V12Z" />
        </svg>
      );
    case 6: // Curved Ribbon Knot
      return (
        <svg width="50" height="34" viewBox="0 0 50 34" fill={color}>
          <rect x="8" y="10" width="34" height="14" rx="7" />
          <circle cx="25" cy="17" r="5" fill="#f4f4f0" />
        </svg>
      );
  }
}

/* ─── Workflow Step Data ─── */
const workflowSteps = [
  {
    title: "Diligence & Conviction",
    subtitle: "14-Day IC SLA",
    detail: "Direct partner review without analyst screening bottlenecks.",
    offset: "translate-y-3 sm:translate-y-4",
  },
  {
    title: "Boardroom Governance",
    subtitle: "Fiduciary Standards",
    detail: "Clean cap table oversight, UN PRI alignment, zero toxic preferences.",
    offset: "-translate-y-2 sm:-translate-y-3",
  },
  {
    title: "Executive Co-Piloting",
    subtitle: "Operator Counsel",
    detail: "40+ years experience guiding pricing, org design, and crisis triage.",
    offset: "translate-y-2 sm:translate-y-3",
  },
  {
    title: "Enterprise Access",
    subtitle: "Warm Buyer Corridors",
    detail: "Direct introductions to healthcare networks, state agencies, and retail.",
    offset: "-translate-y-3 sm:-translate-y-4",
  },
  {
    title: "Margin Discipline",
    subtitle: "Unit Economics",
    detail: "Sustainable gross margins and positive cash flows before blitzscaling.",
    offset: "translate-y-3 sm:translate-y-4",
  },
  {
    title: "Follow-On Reserves",
    subtitle: "Seed to Series A",
    detail: "Dedicated capital pools backing enduring winners across cycles.",
    offset: "-translate-y-2 sm:-translate-y-2",
  },
];

function TeamPage() {
  const members = team.filter((m) => !EXCLUDED.has(m.slug));
  const [active, setActive] = useState<ProfilePerson | null>(null);

  const memberMap = new Map(members.map((m) => [m.slug, m]));
  const sherif = memberMap.get("sherif-kottapurath");
  const ebaad = memberMap.get("ebaad-momin");
  const ali = memberMap.get("mohammed-ali-shariff");
  const anamika = memberMap.get("anamika-saksena");
  const imad = memberMap.get("imad-shariff");
  const praharsh = memberMap.get("praharsh-shahi");
  const areeb = memberMap.get("areeb-khan");

  const renderPartnerCard = (m: TeamMember) => (
    <button
      key={m.slug}
      type="button"
      onClick={() => setActive(m)}
      className="bg-[#f4f4f0] border border-black/10 rounded-2xl sm:rounded-3xl p-3 flex flex-col justify-between text-left group cursor-pointer hover:scale-[1.02] transition-transform duration-200 h-full"
    >
      <div>
        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-white/60 flex items-center justify-center p-1">
          <img
            src={m.photo}
            alt={m.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-3 px-1">
          <div className="font-display text-sm font-bold text-[#171717] truncate">
            {m.name}
          </div>
          <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5 truncate">
            {m.role}
          </div>
        </div>
      </div>

      {/* Dedicated Tagline Box with padding below (NOT on the photo) */}
      {m.summary && (
        <div className="mt-2.5 bg-white/70 border border-black/5 rounded-xl p-2.5 px-3">
          <div className="flex items-start gap-1.5">
            <span className="text-xs text-stone-400 font-serif leading-none select-none">“</span>
            <p className="font-sans text-[11px] text-neutral-700 leading-snug">
              {m.summary}
            </p>
          </div>
        </div>
      )}
    </button>
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          SHEET 1: THE OPERATOR WORKFLOW (MATCHES REFERENCE SLIDE 1)
          - String line with 3D blue pushpins
          - Hanging lilac rounded cards
          - Top-right blue celebration badge
          - Bottom folder tab labeled "MY WORKFLOW"
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="relative container-tight">
<div className="container-tight relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35] animate-pulse" />
              <span>[ OPERATOR NETWORK // MOUNT JUDI ]</span>
            </div>
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest font-semibold">
              ┌ 40+ YEARS CUMULATIVE PEDIGREE
            </span>
          </div>
        </div>
          <div className="relative py-10 md:py-14">
            {/* Header Row */}
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-md">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-neutral-900 leading-tight tracking-tight">
                  From planning to
                  <br />
                  <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans font-bold">Optimization</span>
                </h2>
                <p className="mt-8 font-sans text-sm md:text-base text-neutral-700 leading-relaxed max-w-2xl">
              Mount Judi is built by entrepreneurs who have navigated recessions, scaled manufacturing plants, built pan-India distribution chains, and exited companies. We partner with founders not as detached spreadsheets, but as seasoned co-pilots.
            </p>
              </div>

              {/* Top-Right Circular Cobalt Badge (Matches Slide 1 with clinking champagne glasses) */}
              <div className="shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#3b66ff] flex items-center justify-center p-3 text-white shadow-md shadow-blue-500/20">
                <ClinkingGlassesIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
            </div>

            {/* ─── HANGING PINNED CARDS SEQUENCE ON A STRING ─── */}
            <div className="relative mt-12 mb-14 pt-8">
              {/* Undulating String Curve (Matches Slide 1 Hand-Drawn Curve) */}
              <svg
                className="absolute top-7 left-0 right-0 w-full h-14 pointer-events-none hidden lg:block"
                viewBox="0 0 1000 70"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 20 44 C 50 43, 65 42, 83 42 C 140 45, 195 24, 250 16 C 305 10, 360 40, 417 44 C 475 48, 525 22, 583 14 C 640 6, 695 38, 750 42 C 805 46, 860 22, 917 16 C 945 14, 970 20, 990 26"
                  stroke="#171717"
                  strokeWidth="1.6"
                  strokeDasharray="4 3"
                  opacity="0.55"
                />
              </svg>

              {/* 6 Pinned Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 relative z-10">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className={`relative flex flex-col items-center transition-transform duration-300 ${step.offset}`}
                  >
                    {/* 3D Blue Pushpin pinning card to string */}
                    <BluePushpin className="absolute -top-4 z-20" />

                    {/* Lilac Hanging Card */}
                    <div className="w-full bg-[#f4f4f0] border border-black/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 pt-9 min-h-[175px] sm:min-h-[200px] flex flex-col justify-end text-left shadow-sm hover:scale-[1.03] transition-all duration-200">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-bold">
                        0{idx + 1}
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-[#171717] leading-snug mt-1">
                        {step.title}
                      </h3>
                      <div className="mt-1 font-mono text-[10px] text-neutral-700 leading-snug">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-Right Summary Paragraph (Matches Slide 1 Layout) */}
            <div className="flex justify-end pt-4">
              <p className="font-mono text-xs sm:text-sm text-neutral-700 max-w-xl text-right leading-relaxed">
                Every project begins with research and strategy, followed by content planning, creation, publishing, performance tracking, and continuous optimization for long-term growth.
              </p>
            </div>
          </div>

          {/* Bottom Tab Deck (Matches Slide 1 "MY WORKFLOW →") */}
          <FolderTabDeck label="MY WORKFLOW" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
      {/* ═══════════════════════════════════════════════════════════
          SHEET 2: CORE OPERATING PARTNERS (BRANDS AND CREATIVE PARTNERSHIPS)
          - Matches UI/UX of General Partners & Advisory Council
          - 4-column balanced grid:
            Row 1: [Heading & Text] [Sherif] [Ebaad] [Mohammed Ali]
            Row 2: [Anamika] [Imad] [Praharsh] [Areeb]
          - Anamika placed directly on the left side of Imad
          - Bottom folder tab labeled "EXPERIENCE"
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="relative container-tight">
          <div className="relative py-10 md:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              {/* Cell 1 (Row 1, Col 1): Heading + Descriptive Text */}
              <div className="flex flex-col justify-between h-full p-2 sm:p-3 pr-4 space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl font-extrabold uppercase text-neutral-900 leading-tight tracking-tight">
                    Brands and creative
                    <br />
                    partnerships
                  </h2>
                </div>

                <div className="pt-4 lg:pt-8">
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    Worked with startups, local businesses, personal brands, and creative teams across fashion, lifestyle, food, and digital industries.
                  </p>
                  <p className="mt-4 font-sans text-xs text-neutral-500 leading-relaxed">
                    Four decades of operating pedigree. Entrepreneurs, operators, and technologists backing category leaders across India.
                  </p>
                </div>
              </div>

              {/* Cell 2 (Row 1, Col 2): Sherif Kottapurath */}
              {sherif && renderPartnerCard(sherif)}

              {/* Cell 3 (Row 1, Col 3): Dr. Ebaad Momin */}
              {ebaad && renderPartnerCard(ebaad)}

              {/* Cell 4 (Row 1, Col 4): Mohammed Ali Shariff */}
              {ali && renderPartnerCard(ali)}

              {/* Cell 5 (Row 2, Col 1): Anamika Saksena (positioned on the left of Imad) */}
              {anamika && renderPartnerCard(anamika)}

              {/* Cell 6 (Row 2, Col 2): Imad Ahmed Shariff */}
              {imad && renderPartnerCard(imad)}

              {/* Cell 7 (Row 2, Col 3): Praharsh Shahi */}
              {praharsh && renderPartnerCard(praharsh)}

              {/* Cell 8 (Row 2, Col 4): Areeb Khan */}
              {areeb && renderPartnerCard(areeb)}
            </div>
          </div>

          {/* Bottom Tab Deck */}
          <FolderTabDeck label="EXPERIENCE" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SHEET 3: GENERAL PARTNERS & INVESTMENT COMMITTEE
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="relative container-tight">

          <div className="relative py-10 md:py-14">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Heading + Description */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-neutral-900 leading-tight tracking-tight">
                    General Partners &amp;
                    <br />
                    Investment Committee
                  </h2>
                </div>

                <div className="pt-6 lg:pt-16">
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    Our Investment Committee consists of veteran entrepreneurs and industrialists who anchor Mount Judi's ethical standards, vet every deployment, and provide direct boardroom access.
                  </p>
                  <p className="mt-4 font-sans text-xs text-neutral-500 leading-relaxed">
                    Clean term sheets, UN PRI signatory standards, and fiduciary discipline across market cycles.
                  </p>
                </div>
              </div>

              {/* Right Column: Squircle Grid of General Partners */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                  {generalPartners.map((gp, i) => {
                    const isLogo = gp.name.includes("Family Office");
                    return (
                      <button
                        key={gp.name}
                        type="button"
                        onClick={() => setActive(gp)}
                        className="bg-[#f4f4f0] border border-black/10 rounded-2xl sm:rounded-3xl p-3 flex flex-col justify-between text-left group cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                      >
                        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-white/60 flex items-center justify-center p-1">
                          <img
                            src={gp.photo}
                            alt={gp.name}
                            className={
                              isLogo
                                ? "h-full w-full object-contain p-2"
                                : "h-full w-full object-cover object-top rounded-lg"
                            }
                          />
                        </div>
                        <div className="mt-3 px-1">
                          <div className="font-display text-sm font-bold text-[#171717] truncate">
                            {gp.name}
                          </div>
                          <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">
                            {gp.role ?? "GENERAL PARTNER"}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tab Deck */}
          <FolderTabDeck label="GENERAL PARTNERS" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SHEET 4: ADVISORY COUNCIL
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="relative container-tight">

          <div className="relative py-10 md:py-14">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Heading + Description */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-neutral-900 leading-tight tracking-tight">
                    Advisory Council &amp;
                    <br />
                    Global Strategists
                  </h2>
                </div>

                <div className="pt-6 lg:pt-16">
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    International operators and domain experts providing our portfolio companies with global market access, regulatory clarity, and technological foresight.
                  </p>
                  <p className="mt-4 font-sans text-xs text-neutral-500 leading-relaxed">
                    Technology leadership from Wipro R&D, cross-border banking, and global institutional private equity.
                  </p>
                </div>
              </div>

              {/* Right Column: Squircle Grid of Advisory Council */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                  {advisoryBoard.map((advisor) => (
                    <button
                      key={advisor.name}
                      type="button"
                      onClick={() => setActive(advisor)}
                      className="bg-[#f4f4f0] border border-black/10 rounded-2xl sm:rounded-3xl p-3 flex flex-col justify-between text-left group cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                    >
                      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-white/60 flex items-center justify-center p-1">
                        <img
                          src={advisor.photo}
                          alt={advisor.name}
                          className="h-full w-full object-cover object-top rounded-lg"
                        />
                      </div>
                      <div className="mt-3 px-1">
                        <div className="font-display text-sm font-bold text-[#171717] truncate">
                          {advisor.name}
                        </div>
                        <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">
                          {advisor.role ?? "ADVISOR"}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tab Deck */}
          <FolderTabDeck label="ADVISORY COUNCIL" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SHEET 5: DIRECT PARTNER ACCESS & 14-DAY SLA
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="relative container-tight">

          <div className="relative py-10 md:py-14">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="font-mono text-xs uppercase tracking-widest text-[#3b66ff] mb-2 flex items-center gap-2 font-bold">
                  <span className="h-2 w-2 rounded-full bg-[#3b66ff] animate-pulse" />
                  Direct Partner Access SLA
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#171717]">
                  Pitch Partners Directly. Guaranteed Decision in 14 Days.
                </h2>
                <div className="mt-5 space-y-2.5 font-mono text-xs sm:text-sm text-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#3b66ff] font-bold">✓</span>
                    <span>No analyst filters. Senior partners review every submission directly.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#3b66ff] font-bold">✓</span>
                    <span>Clear term sheet or actionable operational feedback within 14 business days.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#3b66ff] font-bold">✓</span>
                    <span>No toxic liquidation preferences or hostile controls. Clean institutional governance.</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="block text-center py-3.5 px-6 bg-[#171717] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors rounded-full"
                >
                  Submit Deck for Review →
                </Link>
                <Link
                  to="/portfolio"
                  className="block text-center py-3 px-6 border border-[#171717] text-[#171717] font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-100 transition-colors rounded-full"
                >
                  Explore Portfolio →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Tab Deck */}
          <FolderTabDeck label="DIRECT ACCESS SLA" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MODAL PROFILE DOSSIER (OPENS ON PERSON CARD CLICK)
      ═══════════════════════════════════════════════════════════ */}
      <ProfileOverlay member={active} onClose={() => setActive(null)} />
    </div>
  );
}

function ProfileOverlay({
  member,
  onClose,
}: {
  member: ProfilePerson | null;
  onClose: () => void;
}) {
  if (!member) return null;
  const isMjvTeam = "group" in member;
  const bio = member.bio ?? [];
  const focus = member.focus ?? [];
  const timeline = member.timeline ?? [];
  const notable = member.notable ?? [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} profile`}
      className="fixed inset-0 z-[9999] overflow-y-auto bg-white text-[#171717]"
    >

      <div className="container-tight relative pt-8 pb-24 md:pt-12 md:pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-[#3b66ff]" />
            <span className="font-bold text-[#171717]">{member.name.toUpperCase()}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#f4f4f0] border border-black/10 text-[#171717] rounded-xl flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            aria-label="Close"
          >
            <span>Close ✕</span>
          </button>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          {/* LEFT: PHOTO & LEDGER */}
          <div>
            <div className="aspect-[4/5] w-full border border-black/10 rounded-3xl overflow-hidden bg-white p-2">
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top rounded-2xl"
              />
            </div>

            <div className="mt-8 font-mono text-xs space-y-4">
              <div className="pb-3 border-b border-black/10">
                <div className="text-[10px] uppercase text-neutral-500">Location</div>
                <div className="font-bold mt-1 text-[#171717]">{member.based ?? "Bengaluru, India"}</div>
              </div>

              {focus.length > 0 && (
                <div className="pb-3 border-b border-black/10">
                  <div className="text-[10px] uppercase text-neutral-500">Focus Areas</div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {focus.map((f) => (
                      <span key={f} className="px-2 py-0.5 bg-[#f4f4f0] border border-black/10 text-[11px] rounded-md text-[#171717]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center py-2.5 bg-[#171717] text-white rounded-full text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors"
                >
                  LinkedIn Profile ↗
                </a>
              )}
            </div>
          </div>

          {/* RIGHT: EDITORIAL BIO */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#3b66ff] font-bold">
              {member.role}
            </div>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#171717]">
              {member.name}
            </h2>
            <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-2xl">
              {member.intro ?? member.summary}
            </p>

            <div className="mt-8 font-mono text-xs sm:text-sm leading-relaxed text-neutral-700 space-y-4 max-w-3xl">
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {member.philosophy && (
              <blockquote className="mt-10 border-l-2 border-[#3b66ff] pl-6 py-2 bg-[#d8fb35]/20 rounded-r-xl">
                <p className="font-serif italic text-lg sm:text-xl text-[#171717] leading-snug">
                  &ldquo;{member.philosophy}&rdquo;
                </p>
              </blockquote>
            )}

            {timeline.length > 0 && isMjvTeam && (
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  Experience &amp; Track Record
                </div>
                <div className="divide-y divide-black/10 border-t border-b border-black/10 font-mono text-xs">
                  {timeline.map((t, i) => (
                    <div key={i} className="py-3 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#171717]">{t.company}</span>
                        <span className="text-neutral-500 ml-2">/ {t.role}</span>
                      </div>
                      <span className="text-neutral-500 text-[11px]">{t.years}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {notable.length > 0 && !isMjvTeam && (
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3">
                  Notable Affiliations
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {notable.map((n) => (
                    <span key={n} className="px-2.5 py-1 border border-black/10 bg-[#f4f4f0] rounded-md text-[#171717]">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
