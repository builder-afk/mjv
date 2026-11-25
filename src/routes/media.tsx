import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Check,
} from "lucide-react";
import { companies, type Company } from "../lib/portfolio-data";
import { PortfolioNewsScrollytelling } from "@/components/portfolio-scrollytelling";
import { formatMmmYy } from "@/lib/utils";
import skyeairWebp from "@/assets/skyeair.webp";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      {
        title: "Media & Press Coverage | Mount Judi Ventures",
      },
      {
        name: "description",
        content:
          "Verified press coverage and commercial milestones across the Mount Judi Ventures portfolio. Deep-tech logistics, precision oncology, and computer vision records.",
      },
      {
        property: "og:title",
        content: "Media & Press Coverage | Mount Judi Ventures",
      },
      { property: "og:url", content: "/media" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

function MediaPage() {
  const [showAllCompanyPress, setShowAllCompanyPress] = useState(false);

  /* Quick map to lookup full company profiles & official logos */
  const companyMap = useMemo(() => {
    return new Map(companies.map((c) => [c.slug, c]));
  }, []);

  /* Aggregate all milestones from portfolio data for the full archive */
  const allPortfolioPress = useMemo(() => {
    return companies
      .flatMap((company) =>
        (company.milestones || []).map((m) => ({
          company: company.name,
          slug: company.slug,
          sector: company.sector,
          title: m.title,
          url: m.url,
          image: m.image,
        })),
      )
      .filter((m) => m.url && m.url !== "#");
  }, []);

  const visiblePress = showAllCompanyPress ? allPortfolioPress : allPortfolioPress.slice(0, 12);

  const totalMentions = allPortfolioPress.length;
  const uniqueSources = new Set(
    allPortfolioPress.map((p) => {
      const parts = p.title.split(/[-–:]/);
      return parts[0]?.trim() || "Unknown";
    }),
  ).size;
  const companiesCovered = new Set(allPortfolioPress.map((p) => p.company)).size;

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          0. LEAD HERO - 3-COLUMN PORTFOLIO DOSSIER & MEDIA HIGHLIGHTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-10 pb-4 sm:pt-14 sm:pb-6">
        <div className="container-tight">
          <div className="flex items-center gap-2.5 font-mono text-xs font-black uppercase tracking-[0.25em] text-neutral-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span>MEDIA COVERAGE</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-[0.98] text-neutral-950 mb-8 sm:mb-10">
            Press Releases
          </h1>

          {/* 3-Column Dossier Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-start">
            {/* ──────────────────────────────────────────────────────────
                COLUMN 1: PORTFOLIO MILESTONES
            ────────────────────────────────────────────────────────── */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between pb-4">
                <h2 className="text-3xl font-display font-black text-neutral-950 tracking-tight">
                  Portfolio Milestones
                </h2>
              </div>

              <div className="space-y-4">
                  {/* Card 1: 4baseCare & Cancer Institute (WIA) */}
                  <div className="rounded-[24px] bg-white border border-neutral-300/80 p-5 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#036089] text-white text-[11px] font-bold tracking-wide">
                        2024–Present
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-400 mt-3 mb-1 uppercase tracking-wider">
                      Clinical Lab Ecosystem
                    </div>
                    <p className="text-sm font-bold text-neutral-900 leading-snug">
                      Partnership of{" "}
                      <a
                        href="https://www.linkedin.com/company/4basecare/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#036089] hover:text-[#C78D1E] hover:underline inline-flex items-center gap-0.5"
                      >
                        4baseCare
                      </a>{" "}
                      with{" "}
                      <a
                        href="https://www.linkedin.com/company/cancer-institute-wia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#036089] hover:text-[#C78D1E] hover:underline inline-flex items-center gap-0.5"
                      >
                        Cancer Institute (WIA)
                      </a>
                      , Adyar, Chennai is an important step. The partnership will add Comprehensive
                      Genomic Profiling (CGP) to the institute’s laboratory ecosystem.
                    </p>
                    <div className="mt-4 pt-1">
                      <div className="relative flex items-center w-full">
                        <div className="w-full h-[2px] bg-neutral-200 rounded-full" />
                        <div className="absolute left-0 w-2 h-2 rounded-full bg-neutral-900" />
                        <div className="absolute right-0 w-2 h-2 rounded-full bg-neutral-900" />
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mt-1">
                        <span>Adyar</span>
                        <span>Present</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Skye Air Mobility in Ericsson Innovation Challenge */}
                  <div className="rounded-[24px] bg-white border border-neutral-300/80 p-5 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#036089] text-white text-[11px] font-bold tracking-wide">
                        2024–Present
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-400 mt-3 mb-1 uppercase tracking-wider">
                      Autonomous Drone Logistics
                    </div>
                    <p className="text-sm font-bold text-neutral-900 leading-snug">
                      <a
                        href="https://www.linkedin.com/company/skye-air-mobility/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#036089] hover:text-[#C78D1E] hover:underline inline-flex items-center gap-0.5"
                      >
                        Skye Air Mobility
                      </a>{" "}
                      emerged as one of the six winning startups globally at the{" "}
                      <a
                        href="https://www.linkedin.com/company/ericsson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#036089] hover:text-[#C78D1E] hover:underline inline-flex items-center gap-0.5"
                      >
                        Ericsson
                      </a>{" "}
                      Innovation Challenge for autonomous beyond-visual-line-of-sight drone logistics networks.
                    </p>
                    <div className="mt-4 pt-1">
                      <div className="relative flex items-center w-full">
                        <div className="w-full h-[2px] bg-neutral-200 rounded-full" />
                        <div className="absolute left-0 w-2 h-2 rounded-full bg-neutral-900" />
                        <div className="absolute right-0 w-2 h-2 rounded-full bg-neutral-900" />
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mt-1">
                        <span>Nov</span>
                        <span>Present</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: 4baseCare Series B */}
                  <div className="rounded-[24px] bg-white border border-neutral-300/80 p-5 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#C78D1E] text-white text-[11px] font-bold tracking-wide">
                        2021–2024
                      </span>
                      <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-neutral-400 mt-3 mb-1 uppercase tracking-wider">
                      Series B / Institutional Scale
                    </div>
                    <p className="text-sm font-bold text-neutral-900 leading-snug">
                      <a
                        href="https://www.linkedin.com/company/4basecare/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#036089] hover:text-[#C78D1E] hover:underline inline-flex items-center gap-0.5"
                      >
                        4baseCare
                      </a>{" "}
                      closed ₹128 Cr ($15M+) Series B led by Infosys Technology Trust to expand South Asian cancer genomics testing across APAC &amp; global clinical research centers.
                    </p>
                    <div className="mt-4 pt-1">
                      <div className="relative flex items-center w-full">
                        <div className="w-full h-[2px] bg-neutral-200 rounded-full" />
                        <div className="absolute left-0 w-2 h-2 rounded-full bg-neutral-900" />
                        <div className="absolute right-0 w-2 h-2 rounded-full bg-neutral-900" />
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mt-1">
                        <span>Sept</span>
                        <span>Aug</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* ──────────────────────────────────────────────────────────
                COLUMN 2: SECTOR FOCUS / IN THE FIELD / THESIS TAGS
            ────────────────────────────────────────────────────────── */}
            <div className="flex flex-col lg:border-x border-neutral-300/70 lg:px-6">
              {/* Block 1: Sector Focus */}
              <div className="pb-6 border-b border-neutral-300/70">
                <div className="flex items-center justify-between pb-3">
                  <h2 className="text-3xl font-display font-black text-neutral-950 tracking-tight">
                    Sector Focus
                  </h2>
                </div>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-medium">
                  Precision Oncology, Autonomous Drone Corridors, Vision AI &amp; Video Intelligence, Clinical Bio-Informatics, Cross-Border Trade Infrastructure
                </p>
              </div>

              {/* Block 2: Portfolio in Action */}
              <div className="py-6 border-b border-neutral-300/70">
                <div className="flex items-center justify-between pb-3">
                  <h2 className="text-3xl font-display font-black text-neutral-950 tracking-tight">
                    Portfolio in Action
                  </h2>
                </div>
                <div className="rounded-[24px] overflow-hidden border border-neutral-300/80 shadow-xs bg-white">
                  <img
                    src={skyeairWebp}
                    alt="Skye Air Mobility Autonomous Drone Logistics"
                    className="w-full h-auto aspect-[16/10] object-cover object-center hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Block 3: Thesis Tags */}
              <div className="pt-6">
                <div className="flex items-center justify-between pb-3">
                  <h2 className="text-3xl font-display font-black text-neutral-950 tracking-tight">
                    Thesis
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#036089] text-white text-xs font-semibold shadow-xs">
                    #Genomics
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs font-medium shadow-xs">
                    #Cancer_Institute_WIA
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs font-medium shadow-xs">
                    #Drone_Corridors
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs font-medium shadow-xs">
                    #Ericsson_Innovation
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#036089] text-white text-xs font-semibold shadow-xs">
                    #CGP_Testing
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs font-medium shadow-xs">
                    #Clinical_Validation
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C78D1E] text-white text-xs font-semibold shadow-xs">
                    #Series_B_Scale
                  </span>
                </div>
              </div>
            </div>

            {/* ──────────────────────────────────────────────────────────
                COLUMN 3: KEY ACHIEVEMENTS
            ────────────────────────────────────────────────────────── */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between pb-4">
                <h2 className="text-3xl font-display font-black text-neutral-950 tracking-tight">
                  Key Achievements
                </h2>
              </div>

              <div className="space-y-4">
                  {/* Card 1: Ericsson Innovation */}
                  <div className="rounded-[24px] bg-[#1a1a1a] text-white p-5 border border-neutral-800 shadow-md flex flex-col justify-between hover:border-neutral-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-neutral-950 text-xs font-bold">
                        2026
                      </span>
                      <div className="w-6 h-6 rounded-full bg-neutral-700 text-white flex items-center justify-center text-xs font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-medium text-neutral-400">Ericsson Global Laureate</div>
                      <div className="text-base font-bold text-white mt-0.5 leading-snug">
                        Innovation Challenge Winner
                      </div>
                      <div className="text-xs text-neutral-400 font-mono mt-1">
                        (Selected Among Top 6 Startups Globally)
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] bg-neutral-300/70" />

                  {/* Card 2: Cancer Institute CGP */}
                  <div className="rounded-[24px] bg-[#1a1a1a] text-white p-5 border border-neutral-800 shadow-md flex flex-col justify-between hover:border-neutral-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-neutral-950 text-xs font-bold">
                        2024–2025
                      </span>
                      <div className="w-6 h-6 rounded-full bg-neutral-700 text-white flex items-center justify-center text-xs font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-medium text-neutral-400">Cancer Institute (WIA), Adyar</div>
                      <div className="text-base font-bold text-white mt-0.5 leading-snug">
                        Comprehensive Genomic Profiling
                      </div>
                      <div className="text-xs text-neutral-400 font-mono mt-1">
                        (Laboratory Ecosystem Integration)
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] bg-neutral-300/70" />

                  {/* Card 3: Infosys Technology Trust */}
                  <div className="rounded-[24px] bg-[#1a1a1a] text-white p-5 border border-neutral-800 shadow-md flex flex-col justify-between hover:border-neutral-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-neutral-950 text-xs font-bold">
                        2021–2024
                      </span>
                      <div className="w-6 h-6 rounded-full bg-neutral-700 text-white flex items-center justify-center text-xs font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-medium text-neutral-400">Infosys Technology Trust</div>
                      <div className="text-base font-bold text-white mt-0.5 leading-snug">
                        ₹128 Crore Institutional Series B
                      </div>
                      <div className="text-xs text-neutral-400 font-mono mt-1">
                        (Global Precision Oncology Scaling)
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PORTFOLIO NEWS AND INSIGHTS - STICKY SCROLLYTELLING
          - Sticky Split-Screen Layout (Left visual fixed, Right content scrolling)
          - Scroll-Triggered Image Switching via IntersectionObserver
          - Scrollytelling storytelling with live telemetry, metrics, and press links
      ═══════════════════════════════════════════════════════════ */}
      <PortfolioNewsScrollytelling />

      {/* ═══════════════════════════════════════════════════════════
          6. MEDIA INQUIRY & BRIEFINGS CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-[var(--ink)]/15">
        <div className="container-tight py-16 md:py-24">
          <div className="relative overflow-hidden rounded-[28px] border-2 border-[#1e6086] bg-[#1e6086] p-6 text-white shadow-sm sm:p-8 md:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.10) 38%, transparent 52%), linear-gradient(250deg, transparent 40%, rgba(10,177,215,0.16) 60%, transparent 75%)",
              }}
            />
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-white shadow-xs border border-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b78c2d] animate-pulse" />
                  <span>Press &amp; Broadcast Access</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Media &amp; Investor
                  <br />
                  Inquiries.
                </h2>
                <p className="mt-6 font-mono text-xs text-white/80 leading-relaxed max-w-md">
                  Direct contact with investment partners and portfolio CEOs. We provide verified
                  data dossiers, founder access, and regulatory commentary within 24 business hours.
                </p>
              </div>

              <div className="space-y-3.5">
                <Link
                  to="/contact"
                  className="block w-full rounded-full bg-white px-8 py-3.5 text-center font-mono text-xs font-bold tracking-widest text-[#1e6086] shadow-xs transition-colors hover:bg-[#f0f8ff]"
                >
                  Request Press Info →
                </Link>
                <a
                  href="mailto:info@mountjudi.com"
                  className="block w-full rounded-full border border-white/25 px-8 py-3.5 text-center font-mono text-xs tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  info@mountjudi.com
                </a>
                <a
                  href="https://www.linkedin.com/company/mount-judi-ventures/"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-white/25 px-8 py-3.5 text-center font-mono text-xs tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Follow on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
