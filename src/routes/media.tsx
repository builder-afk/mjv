import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { ArrowUpRight, ArrowRight, ArrowLeft, Asterisk, Sparkle, ChevronDown, ExternalLink, Newspaper, Sparkles, Building2, Calendar, Radio } from "lucide-react";
import { companies } from "../lib/portfolio-data";
import { CategoryLeadersGrid } from "@/components/portfolio-showcase";

import skyeAirImg from "@/assets/portfolio/skye-air.jpg";
import dilFoodsImg from "@/assets/portfolio/dil-foods.jpg";
import staquImg from "@/assets/portfolio/staqu.jpg";
import basecareImg from "@/assets/portfolio/4basecare.jpg";
import convegeniusImg from "@/assets/portfolio/convegenius.jpg";
import loFoodsImg from "@/assets/portfolio/lo-foods.jpg";
import heroMountainBg from "@/assets/ali-panel.jpeg";

import press_yourstory_7485048f98 from "@/assets/press/yourstory-7485048f98.webp";
import press_inc42_a82a6a8fdf from "@/assets/press/inc42-a82a6a8fdf.webp";
import press_economictimes_8fd6fc5066 from "@/assets/press/economictimes-8fd6fc5066.webp";
import press_inc42_0ce28eb9d7 from "@/assets/press/inc42-0ce28eb9d7.webp";
import press_yourstory_85bf159e82 from "@/assets/press/yourstory-85bf159e82.webp";
import press_entrepreneur_3043f0bbb8 from "@/assets/press/entrepreneur-3043f0bbb8.webp";
import dilFoodsPressET from "@/assets/press/dil-foods-et-funding.webp";
import press_yourstory_268bb34d89 from "@/assets/press/yourstory-268bb34d89.webp";
import press_yourstory_57a8c7fb65 from "@/assets/press/yourstory-57a8c7fb65.webp";
import press_techcrunch_9328f8a3a8 from "@/assets/press/techcrunch-9328f8a3a8.webp";
import press_fortuneindia_ac5d9ed415 from "@/assets/press/fortuneindia-ac5d9ed415.webp";
import press_timesofindia_63b1d147bf from "@/assets/press/timesofindia-63b1d147bf.webp";
import press_inc42_42ca269a87 from "@/assets/press/inc42-42ca269a87.webp";

import skyeAirFounder from "@/assets/founders/skyeair.jpeg";
import basecareFounder from "@/assets/founders/4basecare.jpeg";
import staquFounder from "@/assets/founders/staqu.jpeg";
import innaccelFounder from "@/assets/founders/inaccel.jpeg";
import aliPhoto from "@/assets/ali-panel.jpeg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      {
        title: "Media & Press Coverage | Mount Judi Ventures",
      },
      {
        name: "description",
        content:
          "Verified press coverage and commercial milestones across the Mount Judi Ventures portfolio. Deep-tech logistics, precision oncology, and computer vision records.",
      },
      {
        property: "og:title",
        content: "Media & Press Coverage | Mount Judi Ventures",
      },
      { property: "og:url", content: "/media" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

/* ─── Featured Editorial Highlights with Rich Media ─── */
export interface FeaturedStory {
  company: string;
  slug: string;
  headline: string;
  summary: string;
  source: string;
  url: string;
  category: "FUNDING" | "PRODUCT" | "PARTNERSHIP" | "RECOGNITION" | "FEATURE";
  date: string;
  image: string;
  secondaryImage?: string;
  readTime: string;
}

const featuredStories: FeaturedStory[] = [
  {
    company: "Skye Air",
    slug: "skye-air",
    headline: "Skye Air Begins AI-Powered Doorstep Drone Delivery in Gurugram",
    summary:
      "Skye Air has launched AI-powered doorstep delivery services in Gurugram, deploying unmanned drones and artificial intelligence-enabled robots to deliver packages directly to customers' homes. Connected with physical AI infrastructure and DGCA corridors, Skye Air has completed millions of commercial deliveries across healthcare and e-commerce.",
    source: "ANI",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    category: "PRODUCT",
    date: "March 2026",
    image: press_yourstory_7485048f98,
    secondaryImage: skyeAirImg,
    readTime: "3 MIN READ",
  },
  {
    company: "Skye Air",
    slug: "skye-air",
    headline: "Ankit Kumar Explains Skye Air's Business Model and Brand Partnerships",
    summary:
      "In a Startup Central feature, Skye Air Founder Ankit Kumar detailed the company's business model, revenue architecture, and the enterprise hospital and retail partnerships powering its drone logistics network across India's last-mile delivery ecosystem.",
    source: "Startup Central",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    category: "FEATURE",
    date: "March 2026",
    image: press_inc42_a82a6a8fdf,
    secondaryImage: skyeAirImg,
    readTime: "4 MIN READ",
  },
  {
    company: "4baseCare",
    slug: "4basecare",
    headline: "4baseCare Raises ₹128 Crore Series B to Scale Precision Oncology Globally",
    summary:
      "Precision oncology startup 4baseCare has closed a ₹128 Crore Series B funding round backed by Infosys Technology Trust and institutional co-investors, taking its South Asian cancer genomics testing platform to global markets. Its proprietary panels address population-specific genetic variants previously absent from Western datasets.",
    source: "Economic Times",
    url: "https://economictimes.indiatimes.com/tech/funding/infosys-backed-4basecare-raises-rs-128-crore-plans-to-take-its-cancer-testing-platform-global/articleshow/131638999.cms",
    category: "FUNDING",
    date: "August 2026",
    image: press_economictimes_8fd6fc5066,
    secondaryImage: basecareImg,
    readTime: "4 MIN READ",
  },
  {
    company: "Hexalog",
    slug: "hexalog",
    headline: "Hexalog Secures $4 Mn to Digitise Cross-Border Supply Chains",
    summary:
      "Hexalog, an end-to-end import-export management platform, has raised $4 million in funding to accelerate its digitisation of cross-border trade logistics for Indian enterprises. The platform replaces legacy spreadsheets with integrated procurement, documentation, and compliance workflows.",
    source: "Inc42",
    url: "https://inc42.com/buzz/hexalog-secures-4-mn-funding-to-digitise-cross-border-supply-chains/",
    category: "FUNDING",
    date: "February 2026",
    image: press_inc42_0ce28eb9d7,
    readTime: "3 MIN READ",
  },
  {
    company: "InnAccel Technologies",
    slug: "innaccel",
    headline: "InnAccel's Life-Saving Medical Devices Reach Emerging Market Hospitals",
    summary:
      "InnAccel Technologies manufactures clinically validated medical devices across maternal health, critical care, and neonatal care. Holding 100+ patents and Stanford Biodesign lineage, InnAccel hardware delivers 50% lower device costs than Western alternatives for district and emerging-market hospitals.",
    source: "YourStory",
    url: "https://yourstory.com/2020/10/funding-alert-medtech-startup-innaccel-mount-judi-ventures",
    category: "PRODUCT",
    date: "October 2020",
    image: press_yourstory_85bf159e82,
    readTime: "5 MIN READ",
  },
  {
    company: "Staqu",
    slug: "staqu",
    headline: "Staqu's JARVIS Platform Deployed Across 12+ State Police Forces",
    summary:
      "Staqu Technologies operates the JARVIS AI video intelligence platform. Deployed across 12 state police forces and 100+ enterprise clients, JARVIS secures high-stakes environments including the Ayodhya Ram Mandir and G20 Delhi summit, holding 4 patents and 25 research papers.",
    source: "Entrepreneur India",
    url: "https://india.entrepreneur.com/news-and-trends/staqu-raises-inr-11-crore-in-pre-series-a-funding-led-by/425700",
    category: "PRODUCT",
    date: "August 2026",
    image: press_entrepreneur_3043f0bbb8,
    secondaryImage: staquImg,
    readTime: "4 MIN READ",
  },
  {
    company: "Dil Foods",
    slug: "dil-foods",
    headline: "Dil Foods Raises $7.5 Million to Scale Virtual Kitchen Network",
    summary:
      "Restaurant enablement startup Dil Foods has raised $7.5 million to expand its asset-light virtual kitchen model, enabling existing restaurants to operate regional food brands from their current kitchens without extra capex. The model was validated on Shark Tank India at ₹75 crore valuation.",
    source: "Economic Times",
    url: "https://economictimes.indiatimes.com/tech/funding/restaurant-enablement-startup-dil-foods-raises-7-5-million-in-funding/articleshow/131043529.cms",
    category: "FUNDING",
    date: "July 2026",
    image: dilFoodsPressET,
    secondaryImage: dilFoodsImg,
    readTime: "3 MIN READ",
  },
  {
    company: "ConveGenius",
    slug: "convegenius",
    headline: "ConveGenius Reaches 100M+ Learners via WhatsApp-Native AI Tutoring",
    summary:
      "ConveGenius scales conversational AI tutoring to 100+ million public school students across 9 state government partnerships. The platform delivers curriculum-aligned assessments via WhatsApp, requiring zero hardware upgrades or app downloads.",
    source: "YourStory",
    url: "https://yourstory.com/2021/03/edtech-bharat-dell-foundation-startup-convegenius-whatsapp-learning",
    category: "PRODUCT",
    date: "May 2026",
    image: press_yourstory_268bb34d89,
    secondaryImage: convegeniusImg,
    readTime: "4 MIN READ",
  },
  {
    company: "Protein Chef",
    slug: "protein-chef",
    headline: "Protein Chef Nears ₹100 Cr ARR with $3.5M Series B Funding",
    summary:
      "Functional health food brand Protein Chef is nearing ₹100 crore annual recurring revenue after closing a $3.5 million Series B round. Backed by Rainmatter and Mount Judi Ventures, it focuses on measurable metabolic health outcomes across clean nutritional products.",
    source: "YourStory",
    url: "https://yourstory.com/2025/07/lo-foods-nears-rs-100-cr-arr-3m-funding-protein-chef",
    category: "FUNDING",
    date: "July 2025",
    image: press_yourstory_57a8c7fb65,
    secondaryImage: loFoodsImg,
    readTime: "3 MIN READ",
  },
  {
    company: "FreshToHome",
    slug: "freshtohome",
    headline: "Amazon Backs FreshToHome in $104 Million Series D Funding Round",
    summary:
      "India and UAE's leading fresh fish and meat platform FreshToHome closed a $104 million Series D round led by Amazon Smbhav Venture Fund. It operates a direct farm-to-fork supply chain with 3,000+ fishermen and farmers, eliminating chemical preservatives across India and the GCC.",
    source: "TechCrunch",
    url: "https://techcrunch.com/2023/02/21/amazon-freshtohome-india/",
    category: "FUNDING",
    date: "February 2023",
    image: press_techcrunch_9328f8a3a8,
    readTime: "4 MIN READ",
  },
  {
    company: "Internshala",
    slug: "internshala",
    headline: "upGrad Acquires World's Largest Internship Platform Internshala",
    summary:
      "upGrad acquired a 90% stake in Internshala, the internship network connecting 20M+ registered students to 300,000+ employers. The transaction connects higher education credentials directly to corporate hiring pipelines across India.",
    source: "Business Wire",
    url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala",
    category: "PARTNERSHIP",
    date: "February 2026",
    image: press_fortuneindia_ac5d9ed415,
    readTime: "3 MIN READ",
  },
  {
    company: "SP Robotic Works",
    slug: "sp-robotic-works",
    headline: "SP Robotic Works Raises $3 Mn Series A Led by Mount Judi India Growth Fund",
    summary:
      "AI-based robotics and coding edutainment platform SP Robotic Works raised $3 million in Series A funding led by Mount Judi India Growth Fund, reaching 150,000+ students across India, UAE and Singapore with proprietary robotics kits and maker curriculum.",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/sp-robotic-works-raises-usd-3-mn-in-funding-round-led-by-mount-judi-india-growth-fund/articleshow/84893316.cms",
    category: "FUNDING",
    date: "August 2021",
    image: press_timesofindia_63b1d147bf,
    readTime: "3 MIN READ",
  },
  {
    company: "Rubick.ai",
    slug: "rubickai",
    headline: "Rubick.ai (erstwhile Text Mercato) Raises INR 20 Cr Pre-Series A",
    summary:
      "AI-powered catalog and e-commerce content automation platform Rubick.ai raised INR 20 crore in Pre-Series A funding led by 1Crowd, Mount Judi Ventures and Innospark Ventures, serving global marketplaces across 30+ categories and 15+ languages.",
    source: "Inc42",
    url: "https://inc42.com/buzz/content-startup-text-mercato-raises-funding-to-launch-diy-platform-for-small-brands/",
    category: "FUNDING",
    date: "April 2022",
    image: press_inc42_42ca269a87,
    readTime: "3 MIN READ",
  },
  {
    company: "Mount Judi Ventures",
    slug: "",
    headline: "Mohammed Ali Shariff Speaks at CFA Society India Conference",
    summary:
      "Mount Judi Ventures' Managing Partner Mohammed Ali Shariff participated as a featured keynote at the CFA Society India Annual Conference, addressing fiduciary allocation, ethical venture governance, and the future of impact-aligned AIFs in India.",
    source: "CFA Society India",
    url: "/thesis",
    category: "RECOGNITION",
    date: "Annual 2025",
    image: heroMountainBg,
    readTime: "4 MIN READ",
  },
];

const categoryColors: Record<string, string> = {
  FUNDING: "rounded-full text-neutral-900 bg-[#d8fb35] border-[#d8fb35]",
  PRODUCT: "rounded-full text-white bg-[#3b66ff] border-[#3b66ff]",
  PARTNERSHIP: "rounded-full text-neutral-900 bg-white border-black/10",
  RECOGNITION: "rounded-full text-neutral-900 bg-neutral-100 border-black/10",
  FEATURE: "rounded-full text-white bg-neutral-950 border-neutral-950",
};

export interface BentoStoryItem {
  id: string;
  type: "stat" | "feature";
  company: string;
  slug: string;
  source: string;
  url: string;
  date: string;
  stat?: string;
  statDescription?: string;
  bg?: string;
  showArrow?: boolean;
  founderName?: string;
  founderRole?: string;
  photo?: string;
  headline?: string;
  quote?: string;
}

const bentoStories: BentoStoryItem[] = [
  // ── ROW 1 (6 cols on xl: 1 + 1 + 2 + 1 + 1) ──
  {
    id: "4basecare-funding",
    type: "stat",
    company: "4baseCare",
    slug: "4basecare",
    stat: "₹128 Cr",
    statDescription: "Series B raised backed by Infosys Technology Trust to scale precision oncology genomics globally.",
    bg: "bg-[#ecfadc]",
    source: "Economic Times",
    url: "https://economictimes.indiatimes.com/tech/funding/infosys-backed-4basecare-raises-rs-128-crore-plans-to-take-its-cancer-testing-platform-global/articleshow/131638999.cms",
    date: "August 2026",
    showArrow: true,
  },
  {
    id: "hexalog-funding",
    type: "stat",
    company: "Hexalog",
    slug: "hexalog",
    stat: "$4 Mn",
    statDescription: "Secured to digitise cross-border import-export supply chains and trade documentation for Indian enterprises.",
    bg: "bg-[#e1f0fe]",
    source: "Inc42",
    url: "https://inc42.com/buzz/hexalog-secures-4-mn-funding-to-digitise-cross-border-supply-chains/",
    date: "February 2026",
  },
  {
    id: "skye-air-delivery",
    type: "feature",
    company: "Skye Air",
    slug: "skye-air",
    founderName: "Ankit Kumar",
    founderRole: "Founder & CEO",
    photo: skyeAirFounder,
    headline: "Skye Air Begins AI-Powered Doorstep Drone Delivery in Gurugram",
    quote:
      "Skye Air has launched AI-powered doorstep delivery services in Gurugram, deploying unmanned drones and robots to deliver packages directly to customers' homes, backed by DGCA corridors across healthcare and e-commerce.",
    source: "ANI",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    date: "March 2026",
  },
  {
    id: "dil-foods-scale",
    type: "stat",
    company: "Dil Foods",
    slug: "dil-foods",
    stat: "$7.5M",
    statDescription: "Raised to expand virtual kitchen network across India, validated on Shark Tank India at ₹75 crore valuation.",
    bg: "bg-[#fae8f3]",
    source: "Economic Times",
    url: "https://economictimes.indiatimes.com/tech/funding/restaurant-enablement-startup-dil-foods-raises-7-5-million-in-funding/articleshow/131043529.cms",
    date: "July 2026",
  },
  {
    id: "convegenius-whatsapp",
    type: "stat",
    company: "ConveGenius",
    slug: "convegenius",
    stat: "100M+",
    statDescription: "Public school students reached via conversational AI tutoring on WhatsApp across 9 state government partnerships.",
    bg: "bg-[#fff9c8]",
    source: "YourStory",
    url: "https://yourstory.com/2021/03/edtech-bharat-dell-foundation-startup-convegenius-whatsapp-learning",
    date: "May 2026",
    showArrow: true,
  },

  // ── ROW 2 (6 cols on xl: 2 + 1 + 1 + 2) ──
  {
    id: "staqu-jarvis",
    type: "feature",
    company: "Staqu Technologies",
    slug: "staqu",
    founderName: "Atul Rai",
    founderRole: "Founder & CEO",
    photo: staquFounder,
    headline: "Staqu's JARVIS Platform Deployed Across 12+ State Police Forces",
    quote:
      "JARVIS secures high-stakes environments including the Ayodhya Ram Mandir and G20 Delhi summit, holding 4 patents and 25 research papers with deployments across 12 state police forces and 100+ enterprise clients.",
    source: "Entrepreneur India",
    url: "https://india.entrepreneur.com/news-and-trends/staqu-raises-inr-11-crore-in-pre-series-a-funding-led-by/425700",
    date: "August 2026",
  },
  {
    id: "freshtohome-amazon",
    type: "stat",
    company: "FreshToHome",
    slug: "freshtohome",
    stat: "$104M",
    statDescription: "Series D led by Amazon Smbhav Venture Fund, operating direct farm-to-fork supply chain with 3,000+ fishermen & farmers.",
    bg: "bg-[#e1f0fe]",
    source: "TechCrunch",
    url: "https://techcrunch.com/2023/02/21/amazon-freshtohome-india/",
    date: "February 2023",
  },
  {
    id: "protein-chef-arr",
    type: "stat",
    company: "Protein Chef",
    slug: "protein-chef",
    stat: "₹100 Cr",
    statDescription: "Annual recurring revenue in functional health foods backed by Rainmatter and MJV with $3.5M Series B funding.",
    bg: "bg-[#ecfadc]",
    source: "YourStory",
    url: "https://yourstory.com/2025/07/lo-foods-nears-rs-100-cr-arr-3m-funding-protein-chef",
    date: "July 2025",
  },
  {
    id: "innaccel-devices",
    type: "feature",
    company: "InnAccel Technologies",
    slug: "innaccel",
    founderName: "Siraj Dhanani",
    founderRole: "Founder & CEO",
    photo: innaccelFounder,
    headline: "InnAccel's Life-Saving Medical Devices Reach Emerging Market Hospitals",
    quote:
      "Holding 100+ patents and Stanford Biodesign lineage, InnAccel manufactures clinically validated medical devices across maternal health and neonatal care at 50% lower cost than Western alternatives.",
    source: "YourStory",
    url: "https://yourstory.com/2020/10/funding-alert-medtech-startup-innaccel-mount-judi-ventures",
    date: "October 2020",
  },

  // ── ROW 3 (6 cols on xl: 1 + 1 + 2 + 1 + 1) — INCLUDES ALL 3 USER REQUESTED STORIES ──
  {
    id: "skye-air-ericsson",
    type: "stat",
    company: "Skye Air",
    slug: "skye-air",
    stat: "6 Winners",
    statDescription:
      "Emerged among the 6 winners of the Ericsson Innovation Challenge 2026, recognized by Union Minister Jyotiraditya Scindia at IMC for 5G autonomous drone delivery.",
    bg: "bg-[#ecfadc]",
    source: "Ericsson & IMC",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    date: "October 2026",
    showArrow: true,
  },
  {
    id: "4basecare-wia",
    type: "stat",
    company: "4baseCare",
    slug: "4basecare",
    stat: "Cancer Inst.",
    statDescription:
      "Partnered with Cancer Institute (WIA) in Adyar, Chennai to expand access to comprehensive genomic profiling (CGP) and precision oncology.",
    bg: "bg-[#e1f0fe]",
    source: "BioSpectrum",
    url: "https://economictimes.indiatimes.com/tech/funding/infosys-backed-4basecare-raises-rs-128-crore-plans-to-take-its-cancer-testing-platform-global/articleshow/131638999.cms",
    date: "2026",
    showArrow: true,
  },
  {
    id: "mjv-cfa-keynote",
    type: "feature",
    company: "Mount Judi Ventures",
    slug: "",
    founderName: "Mohammed Ali Shariff",
    founderRole: "Managing Partner",
    photo: aliPhoto,
    headline: "Mohammed Ali Shariff Speaks at CFA Society India Conference",
    quote:
      "Mount Judi Ventures' Managing Partner Mohammed Ali Shariff addressed the CFA Society India Annual Conference on fiduciary allocation, ethical venture governance, and the future of impact-aligned AIFs in India.",
    source: "CFA Society India",
    url: "/thesis",
    date: "Annual 2025",
  },
  {
    id: "sprw-series-a",
    type: "stat",
    company: "SP Robotic Works",
    slug: "sp-robotic-works",
    stat: "$3 Mn",
    statDescription: "Series A led by Mount Judi India Growth Fund, reaching 150,000+ students across India, UAE and Singapore with maker robotics.",
    bg: "bg-[#fae8f3]",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/sp-robotic-works-raises-usd-3-mn-in-funding-round-led-by-mount-judi-india-growth-fund/articleshow/84893316.cms",
    date: "August 2021",
  },
  {
    id: "rubickai-funding",
    type: "stat",
    company: "Rubick.ai",
    slug: "rubickai",
    stat: "INR 20 Cr",
    statDescription: "Pre-Series A funding to scale catalog automation and e-commerce content across 30+ categories and 15+ languages.",
    bg: "bg-[#fff9c8]",
    source: "Inc42",
    url: "https://inc42.com/buzz/content-startup-text-mercato-raises-funding-to-launch-diy-platform-for-small-brands/",
    date: "April 2022",
    showArrow: true,
  },

  // ── ROW 4 (6 cols on xl: 2 + 1 + 1 + 2) ──
  {
    id: "internshala-upgrad",
    type: "feature",
    company: "Internshala",
    slug: "internshala",
    founderName: "Sarvesh Agrawal",
    founderRole: "Founder & CEO",
    photo: press_fortuneindia_ac5d9ed415,
    headline: "upGrad Acquires World's Largest Internship Platform Internshala",
    quote:
      "upGrad acquired a 90% stake in Internshala, connecting 20M+ registered students to 300,000+ employers, linking higher education credentials directly to corporate hiring pipelines across India.",
    source: "Business Wire",
    url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala",
    date: "February 2026",
  },
  {
    id: "extramile-enterprise",
    type: "stat",
    company: "ExtraMile",
    slug: "extramile",
    stat: "100+",
    statDescription: "Enterprise clients onboarded for workplace culture and employee engagement programs across India.",
    bg: "bg-[#ecfadc]",
    source: "Venture Record",
    url: "/portfolio",
    date: "2025",
    showArrow: true,
  },
  {
    id: "skye-air-dgca",
    type: "stat",
    company: "Skye Air",
    slug: "skye-air",
    stat: "DGCA Corridors",
    statDescription: "First commercial BVLOS flights approved under DGCA air corridors for healthcare cold-chain distribution across India.",
    bg: "bg-[#e1f0fe]",
    source: "Ministry of Civil Aviation",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    date: "2025",
  },
  {
    id: "skye-air-partnerships",
    type: "feature",
    company: "Skye Air",
    slug: "skye-air",
    founderName: "Ankit Kumar",
    founderRole: "Founder & CEO",
    photo: press_inc42_a82a6a8fdf,
    headline: "Ankit Kumar Explains Skye Air's Business Model and Brand Partnerships",
    quote:
      "In a Startup Central feature, Skye Air Founder Ankit Kumar detailed the company's business model, revenue architecture, and the enterprise hospital and retail partnerships powering last-mile drone delivery.",
    source: "Startup Central",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    date: "March 2026",
  },
];

function BentoStoryGrid({
  stories,
  companyMap,
}: {
  stories: BentoStoryItem[];
  companyMap: Map<string, any>;
}) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5 items-stretch">
      {stories.map((item) => {
        const company = companyMap.get(item.slug);

        if (item.type === "stat") {
          return (
            <div
              key={item.id}
              className={`${item.bg || "bg-[#ecfadc]"} rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] border border-black/[0.04] shadow-2xs hover:shadow-md transition-all duration-300 group`}
            >
              <div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-none">
                  {item.stat}
                </div>
                <p className="font-sans text-xs sm:text-sm text-neutral-700 mt-3 leading-relaxed">
                  {item.statDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-end justify-between gap-3">
                <div className="flex flex-col">
                  {company?.logo ? (
                    item.slug ? (
                      <Link to="/portfolio/$slug" params={{ slug: item.slug }} className="hover:opacity-80 transition-opacity">
                        <img
                          src={company.logo}
                          alt={item.company}
                          className="h-6 sm:h-7 max-w-[120px] object-contain object-left"
                        />
                      </Link>
                    ) : (
                      <img
                        src={company.logo}
                        alt={item.company}
                        className="h-6 sm:h-7 max-w-[120px] object-contain object-left"
                      />
                    )
                  ) : (
                    <span className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-neutral-900">
                      {item.company}
                    </span>
                  )}
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 mt-1">
                    {item.source} · {item.date}
                  </span>
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noreferrer" : undefined}
                    className="shrink-0 p-1.5 rounded-full hover:bg-black/5 text-neutral-900 transition-colors"
                    aria-label={`Read story about ${item.company}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          );
        }

        // Feature Card (Double Width on Desktop & Tablet)
        return (
          <div
            key={item.id}
            className="lg:col-span-2 xl:col-span-2 sm:col-span-2 bg-white rounded-2xl sm:rounded-3xl border border-black/10 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row min-h-[280px] group"
          >
            {/* Left: Photo with 2-Tier Name Badge */}
            <div className="relative w-full md:w-[42%] min-h-[220px] md:min-h-full overflow-hidden bg-neutral-100 shrink-0">
              {item.photo && (
                <img
                  src={item.photo}
                  alt={item.founderName || item.company}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* 2-Tier Name & Role Badge pinned to bottom-left */}
              {item.founderName && (
                <div className="absolute bottom-3 left-3 flex flex-col items-start select-none shadow-sm z-10">
                  <div className="bg-white/95 backdrop-blur-xs px-2.5 py-0.5 text-neutral-900 font-sans text-xs font-bold leading-tight">
                    {item.founderName}
                  </div>
                  <div className="bg-[#001744] px-2.5 py-0.5 text-white font-sans text-[10px] font-medium uppercase tracking-wider leading-tight">
                    {item.founderRole || "Leadership"}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Editorial Quote & Logo Footer */}
            <div className="w-full md:w-[58%] flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-semibold">
                    <span className="h-1 w-1 rounded-full bg-[#3b66ff]" />
                    {item.source} · {item.date}
                  </span>
                </div>

                <blockquote className="font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between gap-3 mt-4">
                {company?.logo ? (
                  item.slug ? (
                    <Link to="/portfolio/$slug" params={{ slug: item.slug }} className="hover:opacity-80 transition-opacity">
                      <img
                        src={company.logo}
                        alt={item.company}
                        className="h-6 sm:h-7 max-w-[130px] object-contain object-left"
                      />
                    </Link>
                  ) : (
                    <img
                      src={company.logo}
                      alt={item.company}
                      className="h-6 sm:h-7 max-w-[130px] object-contain object-left"
                    />
                  )
                ) : (
                  <span className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-neutral-900">
                    {item.company}
                  </span>
                )}

                {item.url && (
                  <a
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#3b66ff] transition-colors"
                  >
                    <span>Read Coverage</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MediaPage() {
  const [showAllCompanyPress, setShowAllCompanyPress] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesMetadata = [
    {
      id: "category-leaders",
      tabName: "01 · Category Leaders",
      badge: "Portfolio Spotlight",
      title: "Category Leaders in Motion",
      description: "Verified commercial milestones, regulatory approvals, and institutional rounds across the Mount Judi Ventures portfolio.",
    },
    {
      id: "customer-stories",
      tabName: "02 · Customer Stories",
      badge: "Customer Stories",
      title: "Proven strategies, real results",
      description: "Verified media chronology, commercial milestones, and operating breakthroughs across Mount Judi Ventures portfolio companies.",
    },
    {
      id: "verified-chronology",
      tabName: "03 · Verified Chronology",
      badge: "Institutional Governance & Scale",
      title: "Enterprise scale & sector impact",
      description: "Keynote fiduciary governance, regulatory corridor clearances, and pan-India institutional acquisitions.",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* Quick map to lookup full company profiles & official logos */
  const companyMap = useMemo(() => {
    return new Map(companies.map((c) => [c.slug, c]));
  }, []);

  /* Aggregate all milestones from portfolio data for the full archive */
  const allPortfolioPress = useMemo(() => {
    return companies
      .flatMap((company) =>
        (company.milestones || []).map((m) => ({
          company: company.name,
          slug: company.slug,
          sector: company.sector,
          title: m.title,
          url: m.url,
          image: m.image,
        }))
      )
      .filter((m) => m.url && m.url !== "#");
  }, []);

  const visiblePress = showAllCompanyPress
    ? allPortfolioPress
    : allPortfolioPress.slice(0, 12);

  const totalMentions = allPortfolioPress.length;
  const uniqueSources = new Set(
    allPortfolioPress.map((p) => {
      const parts = p.title.split(/[—–:]/);
      return parts[0]?.trim() || "Unknown";
    })
  ).size;
  const companiesCovered = new Set(allPortfolioPress.map((p) => p.company)).size;

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          0. LEAD HERO — SKYE AIR
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-[var(--ink)]/15 bg-[var(--paper-subtle)] py-10 md:py-14">
        <div className="container-tight">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-neutral-900 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#d8fb35] shrink-0 animate-pulse" />
              <span>Media desk</span>
              <span className="text-white/40">·</span>
              <span className="text-[#d8fb35]">verified coverage</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3b66ff]" />
              <span>{totalMentions}+ public records</span>
            </div>
          </div>

          <div className="grid gap-5 lg:gap-6 lg:grid-cols-12">
            {/* Headline */}
            <h1
              className="lg:col-span-8 uppercase text-[var(--ink)] leading-[0.95] tracking-tight text-[3.1rem] sm:text-[4.75rem] xl:text-[6.25rem]"
              style={{ fontFamily: "'Fjalla One', 'Anton', Impact, 'Arial Narrow', sans-serif" }}
            >
              <span className="block lg:ml-[18%]">Skye Air Begins</span>
              <span className="block">AI-Powered</span>
              <span className="block lg:ml-[14%]">Doorstep Drone</span>
              <span className="flex flex-wrap items-center gap-x-4 lg:ml-[4%]">
                <span>Delivery</span>
                <span className="inline-flex items-center rounded-full bg-[#d8fb35] px-5 py-0.5 font-sans text-[0.5em] font-bold leading-[1.3] text-neutral-900 shadow-xs">
                  In
                </span>
                <span>Gurugram</span>
              </span>
            </h1>

            {/* Dark story card */}
            <div className="lg:col-span-4 relative min-h-[280px] lg:min-h-full overflow-hidden rounded-[28px] bg-[#0b0f14] p-6 sm:p-7 text-white flex flex-col justify-between">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.10) 38%, transparent 52%), linear-gradient(250deg, transparent 40%, rgba(255,255,255,0.07) 60%, transparent 75%)",
                }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="inline-flex items-center rounded-full border border-white/70 px-5 py-2 font-sans text-sm">
                  Skye Air
                </span>
                <Asterisk className="w-14 h-14 sm:w-16 sm:h-16 text-white" strokeWidth={4} aria-hidden="true" />
              </div>
              <p className="relative mt-10 font-sans text-sm sm:text-base leading-snug text-white/90">
                {featuredStories[0].summary}
              </p>
            </div>

            {/* Bottom-left: halftone visual + stat tiles */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative h-[220px] sm:h-[250px] lg:h-[260px]">
                <div
                  className="absolute inset-0 overflow-hidden rounded-[28px] bg-white"
                  style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 65%)",
                    maskImage: "linear-gradient(to right, transparent 0%, black 65%)",
                  }}
                >
                  <img
                    src={skyeAirImg}
                    alt="Skye Air drone delivery in Gurugram"
                    className="h-full w-full object-cover"
                  />
                  {/* Halftone dot screen */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "radial-gradient(circle, transparent 1.4px, #fff 1.9px)",
                      backgroundSize: "6px 6px",
                    }}
                  />
                </div>

                {/* Circular text badge */}
                <div className="absolute -top-2 left-1 sm:left-3 h-[150px] w-[150px]">
                  <svg viewBox="0 0 150 150" className="h-full w-full" aria-hidden="true">
                    <defs>
                      <path id="skye-badge-circle" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
                    </defs>
                    <text fontSize="11.5" fill="#0b0f14" fontFamily="Inter, sans-serif" letterSpacing="0.4">
                      <textPath href="#skye-badge-circle">
                        DGCA air corridors · AI-powered doorstep delivery ·
                      </textPath>
                    </text>
                  </svg>
                  <Sparkle
                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 fill-[#0b0f14] text-[#0b0f14]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[24px] border border-black/5 bg-white px-4 py-7 text-center text-[var(--ink)] shadow-sm">
                  <div className="font-sans text-4xl sm:text-5xl font-medium tracking-tight">$9M</div>
                  <div className="mt-1 font-sans text-sm sm:text-base">Series B Raised</div>
                </div>
                <div className="rounded-[24px] bg-[#3b66ff] px-4 py-7 text-center text-white shadow-sm">
                  <div className="font-sans text-4xl sm:text-5xl font-medium tracking-tight">DGCA</div>
                  <div className="mt-1 font-sans text-sm sm:text-base">Air Corridors</div>
                </div>
              </div>
            </div>

            {/* Bottom-right: lime feature card */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-[28px] bg-[#e4f9a0] p-6 sm:p-8 min-h-[360px]">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#0b0f14] px-5 py-2 font-sans text-sm text-[#d8fb35]">
                  Product
                </span>
                <span className="rounded-full border border-[#0b0f14] px-5 py-2 font-sans text-sm text-[var(--ink)]">
                  Drone Delivery
                </span>
                <span className="rounded-full border border-[#0b0f14] px-5 py-2 font-sans text-sm text-[var(--ink)]">
                  AI
                </span>
              </div>

              <div className="mt-10">
                <div className="inline-block border-b-4 border-[#0b0f14] pb-1">
                  <span className="font-sans text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-[var(--ink)]">
                    Gurugram
                  </span>
                </div>
                <div className="mt-6 flex items-end justify-between gap-6">
                  <p className="max-w-xl font-sans text-base sm:text-lg leading-snug text-[var(--ink)]">
                    Unmanned drones and AI-enabled robots now deliver packages directly to
                    customers&rsquo; homes, backed by physical AI infrastructure and DGCA corridors
                    across healthcare and e-commerce.
                  </p>
                  <a
                    href={featuredStories[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read the Skye Air story"
                    className="shrink-0 text-[#0b0f14] transition-transform hover:translate-x-1 hover:-translate-y-1"
                  >
                    <ArrowUpRight className="h-16 w-16 sm:h-20 sm:w-20" strokeWidth={3} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          UNIFIED HORIZONTAL LOOP SHOWCASE (3 SECTIONS IN ONE)
          - Slide 0: Category Leaders in Motion (Portfolio Spotlight - 8 cards)
          - Slide 1: Customer Stories (Commercial Breakthroughs - Rows 1 & 2 - 9 cards)
          - Slide 2: Verified Chronology (Institutional Scale & Keynotes - Rows 3 & 4 - 9 cards)
          - Smooth horizontal loop with arrows and interactive tabs
      ═══════════════════════════════════════════════════════════ */}
      <section id="showcase-carousel" className="w-full px-3 sm:px-5 lg:px-8 xl:px-10 py-12 md:py-20 border-t border-[var(--ink)]/15">
        {/* Header Controls with Category Tabs, Title, and Arrows */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14 px-4">
          {/* Section / Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {slidesMetadata.map((meta, idx) => (
              <button
                key={meta.id}
                onClick={() => setCurrentSlide(idx)}
                className={`font-mono text-[11px] font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  currentSlide === idx
                    ? "bg-[#fef08a] text-neutral-900 shadow-2xs font-bold ring-1 ring-black/10 scale-105"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {meta.tabName}
              </button>
            ))}
          </div>

          {/* Title with Previous / Next Navigation Arrows */}
          <div className="flex items-center justify-between gap-3 sm:gap-6 mt-3">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous section"
              className="p-2 sm:p-3 rounded-full border border-black/15 bg-white hover:bg-neutral-900 hover:text-white transition-all shadow-xs cursor-pointer group shrink-0"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <div className="flex-1">
              <h2
                className="font-serif text-3xl sm:text-5xl md:text-6xl text-neutral-900 font-normal sm:font-medium tracking-tight leading-[1.08] text-balance transition-all duration-300"
                style={{ fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif" }}
              >
                {slidesMetadata[currentSlide].title}
              </h2>
              <p className="mt-4 font-sans text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
                {slidesMetadata[currentSlide].description}
              </p>
            </div>

            <button
              onClick={handleNextSlide}
              aria-label="Next section"
              className="p-2 sm:p-3 rounded-full border border-black/15 bg-white hover:bg-neutral-900 hover:text-white transition-all shadow-xs cursor-pointer group shrink-0"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Slide Indicator Dots + Counter */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium">
              Section 0{currentSlide + 1} / 03
            </span>
            <div className="flex items-center gap-1.5">
              {slidesMetadata.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Jump to section ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx ? "w-8 bg-neutral-900" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Slider Track with Floating Side Edge Arrows */}
        <div className="relative w-full overflow-hidden">
          {/* Floating Left Arrow */}
          <button
            onClick={handlePrevSlide}
            aria-label="Previous section"
            className="hidden xl:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-neutral-900 text-neutral-900 hover:text-white backdrop-blur-md shadow-xl border border-black/10 items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Floating Right Arrow */}
          <button
            onClick={handleNextSlide}
            aria-label="Next section"
            className="hidden xl:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-neutral-900 text-neutral-900 hover:text-white backdrop-blur-md shadow-xl border border-black/10 items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 0: Category Leaders in Motion */}
            <div className="w-full shrink-0 flex-none px-1">
              <CategoryLeadersGrid />
            </div>

            {/* Slide 1: Customer Stories - Batch 1 */}
            <div className="w-full shrink-0 flex-none px-1">
              <BentoStoryGrid
                stories={bentoStories.slice(0, 9)}
                companyMap={companyMap}
              />
            </div>

            {/* Slide 2: Verified Chronology - Batch 2 */}
            <div className="w-full shrink-0 flex-none px-1">
              <BentoStoryGrid
                stories={bentoStories.slice(9, 18)}
                companyMap={companyMap}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. MEDIA INQUIRY & BRIEFINGS CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-[var(--ink)]/15">
        <div className="container-tight py-16 md:py-24">
          <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-[var(--navy)] p-6 text-white shadow-sm sm:p-8 md:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.10) 38%, transparent 52%), linear-gradient(250deg, transparent 40%, rgba(216,251,53,0.10) 60%, transparent 75%)",
              }}
            />
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d8fb35] animate-pulse" />
                  <span>PRESS & BROADCAST ACCESS</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
                  Media & Investor
                  <br />
                  <span className="italic font-serif font-normal lowercase text-white/60">
                    inquiries.
                  </span>
                </h2>
                <p className="mt-6 font-mono text-xs text-white/60 leading-relaxed max-w-md">
                  Direct contact with investment partners and portfolio CEOs. We provide verified data dossiers, founder access, and regulatory commentary within 24 business hours.
                </p>
              </div>

              <div className="space-y-3.5">
                <Link
                  to="/contact"
                  className="block w-full rounded-full bg-[#d8fb35] px-8 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 shadow-xs transition-colors hover:bg-[#c7ef22]"
                >
                  Request Press Dossier →
                </Link>
                <a
                  href="mailto:ebaadmomin@mountjudi.com"
                  className="block w-full rounded-full border border-white/20 px-8 py-3.5 text-center font-mono text-xs uppercase tracking-widest text-white transition-colors hover:border-[#d8fb35] hover:text-[#d8fb35]"
                >
                  ebaadmomin@mountjudi.com
                </a>
                <a
                  href="https://www.linkedin.com/company/mount-judi-ventures/"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-white/20 px-8 py-3.5 text-center font-mono text-xs uppercase tracking-widest text-white transition-colors hover:border-[#d8fb35] hover:text-[#d8fb35]"
                >
                  Follow On LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
