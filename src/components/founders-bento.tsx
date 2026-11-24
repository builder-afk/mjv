import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";

import loFoodsFounder from "@/assets/founders/Hexalog Reliability Quote Poster.png";
import basecareFounder from "@/assets/founders/arpita.avif";
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

const TALL = "h-[340px] sm:h-[370px] lg:h-[390px]";
const SHORT = "min-h-[230px] sm:min-h-[245px] lg:h-[260px]";

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
    name: "Arpita Aditi",
    role: "Founder & CEO",
    company: "Dil Foods",
    slug: "dil-foods",
    image: basecareFounder,
    imagePosition: "object-top",
  },
  {
    name: "Atul Rai",
    role: "Founder & CEO",
    company: "Staqu Technologies",
    slug: "staqu",
    image: dilFoodsFounder,
    imagePosition: "object-top",
  },
] as const;

/* Second bento loop - founder voices continued */
const foundersLoop: readonly Founder[] = [
  {
    name: "Ankit Kumar",
    role: "Founder & CEO",
    company: "Skye Air",
    slug: "skye-air",
    image: skyeAirFounder,
    imagePosition: "object-[75%_top]",
  },
  {
    name: "Sudarshan Gangrade",
    role: "Founder",
    company: "Protein Chef",
    slug: "protein-chef",
    image: proteinChefImage,
    imagePosition: "object-top",
  },
  {
    name: "Hitesh Goswami",
    role: "Co-Founder",
    company: "4baseCare",
    slug: "4basecare",
    image: careFounder,
    imagePosition: "object-top",
  },
] as const;

function FounderPhotoCard({ founder, height }: { founder: Founder; height: string }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: founder.slug }}
      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border-2 border-transparent hover:border-neutral-950 shadow-xs hover:shadow-xl transition-all duration-300 ${height} block`}
    >
      <img
        src={founder.image}
        alt={`${founder.name}, ${founder.role} of ${founder.company}`}
        loading="lazy"
        className={`w-full h-full object-cover ${founder.imagePosition || "object-top"} group-hover:scale-105 transition-transform duration-700`}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />

      {/* White Floating Pill Badge */}
      <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-black/10 flex items-center justify-between gap-3 max-w-[calc(100%-1.75rem)] pointer-events-none group-hover:shadow-xl transition-shadow">
        <div className="truncate">
          <div className="font-sans font-bold text-xs sm:text-sm text-neutral-950 leading-tight truncate">
            {founder.name}
          </div>
          <div className="font-sans text-[10px] sm:text-[11px] text-neutral-600 leading-tight mt-0.5 truncate">
            {founder.role} · {founder.company}
          </div>
        </div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
        </div>
      </div>
    </Link>
  );
}

/* Part 1: First 6 Cards Deck */
function PartOneDeck() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {/* COLUMN 1: Tall Photo + Minimalist Card */}
      <div className="flex flex-col gap-5 sm:gap-6">
        <FounderPhotoCard founder={founders[0]} height={TALL} />

        <div className="rounded-2xl sm:rounded-3xl bg-white border border-black/10 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden min-h-[230px] sm:min-h-[245px] lg:h-[260px] hover:border-neutral-950 shadow-xs hover:shadow-md transition-all duration-300">
          <div className="relative z-10">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#036089] font-bold mb-2">
              [ PLAYBOOKS ]
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug">
              Deep Sector Playbooks
            </h3>
          </div>
          <div className="relative z-10 mt-auto pt-2">
            <p className="font-sans text-xs sm:text-[13px] text-neutral-800 leading-relaxed">
              &ldquo;The most important factor for the business is reliability;{" "}
              <span className="font-semibold text-neutral-950">reliability is the product.</span>&rdquo;
            </p>
            <div className="mt-2.5 pt-2 border-t border-black/10">
              <div className="font-sans font-bold text-xs text-neutral-950 leading-tight">
                Dibyanshu Tripathi
              </div>
              <div className="font-sans text-[10px] sm:text-[11px] text-neutral-600 leading-tight mt-0.5">
                Co-founder &amp; CEO, Hexalog
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COLUMN 2: Minimalist Card + Tall Photo */}
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-black/10 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden min-h-[230px] sm:min-h-[245px] lg:h-[260px] hover:border-neutral-950 shadow-xs hover:shadow-md transition-all duration-300">
          <div className="relative z-10">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#C78D1E] font-bold mb-2">
              [ GOVERNANCE ]
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug">
              Disciplined Governance
            </h3>
          </div>
          <div className="relative z-10 mt-auto pt-2">
            <p className="font-sans text-xs sm:text-[13px] text-neutral-800 leading-relaxed">
              &ldquo;More than investors - dependable partners through every decision, challenge, and
              stage of growth.&rdquo;
            </p>
            <div className="mt-2.5 pt-2 border-t border-black/10">
              <div className="font-sans font-bold text-xs text-neutral-950 leading-tight">
                Atul Rai
              </div>
              <div className="font-sans text-[10px] sm:text-[11px] text-neutral-600 leading-tight mt-0.5">
                Co-founder &amp; CEO, Staqu
              </div>
            </div>
          </div>
        </div>

        <FounderPhotoCard founder={founders[1]} height={TALL} />
      </div>

      {/* COLUMN 3: Shorter Photo + Minimalist Card (Tall) */}
      <div className="flex flex-col gap-5 sm:gap-6">
        <FounderPhotoCard founder={founders[2]} height={SHORT} />

        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden h-[340px] sm:h-[370px] lg:h-[390px] border-2 border-transparent hover:border-neutral-950 shadow-xs hover:shadow-md transition-all duration-300">
          <div className="relative z-10 max-w-[92%]">
            <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-3">
              [ RESILIENCE ]
            </div>
            <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight text-neutral-950 leading-snug">
              Built to weather every deep market cycle.
            </h3>
          </div>

          <div className="relative z-10 space-y-4 mt-auto">
            <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
              From early seed to Series A and beyond, we ensure your runway is fortified by
              disciplined reserves and aligned strategic co-investors under SEBI AIFs
              standards.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#036089]/10 font-mono text-[10px] text-[#036089] uppercase tracking-wider font-bold border border-[#036089]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C78D1E]" />
              <span>PATIENT CAPITAL · ETHICAL VC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Part 2: Second 6 Cards Deck */
function PartTwoDeck() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {/* COLUMN 1: Minimalist Card + Tall Photo (Ankit Kumar) */}
      <div className="flex flex-col gap-5 sm:gap-6">
        <div
          className={`rounded-2xl sm:rounded-3xl bg-white border border-black/10 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden ${SHORT} hover:border-neutral-950 shadow-xs hover:shadow-md transition-all duration-300`}
        >
          <div className="relative z-10">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#036089] font-bold mb-2">
              [ COMPLIANCE ]
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug">
              Innovation-Ready Ambition
            </h3>
          </div>
          <div className="relative z-10 mt-auto pt-2">
            <p className="font-sans text-xs sm:text-[13px] text-neutral-800 leading-relaxed">
              &ldquo;They backed us when the category didn't exist on paper. Long after the term sheet,
              they've been the first call on the hardest days.&rdquo;
            </p>
            <div className="mt-2.5 pt-2 border-t border-black/10">
              <div className="font-sans font-bold text-xs text-neutral-950 leading-tight">
                Ankit Kumar
              </div>
              <div className="font-sans text-[10px] sm:text-[11px] text-neutral-600 leading-tight mt-0.5">
                Founder &amp; CEO, Skye Air
              </div>
            </div>
          </div>
        </div>

        <FounderPhotoCard founder={foundersLoop[0]} height={TALL} />
      </div>

      {/* COLUMN 2: Tall Photo (Sudarshan Gangrade) + Minimalist Card */}
      <div className="flex flex-col gap-5 sm:gap-6">
        <FounderPhotoCard founder={foundersLoop[1]} height={TALL} />

        <div
          className={`rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden ${SHORT} border-2 border-transparent hover:border-neutral-950 shadow-xs hover:shadow-md transition-all duration-300`}
        >
          <div className="relative z-10">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#C78D1E] font-bold mb-2">
              [ TRACTION ]
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 leading-snug">
              Consumer Brand Velocity
            </h3>
          </div>
          <div className="relative z-10 mt-auto pt-2">
            <p className="font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
              &ldquo;&lsquo;Founder friendly&rsquo; in the truest sense. Professional partners who show up like
              friends when it matters most.&rdquo;
            </p>
            <div className="mt-2.5 pt-2 border-t border-black/10">
              <div className="font-sans font-bold text-xs text-neutral-950 leading-tight">
                Sudarshan Gangrade
              </div>
              <div className="font-sans text-[10px] sm:text-[11px] text-neutral-600 leading-tight mt-0.5">
                Founder, Protein Chef
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COLUMN 3: Photo (Tall, Hitesh Goswami) + Dark Anchor Text Card */}
      <div className="flex flex-col gap-5 sm:gap-6">
        <FounderPhotoCard founder={foundersLoop[2]} height={TALL} />

        <div
          className={`rounded-2xl sm:rounded-3xl bg-[#036089] text-white p-6 sm:p-7 flex flex-col justify-between gap-3 relative overflow-hidden min-h-[230px] sm:min-h-[245px] lg:min-h-0 lg:h-[260px] border-2 border-transparent hover:border-neutral-950 shadow-xs hover:shadow-md transition-all duration-300`}
        >
          <div className="relative z-10 max-w-[85%]">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#C78D1E] font-bold mb-2">
              [ PARTNERSHIP ]
            </div>
            <h3 className="font-display text-xl sm:text-[1.35rem] font-bold tracking-tight text-white leading-snug">
              Partners in every inflection point.
            </h3>
          </div>

          <div className="relative z-10 mt-auto space-y-2">
            <p className="font-sans text-xs sm:text-[13px] text-white/85 leading-relaxed">
              &ldquo;MJV didn't just write a cheque - they sat with us through the hardest hiring and
              partnership decisions. That kind of partnership compounds.&rdquo;
            </p>
            <div className="pt-2 border-t border-white/15 flex items-center justify-between gap-2">
              <div>
                <div className="font-sans font-bold text-xs text-white leading-tight">
                  Hitesh Goswami
                </div>
                <div className="font-sans text-[10px] sm:text-[11px] text-white/70 leading-tight mt-0.5">
                  Co-founder, 4baseCare
                </div>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C78D1E] font-mono text-[9px] text-neutral-950 uppercase tracking-wider font-bold border border-neutral-950/20">
                <span>OPERATOR DNA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FoundersBento() {
  return (
    <section
      id="founder-voices"
      className="py-16 md:py-24 bg-[var(--paper)] text-[var(--ink)] w-full scroll-mt-28 overflow-x-clip"
    >
      <div className="container-tight space-y-16 sm:space-y-20">
        {/* ── PART 1: CONVICTION & FOUNDATION (6 Cards) ── */}
        <div>
          {/* Part 1 Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-black/[0.08]">
            <div className="max-w-2xl">
              <div className="font-mono text-xs font-black tracking-[0.25em] text-[#036089] flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C78D1E] animate-pulse" />
                <span>FOUNDER VOICES</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.02]">
                Built with the <span className="text-[#036089]">Audacious</span>
              </h2>
              <p className="mt-3.5 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xl">
                The truest measure of venture capital is what founders say long after the term sheet is signed.
              </p>
            </div>

          </div>

          <div className="mt-8 sm:mt-10">
            <PartOneDeck />
          </div>
        </div>

        {/* ── PART 2: SCALE & OPERATOR VELOCITY (6 Cards) ── */}
        <div className="pt-12 sm:pt-16 border-t-2 border-dashed border-black/15">
          {/* Part 2 Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-black/[0.08]">
            <div className="max-w-2xl">
              <div className="font-mono text-xs font-black tracking-[0.25em] text-[#036089] flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#036089]" />
                <span>FOUNDER VOICES</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.02]">
                Partners in every <span className="text-[#036089]">Inflection</span>
              </h2>
              <p className="mt-3.5 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xl">
                From day zero through hard pivots and hyper-scale - operators who trust our hands-on sponsorship.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <PartTwoDeck />
          </div>
        </div>

        {/* Bottom Portfolio Link Strip */}
        <div className="rounded-2xl sm:rounded-3xl border border-black/10 hover:border-neutral-950 bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs shadow-xs transition-all duration-300">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C78D1E] shrink-0" />
            <div>
              <span className="font-bold text-neutral-950 tracking-wider">
                20+ High-Integrity Founders Backed
              </span>
              <span className="text-neutral-600 ml-2 hidden md:inline">
                · Seed to Series A across Deeptech, Healthcare, and Consumer Brands.
              </span>
            </div>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-[#036089] text-white font-mono text-xs tracking-wider font-bold transition-all shadow-xs group"
          >
            <span>Explore all portfolio founders</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
