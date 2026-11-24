import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { MountainSealEngraving } from "@/components/editorial-engravings";

export const Route = createFileRoute("/funds")({
  head: () => ({
    meta: [
      { title: "Funds & Institutional Governance | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Mount Judi Ventures operates two SEBI-registered AIFs: India Growth Fund (MJIGF) and India Micro Fund (MJIMF). Audited venture capital with institutional fiduciary governance.",
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
    accentBg: "bg-[#036089]",
    accentText: "text-white",
    arrowBg: "bg-[#036089] text-white",
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
    accentBg: "bg-[#C78D1E]",
    accentText: "text-white",
    arrowBg: "bg-[#C78D1E] text-white",
    launched: "Active · Open for Investments",
    corpus: "100 Cr",
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
    tag: "AIF ACT & RULES",
    summary:
      "Governed under SEBI (AIF) Regulations, 2012 with strict statutory leverage limits, prudential investment rules, and formal dispute redressal via SEBI SCORES.",
    tags: ["AIF Act & Rules", "SEBI SCORES", "Cat-I & Cat-II"],
  },
  {
    number: "02",
    title: "Structural Protection",
    tag: "VISTRA TRUSTEE & CUSTODIAN",
    summary:
      "All funds operate as a trust where the LP is sole beneficiary and MJV is Manager. Vistra ITCL is independent Trustee overseeing mandate, and a Custodian controls all banking.",
    tags: ["LP = Sole Beneficiary", "Vistra ITCL Trustee", "Custodian Banking"],
  },
  {
    number: "03",
    title: "Dematerialized Investments",
    tag: "NSDL / CDSL DEPOSITORY",
    summary:
      "A SEBI-registered RTA manages LP unit registers. All units are issued and secured electronically in national depositories (NSDL or CDSL) with digital statements.",
    tags: ["RTA Unit Management", "NSDL & CDSL", "Demat Holding"],
  },
  {
    number: "04",
    title: "Independent Valuation & Audits",
    tag: "VALUATION & AUDITS",
    summary:
      "Annual portfolio valuation conducted by accredited independent valuers and annual statutory fund audits by leading chartered accountants - both reports delivered directly to LPs.",
    tags: ["Annual Valuer Report", "Statutory Audit", "Direct to LPs"],
  },
  {
    number: "05",
    title: "Mandatory Benchmarking",
    tag: "NSE · CRISIL · PREQIN",
    summary:
      "Government of India & SEBI mandated benchmarking: NSE, Preqin, and CRISIL publish independent comparative performance reports every 6 months.",
    tags: ["Every 6 Months", "NSE · CRISIL · Preqin", "GoI Mandated"],
  },
  {
    number: "06",
    title: "Values-Aligned Ethical Mandate",
    tag: "UN PRI & ESG",
    summary:
      "UN PRI signatory since 2020. Strict negative screening against harmful sectors, clean term sheets, and zero toxic liquidation preferences.",
    tags: ["UN PRI Signatory", "Ethical Exclusions", "Zero Toxic Terms"],
  },
];

function Funds() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. FUND VEHICLE BENTO CARDS ── */}
      <section className="container-tight pt-10 sm:pt-14 pb-16 md:pb-24">
        {/* Editorial Sub-Header Ticker */}
        <div className="flex items-center gap-2.5 font-mono text-xs font-black uppercase tracking-[0.25em] text-neutral-800 mb-8 sm:mb-10">
          <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
          <span>SEBI REGISTERED ALTERNATIVE INVESTMENT FUNDS </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {funds.map((fund) => (
            <article
              key={fund.code}
              className="rounded-3xl border-2 border-neutral-950 bg-white p-7 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-neutral-950/10">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-950 text-white font-mono text-xs font-bold border border-neutral-950">
                      {fund.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider font-bold text-neutral-800 border border-neutral-300">
                      {fund.badge}
                    </span>
                  </div>

                  {/* Corpus Tag */}
                  <div
                    className={`px-4 py-1.5 rounded-full ${fund.accentBg} ${fund.accentText} border-2 border-neutral-950 font-display text-base sm:text-lg font-black tracking-tight shadow-xs flex items-center gap-1.5`}
                  >
                    <span>{fund.corpus}</span>
                    <span className="text-xs uppercase opacity-90 font-bold">CORPUS</span>
                  </div>
                </div>

                {/* Fund Title & Description */}
                <div className="mt-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950">
                    {fund.name}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2 font-mono text-[11px]">
                    <span className="px-3 py-1 rounded-full bg-neutral-100 font-bold text-neutral-900 border border-neutral-300">
                      {fund.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-neutral-600 font-medium border border-neutral-300">
                      {fund.launched}
                    </span>
                  </div>
                  <p className="mt-5 text-sm text-neutral-700 leading-relaxed font-sans font-normal">
                    {fund.description}
                  </p>
                </div>

                {/* Key Features Bento Subsection */}
                <div className="mt-8 rounded-2xl bg-neutral-50 p-5 sm:p-6 border-2 border-neutral-950 shadow-xs">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-900 font-black mb-3.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-950" />
                    KEY FEATURES &amp; ALLOCATION:
                  </div>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-[13px] text-neutral-800 font-medium">
                    {fund.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {fund.note && (
                    <div className="mt-4 pt-4 border-t border-neutral-950/15 font-mono text-[11px] text-neutral-700 leading-relaxed">
                      <span className="font-black text-neutral-950 mr-1.5">NOTE:</span>
                      {fund.note}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Regulatory Ledger & CTA */}
              <div className="mt-8 pt-6 border-t border-neutral-950/10">
                {/* Registration Metadata Ledger */}
                <div className="rounded-2xl bg-white border-2 border-neutral-950 p-4 sm:p-5 mb-6 font-mono text-xs divide-y divide-neutral-950/15 shadow-xs">
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-500 text-[10px] uppercase tracking-wider font-bold">
                      SEBI REGISTRATION
                    </span>
                    <span className="font-bold text-neutral-950">{fund.registration}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-500 text-[10px] uppercase tracking-wider font-bold">
                      INVESTMENT MANAGER
                    </span>
                    <span className="font-bold text-neutral-950">{fund.manager}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-500 text-[10px] uppercase tracking-wider font-bold">
                      SCORES COMPLAINT ID
                    </span>
                    <span className="font-bold text-neutral-950">{fund.scoresId}</span>
                  </div>
                </div>

                {/* Pill Action Button */}
                {"to" in fund.cta ? (
                  <Link
                    to={fund.cta.to}
                    className="inline-flex items-center justify-between w-full px-6 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-md border-2 border-neutral-950 group/btn"
                  >
                    <span className="font-bold">{fund.cta.label}</span>
                    <span
                      className={`w-7 h-7 rounded-full ${fund.arrowBg} border border-neutral-950/20 flex items-center justify-center text-xs group-hover/btn:translate-x-1 transition-transform font-black`}
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <a
                    href={fund.cta.href}
                    className="inline-flex items-center justify-between w-full px-6 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-md border-2 border-neutral-950 group/btn"
                  >
                    <span className="font-bold">{fund.cta.label}</span>
                    <span
                      className={`w-7 h-7 rounded-full ${fund.arrowBg} border border-neutral-950/20 flex items-center justify-center text-xs group-hover/btn:translate-x-1 transition-transform font-black`}
                    >
                      →
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 2. INSTITUTIONAL GOVERNANCE PILLARS ── */}
      <section className="border-t border-b border-black/10 bg-[var(--paper)] py-16 md:py-24">
        <div className="container-tight">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#036089] font-bold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C78D1E] animate-pulse" />
                <span>LP ASSURANCE &amp; RIGOR // STATUTORY FIDUCIARY ARCHITECTURE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[0.98]">
                Institutional Rigor For Generational Capital
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 max-w-md leading-relaxed font-medium">
              Every rupee invested through Mount Judi is ring-fenced by independent statutory fiduciaries,
              trust custody, demat unitization, and mandatory semi-annual GoI benchmarking.
            </p>
          </div>

          {/* Split Institutional Layout */}
          <div className="grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Left: Statutory Counterparty Ledger (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-neutral-950 text-white p-7 sm:p-9 border-2 border-neutral-950 shadow-xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C78D1E] font-black mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#C78D1E] animate-pulse" />
                  <span>STATUTORY FIDUCIARY LEDGER</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  Direct Custody. Zero Commingling.
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                  MJV never holds investor capital directly. All assets are managed through an independent
                  trust structure with licensed banking custodians, national depositories, and third-party oversight.
                </p>

                {/* Counterparty Table */}
                <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 font-mono text-xs divide-y divide-white/10">
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Fund Legal Structure</span>
                    <span className="font-bold text-white text-right text-[11px]">Contributory Trust (LP Beneficiary)</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Independent Trustee</span>
                    <span className="font-bold text-[#C78D1E] text-right text-[11px]">Vistra ITCL (India) Limited</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Banking Custodian</span>
                    <span className="font-bold text-white text-right text-[11px]">Independent SEBI Custodian</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Depository Holdings</span>
                    <span className="font-bold text-white text-right text-[11px]">NSDL &amp; CDSL (Demat)</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Mandatory Benchmarking</span>
                    <span className="font-bold text-white text-right text-[11px]">NSE · CRISIL · Preqin</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">Ethical Mandate</span>
                    <span className="font-bold text-white text-right text-[11px]">UN PRI Signatory (Since 2020)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] text-neutral-300 uppercase tracking-wider font-bold">
                    Statutory Oversight Active
                  </span>
                </div>
                <a
                  href="mailto:ebaadmomin@mountjudi.com?subject=Request%20Mount%20Judi%20Governance%20%26%20Fiduciary%20Dossier"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider font-bold text-[#C78D1E] hover:underline"
                >
                  <span>Request Info</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right: 6 Compact Pillar Specification Tiles (7 cols) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {governancePillars.map((p) => (
                <div
                  key={p.number}
                  className="rounded-2xl bg-white p-5 sm:p-6 border-2 border-transparent hover:border-neutral-950 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-950 text-white font-mono text-xs font-bold">
                        {p.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 font-mono text-[9px] uppercase tracking-wider font-bold text-neutral-700">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-neutral-950 group-hover:text-black">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-sans font-normal">
                      {p.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-neutral-50 text-neutral-600 font-mono text-[9px] font-semibold border border-neutral-200/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. LP INQUIRY TERMINAL BENTO ── */}
      <section className="container-tight py-20 md:py-28">
        <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl border-2 border-neutral-950">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider font-bold mb-4 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>INSTITUTIONAL ALLOCATIONS & CO-INVESTMENT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
                Institutional Allocations &amp; Syndicates
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-medium">
                Speak directly with our General Partners regarding portfolio deployment, quarterly
                NAV reporting, and follow-on syndicates.
              </p>

              {/* Reporting Standard Card */}
              <div className="mt-6 rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-5 border border-white/20 text-xs sm:text-sm text-white/90 font-sans leading-relaxed">
                <span className="font-mono font-bold text-white mr-2">
                  REPORTING STANDARDS:
                </span>
                All Limited Partners receive quarterly audited accounts, third-party valuations, and
                clear mark-to-market performance updates.
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:ebaadmomin@mountjudi.com?subject=Mount%20Judi%20Ventures%20-%20Institutional%20Inquiry"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-mono text-xs uppercase tracking-wider font-black transition-all duration-200 shadow-md border-2 border-white hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request LP Information Pack</span>
                <span className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs font-black">
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
