import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useId } from "react";
import {
  Plus,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Clear answers to questions from founders, institutional LPs, and syndication partners regarding Mount Judi Ventures' investment criteria, cheque sizes, governance, and process.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "Underwriting criteria, ticket sizes, investment timelines, and ethical governance for ambitious operators.",
      },
      { property: "og:url", content: "/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

interface FAQItem {
  id: string;
  category: string;
  tag: string;
  question: string;
  answer: string;
  links?: { label: string; to: string }[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "stage",
    category: "Capital & Cheque Size",
    tag: "STAGE & RESERVES",
    question: "What stage do you invest in, and what is your cheque size?",
    answer:
      "We invest primarily at Seed to Series A stages. Our initial ticket sizes range from ₹2 Crore to ₹25 Crore. We deliberately retain up to 50% of our fund corpus in reserve to back our highest-conviction founders with pro-rata follow-on capital in subsequent growth rounds.",
    links: [
      { label: "Review Fund Criteria", to: "/funds" },
      { label: "Explore Portfolio", to: "/portfolio" },
    ],
  },
  {
    id: "lead-coinvest",
    category: "Capital & Cheque Size",
    tag: "SYNDICATION",
    question: "Do you lead rounds or co-invest?",
    answer:
      "Both. In the majority of our early-stage investments, we lead or anchor rounds with high conviction, setting transparent term sheets and introducing institutional co-investors alongside us. We also participate as high-value syndicate partners alongside top-tier domestic and global venture funds.",
    links: [{ label: "Investment Thesis", to: "/thesis" }],
  },
  {
    id: "decision-speed",
    category: "Founders & Pitching",
    tag: "TIMELINE & IC",
    question: "How long does your evaluation and decision cycle take?",
    answer:
      "Typically 2 to 4 weeks from our initial partner conversation to formal Investment Committee (IC) decision and term sheet issuance. We run a lean, transparent diligence process led directly by our General Partners with zero administrative bureaucracy.",
    links: [{ label: "Pitch Your Startup", to: "/contact" }],
  },
  {
    id: "how-to-pitch",
    category: "Founders & Pitching",
    tag: "SUBMISSION",
    question: "How do we pitch to Mount Judi Ventures?",
    answer:
      "You can submit your pitch deck and executive memo through our founder portal, or reach out through a warm introduction from our portfolio founders or venture partners. We review every submission systematically and target direct partner feedback within 7 business days.",
    links: [{ label: "Submit Pitch Memo", to: "/contact" }],
  },
  {
    id: "first-time-founders",
    category: "Founders & Pitching",
    tag: "FOUNDER PEDIGREE",
    question: "Do you back first-time founders?",
    answer:
      "Yes. We back obsessive, high-integrity operators who possess deep domain insight and solve urgent systemic problems with durable unit economics. Whether this is your first venture or your third, what matters most is execution speed, operational grit, and integrity.",
    links: [{ label: "Founder Voices", to: "/team" }],
  },
  {
    id: "materials-needed",
    category: "Founders & Pitching",
    tag: "DILIGENCE PACK",
    question: "What materials should we have ready before pitching?",
    answer:
      "A concise pitch deck (10 to 15 slides) covering: the customer problem, market size, your differentiated technology or moat, current revenue traction, unit economics (CAC, LTV, payback period, gross margins), cap table structure, and founder backgrounds. Having an active data room speeds diligence considerably.",
    links: [{ label: "Submit Pitch Deck", to: "/contact" }],
  },
  {
    id: "sector-focus",
    category: "Sectors & Theses",
    tag: "SECTOR THESIS",
    question: "What specific sectors does Mount Judi Ventures focus on?",
    answer:
      "We invest along four core verticals across India's compounding economy:\n1. Deep Tech, Enterprise AI & Computer Vision\n2. Logistics, Autonomous Robotics & Supply Chain Infrastructure\n3. MedTech, Genomics & Healthcare Diagnostic Platforms\n4. High-Margin Consumer Brands & Food Tech with proven customer retention and positive unit contribution.",
    links: [{ label: "Full Investment Thesis", to: "/thesis" }],
  },
  {
    id: "cash-burn",
    category: "Sectors & Theses",
    tag: "CAPITAL EFFICIENCY",
    question: "What is your philosophy on cash burn and valuations?",
    answer:
      "We champion sustainable unit economics over vanity growth metrics. We back companies that understand their true gross contribution margins, build durable pricing power, and treat founder equity as scarce. We do not fund artificial growth driven entirely by subsidy burn.",
    links: [{ label: "Investment Memos", to: "/perspective" }],
  },
  {
    id: "differentiation",
    category: "Governance & Ethics",
    tag: "OPERATOR DNA",
    question: "What makes Mount Judi Ventures different from typical VC firms?",
    answer:
      "Three distinct pillars define us:\n1. Operator Pedigree: Our partners have built, managed, and taken technology enterprises public over four decades.\n2. Clean Governance: Clean term sheets with zero toxic liquidation preferences, punitive ratchets, or misaligned structural controls.\n3. Ethical Accountability: As a UN PRI signatory and SEBI-regulated fund, we uphold rigorous institutional and fiduciary hygiene.",
    links: [{ label: "Our Partners & Team", to: "/team" }],
  },
  {
    id: "un-pri-esg",
    category: "Governance & Ethics",
    tag: "UN PRI & ETHICS",
    question: "What does being a UN PRI signatory mean for founders?",
    answer:
      "Being a signatory to the United Nations Principles for Responsible Investment (UN PRI) means our capital adheres to ethical, environmental, and sound corporate governance standards. We do not invest in predatory lending, tobacco, weapons, or harmful products. For founders, it commits us to a clean governance partnership that protects long-term shareholder equity and reputation.",
    links: [{ label: "Governance & Creed", to: "/about" }],
  },
  {
    id: "board-involvement",
    category: "Governance & Ethics",
    tag: "POST-INVESTMENT",
    question: "How active are Mount Judi partners after investing?",
    answer:
      "We act as close sounding boards and operational partners. We typically take board or observer seats to assist with strategic matters: key executive hiring, enterprise customer introductions, follow-on syndicate structuring, and institutional governance. We give operators full autonomy on day-to-day operations while being a phone call away during critical inflection points.",
    links: [{ label: "Team & Partners", to: "/team" }],
  },
  {
    id: "fund-structure",
    category: "LPs & Co-Investing",
    tag: "REGULATORY COMPLIANCE",
    question: "What is Mount Judi's fund structure and regulatory status?",
    answer:
      "Mount Judi Ventures operates SEBI-registered Category II & Category I Alternative Investment Funds (AIFs) structured as contributory trusts. All funds are held in trust where the LP is the sole beneficiary, with Mount Judi Ventures appointed strictly as Investment Manager. An Independent Trustee (Vistra ITCL) oversees trust operations and adherence to mandate, a registered Custodian controls all banking transactions, and all fund units are dematerialized and secured in national depositories (NSDL / CDSL).",
    links: [{ label: "Funds & LPs", to: "/funds" }],
  },
  {
    id: "lp-co-investment",
    category: "LPs & Co-Investing",
    tag: "CO-INVESTMENT RIGHTS",
    question: "Can Limited Partners (LPs) co-invest directly in deals?",
    answer:
      "Yes. Qualified institutional investors, family offices, and accredited LPs who anchor our funds gain access to curated direct co-investment opportunities alongside Fund II capital in high-conviction rounds, enabling enhanced capital allocation without double layers of carry.",
    links: [{ label: "Institutional Portals", to: "/funds" }],
  },
  {
    id: "lp-reporting",
    category: "LPs & Co-Investing",
    tag: "REPORTING CADENCE",
    question: "What is the reporting cadence and transparency for LPs?",
    answer:
      "We provide comprehensive transparency through quarterly portfolio updates, annual independent portfolio valuations by accredited valuers (shared directly with LPs), annual statutory fund audits, and mandatory semi-annual performance benchmarking by Government of India-appointed agencies: NSE Indices, CRISIL, and Preqin.",
    links: [{ label: "Contact Investor Relations", to: "/contact" }],
  },
];

function CornerBracket({ position }: { position: "tl" | "br" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-5 w-5 ${position === "tl"
        ? "-left-4 -top-3 border-l-[3px] border-t-[3px] border-[#036089]"
        : "-bottom-3 -right-4 border-b-[3px] border-r-[3px] border-[#C78D1E]"
        }`}
    />
  );
}

function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    stage: true,
    "decision-speed": true,
  });
  const baseId = useId();

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. EDITORIAL HEADER SECTION ── */}
      <section className="relative overflow-hidden bg-white border-b border-black/10 pt-12 pb-10 sm:pt-14 sm:pb-12 md:pt-16 md:pb-14">
        <div className="container-tight">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-2.5 font-mono text-xs font-black uppercase tracking-[0.25em] text-[#036089] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C78D1E] animate-pulse" />
            <span>KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] uppercase leading-[0.95] text-balance text-neutral-950">
                FREQUENTLY
                <br />
                ASKED QUESTIONS.
              </h1>
              <p className="mt-5 sm:mt-6 font-sans text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-neutral-700">
                Direct answers to the questions founders, institutional LPs, and syndicate
                partners ask most. Everything you need to know about our cheque sizes, underwriting
                cadence, operator DNA, and governance principles.
              </p>
            </div>

            {/* Right Telemetry Badge */}
            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <div className="rounded-2xl border-2 border-transparent hover:border-neutral-950 bg-white p-5 shadow-xs transition-all">
              </div>

              <div className="rounded-2xl border-2 border-transparent hover:border-neutral-950 bg-white p-5 shadow-xs transition-all">

                <div className="mt-1 text-2xl font-black text-neutral-950 font-display">
                  ₹2 Cr - ₹25 Cr
                </div>
                <div className="text-[11px] text-neutral-600 mt-0.5">
                  Seed to Series A with follow-on reserves
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN FAQ ACCORDION LIST ── */}
      <section className="pt-6 pb-14 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20">
        <div className="container-tight max-w-4xl">
          <div className="space-y-3.5">
            {FAQ_DATA.map((item, index) => {
              const isOpen = !!openItems[item.id];
              const triggerId = `${baseId}-q-${item.id}`;
              const panelId = `${baseId}-a-${item.id}`;

              return (
                <div
                  key={item.id}
                  className="group rounded-2xl border-2 border-transparent hover:border-neutral-950 bg-white shadow-xs transition-all duration-300 overflow-hidden"
                >
                  {/* Header trigger button */}
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-start sm:items-center justify-between gap-4 p-5 sm:p-6 text-left outline-none transition-colors hover:bg-neutral-50/60 focus-visible:ring-2 focus-visible:ring-neutral-950"
                  >
                    <div className="flex items-start sm:items-center gap-4 min-w-0">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-black transition-colors ${isOpen
                          ? "bg-[#036089] text-white shadow-2xs"
                          : "bg-neutral-100 text-neutral-700 group-hover:bg-neutral-200"
                          }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#036089] px-2 py-0.5 rounded-full bg-[#036089]/10">
                            {item.tag}
                          </span>
                          <span className="font-mono text-[9px] text-neutral-400 hidden sm:inline">
                            // {item.category}
                          </span>
                        </div>
                        <h2
                          className={`font-sans text-sm sm:text-base font-bold transition-colors leading-snug ${isOpen ? "text-neutral-950" : "text-neutral-900 group-hover:text-black"
                            }`}
                        >
                          {item.question}
                        </h2>
                      </div>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 ${isOpen
                        ? "bg-neutral-950 text-white rotate-45"
                        : "bg-white text-neutral-700 group-hover:border-black group-hover:text-black"
                        }`}
                    >
                      <Plus className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-black/5 px-5 sm:px-6 py-5 bg-[#fbfaf6]">
                        <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-700 whitespace-pre-line">
                          {item.answer}
                        </p>

                        {/* Related contextual links */}
                        {item.links && item.links.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-black/5 flex flex-wrap items-center gap-3">
                            <span className="font-mono text-[10px] uppercase font-bold text-neutral-500">
                              Context:
                            </span>
                            {item.links.map((link) => (
                              <Link
                                key={link.to}
                                to={link.to}
                                className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#036089] hover:text-neutral-950 transition-colors"
                              >
                                <span>{link.label}</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── 3. STILL HAVE QUESTIONS BANNER ── */}
          <div className="mt-14 sm:mt-16 rounded-[28px] sm:rounded-[36px] border-2 border-transparent hover:border-neutral-950 bg-black text-white p-8 sm:p-12 shadow-sm transition-all duration-300">
            <div className="relative">
              <CornerBracket position="tl" />
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C78D1E]" />
                  <span>DIRECT OPERATOR ACCESS</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                  Have a question that isn&apos;t answered here?
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                  Our partners are active operators who welcome direct conversations with founders
                  building foundational category leaders and institutional co-investors.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs group"
                  >
                    <span>Pitch Your Startup</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    to="/thesis"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all border border-white/10"
                  >
                    <span>Review Our Thesis</span>
                  </Link>
                </div>
              </div>
              <CornerBracket position="br" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
