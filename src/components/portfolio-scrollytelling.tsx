import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export interface PortfolioNewsItem {
  id: string;
  company: string;
  slug: string;
  date: string;
  source: string;
  url: string;
  headline: string;
  category?: string;
  stat?: string;
}

export const portfolioNewsData: PortfolioNewsItem[] = [
  {
    id: "4basecare-b",
    company: "4baseCare",
    slug: "4basecare",
    category: "Precision Oncology",
    stat: "₹128 Cr",
    date: "28 Aug 2026",
    source: "THE ECONOMIC TIMES",
    url: "https://economictimes.indiatimes.com/tech/funding/infosys-backed-4basecare-raises-rs-128-crore-plans-to-take-its-cancer-testing-platform-global/articleshow/131638999.cms",
    headline: "Oncology Startup 4baseCare Closes Series B at ₹128 Crore Led by Infosys Trust",
  },
  {
    id: "skye-air-corridor",
    company: "Skye Air Mobility",
    slug: "skye-air",
    category: "Autonomous Drones",
    stat: "$9M Series B",
    date: "14 Oct 2026",
    source: "ANI NEWS",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    headline: "Skye Air Activates Doorstep Drone Delivery Corridors & Named Ericsson Global Winner",
  },
  {
    id: "staqu-jarvis",
    company: "Staqu Technologies",
    slug: "staqu",
    category: "Video AI",
    stat: "12+ States",
    date: "22 Aug 2026",
    source: "ENTREPRENEUR INDIA",
    url: "https://india.entrepreneur.com/news-and-trends/staqu-raises-inr-11-crore-in-pre-series-a-funding-led-by/425700",
    headline: "Staqu's JARVIS Platform Deployed Across 12+ State Police Forces & Critical Infrastructure",
  },
  {
    id: "dil-foods-scale",
    company: "Dil Foods",
    slug: "dil-foods",
    category: "Food Tech",
    stat: "$7.5M",
    date: "18 Jul 2026",
    source: "THE ECONOMIC TIMES",
    url: "https://economictimes.indiatimes.com/tech/funding/restaurant-enablement-startup-dil-foods-raises-7-5-million-in-funding/articleshow/131043529.cms",
    headline: "Dil Foods Raises $7.5 Million to Scale Virtual Kitchen Network Across 15+ Metro Cities",
  },
  {
    id: "internshala-upgrad",
    company: "Internshala",
    slug: "internshala",
    category: "EdTech & Careers",
    stat: "90% Stake",
    date: "27 Feb 2026",
    source: "BUSINESS WIRE",
    url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala",
    headline: "upGrad Completes Strategic 90% Acquisition of MJV-Backed Internshala",
  },
  {
    id: "convegenius-whatsapp",
    company: "ConveGenius",
    slug: "convegenius",
    category: "Conversational AI",
    stat: "100M+ Learners",
    date: "19 May 2026",
    source: "YOURSTORY",
    url: "https://yourstory.com/2021/03/edtech-bharat-dell-foundation-startup-convegenius-whatsapp-learning",
    headline: "ConveGenius Reaches 100M+ Public School Students via WhatsApp-Native AI Tutoring",
  },
  {
    id: "hexalog-customs",
    company: "Hexalog Systems",
    slug: "hexalog",
    category: "Supply Chain",
    stat: "$4M Round",
    date: "12 Feb 2026",
    source: "INC42",
    url: "https://inc42.com/buzz/hexalog-secures-4-mn-funding-to-digitise-cross-border-supply-chains/",
    headline: "Hexalog Secures $4M to Digitize Cross-Border Supply Chains & Documentation Workflows",
  },
  {
    id: "freshtohome-amazon",
    company: "FreshToHome",
    slug: "freshtohome",
    category: "AgriTech",
    stat: "$104M Series D",
    date: "21 Feb 2023",
    source: "TECHCRUNCH",
    url: "https://techcrunch.com/2023/02/21/amazon-backs-indian-meat-startup-freshtohome-in-104-million-funding/",
    headline: "Amazon Backs FreshToHome in $104 Million Series D Funding Round",
  },
  {
    id: "protein-chef-arr",
    company: "Protein Chef",
    slug: "protein-chef",
    category: "Nutrition",
    stat: "₹100 Cr ARR",
    date: "15 Jan 2024",
    source: "YOURSTORY",
    url: "https://yourstory.com/2025/07/lo-foods-nears-rs-100-cr-arr-3m-funding-protein-chef",
    headline: "Protein Chef Nears ₹100 Cr ARR with High-Protein & Diabetic-Safe Nutritional Line",
  },
  {
    id: "innaccel-devices",
    company: "InnAccel Technologies",
    slug: "innaccel",
    category: "MedTech",
    stat: "100+ Patents",
    date: "16 Oct 2020",
    source: "YOURSTORY",
    url: "https://yourstory.com/2020/10/funding-alert-medtech-startup-innaccel-mount-judi-ventures",
    headline: "InnAccel's Stanford Biodesign Medical Devices Scale to Global Hospital Networks",
  },
  {
    id: "sp-robotic-works-a",
    company: "SP Robotic Works",
    slug: "sp-robotic-works",
    category: "STEM Robotics",
    stat: "$3M Series A",
    date: "18 Aug 2021",
    source: "TIMES OF INDIA",
    url: "https://timesofindia.indiatimes.com/sp-robotic-works-raises-usd-3-mn-in-funding-round-led-by-mount-judi-india-growth-fund/articleshow/84893316.cms",
    headline: "SP Robotic Works Raises $3 Mn Series A Led by Mount Judi India Growth Fund",
  },
  {
    id: "thimblerr-seed",
    company: "Thimblerr",
    slug: "thimblerr",
    category: "B2B Fashion",
    stat: "Pre-Seed",
    date: "24 Nov 2023",
    source: "INDIAN STARTUP TIMES",
    url: "https://www.indianstartuptimes.com/funding/b2b-fashion-tech-startup-thimblerr-raises-seed-round-led-by-mount-judi-ventures/",
    headline: "B2B Fashion-Tech Startup Thimblerr Raises Seed Round Led by Mount Judi Ventures",
  },
  {
    id: "freshleaf-seed",
    company: "Freshleaf Teas",
    slug: "freshleaf",
    category: "Consumer Brands",
    stat: "₹1 Cr Seed",
    date: "10 Jun 2024",
    source: "FINANCIAL EXPRESS",
    url: "https://www.financialexpress.com/business/brandwagon-freshleaf-secures-rs-1-crore-in-seed-funding-round-led-by-mount-judi-ventures-3518938/",
    headline: "Freshleaf Secures ₹1 Crore Seed Funding Led by Mount Judi to Expand Artisanal Blends",
  },
  {
    id: "rubick-seed",
    company: "Rubick.ai",
    slug: "rubick-ai",
    category: "Catalog AI",
    stat: "Seed",
    date: "15 Sep 2022",
    source: "INC42",
    url: "https://inc42.com/",
    headline: "Rubick.ai Secures Seed Funding to Automate E-Commerce Cataloguing with Generative AI",
  },
  {
    id: "boingg-preseries",
    company: "Boingg!",
    slug: "boingg",
    category: "D2C Living",
    stat: "Pre-Series A",
    date: "28 Apr 2022",
    source: "YOURSTORY",
    url: "https://yourstory.com/",
    headline: "Custom Children's Furniture Brand Boingg! Raises Pre-Series A Cheque from Mount Judi",
  },
  {
    id: "extramile-b2b",
    company: "Extramile Play",
    slug: "extramile-play",
    category: "B2B SaaS",
    stat: "Institutional",
    date: "14 Dec 2023",
    source: "ENTRACKR",
    url: "https://entrackr.com/",
    headline: "Extramile Play Raises Capital from Mount Judi to Power Enterprise Team Engagement",
  },
  {
    id: "skye-air-urban",
    company: "Skye Air Mobility",
    slug: "skye-air",
    category: "Drone Logistics",
    stat: "$9 Million",
    date: "26 Mar 2026",
    source: "YOURSTORY",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    headline: "Skye Air Secures $9 Million Funding to Expand Urban Drone Delivery Infrastructure",
  },
  {
    id: "4basecare-genomics",
    company: "4baseCare",
    slug: "4basecare",
    category: "Genomics",
    stat: "Adyar Hospital",
    date: "04 May 2024",
    source: "BIOSPECTRUM",
    url: "https://www.biospectrumindia.com/",
    headline: "4baseCare Partners with Adyar Cancer Institute to Standardize South Asian Genomics Profiling",
  },
  {
    id: "mjv-cat2-fund",
    company: "Mount Judi Ventures",
    slug: "mount-judi-india-growth-fund",
    category: "Fund Inception",
    stat: "Cat-II AIF",
    date: "15 Nov 2020",
    source: "VCCIRCLE",
    url: "https://www.vccircle.com/",
    headline: "Mount Judi India Growth Fund Closes Cat-II AIF to Back Sustainable & Ethical Ventures",
  },
  {
    id: "gooru-navigator",
    company: "Gooru Navigator",
    slug: "gooru",
    category: "EdTech",
    stat: "Vernacular Ed",
    date: "10 Jan 2025",
    source: "EDTECH REVIEW",
    url: "https://edtechreview.in/",
    headline: "Gooru Learning Navigator Reaches Millions of Vernacular Learners Across Public School Systems",
  },
];

function NewsCard({ item }: { item: PortfolioNewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/90 hover:border-neutral-900 hover:shadow-md transition-all duration-300 h-[240px] sm:h-[260px] lg:h-[275px] shrink-0"
    >
      {/* Top: Date */}
      <div className="font-sans text-xs text-neutral-500 font-medium tracking-normal">
        {item.date}
      </div>

      {/* Middle: Headline with Red Accent Line */}
      <div className="my-auto py-2">
        <h3 className="font-display font-bold text-base sm:text-[17px] text-neutral-950 leading-snug tracking-tight group-hover:text-[#036089] transition-colors line-clamp-3">
          {item.headline}
        </h3>
        <div className="w-8 h-[2.5px] bg-[#991b1b] mt-3 sm:mt-3.5 group-hover:w-12 transition-all duration-300" />
      </div>

      {/* Bottom: Publication Source */}
      <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-neutral-100/90">
        <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase tracking-widest truncate">
          {item.source}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
      </div>
    </a>
  );
}

export function PortfolioNewsScrollytelling() {
  // Sliced into 4 distinct sets of 5 items
  const col1 = [
    portfolioNewsData[0],
    portfolioNewsData[4],
    portfolioNewsData[8],
    portfolioNewsData[12],
    portfolioNewsData[16],
  ];
  const col2 = [
    portfolioNewsData[1],
    portfolioNewsData[5],
    portfolioNewsData[9],
    portfolioNewsData[13],
    portfolioNewsData[17],
  ];
  const col3 = [
    portfolioNewsData[2],
    portfolioNewsData[6],
    portfolioNewsData[10],
    portfolioNewsData[14],
    portfolioNewsData[18],
  ];
  const col4 = [
    portfolioNewsData[3],
    portfolioNewsData[7],
    portfolioNewsData[11],
    portfolioNewsData[15],
    portfolioNewsData[19],
  ];

  return (
    <section
      id="portfolio-news-insights"
      className="w-full bg-[var(--paper)] pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 border-t border-black/10 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 sm:pb-5 border-b border-black/[0.08] mb-6 sm:mb-8">
          <div className="min-w-0">
            <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-none whitespace-nowrap">
              Portfolio News &amp; Insights
            </h1>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-neutral-900 hover:text-[#036089] transition-colors whitespace-nowrap shrink-0 sm:pb-1"
          >
            <span>Explore all news</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── VERTICAL MARQUEE STREAM CONTAINER ── */}
        <div className="relative h-[680px] sm:h-[720px] lg:h-[780px] overflow-hidden select-none">
          {/* Top and Bottom Fade Gradients */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[var(--paper)] via-[var(--paper)]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[var(--paper)] via-[var(--paper)]/80 to-transparent z-10" />

          {/* 4 Multi-Speed Vertical Streams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 h-full items-start">
            {/* Column 1 (Downward/Normal Stream) */}
            <div className="flex flex-col gap-4 sm:gap-5 animate-marquee-vertical [animation-duration:46s]">
              {[...col1, ...col1].map((item, i) => (
                <NewsCard key={`c1-${item.id}-${i}`} item={item} />
              ))}
            </div>

            {/* Column 2 (Reverse Stream) */}
            <div className="hidden sm:flex flex-col gap-4 sm:gap-5 animate-marquee-vertical-reverse [animation-duration:54s]">
              {[...col2, ...col2].map((item, i) => (
                <NewsCard key={`c2-${item.id}-${i}`} item={item} />
              ))}
            </div>

            {/* Column 3 (Normal Stream) */}
            <div className="hidden lg:flex flex-col gap-4 sm:gap-5 animate-marquee-vertical [animation-duration:42s]">
              {[...col3, ...col3].map((item, i) => (
                <NewsCard key={`c3-${item.id}-${i}`} item={item} />
              ))}
            </div>

            {/* Column 4 (Reverse Stream) */}
            <div className="hidden lg:flex flex-col gap-4 sm:gap-5 animate-marquee-vertical-reverse [animation-duration:50s]">
              {[...col4, ...col4].map((item, i) => (
                <NewsCard key={`c4-${item.id}-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
