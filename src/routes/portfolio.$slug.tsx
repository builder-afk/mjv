import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Building2, Calendar, Award } from "lucide-react";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const company = companies.find((c) => c.slug === params.slug);
    if (!company) throw notFound();
    return { company };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.company.name} | Archival Dossier | MJV` },
          { name: "description", content: loaderData.company.oneLiner },
          { property: "og:title", content: `${loaderData.company.name} | Mount Judi Ventures` },
          { property: "og:description", content: loaderData.company.oneLiner },
          { property: "og:image", content: loaderData.company.image },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-tight py-32 text-center bg-[var(--paper)]">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider mb-4">
        404 Not Found
      </div>
      <h1 className="font-display text-4xl font-extrabold uppercase">Record Missing from Registry</h1>
      <Link
        to="/portfolio"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold"
      >
        Return to Portfolio
      </Link>
    </div>
  ),
  component: CompanyPage,
});

function CompanyPage() {
  const { company: c } = Route.useLoaderData();

  return (
    <article className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. ARCHIVAL HERO & METADATA SPREAD ── */}
      <section className="border-b border-[var(--ink)]/15 pt-16 pb-12 md:pt-24 md:pb-16 bg-neutral-50/50">
        <div className="container-tight">
          {/* Breadcrumb & Dossier Code */}
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-500 pb-6 border-b border-black/5">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all font-semibold shadow-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>All Portfolio Companies</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d8fb35]" />
              <span className="font-semibold text-neutral-700">Company Dossier · {c.name}</span>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white font-mono text-[11px] uppercase tracking-wider font-semibold mb-4">
                <span>{c.category} · {c.stage} · Vintage {c.year}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
                {c.name}
              </h1>
              <p className="mt-4 font-serif italic text-xl sm:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
                &ldquo;{c.tagline}&rdquo;
              </p>
            </div>

            {/* Clean Architectural Logo Badge */}
            <div className="rounded-[28px] border border-black/10 bg-white p-6 flex items-center justify-center h-28 shadow-xs">
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. NATURAL PHOTOGRAPHIC HERO SPREAD ── */}
      <section className="container-tight py-10">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] border border-black/10 shadow-sm bg-neutral-950">
          <img
            src={c.image}
            alt={c.name}
            className="h-full w-full object-cover"
            width={1600}
            height={900}
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider border border-white/10">
            {c.name.toUpperCase()} · OPERATIONAL FIELD DEPLOYMENT
          </div>
        </div>
      </section>

      {/* ── 3. CORE TECHNICAL LEDGER & DOSSIER ── */}
      <div className="container-tight max-w-5xl py-12 md:py-16">
        {/* Technical Attributes Bento Grid */}
        <div className="rounded-[28px] border border-black/10 bg-white p-2 divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-px font-mono text-xs shadow-xs">
          <div className="p-5 rounded-2xl bg-neutral-50/60 m-1">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Sector</div>
            <div className="mt-2 font-bold text-sm text-neutral-900">{c.sector}</div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50/60 m-1">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Stage</div>
            <div className="mt-2 font-bold text-sm text-neutral-900">{c.stage}</div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50/60 m-1">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Vintage</div>
            <div className="mt-2 font-bold text-sm text-neutral-900">{c.year}</div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50/60 m-1">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Status</div>
            <div className="mt-2 font-bold text-sm text-neutral-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#d8fb35]" />
              {c.status}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50/60 m-1">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Fund Vehicle</div>
            <div className="mt-2 font-bold text-sm text-neutral-900">{c.fund ?? "MJIGF"}</div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50/60 m-1">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Direct Domain</div>
            <div className="mt-2 font-bold text-sm">
              {c.website ? (
                <a
                  href={c.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 hover:text-[#3b66ff] underline inline-flex items-center gap-1"
                >
                  {c.website.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </a>
              ) : (
                "N/A"
              )}
            </div>
          </div>
        </div>

        {/* Overview */}
        {c.description && (
          <div className="mt-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider text-neutral-700 font-semibold mb-6">
              <span>[ 01 // OVERVIEW ]</span>
            </div>
            <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-700 space-y-4 max-w-3xl">
              {c.description.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* Why We Invested Memorandum */}
        {c.whyInvested && (
          <div className="mt-16 rounded-[32px] border border-black/10 bg-neutral-50/80 p-8 md:p-12 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d8fb35]" />
              <span>[ MEMORANDUM // INVESTMENT RATIONALE ]</span>
            </div>
            <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-800 space-y-4">
              {c.whyInvested.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* Growth Since Investment */}
        {c.growthSinceInvestment && (
          <div className="mt-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider text-neutral-700 font-semibold mb-6">
              <span>[ 02 // SCALE & TRACTION ]</span>
            </div>
            <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-700 space-y-4 max-w-3xl">
              {c.growthSinceInvestment.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* Key Achievements */}
        {(() => {
          const points = c.keyAchievements ?? c.convictionPoints;
          if (!points || points.length === 0) return null;
          return (
            <div className="mt-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider text-neutral-700 font-semibold mb-6">
                <span>{c.keyAchievements ? "[ 03 // KEY ACHIEVEMENTS ]" : "[ 03 // CONVICTION POINTS ]"}</span>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {points.map((p: string, i: number) => (
                  <li key={p} className="rounded-2xl border border-black/10 bg-white p-6 shadow-xs">
                    <div className="font-mono text-xs font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center text-[10px]">
                        0{i + 1}
                      </span>
                      <span>METRIC HIGHLIGHT</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-700">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}

        {/* Founders */}
        {(() => {
          const raw = c.founders ?? "";
          if (!raw || /^founding\b/i.test(raw.trim())) return null;
          const names = raw.split("·").map((n: string) => n.replace(/\(.*?\)/g, "").trim()).filter(Boolean);
          if (names.length === 0) return null;
          return (
            <div className="mt-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider text-neutral-700 font-semibold mb-6">
                <span>[ 04 // LEADERSHIP ]</span>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {names.map((name: string) => {
                  const q = encodeURIComponent(`${name} ${c.name}`);
                  const href = `https://www.linkedin.com/search/results/people/?keywords=${q}`;
                  return (
                    <li key={name}>
                      <a
                        href={href}
                        target="_top"
                        rel="external noreferrer"
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-black/30 transition shadow-xs"
                      >
                        <span className="font-display text-base font-bold text-neutral-900">{name}</span>
                        <span className="px-3 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-all inline-flex items-center gap-1 font-semibold">
                          LinkedIn <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })()}

        {/* Press & Citations */}
        {c.milestones && c.milestones.length > 0 && (
          <div className="mt-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider text-neutral-700 font-semibold mb-6">
              <span>[ 05 // PRESS & CITATIONS ]</span>
            </div>
            <div className="space-y-3">
              {c.milestones.map((m: { title: string; url: string; image?: string }) => (
                <a
                  key={m.title}
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl border border-black/10 bg-white flex items-center justify-between font-mono text-xs hover:border-black/30 transition shadow-xs group"
                >
                  <span className="font-bold text-neutral-900 flex items-center gap-2">
                    <span className="text-[#3b66ff] font-bold">→</span>
                    {m.title}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-neutral-900" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Founder Testimonial */}
        {c.testimonial && (
          <div className="mt-20 rounded-[32px] border border-black/10 bg-white p-8 md:p-12 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-[11px] uppercase tracking-wider text-neutral-700 font-semibold mb-6">
              <span>[ FOUNDER TESTIMONIAL // OPERATING PARTNERSHIP ]</span>
            </div>
            <blockquote className="font-serif italic text-2xl md:text-3xl text-neutral-900 leading-snug">
              &ldquo;{c.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold">
              — {c.testimonial.author}
            </div>
          </div>
        )}

        {/* Footer Intake Banner */}
        <div className="mt-20 rounded-[36px] bg-[#0c1a2e] text-white p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d8fb35] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
              BUILDING IN {c.sector.toUpperCase()}?
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Get an Investment Decision in 14 Days
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans max-w-md">
              Initial cheques of ₹2 Cr to ₹25 Cr. Direct review by General Partners.
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
      </div>
    </article>
  );
}
