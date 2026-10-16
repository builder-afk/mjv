import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";

import loFoodsFounder from "@/assets/founders/Hexalog Reliability Quote Poster.png";
import basecareFounder from "@/assets/founders/4basecare.jpeg";
import careFounder from "@/assets/founders/care.png";
import dilFoodsFounder from "@/assets/founders/staqu.jpeg";
import skyeAirFounder from "@/assets/founders/skyeair.jpeg";
import proteinChefImage from "@/assets/founders/Lofoods.png";

type Founder = {
  name: string;
  role: string;
  company: string;
  slug: string;
  image: string;
  imagePosition?: string;
};

const TALL = "h-[340px] sm:h-[370px] lg:h-[380px]";
const SHORT = "h-[210px] sm:h-[230px] lg:h-[240px]";

const founders: readonly Founder[] = [
  {
    name: "Dibyanshu Tripathi",
    role: "Founder & CEO",
    company: "Hexalog",
    slug: "hexalog",
    image: loFoodsFounder,
    imagePosition: "object-top",
  },
  {
    name: "Kshitij Datta Rishi",
    role: "Co-Founder & COO",
    company: "4baseCare Genomics",
    slug: "4basecare",
    image: basecareFounder,
    imagePosition: "object-top",
  },
  {
    name: "Atul Rai",
    role: "Founder & CEO",
    company: "Staqu Technologies",
    slug: "staqu",
    image: dilFoodsFounder,
    imagePosition: "object-center",
  },
] as const;

/* Second bento loop — founder voices continued */
const foundersLoop: readonly Founder[] = [
  {
    name: "Ankit Kumar",
    role: "Founder & CEO",
    company: "Skye Air",
    slug: "skye-air",
    image: skyeAirFounder,
    imagePosition: "object-[75%_center]",
  },
  {
    name: "Sudarshan Gangrade",
    role: "Founder",
    company: "Protein Chef",
    slug: "protein-chef",
    image: proteinChefImage,
    imagePosition: "object-[62%_center]",
  },
  {
    name: "Hitesh Goswami",
    role: "Co-Founder",
    company: "4baseCare",
    slug: "4basecare",
    image: careFounder,
    imagePosition: "object-[center_28%]",
  },
] as const;

function FounderPhotoCard({ founder, height }: { founder: Founder; height: string }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: founder.slug }}
      className={`group relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-100 border border-black/10 shadow-2xs hover:shadow-xl transition-all duration-300 ${height} block`}
    >
      <img
        src={founder.image}
        alt={`${founder.name}, ${founder.role} of ${founder.company}`}
        loading="lazy"
        className={`w-full h-full object-cover ${founder.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700`}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

      {/* White Floating Pill Badge */}
      <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full py-2.5 px-4 shadow-lg border border-black/5 flex items-center justify-between gap-3.5 max-w-[calc(100%-1.75rem)] pointer-events-none group-hover:shadow-xl transition-shadow">
        <div className="truncate">
          <div className="font-sans font-bold text-xs sm:text-sm text-neutral-900 leading-tight truncate">
            {founder.name}
          </div>
          <div className="font-sans text-[10px] sm:text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">
            {founder.role} · {founder.company}
          </div>
        </div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
        </div>
      </div>
    </Link>
  );
}

export function FoundersBento() {
  return (
    <section className="py-20 md:py-28 border-b border-[var(--ink)]/15 bg-[var(--paper)] text-[var(--ink)] w-full">
      <div className="container-tight">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[var(--ink)]/15">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider mb-5 font-semibold shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35] animate-pulse" />
              <span>[ 06 // FOUNDER VOICES ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 leading-[1.02]">
              Built with the{" "}
              <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans font-bold">
                Audacious.
              </span>
            </h2>
            <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xl">
              The truest measure of venture capital is what founders say long after the term sheet
              is signed.
            </p>
          </div>

          <div className="text-right font-mono text-[11px] text-neutral-500 uppercase tracking-widest font-semibold hidden md:block">
            <span>┌ OPERATOR PARTNERSHIP · PORTFOLIO LEDGER</span>
          </div>
        </div>

        {/* ── 3-Column Masonry Bento Deck (Faithful to Reference Image) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {/* ══════════════════════════════════════════
              COLUMN 1: Tall Photo + Lilac Card
             ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* 1. Founder 1 Portrait Card (Tall) */}
            <Link
              to="/portfolio/$slug"
              params={{ slug: founders[0].slug }}
              className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-100 border border-black/10 shadow-2xs hover:shadow-xl transition-all duration-300 h-[340px] sm:h-[370px] lg:h-[380px] block"
            >
              <img
                src={founders[0].image}
                alt={founders[0].name}
                loading="lazy"
                className={`w-full h-full object-cover ${founders[0].imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700`}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

              {/* White Floating Pill Badge */}
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full py-2.5 px-4 shadow-lg border border-black/5 flex items-center justify-between gap-3.5 max-w-[calc(100%-1.75rem)] pointer-events-none group-hover:shadow-xl transition-shadow">
                <div className="truncate">
                  <div className="font-sans font-bold text-xs sm:text-sm text-neutral-900 leading-tight truncate">
                    {founders[0].name}
                  </div>
                  <div className="font-sans text-[10px] sm:text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">
                    {founders[0].company}
                  </div>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </Link>

            {/* 2. Lilac Pastel Text Card (Compact) */}
            <div className="rounded-[28px] sm:rounded-[32px] bg-[#e6dffb] p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden h-[210px] sm:h-[230px] lg:h-[240px] border border-black/5 shadow-2xs hover:shadow-md transition-all">
              {/* Soft Ambient Organic Shape */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#d7c9f8]/70 blur-xl pointer-events-none" />
              <svg
                className="absolute -top-4 -right-4 w-32 h-32 opacity-25 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path d="M20 0 Q70 40 100 20 L100 0 Z" fill="#bfaaf2" />
              </svg>

              <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug">
                  Deep Sector Playbooks
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed relative z-10 mt-auto">
                Battle-tested playbooks across precision oncology, FMCG supply chains, and
                enterprise AI from operators who lived the journey.
              </p>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              COLUMN 2: Mint Card + Tall Photo
             ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* 3. Mint Pastel Text Card (Compact) */}
            <div className="rounded-[28px] sm:rounded-[32px] bg-[#def4dc] p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden h-[210px] sm:h-[230px] lg:h-[240px] border border-black/5 shadow-2xs hover:shadow-md transition-all">
              {/* Soft Ambient Organic Circle */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#c4ecbe]/70 blur-xl pointer-events-none" />
              <svg
                className="absolute -top-6 -right-6 w-32 h-32 opacity-25 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="80" cy="20" r="38" fill="#aee2a5" />
              </svg>

              <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug">
                  Disciplined Governance
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed relative z-10 mt-auto">
                "More than investors - dependable partners through every decision, challenge, and stage of growth."
              </p>
            </div>

            {/* 4. Founder 2 Portrait Card (Tall) */}
            <Link
              to="/portfolio/$slug"
              params={{ slug: founders[1].slug }}
              className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-100 border border-black/10 shadow-2xs hover:shadow-xl transition-all duration-300 h-[340px] sm:h-[370px] lg:h-[380px] block"
            >
              <img
                src={founders[1].image}
                alt={founders[1].name}
                loading="lazy"
                className={`w-full h-full object-cover ${founders[1].imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700`}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

              {/* White Floating Pill Badge */}
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full py-2.5 px-4 shadow-lg border border-black/5 flex items-center justify-between gap-3.5 max-w-[calc(100%-1.75rem)] pointer-events-none group-hover:shadow-xl transition-shadow">
                <div className="truncate">
                  <div className="font-sans font-bold text-xs sm:text-sm text-neutral-900 leading-tight truncate">
                    {founders[1].name}
                  </div>
                  <div className="font-sans text-[10px] sm:text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">
                    {founders[1].company}
                  </div>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </Link>
          </div>

          {/* ══════════════════════════════════════════
              COLUMN 3: Shorter Photo + Peach Card (Tall)
             ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* 5. Founder 3 Portrait Card (Shorter) */}
            <Link
              to="/portfolio/$slug"
              params={{ slug: founders[2].slug }}
              className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-100 border border-black/10 shadow-2xs hover:shadow-xl transition-all duration-300 h-[210px] sm:h-[230px] lg:h-[240px] block"
            >
              <img
                src={founders[2].image}
                alt={founders[2].name}
                loading="lazy"
                className={`w-full h-full object-cover ${founders[2].imagePosition || "object-top"} group-hover:scale-105 transition-transform duration-700`}
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

              {/* White Floating Pill Badge */}
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full py-2.5 px-4 shadow-lg border border-black/5 flex items-center justify-between gap-3.5 max-w-[calc(100%-1.75rem)] pointer-events-none group-hover:shadow-xl transition-shadow">
                <div className="truncate">
                  <div className="font-sans font-bold text-xs sm:text-sm text-neutral-900 leading-tight truncate">
                    {founders[2].name}
                  </div>
                  <div className="font-sans text-[10px] sm:text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">
                    {founders[2].company}
                  </div>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </Link>

            {/* 6. Peach Pastel Text Card (Tall) */}
            <div className="rounded-[28px] sm:rounded-[32px] bg-[#fedec2] p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden h-[340px] sm:h-[370px] lg:h-[380px] border border-black/5 shadow-2xs hover:shadow-md transition-all">
              {/* Concentric Curved Line Arcs (Replicating Reference Design) */}
              <svg
                className="absolute top-4 right-4 w-36 h-36 opacity-35 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                stroke="#d97736"
                strokeWidth="3.5"
              >
                <path d="M 100 15 A 75 75 0 0 0 35 100" />
                <path d="M 100 40 A 50 50 0 0 0 60 100" />
              </svg>

              <div className="relative z-10 max-w-[92%]">
                <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight text-neutral-900 leading-snug">
                  Built to weather every deep market cycle.
                </h3>
              </div>

              <div className="relative z-10 space-y-4 mt-auto">
                <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
                  From early seed to Series A and beyond, we ensure your runway is fortified by
                  disciplined reserves and aligned strategic co-investors under SEBI Cat-II
                  standards.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/6 font-mono text-[10px] text-neutral-800 uppercase tracking-wider font-semibold">
                  <span>PATIENT CAPITAL · ETHICAL VC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Second Bento Loop (Mirrored Rhythm) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6">
          {/* ══════════════════════════════════════════
              COLUMN 1: Sky Card + Tall Photo (Ankit Kumar)
             ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div
              className={`rounded-[28px] sm:rounded-[32px] bg-[#dcebfb] p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden ${SHORT} border border-black/5 shadow-2xs hover:shadow-md transition-all`}
            >
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#c3dcf7]/70 blur-xl pointer-events-none" />
              <svg
                className="absolute -top-4 -right-4 w-32 h-32 opacity-25 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path d="M10 30 L100 0 L100 40 Z" fill="#9cc3ef" />
              </svg>

              <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug">
                  Regulation-Ready Ambition
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed relative z-10 mt-auto">
                "They backed us when the category didn't exist on paper. Long after the term sheet, they've been the first call on the hardest days."
              </p>
            </div>

            <FounderPhotoCard founder={foundersLoop[0]} height={TALL} />
          </div>

          {/* ══════════════════════════════════════════
              COLUMN 2: Tall Photo (Sudarshan Gangrade) + Butter Card
             ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <FounderPhotoCard founder={foundersLoop[1]} height={TALL} />

            <div
              className={`rounded-[28px] sm:rounded-[32px] bg-[#fbf3c9] p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden ${SHORT} border border-black/5 shadow-2xs hover:shadow-md transition-all`}
            >
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#f6e69a]/70 blur-xl pointer-events-none" />
              <svg
                className="absolute -top-6 -right-6 w-32 h-32 opacity-25 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
              >
                <rect x="45" y="-5" width="60" height="60" rx="18" fill="#ecd35c" />
              </svg>

              <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug">
                  Consumer Brand Velocity
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed relative z-10 mt-auto">
                "Founder friendly in the truest sense. Professional partners who show up like friends when it matters most."
              </p>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              COLUMN 3: Photo (Tall, Hitesh Goswami) + Shorter Rose Text Card
             ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <FounderPhotoCard founder={foundersLoop[2]} height={TALL} />

            <div
              className={`rounded-[28px] sm:rounded-[32px] bg-[#f9dbe6] p-5 sm:p-6 flex flex-col justify-between gap-3 relative overflow-hidden min-h-[210px] sm:min-h-[230px] lg:min-h-0 lg:h-[240px] border border-black/5 shadow-2xs hover:shadow-md transition-all`}
            >
              {/* Concentric Curved Line Arcs */}
              <svg
                className="absolute top-3 right-3 w-24 h-24 opacity-35 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                stroke="#c9577f"
                strokeWidth="3.5"
              >
                <path d="M 100 15 A 75 75 0 0 0 35 100" />
                <path d="M 100 40 A 50 50 0 0 0 60 100" />
              </svg>

              <div className="relative z-10 max-w-[85%]">
                <h3 className="font-display text-xl sm:text-[1.4rem] font-bold tracking-tight text-neutral-900 leading-snug">
                  Partners in every inflection point.
                </h3>
              </div>

              <div className="relative z-10 space-y-3">
                <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
                  "MJV didn't just write a cheque - they sat with us through the highest hiring and partnership decisions. That kind of partnership compounds."
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/6 font-mono text-[10px] text-neutral-800 uppercase tracking-wider font-semibold">
                  <span>OPERATOR DNA · FOUNDER FIRST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Portfolio Link Strip */}
        <div className="mt-12 rounded-[28px] border border-black/10 bg-[#f8f8f6] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8fb35] shrink-0 animate-pulse" />
            <div>
              <span className="font-bold text-neutral-900 uppercase tracking-wider">
                17+ High-Integrity Founders Backed
              </span>
              <span className="text-neutral-600 ml-2 hidden md:inline">
                · Seed to Series A across Deeptech, Healthcare, and Consumer Brands.
              </span>
            </div>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xs group"
          >
            <span>Explore all portfolio founders</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
