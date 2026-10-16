import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, CheckCircle2, FileText, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/funds")({
  head: () => ({
    meta: [
      { title: "Funds & Institutional Governance | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Mount Judi Ventures operates two SEBI-registered AIFs: India Growth Fund (MJIGF, Cat-II) and India Micro Fund (MJIMF, Cat-I). Audited venture capital with institutional fiduciary governance.",
      },
      { property: "og:title", content: "Funds & Governance | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "Two SEBI-registered AIFs. Audited institutional governance, UN PRI stewardship, and operator-led venture investing.",
      },
      { property: "og:url", content: "/funds" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/funds" }],
  }),
  component: Funds,
});

const funds = [
  {
    code: "MJIGF",
    number: "01",
    name: "Mount Judi India Growth Fund",
    badge: "CATEGORY II AIF",
    accentBg: "bg-[#3b66ff]",
    accentText: "text-white",
    launched: "2019 · Final Close 2022",
    corpus: "₹100 Cr",
    status: "FULLY DEPLOYED / IN VALUE CREATION",
    type: "SEBI registered sector-agnostic Category II AIF",
    description:
      "MJIGF deployed INR 100 Cr into Seed, Pre-Series A, and Series A rounds across Healthcare, DeepTech, FoodTech, and Logistics. We maintain dedicated follow-on reserves and work closely with portfolio executives on enterprise customer acquisition, pricing, and corporate governance.",
    cta: { label: "VIEW MJIGF PORTFOLIO", to: "/portfolio" },
    registration: "IN/AIF2/18-19/0536",
    manager: "Mount Judi Ventures LLP",
    scoresId: "AIF00656",
    highlights: [
      "Backing 14+ category leaders across healthcare, logistics, and deeptech",
      "Realized early liquidity via M&A exit (Internshala / upGrad)",
      "High follow-on reserves dedicated to Series B breakout winners",
    ],
  },
  {
    code: "MJIMF",
    number: "02",
    name: "Mount Judi India Micro Fund",
    badge: "CATEGORY I AIF · ANGEL FUND",
    accentBg: "bg-[#d8fb35]",
    accentText: "text-neutral-900",
    launched: "Active · Open for Investments",
    corpus: "₹50 Cr",
    status: "OPEN FOR LP COMMITMENTS",
    type: "SEBI registered Category I AIF (VCF Angel Fund)",
    description:
      "Mount Judi India Micro Fund provides accredited investors and family offices with deal-by-deal co-investment exposure. With a target corpus of INR 50 Cr, this close-ended fund invests in Seed and Pre-Series A companies demonstrating defensible IP, positive unit economics, and large market potential.",
    cta: {
      label: "REQUEST LP INFORMATION PACK",
      href: "mailto:ebaadmomin@mountjudi.com?subject=Inquiry%20regarding%20Mount%20Judi%20India%20Micro%20Fund%20(MJIMF)",
    },
    registration: "IN/AIF1/22-23/1068",
    manager: "Mount Judi Ventures LLP",
    scoresId: "AIF0094",
    note: "To participate in the fund or explore co-investment rights, please connect directly with our partner Ebaad Momin at ebaadmomin@mountjudi.com.",
    highlights: [
      "Flexible deal-by-deal co-investment rights on verified deals",
      "Targeted at high-potential Seed and Pre-Series A category champions",
      "Audited SEBI Cat-I compliance and quarterly NAV reporting",
    ],
  },
];

const governancePillars = [
  {
    number: "01",
    title: "SEBI Regulatory Oversight",
    tag: "STATUTORY COMPLIANCE",
    description:
      "Strict compliance with SEBI Alternative Investment Funds Regulations. Independent compliance audits, registered SCORES dispute redressal (AIF00656 & AIF0094), and institutional custody safeguards.",
  },
  {
    number: "02",
    title: "UN PRI Responsible Stewardship",
    tag: "ESG FIDUCIARY",
    description:
      "One of India's earliest VC signatories (2020) to the United Nations Principles for Responsible Investment. We audit every investment against rigorous environmental, social, and governance standards.",
  },
  {
    number: "03",
    title: "Independent Valuation & Audits",
    tag: "QUARTERLY AUDIT",
    description:
      "Quarterly performance reporting, transparent NAV calculations, independent external auditors, and clear mark-to-market updates provided directly to Limited Partners.",
  },
  {
    number: "04",
    title: "Values-Aligned Ethical Mandate",
    tag: "ZERO TOXIC TERMS",
    description:
      "Clean commercial contracts with zero predatory terms or toxic governance covenants. Direct alignment between founders and fund partners on long-term enterprise valuation.",
  },
];

function Funds() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. MODERN SWISS EDITORIAL HERO ── */}
      <section className="border-b border-[var(--ink)]/15 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-tight">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Pill Category Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs">
              <span>[ 01 // FUNDS & GOVERNANCE ]</span>
            </div>

            {/* Telemetry Tag */}
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3b66ff]" />
              <span>┌ 2 SEBI-REGISTERED AIFs · ₹150 Cr+ COMBINED AUM</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
                Two SEBI{" "}
                <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans">
                  Funds.
                </span>{" "}
                <br />
                <span className="italic font-serif font-normal lowercase text-neutral-500">
                  one disciplined fiduciary mandate.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                Mount Judi Ventures operates two SEBI-registered Alternative Investment Funds with combined AUM of ₹150 Cr+. Both vehicles adhere to the same doctrine: back resilient category leaders early, provide hands-on operator mentorship, and steward capital with absolute audit transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FUND VEHICLE BENTO CARDS ── */}
      <section className="container-tight py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {funds.map((fund) => (
            <article
              key={fund.code}
              className="rounded-[32px] border border-black/10 bg-white p-7 sm:p-10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-black/5">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white font-mono text-xs font-bold">
                      {fund.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider font-semibold text-neutral-700">
                      {fund.badge}
                    </span>
                  </div>

                  {/* Corpus Tag */}
                  <div className={`px-4 py-1.5 rounded-full ${fund.accentBg} ${fund.accentText} font-display text-base sm:text-lg font-bold tracking-tight shadow-xs flex items-center gap-1.5`}>
                    <span>{fund.corpus}</span>
                    <span className="text-xs opacity-75">CORPUS</span>
                  </div>
                </div>

                {/* Fund Title & Description */}
                <div className="mt-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                    {fund.name}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2 font-mono text-[11px]">
                    <span className="px-3 py-1 rounded-full bg-neutral-100 font-semibold text-neutral-800">
                      {fund.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-neutral-50 text-neutral-500 border border-black/5">
                      {fund.launched}
                    </span>
                  </div>
                  <p className="mt-5 text-sm text-neutral-600 leading-relaxed font-sans">
                    {fund.description}
                  </p>
                </div>

                {/* Key Features Bento Subsection */}
                <div className="mt-8 rounded-2xl bg-neutral-50/70 p-5 sm:p-6 border border-black/5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />
                    KEY FEATURES & ALLOCATION:
                  </div>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-[13px] text-neutral-700">
                    {fund.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {fund.note && (
                    <div className="mt-4 pt-4 border-t border-black/5 font-mono text-[11px] text-neutral-600 leading-relaxed">
                      <span className="font-bold text-neutral-900 mr-1.5">NOTE:</span>
                      {fund.note}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Regulatory Ledger & CTA */}
              <div className="mt-8 pt-6 border-t border-black/5">
                {/* Registration Metadata Ledger */}
                <div className="rounded-xl bg-white border border-black/5 p-4 mb-6 font-mono text-xs divide-y divide-black/5">
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-500 text-[10px] uppercase tracking-wider">
                      SEBI REGISTRATION
                    </span>
                    <span className="font-bold text-neutral-900">{fund.registration}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-500 text-[10px] uppercase tracking-wider">
                      INVESTMENT MANAGER
                    </span>
                    <span className="font-bold text-neutral-900">{fund.manager}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-500 text-[10px] uppercase tracking-wider">
                      SCORES COMPLAINT ID
                    </span>
                    <span className="font-bold text-neutral-900">{fund.scoresId}</span>
                  </div>
                </div>

                {/* Pill Action Button */}
                {"to" in fund.cta ? (
                  <Link
                    to={fund.cta.to}
                    className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-xs group/btn"
                  >
                    <span className="font-semibold">{fund.cta.label}</span>
                    <span className="w-6 h-6 rounded-full bg-white text-neutral-900 flex items-center justify-center text-xs group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                ) : (
                  <a
                    href={fund.cta.href}
                    className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-xs group/btn"
                  >
                    <span className="font-semibold">{fund.cta.label}</span>
                    <span className="w-6 h-6 rounded-full bg-[#d8fb35] text-neutral-900 flex items-center justify-center text-xs group-hover/btn:translate-x-1 transition-transform font-bold">
                      →
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 3. INSTITUTIONAL GOVERNANCE PILLARS ── */}
      <section className="border-t border-b border-[var(--ink)]/15 bg-neutral-50/60 py-20 md:py-28">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs mb-4">
                <span>[ 02 // LP ASSURANCE & RIGOR ]</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                Institutional Rigor for{" "}
                <span className="bg-[#d8fb35] text-neutral-900 px-3.5 py-0.5 rounded-full inline-block font-sans">
                  responsible returns.
                </span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed">
              At Mount Judi, capital stewardship is guided by independent checks, transparency, and international best practices. Our Limited Partners include family offices, leading founders, and accredited institutional investors across India and the diaspora.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governancePillars.map((p) => (
              <div
                key={p.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono text-xs font-bold">
                      {p.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-neutral-100 font-mono text-[9px] uppercase tracking-wider text-neutral-600 font-semibold">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  <span>AUDITED BENCHMARK</span>
                  <span>↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LP INQUIRY TERMINAL BENTO ── */}
      <section className="container-tight py-20 md:py-28">
        <div className="rounded-[36px] bg-[#0c1a2e] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b66ff]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d8fb35]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider font-semibold mb-4 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d8fb35]" />
                <span>INSTITUTIONAL ALLOCATIONS & CO-INVESTMENT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                Institutional Allocations &amp; Syndicates
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                Speak directly with our General Partners regarding portfolio deployment, quarterly NAV reporting, and follow-on syndicates.
              </p>

              {/* Reporting Standard Card */}
              <div className="mt-6 rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-5 border border-white/15 text-xs text-white/90 font-sans leading-relaxed">
                <span className="font-mono font-bold text-[#d8fb35] mr-2">REPORTING STANDARDS:</span>
                All Limited Partners receive quarterly audited accounts, third-party valuations, and clear mark-to-market performance updates.
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:ebaadmomin@mountjudi.com?subject=Mount%20Judi%20Ventures%20-%20Institutional%20Inquiry"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#d8fb35] hover:bg-[#c9ec28] text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request LP Information Pack</span>
                <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
