import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const nav = [
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/thesis", label: "THESIS" },
  { to: "/funds", label: "FUNDS & LPS" },
  { to: "/team", label: "TEAM" },
  { to: "/about", label: "ABOUT" },
  { to: "/media", label: "MEDIA" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pointer-events-none">
      {/* Floating Navigation — separate rounded pills over the page */}
      <div className="container-tight flex items-center justify-between gap-3 py-3 md:py-4">
        {/* Left pill: brand + links (active link = solid ink pill) */}
        <div
          className={`pointer-events-auto flex items-center gap-1 md:gap-2 rounded-full bg-white border border-[var(--ink)]/[0.06] p-1.5 transition-shadow duration-300 ${scrolled
            ? "shadow-[0_10px_30px_-12px_rgba(12,26,46,0.25)]"
            : "shadow-[0_2px_10px_-4px_rgba(12,26,46,0.12)]"
            }`}
        >
          <Link
            to="/"
            className="flex items-center group pl-3 pr-2 md:pl-4"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/Mountjudilogo.png"
              alt="Mount Judi Ventures"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3.5 py-2.5 rounded-full font-sans text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--ink)] hover:bg-[var(--paper-subtle)] transition-all duration-200"
                activeProps={{
                  className: "!bg-[var(--ink)] !text-white",
                }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right pill: round icon button + contact label */}
        <div
          className={`pointer-events-auto flex items-center gap-2 rounded-full bg-white border border-[var(--ink)]/[0.06] p-1.5 transition-shadow duration-300 ${scrolled
            ? "shadow-[0_10px_30px_-12px_rgba(12,26,46,0.25)]"
            : "shadow-[0_2px_10px_-4px_rgba(12,26,46,0.12)]"
            }`}
        >
          <Link
            to="/contact"
            className="group hidden sm:flex items-center gap-3 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-white transition-transform duration-200 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <span className="pr-4 font-sans text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--ink)]">
              Pitch Your Startup
            </span>
          </Link>

          {/* Mobile / tablet menu toggle — matches the pill language */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className="xl:hidden h-10 px-5 rounded-full bg-[var(--ink)] text-white font-sans text-[12px] font-semibold uppercase tracking-[0.06em] hover:bg-[#1e293b] transition-colors duration-200"
          >
            {mobileOpen ? "Close ✕" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer — floating rounded card */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="pointer-events-auto fixed inset-x-3 md:inset-x-6 top-[76px] md:top-[88px] bottom-3 z-50 rounded-[28px] bg-white border border-[var(--ink)]/[0.06] shadow-2xl p-5 md:p-8 flex flex-col justify-between overflow-y-auto xl:hidden animate-fade-in"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4">
              <img
                src="/Mountjudilogo.png"
                alt="Mount Judi Ventures"
                className="h-8 w-auto object-contain"
              />
              <span className="pill-badge !text-[9px] !py-1 !px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35]" />
                NAVIGATION
              </span>
            </div>
            <nav className="flex flex-col gap-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 px-5 rounded-2xl font-display text-xl font-bold tracking-tight text-[var(--ink)] hover:bg-[var(--paper-subtle)] transition-all flex items-center justify-between group"
                >
                  <span>{n.label}</span>
                  <ArrowRight className="h-4 w-4 text-[var(--ink-muted)] group-hover:text-[var(--ink)] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
              <Link
                to="/why-we-invested"
                onClick={() => setMobileOpen(false)}
                className="py-4 px-5 rounded-2xl font-display text-xl font-bold tracking-tight text-[var(--ink)] hover:bg-[var(--paper-subtle)] transition-all flex items-center justify-between group"
              >
                <span>WHY WE INVESTED</span>
                <ArrowRight className="h-4 w-4 text-[var(--ink-muted)] group-hover:text-[var(--ink)] group-hover:translate-x-1 transition-all" />
              </Link>
            </nav>
          </div>

          <div className="pt-6 space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full brutal-btn-primary justify-center text-center !py-3.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#d8fb35]" />
              Pitch Your Startup →
            </Link>
            <div className="font-mono text-[10px] text-[var(--ink-muted)] text-center tracking-wider">
              SEBI REG: IN/AIF2/18-19/0536 & IN/AIF1/22-23/1068
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter({ hideCta = false }: { hideCta?: boolean } = {}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full select-none border-t border-[var(--ink)]/15 bg-[var(--paper-subtle)] px-3 py-10 text-[var(--ink)] sm:px-6 sm:py-14 md:py-16 lg:px-8">
      {/* ── Main Inset Bento Card ── */}
      <div className="mx-auto max-w-[88rem] overflow-hidden rounded-[28px] border border-black/5 bg-white text-neutral-950 shadow-sm sm:rounded-[36px] lg:rounded-[40px]">
        {/* Top 50/50 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ── Left Column: Editorial Headline, Pill Newsletter & Direct Badges ── */}
          <div className="flex flex-col justify-between space-y-10 border-b border-black/10 bg-neutral-950 p-7 text-white sm:p-10 lg:space-y-12 lg:border-b-0 lg:border-r lg:p-14">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35] animate-pulse" />
                <span>Quarterly Dispatch</span>
              </div>
              {/* Punchy Headline */}
              <h2 className="font-display text-3xl font-black leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                All conviction. No noise.
                <br />
                <span className="inline-block rounded-full bg-[#d8fb35] px-3 py-0.5 font-sans text-neutral-900 shadow-xs">
                  Get the dispatch.
                </span>
              </h2>

              {/* White Pill Input with Circular Arrow Button */}
              <form onSubmit={handleSubscribe} className="relative mt-7 sm:mt-9 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full bg-white px-6 py-4 pr-16 font-sans text-sm font-medium text-neutral-950 shadow-sm transition-all placeholder:text-neutral-500 focus:outline-none focus:ring-3 focus:ring-[#d8fb35]/35 sm:py-4.5 sm:text-base"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#d8fb35] text-neutral-900 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-[#c7ef22] active:scale-95 sm:right-2.5 sm:h-11 sm:w-11"
                >
                  <span className="text-base sm:text-lg font-bold">→</span>
                </button>
              </form>

              {subscribed && (
                <p className="mt-3 flex animate-fade-in items-center gap-1.5 font-mono text-xs font-bold text-[#d8fb35]">
                  <span>✓</span>
                  <span>Subscribed. Welcome to Mount Judi's quarterly dispatch.</span>
                </p>
              )}
            </div>

            {/* Bottom Left Badges (Replicating "Download the app" / App Store + Google Play) */}
            <div className="pt-4">
              <span className="mb-3.5 block font-sans text-xs font-bold tracking-tight text-white/70 sm:text-[13px]">
                Institutional Portals & Inquiries
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Badge 1: Founder Pitch Deck */}
                <Link
                  to="/contact"
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-4 py-2.5 text-neutral-950 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[#d8fb35]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-white transition-colors group-hover:bg-neutral-900">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-mono text-[8.5px] uppercase tracking-wider text-neutral-500">
                      FOR FOUNDERS
                    </div>
                    <div className="flex items-center gap-1.5 font-sans text-xs font-bold text-neutral-950">
                      Pitch Your Startup <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </div>
                  </div>
                </Link>

                {/* Badge 2: LP Allocation Data */}
                <Link
                  to="/funds"
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[#3b66ff] hover:bg-[#3b66ff]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:rotate-12">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-mono text-[8.5px] uppercase tracking-wider text-white/60">
                      FOR INVESTORS
                    </div>
                    <div className="font-sans text-xs font-bold text-white flex items-center gap-1.5">
                      SEBI Cat-II Funds <span className="text-white/60 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right Column: Link Columns (FIRM, VENTURES, FOLLOW) ── */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              {/* Col 1: FIRM (Matches ORDER) */}
              <div>
                <h3 className="mb-5 font-mono text-xs font-black uppercase tracking-[0.18em] text-neutral-950">
                  Firm
                </h3>
                <ul className="space-y-3 font-sans text-xs font-semibold text-neutral-600 sm:text-[13px]">
                  <li>
                    <Link to="/about" className="block transition-colors hover:text-[#3b66ff]">
                      About MJV
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="block transition-colors hover:text-[#3b66ff]">
                      Partners & Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/thesis" className="block transition-colors hover:text-[#3b66ff]">
                      Investment Thesis
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="block transition-colors hover:text-[#3b66ff]">
                      Operating Creed
                    </Link>
                  </li>
                  <li>
                    <Link to="/media" className="block transition-colors hover:text-[#3b66ff]">
                      Media Room
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 2: VENTURES (Matches READ) */}
              <div>
                <h3 className="mb-5 font-mono text-xs font-black uppercase tracking-[0.18em] text-neutral-950">
                  Ventures
                </h3>
                <ul className="space-y-3 font-sans text-xs font-semibold text-neutral-600 sm:text-[13px]">
                  <li>
                    <Link to="/portfolio" className="block transition-colors hover:text-[#3b66ff]">
                      Active Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/why-we-invested" className="block transition-colors hover:text-[#3b66ff]">
                      Investment Memos
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds" className="block transition-colors hover:text-[#3b66ff]">
                      Fund I & II
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds" className="block transition-colors hover:text-[#3b66ff]">
                      Co-Investments
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block transition-colors hover:text-[#3b66ff]">
                      Submit Pitch
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3: FOLLOW (Matches FOLLOW) */}
              <div>
                <h3 className="mb-5 font-mono text-xs font-black uppercase tracking-[0.18em] text-neutral-950">
                  Follow
                </h3>
                <ul className="space-y-3 font-sans text-xs font-semibold text-neutral-600 sm:text-[13px]">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/mount-judi-ventures/"
                      target="_blank"
                      rel="noreferrer"
                      className="block transition-colors hover:text-[#3b66ff]"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block transition-colors hover:text-[#3b66ff]"
                    >
                      X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block transition-colors hover:text-[#3b66ff]"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <span className="block text-[11px] font-normal text-neutral-500">
                      Bengaluru HQ
                    </span>
                  </li>
                  <li>
                    <a
                      href="mailto:ebaadmomin@mountjudi.com"
                      className="block text-neutral-950 underline underline-offset-2 transition-colors hover:text-[#3b66ff]"
                    >
                      Email Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Horizontal Sub-Bar (Legal Links + Circular Stamps + Copyright) ── */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-black/10 px-7 py-7 sm:px-10 md:flex-row lg:px-14">
          {/* Legal Links */}
          <div className="order-2 flex flex-wrap items-center justify-center gap-5 font-sans text-xs font-bold text-neutral-600 sm:gap-7 sm:text-[13px] md:order-1 md:justify-start">
            <Link to="/resources" className="transition-colors hover:text-[#3b66ff]">
              Privacy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-[#3b66ff]">
              Contact
            </Link>
            <Link to="/team" className="transition-colors hover:text-[#3b66ff]">
              Careers
            </Link>
            <Link to="/funds" className="transition-colors hover:text-[#3b66ff]">
              SEBI Disclosures
            </Link>
          </div>

          {/* Center Accreditation Stamps */}
          <div className="flex items-center gap-5 order-1 md:order-2">
            {/* SEBI Cat-II Circular Stamp */}
            <div className="flex flex-col items-center text-center">
              <span className="mb-1 font-mono text-[8px] font-extrabold uppercase leading-none tracking-wider text-neutral-500">
                SEBI
              </span>
              <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-neutral-950 bg-[#d8fb35] text-neutral-950">
                <span className="font-display font-black text-base leading-none">II</span>
                <span className="font-mono text-[6px] font-black tracking-tight uppercase leading-none mt-0.5">CAT-II</span>
              </div>
              <span className="mt-1 font-mono text-[7px] font-extrabold uppercase leading-none tracking-wider text-neutral-500">
                Registered
              </span>
            </div>

            {/* UN PRI Signatory Stamp */}
            <div className="flex flex-col items-center text-center">
              <span className="mb-1 font-mono text-[8px] font-extrabold uppercase leading-none tracking-wider text-neutral-500">
                Signatory
              </span>
              <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full border-2 border-neutral-950 bg-white text-neutral-950">
                <span className="font-display font-black text-xs leading-none">PRI</span>
                <span className="font-mono text-[6px] font-black tracking-tight uppercase leading-none mt-0.5">ETHICAL</span>
              </div>
              <span className="mt-1 font-mono text-[7px] font-extrabold uppercase leading-none tracking-wider text-neutral-500">
                Principles
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="order-3 text-center font-sans text-xs font-semibold text-neutral-500 sm:text-[13px] md:text-right">
            ©{new Date().getFullYear()} Mount Judi Ventures
          </div>
        </div>

        {/* ── Monumental Edge-to-Edge Brand Banner (JUST SALAD -> MOUNT JUDI) ── */}
        <div className="overflow-hidden border-t border-black/10 bg-[var(--paper-subtle)] px-4 py-3 sm:px-8 sm:py-5 text-center">
          <span className="block whitespace-nowrap text-center font-display text-[8.5vw] sm:text-[9.2vw] lg:text-[9.8vw] 2xl:text-[130px] font-black uppercase leading-tight tracking-[-0.03em] text-neutral-950 select-none">
            MOUNT JUDI
          </span>
        </div>
      </div>
    </footer>
  );
}
