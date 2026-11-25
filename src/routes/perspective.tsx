import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Linkedin } from "lucide-react";
import { companies } from "@/lib/portfolio-data";

import skyeAirFounder from "@/assets/founders/skyeair.jpeg";
import basecareFounder from "@/assets/founders/4basecare.jpeg";
import staquFounder from "@/assets/founders/staqu.jpeg";
import dilFoodsFounder from "@/assets/founders/arpita.avif";
import convegeniusFounder from "@/assets/portfolio/convegenius.jpg";
import loFoodsFounder from "@/assets/founders/Lofoods.png";
import innaccelFounder from "@/assets/founders/inaccel.jpeg";
import rubickaiFounder from "@/assets/founders/invest-founder-deeptech.png";
import sprwFounder from "@/assets/founders/sprobotics.jpeg";
import internshalaFounder from "@/assets/portfolio/sarvesh.jpeg";
import upgradFounder from "@/assets/ronnie.png";
import freshtohomeFounder from "@/assets/portfolio/freshtohome.jpg";
import wiffyFounder from "@/assets/portfolio/wiffy.jpg";
import gooruFounder from "@/assets/portfolio/Gooru_ A GPS for Learning.png";
import thimblerrFounder from "@/assets/portfolio/thimblerr.jpg";
import boinggFounder from "@/assets/portfolio/boingg.jpg";
import hexalogFounder from "@/assets/founders/Hexalog Reliability Quote Poster.png";
import extramileFounder from "@/assets/founders/extramile.png";

import ankitKumarImg from "@/assets/perspectives/AnkitKumar.jpg";
import deepanshuImg from "@/assets/perspectives/Deepanshu.png";
import vikramImg from "@/assets/perspectives/Vikram.png";
import anuragImg from "@/assets/perspectives/anurag.jpeg";
import atulImg from "@/assets/perspectives/atul.jpeg";
import chandanImg from "@/assets/perspectives/chandan.png";
import dibyanshuImg from "@/assets/perspectives/dibyanshu.jpeg";
import eshanImg from "@/assets/perspectives/eshan.png";
import hiteshImg from "@/assets/perspectives/hitesh.jpg";
import jairajImg from "@/assets/perspectives/jairaj.jpeg";
import kiranImg from "@/assets/perspectives/kiran.jpeg";
import kshitijImg from "@/assets/perspectives/kshitij.jpeg";
import mathewImg from "@/assets/perspectives/mathew.jpeg";
import mayankImg from "@/assets/perspectives/mayank.jpeg";
import pankajImg from "@/assets/perspectives/pankaj.jpeg";
import prasadImg from "@/assets/perspectives/prasad.jpg";
import ronnieImg from "@/assets/perspectives/ronnie.jpg";
import shanImg from "@/assets/perspectives/shan.jpeg";
import shashankImg from "@/assets/perspectives/shashank.jpeg";
import shobhitImg from "@/assets/perspectives/shobhit.jpeg";
import sirajImg from "@/assets/perspectives/siraj.jpg";
import snehaImg from "@/assets/perspectives/sneha.jpeg";
import sudarshanImg from "@/assets/perspectives/sudarshan.jpeg";
import utkarshImg from "@/assets/perspectives/utkarsh.png";
import vineetImg from "@/assets/perspectives/vineet.jpeg";

import skyeAirLogo from "@/assets/logos/skye-air.webp";
import basecareLogo from "@/assets/logos/4basecare.webp";
import staquLogo from "@/assets/logos/staqu.webp";
import dilFoodsLogo from "@/assets/logos/dil-foods.webp";
import convegeniusLogo from "@/assets/logos/convegenius.webp";
import loFoodsLogo from "@/assets/logos/lo-foods.webp";
import innaccelLogo from "@/assets/logos/innaccel.webp";
import rubickaiLogo from "@/assets/logos/rubickai.webp";
import sprwLogo from "@/assets/logos/sprw.webp";
import internshalaLogo from "@/assets/logos/internshala-new.webp";
import upgradLogo from "@/assets/upgrad-trimmed.webp";
import freshtohomeLogo from "@/assets/logos/freshtohome.webp";
import wiffyLogo from "@/assets/logos/wiffy.webp";
import gooruLogo from "@/assets/logos/gooru.webp";
import thimblerrLogo from "@/assets/logos/thimblerr.webp";
import boinggLogo from "@/assets/logos/boingg.webp";
import hexalogLogo from "@/assets/logos/hexalog.webp";
import extramileLogo from "@/assets/logos/extramile.webp";
import freshleafLogo from "@/assets/logos/freshleaf.svg";
import sandowitchLogo from "@/assets/logos/sandowitch_logo.jpeg";
import flawsomeLogo from "@/assets/logos/flawsome_xleap_care_logo.jpeg";
import balkiratImg from "@/assets/founders/balkirat.png";
import muneetImg from "@/assets/founders/muneet.jpeg";
import vivekPrabhakarImg from "@/assets/founders/vivekprabhakar.jpeg";
import ranukImg from "@/assets/founders/ranuk.webp";

export const Route = createFileRoute("/perspective")({
  head: () => ({
    meta: [
      { title: "Perspectives & Investment Memos | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "A public, written reason for every cheque we write. Founder background, market insight, investment rationale - and the lessons we're still learning.",
      },
      { property: "og:title", content: "Perspectives | Mount Judi Ventures" },
      { property: "og:url", content: "/perspective" },
    ],
    links: [{ rel: "canonical", href: "/perspective" }],
  }),
  component: PerspectivesPage,
});

export interface FounderProfile {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export function getFounderLinkedIn(companySlug: string, founderName: string, directUrl?: string): string {
  if (directUrl) return directUrl;
  const company = companies.find((c) => c.slug === companySlug);
  if (company?.founderLinkedins?.[founderName]) {
    return company.founderLinkedins[founderName];
  }
  if (company?.founderLinkedins) {
    const key = Object.keys(company.founderLinkedins).find(
      (k) =>
        k.toLowerCase().includes(founderName.toLowerCase()) ||
        founderName.toLowerCase().includes(k.toLowerCase())
    );
    if (key) return company.founderLinkedins[key];
  }
  const query = encodeURIComponent(`${founderName} ${company?.name || ""}`);
  return `https://www.linkedin.com/search/results/people/?keywords=${query}`;
}

export interface PerspectiveStory {
  id: string;
  number: string;
  company: string;
  slug: string;
  title: string;
  sector: string;
  year: string;
  founder: string;
  rationale: string;
  pillars: string[];
  founders: FounderProfile[];
  founderImage?: string;
  logo: string;
}

export const perspectivesData: PerspectiveStory[] = [
  // ── 1. LOGISTICS ──
  {
    id: "skye-air",
    number: "01",
    company: "Skye Air",
    slug: "skye-air",
    title: "Why we invested in Skye Air",
    sector: "Logistics",
    year: "2022",
    founder: "Ankit Kumar, Founder & CEO",
    rationale:
      "Ankit is doing something almost nobody attempts in Indian deep-tech - building regulation, hardware, and software in parallel. His aviation-grade discipline paired with a builder's speed convinced us Skye Air could turn Indian skies into a working logistics layer. Every conversation made it clearer that he wasn't building a drone company; he was building the invisible infrastructure that will move medicines, samples, and commerce across the parts of India that roads have never truly served. Backing him meant backing a founder willing to compound quietly across regulators, airports, and hospitals for a decade - exactly the kind of patient category-defining work MJV exists to support.",
    pillars: [
      "Parallel hardware, software, and regulatory build",
      "Aviation-grade operational discipline",
      "Decade-long compounding infrastructure horizon",
      "Connecting geographies unserved by road rails",
    ],
    founders: [
      {
        name: "Ankit Kumar",
        role: "Co-founder & CEO",
        image: ankitKumarImg,
      },
    ],
    founderImage: ankitKumarImg,
    logo: skyeAirLogo,
  },
  {
    id: "hexalog",
    number: "02",
    company: "Hexalog",
    slug: "hexalog",
    title: "Why we invested in Hexalog",
    sector: "Logistics",
    year: "2022",
    founder: "Dibyanshu Tripathi · Utkarsh Tripathi · Vineet Malik · Shobhit Singh, Founders",
    rationale:
      "Freight forwarding is stuck in spreadsheets, and only operators who have lived that pain rebuild the stack correctly. The Hexalog founders have - pairing that operator credibility with a design-forward product sense that logistics software rarely gets right. That combination is what made them formidable to us. They're building the modern operating system for a category that global software has largely ignored - and their early customers speak about them with the kind of loyalty that only real workflow understanding earns. Backing founders replacing decades-old TMS platforms across India and the GCC is exactly the kind of quiet, category-defining opportunity we want to be part of.",
    pillars: [
      "Replacing fragmented legacy logistics spreadsheets",
      "Maritime container telemetry across 40+ trade routes",
      "Real-world operator credibility across India & the GCC",
      "Zero-error automated bills of lading & customs compliance",
    ],
    founders: [
      {
        name: "Dibyanshu Tripathi",
        role: "Co-Founder",
        image: dibyanshuImg,
      },
      {
        name: "Utkarsh Tripathi",
        role: "Co-Founder",
        image: utkarshImg,
      },
      {
        name: "Vineet Malik",
        role: "Co-Founder",
        image: vineetImg,
      },
      {
        name: "Shobhit Singh",
        role: "Co-Founder",
        image: shobhitImg,
      },
    ],
    founderImage: dibyanshuImg,
    logo: hexalogLogo,
  },

  // ── 2. HEALTHCARE ──
  {
    id: "4basecare",
    number: "03",
    company: "4baseCare",
    slug: "4basecare",
    title: "Why we invested in 4baseCare",
    sector: "Healthcare",
    year: "2022",
    founder: "Hitesh Goswami & Kshitij Rishi, Co-Founders",
    rationale:
      "Precision oncology in India needs founders who can hold clinical rigour and software velocity in the same head. Hitesh and Kshitij do - and their refusal to treat the South Asian genome as an afterthought is why we believe 4baseCare can define this category for emerging markets. What convinced us most was how deeply the team had thought about the oncologist's workflow, not just the science: the reports, the turnaround times, the tumour boards, the tough conversations with families. That empathy - combined with genuine research depth - is a rare compounding moat, and one we wanted to back for the long arc.",
    pillars: [
      "South Asian indigenous genomic panel",
      "Deep clinical oncologist workflow empathy",
      "Clinical rigour paired with software velocity",
      "Democratizing precision oncology at fractional costs",
    ],
    founders: [
      {
        name: "Hitesh Goswami",
        role: "Co-Founder & CEO",
        image: hiteshImg,
      },
      {
        name: "Kshitij Rishi",
        role: "Co-Founder & COO",
        image: kshitijImg,
      },
    ],
    founderImage: hiteshImg,
    logo: basecareLogo,
  },
  {
    id: "flawsome",
    number: "04",
    company: "Flawsome",
    slug: "flawsome",
    title: "Why we invested in Flawsome",
    sector: "Consumer / FemCare",
    year: "2027",
    founder: "Ranu Khade, Founder",
    rationale:
      "Modern Indian consumers increasingly examine ingredient decks and demand genuine efficacy rather than marketing hyperbole. Flawsome has built a remarkably authentic community-led brand with exceptional organic word-of-mouth. Their disciplined product development cycle, strong gross margins, and low customer acquisition costs gave us conviction in their ability to build an enduring personal care leader.",
    pillars: [
      "Barrier-first dermatological formulations engineered for high humidity and pollution stressors",
      "Direct-to-consumer gross margins exceeding 70% with strong basket sizes",
      "Organic community engagement driving exceptional customer lifetime value to CAC ratios",
    ],
    founders: [
      {
        name: "Ranu Khade",
        role: "Founder",
        image: ranukImg,
      },
    ],
    founderImage: ranukImg,
    logo: flawsomeLogo,
  },
  {
    id: "innaccel",
    number: "05",
    company: "InnAccel Technologies",
    slug: "innaccel",
    title: "Why we invested in InnAccel Technologies",
    sector: "Healthcare",
    year: "2019",
    founder: "Siraj Dhanani, Founder & CEO",
    rationale:
      "Frugal medtech is a decade-long game, and the InnAccel founders have the exact temperament for it - Stanford Biodesign training, deep clinical fieldwork, and a patents-first discipline. Their willingness to build slowly and correctly for the next billion patients is why we backed them. Very few Indian teams have shown they can carry a medical device from clinical insight through regulatory approvals to manufacturing at cost points that district hospitals can actually afford - InnAccel has done it repeatedly. That platform of engineering, clinical, and regulatory muscle is the compounding asset we're investing behind.",
    pillars: [
      "Stanford India Biodesign clinical pedigree",
      "Patents-first medical device portfolio",
      "Manufacturing at 50% lower cost for public hospitals",
      "Proven regulatory clearance muscle across global markets",
    ],
    founders: [
      {
        name: "Siraj Dhanani",
        role: "Founder & CEO",
        image: sirajImg,
      },
      {
        name: "Nitesh Kumar Jangir",
        role: "Co-Founder",
        image: innaccelFounder,
      },
    ],
    founderImage: sirajImg,
    logo: innaccelLogo,
  },

  // ── 3. AI & DEEPTECH ──
  {
    id: "staqu",
    number: "06",
    company: "Staqu",
    slug: "staqu",
    title: "Why we invested in Staqu",
    sector: "AI & DeepTech",
    year: "2021",
    founder: "Atul Rai · Anurag Saini · Pankaj Sharma, Co-Founders",
    rationale:
      "Staqu is building AI infrastructure that turns existing video systems into real-time intelligence. With JARVIS deployed across 12+ state police forces and 100+ enterprise accounts, the company has demonstrated the ability to take AI beyond experimentation and into large-scale, real-world environments. Its combination of video and audio analytics, VMS and JARVIS GPT, supported by 25+ research papers and 4 patents, creates a strong technology foundation for solving security, safety and operational challenges across multiple sectors.",
    pillars: [
      "Turns legacy CCTV into real-time neural intelligence",
      "Deployed across 12+ state police forces & 100+ enterprises",
      "4 patents and 25+ published research papers",
      "Sovereign national venue & infrastructure security",
    ],
    founders: [
      {
        name: "Atul Rai",
        role: "Co-Founder & CEO",
        image: atulImg,
      },
      {
        name: "Anurag Saini",
        role: "Co-Founder & CTO",
        image: anuragImg,
      },
      {
        name: "Pankaj Sharma",
        role: "Co-Founder",
        image: pankajImg,
      },
    ],
    founderImage: atulImg,
    logo: staquLogo,
  },
  {
    id: "rubickai",
    number: "07",
    company: "Rubick.ai",
    slug: "rubickai",
    title: "Why we invested in Rubick.ai",
    sector: "AI & DeepTech",
    year: "2021",
    founder: "Kiran Ramakrishna · Chandan Mishra, Co-Founders",
    rationale:
      "Most founders defend their legacy stack when a platform shift arrives. Kiran and Chandan did the opposite - they rebuilt Rubick around AI faster than most first-time founders could ship a demo. That intellectual honesty and courage to reinvent their own company is why we doubled down. They now serve some of the world's most demanding marketplaces, in categories and languages where quality is unforgiving, and they've earned that trust by being obsessive about output quality long before it was a talking point. Backing a team willing to disrupt themselves - twice - is exactly the kind of bet we like to make.",
    pillars: [
      "Courage to cannibalize legacy tech for generative AI",
      "Global enterprise catalog automation",
      "Obsessive quality in multilingual commerce metadata",
      "Founder intellectual honesty under platform shifts",
    ],
    founders: [
      {
        name: "Kiran Ramakrishna",
        role: "Co-Founder & CEO",
        image: kiranImg,
      },
      {
        name: "Chandan Mishra",
        role: "Co-Founder & CPO",
        image: chandanImg,
      },
    ],
    founderImage: kiranImg,
    logo: rubickaiLogo,
  },

  // ── 4. CONSUMER ──
  {
    id: "dil-foods",
    number: "08",
    company: "Dil Foods",
    slug: "dil-foods",
    title: "Why we invested in Dil Foods",
    sector: "Consumer",
    year: "2023",
    founder: "Arpita Aditi, Founder & CEO",
    rationale:
      "Every investment starts with the founding team. In Arpita we saw a repeat operator with deep conviction, operational excellence, and the ambition to build for the long term. Her ability to execute while staying obsessively customer-focused - and respectful of the chefs and kitchens that power the model - is what made this an investment we were excited to make. Dil's asset-light thesis flips cloud-kitchen economics on its head, and Arpita's clarity on why the previous generation of dark kitchens burned capital gave us confidence in the roadmap. We're backing a founder who is building the version of Indian food-tech that finally works for the chef, the customer, and the balance sheet at the same time.",
    pillars: [
      "Asset-light model flipping dark kitchen burn on its head",
      "Obsessive customer & kitchen-operator respect",
      "Repeat operator with deep culinary unit economics",
      "Scaling virtual food brands across existing infrastructure",
    ],
    founders: [
      {
        name: "Arpita Aditi",
        role: "Founder & CEO",
        image: dilFoodsFounder,
      },
    ],
    founderImage: dilFoodsFounder,
    logo: dilFoodsLogo,
  },
  {
    id: "freshtohome",
    number: "09",
    company: "FreshToHome",
    slug: "freshtohome",
    title: "Why we invested in FreshToHome",
    sector: "Consumer",
    year: "2020",
    founder: "Shan Kadavil · Mathew Joseph, Co-Founders",
    rationale:
      "Building direct-from-fisherman seafood at scale demands both hard technology and deep empathy for the coast. Shan and Mathew are one of the few teams in Indian consumer with the technical depth and fisherman-first respect to build FreshToHome the right way - and that full-stack conviction is why we backed them. Their AI-driven demand forecasting quietly rewires an industry that has run on waste and middlemen for decades - and they've done it while keeping the fisherman at the centre of the value chain. That combination of engineering ambition and social conscience is rare, and it's why FreshToHome has become one of the most respected consumer companies in the region.",
    pillars: [
      "AI-driven coastal supply chain and auction bypass",
      "Chemical-free, antibiotic-free fresh food certification",
      "Empathy and 20% higher earnings for coastal fishermen",
      "Full-stack cold chain logistics across 160+ cities",
    ],
    founders: [
      {
        name: "Shan Kadavil",
        role: "Co-Founder & CEO",
        image: shanImg,
      },
      {
        name: "Mathew Joseph",
        role: "Co-Founder & COO",
        image: mathewImg,
      },
    ],
    founderImage: shanImg,
    logo: freshtohomeLogo,
  },
  {
    id: "wiffy",
    number: "10",
    company: "Wiffy",
    slug: "wiffy",
    title: "Why we invested in Wiffy",
    sector: "Consumer",
    year: "2022",
    founder: "Vikram Sharma · Deepanshu Goel, Co-Founders",
    rationale:
      "Hyperlocal commerce only works when the founder has lived its messy realities. The Wiffy team has - their trust-first product instincts, willingness to grow neighborhood by neighborhood, and refusal to force-fit a mass-market playbook is what earned our early conviction. Instead of chasing top-down growth, they've built a community fabric that residents actually rely on - and that patience creates the kind of defensibility hyperlocal has struggled to find for a decade. We're backing a team building the invisible commerce layer of the Indian neighborhood, one street at a time. Wiffy was featured on Meet the Drapers (a global startup pitch platform), where CEO Mr. Vikram Sharma met Tim Draper himself.",
    pillars: [
      "Street-by-street hyperlocal network density",
      "Trust-first neighborhood community fabric",
      "Unit economics built without subsidized burn",
      "Defensible ground-truth merchant relationships",
      "Featured on Meet the Drapers; CEO met Tim Draper",
    ],
    founders: [
      {
        name: "Vikram Sharma",
        role: "Co-Founder & CEO",
        image: vikramImg,
      },
      {
        name: "Deepanshu Goel",
        role: "Co-Founder & CTO",
        image: deepanshuImg,
      },
    ],
    founderImage: vikramImg,
    logo: wiffyLogo,
  },
  {
    id: "boingg",
    number: "11",
    company: "Boingg!",
    slug: "boingg",
    title: "Why we invested in Boingg!",
    sector: "Consumer",
    year: "2022",
    founder: "Dhruvan Barar, Founder & CEO",
    rationale:
      "Kids furniture is a craft category masquerading as e-commerce. Dhruvan is a design-led founder who obsesses over materials, modularity, and the child's experience - and his taste, restraint, and hands-on operating instincts are why Boingg stood out to us from the very first meeting. He understands parents like an insider and children like a designer - a rare combination - and it shows in the loyalty of early cohorts. Backing him means backing a brand being built with love, patience, and product integrity in a category that rewards exactly those things.",
    pillars: [
      "Design-led modularity for children's developmental stages",
      "Material safety and non-toxic finish obsession",
      "Exceptional early parent cohort loyalty",
      "Craft manufacturing economics without mass-market dilution",
    ],
    founders: [
      {
        name: "Dhruvan Barar",
        role: "Founder & CEO",
        image: boinggFounder,
      },
    ],
    founderImage: boinggFounder,
    logo: boinggLogo,
  },
  {
    id: "extramile",
    number: "12",
    company: "ExtraMile",
    slug: "extramile",
    title: "Why we invested in ExtraMile",
    sector: "Consumer",
    year: "2023",
    founder: "Pooja Bajaj, Founder & CEO",
    rationale:
      "Building fan experiences requires product craft and genuine fandom in equal measure - a pairing incumbents can rarely fake. The ExtraMile founders bring both, and it lets them design engagement loops that feel made by fans, for fans. That authenticity is why we backed them at seed. Instead of copying transactional fantasy models, they're building the community and creator layer that Indian cricket has been missing - and their early engagement depth reflects that difference. Backing founders who love the game as much as the product is a bet we're happy to make.",
    pillars: [
      "Authentic fan-first community and creator loops",
      "Beyond transactional fantasy gaming models",
      "Deep engagement architecture for Indian cricket fandom",
      "Product craft built by genuine sports enthusiasts",
    ],
    founders: [
      {
        name: "Pooja Bajaj",
        role: "Founder & CEO",
        image: extramileFounder,
      },
    ],
    founderImage: extramileFounder,
    logo: extramileLogo,
  },
  {
    id: "freshleaf-tea",
    number: "13",
    company: "Freshleaf Tea",
    slug: "freshleaf-tea",
    title: "Why we invested in Freshleaf Tea",
    sector: "Consumer",
    year: "2027",
    founder: "Balkirat Singh & Muneet Arora, Co-Founders",
    rationale:
      "Tea is India's most ubiquitous beverage category, yet the specialty whole-leaf transformation is where coffee was ten years ago. The Freshleaf team built direct estate-level origin partnerships that compress procurement lead-times while preserving volatile aromatics. Their unit economics, direct-to-consumer velocity, and margin structure demonstrated strong founder discipline from inception.",
    pillars: [
      "Direct estate-to-pack sourcing pipeline preserving volatile oils and polyphenols",
      "Robust gross margins powered by premium single-origin positioning",
      "High repeat cohort retention across subscription and modern trade channels",
    ],
    founders: [
      {
        name: "Balkirat Singh",
        role: "Co-Founder",
        image: balkiratImg,
      },
      {
        name: "Muneet Arora",
        role: "Co-Founder",
        image: muneetImg,
      },
    ],
    founderImage: balkiratImg,
    logo: freshleafLogo,
  },
  {
    id: "sandowitch",
    number: "14",
    company: "Sandowitch",
    slug: "sandowitch",
    title: "Why we invested in Sandowitch",
    sector: "Consumer / F&B",
    year: "2027",
    founder: "Vivek Prabhakar, Founder",
    rationale:
      "QSR brands in India often struggle with kitchen footprint costs and consistent kitchen execution. Sandowitch cracked the commissary-first model: complex sauces, sous-vide proteins, and breads are standardized centrally, enabling micro-footprint front-of-house assembly in under 90 seconds. The brand's customer loyalty, capital-efficient store payback, and unit economics represent the exact operational prudence we seek.",
    pillars: [
      "Proprietary commissary hub model keeping outlet CAPEX and labor footprint exceptionally lean",
      "Sub-2-minute order fulfillment driving high peak-hour throughput in prime commercial hubs",
      "Over 40% monthly cohort repeat rate underpinned by nutritional transparency",
    ],
    founders: [
      {
        name: "Vivek Prabhakar",
        role: "Founder",
        image: vivekPrabhakarImg,
      },
    ],
    founderImage: vivekPrabhakarImg,
    logo: sandowitchLogo,
  },
  {
    id: "protein-chef",
    number: "15",
    company: "Lo! Foods",
    slug: "protein-chef",
    title: "Why we invested in Lo! Foods",
    sector: "Consumer / FoodTech",
    year: "2023",
    founder: "Sudarshan Gangrade, Founder & CEO",
    rationale:
      "We backed Lo! Foods because of its focus on building functional health food at scale and its ambition to create measurable improvements in individual health. Since MJV's first investment, the business has grown its revenue while continuing to build Protein Chef as a leading functional health food brand.",
    pillars: [
      "Clinical-grade low-carb & keto food formulations",
      "Tackling India's metabolic & diabetes epidemic",
      "Omnichannel retail and hospital pharmacy distribution",
      "Measurable health outcomes through everyday diet",
    ],
    founders: [
      {
        name: "Sudarshan Gangrade",
        role: "Founder & CEO",
        image: sudarshanImg,
      },
    ],
    founderImage: sudarshanImg,
    logo: loFoodsLogo,
  },

  // ── 5. EDTECH ──
  {
    id: "convegenius",
    number: "16",
    company: "ConveGenius",
    slug: "convegenius",
    title: "Why we invested in ConveGenius",
    sector: "AI / EdTech",
    year: "2021",
    founder: "Jairaj Bhattacharya & Shashank Pandey, Co-Founders",
    rationale:
      "Jairaj and Shashank picked the hardest 500 million learners in India to serve and built an engineering culture equal to that ambition. Their patience with government distribution, WhatsApp-native design, and stubborn rigour on learning outcomes is why we backed them for the long haul. Most edtech founders chase the top of the pyramid; ConveGenius went the other way, and did so with an unusually mission-first culture that has kept the team together through hard cycles. That combination of humility, technical depth, and public-system fluency is exceptionally rare, and it's the reason we believe they can quietly become one of the most consequential learning companies in the world.",
    pillars: [
      "Serving India's hardest 500M learners",
      "WhatsApp-native conversational AI tutoring",
      "Patience with public school and government distribution",
      "Mission-first culture surviving market cycles",
    ],
    founders: [
      {
        name: "Jairaj Bhattacharya",
        role: "Co-Founder & MD",
        image: jairajImg,
      },
      {
        name: "Shashank Pandey",
        role: "Co-Founder & President",
        image: shashankImg,
      },
    ],
    founderImage: jairajImg,
    logo: convegeniusLogo,
  },
  {
    id: "sp-robotic-works",
    number: "17",
    company: "SP Robotic Works",
    slug: "sp-robotic-works",
    title: "Why we invested in SP Robotic Works",
    sector: "EdTech",
    year: "2018",
    founder: "Sneha Priya · Pranavan Sankar, Co-Founders",
    rationale:
      "Great early-learning brands are built one parent cohort at a time. Sneha and Pranavan are educator-founders who invested years in curriculum craft before it was fashionable - and it shows in the trust SPRW has earned. That quiet, compounding discipline is exactly the founder profile we back. They chose to build hardware, curriculum, and instructor operations together - the hard triangle - because they understood that skill-building doesn't happen through content alone. The result is a durable, deeply loved learning brand that we believe can travel far beyond its home market.",
    pillars: [
      "The hard triangle: hardware, curriculum & operations",
      "Educator-first pedagogical integrity",
      "Compounding trust across parent cohorts",
      "Hands-on robotics kits for Tier 2 and Tier 3 India",
    ],
    founders: [
      {
        name: "Sneha Priya",
        role: "Co-Founder & CEO",
        image: snehaImg,
      },
      {
        name: "Pranavan Sankar",
        role: "Co-Founder & CTO",
        image: sprwFounder,
      },
    ],
    founderImage: snehaImg,
    logo: sprwLogo,
  },
  {
    id: "internshala",
    number: "18",
    company: "Internshala",
    slug: "internshala",
    title: "Why we invested in Internshala",
    sector: "EdTech",
    year: "2019",
    founder: "Sarvesh Agrawal, Founder & CEO",
    rationale:
      "Sarvesh has spent over a decade building Internshala with a rare kind of quiet, capital-efficient discipline - choosing durability over hype at every fork. In a market obsessed with growth theatre, that long-term operator temperament is exactly the founder DNA we invest behind. Internshala became the default first step into the Indian workforce not through marketing spend but through relentless product craft, employer trust, and student obsession over many years. Investing behind that kind of compounding brand - built with taste, patience, and profitability - is a category of bet we will always want to make.",
    pillars: [
      "Quiet, capital-efficient compounding over a decade",
      "Default first step into India's corporate workforce",
      "Zero reliance on growth vanity metrics",
      "High-margin employer monetization model",
    ],
    founders: [
      {
        name: "Sarvesh Agrawal",
        role: "Founder & CEO",
        image: internshalaFounder,
      },
    ],
    founderImage: internshalaFounder,
    logo: internshalaLogo,
  },
  {
    id: "upgrad",
    number: "19",
    company: "upGrad",
    slug: "upgrad",
    title: "Why we invested in upGrad",
    sector: "EdTech",
    year: "2026",
    founder: "Ronnie Screwvala, Co-Founder & Chairperson",
    rationale:
      "Our conviction in upGrad is an extension of our conviction in Internshala - when upGrad acquired a majority stake in Internshala, we inherited a front-row seat in Asia's largest integrated higher-education platform. Ronnie Screwvala has built and scaled category-defining businesses repeatedly, and his obsession with learning outcomes over vanity metrics mirrors the durability-first mindset we backed at Internshala. The acquisition stitches learning to employment in a single stack - degrees, skilling, internships, and first jobs - and we believe that end-to-end employability flywheel will define Indian edtech's next decade.",
    pillars: [
      "Full-stack degrees-to-employment flywheel",
      "Legendary repeat builder governance & leadership",
      "Asia's largest integrated higher-education ecosystem",
      "Learning outcomes prioritized over valuation vanity",
    ],
    founders: [
      {
        name: "Ronnie Screwvala",
        role: "Co-Founder & Chairperson",
        image: ronnieImg,
      },
      {
        name: "Mayank Kumar",
        role: "Co-Founder & MD",
        image: mayankImg,
      },
    ],
    founderImage: ronnieImg,
    logo: upgradLogo,
  },
  {
    id: "gooru",
    number: "20",
    company: "Gooru",
    slug: "gooru",
    title: "Why we invested in Gooru",
    sector: "EdTech",
    year: "2020",
    founder: "Prasad Ram, Founder & CEO",
    rationale:
      "Population-scale edtech is one of the hardest things to build, and Prasad brings a rare stack for it - Google-scale engineering, an educator's patience, and the humility to build in the open with school systems. That founder profile is why Gooru is now deployed to millions of learners globally. Gooru chose the harder path of open standards, research partnerships, and public-sector adoption long before AI made personalisation a headline. That decade of quiet infrastructure work is now compounding - and backing a founder who built the roads before the traffic is exactly our kind of bet.",
    pillars: [
      "GPS for Learning open architectural standards",
      "Google-scale systems engineering pedigree",
      "Public-sector & institutional school adoption globally",
      "Building the infrastructure decade before AI headlines",
    ],
    founders: [
      {
        name: "Prasad Ram",
        role: "Founder & CEO",
        image: prasadImg,
      },
    ],
    founderImage: prasadImg,
    logo: gooruLogo,
  },

  // ── 6. B2B & SAAS ──
  {
    id: "thimblerr",
    number: "21",
    company: "Thimblerr",
    slug: "thimblerr",
    title: "Why we invested in Thimblerr",
    sector: "Fashion Supply Chain",
    year: "2023",
    founder: "Piyush Jalan, Founder & CEO",
    rationale:
      "Underwriting India's small merchants is intuition, not just algorithms. The Thimblerr founders lived that ground truth first-hand before writing a line of code - and their platform-first approach paired with lender-grade rigour is what made this an early conviction bet for us in embedded finance. They're patient about credit performance in a category that punishes shortcuts, and they've resisted the temptation to grow ahead of underwriting quality. That discipline - pairing empathy for the merchant with hard-nosed risk management - is exactly what India's MSME credit stack has been missing.",
    pillars: [
      "Operates D2C brand Maison X crafted from mill fabrics",
      "Grounded MSME factory floor intuition",
      "Underwriting quality over reckless growth",
      "Collapsing lead times from 90 days to 15 days",
    ],
    founders: [
      {
        name: "Piyush Jalan",
        role: "Co-Founder & CEO",
        image: thimblerrFounder,
      },
    ],
    founderImage: thimblerrFounder,
    logo: thimblerrLogo,
  },
];

export interface CategoryNav {
  id: string;
  name: string;
  leadCompanyId: string;
  companyIds: string[];
}

export const perspectiveCategories: CategoryNav[] = [
  {
    id: "logistics",
    name: "Logistics",
    leadCompanyId: "skye-air",
    companyIds: ["skye-air", "hexalog"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    leadCompanyId: "4basecare",
    companyIds: ["4basecare", "flawsome", "innaccel"],
  },
  {
    id: "ai-deeptech",
    name: "AI & DeepTech",
    leadCompanyId: "staqu",
    companyIds: ["staqu", "rubickai"],
  },
  {
    id: "consumer",
    name: "Consumer",
    leadCompanyId: "dil-foods",
    companyIds: ["dil-foods", "freshtohome", "wiffy", "boingg", "extramile", "freshleaf-tea", "sandowitch", "protein-chef"],
  },
  {
    id: "edtech",
    name: "EdTech",
    leadCompanyId: "convegenius",
    companyIds: ["convegenius", "sp-robotic-works", "internshala", "upgrad", "gooru"],
  },
  {
    id: "b2b-saas",
    name: "B2B & SaaS",
    leadCompanyId: "thimblerr",
    companyIds: ["thimblerr"],
  },
];

export function PerspectivesPage() {
  const [activeId, setActiveId] = useState<string>(perspectivesData[0].id);
  const [navMode, setNavMode] = useState<"category" | "company">("category");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
  const sidebarItemRefs = useRef<Record<string, HTMLElement | null>>({});
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileTabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isClickScrolling = useRef(false);

  // Determine active category
  const activeCategory =
    perspectiveCategories.find((cat) => cat.companyIds.includes(activeId)) ||
    perspectiveCategories[0];

  // Current active company object
  const activeCompany =
    perspectivesData.find((p) => p.id === activeId) || perspectivesData[0];

  // Smooth scroll to selected company section
  const scrollToCompany = useCallback((id: string) => {
    setActiveId(id);
    const target = sectionRefs.current[id];
    if (target) {
      isClickScrolling.current = true;
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  }, []);

  // Smooth scroll to category
  const scrollToCategory = useCallback(
    (cat: CategoryNav) => {
      scrollToCompany(cat.leadCompanyId);
    },
    [scrollToCompany]
  );

  // Precise scroll listener: detects when each company article enters upper 35% of the viewport
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickScrolling.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If scrolled to the bottom of the page, activate the last company
          const isAtBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 60;
          if (isAtBottom) {
            setActiveId(perspectivesData[perspectivesData.length - 1].id);
            ticking = false;
            return;
          }

          const triggerY = window.innerHeight * 0.35;
          let current = perspectivesData[0].id;

          for (let i = 0; i < perspectivesData.length; i++) {
            const item = perspectivesData[i];
            const el = sectionRefs.current[item.id];
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerY) {
                current = item.id;
              } else {
                break;
              }
            }
          }
          setActiveId(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll the sticky left sidebar and mobile tabs so the active item is centered
  useEffect(() => {
    // 1. Sidebar auto-scroll
    const targetKey = navMode === "category" ? activeCategory.id : activeId;
    const activeEl = sidebarItemRefs.current[targetKey];
    const container = sidebarContainerRef.current;
    if (activeEl && container) {
      const itemTop = activeEl.offsetTop;
      const itemHeight = activeEl.offsetHeight;
      const containerHeight = container.clientHeight;
      const targetScroll = itemTop - containerHeight / 2 + itemHeight / 2;
      container.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }

    // 2. Mobile tabs auto-scroll
    const mobileBtn = mobileTabRefs.current[activeId];
    const mobileContainer = mobileContainerRef.current;
    if (mobileBtn && mobileContainer) {
      const btnLeft = mobileBtn.offsetLeft;
      const btnWidth = mobileBtn.offsetWidth;
      const containerWidth = mobileContainer.clientWidth;
      const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2;
      mobileContainer.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, [activeId, activeCategory.id, navMode]);

  return (
    <div className="bg-white text-neutral-950 min-h-screen">
      {/* ── 1. MOBILE HORIZONTAL STICKY NAVIGATION TABS (< lg) ── */}
      <div
        ref={mobileContainerRef}
        className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-2.5 px-4 overflow-x-auto no-scrollbar flex items-center gap-2"
      >
        {perspectivesData.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => {
                mobileTabRefs.current[item.id] = el;
              }}
              type="button"
              onClick={() => scrollToCompany(item.id)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${isActive
                ? "bg-neutral-950 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
            >
              <span>
                {item.number} {item.company}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── 2. ELEVATION CAPITAL STYLE STICKY SPLIT-SCREEN (NO VERTICAL GAP) ── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-2 sm:pt-4 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 relative">
          {/* ─────────────────────────────────────────────────────────────
              LEFT SIDEBAR: FIXED-IN-PLACE CATEGORY NAVIGATION
              - Sticks at top-20 right below header and stays fixed while right side scrolls
              - Active category highlighted in bold black
              - Inactive categories in light silver grey
              - Category view + Company view instant toggle
              - Smooth scroll-triggered alignment
          ───────────────────────────────────────────────────────────── */}
          <aside className="hidden lg:flex flex-col lg:col-span-4 xl:col-span-4 sticky top-20 self-start h-[calc(100vh-100px)] max-h-[850px] justify-between pr-6 border-r border-neutral-100">
            {/* View Switcher Toggle */}
            <div className="pb-5 border-b border-neutral-200/80 shrink-0">
              <div className="flex items-center justify-between gap-2">

                <div className="inline-flex rounded-full bg-neutral-100 p-0.5 border border-neutral-200 text-xs font-mono font-bold">

                </div>
              </div>
            </div>

            {/* Elevation Capital Navigation List */}
            <div
              ref={sidebarContainerRef}
              className="flex-1 overflow-y-auto no-scrollbar py-6 space-y-4"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
              }}
            >
              {navMode === "category" ? (
                /* ── Category Navigation (Elevation Capital 7 Categories) ── */
                perspectiveCategories.map((cat) => {
                  const isCatActive = activeCategory.id === cat.id;
                  return (
                    <div
                      key={cat.id}
                      ref={(el) => {
                        sidebarItemRefs.current[cat.id] = el;
                      }}
                      className="group"
                    >
                      <button
                        type="button"
                        onClick={() => scrollToCategory(cat)}
                        className="w-full text-left block focus:outline-none transition-all duration-300 cursor-pointer py-1.5"
                      >
                        <span
                          className={`font-display tracking-tight transition-all uppercase leading-[1.05] block ${isCatActive
                            ? "text-neutral-950 font-black text-3xl xl:text-4xl 2xl:text-[42px] translate-x-1"
                            : "text-[#d4d4d8] hover:text-neutral-600 font-extrabold text-2xl xl:text-3xl 2xl:text-[34px]"
                            }`}
                        >
                          {cat.name}
                        </span>
                      </button>

                      {/* Sub-items: Companies belonging to this category */}
                      {isCatActive && (
                        <div className="pl-1 pt-2 pb-1 flex flex-wrap items-center gap-1.5 animate-in fade-in slide-in-from-left-2 duration-300">
                          {cat.companyIds.map((cId) => {
                            const comp = perspectivesData.find((p) => p.id === cId);
                            if (!comp) return null;
                            const isThisCompActive = activeId === cId;
                            return (
                              <button
                                key={cId}
                                type="button"
                                onClick={() => scrollToCompany(cId)}
                                className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-bold tracking-wide transition-all cursor-pointer ${isThisCompActive
                                  ? "bg-[#036089] text-white shadow-2xs"
                                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                                  }`}
                              >
                                {comp.company}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                /* ── Company Navigation (All 18 Companies) ── */
                perspectivesData.map((item) => {
                  const isCompActive = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      ref={(el) => {
                        sidebarItemRefs.current[item.id] = el;
                      }}
                      type="button"
                      onClick={() => scrollToCompany(item.id)}
                      className="w-full text-left group block focus:outline-none transition-all duration-300 cursor-pointer py-1"
                    >
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`font-mono text-xs font-bold transition-colors ${isCompActive
                            ? "text-[#036089]"
                            : "text-neutral-300 group-hover:text-neutral-400"
                            }`}
                        >
                          {item.number}
                        </span>
                        <span
                          className={`font-display tracking-tight transition-all uppercase leading-tight ${isCompActive
                            ? "text-neutral-950 font-black text-2xl xl:text-3xl translate-x-1"
                            : "text-[#d4d4d8] hover:text-neutral-500 font-extrabold text-xl xl:text-2xl"
                            }`}
                        >
                          {item.company}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Explore Link (Elevation Capital's "Discover Stairway" style) */}
            <div className="pt-4 border-t border-neutral-200/80 shrink-0">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-[#036089] hover:text-neutral-950 transition-colors"
              >
                <span>Discover All Companies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT CONTENT FEED: PERSPECTIVE MEMO ARTICLES
          ───────────────────────────────────────────────────────────── */}
          <main className="lg:col-span-8 xl:col-span-8 space-y-20 lg:space-y-32">
            {perspectivesData.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <article
                  key={item.id}
                  id={`perspective-${item.id}`}
                  data-company-id={item.id}
                  ref={(el) => {
                    sectionRefs.current[item.id] = el;
                  }}
                  className={`scroll-mt-28 border-b border-neutral-200 pb-16 lg:pb-24 last:border-b-0 transition-opacity duration-700 ease-out ${isActive ? "opacity-100" : "opacity-80"
                    }`}
                >
                  {/* Header Tag Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      {/* Logo Pill */}
                      <div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center p-0.5 overflow-hidden shrink-0 shadow-2xs">
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                        {item.company}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#036089] font-bold">
                        {item.sector}
                      </span>
                    </div>
                  </div>

                  {/* Article Headline */}
                  <h2
                    className={`font-display font-black text-3xl sm:text-4xl md:text-5xl text-neutral-950 tracking-tight leading-[1.02] mb-8 transition-all duration-500 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-70"
                      }`}
                  >
                    {item.title}
                  </h2>

                  {/* Two-Column Details (Elevation Capital UI: Narrative on Left, Rationale on Right) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start mb-10">
                    {/* Left Column: Investment Rationale Narrative */}
                    <div className="md:col-span-7 space-y-4">
                      <p className="font-sans text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                        {item.rationale}
                      </p>

                      <div className="pt-4 flex items-center gap-3">
                        <Link
                          to="/portfolio/$slug"
                          params={{ slug: item.slug }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 hover:bg-[#036089] font-mono text-xs font-bold text-white shadow-xs transition-colors"
                        >
                          <span>Portfolio Info</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Underwriting Rationale Pillars (Elevation "How we help" checklist) */}
                    <div className="md:col-span-5 bg-neutral-50/80 rounded-2xl p-5 sm:p-6 border border-neutral-200/80">
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3.5 pb-2 border-b border-neutral-200 flex items-center justify-between">
                        <span>Underwriting Pillars</span>
                        <span className="text-[#036089] font-mono font-bold">{item.number}</span>
                      </div>

                      <ul className="space-y-3 font-sans text-xs sm:text-sm text-neutral-700">
                        {item.pillars.map((pillar, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-[#036089] shrink-0 mt-0.5" />
                            <span>{pillar}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 pt-3.5 border-t border-neutral-200 flex items-center justify-between font-mono text-[11px] text-neutral-500">
                        <span>Founder:</span>
                        <span className="font-semibold text-neutral-900 text-right">{item.founder}</span>
                      </div>
                    </div>
                  </div>

                  {/* Founders Showcase (Elevation Capital Portrait Card Style) */}
                  <div className="mt-8 pt-8 border-t border-neutral-200/80">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#036089]" />
                        <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900">
                          Founding Leadership
                        </span>
                      </div>
                      <Link
                        to="/portfolio/$slug"
                        params={{ slug: item.slug }}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#036089] hover:underline group"
                      >
                        <span>Explore Company</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-5 sm:gap-6 items-start">
                      {item.founders.map((founder, fIdx) => {
                        const linkedinUrl = getFounderLinkedIn(item.slug, founder.name, founder.linkedin);
                        return (
                          <a
                            key={fIdx}
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${founder.name} LinkedIn Profile`}
                            className="w-[calc(50%-10px)] sm:w-[160px] md:w-[180px] group shrink-0 text-center block cursor-pointer"
                          >
                            <div className="aspect-square w-full rounded-full overflow-hidden bg-neutral-100 border-2 border-neutral-200/90 mb-3 relative shadow-xs group-hover:border-[#036089] group-hover:shadow-md transition-all duration-300">
                              <img
                                src={founder.image}
                                alt={founder.name}
                                loading="lazy"
                                className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                                  item.id === "internshala"
                                    ? "object-cover object-top"
                                    : item.id === "boingg"
                                      ? "object-cover object-[center_25%]"
                                      : "object-cover object-center"
                                }`}
                              />
                            </div>
                            <div className="font-display font-bold text-base sm:text-lg text-neutral-950 leading-snug group-hover:text-[#036089] transition-colors inline-flex items-center justify-center gap-1">
                              <span>{founder.name}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#036089] opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all shrink-0" />
                            </div>
                            <div className="font-mono text-xs text-neutral-500 mt-0.5">
                              {founder.role}
                            </div>
                            <div className="mt-1.5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-[#036089] transition-colors font-semibold">
                              <Linkedin className="w-3 h-3 fill-current" />
                              <span>LinkedIn</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}

