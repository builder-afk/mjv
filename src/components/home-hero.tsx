import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import peaksImg from "@/assets/peaks.png";

const HERO_TAGS = [
  "Innovation First",
  "Global Scalability",
  "Exceptional Founders",
  "Strong Unit Economics",
  "Ethical Value Creation",

];

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-white text-neutral-900"
      aria-label="Mount Judi Ventures introduction"
    >
      {/* ───────────── HEADER ROW: Play | Title | Paragraph ───────────── */}
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 lg:pt-16 pb-0">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,340px)] xl:grid-cols-[1fr_minmax(0,380px)] items-start gap-6 lg:gap-10 xl:gap-14">
          {/* Large Display Title */}
          <div className="pt-0 lg:pt-1">
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] font-black tracking-[-0.03em] text-neutral-950 leading-[1.08] select-none">
              Backing visionary founders
              <br />
              building <span className="text-[#036089] whitespace-nowrap">new India</span>
            </h1>
          </div>

          {/* Right Paragraph Block */}
          <div className="pt-1 lg:pt-3 xl:pt-4">
            <p className="font-sans text-[14px] sm:text-[15px] leading-[1.7] text-neutral-700 max-w-sm">
              Mount Judi Ventures provides Seed to Series&nbsp;A capital and
              deep operator conviction for high-integrity founders tackling
              systemic challenges.{" "}
              <Link
                to="/portfolio"
                className="underline underline-offset-4 decoration-[#C78D1E] text-neutral-950 font-black hover:text-[#036089] transition-colors"
              >
                20+ founders backed
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* ───────────── FULL-BLEED MOUNTAIN VISUAL (NO SIDE PADDING) ───────────── */}
      <div className="relative w-full mt-6 sm:mt-8 lg:mt-10 px-0">
        {/* Top white gradient to seamlessly connect header to mountain peaks */}
        <div className="absolute inset-x-0 top-0 h-20 sm:h-28 lg:h-36 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* ── Top Investment Tenets Ribbon Over Background Mountain ── */}
        <div className="absolute inset-x-0 top-5 sm:top-7 lg:top-9 z-20 px-3 sm:px-6">
          <div className="w-full overflow-x-auto no-scrollbar py-1">
            <div className="mx-auto flex w-fit flex-nowrap items-center justify-center gap-1.5 sm:gap-2 xl:gap-2.5">
              {HERO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 whitespace-nowrap rounded-full border-2 border-transparent bg-white/95 backdrop-blur-md px-2.5 sm:px-3 xl:px-3.5 py-1 sm:py-1.5 font-mono text-[9px] sm:text-[9.5px] lg:text-[10px] xl:text-[10.5px] font-bold uppercase tracking-wide text-neutral-900 shadow-xs hover:border-[#036089] hover:bg-[#036089] hover:text-white transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mountain Image: peaks.png spanning 100% width with no side padding */}
        <div className="relative w-full overflow-hidden">
          <img
            src={peaksImg}
            alt="Mount Judi - Elevation of Value"
            className="w-full h-auto min-h-[460px] sm:min-h-[580px] lg:min-h-[680px] object-cover pointer-events-none select-none"
          />

          {/* ── Centered Geometric 'M' Emblem + Tagline Over Clouds ── */}
          <div className="absolute inset-x-0 top-[52%] sm:top-[55%] md:top-[58%] -translate-y-1/2 flex flex-col items-center text-center z-20 pointer-events-none px-6">
            <p className="font-sans text-xs sm:text-sm md:text-[15px] text-white/95 font-medium max-w-md sm:max-w-lg leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Patient capital and operator conviction, as a catalyst for{" "}
              <span className="underline underline-offset-4 decoration-[#C78D1E] font-semibold text-white">
                building enduring category leaders
              </span>
              .
            </p>
          </div>
        </div>

        {/* Bottom white gradient so clouds dissolve into white page */}
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 lg:h-36 bg-gradient-to-t from-white via-white/70 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
