import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";
import creedMountainPeak from "@/assets/get.jpg";
import creedMountainField from "@/assets/set.jpeg";

export const Route = createFileRoute("/about")(({
  head: () => ({
    meta: [
      { title: "About Mount Judi Ventures | Capital, Conviction, Character" },
      {
        name: "description",
        content:
          "Mount Judi Ventures was founded by successful entrepreneurs with a vision of creating long-term wealth through fair, ethical, and mutually beneficial venture capital investments.",
      },
      { property: "og:title", content: "About Mount Judi Ventures" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
}));

const milestones = [
  { y: "2018", val: 45, t: "Mount Judi Ventures founded with an operator-first thesis on ethical, aligned venture capital." },
  { y: "2019", val: 54, t: "Secured SEBI Category II AIF registration and closed first three foundational investments." },
  { y: "2020", val: 71, t: "Became one of India's earliest venture signatories to the UN Principles for Responsible Investment (UN PRI)." },
  { y: "2021", val: 92, t: "Accelerated deeptech and AI deployment, leading early rounds into Staqu and robotics." },
  { y: "2022", val: 119, t: "India Growth Fund (MJIGF, INR 100 Cr) reached final close backed by premier family offices." },
  { y: "2023", val: 153, t: "Registered Category I AIF (Angel Fund) MJIMF to enable deal-by-deal co-investment syndicates." },
  { y: "2024", val: 194, t: "Delivered first major liquidity milestone via upGrad acquisition of Internshala; portfolio crossed 17 companies." },
  { y: "2025", val: 243, t: "Deployed follow-on reserves across Series A leaders Dil Foods, Skye Air, and 4baseCare." },
  { y: "2026", val: 301, t: "Platform ecosystem expanded with dedicated enterprise access, follow-on reserves, and governance." },
];

function About() {
  const [activeYear, setActiveYear] = useState<string>("2026");
  const selectedMilestone = milestones.find((m) => m.y === activeYear) || milestones[milestones.length - 1];

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">

      {/* ── 2. SECTION 01: OPERATING CREED (MODERN BENTO COMPOSITION INSPIRED BY REFERENCE) ── */}
      <section className="py-20 md:py-28 border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Manifesto & Call to Action */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Black Pill Category Tag (Exact match to reference "MARKET OPPORTUNITY") */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider mb-6 sm:mb-8 font-semibold shadow-xs">
                  <span>[ ABOUT MOUNT JUDI ]</span>
                </div>

               <div className="max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-neutral-900 leading-[1.02]">
              Capital, conviction, <br />
              <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans font-bold shadow-xs mt-2">
                character.
              </span>
            </h1>
            <p className="mt-8 font-sans text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed max-w-2xl">
              Mount Judi Ventures was founded by veteran entrepreneurs to generate compounding generational wealth through disciplined, ethical, and aligned venture investing. We invest from Seed to Series A, partnering with visionary founders engineering durable category leaders for New India.
            </p>
          </div>
          </div>

              {/* Bottom Interactive Pill Control (Exact match to reference exclamation pill) */}
              <div className="mt-8 sm:mt-12">
                <Link
                  to="/thesis"
                  className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/80 text-neutral-900 text-xs font-mono uppercase tracking-wider transition-all duration-200 group shadow-xs"
                >
                  <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    !
                  </span>
                  <span className="font-semibold truncate">ETHICAL VENTURE ARCHITECTURE</span>
                  <span className="w-6 h-6 rounded-full bg-white text-neutral-900 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform shadow-xs shrink-0">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: 2x2 Bento Visual Grid (Exact match to reference) */}
            <div className="lg:col-span-6">
              {/* Telemetry Tag on top right (Matches "L DIGITAL BANKING PLATFORM" in reference) */}
              <div className="flex justify-end font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
                <span>┌ SEBI CAT-II AIF · UN PRI SIGNATORY</span>
              </div>

              {/* 2x2 Grid with Rounded Bento Cards */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {/* 1. Top-Left: Mountain Peak Summit */}
                <div className="rounded-[32px] overflow-hidden relative aspect-square bg-neutral-100 shadow-sm border border-black/5 group">
                  <img
                    src={creedMountainPeak}
                    alt="Mount Judi Summit"
                    loading="lazy"
                    className="w-full h-full object-cover object-[50%_30%] origin-[50%_30%] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/10">
                    Summit View
                  </span>
                </div>

                {/* 2. Top-Right: Vibrant Lime Green Card */}
                <div className="rounded-[32px] bg-[#d8fb35] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-black/5 aspect-square text-neutral-900 group hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-black/10 flex items-center justify-center text-neutral-900">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-neutral-900/70 tracking-wider">
                      [ 01.2 ]
                    </span>
                  </div>

                  <div>
                    <div className="font-display text-base sm:text-lg font-bold leading-tight">
                      A New Generation
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-800/80 mt-1 leading-snug line-clamp-2">
                      Audacity in what they build, ethics in how they build it.
                    </p>
                    <div className="mt-2.5 inline-flex items-center px-2 py-0.5 rounded-full bg-white/80 text-[9px] font-mono uppercase font-semibold">
                      UN PRI Signatory
                    </div>
                  </div>
                </div>

                {/* 3. Bottom-Left: Vibrant Royal Blue Card */}
                <div className="rounded-[32px] bg-[#3b66ff] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-black/5 aspect-square text-white group hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-white/80 tracking-wider">
                      [ 01.1 ]
                    </span>
                  </div>

                  <div>
                    <div className="font-display text-base sm:text-lg font-bold leading-tight">
                      Back Ethical Founders
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/80 mt-1 leading-snug line-clamp-2">
                      Compounding generational enterprise value for decades.
                    </p>
                    <div className="mt-2.5 inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-[9px] font-mono uppercase font-semibold">
                      Decade Horizons
                    </div>
                  </div>
                </div>

                {/* 4. Bottom-Right: Mountain Ridge & Slope */}
                <div className="rounded-[32px] overflow-hidden relative aspect-square bg-neutral-100 shadow-sm border border-black/5 group">
                  <img
                    src={creedMountainField}
                    alt="Mount Judi Ridge"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/10">
                    Active Stewardship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SECTION 02: WHY MJV EXISTS (SWISS BENTO MANIFESTO) ── */}
      <section className="border-b border-[var(--ink)]/15 bg-[#faf9f5] py-20 md:py-28">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Heading & Large Quote Bento Card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider mb-6 font-semibold shadow-xs">
                  <span>[ 02 // INSTITUTIONAL THESIS ]</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-[1.08]">
                  Why Mount Judi{" "}
                  <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans font-bold">
                    exists
                  </span>
                </h2>
              </div>

              {/* High-Impact Midnight Manifesto Quote Card */}
              <div className="mt-8 rounded-[32px] bg-neutral-900 text-white p-7 md:p-8 flex flex-col justify-between shadow-md border border-neutral-800">
                <blockquote className="font-serif text-lg sm:text-xl italic text-neutral-100 leading-relaxed">
                  &ldquo;Capital with character. The companies building New India&rsquo;s industrial bedrock deserve seasoned operators, not spreadsheet speculators.&rdquo;
                </blockquote>
                <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  <span>Operator DNA</span>
                  <span className="text-[#d8fb35] font-semibold">Permanent Mandate</span>
                </div>
              </div>
            </div>

            {/* Right Column: Three Tactile Pillars Bento Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5">
              <div className="space-y-4 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <p>
                  India is in the middle of a once-in-a-century rebuilding. New rails — payments, identity, logistics, healthcare, energy — are being laid every quarter. The founders building on top of them are bolder, more global, and more accountable than any generation before them.
                </p>
                <p>
                  But the venture model that backed the last decade was often misaligned with the kind of companies India now needs to build. Short hold periods. Founder-hostile terms. Capital that didn't care about how value was created.
                  We started MJV to be a different kind of partner. Patient. Principled. Present.
                </p>
              </div>

              {/* Three Modern Swiss Bento Cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="rounded-[28px] bg-[#3b66ff] p-5 text-white flex flex-col justify-between aspect-[1.1/1] sm:aspect-auto sm:min-h-[170px] shadow-sm">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 font-semibold">[ 01 ]</span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight">Patient</h3>
                    <p className="text-[11px] text-white/80 mt-1 leading-snug">To back ethical founders building responsible companies that compound value for decades, not quarters.</p>
                  </div>
                </div>

                <div className="rounded-[28px] bg-[#d8fb35] p-5 text-neutral-900 flex flex-col justify-between aspect-[1.1/1] sm:aspect-auto sm:min-h-[170px] shadow-sm">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-800 font-semibold">[ 02 ]</span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight">Principled</h3>
                    <p className="text-[11px] text-neutral-800/90 mt-1 leading-snug">A generation of Indian companies admired equally for what they build and how they build it.</p>
                  </div>
                </div>

                <div className="rounded-[28px] bg-white p-5 text-neutral-900 border border-black/10 flex flex-col justify-between aspect-[1.1/1] sm:aspect-auto sm:min-h-[170px] shadow-sm">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">[ 03 ]</span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight">Present</h3>
                    <p className="text-[11px] text-neutral-600 mt-1 leading-snug">Founder-first. Long-term. Honest. Curious. Quietly ambitious.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SECTION 03: CHRONOLOGY & MILESTONES (EXACT REFERENCE UI/UX) ── */}
      <section className="py-20 md:py-28 border-t border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Metrics & Headline */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Black Pill Tag (Exact match to "MARKET TRENDS") */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider mb-6 sm:mb-8 font-semibold shadow-xs">
                  <span>[ 03 // CHRONOLOGY ]</span>
                </div>

                {/* Display Title with Lime Pill Highlight */}
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
                  Portfolio compounding <br className="hidden sm:inline" />
                  projected to exceed{" "}
                  <span className="bg-[#d8fb35] text-neutral-900 px-3.5 py-0.5 rounded-full inline-block font-sans">
                    ₹500 Cr+
                  </span>{" "}
                  in 2027
                </h2>

                {/* Subtitle with Zap Icon */}
                <div className="mt-6 flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans max-w-xl">
                  <div className="w-6 h-6 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5 text-neutral-900">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <p>
                    From early Cat-II SEBI registration to India's first UN PRI venture signatory, Mount Judi Ventures' active stewardship model compounds enterprise value 26.7% annually across 17+ high-margin category leaders.
                  </p>
                </div>
              </div>

              {/* Two Geometric Metric Cards Below */}
              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-5">
                {/* Blue Card (Exact match to reference blue metric card) */}
                <div className="rounded-[28px] bg-[#3b66ff] p-5 sm:p-6 text-white flex flex-col justify-between aspect-[1.1/1] sm:aspect-square shadow-sm transition-all duration-300 hover:shadow-md group">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform">
                      ↗
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
                      26,7%
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/90 mt-1.5 font-sans leading-snug">
                      Audited annual growth across portfolio companies
                    </p>
                  </div>
                </div>

                {/* Lime Card (Exact match to reference lime metric card) */}
                <div className="rounded-[28px] bg-[#d8fb35] p-5 sm:p-6 text-neutral-900 flex flex-col justify-between aspect-[1.1/1] sm:aspect-square shadow-sm transition-all duration-300 hover:shadow-md group">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform">
                      ↗
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
                      100%
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-800 mt-1.5 font-sans leading-snug">
                      UN PRI fiduciary and ethical compliance standard
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Progressive Growth Bar Chart (Exact match to reference chart) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              {/* Telemetry Tag on top right (Matches "L DIGITAL BANKING PLATFORM" in reference) */}
              <div className="flex justify-end font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-6 font-semibold">
                <span>┌ 2018 — 2026+ // TRAJECTORY CHRONOLOGY</span>
              </div>

              {/* Chart Container */}
              <div className="relative pt-12 pb-2">
                {/* Connecting Arch Benchmark Line with Pill Badge */}
                <div className="absolute top-1 left-2 sm:left-4 right-2 sm:right-4 h-12 border-t border-l border-neutral-300 rounded-tl-2xl pointer-events-none flex items-start justify-center">
                  {/* Central CAGR Pill Badge */}
                  <div className="relative -top-3.5 px-3.5 py-1 rounded-full bg-neutral-900 text-white font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold shadow-xs">
                    26,7% CAGR
                  </div>
                  {/* Left dot */}
                  <div className="absolute bottom-0 left-[-3px] w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  {/* Right arrow */}
                  <div className="absolute top-[-4px] right-0 w-2 h-2 border-t-2 border-r-2 border-neutral-400 rotate-45" />
                </div>

                {/* Vertical Bar Chart Bars */}
                <div className="flex items-end justify-between gap-1.5 sm:gap-2.5 h-64 sm:h-72 pt-8 border-b border-neutral-200">
                  {milestones.map((m) => {
                    const isSelected = activeYear === m.y;
                    const heightPercent = Math.max(15, Math.round((m.val / 301) * 100));

                    return (
                      <button
                        key={m.y}
                        type="button"
                        onClick={() => setActiveYear(m.y)}
                        className="group flex-1 flex flex-col items-center justify-end h-full cursor-pointer focus:outline-none"
                      >
                        {/* Number on top of bar (Exact match to 45, 54, 71, etc.) */}
                        <span
                          className={`font-mono text-[9px] sm:text-[10px] mb-1.5 transition-colors ${
                            isSelected
                              ? "text-neutral-900 font-bold"
                              : "text-neutral-500 group-hover:text-neutral-900"
                          }`}
                        >
                          {m.val}
                        </span>

                        {/* Vertical Black Bar */}
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-2.5 sm:w-3.5 rounded-t-full transition-all duration-300 ${
                            isSelected
                              ? "bg-neutral-900 ring-2 ring-[#d8fb35] ring-offset-2"
                              : "bg-neutral-900 group-hover:bg-[#d8fb35]"
                          }`}
                        />

                        {/* Year Label Below Bar */}
                        <span
                          className={`font-mono text-[9px] sm:text-[10px] mt-2 transition-colors ${
                            isSelected
                              ? "text-neutral-900 font-bold"
                              : "text-neutral-500 group-hover:text-neutral-900"
                          }`}
                        >
                          {m.y}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Milestone Detail Callout for Selected Year */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-neutral-100/90 border border-neutral-200/80 transition-all duration-200">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-neutral-900 text-white font-mono text-[11px] font-bold">
                      {selectedMilestone.y}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                      Institutional Milestone
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    {selectedMilestone.t}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
