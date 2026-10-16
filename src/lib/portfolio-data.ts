import dilFoodsLogo from "@/assets/logos/dil-foods.webp";
import loFoodsLogo from "@/assets/logos/lo-foods.webp";
import skyeAirLogo from "@/assets/logos/skye-air.webp";
import staquLogo from "@/assets/logos/staqu.webp";
import convegeniusLogo from "@/assets/logos/convegenius.webp";
import basecareLogo from "@/assets/logos/4basecare.webp";
import innaccelLogo from "@/assets/logos/innaccel.webp";
import rubickaiLogo from "@/assets/logos/rubickai.webp";
import sprwLogo from "@/assets/logos/sprw.webp";
import internshalaLogo from "@/assets/logos/internshala-zoomed.png";
import upgradLogo from "@/assets/upgrad-trimmed.webp";
import freshtohomeLogo from "@/assets/logos/freshtohome.webp";
import wiffyLogo from "@/assets/logos/wiffy.webp";
import gooruLogo from "@/assets/logos/gooru.webp";
import thimblerrLogo from "@/assets/logos/thimblerr.webp";
import boinggLogo from "@/assets/logos/boingg.webp";
import hexalogLogo from "@/assets/logos/hexalog.webp";
import extramileLogo from "@/assets/logos/extramile.webp";

import dilFoodsPressET from "@/assets/press/dil-foods-et-funding.webp";
import dilFoodsPressSharkTank from "@/assets/press/dil-foods-shark-tank.webp";
import press_yourstory_7485048f98 from "@/assets/press/yourstory-7485048f98.webp";
import press_infra_107a20a972 from "@/assets/press/infra-107a20a972.webp";
import press_inc42_a82a6a8fdf from "@/assets/press/inc42-a82a6a8fdf.webp";
import press_economictimes_8fd6fc5066 from "@/assets/press/economictimes-8fd6fc5066.webp";
import press_yourstory_268bb34d89 from "@/assets/press/yourstory-268bb34d89.webp";
import press_entrepreneur_3043f0bbb8 from "@/assets/press/entrepreneur-3043f0bbb8.webp";
import press_india_781d36f6ad from "@/assets/press/india-781d36f6ad.webp";
import press_expresscomputer_d54cc1ef99 from "@/assets/press/expresscomputer-d54cc1ef99.webp";
import press_yourstory_19eda09f38 from "@/assets/press/yourstory-19eda09f38.webp";
import press_economictimes_0b80dea7c8 from "@/assets/press/economictimes-0b80dea7c8.webp";
import press_economictimes_e37615499c from "@/assets/press/economictimes-e37615499c.webp";
import press_yourstory_85bf159e82 from "@/assets/press/yourstory-85bf159e82.webp";
import press_yourstory_57a8c7fb65 from "@/assets/press/yourstory-57a8c7fb65.webp";
import press_indianstartuptimes_4d8af135a8 from "@/assets/press/indianstartuptimes-4d8af135a8.webp";
import press_ceovine_6097593e12 from "@/assets/press/ceovine-6097593e12.webp";
import press_yourstory_9a3c8304ea from "@/assets/press/yourstory-9a3c8304ea.webp";
import press_inc42_0ce28eb9d7 from "@/assets/press/inc42-0ce28eb9d7.webp";
import press_timesofindia_63b1d147bf from "@/assets/press/timesofindia-63b1d147bf.webp";
import press_edtechreview_9e3707b291 from "@/assets/press/edtechreview-9e3707b291.webp";
import press_fortuneindia_ac5d9ed415 from "@/assets/press/fortuneindia-ac5d9ed415.webp";
import press_techcrunch_9328f8a3a8 from "@/assets/press/techcrunch-9328f8a3a8.webp";
import press_freshtohome_51bf1d1f03 from "@/assets/press/freshtohome-51bf1d1f03.webp";
import press_capria_fdbbc5b62d from "@/assets/press/capria-fdbbc5b62d.webp";
import press_capria_366396ac3a from "@/assets/press/capria-366396ac3a.webp";
import press_thehindu_9e2e3c3f4a from "@/assets/press/thehindu-9e2e3c3f4a.webp";
import press_indianstartuptimes_6a8ea4a2e7 from "@/assets/press/indianstartuptimes-6a8ea4a2e7.webp";
import press_b2b_f426a1a032 from "@/assets/press/b2b-f426a1a032.webp";
import press_yourstory_a9337c9489 from "@/assets/press/yourstory-a9337c9489.webp";
import press_sharktankaudits_71c8ec2b3e from "@/assets/press/sharktankaudits-71c8ec2b3e.webp";
import press_inc42_42ca269a87 from "@/assets/press/inc42-42ca269a87.webp";
import press_yourstory_3eb76718c7 from "@/assets/press/yourstory-3eb76718c7.webp";
import press_indianstartuptimes_133a116844 from "@/assets/press/indianstartuptimes-133a116844.webp";
import press_tribuneindia_634ad29006 from "@/assets/press/tribuneindia-634ad29006.webp";

import skyeAirImg from "@/assets/portfolio/skye-air.jpg";
import dilFoodsImg from "@/assets/portfolio/dil-foods.jpg";
import staquImg from "@/assets/portfolio/staqu.jpg";
import basecareImg from "@/assets/portfolio/4basecare.jpg";
import convegeniusImg from "@/assets/portfolio/convegenius.jpg";
import loFoodsImg from "@/assets/portfolio/lo-foods.jpg";

export type Company = {
  slug: string;
  name: string;
  sector: string;
  category: "Consumer" | "Consumer Enablers" | "Disruptive Tech";
  stage: string;
  year: number;
  status: "Active" | "Exited";
  tagline: string;
  oneLiner: string;
  description?: string;
  founders?: string;
  problem?: string;
  whyInvested?: string;
  growthSinceInvestment?: string;
  convictionPoints?: string[];
  keyAchievements?: string[];
  milestones?: { title: string; url: string; image?: string }[];
  mediaMentions?: { source: string; headline: string; url: string }[];
  testimonial?: { quote: string; author: string };
  logo: string;
  image?: string;
  featured?: boolean;
  fund?: "Growth Fund" | "Micro Fund" | "Both";
  website?: string;
};

export const companies: Company[] = [
  {
    slug: "skye-air",
    name: "Skye Air",
    sector: "Logistics",
    category: "Disruptive Tech",
    stage: "Series A",
    year: 2022,
    status: "Active",
    tagline: "India's drone logistics network is being built right now.",
    oneLiner: "Pioneer in last-mile drone-enabled logistics in India, across sectors.",
    description:
      "Skye Air is a pioneer in drone-enabled last-mile logistics in India, building autonomous aerial delivery infrastructure for enterprises in India. It operates air corridors, fleet operations, and unmanned traffic management to move medicines, diagnostic samples, and e-commerce parcels faster and more reliably than road networks allow. Its customers include hospitals, diagnostics chains, retailers, and logistics providers, particularly across geographies where last-mile delivery is slow or uneconomical. Working closely with aviation regulators, Skye Air combines hardware, software, and ground operations into a single integrated offering within the emerging drone logistics category.",
    founders: "Ankit Kumar",
    problem:
      "India's geography defeats traditional last-mile logistics. Tier-3 towns, hilly terrain, and time-critical healthcare deliveries are economically and physically impossible by road.",
    whyInvested:
      "Ankit is doing what few attempt in Indian deep-tech: building regulation, hardware, and operational software in parallel. His aviation-grade discipline paired with speed convinced us Skye Air could turn Indian airspace into a working logistics layer. He was not building a drone novelty. He built the commercial infrastructure that moves critical medicine and diagnostics across regions that road networks cannot serve. Backing him meant supporting an operator willing to compound across regulators, airports, and hospital networks for the long arc.",
    convictionPoints: [
      "First commercial drone corridor operator in India with DGCA approval",
      "Vertically integrated: hardware, software, ops, and regulatory expertise",
      "Founders with deep aviation, regulatory, and operations DNA",
    ],
    milestones: [
      { title: "YourStory: Skye Air bags $9M funding led by IAN Alpha Fund", url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund", image: press_yourstory_7485048f98 },
      { title: "Economic Times: Skye Air Mobility raises $9 million in Series B funding round", url: "https://infra.economictimes.indiatimes.com/news/logistics/skye-air-mobility-raises-9-million-in-series-b-funding-round/129460852", image: press_infra_107a20a972 },
      { title: "Inc42: Skye Air raises $9 Mn to expand last-mile drone delivery", url: "https://inc42.com/buzz/exclusive-skye-air-raises-9-mn-to-expand-last-mile-drone-delivery/", image: press_inc42_a82a6a8fdf },
    ],
    mediaMentions: [
      { source: "YourStory", headline: "Skye Air bags $9M funding led by IAN Alpha Fund", url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund" },
      { source: "Economic Times", headline: "Skye Air Mobility raises $9 million in Series B funding round", url: "https://infra.economictimes.indiatimes.com/news/logistics/skye-air-mobility-raises-9-million-in-series-b-funding-round/129460852" },
    ],
    testimonial: {
      quote: "MJV understood the regulatory mountain before we even started climbing it. Rare for a fund.",
      author: "Ankit Kumar, Co-founder & CEO",
    },
    featured: true,
    fund: "Both",
    logo: skyeAirLogo,
    image: skyeAirImg,
  },
  {
    slug: "4basecare",
    name: "4baseCare",
    sector: "Healthcare",
    category: "Disruptive Tech",
    stage: "Series A",
    year: 2022,
    status: "Active",
    tagline: "Precision oncology, accessible to every patient.",
    oneLiner: "Innovated a South-Asian panel for genetic tests, aiding precision oncology.",
    description:
      "4baseCare is a precision oncology company that has innovated a South-Asian panel for genetic tests, with genomic testing solutions tailored to South Asian populations. It combines next-generation sequencing with clinical interpretation to help oncologists match patients to targeted therapies based on individual genetic profiles. Its diagnostic panels and reporting tools are used by hospitals, cancer centres, and treating physicians across India and international markets. By building genomic reference data specific to the region, the company addresses a gap left by Western-centric datasets, operating at the intersection of diagnostics, genomics, and personalised cancer care.",
    founders: "Hitesh Goswami · Kshitij Rishi",
    problem:
      "Less than 5% of cancer patients in emerging markets receive genomic testing. Western reference databases miss the genetic variants common in South Asian populations.",
    whyInvested:
      "Precision oncology in India requires clinical rigour and software velocity simultaneously. Hitesh and Kshitij refused to treat the South Asian genome as an afterthought. That commitment allows 4baseCare to define this category for emerging markets. The team understands the oncologist's workflow: turnaround times, tumour boards, and targeted therapeutic matching. Combined with deep genomic research, this operational empathy creates an enduring competitive advantage.",
    convictionPoints: [
      "Proprietary South Asian cancer variant database",
      "Software-led economics layered on regulated diagnostics",
      "Clinical co-founders with global oncology relationships",
    ],
    milestones: [
      { title: "Economic Times: 4baseCare raises Rs 128 crore to take its cancer testing platform global", url: "https://economictimes.indiatimes.com/tech/funding/infosys-backed-4basecare-raises-rs-128-crore-plans-to-take-its-cancer-testing-platform-global/articleshow/131638999.cms", image: press_economictimes_8fd6fc5066 },
      { title: "YourStory: Oncology startup 4baseCare closes Rs 128 Cr Series B round", url: "https://yourstory.com/2026/06/oncology-startup-4basecare-closes-series-b-at-rs-128-crore", image: press_yourstory_268bb34d89 },
      { title: "ET Entrepreneur: 4baseCare secures ₹128 Crore in Series B funding", url: "https://entrepreneur.economictimes.indiatimes.com/news/funding/4basecare-secures-128-crore-in-series-b-funding-to-expand-precision-oncology-services/131651458", image: press_entrepreneur_3043f0bbb8 },
    ],
    mediaMentions: [
      { source: "Economic Times", headline: "4baseCare raises Rs 128 crore to take its cancer testing platform global", url: "https://economictimes.indiatimes.com/tech/funding/infosys-backed-4basecare-raises-rs-128-crore-plans-to-take-its-cancer-testing-platform-global/articleshow/131638999.cms" },
      { source: "YourStory", headline: "Oncology startup 4baseCare closes Rs 128 Cr Series B round", url: "https://yourstory.com/2026/06/oncology-startup-4basecare-closes-series-b-at-rs-128-crore" },
    ],
    testimonial: {
      quote: "MJV acted as operating partners from day one. They sat with us through our most critical hiring and enterprise partnership decisions.",
      author: "Hitesh Goswami, Co-founder",
    },
    featured: true,
    fund: "Both",
    logo: basecareLogo,
    image: basecareImg,
  },
  {
    slug: "staqu",
    name: "Staqu",
    sector: "AI & DeepTech",
    category: "Disruptive Tech",
    stage: "Series B",
    year: 2021,
    status: "Active",
    tagline: "Turning every camera into intelligence.",
    oneLiner: "Video intelligence platform for enterprise and law enforcement.",
    description:
      "JARVIS by Staqu Technologies is an AI-powered video intelligence platform trusted across 12+ state police forces and 100+ enterprise customers. JARVIS transforms conventional CCTV infrastructure into real-time intelligence for security, safety, and business operations.\n\nThe platform has powered large-scale deployments across law enforcement, prisons, homeland security, retail, sports venues, and critical infrastructure, including the Ayodhya Ram Mandir inauguration, G20 Delhi, Karnataka Prisons, and RCB at M. Chinnaswamy Stadium.\n\nBacked by 25+ published research papers and 4 patents, JARVIS brings together video and audio analytics, VMS, and JARVIS GPT to make existing video infrastructure significantly more intelligent and actionable.",
    founders: "Atul Rai · Anurag Saini · Chetan Rexwal · Pankaj Sharma",
    whyInvested:
      "Staqu is building AI infrastructure that turns existing video systems into real-time intelligence. With JARVIS deployed across 12+ state police forces and 100+ enterprise accounts, the company has demonstrated the ability to take AI beyond experimentation and into large-scale, real-world environments.\n\nIts combination of video and audio analytics, VMS and JARVIS GPT, supported by 25+ research papers and 4 patents, creates a strong technology foundation for solving security, safety and operational challenges across multiple sectors.",
    keyAchievements: [
      "Trusted across 12+ state police forces and 100+ enterprise customers",
      "25+ published research papers and 4 patents",
      "Large-scale deployments across law enforcement, prisons, homeland security, retail, sports venues and critical infrastructure",
      "Deployments including Ayodhya Ram Mandir inauguration, G20 Delhi, Karnataka Prisons and RCB at M. Chinnaswamy Stadium",
    ],
    milestones: [
      { title: "Entrepreneur India: Staqu raises INR 11 Cr in Pre-Series A funding led by Mount Judi Ventures and SIS", url: "https://india.entrepreneur.com/news-and-trends/staqu-raises-inr-11-crore-in-pre-series-a-funding-led-by/425700", image: press_india_781d36f6ad },
      { title: "VCCircle: Staqu seeks to bolster demand for its proprietary AI tech via pre-Series A round", url: "https://www.vccircle.com/staqu-seeks-to-bolster-demand-for-its-proprietary-ai-tech-via-pre-series-a-round" },
      { title: "Express Computer: Staqu raises INR 11 cr in Pre-Series A funding round", url: "https://www.expresscomputer.in/news/staqu-raises-inr-11-cr-in-pre-series-a-funding-round/85537/", image: press_expresscomputer_d54cc1ef99 },
    ],
    mediaMentions: [
      { source: "Entrepreneur India", headline: "Staqu raises INR 11 Cr in Pre-Series A funding led by Mount Judi Ventures and SIS", url: "https://india.entrepreneur.com/news-and-trends/staqu-raises-inr-11-crore-in-pre-series-a-funding-led-by/425700" },
      { source: "VCCircle", headline: "Staqu seeks to bolster demand for its proprietary AI tech", url: "https://www.vccircle.com/staqu-seeks-to-bolster-demand-for-its-proprietary-ai-tech-via-pre-series-a-round" },
    ],
    testimonial: {
      quote: "MJV provides dependable boardroom support. They actively unlocked state enterprise contracts and backed our governance at every scaling milestone.",
      author: "Atul Rai, Co-founder & CEO",
    },
    featured: true,
    fund: "Both",
    logo: staquLogo,
    image: staquImg,
  },
  {
    slug: "dil-foods",
    name: "Dil Foods",
    sector: "Consumer",
    category: "Consumer",
    stage: "Seed",
    year: 2023,
    status: "Active",
    tagline: "Reimagining cloud kitchens, with heart.",
    oneLiner: "Virtual kitchens using existing restaurants to serve regional food brands.",
    description:
      "Dil Foods runs virtual kitchens using existing restaurants, enabling them to expand revenue by operating regional food brands from their existing kitchen infrastructure. Restaurant partners access recipes, supply chain, packaging, and demand generation through the platform, adding new cuisines without additional capital investment. Consumers order these regional and specialty brands through online delivery platforms. Its asset-light model differs from conventional cloud kitchens, which carry the cost of real estate and staffing, and positions Dil Foods within the food-tech and restaurant enablement category.",
    founders: "Arpita Aditi",
    problem:
      "Cloud kitchen 1.0 burned billions building dark kitchens nobody loved. Meanwhile, India's best neighborhood chefs were under-utilized and under-paid.",
    whyInvested:
      "Every investment starts with the founding team. In Arpita we saw a repeat operator with disciplined unit economics and operational excellence. Her ability to execute while respecting partner chefs made this an immediate conviction investment. Dil's asset-light thesis inverts cloud-kitchen unit economics by activating existing kitchen capacity. We backed a founder building food-tech that generates positive contribution margin from month one.",
    convictionPoints: [
      "Asset-light unit economics with profitability per kitchen from month one",
      "Chef-first model with measurable income uplift",
      "Founder repeat-operator from Dineout (acq. by Times Internet)",
    ],
    milestones: [
      { title: "Economic Times: Dil Foods raises $7.5 million in funding", url: "https://economictimes.indiatimes.com/tech/funding/restaurant-enablement-startup-dil-foods-raises-7-5-million-in-funding/articleshow/131043529.cms", image: dilFoodsPressET },
      { title: "YourStory: Dil Foods raises Rs 72 Cr in Series B round", url: "https://yourstory.com/2026/05/dil-foods-raises-rs-72-crore-in-series-b-round", image: press_yourstory_19eda09f38 },
      { title: "Indian Startup News: Shark Tank India judges to invest Rs 2 crore in Dil Foods", url: "https://indianstartupnews.com/news/shark-tank-india-judges-to-invest-rs-2-crore-in-dil-foods-at-rs-75-crore-valuation-2403481", image: dilFoodsPressSharkTank },
    ],
    mediaMentions: [
      { source: "Economic Times", headline: "Dil Foods raises $7.5 million in funding", url: "https://economictimes.indiatimes.com/tech/funding/restaurant-enablement-startup-dil-foods-raises-7-5-million-in-funding/articleshow/131043529.cms" },
      { source: "YourStory", headline: "Dil Foods raises Rs 72 Cr in Series B round", url: "https://yourstory.com/2026/05/dil-foods-raises-rs-72-crore-in-series-b-round" },
    ],
    featured: true,
    fund: "Both",
    logo: dilFoodsLogo,
    image: dilFoodsImg,
  },
  {
    slug: "convegenius",
    name: "ConveGenius",
    sector: "AI / EdTech",
    category: "Disruptive Tech",
    stage: "Series B",
    year: 2021,
    status: "Active",
    tagline: "An AI tutor for every learner without requiring an app.",
    oneLiner: "Conversational AI and big data analytics in public education.",
    description:
      "ConveGenius brings conversational AI and big data analytics to public education, delivering AI tutoring to learners in low-income and low-bandwidth settings. Its assistants run over widely used messaging apps, removing the need for a dedicated application or high-end device, and support assessment, remediation, and curriculum-aligned practice. The company works with state governments, public school systems, and non-profit partners to reach students at scale. Its distribution model and vernacular language support differentiate it within the AI-led learning and public education category.",
    founders: "Jairaj Bhattacharya · Shashank Pandey",
    problem:
      "Hundreds of millions of Indian learners will never own a personal device or have reliable broadband. Most edtech is built for the top 5%.",
    whyInvested:
      "Jairaj and Shashank targeted public education students across India and built an engineering culture equal to that ambition. Their patience with government distribution, WhatsApp-native delivery, and disciplined focus on learning outcomes earned our conviction. Most edtech products chase affluent urban families. ConveGenius went the other way with a mission-driven culture that withstands hard market cycles. That blend of technical depth and public-system fluency creates an exceptionally durable enterprise.",
    convictionPoints: [
      "100M+ learners reached at sub-rupee economics",
      "9 state government partnerships for deeply moated distribution",
      "Vernacular AI stack built in-house",
    ],
    milestones: [
      { title: "Economic Times: ConveGenius raises $5 million to launch its conversational AI platform", url: "https://economictimes.indiatimes.com/tech/funding/convegenius-raises-5-million-to-launch-its-conversational-ai-platform/articleshow/87139688.cms", image: press_economictimes_0b80dea7c8 },
      { title: "Economic Times: ConveGenius raises $7 million in funding", url: "https://economictimes.indiatimes.com/tech/funding/k-12-edtech-startup-convegenius-raises-7-million-in-funding/articleshow/106739064.cms", image: press_economictimes_e37615499c },
      { title: "YourStory: Edtech for Bharat: How ConveGenius used WhatsApp to deliver learning to 10M rural students", url: "https://yourstory.com/2021/03/edtech-bharat-dell-foundation-startup-convegenius-whatsapp-learning", image: press_yourstory_85bf159e82 },
    ],
    mediaMentions: [
      { source: "Economic Times", headline: "ConveGenius raises $5 million to launch its conversational AI platform", url: "https://economictimes.indiatimes.com/tech/funding/convegenius-raises-5-million-to-launch-its-conversational-ai-platform/articleshow/87139688.cms" },
      { source: "YourStory", headline: "How ConveGenius used WhatsApp to deliver learning to 10M rural students", url: "https://yourstory.com/2021/03/edtech-bharat-dell-foundation-startup-convegenius-whatsapp-learning" },
    ],
    featured: true,
    fund: "Both",
    logo: convegeniusLogo,
    image: convegeniusImg,
  },
  {
    slug: "protein-chef",
    name: "Protein Chef",
    sector: "Healthcare / Consumer",
    category: "Consumer",
    stage: "Series A",
    year: 2023,
    status: "Active",
    tagline: "Functional food delivering measurable metabolic health outcomes.",
    oneLiner: "Functional health food products focused on improving individual health at scale.",
    description:
      "Protein Chef is building functional health food products focused on improving the health of individuals at scale and enabling measurable health outcomes.",
    founders: "Sudarshan Gangrade",
    whyInvested:
      "We backed Protein Chef because of its focus on building functional health food at scale and its ambition to create measurable improvements in individual health. Since MJV's first investment, the business has grown its revenue while continuing to build Protein Chef as a leading functional health food brand.",
    growthSinceInvestment:
      "Since MJV's first investment, Protein Chef has continued to grow its revenue while building Protein Chef into a leading functional health food brand.",
    keyAchievements: [
      "Protein Chef is now the leading brand of Functional Health Food",
      "Focused on improving the health of individuals at scale",
      "Revenue has grown since MJV's first investment",
      "Rainmatter is also a partner",
    ],
    milestones: [
      { title: "YourStory: Protein Chef nears Rs 100 Cr ARR with $3.5M funding", url: "https://yourstory.com/2025/07/lo-foods-nears-rs-100-cr-arr-3m-funding-protein-chef", image: press_yourstory_57a8c7fb65 },
      { title: "Indian Startup Times: Protein Chef secures $3.5M Series B funding", url: "https://www.indianstartuptimes.com/investment/lo-foods-secures-3-5m-series-b-funding-to-power-protein-chef-and-broaden-wellness-reach/", image: press_indianstartuptimes_4d8af135a8 },
      { title: "CEO Vine: Protein Chef raises $3.5 Mn in Series B round", url: "https://www.ceovine.com/lo-foods-raises-3-5-mn-in-series-b/", image: press_ceovine_6097593e12 },
    ],
    mediaMentions: [
      { source: "YourStory", headline: "Protein Chef nears Rs 100 Cr ARR with $3.5M funding", url: "https://yourstory.com/2025/07/lo-foods-nears-rs-100-cr-arr-3m-funding-protein-chef" },
      { source: "Indian Startup Times", headline: "Protein Chef secures $3.5M Series B funding", url: "https://www.indianstartuptimes.com/investment/lo-foods-secures-3-5m-series-b-funding-to-power-protein-chef-and-broaden-wellness-reach/" },
    ],
    testimonial: {
      quote:
        "MJV has been 'Founder Friendly' in the true sense of the word. Its when the chips are down that the real reflection of how a fund views its portfolio comes out. They have been more like friends and partners; rather than investors. Extremely professional yet the connect is at a personal level. A great Fund to have on your cap table.",
      author: "Sudarshan Gangrade, Founder",
    },
    featured: true,
    fund: "Both",
    logo: loFoodsLogo,
    image: loFoodsImg,
  },
  {
    slug: "innaccel",
    name: "InnAccel Technologies",
    sector: "Healthcare",
    category: "Disruptive Tech",
    stage: "Series B",
    year: 2019,
    status: "Active",
    tagline: "Frugal medical devices for the next billion patients.",
    oneLiner: "MedTech start-up that has innovated 3 novel life-saving devices.",
    description:
      "InnAccel is a MedTech start-up that has innovated three novel life-saving devices \u2014 affordable, clinically validated products built for emerging markets. It identifies critical gaps in patient care and designs, tests, and commercialises products across maternal health, critical care, and neonatal care that improve clinical outcomes at a fraction of imported device costs. Its customers are hospitals, government health systems, and healthcare providers, particularly in resource-constrained settings. In-house engineering, clinical validation, and manufacturing across multiple product lines set it apart within the medical devices category.",
    founders: "Siraj Dhanani · Jagdish Chaturvedi · Vijayarajan Alagumalai",
    problem:
      "Global medical devices are priced and specified for Western hospitals. Life-saving intervention remained out of reach for district hospitals and emerging-market patients.",
    whyInvested:
      "Frugal medtech is a decade-long game. The InnAccel founders have the exact temperament for it: Stanford Biodesign training, clinical fieldwork, and a patents-first discipline. Very few Indian teams can take a medical device from clinical insight through regulatory clearances to volume manufacturing at district-hospital price points. InnAccel has done it across three major device lines, creating a durable proprietary platform.",
    convictionPoints: [
      "Portfolio of CE-marked and USFDA-cleared devices in obstetrics and critical care",
      "In-house R&D lab producing multiple novel devices per year",
      "Founder-led team with Stanford Biodesign lineage and 100+ patents",
    ],
    milestones: [
      { title: "YourStory: Medtech startup InnAccel raises $1.5M in pre-Series A round led by Mount Judi Ventures", url: "https://yourstory.com/2020/10/funding-alert-medtech-startup-innaccel-mount-judi-ventures", image: press_yourstory_9a3c8304ea },
      { title: "VCCircle: Mount Judi Ventures makes debut bet on medtech firm InnAccel", url: "https://www.vccircle.com/mount-judi-ventures-makes-debut-bet-on-medtech-firm" },
    ],
    mediaMentions: [
      { source: "YourStory", headline: "Medtech startup InnAccel raises $1.5M in pre-Series A round led by Mount Judi Ventures", url: "https://yourstory.com/2020/10/funding-alert-medtech-startup-innaccel-mount-judi-ventures" },
      { source: "VCCircle", headline: "Mount Judi Ventures makes debut bet on medtech firm InnAccel", url: "https://www.vccircle.com/mount-judi-ventures-makes-debut-bet-on-medtech-firm" },
    ],
    fund: "Growth Fund",
    logo: innaccelLogo,
    website: "https://innaccel.com",
  },
  {
    slug: "rubickai",
    name: "Rubick.ai",
    sector: "AI & DeepTech",
    category: "Consumer Enablers",
    stage: "Series A",
    year: 2021,
    status: "Active",
    tagline: "AI-powered content operations for global commerce.",
    oneLiner: "Digital cataloguing and content suite enabling rapid GTM in e-commerce.",
    description:
      "Rubick.ai provides a digital cataloguing and content suite that enables rapid go-to-market in e-commerce \u2014 an AI-powered product cataloguing and content management platform for consumer brands, retailers, and marketplaces. The platform automates content creation, enrichment, taxonomy, and distribution of product data across sales channels, reducing manual effort in listing and merchandising. Customers use it to accelerate go-to-market, improve product discovery, and maintain consistency across storefronts. By combining automation with managed services across global markets, Rubick.ai differentiates itself in the e-commerce content operations category.",
    founders: "Kiran Ramakrishna · Chandan Mishra",
    problem:
      "Marketplaces and brands need millions of product descriptions, images, and creatives in dozens of languages. Legacy agencies deliver inconsistent quality and slow turnarounds.",
    whyInvested:
      "Most founders defend legacy operations during platform shifts. Kiran and Chandan rebuilt Rubick around AI faster than most startups could ship a demo. That intellectual honesty and courage to reinvent their company convinced us to double down. They serve tier-1 global marketplaces in unforgiving categories, earning enterprise trust through rigorous output accuracy.",
    convictionPoints: [
      "Serves top-tier global marketplaces and D2C brands",
      "Proprietary content data spanning 30+ categories and 15+ languages",
      "Repeat founders with prior content and services exits",
    ],
    milestones: [
      { title: "ThePrint: Text Mercato raises Pre-Series A funding of INR 20 Cr led by 1Crowd, Mount Judi Ventures and Innospark Ventures", url: "https://theprint.in/ani-press-releases/text-mercato-raises-pre-series-a-funding-of-inr-20-cr-us-2-6m-led-by-1crowd-mount-judi-ventures-and-us-based-innospark-ventures/985272/" },
      { title: "Inc42: Text Mercato raises funding to launch DIY platform for small brands", url: "https://inc42.com/buzz/content-startup-text-mercato-raises-funding-to-launch-diy-platform-for-small-brands/", image: press_inc42_0ce28eb9d7 },
      { title: "Mount Judi: Rubick.ai (erstwhile Text Mercato)", url: "https://mountjudi.com/portfolio/rubickai-erstwhile-text-mercato" },
    ],
    mediaMentions: [
      { source: "ThePrint", headline: "Text Mercato raises Pre-Series A funding of INR 20 Cr", url: "https://theprint.in/ani-press-releases/text-mercato-raises-pre-series-a-funding-of-inr-20-cr-us-2-6m-led-by-1crowd-mount-judi-ventures-and-us-based-innospark-ventures/985272/" },
      { source: "Inc42", headline: "Text Mercato raises funding to launch DIY platform for small brands", url: "https://inc42.com/buzz/content-startup-text-mercato-raises-funding-to-launch-diy-platform-for-small-brands/" },
    ],
    fund: "Both",
    logo: rubickaiLogo,
    website: "https://rubick.ai",
  },
  {
    slug: "sp-robotic-works",
    name: "SP Robotic Works",
    sector: "EdTech",
    category: "Disruptive Tech",
    stage: "Series B",
    year: 2018,
    status: "Active",
    tagline: "Where India's next generation learns to build.",
    oneLiner: "Next-gen skills EdTech for school kids.",
    description:
      "SP Robotic Works is a next-gen skills EdTech company for school kids, equipping them with future-ready skills through experiential, hands-on learning. Its curriculum spans robotics, coding, artificial intelligence, electronics, and design thinking, delivered through learning kits, online classes, and school partnerships. Customers include schools, parents, and institutions seeking practical STEM programmes beyond conventional syllabi. The combination of physical build kits with structured digital instruction differentiates it within the K-12 skilling and edtech category.",
    founders: "Sneha Priya · Pranavan Sankar",
    problem:
      "Indian schools teach coding as theory. Practical engineering intuition was restricted to expensive private labs in tier-1 cities.",
    whyInvested:
      "Great early-learning brands are built one parent cohort at a time. Sneha and Pranavan are educator-founders who invested years in curriculum craft. That compounding discipline is the founder profile we back. They combined hardware build kits, interactive software, and instructor training into a unified curriculum, creating a durable STEM brand with exceptional student retention.",
    convictionPoints: [
      "150,000+ students across India, UAE and Singapore",
      "Proprietary robotics hardware paired with live instruction",
      "Founder-operators with a decade of curriculum depth",
    ],
    milestones: [
      { title: "SP Robotic Works: A.I. based EdTech startup raises Series A funding of $3Mn led by Mount Judi India Growth Fund", url: "https://sproboticworks.com/press/series-a-funding-ai-edtech-startup-sp-robotic-works" },
      { title: "Times of India: SP Robotic Works raises USD 3 mn in funding round led by Mount Judi India Growth Fund", url: "https://timesofindia.indiatimes.com/sp-robotic-works-raises-usd-3-mn-in-funding-round-led-by-mount-judi-india-growth-fund/articleshow/84893316.cms", image: press_timesofindia_63b1d147bf },
      { title: "EdTechReview: AI-based Edutainment Platform SP Robotic Works raises Series A funding of $3M", url: "https://www.edtechreview.in/news/ai-based-edutainment-platform-sp-robotic-works-raises-series-a-funding-of-3m/", image: press_edtechreview_9e3707b291 },
    ],
    mediaMentions: [
      { source: "SP Robotic Works", headline: "A.I. based EdTech startup raises Series A funding of $3Mn", url: "https://sproboticworks.com/press/series-a-funding-ai-edtech-startup-sp-robotic-works" },
      { source: "Times of India", headline: "SP Robotic Works raises USD 3 mn led by Mount Judi India Growth Fund", url: "https://timesofindia.indiatimes.com/sp-robotic-works-raises-usd-3-mn-in-funding-round-led-by-mount-judi-india-growth-fund/articleshow/84893316.cms" },
    ],
    fund: "Growth Fund",
    logo: sprwLogo,
    website: "https://sproboticworks.com",
  },
  {
    slug: "internshala",
    name: "Internshala",
    sector: "EdTech",
    category: "Disruptive Tech",
    stage: "Growth",
    year: 2019,
    status: "Active",
    tagline: "Careers built one internship at a time.",
    oneLiner: "India's top career-tech platform for internships, up-skilling and fresher jobs.",
    description:
      "Internshala is India's top career-tech platform for internships, up-skilling, and fresher jobs, connecting students and early-career professionals with employers. Employers use it to source entry-level talent, while learners access training courses designed to improve employability in areas such as programming, marketing, and design. The platform serves millions of students across India alongside a large base of recruiting companies. By pairing recruitment with training on a single platform, Internshala addresses both sides of the education-to-industry gap.",
    founders: "Sarvesh Agrawal",
    problem:
      "India produces 1M+ graduates every month, most of whom leave college with no professional experience and no clear path to their first job.",
    whyInvested:
      "Sarvesh built Internshala over a decade with disciplined, capital-efficient execution. In a market focused on vanity growth, his long-term operator temperament matches our investment philosophy. Internshala became India's primary gateway into the workforce through product craft, employer trust, and user obsession. Backing a profitable, compounding market leader is a core MJV mandate.",
    convictionPoints: [
      "20M+ registered students and 200,000+ employers",
      "Category-defining brand for internships in India",
      "Profitable, founder-run, expanding into skilling and hiring",
    ],
    milestones: [
      { title: "Business Wire: upGrad acquires World's Largest Internship Platform Internshala", url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala" },
      { title: "Fortune India: upGrad acquires 90% stake in Internshala", url: "https://www.fortuneindia.com/business-news/upgrad-acquires-90-stake-in-internshala-doubles-down-on-employability-strategy/130743", image: press_fortuneindia_ac5d9ed415 },
    ],
    mediaMentions: [
      { source: "Business Wire", headline: "upGrad acquires World's Largest Internship Platform Internshala", url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala" },
      { source: "Fortune India", headline: "upGrad acquires 90% stake in Internshala", url: "https://www.fortuneindia.com/business-news/upgrad-acquires-90-stake-in-internshala-doubles-down-on-employability-strategy/130743" },
    ],
    fund: "Growth Fund",
    logo: internshalaLogo,
    website: "https://internshala.com",
  },
  {
    slug: "upgrad",
    name: "upGrad",
    sector: "EdTech",
    category: "Disruptive Tech",
    stage: "Growth",
    year: 2026,
    status: "Active",
    tagline: "Asia's largest integrated higher-education and skilling platform.",
    oneLiner: "Online higher education, upskilling, and lifelong learning at massive scale.",
    description:
      "upGrad is one of Asia's largest integrated online higher-education and skilling companies, serving working professionals, students, and enterprises across degree programs, certifications, and corporate learning. Founded in 2015, it partners with leading Indian and global universities to deliver outcome-driven programs across data, technology, management, and law. With its acquisition of a majority stake in Internshala, the world's largest internship platform, upGrad has deepened its employability stack, connecting learning directly to first jobs and career transitions at massive scale.",
    founders: "Ronnie Screwvala, Mayank Kumar & Phalgun Kompalli",
    whyInvested:
      "Our conviction in upGrad extends from our early investment in Internshala. When upGrad acquired a majority stake in Internshala, we gained direct participation in Asia's largest higher-education platform. Ronnie Screwvala focuses on demonstrable learning outcomes over vanity metrics, echoing the durability-first principles we value. The combined business connects university education directly to hiring pipelines.",
    convictionPoints: [
      "One of Asia's largest integrated higher-ed and skilling platforms",
      "University partnerships across India and global institutions",
      "Internshala acquisition links learning directly to employability",
    ],
    milestones: [
      { title: "Business Wire: upGrad acquires World's Largest Internship Platform Internshala", url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala" },
      { title: "Fortune India: upGrad acquires 90% stake in Internshala", url: "https://www.fortuneindia.com/business-news/upgrad-acquires-90-stake-in-internshala-doubles-down-on-employability-strategy/130743", image: press_fortuneindia_ac5d9ed415 },
    ],
    mediaMentions: [
      { source: "Business Wire", headline: "upGrad acquires World's Largest Internship Platform Internshala", url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala" },
      { source: "Fortune India", headline: "upGrad acquires 90% stake in Internshala", url: "https://www.fortuneindia.com/business-news/upgrad-acquires-90-stake-in-internshala-doubles-down-on-employability-strategy/130743" },
    ],
    fund: "Growth Fund",
    logo: upgradLogo,
    website: "https://www.upgrad.com",
  },
  {
    slug: "freshtohome",
    name: "FreshToHome",
    sector: "Consumer",
    category: "Consumer",
    stage: "Series D",
    year: 2020,
    status: "Active",
    tagline: "Chemical-free fish and meat, delivered fresh.",
    oneLiner: "India & UAE's leading D2C fish & meat platform serving fresh, chemical-free products.",
    description:
      "FreshToHome is India & UAE's leading D2C fish & meat platform, delivering fresh, chemical-free seafood, meat, and ready-to-cook products directly to consumers. It operates a farm-to-fork supply chain with direct sourcing from fishermen and farmers, quality checks, and no added chemical preservatives, supported by technology for procurement and demand forecasting. The company serves households across India and the UAE. Direct sourcing, traceability, and preservative-free positioning differentiate it within the fresh food e-commerce category.",
    founders: "Shan Kadavil · Mathew Joseph",
    problem:
      "Traditional wet markets rely on multiple middlemen and chemical preservatives. Urban consumers lacked a dependable, clean, farm-to-doorstep alternative.",
    whyInvested:
      "Direct-from-fisherman seafood distribution requires advanced cold-chain technology and fair supplier economics. Shan and Mathew built FreshToHome with technical depth and direct respect for coastal fishing communities. Their proprietary AI demand forecasting minimizes supply-chain waste while preserving quality. This alignment of operational excellence and fair supplier treatment underpins FreshToHome's market position.",
    convictionPoints: [
      "Direct sourcing from 3,000+ fishermen and farmers",
      "Proprietary AI demand-forecasting reducing wastage below industry norms",
      "Profitable metros with expansion across the GCC",
    ],
    milestones: [
      { title: "TechCrunch: Amazon backs Indian meat startup FreshToHome in $104 million funding", url: "https://techcrunch.com/2023/02/21/amazon-freshtohome-india/", image: press_techcrunch_9328f8a3a8 },
      { title: "Business Standard: Amazon Smbhav Venture Fund leads $104 mn round in FreshToHome", url: "https://www.business-standard.com/article/companies/amazon-smbhav-venture-fund-leads-104-mn-round-in-meat-startup-freshtohome-123022101159_1.html" },
      { title: "FreshToHome: FreshToHome closes $104 mn Series D funding with Amazon Smbhav VC", url: "https://www.freshtohome.com/blog/freshtohome-closes-104-mn-series-d-funding-amazon-smbhav-vc-others/", image: press_freshtohome_51bf1d1f03 },
    ],
    mediaMentions: [
      { source: "TechCrunch", headline: "Amazon backs Indian meat startup FreshToHome in $104 million funding", url: "https://techcrunch.com/2023/02/21/amazon-freshtohome-india/" },
      { source: "Business Standard", headline: "Amazon Smbhav Venture Fund leads $104 mn round in FreshToHome", url: "https://www.business-standard.com/article/companies/amazon-smbhav-venture-fund-leads-104-mn-round-in-meat-startup-freshtohome-123022101159_1.html" },
    ],
    fund: "Growth Fund",
    logo: freshtohomeLogo,
    website: "https://freshtohome.com",
  },
  {
    slug: "wiffy",
    name: "Wiffy",
    sector: "Consumer",
    category: "Consumer",
    stage: "Seed",
    year: 2022,
    status: "Active",
    tagline: "Every install, done right the first time.",
    oneLiner: "India's largest B2B2C full-stack home installation company.",
    description:
      "Wify is India's largest B2B2C full-stack home installation company, running installation and after-sales service connecting brands with a nationwide network of trained service professionals. It manages installation, assembly, maintenance, and post-purchase support for categories such as furniture, appliances, and home improvement, with technology for scheduling, tracking, and quality assurance. Its customers are consumer brands and retailers that need consistent last-mile service. A managed, trained technician network rather than an open marketplace differentiates Wify within the home services and post-purchase experience category.",
    founders: "Vikram Sharma · Deepanshu Goel",
    problem:
      "Indian residential clusters rely on informal messaging groups and trust networks without an enterprise-grade platform to coordinate local commerce.",
    whyInvested:
      "Hyperlocal services succeed only when founders master street-level execution. The Wiffy team proved their trust-first product instincts by scaling neighborhood by neighborhood rather than burning capital on untargeted marketing. By building reliable service delivery that residential communities trust, they established defensibility where previous models failed.",
    convictionPoints: [
      "Community-first product loop with organic growth in launch neighborhoods",
      "Low CAC through trust-based referral mechanics",
      "Founder team with hyperlocal ops experience",
    ],
    milestones: [
      { title: "Capria Ventures: Wiffy portfolio company profile", url: "https://capria.vc/portfolio/company/wiffy/", image: press_capria_fdbbc5b62d },
      { title: "Capria Ventures: Why We Invested in Wify", url: "https://capria.vc/news/why-we-invested-in-wify/", image: press_capria_366396ac3a },
    ],
    mediaMentions: [
      { source: "Capria Ventures", headline: "Wiffy portfolio company profile", url: "https://capria.vc/portfolio/company/wiffy/" },
      { source: "Capria Ventures", headline: "Why We Invested in Wify", url: "https://capria.vc/news/why-we-invested-in-wify/" },
    ],
    fund: "Both",
    logo: wiffyLogo,
  },
  {
    slug: "gooru",
    name: "Gooru",
    sector: "EdTech",
    category: "Disruptive Tech",
    stage: "Series A",
    year: 2020,
    status: "Active",
    tagline: "Navigating every learner to mastery.",
    oneLiner: "US-based deep-tech AI software providing a GPS for personalized learning.",
    description:
      "Gooru is US-based deep-tech AI software that acts as a GPS for personalized learning, using learning data to personalise instruction for individual students. Its navigator maps competencies, identifies gaps, and routes learners along adaptive pathways, while giving educators visibility into progress. The platform is used by schools, districts, governments, and non-profits across multiple countries. An open, standards-based approach to learning content and competency mapping differentiates Gooru within the adaptive learning and public education technology category.",
    founders: "Prasad Ram (Founder & CEO, ex-Google)",
    problem:
      "One-size-fits-all classrooms fail students across diverse learning speeds. Individualized instruction remained a research prototype rather than a deployable public tool.",
    whyInvested:
      "Population-scale educational technology requires rare engineering capability. Prasad combines Google-scale technical architecture with educator patience. Gooru chose open standards, institutional research partnerships, and public-sector integrations long before adaptive learning became popular. That decade of infrastructure investment now reaches millions of students globally.",
    convictionPoints: [
      "Open-source Learning Navigator adopted across the US, India and Africa",
      "Founder-led team with Stanford, Google and open-education pedigree",
      "Partnerships with state and national education ministries",
    ],
    milestones: [
      { title: "The Hindu: Researchers develop a GPS for personalised eLearning", url: "https://www.thehindu.com/news/national/karnataka/researchers-develop-a-gps-for-personalised-elearning/article68374461.ece", image: press_thehindu_9e2e3c3f4a },
      { title: "Gooru: National Science Foundation DRK-12 grant to support Navigator", url: "https://gooru.org/about/portfolio/national-science-foundation-nsf/" },
    ],
    mediaMentions: [
      { source: "The Hindu", headline: "Researchers develop a GPS for personalised eLearning", url: "https://www.thehindu.com/news/national/karnataka/researchers-develop-a-gps-for-personalised-elearning/article68374461.ece" },
      { source: "Gooru", headline: "National Science Foundation DRK-12 grant to support Navigator", url: "https://gooru.org/about/portfolio/national-science-foundation-nsf/" },
    ],
    fund: "Growth Fund",
    logo: gooruLogo,
    website: "https://gooru.org",
  },
  {
    slug: "thimblerr",
    name: "Thimblerr",
    sector: "Fashion Supply Chain",
    category: "Consumer Enablers",
    stage: "Seed",
    year: 2023,
    status: "Active",
    tagline: "Tech-enabled fast-fashion outsourcing for large brands.",
    oneLiner: "Platform for tech-enabled fast-fashion outsourcing for large brands.",
    description:
      "Thimblerr is a platform for tech-enabled fast-fashion outsourcing for large brands, connecting apparel brands with verified manufacturing partners. It digitises sourcing, sampling, production tracking, and quality management, giving brands visibility into order status across a distributed supplier base. Customers include emerging and established apparel brands seeking reliable capacity without building in-house sourcing teams. By vetting manufacturers and managing production workflows on a single platform, Thimblerr addresses fragmentation and opacity in the garment manufacturing and supply chain category.",
    founders: "Piyush Jalan",
    problem:
      "India's 60M+ MSMEs form the backbone of apparel manufacturing, yet struggle with fragmented order visibility and working capital delays.",
    whyInvested:
      "Underwriting apparel supply chains requires operational grounding in factory workflows. The Thimblerr founders lived this reality before building their software platform. Their combination of manufacturing tracking and disciplined credit evaluation matches our focus on embedded B2B infrastructure. They prioritize underwriting quality over premature scale, bringing risk discipline to a critical industrial sector.",
    convictionPoints: [
      "Platform-embedded distribution with low CAC and high commercial intent",
      "Proprietary underwriting models tuned for MSME data patterns",
      "Founders with prior lending and platform experience",
    ],
    milestones: [
      { title: "Indian Startup Times: Thimblerr secures $1.4M to speed up India's fast-fashion supply chain", url: "https://www.indianstartuptimes.com/investment/thimblerr-secures-1-4m-to-speed-up-indias-fast-fashion-supply-chain/", image: press_indianstartuptimes_6a8ea4a2e7 },
      { title: "Economic Times B2B: Thimblerr bags $1.4 mn led by Inflection Point Ventures", url: "https://b2b.economictimes.indiatimes.com/news/entrepreneur/thimblerr-bags-1-4-mn-led-by-inflection-point-ventures/125456374", image: press_b2b_f426a1a032 },
      { title: "Entrackr: Thimblerr raises $1.4 Mn led by Inflection Point Ventures", url: "https://entrackr.com/snippets/thimblerr-raises-14-mn-led-by-inflection-point-ventures-10791498" },
    ],
    mediaMentions: [
      { source: "Indian Startup Times", headline: "Thimblerr secures $1.4M to speed up India's fast-fashion supply chain", url: "https://www.indianstartuptimes.com/investment/thimblerr-secures-1-4m-to-speed-up-indias-fast-fashion-supply-chain/" },
      { source: "Economic Times B2B", headline: "Thimblerr bags $1.4 mn led by Inflection Point Ventures", url: "https://b2b.economictimes.indiatimes.com/news/entrepreneur/thimblerr-bags-1-4-mn-led-by-inflection-point-ventures/125456374" },
    ],
    fund: "Micro Fund",
    logo: thimblerrLogo,
  },
  {
    slug: "boingg",
    name: "Boingg",
    sector: "Consumer",
    category: "Consumer",
    stage: "Seed",
    year: 2022,
    status: "Active",
    tagline: "Furniture designed for how kids actually live.",
    oneLiner: "Internet-first brand offering kids' furniture & decor.",
    description:
      "Boingg! is an internet-first brand offering kids' furniture and decor, designing for young families. Its product range spans beds, storage, study and play furniture, and décor built around child safety, durability, and space-efficient design for urban homes. The brand sells directly to consumers online and through marketplace channels. A design language and safety standard built specifically for children, rather than scaled-down adult furniture, differentiates Boingg! within the D2C kids' furniture and home category.",
    founders: "Dhruvan Barar",
    problem:
      "Indian parents are spending more than ever on their children, yet had almost no premium kids' furniture brands designed for Indian homes, budgets and family life.",
    whyInvested:
      "Kids' furniture demands precision manufacturing and deep safety standards. Dhruvan is a design-first operator who controls materials, modularity, and child ergonomics directly. His focus on craftsmanship and customer loyalty generated immediate brand equity and high referral rates. We backed a disciplined founder building enduring domestic manufacturing IP.",
    convictionPoints: [
      "Category creator in Indian kids' furniture D2C",
      "Design-led team with proprietary product IP",
      "Strong repeat and referral dynamics from early cohorts",
    ],
    milestones: [
      { title: "YourStory: D2C furniture brand Boingg raises Rs 2.2 cr in seed round led by Inflection Point Ventures", url: "https://yourstory.com/2021/11/d2c-furniture-brand-boingg-seed-round-inflection-point-ventures", image: press_yourstory_a9337c9489 },
      { title: "Entrackr: Boingg raises Rs 2 Cr in pre-Series A led by IPV", url: "https://entrackr.com/2023/01/boingg-raises-rs-2-cr-in-pre-series-a-led-by-ipv/" },
      { title: "Shark Tank Audits: Boingg Shark Tank India Episode Review", url: "https://sharktankaudits.com/boingg-shark-tank-india-episode-review/", image: press_sharktankaudits_71c8ec2b3e },
    ],
    mediaMentions: [
      { source: "YourStory", headline: "D2C furniture brand Boingg raises Rs 2.2 cr in seed round", url: "https://yourstory.com/2021/11/d2c-furniture-brand-boingg-seed-round-inflection-point-ventures" },
      { source: "Entrackr", headline: "Boingg raises Rs 2 Cr in pre-Series A led by IPV", url: "https://entrackr.com/2023/01/boingg-raises-rs-2-cr-in-pre-series-a-led-by-ipv/" },
    ],
    fund: "Micro Fund",
    logo: boinggLogo,
    website: "https://boingg.com",
  },
  {
    slug: "hexalog",
    name: "Hexalog",
    sector: "Logistics",
    category: "Consumer Enablers",
    stage: "Pre-Series A",
    year: 2022,
    status: "Active",
    tagline: "Cross-border trade, end to end.",
    oneLiner: "End-to-end import-export managing platform for Indian brands.",
    description:
      "Hexalog is an end-to-end import-export management platform for Indian brands and businesses trading across borders. It digitises procurement, supplier management, logistics coordination, documentation, and compliance in a single workflow, replacing the spreadsheets and intermediaries that typically govern cross-border trade. Its customers are exporters, importers, and brands scaling into international markets. By combining software with operational support across the trade lifecycle, Hexalog differentiates itself within the cross-border trade and logistics technology category.",
    founders: "Dibyanshu Tripathi · Utkarsh Tripathi",
    problem:
      "Cross-border freight still depends on manual spreadsheets and outdated software. Freight forwarders lose operational margin on avoidable documentation errors.",
    whyInvested:
      "Freight forwarding involves complex operational bottlenecks that only hands-on operators can solve. The Hexalog founders paired logistics operations experience with modern software design. They are building the operating system for cross-border trade across India and the GCC, earning long-term enterprise contracts by automating critical customs and freight workflows.",
    convictionPoints: [
      "Modern, mobile-first UX in a legacy-software category",
      "Fast-growing customer base across India and the GCC",
      "Deep operator DNA on the founding team",
    ],
    milestones: [
      { title: "Inc42: Hexalog secures $4 Mn funding to digitise cross-border supply chains", url: "https://inc42.com/buzz/hexalog-secures-4-mn-funding-to-digitise-cross-border-supply-chains/", image: press_inc42_42ca269a87 },
      { title: "YourStory: This Gurugram-based startup uses tech approach to make cross-border shipping seamless", url: "https://yourstory.com/2025/09/gurugram-startup-hexalog-cross-border-shipping-supply-chain-logistics", image: press_yourstory_3eb76718c7 },
    ],
    mediaMentions: [
      { source: "Inc42", headline: "Hexalog secures $4 Mn funding to digitise cross-border supply chains", url: "https://inc42.com/buzz/hexalog-secures-4-mn-funding-to-digitise-cross-border-supply-chains/" },
      { source: "YourStory", headline: "This Gurugram-based startup uses tech approach to make cross-border shipping seamless", url: "https://yourstory.com/2025/09/gurugram-startup-hexalog-cross-border-shipping-supply-chain-logistics" },
    ],
    fund: "Micro Fund",
    logo: hexalogLogo,
    website: "https://hexalog.in",
  },
  {
    slug: "extramile",
    name: "ExtraMile",
    sector: "Consumer",
    category: "Consumer",
    stage: "Seed",
    year: 2023,
    status: "Active",
    tagline: "Employee engagement & wellbeing, powered by an AI-driven gamified platform.",
    oneLiner: "Enabling employee engagement & wellbeing via an AI-driven gamified platform.",
    description:
      "ExtraMile Play enables employee engagement and wellbeing via an AI-driven gamified platform, using gamification and artificial intelligence to improve workplace participation, learning, and well-being. It delivers interactive challenges, quizzes, rewards, and recognition programmes that integrate with the tools employees already use, along with analytics for HR teams. Customers are mid-to-large enterprises seeking measurable engagement outcomes rather than one-off activities. Game mechanics applied to learning and culture programmes differentiate it within the HR technology and employee experience category.",
    founders: "Pooja Bajaj · Hitesh Ramnathkar",
    problem:
      "India's fantasy category is dominated by a few incumbents optimising for transactions. There's large white-space around fandom, community and creator-driven cricket engagement.",
    whyInvested:
      "Workplace engagement requires product craft and behavioral science. The ExtraMile founders built gamified loops that integrate into existing communication tools like Slack and Teams. Their enterprise adoption numbers and high daily active usage confirmed strong market pull. We backed an operator team delivering measurable corporate culture and productivity improvements.",
    convictionPoints: [
      "Community-first product loops distinct from transactional fantasy",
      "Strong engagement metrics in early cohorts",
      "Founders combining consumer, gaming and sports experience",
    ],
    milestones: [
      { title: "Entrackr: ExtraMile Play raises $500K in seed round led by GSF", url: "https://entrackr.com/snippets/extramile-play-raises-500k-in-seed-round-led-by-gsf-10691021" },
      { title: "Indian Startup Times: ExtraMile Play raises $500K seed funding to scale AI-driven gamified employee engagement", url: "https://www.indianstartuptimes.com/investment/extramile-play-raises-500k-seed-funding-to-scale-ai-driven-gamified-employee-engagement/", image: press_indianstartuptimes_133a116844 },
      { title: "The Tribune: ExtraMile Play raises USD 500K Seed Round to scale its gamified employee engagement platform", url: "https://www.tribuneindia.com/news/business/extramile-play-raises-usd-500k-seed-round-to-scale-its-gamified-employee-engagement-platform-2-2/", image: press_tribuneindia_634ad29006 },
    ],
    mediaMentions: [
      { source: "Entrackr", headline: "ExtraMile Play raises $500K in seed round led by GSF", url: "https://entrackr.com/snippets/extramile-play-raises-500k-in-seed-round-led-by-gsf-10691021" },
      { source: "Indian Startup Times", headline: "ExtraMile Play raises $500K seed funding", url: "https://www.indianstartuptimes.com/investment/extramile-play-raises-500k-seed-funding-to-scale-ai-driven-gamified-employee-engagement/" },
    ],
    fund: "Micro Fund",
    logo: extramileLogo,
  },
];

export const sectors = Array.from(new Set(companies.map((c) => c.sector)));
export const stages = Array.from(new Set(companies.map((c) => c.stage)));
export const categories = ["All", "Consumer", "Consumer Enablers", "Disruptive Tech"] as const;
