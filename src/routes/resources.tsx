import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Rocket,
  ShieldCheck,
  Scale,
  Sprout,
  Send,
  Mail,
} from "lucide-react";

import creedSummit from "@/assets/afk.jpeg";
import creedSlope from "@/assets/go.jpeg";
import heroMountain from "@/assets/op.jpeg";
import summitCreed from "@/assets/mount-judi-summit-creed.jpg";
import poster from "@/assets/mount-judi-poster.jpg";

import dilFoodsLogo from "@/assets/logos/dil-foods.webp";
import loFoodsLogo from "@/assets/logos/lo-foods.webp";
import freshtohomeLogo from "@/assets/logos/freshtohome.webp";
import staquLogo from "@/assets/logos/staqu.webp";
import convegeniusLogo from "@/assets/logos/convegenius.webp";
import basecareLogo from "@/assets/logos/4basecare.webp";
import skyeAirLogo from "@/assets/logos/skye-air.webp";
import internshalaLogo from "@/assets/logos/internshala-zoomed.png";

import avatar1 from "@/assets/team/pc-musthafa.webp";
import avatar2 from "@/assets/team/sridhar-mitta.webp";
import avatar3 from "@/assets/team/sunil-kolangara.webp";
import avatar4 from "@/assets/team/vedamoorthy-namasivayam.webp";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Founder Resource Archive | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Internal operating playbooks, diligence checklists, and governance frameworks open-sourced by Mount Judi Ventures for ambitious founders.",
      },
      { property: "og:title", content: "Founder Resource Archive | Mount Judi Ventures" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const pillars = [
  {
    icon: Rocket,
    image: creedSummit,
    title: "Capital & Narrative",
    desc: "Pitch architecture, investor cadence, and fundraising discipline.",
  },
  {
    icon: ShieldCheck,
    image: heroMountain,
    title: "Diligence & Governance",
    desc: "Board packs, data rooms, and institutional-grade hygiene.",
  },
  {
    icon: Scale,
    image: creedSlope,
    title: "Legal & Financial",
    desc: "Term sheets, cap tables, and dilution-safe structures.",
  },
];

const trustedLogos = [
  { name: "DIL Foods", src: dilFoodsLogo },
  { name: "Lo! Foods", src: loFoodsLogo },
  { name: "FreshToHome", src: freshtohomeLogo },
  { name: "Staqu", src: staquLogo },
  { name: "ConveGenius", src: convegeniusLogo },
  { name: "4baseCare", src: basecareLogo },
  { name: "Skye Air", src: skyeAirLogo },
  { name: "Internshala", src: internshalaLogo },
];

const playbooks = [
  {
    cat: "Pitch Deck",
    image: summitCreed,
    title: "12-Slide Pitch Deck Architecture",
    desc: "The exact narrative cadence our Investment Committee requires for early-stage underwriting: problem gravity, technical moat, and unit margins.",
  },
  {
    cat: "Checklist",
    image: creedSummit,
    title: "Seed & Series A Commercial Diligence Checklist",
    desc: "The comprehensive data room requirements, customer reference schemas, and regulatory hygiene items audited by our partners.",
  },
  {
    cat: "Financial Model",
    image: poster,
    title: "Founder Cap Table & Dilution Modeling Ledger",
    desc: "How to model ESOP reserves, convertible notes, and pro-rata governance terms without unexpected ownership cliff events.",
  },
  {
    cat: "Legal Brief",
    image: heroMountain,
    title: "Ethical Term Sheet Clause Analysis",
    desc: "De-mystifying 1x non-participating liquidation preferences, founder vesting cliffs, drag-along rights, and Shariah governance mechanics.",
  },
  {
    cat: "Template",
    image: creedSlope,
    title: "90-Minute Executive Board Pack Template",
    desc: "How to structure high-density board memos that drive operational problem-solving rather than cosmetic vanity metric reporting.",
  },
  {
    cat: "Contract Draft",
    image: summitCreed,
    title: "Enterprise B2B Pilot SOW Contract Framework",
    desc: "Structuring corporate proof-of-concept contracts with predefined KPI criteria to ensure conversion to high-value enterprise ACVs.",
  },
];

function Resources() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollCards = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. SPLIT HERO ── */}
      <section className="border-b border-[var(--ink)]/10 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d8fb35] text-neutral-900 font-mono text-xs uppercase tracking-wider font-semibold mb-6">
                <Sprout className="w-3.5 h-3.5" />
                <span>Our Mission</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] text-balance">
                We're Building a{" "}
                <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans">
                  Stronger,
                </span>{" "}
                Fairer, Enduring Future.
              </h1>
              <p className="mt-6 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
                Through education, disciplined capital, and operator-backed action, we empower
                founders to protect their vision and create lasting change.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#playbooks"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0c1a2e] hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Playbooks</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/thesis"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-[var(--ink)]/15 hover:border-[var(--ink)] text-neutral-900 font-mono text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>

            {/* Right: 3 tall image cards */}
            <div className="lg:col-span-7">
              <div className="flex lg:grid lg:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="group relative rounded-[28px] overflow-hidden border border-black/10 shadow-2xs hover:shadow-xl transition-all duration-300 min-w-[220px] sm:min-w-[240px] lg:min-w-0 snap-center shrink-0 h-[340px] sm:h-[400px] lg:h-[440px] bg-neutral-100"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                      <p.icon className="w-5 h-5 text-[#0c1a2e]" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-lg font-bold text-white leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 font-sans text-[12px] text-white/80 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUSTED BY ── */}
      <section className="border-b border-[var(--ink)]/10 py-10">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 font-semibold shrink-0">
              Trusted by
            </div>
            <div className="flex-1 grid grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-5 items-center">
              {trustedLogos.map((l) => (
                <img
                  key={l.name}
                  src={l.src}
                  alt={l.name}
                  loading="lazy"
                  className="h-6 sm:h-7 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PLAYBOOKS + CTA ── */}
      <section id="playbooks" className="container-tight py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: scrollable playbook cards */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c1a2e] text-white font-mono text-xs uppercase tracking-wider font-semibold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35]" />
              <span>Our Playbooks</span>
            </div>
            <div
              ref={scrollerRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-3 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {playbooks.map((b) => (
                <article
                  key={b.title}
                  className="group flex flex-col min-w-[260px] sm:min-w-[300px] snap-start shrink-0"
                >
                  <div className="relative rounded-[24px] overflow-hidden border border-black/10 shadow-2xs group-hover:shadow-lg transition-all h-[200px] sm:h-[220px] bg-neutral-100">
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur font-mono text-[10px] uppercase tracking-wider font-semibold text-neutral-800 shadow-sm">
                      {b.cat}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-neutral-600 leading-relaxed">
                    {b.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider font-semibold text-neutral-900 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Right: heading + newsletter */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.08] max-w-xs">
                Real Playbooks. Real Impact. A Better Company.
              </h2>
              <div className="flex items-center gap-2 shrink-0 pt-1">
                <button
                  onClick={() => scrollCards(-1)}
                  aria-label="Previous playbooks"
                  className="w-10 h-10 rounded-full border border-[var(--ink)]/15 hover:border-[var(--ink)] hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollCards(1)}
                  aria-label="Next playbooks"
                  className="w-10 h-10 rounded-full border border-[var(--ink)]/15 hover:border-[var(--ink)] hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="mt-4 font-sans text-sm text-neutral-600 leading-relaxed">
              Discover how we turn hard-won operating experience into open-source frameworks that
              protect founder equity and accelerate durable growth.
            </p>

            {/* Newsletter card */}
            <div className="mt-8 rounded-[28px] bg-[#d8fb35] text-neutral-900 p-6 sm:p-7 relative overflow-hidden shadow-lg">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/30 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-extrabold tracking-tight leading-snug">
                  Stay Sharp. Stay Informed.
                </h3>
                <p className="mt-2 font-sans text-[13px] text-neutral-800/80 leading-relaxed">
                  Subscribe and get the latest playbooks, portfolio stories, and founder resources
                  delivered to your inbox.
                </p>
                {subscribed ? (
                  <div className="mt-5 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#0c1a2e] text-white font-mono text-xs uppercase tracking-wider font-semibold">
                    You're on the list.
                  </div>
                ) : (
                  <form
                    onSubmit={onSubscribe}
                    className="mt-5 flex items-center gap-2 bg-white rounded-full p-1.5 shadow-sm"
                  >
                    <div className="flex items-center gap-2 pl-3 flex-1 min-w-0">
                      <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-transparent outline-none font-sans text-sm text-neutral-900 placeholder:text-neutral-400 min-w-0"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0c1a2e] hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shrink-0"
                    >
                      <span className="hidden sm:inline">Subscribe</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {[avatar1, avatar2, avatar3, avatar4].map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt=""
                        loading="lazy"
                        className="w-8 h-8 rounded-full object-cover border-2 border-[#d8fb35]"
                      />
                    ))}
                  </div>
                  <span className="font-sans text-[12px] text-neutral-800/80">
                    Join thousands of ambitious founders
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DARK PITCH CTA ── */}
      <section className="container-tight pb-20 md:pb-28">
        <div className="rounded-[36px] bg-[#0c1a2e] text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#d8fb35]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d8fb35] font-mono text-xs uppercase tracking-wider font-semibold mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35]" />
              Looking for hands-on capital?
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white max-w-lg leading-tight">
              Pitch Directly to Mount Judi Partners
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans max-w-lg">
              Seed to Series A checks from ₹2 Cr to ₹25 Cr. 14-day guaranteed partner review.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#d8fb35] hover:bg-[#c9ec28] text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md shrink-0"
          >
            <span>Submit Your Pitch Deck</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
