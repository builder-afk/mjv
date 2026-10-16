import { createFileRoute, Link } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/why-we-invested")({
  head: () => ({
    meta: [
      { title: "Investment Memorandums | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Public investment memos, underwriting rationale, and thesis conviction across the seventeen companies backed by Mount Judi Ventures.",
      },
      { property: "og:title", content: "Investment Memorandums | Mount Judi Ventures" },
      { property: "og:url", content: "/why-we-invested" },
    ],
    links: [{ rel: "canonical", href: "/why-we-invested" }],
  }),
  component: WhyWeInvested,
});

function WhyWeInvested() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. SWISS EDITORIAL HERO ── */}
      <section className="border-b border-[var(--ink)]/15 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-tight">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xs">
              <span>[ 01 // INVESTMENT MEMORANDUMS ]</span>
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d8fb35]" />
              <span>┌ 17 PUBLISHED UNDERWRITING MEMORANDUMS</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
                Why We{" "}
                <span className="bg-[#d8fb35] text-neutral-900 px-4 py-0.5 rounded-full inline-block font-sans">
                  Invested.
                </span>{" "}
                <br />
                <span className="italic font-serif font-normal lowercase text-neutral-500">
                  the explicit logic behind every cheque.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
                We publish our investment theses transparently. Below are the operating mechanics, structural market distortions, and defensible moats that convinced our Investment Committee to back each enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SWISS EDITORIAL BENTO MEMO LIST ── */}
      <section className="container-tight py-16 md:py-24">
        <div className="space-y-4">
          {companies.map((c, i) => {
            const indexStr = String(i + 1).padStart(2, "0");
            return (
              <Link
                key={c.slug}
                to="/portfolio/$slug"
                params={{ slug: c.slug }}
                className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-8 block group hover:shadow-lg hover:border-black/20 transition-all duration-300 shadow-xs"
              >
                <div className="grid md:grid-cols-[100px_1fr_220px] gap-6 items-center">
                  {/* Left: Circular Number Badge */}
                  <div className="flex md:flex-col items-center md:items-start gap-3">
                    <span className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {indexStr}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-semibold hidden md:inline">
                      MEMO
                    </span>
                  </div>

                  {/* Middle: Title & Executive Summary */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px]">
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 font-semibold uppercase">
                        {c.sector}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span className="text-neutral-500 uppercase tracking-wider">
                        VINTAGE {c.year}
                      </span>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-[#3b66ff] flex items-center gap-2 transition-colors">
                      <span>Why We Backed {c.name}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#3b66ff]" />
                    </h2>

                    <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                      {c.whyInvested || c.oneLiner || c.tagline}
                    </p>
                  </div>

                  {/* Right: Technical Badges & Action */}
                  <div className="md:text-right flex md:flex-col items-center md:items-end justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-neutral-50 border border-black/5 font-mono text-[11px] uppercase tracking-wider text-neutral-700 font-semibold">
                      {c.stage}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                      {c.fund === "Both" ? "MJIGF & MJIMF" : c.fund ?? "MJIGF"}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-900 group-hover:text-[#3b66ff] font-semibold mt-1">
                      <span>Read Full Memo</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 3. BOTTOM ALLOCATION BANNER ── */}
      <section className="container-tight pb-20 md:pb-28">
        <div className="rounded-[36px] bg-[#0c1a2e] text-white p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d8fb35] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
              BUILDING NEXT INDIA?
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Pitch Directly to Investment Partners
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans max-w-md">
              We lead and co-invest from Seed to Series A with ₹2 Cr to ₹25 Cr initial checks.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#d8fb35] hover:bg-[#c9ec28] text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md shrink-0"
          >
            <span>Submit Your Deck</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
