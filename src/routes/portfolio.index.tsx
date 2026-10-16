import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

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

function PortfolioIndex() {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. SWISS EDITORIAL HERO ── */}

      {/* ── 2. FUND PORTFOLIO (MJIGF / MJIMF) ── */}
      <FundPortfolio />

      {/* ── 3. NEXT STEPS ── */}
      <section className="container-tight pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Callout Card: Pitch Us */}
          <div
            onClick={() => navigate({ to: "/contact" })}
            role="button"
            tabIndex={0}
            className="group relative h-72 sm:h-80 rounded-[28px] border border-black/10 bg-neutral-50/80 p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:bg-neutral-100/90 transition-all shadow-xs"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 text-white font-bold">
                [18 // NEXT]
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#d8fb35] text-neutral-900 font-bold">
                ● ACTIVE INTAKE
              </span>
            </div>
            <div className="my-auto text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">
                FOR FOUNDERS
              </div>
              <h4 className="font-display text-2xl font-extrabold tracking-tight text-neutral-900">
                Pitch Your Startup
              </h4>
              <p className="mt-2 font-sans text-xs text-neutral-600 leading-relaxed">
                Seed to Series A checks from ₹2 Cr to ₹25 Cr. Direct partner evaluation within 14
                days.
              </p>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-neutral-900 font-bold flex items-center justify-between pt-3 border-t border-black/5">
              <span>Submit Pitch Deck</span>
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>

          {/* Callout Card: Funds */}
          <div
            onClick={() => navigate({ to: "/funds" })}
            role="button"
            tabIndex={0}
            className="group relative h-72 sm:h-80 rounded-[28px] border border-black/10 bg-[#0c1a2e] text-white p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:bg-[#12243d] transition-all shadow-md"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#d8fb35] font-bold">
                [19 // ALLOCATION]
              </span>
              <span className="text-white/60 font-semibold">CAT-II AIF</span>
            </div>
            <div className="my-auto text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                FOR INVESTORS
              </div>
              <h4 className="font-display text-2xl font-extrabold tracking-tight text-white">
                Funds &amp; LPs
              </h4>
              <p className="mt-2 font-sans text-xs text-white/70 leading-relaxed">
                Institutional LP access, co-investment rights, and audited fiduciary governance.
              </p>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center justify-between pt-3 border-t border-white/10">
              <span className="text-[#d8fb35]">Explore Vehicles</span>
              <span className="w-6 h-6 rounded-full bg-[#d8fb35] text-neutral-900 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform font-bold">
                →
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type FundCode = "MJIGF" | "MJIMF";
type Company = (typeof companies)[number];

const FUNDS: Record<FundCode, { name: string; blurb: string; pool: "Growth Fund" | "Micro Fund" }> =
  {
    MJIGF: {
      name: "Mount Judi India Growth Fund",
      blurb: "Growth-stage conviction bets across healthcare, AI, consumer and logistics.",
      pool: "Growth Fund",
    },
    MJIMF: {
      name: "Mount Judi India Micro Fund",
      blurb: "Early cheques into founders building at the edge of new categories.",
      pool: "Micro Fund",
    },
  };

// Companies that were acquired and are shown stacked with their acquirer.
const ACQUISITIONS: Record<string, string> = { internshala: "upgrad" };

function getFundTiles(pool: "Growth Fund" | "Micro Fund"): Company[][] {
  const inFund = companies.filter((c) => c.fund === pool || c.fund === "Both");
  const acquirers = new Set(Object.values(ACQUISITIONS));
  return inFund
    .filter((c) => !acquirers.has(c.slug))
    .map((c) => {
      const acquirer = inFund.find((a) => a.slug === ACQUISITIONS[c.slug]);
      return acquirer ? [c, acquirer] : [c];
    });
}

// ── Bento layout ──────────────────────────────────────────────────────────
// Desktop uses a 12-column grid with fixed-height rows. Tiles are placed with
// repeating "blocks" whose spans tile perfectly (no holes). Class strings are
// written out literally so Tailwind can detect them.
type TileSize = "lg" | "md" | "sm";
type BentoSlot = { span: string; size: TileSize };

const BIG_4: BentoSlot = { span: "col-span-2 lg:col-span-4 lg:row-span-2", size: "lg" };
const BIG_3: BentoSlot = { span: "col-span-2 lg:col-span-3 lg:row-span-2", size: "lg" };
const W12: BentoSlot = { span: "col-span-2 sm:col-span-3 lg:col-span-12", size: "md" };
const W7: BentoSlot = { span: "col-span-1 lg:col-span-7", size: "md" };
const W5: BentoSlot = { span: "col-span-1 lg:col-span-5", size: "md" };
const W4: BentoSlot = { span: "col-span-1 lg:col-span-4", size: "md" };
const W3: BentoSlot = { span: "col-span-1 lg:col-span-3", size: "sm" };
const W2: BentoSlot = { span: "col-span-1 lg:col-span-2", size: "sm" };

// Full blocks, mirroring the reference bento (3 rows, 2 rows, 2 rows).
const BENTO_BLOCKS: BentoSlot[][] = [
  [BIG_4, W3, W5, W4, BIG_4, W4, W4],
  [BIG_4, W3, W2, BIG_3, W2, W3],
  [W3, BIG_3, W3, W3, W3, W3, W3],
];

// Hole-free layouts for a trailing partial block of N tiles.
const BENTO_REMAINDER: Record<number, BentoSlot[]> = {
  1: [W12],
  2: [W7, W5],
  3: [W4, W3, W5],
  4: [W3, W3, W3, W3],
  5: [BIG_4, W3, W2, BIG_3, W5],
  6: BENTO_BLOCKS[1],
};

function getBentoSlots(count: number): BentoSlot[] {
  const slots: BentoSlot[] = [];
  let b = 0;
  while (slots.length < count) {
    const block = BENTO_BLOCKS[b % BENTO_BLOCKS.length];
    const left = count - slots.length;
    slots.push(...(left >= block.length ? block : BENTO_REMAINDER[left]));
    b++;
  }
  return slots;
}

const LOGO_SIZE: Record<TileSize, string> = {
  lg: "max-h-14 sm:max-h-20",
  md: "max-h-12 sm:max-h-14",
  sm: "max-h-10 sm:max-h-12",
};

function LogoLink({
  company,
  compact,
  size = "md",
}: {
  company: Company;
  compact?: boolean;
  size?: TileSize;
}) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: company.slug }}
      aria-label={`${company.name} — read the full story`}
      className="group/logo flex flex-1 min-h-0 w-full items-center justify-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
    >
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        loading="lazy"
        className={`${compact ? "max-h-7 sm:max-h-9" : LOGO_SIZE[size]} w-auto max-w-[70%] object-contain transition-transform duration-300 group-hover/logo:scale-105`}
      />
    </Link>
  );
}

function FundPortfolio() {
  const [fund, setFund] = useState<FundCode>("MJIGF");
  const meta = FUNDS[fund];
  const tiles = getFundTiles(meta.pool);
  const slots = getBentoSlots(tiles.length);

  return (
    <section className="container-tight py-16 md:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d8fb35]" />
            {fund}
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
            {meta.name}
          </h2>
          <p className="mt-5 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
            {meta.blurb} {tiles.length} companies — click any to read the full story.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Select fund"
          className="inline-flex self-start lg:self-end rounded-full border border-black/10 bg-white p-1.5 shadow-sm"
        >
          {(Object.keys(FUNDS) as FundCode[]).map((code) => {
            const active = code === fund;
            return (
              <button
                key={code}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFund(code)}
                className={`rounded-full px-5 sm:px-6 py-2.5 font-mono text-xs uppercase tracking-[0.25em] font-semibold transition-colors ${
                  active
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {code}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        aria-label={meta.name}
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 grid-flow-row-dense lg:grid-flow-row auto-rows-[120px] sm:auto-rows-[140px] lg:auto-rows-[150px] gap-3 lg:gap-[18px]"
      >
        {tiles.map((group, i) => {
          const slot = slots[i];
          const exited = group.length > 1 || group[0].status === "Exited";
          return (
            <div
              key={group.map((c) => c.slug).join("+")}
              className={`${slot.span} relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-[#f7f7f8] p-3 sm:p-4 transition-all duration-300 hover:bg-white hover:border-neutral-300 hover:shadow-md`}
            >
              {exited && (
                <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full border border-neutral-200 bg-white px-2 py-0.5 font-sans text-[10px] sm:text-[11px] font-medium text-neutral-600">
                  Exited
                </span>
              )}
              {group.length === 1 ? (
                <LogoLink company={group[0]} size={slot.size} />
              ) : (
                <>
                  <LogoLink company={group[0]} compact />
                  <div
                    className="relative my-1.5 flex w-full max-w-[220px] items-center"
                    aria-hidden="true"
                  >
                    <span className="h-px flex-1 bg-black/10" />
                    <span className="mx-2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white">
                      <ArrowDown className="h-3 w-3" />
                    </span>
                    <span className="h-px flex-1 bg-black/10" />
                  </div>
                  <LogoLink company={group[1]} compact />
                  <span className="sr-only">
                    {group[0].name} was acquired by {group[1].name}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
