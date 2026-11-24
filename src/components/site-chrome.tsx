import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import mountFooterWatermark from "@/assets/mount-footer-watermark.png";
import faviconIcon from "@/assets/favicon.png";

const nav = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/thesis", label: "Thesis" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleNavClick = useCallback(
    (to: string) => {
      // Always scroll to top — whether same page or new page
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [],
  );

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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 10);

      // Always show when near the very top of the page
      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (delta > 8 && currentScrollY > 80) {
        // Scrolling down -> hide navbar
        setVisible(false);
      } else if (delta < -8) {
        // Scrolling up -> reveal navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = visible || mobileOpen;

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out border-b border-neutral-200/80 ${
        scrolled ? "shadow-sm" : "shadow-2xs"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Floating Navigation - separate rounded pills over the page */}
      <div className="container-tight flex items-center justify-between gap-3 py-3 md:py-3.5">
        {/* Left pill: brand + links (active link = solid ink pill) */}
        <div
          className={`pointer-events-auto flex items-center gap-1 md:gap-2 rounded-full bg-white border border-neutral-300/80 p-1.5 transition-all duration-300 ${
            scrolled
              ? "shadow-[0_10px_30px_-12px_rgba(12,26,46,0.22)] border-neutral-300"
              : "shadow-[0_4px_16px_-4px_rgba(12,26,46,0.14)]"
          }`}
        >
          <Link
            to="/"
            className="flex items-center group pl-3 pr-2 md:pl-4 focus:outline-none"
            onClick={() => { setMobileOpen(false); handleNavClick("/"); }}
          >
            <img
              src="/Mountjudilogo.png"
              alt="Mount Judi Ventures"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 rounded-full font-sans text-[13px] sm:text-[14px] font-medium text-neutral-800 hover:text-[#0284c7] hover:bg-neutral-100 transition-all duration-200 focus:outline-none"
                activeProps={{
                  className: "!bg-neutral-950 !text-white !font-semibold shadow-xs",
                }}
                onClick={() => handleNavClick(n.to)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right pill: round icon button + contact label */}
        <div
          className={`pointer-events-auto flex items-center gap-2 rounded-full bg-white border border-neutral-300/80 p-1.5 transition-all duration-300 ${
            scrolled
              ? "shadow-[0_10px_30px_-12px_rgba(12,26,46,0.22)] border-neutral-300"
              : "shadow-[0_4px_16px_-4px_rgba(12,26,46,0.14)]"
          }`}
        >
          <Link
            to="/contact"
            className="group hidden sm:flex items-center gap-3 rounded-full focus:outline-none"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform duration-200 group-hover:rotate-45 group-hover:bg-[#0284c7]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <span className="pr-4 font-sans text-[13px] sm:text-[14px] font-semibold text-neutral-900 group-hover:text-[#0284c7] transition-colors">
              Pitch your startup
            </span>
          </Link>

          {/* Mobile / tablet menu toggle - matches the pill language */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className="xl:hidden h-10 px-5 rounded-full bg-neutral-950 text-white font-sans text-[13px] font-semibold hover:bg-neutral-800 transition-colors duration-200"
          >
            {mobileOpen ? "Close ✕" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - floating rounded card */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="pointer-events-auto fixed inset-x-3 md:inset-x-6 top-[76px] md:top-[88px] bottom-3 z-50 rounded-[28px] bg-white border border-neutral-200 shadow-2xl p-5 md:p-8 flex flex-col justify-between overflow-y-auto xl:hidden animate-fade-in"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <img
                src="/Mountjudilogo.png"
                alt="Mount Judi Ventures"
                className="h-8 w-auto object-contain"
              />
              <span className="pill-badge !text-[11px] !py-1 !px-3 font-sans">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                Navigation
              </span>
            </div>
            <nav className="flex flex-col gap-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => { setMobileOpen(false); handleNavClick(n.to); }}
                  className="py-3.5 px-4 rounded-2xl font-sans text-lg font-semibold text-neutral-900 hover:bg-neutral-100 transition-all flex items-center justify-between group"
                >
                  <span>{n.label}</span>
                  <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
              <Link
                to="/perspective"
                onClick={() => { setMobileOpen(false); handleNavClick("/perspective"); }}
                className="py-3.5 px-4 rounded-2xl font-sans text-lg font-semibold text-neutral-900 hover:bg-neutral-100 transition-all flex items-center justify-between group"
              >
                <span>Perspectives</span>
                <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
              </Link>
            </nav>
          </div>

          <div className="pt-6 space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full brutal-btn-primary justify-center text-center !py-3.5 font-sans font-semibold text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              Pitch your startup →
            </Link>
            <div className="font-mono text-[10px] text-[var(--ink-muted)] text-center tracking-wider">
              SEBI REG: IN/AIF2/18-19/0536 &amp; IN/AIF1/22-23/1068
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
    <footer className="w-full bg-[var(--paper)] text-neutral-900 pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
      {/* Mountain watermark overlapping the main footer */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none flex justify-center items-end select-none opacity-[0.26] overflow-hidden z-20">
        <img
          src={mountFooterWatermark}
          alt=""
          aria-hidden="true"
          className="w-full max-w-[1900px] min-w-[1300px] h-[520px] sm:h-[640px] md:h-[740px] lg:h-[840px] object-contain object-bottom translate-y-3 sm:translate-y-4"
        />
      </div>

      <div className="mx-auto max-w-[1280px] relative z-10">
        {/* ── Main Rounded Container (Split Black/White Card) ── */}
        <div className="rounded-[32px] sm:rounded-[40px] border border-black/10 hover:border-neutral-950 overflow-hidden bg-white shadow-xs transition-all duration-300">
          {/* Top Half: Left (Black) / Right (White) */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Black Box */}
            <div className="lg:col-span-6 bg-black text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Label */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span>Mount Judi | Investment Partners</span>
                </div>

                {/* Main Headline */}
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.08]">
                  Backing bold ideas. Building enduring companies.
                </h2>

                <p className="mt-4 max-w-md font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                  We partner with ambitious founders building businesses that shape industries and create lasting impact.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Explore Our Portfolio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Bottom Left: Institutional Portals & Inquiries */}
              <div className="mt-10 sm:mt-14">
                <div className="font-sans text-xs text-neutral-400 mb-3 font-medium">
                  Institutional Portals &amp; Inquiries
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Founder Pitch Deck */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 transition-all shadow-xs group"
                  >
                    <span className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-left leading-tight">
                      <span className="block font-mono text-[8.5px] uppercase tracking-wider text-neutral-500 font-bold">
                        FOR FOUNDERS
                      </span>
                      <span className="font-sans text-xs font-bold text-neutral-900 flex items-center gap-1">
                        Pitch Your Startup <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </span>
                    </span>
                  </Link>

                  {/* LP Allocation Data */}
                  <Link
                    to="/funds"
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all shadow-xs group"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-left leading-tight">
                      <span className="block font-mono text-[8.5px] uppercase tracking-wider text-white/50 font-bold">
                        FOR INVESTORS
                      </span>
                      <span className="font-sans text-xs font-bold text-white flex items-center gap-1">
                        SEBI AIF Funds <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: White 3-Column Link Grid */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-6 sm:gap-10">
                {/* Col 1: FIRM */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-6">
                    Firm
                  </h3>
                  <ul className="space-y-3 font-sans text-xs sm:text-[13px] text-neutral-700">
                    <li><Link to="/about" className="hover:text-black transition-colors">About MJV</Link></li>
                    <li><Link to="/team" search={{ profile: undefined }} className="hover:text-black transition-colors">Partners &amp; Team</Link></li>
                    <li><Link to="/thesis" className="hover:text-black transition-colors">Investment Thesis</Link></li>
                    <li><Link to="/media" className="hover:text-black transition-colors">Media Room</Link></li>
                    <li><Link to="/faq" className="hover:text-black transition-colors">FAQs</Link></li>
                  </ul>
                </div>

                {/* Col 2: VENTURES */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-6">
                    Ventures
                  </h3>
                  <ul className="space-y-3 font-sans text-xs sm:text-[13px] text-neutral-700">
                    <li><Link to="/portfolio" className="hover:text-black transition-colors">Active Portfolio</Link></li>
                    <li><Link to="/perspective" className="hover:text-black transition-colors">Perspectives</Link></li>
                    <li><Link to="/funds" className="hover:text-black transition-colors">Fund I &amp; II</Link></li>
                    <li><Link to="/contact" className="hover:text-black transition-colors">Submit Pitch</Link></li>
                  </ul>
                </div>

                {/* Col 3: FOLLOW */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-6">
                    Follow
                  </h3>
                  <ul className="space-y-3 font-sans text-xs sm:text-[13px] text-neutral-700">
                    <li>
                      <a
                        href="https://www.linkedin.com/company/mount-judi-ventures/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-black transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@mountjudiventures/featured"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-black transition-colors"
                      >
                        YouTube
                      </a>
                    </li>
                    <li>
                      <span className="block text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Corporate Office</span>
                      <span className="block text-xs text-neutral-600 mt-0.5 leading-snug">
                        4th Fl, #85, Sheriff House, Richmond Rd, Bengaluru – 560025
                      </span>
                    </li>
                    <li>
                      <div className="text-xs text-neutral-700 font-mono flex flex-wrap items-center gap-1.5">
                        <a href="tel:+919699831366" className="hover:text-black hover:underline">+91 96998 31366</a>
                        <span className="text-neutral-400">/</span>
                        <a href="tel:+919880365936" className="hover:text-black hover:underline">+91 98803 65936</a>
                      </div>
                    </li>
                    <li>
                      <a
                        href="mailto:info@mountjudi.com"
                        className="font-bold text-neutral-900 underline underline-offset-4 hover:text-black transition-colors"
                      >
                        info@mountjudi.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Sub-Bar of Card: Legal Links + Stamps + Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-black/10 px-8 sm:px-12 py-6 bg-white">
            {/* Left: Legal Links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-sans text-xs font-bold text-neutral-700">
              <Link to="/resources" className="hover:text-black transition-colors">Privacy</Link>
              <Link to="/faq" className="hover:text-black transition-colors">FAQs</Link>
              <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
              <Link to="/team" search={{ profile: undefined }} className="hover:text-black transition-colors">Careers</Link>
              <Link to="/funds" className="hover:text-black transition-colors">SEBI Disclosures</Link>
            </div>

            {/* Center: The Two Circular Stamps */}
            <div className="flex items-center gap-6">
              {/* SEBI AIFs */}
              <div className="flex flex-col items-center text-center">
                <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  SEBI
                </span>
                <div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-900 text-white flex flex-col items-center justify-center shadow-2xs">
                  <span className="font-mono font-black text-sm leading-none tracking-tight">||</span>
                  <span className="font-mono text-[5.5px] font-black uppercase tracking-tight leading-none mt-0.5">
                    AIFs
                  </span>
                </div>
                <span className="font-mono text-[7px] font-bold uppercase tracking-wider text-neutral-500 mt-1">
                  REGISTERED
                </span>
              </div>

              {/* UN PRI Signatory */}
              <div className="flex flex-col items-center text-center">
                <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  SIGNATORY
                </span>
                <div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-white text-neutral-950 flex flex-col items-center justify-center shadow-2xs">
                  <span className="font-mono font-black text-[11px] leading-none">PRI</span>
                  <span className="font-mono text-[5px] font-bold uppercase tracking-tight leading-none text-neutral-600 mt-0.5">
                    ETHICAL
                  </span>
                </div>
                <span className="font-mono text-[7px] font-bold uppercase tracking-wider text-neutral-500 mt-1">
                  PRINCIPLES
                </span>
              </div>
            </div>

            {/* Right: Copyright */}
            <div className="font-sans text-xs text-neutral-600 font-medium">
              ©{new Date().getFullYear()} Mount Judi Ventures
            </div>
          </div>
        </div>

        {/* ── Giant Architectural Brand Title (Directly underneath the card on the canvas) ── */}
        <div className="pt-12 sm:pt-16 pb-4 text-center select-none overflow-hidden">
          <div className="inline-flex items-start justify-center flex-nowrap relative">
            <h2 className="font-display font-black text-5xl sm:text-8xl md:text-9xl lg:text-[130px] uppercase tracking-[-0.03em] leading-none">
              <span className="text-[#036089]">MOUNT JUDI</span>
            </h2>
            <img
              src={faviconIcon}
              alt="Mount Judi ship emblem"
              aria-hidden="true"
              className="w-7 sm:w-11 md:w-16 lg:w-20 xl:w-24 h-auto object-contain -mt-1.5 sm:-mt-3 md:-mt-5 lg:-mt-7 xl:-mt-8 ml-1.5 sm:ml-2.5 md:ml-3 shrink-0 pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
