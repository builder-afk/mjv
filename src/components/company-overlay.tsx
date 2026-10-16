import { useEffect } from "react";
import type { Company } from "@/lib/portfolio-data";
import { ArrowUpRight, X } from "lucide-react";

export function CompanyOverlay({
  company,
  onClose,
}: {
  company: Company | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!company) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [company, onClose]);

  if (!company) return null;

  const meta = [
    { label: "SECTOR", value: company.sector },
    { label: "STAGE", value: company.stage },
    { label: "VINTAGE", value: String(company.year) },
    { label: "STATUS", value: company.status },
    { label: "FUND POOL", value: company.fund ?? "MJIGF" },
    { label: "FOUNDERS", value: company.founders ?? "Founding Team" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${company.name} profile`}
      className="fixed inset-0 z-[9999] overflow-y-auto bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="container-tight relative pt-8 pb-24 md:pt-12 md:pb-32">
        {/* TOP TELEMETRY BAR */}
        <div className="flex items-center justify-between border-b border-[var(--ink)] pb-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span className="h-2 w-2 bg-[var(--signal-red)]" />
            <span>{company.name.toUpperCase()}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="brutal-btn flex items-center gap-2 font-mono text-xs uppercase tracking-wider py-1.5 px-3"
            aria-label="Close"
          >
            <span>Close ✕</span>
          </button>
        </div>

        {/* MAIN EDITORIAL SPREAD */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          {/* LEFT COLUMN: LOGO & TECHNICAL LEDGER */}
          <div>
            <div className="relative h-[220px] w-full border border-[var(--ink)]/20 bg-white p-8 flex items-center justify-center">
              <span className="absolute top-1.5 left-1.5 font-mono text-[9px] text-[var(--ink)]/30 select-none">┌</span>
              <span className="absolute top-1.5 right-1.5 font-mono text-[9px] text-[var(--ink)]/30 select-none">┐</span>
              <span className="absolute bottom-1.5 left-1.5 font-mono text-[9px] text-[var(--ink)]/30 select-none">└</span>
              <span className="absolute bottom-1.5 right-1.5 font-mono text-[9px] text-[var(--ink)]/30 select-none">┘</span>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain filter contrast-125"
              />
            </div>

            <div className="mt-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] pb-2 border-b border-[var(--ink)]/15">
                Overview
              </div>
              <dl className="divide-y divide-[var(--ink)]/15 border-b border-[var(--ink)]/15 font-mono text-xs">
                {meta.map((m) => (
                  <div key={m.label} className="grid grid-cols-[100px_minmax(0,1fr)] py-2.5">
                    <dt className="text-[var(--ink-muted)]">{m.label}</dt>
                    <dd className="font-semibold text-[var(--ink)]">{m.value}</dd>
                  </div>
                ))}
              </dl>

              {company.website && (
                <div className="mt-6">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-btn w-full text-center block font-mono text-xs uppercase tracking-wider py-2"
                  >
                    Visit Website ↗
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: EDITORIAL DISPATCH & THESIS */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--gold)] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              <span>{company.category}</span>
              <span>·</span>
              <span>{company.stage}</span>
            </div>

            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-balance">
              {company.name}
            </h2>

            <p className="mt-4 font-serif italic text-xl sm:text-2xl text-[var(--ink-muted)] leading-relaxed">
              &ldquo;{company.tagline}&rdquo;
            </p>

            {company.description && (
              <div className="mt-8 max-w-2xl font-mono text-xs sm:text-sm leading-relaxed text-[var(--ink)]/85 space-y-4">
                {company.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* WHY WE INVESTED MEMO */}
            {company.whyInvested && (
              <div className="mt-12 relative border border-[var(--ink)] bg-[var(--paper-subtle)] p-8">
                <span className="absolute top-2 left-2 font-mono text-[10px] text-[var(--ink)]/30 select-none">┌</span>
                <span className="absolute top-2 right-2 font-mono text-[10px] text-[var(--ink)]/30 select-none">┐</span>
                <span className="absolute bottom-2 left-2 font-mono text-[10px] text-[var(--ink)]/30 select-none">└</span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] text-[var(--ink)]/30 select-none">┘</span>
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--signal-red)] font-bold flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[var(--signal-red)]" />
                  [ MEMORANDUM // WHY WE INVESTED ]
                </div>
                <div className="mt-4 font-mono text-xs sm:text-sm leading-relaxed text-[var(--ink)] space-y-4">
                  {company.whyInvested.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* GROWTH SINCE INVESTMENT */}
            {company.growthSinceInvestment && (
              <div className="mt-10 border-t border-[var(--ink)]/15 pt-8">
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
                  Growth &amp; Scale
                </div>
                <div className="mt-3 font-mono text-xs sm:text-sm leading-relaxed text-[var(--ink)]/90 space-y-4">
                  {company.growthSinceInvestment.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* KEY ACHIEVEMENTS */}
            {(() => {
              const points = company.keyAchievements ?? company.convictionPoints;
              if (!points || points.length === 0) return null;
              return (
                <div className="mt-10 border-t border-[var(--ink)]/15 pt-8">
                  <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
                    {company.keyAchievements ? "Key Achievements" : "Why We Invested"}
                  </div>
                  <ol className="mt-4 divide-y divide-[var(--ink)]/15 border-t border-b border-[var(--ink)]/15">
                    {points.map((c, i) => (
                      <li key={i} className="grid grid-cols-[40px_minmax(0,1fr)] gap-4 py-3 font-mono text-xs">
                        <span className="text-[var(--gold)] font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[var(--ink)] leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })()}

            {/* FOUNDERS ROSTER */}
            {(() => {
              const raw = company.founders ?? "";
              if (!raw || /^founding\b/i.test(raw.trim())) return null;
              const names = raw.split("·").map((n) => n.replace(/\(.*?\)/g, "").trim()).filter(Boolean);
              if (names.length === 0) return null;
              return (
                <div className="mt-10 border-t border-[var(--ink)]/15 pt-8">
                  <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
                    Founders
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {names.map((name) => {
                      const q = encodeURIComponent(`${name} ${company.name}`);
                      const href = `https://www.linkedin.com/search/results/people/?keywords=${q}`;
                      return (
                        <a
                          key={name}
                          href={href}
                          target="_top"
                          rel="external noreferrer"
                          className="border border-[var(--ink)]/20 p-3 bg-[var(--paper-subtle)] flex items-center justify-between font-mono text-xs hover:border-[var(--ink)] transition"
                        >
                          <span className="font-bold">{name}</span>
                          <span className="text-[var(--ink-muted)] text-[10px] flex items-center gap-1">
                            LinkedIn <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* PRESS & MEDIA ARCHIVES */}
            {company.milestones && company.milestones.length > 0 && (
              <div className="mt-10 border-t border-[var(--ink)]/15 pt-8">
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)] mb-4">
                  Press &amp; Coverage
                </div>
                {company.milestones.some((m) => m.image) && (
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    {company.milestones.filter((m) => m.image).map((m) => (
                      <a
                        key={m.title}
                        href={m.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group border border-[var(--ink)]/20 bg-[var(--paper-subtle)] overflow-hidden hover:border-[var(--ink)] transition block"
                      >
                        <div className="aspect-[16/10] overflow-hidden border-b border-[var(--ink)]/15">
                          <img
                            src={m.image}
                            alt={m.title}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-3 font-mono text-xs flex items-center justify-between">
                          <span className="line-clamp-1">{m.title}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 ml-2 text-[var(--signal-red)]" />
                        </div>
                      </a>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {company.milestones.filter((m) => !m.image).map((m) => (
                    <a
                      key={m.title}
                      href={m.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] uppercase border border-[var(--ink)]/20 px-3 py-1.5 hover:border-[var(--ink)] transition inline-flex items-center gap-1.5"
                    >
                      <span>{m.title}</span>
                      <ArrowUpRight className="h-3 w-3 text-[var(--signal-red)]" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* TESTIMONIAL CITATION */}
            {company.testimonial && (
              <blockquote className="mt-12 border-l-2 border-[var(--signal-red)] pl-6 py-2">
                <p className="font-serif italic text-lg sm:text-xl text-[var(--ink)] leading-snug">
                  &ldquo;{company.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-3 font-mono text-[11px] uppercase tracking-widest text-[var(--ink-muted)]">
                  — {company.testimonial.author}
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
