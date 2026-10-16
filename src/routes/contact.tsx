import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check, CheckCircle2, Clock, Sparkles, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Pitch | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Pitch your startup directly to Mount Judi Ventures. Direct partner review, no analyst filters, guaranteed response. Cheques from ₹2 Cr to ₹25 Cr.",
      },
      { property: "og:title", content: "Pitch Mount Judi Ventures" },
      {
        property: "og:description",
        content: "Direct founder review. Clear feedback. Seed to Series A capital.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const stages = [
  {
    id: "seed",
    name: "SEED ALLOCATION",
    range: "₹2 Cr – ₹6 Cr",
    focus: "Early product, core technical team, early customer validation.",
  },
  {
    id: "pre-a",
    name: "PRE-SERIES A CORNERSTONE",
    range: "₹6 Cr – ₹15 Cr",
    focus: "Proven unit margins, early compounding distribution, recurring usage.",
  },
  {
    id: "series-a",
    name: "SERIES A EXPANSION",
    range: "₹15 Cr – ₹25 Cr",
    focus: "Category leadership, enterprise procurement motion, defensible IP moats.",
  },
];

const faqs = [
  {
    q: "How fast does Mount Judi issue an investment response?",
    a: "Every pitch submission is reviewed directly by our Investment Committee partners. You will receive an initial response or scheduling confirmation within 14 calendar days. If there is no alignment, we provide clear, candid written feedback rather than vague ghosting.",
  },
  {
    q: "What check sizes and stages does MJV participate in?",
    a: "We deploy initial cheques from ₹2 Cr to ₹25 Cr between Seed and Series A. We maintain substantial follow-on reserves to back proven winners into subsequent expansion rounds.",
  },
  {
    q: "Do you lead investment rounds?",
    a: "Yes. We frequently lead or co-lead rounds, assisting founders with round pricing, syndicate assembly, governance term sheets, and strategic co-investor syndication.",
  },
  {
    q: "What sectors are actively evaluated?",
    a: "Our core investment pillars are Consumer (durable, high-repeat brands), Consumer Enablers (logistics, automated supply chains, B2B rails), and Disruptive Tech (AI vision, precision oncology/genomics, edtech, defensible engineering).",
  },
];

function Contact() {
  const [selectedStage, setSelectedStage] = useState<string>("pre-a");
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    sector: "Disruptive Tech",
    stage: "Pre-Series A",
    currentRaise: "₹8 Cr",
    revenue: "Pre-Revenue / Early Pilot",
    summary: "",
    deckUrl: "",
  });

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. MODERN SWISS EDITORIAL HERO ── */}
      <section className="border-b border-[var(--ink)]/15 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-tight">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs">
              <span>[ 01 // FOUNDER INTAKE ]</span>
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d8fb35]" />
              <span>┌ 14-DAY GUARANTEED PARTNER REVIEW</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
                Get an Investment Decision in{" "}
                <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans">
                  14 Days.
                </span>{" "}
                <br />
                <span className="italic font-serif font-normal lowercase text-neutral-500">
                  direct partner review with clear terms.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                Every submission below is logged directly to our General Partners and Investment Committee. We know how much focus it takes to build. We commit to an unambiguous decision within 14 calendar days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STAGE CALCULATOR & INTAKE TERMINAL ── */}
      <section className="container-tight py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Stage Guidance & SLA Ledger */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[32px] border border-black/10 bg-white p-7 sm:p-8 space-y-6 shadow-xs">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                  Investment Scope
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-neutral-900">
                  Stage &amp; Cheque Guidance
                </h2>
                <p className="mt-2 text-xs text-neutral-600 font-sans leading-relaxed">
                  Select your current operational milestone to review typical sizing and ticket posture:
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {stages.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => {
                      setSelectedStage(st.id);
                      handleChange("stage", st.name);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      selectedStage === st.id
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                        : "bg-neutral-50 text-neutral-900 border-black/5 hover:border-black/15 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-[11px]">[{st.name}]</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] ${selectedStage === st.id ? "bg-[#d8fb35] text-neutral-900" : "bg-white text-neutral-900 border border-black/5"}`}>
                        {st.range}
                      </span>
                    </div>
                    <p className={`mt-2 text-[11px] font-sans leading-relaxed ${selectedStage === st.id ? "text-white/80" : "text-neutral-500"}`}>
                      {st.focus}
                    </p>
                  </button>
                ))}
              </div>

              {/* Verified SLA Guarantee Box */}
              <div className="rounded-2xl bg-neutral-50 border border-black/5 p-5 font-mono text-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#d8fb35]" />
                  [ SLA GUARANTEE // 14-DAY COMMITMENT ]
                </div>
                <div className="space-y-2 text-neutral-600 text-[11px] font-sans leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-neutral-900 font-bold">1.</span>
                    <span>Pitch logs directly to General Partners on Day 0.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-neutral-900 font-bold">2.</span>
                    <span>Commercial &amp; thesis review completed by Day 7.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-neutral-900 font-bold">3.</span>
                    <span>Partner conversation or clear written feedback by Day 14.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Parameters */}
            <div className="rounded-[28px] border border-black/10 bg-white p-6 font-mono text-xs divide-y divide-black/5 shadow-xs">
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 text-[11px]">Geography</span>
                <span className="font-bold text-neutral-900">India &amp; India-Linked</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 text-[11px]">Stage Focus</span>
                <span className="font-bold text-neutral-900">Seed to Series A (Lead / Co-Lead)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500 text-[11px]">Follow-on Reserves</span>
                <span className="font-bold text-neutral-900">Pro-Rata Reserved for Winners</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Pitch Terminal */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] border border-black/10 bg-white p-8 md:p-12 shadow-xs">
              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#d8fb35] text-neutral-900 flex items-center justify-center font-mono font-bold text-2xl shadow-sm">
                    ✓
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-xs uppercase tracking-wider text-neutral-800 font-semibold">
                    <span>[ MEMORANDUM RECORDED ]</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                    Pitch Memorandum Received
                  </h3>
                  <p className="max-w-md mx-auto font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Thank you for sharing your materials with Mount Judi Ventures. Your deck has been routed directly to our Investment Committee partners. Our 14-day SLA window is active.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                    >
                      Submit Another Deck
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-black/5">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-100 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700">
                        Step {step} of 2
                      </div>
                      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-neutral-900">
                        {step === 1 ? "Company & Founder Details" : "Traction & Pitch Deck"}
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <span className={`h-2 w-8 rounded-full ${step === 1 ? "bg-neutral-900" : "bg-neutral-200"}`} />
                      <span className={`h-2 w-8 rounded-full ${step === 2 ? "bg-neutral-900" : "bg-neutral-200"}`} />
                    </div>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-5 font-sans text-xs">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                            FOUNDER NAME *
                          </span>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="e.g. Aarav Mehta"
                            className={inputClasses}
                          />
                        </label>
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                            WORK EMAIL *
                          </span>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="founder@venture.com"
                            className={inputClasses}
                          />
                        </label>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                            STARTUP NAME *
                          </span>
                          <input
                            required
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => handleChange("companyName", e.target.value)}
                            placeholder="e.g. Hexalog Systems"
                            className={inputClasses}
                          />
                        </label>
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                            Website / App URL
                          </span>
                          <input
                            type="url"
                            value={formData.website}
                            onChange={(e) => handleChange("website", e.target.value)}
                            placeholder="https://company.in"
                            className={inputClasses}
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                          SECTOR THEME *
                        </span>
                        <select
                          value={formData.sector}
                          onChange={(e) => handleChange("sector", e.target.value)}
                          className={inputClasses}
                        >
                          <option>Consumer (D2C, Nutrition, FoodTech, Lifestyle)</option>
                          <option>Consumer Enablers (Logistics, Cold-Chain, B2B Rails)</option>
                          <option>Disruptive Tech (AI Vision, DeepTech, Healthcare, Robotics)</option>
                          <option>Other Emerging Enterprise Sector</option>
                        </select>
                      </label>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            if (formData.name && formData.email && formData.companyName) {
                              setStep(2);
                            } else {
                              alert("Please fill in founder name, email, and startup name to proceed.");
                            }
                          }}
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                        >
                          <span>Continue to Step 2</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-5 font-sans text-xs">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                            INVESTMENT ROUND *
                          </span>
                          <select
                            value={formData.stage}
                            onChange={(e) => handleChange("stage", e.target.value)}
                            className={inputClasses}
                          >
                            <option>Seed (₹2 Cr – ₹6 Cr)</option>
                            <option>Pre-Series A (₹6 Cr – ₹15 Cr)</option>
                            <option>Series A (₹15 Cr – ₹25 Cr)</option>
                            <option>Bridge / Pre-Seed</option>
                          </select>
                        </label>
                        <label className="block">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                            TARGET ROUND SIZE *
                          </span>
                          <input
                            type="text"
                            value={formData.currentRaise}
                            onChange={(e) => handleChange("currentRaise", e.target.value)}
                            placeholder="e.g. ₹10 Cr ($1.2M)"
                            className={inputClasses}
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                          CURRENT TRACTION / UNIT ECONOMICS
                        </span>
                        <input
                          type="text"
                          value={formData.revenue}
                          onChange={(e) => handleChange("revenue", e.target.value)}
                          placeholder="e.g. ₹45L MRR, 65% gross margin, 15 hospital signed contracts"
                          className={inputClasses}
                        >
                        </input>
                      </label>

                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                          PROBLEM GRAVITY &amp; DIFFERENTIATION *
                        </span>
                        <textarea
                          required
                          rows={3}
                          value={formData.summary}
                          onChange={(e) => handleChange("summary", e.target.value)}
                          placeholder="What fundamental friction are you solving, what structural moat protects you, and what early customer truth have you uncovered?"
                          className={textareaClasses}
                        />
                      </label>

                      <label className="block">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                          PITCH DECK URL (DOCSEND / DRIVE) *
                        </span>
                        <input
                          required
                          type="url"
                          value={formData.deckUrl}
                          onChange={(e) => handleChange("deckUrl", e.target.value)}
                          placeholder="https://docsend.com/... or Google Drive link"
                          className={inputClasses}
                        />
                      </label>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-mono text-xs uppercase tracking-wider font-semibold transition-all"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#d8fb35] hover:bg-[#c9ec28] text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xs"
                        >
                          <span>Submit Pitch Deck</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUNDER FAQ TERMINAL ── */}
      <section className="container-tight py-20 border-t border-[var(--ink)]/15">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs mb-4">
            <span>[ 02 // FREQUENT INQUIRIES ]</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-black/10 bg-white p-6 cursor-pointer shadow-xs hover:border-black/20 transition-all"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4 font-mono text-xs font-bold uppercase">
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center text-[10px]">
                        0{i + 1}
                      </span>
                      <span className="text-neutral-900">{faq.q}</span>
                    </span>
                    <span className="w-7 h-7 rounded-full bg-neutral-50 flex items-center justify-center text-xs text-neutral-600">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-4 pt-4 border-t border-black/5 font-sans text-xs sm:text-[13px] leading-relaxed text-neutral-600">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

const inputClasses =
  "mt-1.5 w-full rounded-full border border-black/10 bg-neutral-50 px-5 py-3 font-sans text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all";

const textareaClasses =
  "mt-1.5 w-full rounded-2xl border border-black/10 bg-neutral-50 px-5 py-3 font-sans text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white resize-none transition-all";
