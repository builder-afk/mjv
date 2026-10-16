import sherifPhoto from "@/assets/team/sherif-kottapurath.webp";
import ebaadPhoto from "@/assets/team/ebaad-momin.webp";
import aliPhoto from "@/assets/team/mohammed-ali-shariff.webp";
import imadPhoto from "@/assets/team/imad-shariff.webp";
import praharshPhoto from "@/assets/team/praharsh-shahi.webp";
import areebPhoto from "@/assets/team/areeb-khan.webp";
import anamikaPhoto from "@/assets/team/anamika-saksena.webp";
import ajishPhoto from "@/assets/team/ajish-rahman.webp";
import mobeenPhoto from "@/assets/team/mohammed-mobeen-ismail-batla.webp";
import abdulRaheemPhoto from "@/assets/team/ch-abdul-raheem-color.webp";
import musthafaPhoto from "@/assets/team/pc-musthafa-color.webp";
import tinyPhilipPhoto from "@/assets/team/tiny-philip.webp";
import vedamoorthyPhoto from "@/assets/team/vedamoorthy-namasivayam-color.webp";
import barakaPhoto from "@/assets/team/baraka-khan-family-office.webp";
import geoffPhoto from "@/assets/team/geoff-woolley-color.webp";
import sridharPhoto from "@/assets/team/sridhar-mitta-color.webp";
import sunilPhoto from "@/assets/team/sunil-kolangara-color.webp";
import kaziPhoto from "@/assets/team/kazi-arif-zaman.webp";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: "Leadership" | "Investments" | "Platform";
  photo: string;
  linkedin: string;
  email?: string;
  summary: string;
  intro: string;
  bio: string[];
  philosophy: string;
  focus: string[];
  timeline: { company: string; role: string; years: string }[];
  notable: string[];
  interests: string[];
  testimonial?: { quote: string; author: string };
};

export const team: TeamMember[] = [
  {
    slug: "sherif-kottapurath",
    name: "Sherif Kottapurath",
    role: "Managing Partner",
    group: "Leadership",
    photo: sherifPhoto,
    linkedin: "https://www.linkedin.com/in/sherif/",
    email: "sherif@mountjudi.com",
    summary:
      "Four decades building enduring technology businesses across continents.",
    intro:
      "Technologist, serial entrepreneur and philanthropist with 40+ years across the global IT industry, several patents, and a lifelong commitment to building institutions that outlast their founders.",
    bio: [
      "Sherif Kottapurath brings over 40 years of experience across the global IT industry. He was among the earliest employees at Wipro, where he set up the Wipro R&D team's US services business and helped shape the company's engineering culture in its formative years.",
      "He went on to serve as Chief Technology Officer at Sun Microsystems, leading product and platform teams building the infrastructure that powered a generation of the internet economy. He holds several patents in his name across enterprise systems and distributed computing.",
      "A serial entrepreneur, Sherif was the Architect of POSibolt, an ERP and retail software platform serving medium-sized companies across Asia, the Middle East, Africa and Europe. He was the CEO of icalibrator training that focused on digital skilling and training. He is also the Founder and Chairman of Rehbar Financial Services, an ethical wealth-management firm serving investors across India.",
      "Beyond technology and finance, Sherif has initiated several philanthropic institutions. He founded LEAD Trust, which has guided many students to admissions at India's top institutions including the IITs and NITs, and helped establish HBS Hospital, which runs one of the largest low-cost dialysis centres in Bangalore.",
      "A 1982 graduate of BITS Pilani, Sherif currently serves on the boards of InnAccel Technologies and Staqu Technologies, and partners with founders at Mount Judi Ventures as a patient, hands-on ally.",
    ],
    philosophy:
      "Enduring companies are built by founders who treat engineering, ethics and customer trust as one discipline.",
    focus: [
      "Enterprise Software",
      "Deep Tech",
      "Healthcare Technology",
      "Digital Infrastructure",
      "Scaling Engineering Orgs",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Managing Partner", years: "Present" },
      { company: "Sun Microsystems", role: "Chief Technology Officer", years: "Prior" },
      { company: "Wipro", role: "Early Employee / Set up US R&D Services Business", years: "Early Career" },
      { company: "BITS Pilani", role: "Graduate, Class of 1982", years: "1982" },
    ],
    notable: [
      "ex-CTO, Sun Microsystems",
      "Founder & Chairman, Rehbar Financial Consultants",
      "Architect, POSibolt\u00a0 \u00a0 \u00a0 \u00a0 \u00a0CEO, icalibrator",
      "Board Member: InnAccel & Staqu",
      "Founder, LEAD Trust",
      "HBS Hospital: low-cost dialysis, Bangalore",
      "Multiple patents",
      "BITS Pilani, 1982",
    ],
    interests: ["Philanthropy", "Education", "Healthcare", "Mentoring", "Technology"],
  },
  {
    slug: "ebaad-momin",
    name: "Dr. Ebaad Momin",
    role: "Partner",
    group: "Leadership",
    photo: ebaadPhoto,
    linkedin: "https://www.linkedin.com/in/ebaad-momin-a8435324/",
    email: "ebaad.momin@mountjudi.com",
    summary:
      "Banker-turned-VC, enabling investors to channel capital to fuel the India growth story.",
    intro:
      "Ebaad has spent his career at the intersection of funding and building companies. Starting as a banker, then as an early-stage investor, he builds relationships and channels growth capital into India.",
    bio: [
      "Ebaad Momin leads Business Development, Legal and Compliance at Mount Judi Ventures.\u00a0",
      "He spearheads business development and capital formation by cultivating deep relationships with individual and institutional LPs, managing the end-to-end fundraising lifecycle, and driving investor confidence through transparent reporting.",
      "Additionally, Ebaad oversees legal and compliance functions across the investment lifecycle, including structuring transactions, negotiating shareholder and exit agreements, and ensuring rigorous regulatory adherence for portfolio companies and investors.",
      "Ebaad serves as a Board Observer for the following portfolio companies - Staqu Technologies and Text Mercato Solutions. Prior to joining Mount Judi, Ebaad was a Director - Business Development at both the Amicorp Group and Kitara Capital. Ebaad commenced his career as a relationship manager for International Private Banking at ICICI Bank, based out of Dubai. Ebaad has completed his PhD from INCEIF, Kuala Lumpur.\u00a0\u00a0 \u00a0",
    ],
    philosophy:
      "We invest in founders whose values we would still admire ten years and one downturn later.",
    focus: [
      "Consumer",
      "Healthcare",
      "Enterprise Software",
      "Operations",
      "Founder Partnership",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Partner", years: "Present" },
      { company: "Operator & Investor", role: "Early-stage Investing", years: "Prior" },
    ],
    notable: ["Early-stage Investing", "Operator Experience"],
    interests: ["Reading", "Travel", "Mentoring", "Sports"],
  },
  {
    slug: "mohammed-ali-shariff",
    name: "Mohammed Ali Shariff",
    role: "Partner",
    group: "Leadership",
    photo: aliPhoto,
    linkedin: "https://www.linkedin.com/in/mohammed-ali-shariff/",
    email: "alishariff@mountjudi.com",
    summary:
      "Believer in the power of good capital, innovation and grit to enable societal progress",
    intro:
      "Ali brings an institutional lens to early-stage investing, pairing rigorous underwriting with ethical foundations that anchor Mount Judi's mandate.",
    bio: [
      "Mohammed Ali Shariff leads fund, investments and growth strategy and operations at Mount Judi Ventures, shaping how the firm sources, underwrites, stewards and multiplies capital.  ",
      "Ali brings over 25+ years of global experience across India, the USA, and the UK, spanning Venture Capital, Management Consulting, and Supply Chain IT. His background bridges institutional finance and founder-first investing, an unusual combination that lets MJV move with both the discipline of a mature allocator and the speed of an early-stage partner.",
      "Ali actively contributes as a board member or observer in several of Mount Judi's portfolio companies, including Dil Foods, Lo~ Foods, InnAccel, 4baseCare, Skye Air, Convegenius and Internshala. Ali is also a director at Rehbar Financial Services, which provides ethically compliant financing to SMEs. Ali is committed to building a firm where returns and values are not in tension, but reinforce each other over decades.",
      "Previously, Ali was a Director at Deloitte India and a Manager at PwC. He holds an MSc from the London School of Economics, an MBA from IIM-Ahmedabad, and a CSS from Harvard University, and he ranked first in his university for his BTech in Industrial Engineering.",
      "Beyond his professional endeavors, Ali dedicates his time to social impact, holding key positions with The Lifeline Foundation- which provides interest free microfinance and supports underserved communities in Bangalore, HBS Hospital– operating a low-cost hospital, and Mercy Mission– running the Mercy Blood Centre in Bengaluru.",
    ],
    philosophy:
      "Capital is a commodity. Character, clarity of purpose, patience, and passion are not.",
    focus: [
      "Fund Strategy",
      "LP Relationships",
      "Ethical Investing",
      "Governance",
      "Institutional Capital",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Partner", years: "Present" },
      { company: "Rehbar Financial Services", role: "Director", years: "Present" },
      { company: "Deloitte India", role: "Director", years: "Prior" },
      { company: "PwC", role: "Manager", years: "Prior" },
      { company: "London School of Economics", role: "MSc", years: "" },
      { company: "IIM Ahmedabad", role: "MBA", years: "" },
      { company: "Harvard University", role: "CSS", years: "" },
      { company: "BTech Industrial Engineering", role: "Ranked First in University", years: "" },
    ],
    notable: [
      "25+ years global experience across India, USA & UK",
      "Director at Deloitte India",
      "Manager at PwC",
      "Board Member / Observer: Dil Foods, Lo~ Foods, InnAccel, 4baseCare, Skye Air, Convegenius & Internshala",
      "Director, Rehbar Financial Services",
      "MSc, London School of Economics",
      "MBA, IIM Ahmedabad",
      "CSS, Harvard University",
      "First in University: BTech Industrial Engineering",
      "The Lifeline Foundation, HBS Hospital & Mercy Mission",
    ],
    interests: ["Reading", "Community", "Mentoring", "Travel"],
  },
  {
    slug: "imad-shariff",
    name: "Imad Ahmed Shariff",
    role: "SR. MANAGER / GROWTH",
    group: "Platform",
    photo: imadPhoto,
    linkedin: "https://www.linkedin.com/in/imad-ahmed-shariff/",
    email: "imadshariff@mountjudi.com",
    summary: "Confidant, Coach & Trusted Critic empowering Founders to achieve superior outcomes.",
    intro:
      "Imad leads Platform & Growth at MJV, helping founders tackle their biggest hurdles as a trusted partner alongside them in the trenches.",
    bio: [
      "Imad Shariff leads the Growth function at Mount Judi Ventures, acting as a sparring partner and trusted ally to our Founders, providing candid feedback and clarity to help them accelerate growth and achieve breakout scale.",
      "His work is quiet by design, delivering a compounding advantage in key decisions, enterprise contracts, and market introductions. He partners with founders and their leadership teams to navigate complexity and sharpen focus.",
      "Prior to joining Mount Judi, Imad was an entrepreneur who built and scaled startups across EdTech and Food. He brings a rare combination of sectoral and functional expertise in business strategy, crisis navigation, and organizational build-out, turning early-stage ventures into at-scale businesses. Imad is a passionate problem-solver, toughened by lessons learned from both success and failure.",
      "Imad is certified in Strategic Management and Business Essentials Program by INSEAD and remains a Mechanical Engineer at heart.",
    ],
    philosophy:
      "The best platform work is invisible when it is working, and unmistakable when it is missing.",
    focus: [
      "Portfolio Growth",
      "Talent Networks",
      "Community",
      "Brand",
      "Go-to-Market",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Sr. Manager / Growth", years: "Present" },
      { company: "Entrepreneur: EdTech & Food", role: "Founder / Operator", years: "Prior" },
      { company: "INSEAD", role: "Strategic Management & Business Essentials Program", years: "" },
      { company: "Mechanical Engineering", role: "Engineer at Heart", years: "" },
    ],
    notable: [
      "Leads Growth & Platform at Mount Judi Ventures",
      "Entrepreneur across EdTech & Food",
      "Business Strategy, Crisis Navigation & Organizational Build-out",
      "Certified in Strategic Management & Business Essentials: INSEAD",
      "Mechanical Engineer at Heart",
    ],
    interests: ["Community", "Travel", "Sports", "Music"],
  },
  {
    slug: "praharsh-shahi",
    name: "Praharsh Shahi",
    role: "SR. MANAGER / INVESTMENTS",
    group: "Investments",
    photo: praharshPhoto,
    linkedin: "https://www.linkedin.com/in/praharsh-shahi/",
    email: "praharsh@mountjudi.com",
    summary: "Sources Founders with breakout potential to become category-defining champions.",
    intro:
      "Praharsh anchors investments at MJV from initial pitch through term sheet, with a bias for depth, structure and clear-eyed judgement.",
    bio: [
      "Praharsh Shahi leads investment execution at Mount Judi Ventures, where he is responsible for sourcing of deals and taking them through commercial diligence, investment structuring and portfolio construction.\u00a0He brings a rigorous, research-led approach to every deal, asking questions that separate a good story from a great business.",
      "Praharsh brings in a rich and varied experience prior to joining Mount Judi. He was an investment manager at Klub, Deputy Manager in the Transaction Advisory Services at Protiviti, Senior Analyst in the M&A and Private Equity division in Finvista\u00a0 \u00a0and a Financial Analyst at\u00a0 Northern Trust.\u00a0",
      "Praharsh has done his MBA from IBS Hyderabad, and BBM from Manipal Academy of Higher Education.",
    ],
    philosophy:
      "Discipline in diligence is the greatest service you can offer a founder and a fund.",
    focus: [
      "Diligence",
      "Deal Structuring",
      "Portfolio Construction",
      "Sector Research",
      "Financial Analysis",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Manager / Investments", years: "Present" },
      { company: "Klub", role: "Investment Manager", years: "Prior" },
      { company: "Protiviti", role: "Deputy Manager / Transaction Advisory Services", years: "Prior" },
      { company: "Finvista", role: "Senior Analyst / M&A and Private Equity", years: "Prior" },
      { company: "Northern Trust", role: "Financial Analyst", years: "Prior" },
      { company: "IBS Hyderabad", role: "MBA", years: "" },
      { company: "Manipal Academy of Higher Education", role: "BBM", years: "" },
    ],
    notable: [
      "Investment Execution & Diligence",
      "Investment Manager, Klub",
      "Deputy Manager: TAS, Protiviti",
      "Senior Analyst: M&A / PE, Finvista",
      "Financial Analyst, Northern Trust",
      "MBA, IBS Hyderabad",
      "BBM, Manipal Academy of Higher Education",
    ],
    interests: ["Reading", "Cricket", "Travel", "Cinema"],
  },
  {
    slug: "areeb-khan",
    name: "Areeb Khan",
    role: "ANALYST / INVESTMENTS",
    group: "Investments",
    photo: areebPhoto,
    linkedin: "https://www.linkedin.com/in/amk27004/",
    summary:
      "Exploring technology-led businesses at the intersection of AI, IoT and deep tech.",
    intro:
      "Areeb combines an engineering foundation with hands-on AI automation experience to identify and evaluate emerging technology businesses.",
    bio: [
      "Areeb Khan is an Analyst at Mount Judi Ventures, where he focuses on identifying and evaluating promising technology-driven companies and emerging opportunities.",
      "With a background in Electronics and Communication Engineering and hands-on experience building AI automation solutions, he brings a technology-first perspective to investment research and diligence.",
      "His core interests span artificial intelligence, the Internet of Things, deep tech and emerging technologies. He is especially interested in understanding both the underlying technology and the enduring businesses that can be built around it.",
    ],
    philosophy:
      "The strongest technology businesses pair genuine technical depth with a clear, durable customer need.",
    focus: [
      "Artificial Intelligence",
      "IoT",
      "Deep Tech",
      "Emerging Technologies",
      "Investment Research",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Analyst / Investments", years: "Present" },
      { company: "AI Automation", role: "Solution Building & Technology Research", years: "Prior" },
      { company: "Electronics & Communication Engineering", role: "Engineering", years: "" },
    ],
    notable: ["AI Automation", "Technology Research", "Investment Evaluation"],
    interests: ["Artificial Intelligence", "IoT", "Deep Tech", "Emerging Technology"],
  },
  {
    slug: "anamika-saksena",
    name: "Anamika Saksena",
    role: "ANALYST / GROWTH",
    group: "Platform",
    photo: anamikaPhoto,
    linkedin: "https://www.linkedin.com/in/anamikasaksena/",
    summary:
      "Supporting portfolio growth through thoughtful analysis, research and close founder collaboration.",
    intro:
      "Anamika works with MJV's portfolio companies on growth, combining an Economics and Statistics foundation with a research-led approach.",
    bio: [
      "Anamika Saksena is an Analyst in the Growth team at Mount Judi Ventures, supporting portfolio companies as they sharpen priorities, evaluate opportunities and build toward sustainable scale.",
      "An Economics and Statistics graduate from Lady Shri Ram College for Women, she brings a structured, analytical perspective to company building and portfolio support.",
      "Her earlier experience spans business finance and research, giving her a practical understanding of how data, commercial context and clear execution come together in a growing business. Outside work, she is an avid reader and artist.",
    ],
    philosophy:
      "Good growth work turns careful analysis into clear choices founders can act on.",
    focus: [
      "Portfolio Growth",
      "Business Analysis",
      "Market Research",
      "Growth Strategy",
      "Founder Support",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Analyst / Growth", years: "Present" },
      { company: "QBS Learning", role: "Business Finance Analyst", years: "Prior" },
      { company: "Lady Shri Ram College for Women", role: "Economics & Statistics", years: "2025" },
    ],
    notable: ["Portfolio Growth", "Business Finance", "Economics & Statistics"],
    interests: ["Reading", "Art", "Research", "Company Building"],
  },
  {
    slug: "ajish-rahman",
    name: "Ajish Rahman",
    role: "Investment Associate",
    group: "Investments",
    photo: ajishPhoto,
    linkedin: "https://www.linkedin.com/in/ajish-rahman/",
    summary: "Deep-dive sector research and founder-first evaluation across the pipeline.",
    intro:
      "Ajish leads sector research and pipeline development, spending time with founders and markets to surface the theses MJV builds around.",
    bio: [
      "Ajish Rahman works across the MJV pipeline from thesis development to early founder conversations, with a focus on emerging categories in India.",
      "He believes the best investors are the most curious ones, and treats every founder meeting as a lesson in how a market really works.",
    ],
    philosophy:
      "Every great investment begins as a question no one else is asking yet.",
    focus: [
      "Sector Research",
      "Pipeline Development",
      "Founder Diligence",
      "Emerging Categories",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Investment Associate", years: "Present" },
    ],
    notable: ["Sector Research", "Founder Evaluation"],
    interests: ["Reading", "Football", "Travel", "Photography"],
  },
  {
    slug: "mohammed-mobeen-ismail-batla",
    name: "Mohammed Mobeen Ismail Batla",
    role: "Investment Analyst",
    group: "Investments",
    photo: mobeenPhoto,
    linkedin: "https://www.linkedin.com/in/mobeen-batla-0a9508106/",
    summary: "Numbers, narratives, and the discipline that turns thesis into decision.",
    intro:
      "Mobeen supports the investment team across financial analysis, market mapping, and the everyday craft of turning a thesis into a decision.",
    bio: [
      "Mohammed Mobeen Ismail Batla is an Investment Analyst at Mount Judi Ventures, contributing to sector research, financial modelling and diligence.",
      "He brings analytical rigor and a founder-first sensibility to every stage of the investment process.",
    ],
    philosophy:
      "A model is only as honest as the assumptions you're willing to defend out loud.",
    focus: [
      "Financial Modelling",
      "Market Mapping",
      "Diligence Support",
      "Data Analysis",
    ],
    timeline: [
      { company: "Mount Judi Ventures", role: "Investment Analyst", years: "Present" },
    ],
    notable: ["Financial Analysis", "Market Research"],
    interests: ["Reading", "Chess", "Sports", "Technology"],
  },
];

export type GeneralPartner = {
  slug?: string;
  name: string;
  role?: string;
  photo: string;
  linkedin?: string;
  based?: string;
  summary?: string;
  intro?: string;
  bio?: string[];
  philosophy?: string;
  focus?: string[];
  timeline?: { company: string; role: string; years: string }[];
  notable?: string[];
};

/** Anything renderable in the full-screen profile overlay. */
export type ProfilePerson = {
  slug?: string;
  name: string;
  role?: string;
  photo: string;
  linkedin?: string;
  email?: string;
  based?: string;
  intro?: string;
  summary?: string;
  bio?: string[];
  philosophy?: string;
  focus?: string[];
  timeline?: { company: string; role: string; years: string }[];
  notable?: string[];
};


export const generalPartners: GeneralPartner[] = [
  {
    slug: "ch-abdul-raheem",
    name: "C.H. Abdul Raheem",
    role: "General Partner",
    photo: abdulRaheemPhoto,
    linkedin: "https://www.linkedin.com/in/c-h-abdul-raheem-92403733",
    based: "Kochi, India",
    summary:
      "Chartered Accountant and healthcare finance leader with 45+ years of experience.",
    intro:
      "A Chartered Accountant with over 45 years across finance, healthcare and investing, best known for engineering one of India's largest private-equity healthcare transactions.",
    bio: [
      "C.H. Abdul Raheem is a Chartered Accountant with more than 45 years of experience spanning finance, healthcare and investments across national and international businesses.",
      "As Executive Director – Finance at KIMS Healthcare, he led the largest private equity transaction in India's healthcare sector in 2017, raising USD 200 million from True North. He continues to serve KIMS Healthcare Management Ltd in a senior finance and board capacity.",
      "He serves on the board of 4baseCare Genomics, bringing financial discipline and healthcare sector judgement to a fast-scaling precision oncology company.",
      "At Mount Judi Ventures he is a General Partner, applying decades of financial diligence and healthcare operating insight to the firm's ethical investing mandate. He is also active in several educational and social organisations in Kerala.",
    ],
    focus: [
      "Healthcare Finance",
      "Private Equity",
      "Financial Diligence",
      "Board Governance",
    ],
    timeline: [
      { company: "KIMS Healthcare Management Ltd", role: "Executive Director – Finance", years: "Long-tenured" },
      { company: "4baseCare Genomics", role: "Board Member", years: "Present" },
      { company: "Mount Judi Ventures", role: "General Partner", years: "2017 – Present" },
    ],
    notable: [
      "USD 200M True North raise for KIMS Healthcare",
      "45+ years in finance",
      "Chartered Accountant",
    ],
  },
  {
    slug: "pc-musthafa",
    name: "P.C. Musthafa",
    role: "General Partner",
    photo: musthafaPhoto,
    linkedin: "https://www.linkedin.com/in/musthafa-p-7052082",
    based: "Bengaluru, India",
    summary:
      "Co-founder and CEO of iD Fresh Food, India's most trusted fresh food brand.",
    intro:
      "From an engineer at IBM to building India's most trusted fresh food brand from scratch, with a no-preservatives promise he has defended publicly for two decades.",
    bio: [
      "P.C. Musthafa co-founded iD Fresh Food in 2005 in Bengaluru with his cousins, turning a small idli and dosa batter business into one of India's largest fresh, preservative-free food companies.",
      "The business was built on a single uncompromising promise of zero preservatives, a claim he has publicly stress-tested through independent testing and widely covered campaigns.",
      "Under his leadership as CEO, iD Fresh Food expanded from batter into parottas, chutneys and other ready-to-cook categories, growing distribution across India and into international markets including the UAE and the United States.",
      "A frequent speaker on entrepreneurship, food safety and consumer trust, Musthafa brings a hands-on operator's lens to Mount Judi's consumer investments as a General Partner.",
    ],
    focus: [
      "Consumer Brands",
      "Food & FMCG",
      "Supply Chain",
      "Brand Trust",
    ],
    timeline: [
      { company: "IBM", role: "Software Engineer", years: "Pre-2005" },
      { company: "iD Fresh Food", role: "Co-founder", years: "2005" },
      { company: "iD Fresh Food", role: "Chief Executive Officer", years: "Present" },
      { company: "Mount Judi Ventures", role: "General Partner", years: "Present" },
    ],
    notable: [
      "Built India's largest fresh batter brand",
      "Preservative-free category pioneer",
      "Operations across India, UAE and the US",
    ],
  },
  {
    slug: "tiny-philip",
    name: "Tiny Philip",
    role: "General Partner",
    photo: tinyPhilipPhoto,
    linkedin:
      "https://www.linkedin.com/in/tiny-philip-0164422/",
    based: "Kochi, India",
    summary:
      "Founder and CEO of Results Consulting Group; 27+ years advising SME and family businesses.",
    intro:
      "A veteran business consultant who has spent three decades helping family businesses across India and the Gulf become debt-free, disciplined and investable.",
    bio: [
      "Tiny Philip is the Founder and CEO of Results Consulting Group, a business advisory firm he has run for more than 27 years, working long-term with SME and family businesses across India and the GCC.",
      "His practice focuses on capital restructuring, debt reduction and profitability, helping owner-run businesses move from opportunistic growth to durable governance and cash discipline.",
      "He is a Director at Secura Investments, positioned as Kerala's first ethical real estate focused investment platform, and a published columnist writing on growth traps, feasibility and market diversification.",
      "At Mount Judi Ventures he serves as a General Partner, bringing SME turnaround experience and family-business governance judgement to the firm's portfolio. He holds a B.Tech in Electronics & Communications from the University of Kerala.",
    ],
    focus: [
      "SME Advisory",
      "Capital Restructuring",
      "Family Business Governance",
      "Strategy",
    ],
    timeline: [
      { company: "Results Consulting Group", role: "Founder & CEO", years: "1994 – Present" },
      { company: "Secura Investments", role: "Director", years: "Present" },
      { company: "Mount Judi Ventures", role: "General Partner", years: "Present" },
    ],
    notable: [
      "27+ years of SME advisory",
      "Debt reduction and turnaround specialist",
      "Business columnist",
    ],
  },
  {
    slug: "vedamoorthy-namasivayam",
    name: "Vedamoorthy Namasivayam",
    role: "General Partner",
    photo: vedamoorthyPhoto,
    linkedin:
      "https://www.linkedin.com/in/namasivayam-vedamoorthy-748835184",
    based: "Bengaluru, India",
    summary:
      "Retired Deloitte India partner with 40+ years in infrastructure and public-sector consulting.",
    intro:
      "A former Deloitte and PwC partner who has led large infrastructure, energy and public-sector programmes across three continents.",
    bio: [
      "Vedamoorthy Namasivayam has over 40 years of experience leading large, complex, multi-year programmes across energy, infrastructure, social and government sectors in India, China, Saudi Arabia, Ghana, Nigeria and South Asia.",
      "He spent close to a decade as a Partner at Deloitte India, leading the Public Sector practice within Consulting and serving as the firm's Energy & Resources industry leader, following earlier years at PwC.",
      "He holds a Master's in Industrial Management from IIT Madras and a Master's in Social Science, and is a Trustee of the M.S. Swaminathan Research Foundation.",
      "He is a General Partner at Mount Judi Ventures, a Director at SP Robotic Works and a Member of the Kerala State Planning Board.",
    ],
    focus: [
      "Infrastructure",
      "Energy & Resources",
      "Government Advisory",
      "Social Impact",
    ],
    timeline: [
      { company: "PwC", role: "Consulting Leadership", years: "Early career" },
      { company: "Deloitte India", role: "Partner – Public Sector & Energy Lead", years: "~10 years" },
      { company: "Kerala State Planning Board", role: "Member", years: "2021 – Present" },
      { company: "SP Robotic Works", role: "Director", years: "2021 – Present" },
      { company: "Mount Judi Ventures", role: "General Partner", years: "Present" },
    ],
    notable: [
      "40+ years across three continents",
      "Trustee, M.S. Swaminathan Research Foundation",
      "IIT Madras alumnus",
    ],
  },
  {
    slug: "kazi-arif-zaman",
    name: "Kazi Arif Zaman",
    role: "Investment Committee",
    photo: kaziPhoto,
    linkedin: "https://www.linkedin.com/in/kaziz",
    based: "Bengaluru, India",
    summary:
      "CFA charterholder with 24+ years in private equity and investment banking.",
    intro:
      "A career private equity and investment banking professional who has deployed over USD 200 million across venture and growth deals.",
    bio: [
      "Kazi Arif Zaman has more than 24 years of experience across private equity and investment banking, including 11+ years in private equity during which he deployed and managed over USD 200 million in VC and PE transactions.",
      "He has served on the boards of portfolio companies across renewable energy, wireless broadband, beauty services and HR and labour compliance, working closely with founders on governance and scale-up decisions.",
      "His career includes roles as Managing Director at Everstone Capital, Associate Director at ICICI Venture and a position at ANZ Investment Bank. He is a CFA charterholder and a Founder-Director of the CFA India Society, with degrees from IIM Ahmedabad and IIT Kharagpur.",
      "At Mount Judi Ventures he advises on deal structuring and sits on the Investment Committee. He is also a Board Observer at Protein Chef.",
    ],
    focus: [
      "Deal Structuring",
      "Private Equity",
      "Board Governance",
      "Diligence",
    ],
    timeline: [
      { company: "ANZ Investment Bank", role: "Investment Banking", years: "Early career" },
      { company: "ICICI Venture", role: "Associate Director", years: "Prior" },
      { company: "Everstone Capital", role: "Managing Director", years: "Prior" },
      { company: "Mount Judi Ventures", role: "Deal Advisor & IC Member", years: "Present" },
    ],
    notable: [
      "USD 200M+ deployed",
      "CFA charterholder",
      "Founder-Director, CFA India Society",
      "Board Observer, Protein Chef",
    ],
  },
  {
    name: "Baraka Khan Family Office",
    role: "Anchor Investor",
    photo: barakaPhoto,
  },
];

export const advisoryBoard: GeneralPartner[] = [
  {
    slug: "geoff-woolley",
    name: 'Geoff "Chester" Woolley',
    role: "Advisory Board",
    photo: geoffPhoto,
    linkedin: "https://www.linkedin.com/in/geoff-woolley-b0665",
    based: "San Francisco, USA",
    summary:
      "Founding Partner of Patamar Capital and a pioneer of the venture debt asset class.",
    intro:
      "A venture capital pioneer who has managed over USD 2 billion across the US, Europe and Asia, and helped create venture debt as an asset class.",
    bio: [
      "Geoff \"Chester\" Woolley has been active in venture capital for over 30 years, founding several venture funds across the US, Europe and Asia and managing more than USD 2 billion in investment capital.",
      "As Founding Partner of Dominion Ventures and European Venture Partners (later Kreos Capital), he pioneered venture debt, investing debt and equity into more than 400 companies.",
      "He joined Patamar Capital as a Founding Partner, where the firm focuses on impact venture investing across South and Southeast Asia.",
      "He is also Chairman and co-founder of University Impact, a student-run impact venture firm, and advises Mount Judi Ventures on fund strategy and global market access.",
    ],
    focus: [
      "Venture Debt",
      "Impact Investing",
      "Fund Strategy",
      "Global Markets",
    ],
    timeline: [
      { company: "Dominion Ventures", role: "Founding Partner", years: "Prior" },
      { company: "European Venture Partners / Kreos Capital", role: "Founding Partner", years: "Prior" },
      { company: "Patamar Capital", role: "Founding Partner", years: "2009 – Present" },
      { company: "University Impact", role: "Chairman & Co-founder", years: "Present" },
    ],
    notable: [
      "USD 2B+ capital managed",
      "400+ companies backed",
      "Venture debt pioneer",
    ],
  },
  {
    slug: "sridhar-mitta",
    name: "Dr. Sridhar Mitta",
    role: "Advisory Board",
    photo: sridharPhoto,
    linkedin: "https://www.linkedin.com/in/sridhar-mitta",
    based: "Bengaluru, India",
    summary:
      "Wipro's first employee and first CTO; founder of e4e and NextWealth.",
    intro:
      "The technologist who helped Azim Premji take Wipro into computing, and has spent five decades building India's technology and entrepreneurship ecosystem.",
    bio: [
      "Dr. Sridhar Mitta has more than 50 years of experience across technology, business, entrepreneurship and social impact in the Indian IT industry.",
      "He was Wipro's first employee when the company entered the computer industry in 1980, and served 20 years as its first Chief Technology Officer and President of Technology Divisions, leading R&D that designed computing systems suited to Indian conditions.",
      "He later founded EnThink Inc. as CEO and e4e Labs as Founder and Managing Director, an incubation and venture-building platform for early technology companies.",
      "He is Founder and Chief Mentor of NextWealth Entrepreneurs, a rural impact-sourcing company, and a recipient of the Dataquest Lifetime Achievement Award. He advises Mount Judi Ventures on technology and deep-tech diligence.",
    ],
    focus: [
      "Deep Tech",
      "Product Engineering",
      "Incubation",
      "Impact Sourcing",
    ],
    timeline: [
      { company: "Wipro", role: "First CTO & President, Technology Divisions", years: "1980 – 2000" },
      { company: "EnThink Inc.", role: "Founder & CEO", years: "Prior" },
      { company: "e4e Labs", role: "Founder & Managing Director", years: "Prior" },
      { company: "NextWealth Entrepreneurs", role: "Founder & Chief Mentor", years: "2008 – Present" },
    ],
    notable: [
      "Wipro's first employee and first CTO",
      "Dataquest Lifetime Achievement Award",
      "50+ years in Indian IT",
    ],
  },
  {
    slug: "sunil-kolangara",
    name: "Sunil Kolangara",
    role: "Advisory Board",
    photo: sunilPhoto,
    linkedin: "https://www.linkedin.com/in/sunil-kolangara-902aa91",
    based: "Bengaluru, India",
    summary:
      "Venture Partner and IC Member at Ascent Capital; 17 years in private equity.",
    intro:
      "A career private equity investor who spent 17 years across three Ascent Capital funds and now advises on venture investment decisions.",
    bio: [
      "Sunil Kolangara is an experienced finance professional with a track record across Indian capital markets, IT, venture capital and private equity.",
      "He served as Investment Partner at Ascent Capital for 17 years across three private equity funds, and continues with the firm as an Investment Committee member and Venture Partner.",
      "He has backed around 25 companies as an investor, including Unicent, Newgen Software Technologies and Forefield, with particular interest in healthcare and consumer technology.",
      "He advises Mount Judi Ventures on portfolio construction, corporate finance and fundraising strategy.",
    ],
    focus: [
      "Private Equity",
      "Portfolio Construction",
      "Healthcare",
      "Corporate Finance",
    ],
    timeline: [
      { company: "Ascent Capital", role: "Investment Partner", years: "2003 – 2020" },
      { company: "Ascent Capital", role: "IC Member & Venture Partner", years: "2020 – Present" },
      { company: "Mount Judi Ventures", role: "Advisory Board", years: "Present" },
    ],
    notable: [
      "17 years across three PE funds",
      "~25 companies backed",
      "Healthcare and consumer focus",
    ],
  },
];


export const investmentCommittee: GeneralPartner[] = [];

export function getMemberBySlug(slug: string) {
  return team.find((m) => m.slug === slug);
}

export function getAdjacentMembers(slug: string) {
  const i = team.findIndex((m) => m.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const prev = i > 0 ? team[i - 1] : team[team.length - 1];
  const next = i < team.length - 1 ? team[i + 1] : team[0];
  return { prev, next };
}
