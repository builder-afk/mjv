import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle, Plus } from "lucide-react";

interface Pillar {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  card: string;
  labelTone: string;
  subtitleTone: string;
  bodyTone: string;
  badge: string;
}

const PILLARS: Pillar[] = [
  {
    label: "[ 01 // LEADERSHIP ]",
    title: "Operator Leadership",
    subtitle: "40+ years running global businesses",
    description:
      "Our partners have built and scaled global technology companies. You get direct counsel on pricing, hiring, and negotiations.",
    card: "bg-white border border-black/10 text-neutral-900",
    labelTone: "text-neutral-500",
    subtitleTone: "text-neutral-600",
    bodyTone: "text-neutral-600",
    badge: "bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white",
  },
  {
    label: "[ 02 // CAPITAL ]",
    title: "Decisive Capital",
    subtitle: "Seed to Series A",
    description:
      "We lead early-stage rounds with dedicated follow-on reserves. We back sustainable traction, not reckless burn.",
    card: "bg-[#3b66ff] text-white",
    labelTone: "text-white/80",
    subtitleTone: "text-white/90",
    bodyTone: "text-white/85",
    badge: "bg-white text-neutral-900",
  },
  {
    label: "[ 03 // GOVERNANCE ]",
    title: "Ethical Governance",
    subtitle: "UN PRI Signatory",
    description:
      "Clean term sheets with no toxic liquidation preferences. Fiduciary oversight that protects founder equity.",
    card: "bg-[#d8fb35] text-neutral-900",
    labelTone: "text-neutral-800",
    subtitleTone: "text-neutral-800",
    bodyTone: "text-neutral-800/90",
    badge: "bg-neutral-900 text-white",
  },
  {
    label: "[ 04 // ECOSYSTEM ]",
    title: "Enterprise Access",
    subtitle: "Direct introductions",
    description:
      "Warm introductions to enterprise buyers, hospital networks, state agencies, and institutional co-investors.",
    card: "bg-neutral-900 text-white",
    labelTone: "text-neutral-400",
    subtitleTone: "text-[#d8fb35]",
    bodyTone: "text-neutral-300",
    badge: "bg-white text-neutral-900",
  },
];

interface FAQItem {
  number: string;
  tag: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    number: "01",
    tag: "CAPITAL & STAGE",
    question: "What stage do you invest in?",
    answer:
      "Seed to Series A. We write initial checks from ₹2 Cr to ₹15 Cr with dedicated reserves for pro-rata follow-on rounds.",
  },
  {
    number: "02",
    tag: "SYNDICATION",
    question: "Do you lead or co-invest?",
    answer:
      "Both. We lead rounds with high conviction, anchor syndicates, and invite top co-investors alongside us.",
  },
  {
    number: "03",
    tag: "FOCUS DOMAINS",
    question: "What is your sector focus?",
    answer:
      "Deeptech & AI, logistics & robotics infrastructure, and high-margin consumer brands with profitable unit economics.",
  },
  {
    number: "04",
    tag: "DECISION CYCLE",
    question: "How long does the process take?",
    answer:
      "2 to 4 weeks from first partner conversation to IC approval and formal term sheet execution.",
  },
  {
    number: "05",
    tag: "DIFFERENTIATOR",
    question: "What makes MJV different?",
    answer:
      "Operator DNA, SEBI Cat-II institutional compliance, ethical UN PRI principles, and hands-on founder sponsorship.",
  },
  {
    number: "06",
    tag: "PEDIGREE",
    question: "Do you back first-time founders?",
    answer:
      "Absolutely. We back high-integrity, obsessive operators solving real problems regardless of prior venture pedigree.",
  },
  {
    number: "07",
    tag: "LP ALLOCATION",
    question: "Can LPs co-invest in deals?",
    answer:
      "Yes. Qualified family offices and institutional LPs receive direct co-investment rights alongside Fund II capital.",
  },
  {
    number: "08",
    tag: "NEXT STEPS",
    question: "How do we pitch to MJV?",
    answer:
      "Submit your memo via our founder portal or connect directly with our partners for an expedited review.",
  },
];

function CornerBracket({ position }: { position: "tl" | "br" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-5 w-5 border-neutral-900 ${
        position === "tl"
          ? "-left-5 -top-3 border-l-[3px] border-t-[3px]"
          : "-bottom-3 -right-5 border-b-[3px] border-r-[3px]"
      }`}
    />
  );
}

/**
 * Section 05 — The Operator Advantage (curved bento, left) + Frequently Asked Questions (numbered accordion, right).
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="w-full scroll-mt-4 border-y border-[var(--ink)]/15 bg-[var(--paper)] py-20 text-[var(--ink)] md:py-28"
    >
      <div className="container-tight">
        {/* ── Section Header ── */}
        <div className="flex flex-col justify-between gap-6 pb-10 md:flex-row md:items-end md:pb-12">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-xs">
              <span>[ 05 // THE OPERATOR ADVANTAGE ]</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              What Sets Us{" "}
              <span className="inline-block rounded-full bg-[#d8fb35] px-4 py-0.5 font-sans font-bold text-neutral-900">
                Apart
              </span>
            </h2>
            <p className="mt-4 font-sans text-xs leading-relaxed text-neutral-700 sm:text-sm">
              Our partners have built, scaled, and managed real global technology enterprises
              through multiple deep market cycles. Still curious? The answers founders ask for most
              are right here.
            </p>
          </div>
          <div className="hidden text-right font-mono text-[11px] font-semibold uppercase tracking-widest text-neutral-500 md:block">
            <span>┌ OPERATOR CONVICTION · UN PRI STANDARD</span>
          </div>
        </div>

        {/* ── Curved Bento: Advantage (left) + FAQ (right) ── */}
        <div className="grid gap-3 rounded-[36px] border border-black/10 bg-[#f8f8f6] p-2.5 sm:p-3 lg:grid-cols-12">
          {/* Left — Operator Advantage pillars */}
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className={`group flex min-h-[220px] flex-col justify-between rounded-[28px] p-6 shadow-2xs transition-all hover:-translate-y-0.5 hover:shadow-md ${p.card}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider ${p.labelTone}`}
                  >
                    {p.label}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold shadow-xs transition-all group-hover:scale-105 ${p.badge}`}
                  >
                    ↗
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <div
                    className={`mt-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${p.subtitleTone}`}
                  >
                    {p.subtitle}
                  </div>
                  <p className={`mt-3 font-sans text-xs leading-relaxed ${p.bodyTone}`}>
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Frequently Asked Questions */}
          <div className="flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-2xs lg:col-span-7">
            {/* Title with corner brackets */}
            <div className="flex items-center justify-center border-b border-neutral-900 px-6 py-10 sm:py-12">
              <div className="relative px-2">
                <CornerBracket position="tl" />
                <h3 className="font-mono text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                  Frequently asked questions
                </h3>
                <CornerBracket position="br" />
              </div>
            </div>

            {/* Numbered accordion */}
            <ul className="flex-1 divide-y divide-black/10">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openIndex === i;
                const triggerId = `${baseId}-q-${i}`;
                const panelId = `${baseId}-a-${i}`;
                return (
                  <li key={item.number} className="flex">
                    <span className="flex w-10 shrink-0 items-start justify-center border-r border-black/10 pt-5 font-mono text-xs text-neutral-500 sm:w-12 sm:pt-6">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <button
                        type="button"
                        id={triggerId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left outline-none transition-colors hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3b66ff] sm:px-6 sm:py-5"
                      >
                        <span
                          className={`font-sans text-sm font-medium sm:text-base ${
                            isOpen ? "text-neutral-950" : "text-neutral-800"
                          }`}
                        >
                          {item.question}
                        </span>
                        <Plus
                          aria-hidden="true"
                          className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover:text-neutral-900 ${
                            isOpen ? "rotate-45 text-neutral-900" : "text-neutral-500"
                          }`}
                        />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pb-5 sm:px-6">
                            <span className="mb-2 inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                              {item.tag}
                            </span>
                            <p className="font-sans text-sm leading-relaxed text-neutral-600">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Footer CTA */}
            <div className="flex flex-col items-start justify-between gap-3 border-t border-neutral-900 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
              <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500">
                <HelpCircle className="h-3.5 w-3.5 text-[#3b66ff]" />
                <span>Question not listed? Talk to our partners.</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/thesis"
                  className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 underline decoration-black/20 underline-offset-4 transition-colors hover:text-[#3b66ff]"
                >
                  Our Thesis
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-[#3b66ff]"
                >
                  <span>Pitch Your Startup</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
