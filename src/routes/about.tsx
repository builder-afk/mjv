import { createFileRoute } from "@tanstack/react-router";
import aliPhoto from "@/assets/ali-panel.jpeg";
import ebaadPhoto from "@/assets/ebaad.jpg";
import sherifPhoto from "@/assets/sherif.jpeg";
import generalPhoto from "@/assets/general.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mount Judi Ventures | Capital, Conviction, Character" },
      {
        name: "description",
        content:
          "Mount Judi Ventures was founded by successful entrepreneurs with a vision of creating long-term wealth through fair, ethical, and mutually beneficial venture capital investments.",
      },
      { property: "og:title", content: "About Mount Judi Ventures" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

/* ─── Mount Judi Value System Data ─── */
const valueSystemSteps = [
  {
    title: "Innovation First",
    detail: "Backing next-generation enterprises that engineer practical, high-impact, disruptive innovation.",
    offset: "translate-y-3 sm:translate-y-4",
  },
  {
    title: "Global Scalability",
    detail: "Deploying capital into robust Indian products / solutions that can expand to international markets.",
    offset: "-translate-y-2 sm:-translate-y-3",
  },
  {
    title: "Exceptional Founders",
    detail: "Partnering with deeply committed ideators leading high-conviction teams.",
    offset: "translate-y-2 sm:translate-y-3",
  },
  {
    title: "Strong Unit Economics",
    detail: "Prioritising medium-term financial viability and absolute stakeholder alignment.",
    offset: "-translate-y-3 sm:-translate-y-4",
  },
  {
    title: "Ethical Value Creation",
    detail: "Targeting sectors that drive positive social impact while delivering robust economic returns.",
    offset: "translate-y-3 sm:translate-y-4",
  },
  {
    title: "Fair and Equitable",
    detail: "Fostering mutually beneficial, transparent structures that protect both capital and founders.",
    offset: "-translate-y-2 sm:-translate-y-3",
  },
  {
    title: "Responsible Investing",
    detail: "Avoiding industries that exploit or cause systemic social harm.",
    offset: "translate-y-2 sm:translate-y-3",
  },
  {
    title: "Financial Prudence",
    detail: "Avoiding interest-bearing debt vulnerabilities to reduce vulnerability to economic cycles and safeguard investor capital.",
    offset: "-translate-y-3 sm:-translate-y-4",
  },
];

function About() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. SECTION 01: INSTITUTIONAL THESIS & CODE OF ETHICS (WHY MJV EXISTS HERO) ── */}
      <section
        id="about-hero"
        className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 scroll-mt-28"
      >
        <div className="container-tight">
          {/* Top Showcase: Why MJV Exists Narrative + Photo with Floating Badges */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#036089] font-bold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                  <span>Institutional thesis</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-6">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 leading-[0.98]">
                    Why MJV exists.
                    <br />
                    <span className="text-neutral-800">Capital with character.</span>
                  </h2>

                  {/* Handwritten script annotation with curvy arrow (PedalStart Reference) */}
                  <div className="inline-flex items-center gap-2 text-[#036089] -rotate-2 select-none self-start mt-1">
                    <svg
                      width="34"
                      height="22"
                      viewBox="0 0 38 24"
                      fill="none"
                      className="text-[#036089] shrink-0"
                    >
                      <path
                        d="M2 14 C 8 4, 18 20, 28 6 C 30 4, 34 5, 36 6 M30 3 L36 6 L34 12"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-serif italic text-base text-[#036089] tracking-tight whitespace-nowrap">
                      Patient. Principled. Present.
                    </span>
                  </div>
                </div>

                {/* Bold Lead Paragraph */}
                <p className="font-sans text-lg sm:text-xl md:text-2xl font-medium text-neutral-900 leading-snug tracking-tight mb-6">
                  India is in the middle of a once-in-a-century rebuilding. New rails - payments,
                  identity, logistics, healthcare, energy - are being laid every quarter. The
                  founders building on top of them are bolder, more global, and more accountable
                  than any generation before them.
                </p>

                {/* Body Paragraphs */}
                <div className="space-y-4 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
                  <p>
                    But the venture model that backed the last decade was often misaligned with the
                    kind of companies India now needs to build. Short hold periods. Founder-hostile
                    terms. Capital that didn&apos;t care about how value was created.
                  </p>
                  <p>
                    We started MJV to be a different kind of partner. Patient. Principled. Present.
                  </p>
                  <p className="font-semibold text-neutral-950">
                    Capital with character - because the companies India needs deserve nothing less.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Photo with Floating Green/Teal Badges (PedalStart UI/UX) */}
            <div className="lg:col-span-7 relative mt-8 lg:mt-0 lg:-mr-6 xl:-mr-12">
              <div className="relative sm:pl-8 lg:pl-10">
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[16/10] w-full bg-neutral-100">
                  <img
                    src={generalPhoto}
                    alt="Mount Judi Ventures Partners and Team"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/20 font-bold">
                    Mount Judi Partners
                  </span>
                </div>

                {/* 3 Floating Badges Overlapping the Left Edge of Photo */}
                <div className="flex flex-col gap-3 sm:gap-3.5 absolute -left-2 sm:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-[200px] sm:w-[220px]">
                  {/* Badge 1 */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SECTION 02: INVESTMENT THESIS & UNDERWRITING PILLARS ── */}
      <section
        id="investment-thesis"
        className="relative overflow-x-clip bg-white text-neutral-950 pt-10 pb-12 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 border-t border-black/[0.08] scroll-mt-28"
      >
        <div className="container-tight">
          {/* Lead Statement */}
          <div className="max-w-4xl mb-7 sm:mb-9">
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-neutral-800 font-normal leading-snug tracking-tight">
              Mount Judi Ventures along with our co-investors backs{" "}
              <span className="font-bold text-neutral-950">
                technology transformation leading to innovation &amp; novel business models
              </span>
              , meeting the growing demand &amp; aspiration of people.
            </p>
          </div>

          {/* 5-Column Stats & Criteria Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 mb-8 sm:mb-10">
            {/* Pillar 1: High Potential Sectors */}
            <div className="flex flex-col">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl text-[#036089] tracking-tight leading-none">
                6 Sectors
              </div>
              <div className="my-1.5 sm:my-2">
                <CurlyBrace className="w-3.5 h-5 sm:h-6 text-[#036089]" />
              </div>
              <div className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <span className="font-bold block text-neutral-950 leading-snug mb-1">High Potential Sectors</span>
                Healthcare, EdTech, Digital / IoT / Tech, Consumer, Clean Energy, Trans. &amp; Logistics.
              </div>
            </div>

            {/* Pillar 2: Early Growth Stage */}
            <div className="flex flex-col">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl text-[#036089] tracking-tight leading-none">
                Seed → A
              </div>
              <div className="my-1.5 sm:my-2">
                <CurlyBrace className="w-3.5 h-5 sm:h-6 text-[#036089]" />
              </div>
              <div className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <span className="font-bold block text-neutral-950 leading-snug mb-1">Early Growth Stage</span>
                Seed, Pre-Series A, and Series A conviction cheques with committed follow-on reserves.
              </div>
            </div>

            {/* Pillar 3: Robust Team Credentials */}
            <div className="flex flex-col">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl text-[#036089] tracking-tight leading-none">
                Zero Risk
              </div>
              <div className="my-1.5 sm:my-2">
                <CurlyBrace className="w-3.5 h-5 sm:h-6 text-[#036089]" />
              </div>
              <div className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <span className="font-bold block text-neutral-950 leading-snug mb-1">Robust Team Credentials</span>
                Deep experience in sector. Resilient leadership with no key man risk taken.
              </div>
            </div>

            {/* Pillar 4: Product-Market Fit Established */}
            <div className="flex flex-col">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl text-[#036089] tracking-tight leading-none">
                IP &amp; USP
              </div>
              <div className="my-1.5 sm:my-2">
                <CurlyBrace className="w-3.5 h-5 sm:h-6 text-[#036089]" />
              </div>
              <div className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <span className="font-bold block text-neutral-950 leading-snug mb-1">Product-Market Fit</span>
                Established PMF with innovation &amp; IP-based competitive advantage and USP.
              </div>
            </div>

            {/* Pillar 5: Strong Unit Economics */}
            <div className="flex flex-col">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl text-[#036089] tracking-tight leading-none">
                &lt; 2 Yrs
              </div>
              <div className="my-1.5 sm:my-2">
                <CurlyBrace className="w-3.5 h-5 sm:h-6 text-[#036089]" />
              </div>
              <div className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <span className="font-bold block text-neutral-950 leading-snug mb-1">Strong Unit Economics</span>
                Profitable in &lt;2 yrs paired with large, expanding market potential.
              </div>
            </div>
          </div>

          {/* Asymmetric Staggered Photo Showcase */}
          <div className="flex flex-col md:flex-row items-start gap-5 lg:gap-6 w-full">
            {/* Photo 1: Left tall portrait */}
            <div className="w-full md:w-[30%] shrink-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 shadow-xs hover:shadow-md transition-shadow">
                <img
                  src={aliPhoto}
                  alt="Mount Judi Ventures partner panel"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Photo 2: Middle portrait - Subtle Offset DOWN (never cut off) */}
            <div className="w-full md:w-[33%] shrink-0 md:mt-4 lg:mt-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 shadow-xs hover:shadow-md transition-shadow">
                <img
                  src={ebaadPhoto}
                  alt="Ebaad Momin, Partner at Mount Judi Ventures"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Photo 3: Right wide landscape */}
            <div className="w-full md:flex-1 md:mt-2 lg:mt-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 shadow-xs hover:shadow-md transition-shadow">
                <img
                  src={sherifPhoto}
                  alt="Sherif Kottapurath, Partner at Mount Judi Ventures"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MOUNT JUDI VALUE SYSTEM (8 CORE VALUES) ── */}
      <section className="bg-white pt-8 sm:pt-12 md:pt-16 pb-16 md:pb-24 border-t border-black/[0.08]">
        <div className="container-tight">
          <div className="relative pb-10 md:pb-14">
            {/* Header Row */}
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-md">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-neutral-900 leading-tight tracking-tight">
                  Mount Judi
                  <br />
                  <span className="bg-[#036089] text-white px-4 py-0.5 rounded-full inline-block font-sans font-bold">
                    Value System
                  </span>
                </h2>
                <p className="mt-4 sm:mt-5 font-sans text-sm md:text-base text-neutral-700 leading-relaxed max-w-2xl">
                  Mount Judi is built on an enduring commitment to ethical value creation,
                  financial prudence, and founder alignment. We partner with high-conviction teams engineering
                  practical, high-impact innovation across global markets.
                </p>
              </div>

              {/* Top-Right Circular Badge */}
              <div className="shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#036089] flex items-center justify-center p-3 text-white shadow-md shadow-[#036089]/20">
                <ClinkingGlassesIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
            </div>

            {/* ─── HANGING PINNED CARDS SEQUENCE ON A STRING ─── */}
            <div className="relative mt-12 mb-14 pt-8">
              {/* Undulating String Curve (Matches 8 Columns with Exact Pin Alignment) */}
              <svg
                className="absolute top-7 left-0 right-0 w-full h-14 pointer-events-none hidden lg:block"
                viewBox="0 0 1000 70"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 15 44 C 30 43, 45 42, 62.5 42 C 104 42, 146 16, 187.5 16 C 229 16, 271 42, 312.5 42 C 354 42, 396 16, 437.5 16 C 479 16, 521 42, 562.5 42 C 604 42, 646 16, 687.5 16 C 729 16, 771 42, 812.5 42 C 854 42, 896 16, 937.5 16 C 955 16, 972 20, 988 24"
                  stroke="#036089"
                  strokeWidth="1.8"
                  strokeDasharray="4 3"
                  opacity="0.8"
                />
              </svg>

              {/* 8 Pinned Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5 relative z-10">
                {valueSystemSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className={`relative flex flex-col items-center transition-transform duration-300 ${step.offset}`}
                  >
                    {/* 3D Blue Pushpin pinning card to string */}
                    <BluePushpin className="absolute -top-4 z-20" />

                    {/* Hanging Card */}
                    <div className="w-full bg-white border-2 border-neutral-950 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 lg:p-3 xl:p-4 pt-8 sm:pt-9 lg:pt-9 min-h-[200px] sm:min-h-[240px] lg:min-h-[310px] xl:min-h-[295px] flex flex-col justify-between text-left shadow-xs hover:shadow-md transition-all duration-200">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-[#036089] font-bold">
                          0{idx + 1}
                        </div>
                        <h3 className="font-display text-xs sm:text-sm lg:text-[13px] xl:text-[14px] font-black uppercase text-neutral-950 leading-snug mt-1">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 font-sans text-xs sm:text-[13px] lg:text-[12px] xl:text-[13px] leading-relaxed text-neutral-800">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-Right Summary Paragraph */}
            <div className="flex justify-end pt-4">
              <p className="font-mono text-xs sm:text-sm text-neutral-700 max-w-xl text-right leading-relaxed">
                By maintaining financial prudence and avoiding interest-bearing debt vulnerabilities,
                we safeguard investor capital while ensuring resilient, long-term compounding across
                all economic cycles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CurlyBrace({ className = "w-3.5 h-5 sm:h-6 text-[#036089]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 C 7 2, 5 6, 5 11 C 5 13, 2 14, 2 14 C 2 14, 5 15, 5 17 C 5 22, 7 26, 12 26"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── 3D Glossy Teal Pushpin Component (#036089) ─── */
function BluePushpin({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Drop shadow */}
      <div className="absolute top-4 w-4 h-2 bg-[#036089]/25 rounded-full blur-[1.5px]" />
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" className="relative z-10">
        {/* Needle pin */}
        <path d="M14 24L14 31" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" />
        {/* Pin base collar */}
        <ellipse cx="14" cy="23" rx="6" ry="2.2" fill="#01344c" />
        <ellipse cx="14" cy="22" rx="4.8" ry="1.8" fill="#024866" />
        {/* Pin neck */}
        <path
          d="M9.5 15C9.5 19 11.2 22 14 22C16.8 22 18.5 19 18.5 15L17.5 11.5C17.5 11.5 10.5 11.5 10.5 11.5L9.5 15Z"
          fill="url(#pinGrad)"
        />
        {/* Sphere dome */}
        <circle cx="14" cy="9.5" r="8" fill="url(#domeGrad)" />
        {/* Specular high-gloss highlight */}
        <ellipse
          cx="11.5"
          cy="7"
          rx="3.5"
          ry="2"
          fill="#ffffff"
          opacity="0.85"
          transform="rotate(-28 11.5 7)"
        />
        <circle cx="16.5" cy="11.5" r="1.2" fill="#01344c" opacity="0.6" />
        <defs>
          <linearGradient
            id="pinGrad"
            x1="9.5"
            y1="11.5"
            x2="18.5"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#047bb0" />
            <stop offset="1" stopColor="#02425e" />
          </linearGradient>
          <radialGradient id="domeGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#29a3d8" />
            <stop offset="45%" stopColor="#036089" />
            <stop offset="100%" stopColor="#013248" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Clinking Champagne Glasses Icon ─── */
function ClinkingGlassesIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      {/* Left Champagne Flute */}
      <g transform="translate(1, 1) rotate(14 13 18)">
        <path d="M10 5 C10 13, 14 14, 14 14 C14 14, 18 13, 18 5 Z" fill="#ffffff" />
        <path
          d="M11.5 6 C11.5 11, 14 12.5, 14 12.5 C14 12.5, 16.5 11, 16.5 6 Z"
          fill="#ffffff"
          opacity="0.35"
        />
        <line
          x1="14"
          y1="14"
          x2="14"
          y2="23"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse cx="14" cy="23.5" rx="4" ry="1.4" fill="#ffffff" />
      </g>
      {/* Right Champagne Flute */}
      <g transform="translate(1, 1) rotate(-14 21 18)">
        <path d="M17 5 C17 13, 21 14, 21 14 C21 14, 25 13, 25 5 Z" fill="#ffffff" />
        <path
          d="M18.5 6 C18.5 11, 21 12.5, 21 12.5 C21 12.5, 23.5 11, 23.5 6 Z"
          fill="#ffffff"
          opacity="0.35"
        />
        <line
          x1="21"
          y1="14"
          x2="21"
          y2="23"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse cx="21" cy="23.5" rx="4" ry="1.4" fill="#ffffff" />
      </g>
      {/* Bubbles / Sparkle */}
      <circle cx="17.5" cy="6" r="1.1" fill="#ffffff" />
      <circle cx="19.5" cy="4.5" r="0.8" fill="#ffffff" />
      <circle cx="15.5" cy="4" r="0.8" fill="#ffffff" />
    </svg>
  );
}
