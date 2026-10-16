import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers, Mouse, TrendingUp } from "lucide-react";
import { companies, type Company } from "@/lib/portfolio-data";
import skyeAirFounder from "@/assets/founders/skyeair.jpeg";
import basecareFounder from "@/assets/founders/4basecare.jpeg";
import staquTechFounder from "@/assets/founders/staqutech.jpeg";
import judiThumbnail from "@/assets/judi.jpeg";

type Slide = Company & { image: string };

const slides: Slide[] = companies.filter((c): c is Slide => Boolean(c.image));

const AUTOPLAY_MS = 6000;
const pad = (n: number) => String(n).padStart(2, "0");

type ThumbPanelProps = {
  thumbs: { idx: number; company: Slide }[];
  active: number;
  total: number;
  onSelect: (idx: number) => void;
  onStep: (dir: 1 | -1) => void;
};

/** Thumbnail strip + counter + arrows (the "notched" panel in the reference). */
function ThumbPanel({ thumbs, active, total, onSelect, onStep }: ThumbPanelProps) {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3">
      <div className="flex gap-2 sm:gap-2.5">
        {thumbs.map(({ idx, company }, tIdx) => (
          <button
            key={company.slug}
            type="button"
            onClick={() => onSelect(idx)}
            aria-label={`Show ${company.name}`}
            className={`group relative w-[24vw] max-w-[125px] sm:w-[110px] lg:w-[100px] xl:w-[112px] 2xl:w-[125px] aspect-[1/1.05] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-neutral-200 cursor-pointer ${
              tIdx === 2 ? "hidden 2xl:block" : ""
            }`}
          >
            <img
              src={company.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute top-2 right-2 h-6 w-6 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-neutral-900 group-hover:bg-white transition-all">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
            <span className="absolute inset-x-1.5 bottom-1.5 rounded-full bg-white px-2 py-1.5 text-center font-sans text-[11px] sm:text-xs font-semibold text-neutral-900 truncate shadow-xs">
              {company.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between px-1">
        <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 tabular-nums">
          {pad(active + 1)}
          <span className="text-sm font-medium text-neutral-500">/{pad(total)}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onStep(-1)}
            aria-label="Previous company"
            className="h-9 w-9 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onStep(1)}
            aria-label="Next company"
            className="h-9 w-9 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * HomeHero
 * Split editorial hero: bold headline + CTAs on the left, a rounded cinematic
 * portfolio spotlight on the right with notched corners, floating info chips,
 * glass tags and a thumbnail carousel.
 */
export function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const step = useCallback((dir: 1 | -1) => setActive((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  if (total === 0) return null;

  const current = slides[active];
  const thumbs = [1, 2, 3]
    .map((offset) => (active + offset) % total)
    .filter((idx, pos, arr) => idx !== active && arr.indexOf(idx) === pos)
    .map((idx) => ({ idx, company: slides[idx] }));

  const tags = [
    current.category,
    current.sector,
    current.stage,
    current.status,
    `Since ${current.year}`,
    current.fund ?? "MJV",
  ];

  const thumbPanel = (
    <ThumbPanel thumbs={thumbs} active={active} total={total} onSelect={setActive} onStep={step} />
  );

  return (
    <section
      className="relative overflow-hidden border-b border-[var(--ink)]/15 bg-[var(--paper-subtle)] py-6 md:py-8"
      aria-label="Mount Judi Ventures introduction"
    >
      <div className="container-tight grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* ───────────── LEFT: COPY ───────────── */}
        <div className="flex flex-col justify-between gap-10 lg:py-6 order-2 lg:order-1">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-6 font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#d8fb35] shrink-0 animate-pulse" />
              <span>Fund II active</span>
              <span className="text-white/40">·</span>
              <Link to="/thesis" className="text-[#d8fb35] hover:underline shrink-0 font-medium">
                Our thesis →
              </Link>
            </div>

            <h1 className="animate-fade-up font-display text-[2.6rem] sm:text-6xl lg:text-[3.4rem] xl:text-[4.1rem] font-medium tracking-[-0.035em] leading-[1.02] text-neutral-950 text-balance">
              Backing
              <span
                aria-hidden="true"
                className="inline-flex align-middle -space-x-3 ml-3 sm:ml-4 -translate-y-[0.12em]"
              >
                {[skyeAirFounder, staquTechFounder, basecareFounder].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-9 w-9 sm:h-12 sm:w-12 rounded-full object-cover border-[3px] border-[var(--paper-subtle)] bg-white"
                  />
                ))}
              </span>{" "}
              Visionary Founders Building New India
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-7 py-3 rounded-full border border-neutral-900 text-neutral-900 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-900 hover:text-white transition-all duration-200 text-center"
              >
                Explore portfolio
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto p-1.5 pl-6 pr-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 inline-flex items-center justify-between sm:justify-center gap-3 shadow-sm group"
              >
                <span>Pitch your startup</span>
                <span className="w-8 h-8 rounded-full bg-[#3b66ff] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            onClick={() =>
              document.getElementById("home-stats")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to key metrics"
            className="hidden md:flex items-center gap-4 w-full cursor-pointer group"
          >
            <span className="flex-1 border-t border-dashed border-neutral-900/30" />
            <span className="rounded-[20px] border border-dashed border-neutral-900/30 px-9 py-3.5 text-neutral-700 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors">
              <Mouse className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
            </span>
            <span className="flex-1 border-t border-dashed border-neutral-900/30" />
          </button>

          <div className="flex items-end justify-between gap-6">
            <div className="max-w-[300px]">
              <span className="block h-3 w-3 bg-[#d8fb35] mb-4" aria-hidden="true" />
              <p className="font-sans text-[12px] sm:text-[13px] font-semibold uppercase leading-snug tracking-tight text-neutral-900">
                Mount Judi Ventures provides Seed to Series A capital and deep operator conviction
                for high-integrity founders tackling systemic challenges. 17+ founders backed.
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                SEBI Registered Cat-II AIF · Bengaluru HQ
              </p>
            </div>
            <span
              aria-hidden="true"
              className="hidden sm:block font-mono text-sm tracking-[0.3em] text-neutral-400"
            >
              +++
            </span>
          </div>
        </div>

        {/* ───────────── RIGHT: SPOTLIGHT ───────────── */}
        <div
          className="relative order-1 lg:order-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative h-[440px] sm:h-[560px] lg:h-full lg:min-h-[700px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-900">
            {slides.map((s, i) => (
              <img
                key={s.slug}
                src={judiThumbnail}
                alt={i === active ? `${s.name}: ${s.oneLiner}` : ""}
                aria-hidden={i !== active}
                decoding="async"
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />

            {/* Vertical company label */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 flex flex-col items-center gap-2">
              <div className="rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-4 shadow-sm">
                <span
                  className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-900 whitespace-nowrap rotate-180"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {current.name}
                </span>
              </div>
              <Link
                to="/portfolio/$slug"
                params={{ slug: current.slug }}
                aria-label={`View ${current.name} case study`}
                className="h-9 w-9 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:bg-[#3b66ff] transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Floating info chips */}
            <div
              key={`stage-${current.slug}`}
              className="animate-fade-up absolute z-10 top-[30%] right-4 sm:right-[10%] flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-sm pl-2 pr-5 py-2 shadow-lg"
            >
              <span className="h-8 w-8 rounded-full bg-[#d8fb35] flex items-center justify-center text-neutral-900">
                <Layers className="h-4 w-4" />
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-900">
                {current.stage}
                <span className="font-normal text-neutral-400">/Stage</span>
              </span>
            </div>

            <div
              key={`year-${current.slug}`}
              className="animate-fade-up absolute z-10 top-[50%] left-4 sm:left-[12%] hidden sm:flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-sm pl-2 pr-5 py-2 shadow-lg"
            >
              <span className="h-8 w-8 rounded-full bg-[#3b66ff] flex items-center justify-center text-white">
                <TrendingUp className="h-4 w-4" />
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-900">
                {current.sector}
                <span className="font-normal text-neutral-400">/{current.year}</span>
              </span>
            </div>

            {/* Mobile caption */}
            <p className="absolute z-10 left-4 right-4 bottom-4 sm:hidden font-sans text-xs text-white/90 leading-snug line-clamp-2">
              {current.oneLiner}
            </p>

            {/* Glass tags */}
            <div className="absolute z-20 bottom-4 right-4 sm:bottom-5 sm:right-5 hidden sm:grid grid-cols-2 gap-2 w-auto max-w-[270px]">
              {tags.map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="whitespace-nowrap text-center rounded-full border border-white/40 bg-black/40 backdrop-blur-md px-3.5 py-2 font-sans text-[11px] sm:text-xs font-medium text-white shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Top-right notch: contact */}
          <div className="absolute top-0 right-0 z-20 bg-[var(--paper-subtle)] rounded-bl-[28px] pl-3 pb-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white pl-1.5 pr-5 py-1.5 shadow-xs group"
            >
              <span className="h-9 w-9 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:bg-[#3b66ff] transition-colors">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-tight text-neutral-900">
                Contact us
              </span>
            </Link>
          </div>

          {/* Bottom-left notch: thumbnail carousel (desktop) */}
          <div className="hidden lg:block absolute bottom-0 left-0 z-20 bg-[var(--paper-subtle)] rounded-tr-[32px] pt-4 pr-4">
            {thumbPanel}
          </div>
        </div>

        {/* Carousel (mobile / tablet) */}
        <div className="lg:hidden order-3">{thumbPanel}</div>
      </div>
    </section>
  );
}
