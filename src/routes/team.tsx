import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import {
  team,
  generalPartners,
  advisoryBoard,
  type TeamMember,
  type GeneralPartner,
  type ProfilePerson,
} from "@/lib/team-data";
import { ArrowUpRight, X, Sparkles, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/team")({
  validateSearch: (search: Record<string, unknown>): { profile: string | undefined } => ({
    profile: typeof search.profile === "string" ? search.profile : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Operators & Partners | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Four decades of operating pedigree. Entrepreneurs, operators, and investment committee partners backing category leaders across India.",
      },
      { property: "og:title", content: "Operators & Partners | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "Operators, founders, and investors committed to backing enduring companies with patience and conviction.",
      },
      { property: "og:url", content: "/team" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const EXCLUDED = new Set(["ajish-rahman", "mohammed-mobeen-ismail-batla"]);

/* ─── Angled Folder Tab Deck (Matches Slide 1 & Slide 2 Bottom Tabs) ─── */
function FolderTabDeck({ label }: { label: string }) {
  return (
    <div className="w-full pb-10 md:pb-14">
      {/* Rounded pill strip - matches home page "Stage Focus" bar */}
      <div className="rounded-full border border-[rgba(12,26,46,0.08)] bg-[var(--paper-subtle)] pl-2 pr-2 py-2 flex items-center justify-between gap-3 select-none shadow-2xs">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          {label}
        </span>
        <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
          →
        </span>
      </div>
    </div>
  );
}

/* ─── Geometric Emblem Marks (Matches Slide 2 Alternating Squircles) ─── */
function GeometricEmblem({ type }: { type: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const color = "#171717"; // Ink emblem matching home theme
  switch (type) {
    case 1: // Amphora / Vessel
      return (
        <svg width="44" height="52" viewBox="0 0 44 52" fill={color}>
          <path d="M14 4H30V8C30 8 36 12 36 20C36 28 30 32 30 36V44H14V36C14 32 8 28 8 20C8 12 14 8 14 8V4Z" />
          <path d="M12 2H32V5H12V2Z" />
          <path d="M10 44H34V48H10V44Z" />
        </svg>
      );
    case 2: // Geometric Biscuit / Wafer
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill={color}>
          <rect x="8" y="10" width="32" height="28" rx="6" />
          <circle cx="8" cy="16" r="3" fill="#f4f4f0" />
          <circle cx="8" cy="24" r="3" fill="#f4f4f0" />
          <circle cx="8" cy="32" r="3" fill="#f4f4f0" />
          <circle cx="40" cy="16" r="3" fill="#f4f4f0" />
          <circle cx="40" cy="24" r="3" fill="#f4f4f0" />
          <circle cx="40" cy="32" r="3" fill="#f4f4f0" />
        </svg>
      );
    case 3: // Bowtie / Hourglass Polygon
      return (
        <svg width="46" height="42" viewBox="0 0 46 42" fill={color}>
          <path d="M6 8C6 8 18 21 18 21L6 34C6 34 23 29 23 21C23 13 6 8 6 8Z" />
          <path d="M40 8C40 8 28 21 28 21L40 34C40 34 23 29 23 21C23 13 40 8 40 8Z" />
        </svg>
      );
    case 4: // Architectural Urn / Tiered Pedestal
      return (
        <svg width="48" height="44" viewBox="0 0 48 44" fill={color}>
          <ellipse cx="24" cy="12" rx="14" ry="7" />
          <path d="M16 14C16 14 14 26 18 32H30C34 26 32 14 32 14H16Z" />
          <rect x="14" y="32" width="20" height="6" rx="2" />
        </svg>
      );
    case 5: // Shield / Crown Cap
      return (
        <svg width="46" height="44" viewBox="0 0 46 44" fill={color}>
          <path d="M8 12L23 6L38 12V24C38 34 23 40 23 40C23 40 8 34 8 24V12Z" />
        </svg>
      );
    case 6: // Curved Ribbon Knot
      return (
        <svg width="50" height="34" viewBox="0 0 50 34" fill={color}>
          <rect x="8" y="10" width="34" height="14" rx="7" />
          <circle cx="25" cy="17" r="5" fill="#f4f4f0" />
        </svg>
      );
  }
}

function TeamPage() {
  const members = team.filter((m) => !EXCLUDED.has(m.slug));
  const { profile } = Route.useSearch();
  const navigate = useNavigate();

  // Build a lookup of all people by slug
  const allPeople = useMemo(() => {
    const map = new Map<string, ProfilePerson>();
    for (const m of members) map.set(m.slug, m);
    for (const gp of generalPartners) if (gp.slug) map.set(gp.slug, gp);
    for (const a of advisoryBoard) if (a.slug) map.set(a.slug, a);
    return map;
  }, [members]);

  const active = profile ? allPeople.get(profile) ?? null : null;

  const setActive = (person: ProfilePerson | null) => {
    const slug = person?.slug ?? person?.name.toLowerCase().replace(/\s+/g, "-");
    navigate({
      to: "/team",
      search: { profile: person ? slug : undefined },
      replace: true,
    });
  };

  const memberMap = new Map(members.map((m) => [m.slug, m]));
  const sherif = memberMap.get("sherif-kottapurath");
  const ebaad = memberMap.get("ebaad-momin");
  const ali = memberMap.get("mohammed-ali-shariff");
  const anamika = memberMap.get("anamika-saksena");
  const imad = memberMap.get("imad-shariff");
  const praharsh = memberMap.get("praharsh-shahi");
  const areeb = memberMap.get("areeb-khan");
  const uzma = memberMap.get("uzma-khanum");
  const shruti = memberMap.get("shruthi-karnam");

  const renderPartnerCard = (m: TeamMember) => (
    <button
      key={m.slug}
      type="button"
      onClick={() => setActive(m)}
      className="bg-white border-2 border-neutral-950 rounded-2xl sm:rounded-3xl p-3 flex flex-col text-left group cursor-pointer hover:shadow-lg transition-all duration-200 h-full"
    >
      <div>
        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center p-1">
          <img
            src={m.photo}
            alt={m.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-1.5 px-1">
          <div className="font-display text-sm sm:text-base font-black text-neutral-950 tracking-tight truncate">
            {m.name}
          </div>
          <div className="font-mono text-[10px] text-neutral-500 tracking-wider mt-0 truncate font-bold">
            {m.role}
          </div>
        </div>
      </div>

      {/* Dedicated Tagline Box with padding below (NOT on the photo) */}
      {m.summary && (
        <div className="mt-auto pt-2.5 bg-neutral-50 border border-black/10 rounded-xl p-2.5 sm:p-3">
          <div className="flex items-start gap-1.5">
            <span className="text-sm sm:text-base text-neutral-400 font-serif leading-none select-none shrink-0 mt-0.5">“</span>
            <p className="font-sans text-[13px] sm:text-sm text-neutral-900 leading-snug font-medium">{m.summary}</p>
          </div>
        </div>
      )}
    </button>
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">

      {/* ═══════════════════════════════════════════════════════════
          SHEET 1: CORE OPERATING PARTNERS (BRANDS AND CREATIVE PARTNERSHIPS)
          - Matches UI/UX of General Partners & Advisory Council
          - 4-column balanced grid:
            Row 1: [Heading & Text] [Sherif] [Ebaad] [Mohammed Ali]
            Row 2: [Anamika] [Imad] [Praharsh] [Areeb]
          - Anamika placed directly on the left side of Imad
          - Bottom folder tab labeled "EXPERIENCE"
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-black/10 bg-[var(--paper)]">
        <div className="relative container-tight">
          <div className="container-tight relative pt-10 md:pt-14">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                <span>Operator Network </span>
              </div>
              <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest font-bold">
                125+ years cumulative pedigree
              </span>
            </div>
          </div>
          <div className="relative pb-10 md:pb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              {/* Cell 1 (Row 1, Col 1): Heading + Descriptive Text */}
              <div className="flex flex-col p-2 sm:p-3 pr-4 space-y-4">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl font-black uppercase text-neutral-950 leading-tight tracking-tight">
                    Executive
                    <br />
                    Team
                  </h2>
                </div>
                <p className="text-base text-neutral-900 leading-relaxed">We bring together visionary brands, creative talent, and strategic partners to build meaningful collaborations. Through shared expertise, strong networks, and innovative thinking, by helping businesses strengthen their market presence, unlock new opportunities, and create lasting impact.</p>
              </div>

              {/* Cell 2 (Row 1, Col 2): Sherif Kottapurath */}
              {sherif && renderPartnerCard(sherif)}

              {/* Cell 3 (Row 1, Col 3): Dr. Ebaad Momin */}
              {ebaad && renderPartnerCard(ebaad)}

              {/* Cell 4 (Row 1, Col 4): Mohammed Ali Shariff */}
              {ali && renderPartnerCard(ali)}
            </div>
          </div>
          <div className="relative pb-10 md:pb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              <div className="hidden lg:block"></div>
              {/* Cell 6 (Row 2, Col 2): Imad Ahmed Shariff */}
              {imad && renderPartnerCard(imad)}

              {/* Cell 7 (Row 2, Col 3): Praharsh Shahi */}
              {praharsh && renderPartnerCard(praharsh)}

              {/* Cell 8 (Row 2, Col 4): Shruthi Karnam */}
              {shruti && renderPartnerCard(shruti)}
            </div>
          </div>

          {/* Second row for added members */}
          <div className="relative pb-10 md:pb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              <div className="flex flex-col justify-between h-full p-2 sm:p-3 pr-4 space-y-6">
                <div>
                  <p>

                  </p>
                </div>

              </div>
              {areeb && renderPartnerCard(areeb)}
              {anamika && renderPartnerCard(anamika)}
              {uzma && renderPartnerCard(uzma)}
            </div>
          </div>

          {/* Bottom Tab Deck */}
          <FolderTabDeck label="EXPERIENCE" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SHEET 3: GENERAL PARTNERS & INVESTMENT COMMITTEE
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="relative container-tight">
          <div className="relative py-10 md:py-14">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Heading + Description */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-[28px] xl:text-[32px] 2xl:text-4xl font-extrabold uppercase text-neutral-900 leading-tight tracking-tight">
                    General partners &amp;
                    <br />
                    investment
                    <br />
                    <span className="whitespace-nowrap">committee members</span>
                  </h2>
                </div>

                <div className="pt-6 lg:pt-16">
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    Our Investment Committee consists of veteran entrepreneurs and industrialists
                    who anchor Mount Judi's ethical standards, vet every deployment, and provide
                    direct boardroom access.
                  </p>

                </div>
              </div>

              {/* Right Column: Squircle Grid of General Partners */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                  {generalPartners.map((gp, i) => {
                    const isLogo = gp.name.includes("Family Office");
                    return (
                      <button
                        key={gp.name}
                        type="button"
                        onClick={() => setActive(gp)}
                        className="bg-white border-2 border-neutral-950 rounded-2xl sm:rounded-3xl p-3 flex flex-col justify-between text-left group cursor-pointer hover:shadow-lg transition-all duration-200"
                      >
                        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center p-1">
                          <img
                            src={gp.photo}
                            alt={gp.name}
                            className={
                              isLogo
                                ? "h-full w-full object-contain p-2"
                                : "h-full w-full object-cover object-top rounded-lg"
                            }
                          />
                        </div>
                        <div className="mt-1.5 px-1">
                          <div className="font-display text-sm font-black text-neutral-950 tracking-tight truncate">
                            {gp.name}
                          </div>
                          <div className="font-mono text-[10px] text-neutral-500 tracking-wider mt-0 font-bold">
                            {gp.role ?? "General Partner"}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tab Deck */}
          <FolderTabDeck label="GENERAL PARTNERS" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SHEET 4: ADVISORY COUNCIL
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-[var(--ink)]/15 bg-[var(--paper)]">
        <div className="relative container-tight">
          <div className="relative py-10 md:py-14">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Heading + Description */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-neutral-900 leading-tight tracking-tight">
                    Advisory Board &amp;
                    <br />
                    Global Strategists
                  </h2>
                </div>

                <div className="pt-6 lg:pt-16">
                  <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    International operators and domain experts providing our portfolio companies
                    with global market access, regulatory clarity, and technological foresight.
                  </p>
                  <p className="mt-4 font-sans text-xs text-neutral-500 leading-relaxed">
                    Technology leadership from Wipro R&D, cross-border banking, and global
                    institutional private equity.
                  </p>
                </div>
              </div>

              {/* Right Column: Squircle Grid of Advisory Council */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                  {advisoryBoard.map((advisor) => (
                    <button
                      key={advisor.name}
                      type="button"
                      onClick={() => setActive(advisor)}
                      className="bg-white border-2 border-neutral-950 rounded-2xl sm:rounded-3xl p-3 flex flex-col justify-between text-left group cursor-pointer hover:shadow-lg transition-all duration-200"
                    >
                      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center p-1">
                        <img
                          src={advisor.photo}
                          alt={advisor.name}
                          className="h-full w-full object-cover object-top rounded-lg"
                        />
                      </div>
                      <div className="mt-1.5 px-1">
                        <div className="font-display text-sm font-black text-neutral-950 tracking-tight truncate">
                          {advisor.name}
                        </div>
                        <div className="font-mono text-[10px] text-neutral-500 tracking-wider mt-0 font-bold">
                          {advisor.role ?? "Advisor"}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tab Deck */}
          <FolderTabDeck label="ADVISORY COUNCIL" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MODAL PROFILE DOSSIER (OPENS ON PERSON CARD CLICK)
      ═══════════════════════════════════════════════════════════ */}
      <ProfileOverlay member={active} onClose={() => setActive(null)} />
    </div>
  );
}

function ProfileOverlay({
  member,
  onClose,
}: {
  member: ProfilePerson | null;
  onClose: () => void;
}) {
  if (!member) return null;
  const isMjvTeam = "group" in member;
  const isLogo = member.name.includes("Family Office");
  const bio = member.bio ?? [];
  const bioSections = member.bioSections ?? [];
  const focus = member.focus ?? [];
  const timeline = member.timeline ?? [];
  const notable = member.notable ?? [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} profile`}
      className="fixed inset-0 z-[9999] overflow-y-auto bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="container-tight relative pt-8 pb-24 md:pt-12 md:pb-32">
        {/* TOP BAR */}
        <div className="flex items-center justify-between border-b border-black/15 pb-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-neutral-900 animate-pulse" />
            <span className="font-bold text-neutral-950">{member.name.toUpperCase()}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-white border-2 border-neutral-950 text-neutral-950 rounded-full flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-950 hover:text-white transition-all shadow-xs"
            aria-label="Close"
          >
            <span>Close ✕</span>
          </button>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          {/* LEFT: PHOTO & LEDGER */}
          <div>
            <div className="aspect-[4/5] w-full border-2 border-neutral-950 rounded-3xl overflow-hidden bg-white p-2 shadow-xs">
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className={
                  isLogo
                    ? "h-full w-full object-contain p-6 rounded-2xl"
                    : "h-full w-full object-cover object-top rounded-2xl"
                }
              />
            </div>

            <div className="mt-8 font-mono text-xs space-y-4">
              <div className="pb-3 border-b border-black/10">
                <div className="text-[10px] uppercase text-neutral-500 font-bold">Location</div>
                <div className="font-bold mt-1 text-neutral-950">
                  {member.based ?? "Bengaluru, India"}
                </div>
              </div>

              {focus.length > 0 && (
                <div className="pb-3 border-b border-black/10">
                  <div className="text-[10px] uppercase text-neutral-500 font-bold">Focus Areas</div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {focus.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-0.5 bg-white border border-neutral-950/20 text-[11px] rounded-full text-neutral-900 font-semibold shadow-2xs"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center py-2.5 bg-[#171717] text-white rounded-full text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors"
                >
                  LinkedIn Profile ↗
                </a>
              )}
            </div>
          </div>

          {/* RIGHT: EDITORIAL BIO */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold">
              {member.role}
            </div>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#171717]">
              {member.name}
            </h2>
            <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-2xl">
              {member.intro ?? member.summary}
            </p>

            <div className="mt-8 font-mono text-xs sm:text-sm leading-relaxed text-neutral-700 space-y-5 max-w-3xl">
              {bioSections.length > 0
                ? bioSections.map((section, i) => (
                    <div key={i} className="space-y-2">
                      {section.heading && (
                        <h3 className="font-display text-base sm:text-lg font-bold text-neutral-950 tracking-tight pt-2">
                          {section.heading}
                        </h3>
                      )}
                      <p>{section.body}</p>
                    </div>
                  ))
                : bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {member.philosophy && (
              <blockquote className="mt-10 border-l-2 border-neutral-900 pl-6 py-2 bg-neutral-100 rounded-r-xl">
                <p className="font-serif italic text-lg sm:text-xl text-[#171717] leading-snug">
                  &ldquo;{member.philosophy}&rdquo;
                </p>
              </blockquote>
            )}

            {timeline.length > 0 && isMjvTeam && (
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  Experience &amp; Track Record
                </div>
                <div className="divide-y divide-black/10 border-t border-b border-black/10 font-mono text-xs">
                  {timeline.map((t, i) => (
                    <div key={i} className="py-3 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#171717]">{t.company}</span>
                        <span className="text-neutral-500 ml-2">/ {t.role}</span>
                      </div>
                      <span className="text-neutral-500 text-[11px]">{t.years}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {notable.length > 0 && !isMjvTeam && (
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-3 font-bold">
                  Notable Affiliations
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {notable.map((n) => (
                    <span
                      key={n}
                      className="px-3 py-1 border border-neutral-950/20 bg-white rounded-full text-neutral-900 font-semibold shadow-2xs"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
