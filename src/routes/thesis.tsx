import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { companies, type Company } from "@/lib/portfolio-data";
import { CompanyOverlay } from "@/components/company-overlay";
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/thesis")({
  head: () => ({
    meta: [
      { title: "Investment Thesis | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "MJV deploys across three foundational pillars: Consumer Brands, Supply Chain Rails, and Disruptive Tech. Disciplined unit economics, operator backing, and patient reserves.",
      },
      { property: "og:title", content: "Investment Thesis | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "MJV invests across Consumer Brands, Supply Chain Rails, and Disruptive Tech. Guided by where enterprise and economic value settles in India over the next decade.",
      },
      { property: "og:url", content: "/thesis" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/thesis" }],
  }),
  component: Thesis,
});

type Theme = {
  number: string;
  name: string;
  anchor: string;
  accentBg: string;
  accentText: string;
  tagline: string;
  paragraphs: React.ReactNode[];
  portfolio: string[];
};

const themes: Theme[] = [
  {
    number: "01",
    name: "Consumer Brands",
    anchor: "consumer",
    accentBg: "bg-[#d8fb35]",
    accentText: "text-neutral-900",
    tagline: "Brands engineered with deep operational discipline, not subsidized vanity metrics.",
    paragraphs: [
      <>
        The consumer enterprises we back take a non-negotiable everyday habit and build an enduring institution around doing it properly across nutrition, culinary infrastructure, and lifestyle. The demand is rarely in question. What is perpetually absent in contemporary venture is a brand built from <strong className="text-neutral-900 font-semibold">first principles</strong>, backed by the operational grit to control sourcing, cold chains, and direct customer intimacy.
      </>,
      <>
        That is where our partners spend operating hours with founders. Early on, the questions are about category positioning; later, they turn <strong className="text-neutral-900 font-semibold">relentlessly operational</strong>. In our experience, this is where high-growth consumer ventures quietly unravel. We stay closely embedded to ensure unit economics stay cash-generative.
      </>,
      <>
        A brand that masters sourcing and authentic customer trust builds an enduring <strong className="text-neutral-900 font-semibold">economic moat</strong>. Customers return without discounts attached, and gross margins compound as distribution scales.
      </>,
    ],
    portfolio: ["FreshToHome", "The Protein Chef (Lo! Foods)", "DIL Foods", "Boingg!"],
  },
  {
    number: "02",
    name: "Supply Chain & Rails",
    anchor: "consumer-enablers",
    accentBg: "bg-[#3b66ff]",
    accentText: "text-white",
    tagline: "The invisible arterial infrastructure powering high-velocity Indian commerce.",
    paragraphs: [
      <>
        Behind every consumer titan sits an unsung network of industrial enablers: multi-channel warehousing, automated middle-mile logistics, drone freight corridors, and the reconciliation data layers that prevent inventory leakage. A massive proportion of enterprise margin in India is destroyed here. We believe that margin is actively being recaptured.
      </>,
      <>
        Our portfolio anchors today in <strong className="text-neutral-900 font-semibold">supply chain automation, cold chain orchestration, and aerial logistics</strong>. The identical logic applies to agritech, climate manufacturing, and enterprise procurement.
      </>,
      <>
        These are heavy, deliberate enterprises. Institutional buyers take quarters to audit and decades to displace, producing <strong className="text-neutral-900 font-semibold">extraordinary retention and enterprise cashflows</strong>. We provide the enterprise boardroom access, B2B procurement introductions, and patient reserves that do not force founders into unnatural growth cycles.
      </>,
    ],
    portfolio: ["Hexalog", "Skye Air Mobility", "Wiffy"],
  },
  {
    number: "03",
    name: "Disruptive Tech",
    anchor: "disruptive-tech",
    accentBg: "bg-neutral-900",
    accentText: "text-white",
    tagline: "Proprietary IP, verified datasets, and hard engineering that cannot be copied.",
    paragraphs: [
      <>
        We back companies whose core defensibility sits in a <strong className="text-neutral-900 font-semibold">defensible patent, an authoritative biological or vision dataset, or deep engineering moats</strong> that took years of relentless focus to synthesize. Today, this manifests across precision oncology, medical robotics, and specialized cognitive architectures.
      </>,
      <>
        The risk profile here is distinctive. Commercial failure is rarely about market size; it is about clinical validation, scientific rigor, and navigating regulatory approvals. Our diligence engages clinicians, researchers, and patent attorneys who have taken frontier products through CE, FDA, and CDSCO approvals.
      </>,
      <>
        When validated, the defensive fortress is <strong className="text-neutral-900 font-semibold">virtually impregnable</strong>. A well-capitalized competitor cannot buy clinical trials, longitudinal patient cohorts, or patent exclusivity in a six-month sprint.
      </>,
    ],
    portfolio: ["4baseCare", "InnAccel", "ConveGenius", "Staqu Technologies"],
  },
];

function findCompany(displayName: string): Company | undefined {
  const normalized = displayName.toLowerCase().replace(/[^a-z0-9]/g, "");
  return companies.find((c) => {
    const companyNormalized = c.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      companyNormalized === normalized ||
      companyNormalized.includes(normalized) ||
      normalized.includes(companyNormalized)
    );
  });
}

function Thesis() {
  const [active, setActive] = useState<Company | null>(null);

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. HERO MONOGRAPH DISPATCH ── */}
      <section className="border-b border-[var(--ink)]/15 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-tight">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs">
              <span>[ 01 // INVESTMENT THESIS ]</span>
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d8fb35]" />
              <span>┌ THREE STRUCTURAL PILLARS · CAPITAL ALLOCATION</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
                Where Enterprise Value{" "}
                <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans">
                  Compounds.
                </span>{" "}
                <br />
                <span className="italic font-serif font-normal lowercase text-neutral-500">
                  three structural pillars for modern india.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                We reject the speculative churn of growth-at-all-costs venture capital. MJV allocates capital into three structural themes where economic value accumulates and holds over decades: Consumer Brands, Supply Chain Rails, and Disruptive Tech.
              </p>
            </div>
          </div>

          {/* Quick Anchor Navigation Strip */}
          <div className="mt-12 flex flex-wrap gap-3 font-mono text-xs">
            {themes.map((t) => (
              <a
                key={t.number}
                href={`#${t.anchor}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-black/5 text-neutral-900 transition-all font-semibold shadow-xs group"
              >
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">
                  {t.number}
                </span>
                <span>{t.name}</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-neutral-400">
                  ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. THE THREE FOUNDATIONAL PILLARS (BENTO CARDS) ── */}
      <section className="border-b border-[var(--ink)]/15 bg-neutral-50/60 py-16 md:py-24">
        <div className="container-tight">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-500 pb-6 border-b border-black/5">
            <span>Three Core Themes</span>
            <span className="text-neutral-900 font-bold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#3b66ff]" />
              ACTIVE ALLOCATIONS
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {themes.map((t) => (
              <div
                key={t.number}
                className="rounded-[32px] border border-black/10 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full ${t.accentBg} ${t.accentText} font-mono text-xs font-bold tracking-wider shadow-xs`}>
                      [ THEME {t.number} ]
                    </span>
                    <span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-900 group-hover:scale-105 transition-transform">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-sans">
                    {t.tagline}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-3">
                    PORTFOLIO ENTERPRISES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.portfolio.map((cName) => {
                      const c = findCompany(cName);
                      return c ? (
                        <button
                          key={cName}
                          type="button"
                          onClick={() => setActive(c)}
                          className="px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white border border-black/5 text-neutral-800 transition-all font-mono text-xs flex items-center gap-1.5"
                        >
                          <span>{cName}</span>
                          <span className="text-[10px] opacity-60">↗</span>
                        </button>
                      ) : (
                        <span
                          key={cName}
                          className="px-3 py-1 rounded-full bg-neutral-50 text-neutral-500 border border-black/5 font-mono text-xs"
                        >
                          {cName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DEEP MONOGRAPH CHAPTERS (EDITORIAL BENTO SECTIONS) ── */}
      <section className="container-tight py-16 md:py-24 space-y-16">
        {themes.map((theme) => (
          <article
            key={theme.number}
            id={theme.anchor}
            className="scroll-mt-28 rounded-[36px] border border-black/10 bg-white p-8 md:p-14 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest pb-6 border-b border-black/5">
              <span className="px-3 py-1 rounded-full bg-neutral-900 text-white font-bold">
                Theme {theme.number}
              </span>
              <span className="text-neutral-500 font-semibold">Category Focus · Allocation Doctrine</span>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)]">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]">
                  {theme.name}
                </h2>
                <div className="mt-4 p-4 rounded-2xl bg-neutral-50 border border-black/5">
                  <p className="font-mono text-xs text-neutral-700 leading-relaxed font-semibold">
                    "{theme.tagline}"
                  </p>
                </div>

                <div className="mt-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-3">
                    DEPLOYED ASSETS
                  </div>
                  <div className="flex flex-col gap-2">
                    {theme.portfolio.map((cName) => {
                      const c = findCompany(cName);
                      return c ? (
                        <button
                          key={cName}
                          type="button"
                          onClick={() => setActive(c)}
                          className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-black/5 text-left transition-colors group"
                        >
                          <span className="font-mono text-xs font-semibold text-neutral-900">
                            {cName}
                          </span>
                          <span className="w-5 h-5 rounded-full bg-white text-neutral-900 flex items-center justify-center text-[10px] font-bold group-hover:scale-105 transition-transform shadow-2xs">
                            ↗
                          </span>
                        </button>
                      ) : (
                        <div
                          key={cName}
                          className="p-3 rounded-xl bg-neutral-50 border border-black/5 font-mono text-xs text-neutral-500"
                        >
                          {cName}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Narrative Content */}
              <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed font-sans">
                {theme.paragraphs.map((para, i) => (
                  <div key={i} className="leading-relaxed">
                    {para}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── 4. BOTTOM ALLOCATION TERMINAL ── */}
      <section className="container-tight pb-20 md:pb-28">
        <div className="rounded-[36px] bg-[#0c1a2e] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b66ff]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d8fb35]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider font-semibold mb-4 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d8fb35]" />
                <span>BUILD WITH MOUNT JUDI VENTURES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                Are You Building in One of These Pillars?
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                We write initial checks from ₹2 Cr to ₹25 Cr between Seed and Series A. Pitch directly to partners with a guaranteed 14-day turnaround.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#d8fb35] hover:bg-[#c9ec28] text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Pitch Your Company</span>
                <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs">
                  →
                </span>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all border border-white/15"
              >
                <span>View Full Portfolio</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Company Overlay */}
      {active && <CompanyOverlay company={active} onClose={() => setActive(null)} />}
    </div>
  );
}
