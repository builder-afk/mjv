import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, ShieldAlert, FileCheck2 } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Mount Judi Ventures LLP" },
      {
        name: "description",
        content:
          "Terms of Use governing access to mountjudi.com, unsolicited pitch deck submissions, intellectual property, and limitation of liability.",
      },
      { property: "og:title", content: "Terms of Use | Mount Judi Ventures LLP" },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const clauses = [
  {
    number: "01",
    title: "Acceptance & Informational Purpose",
    body: [
      "By accessing mountjudi.com, you agree to these Terms of Use. This website is operated by Mount Judi Ventures LLP (“MJV”) solely for general informational purposes regarding MJV, its investment thesis, team, and portfolio companies.",
      "Nothing on this website constitutes investment, financial, legal, tax, or accounting advice, nor does it constitute an offer to sell or a solicitation of an offer to buy any units or securities in any fund managed by MJV.",
    ],
  },
  {
    number: "02",
    title: "Unsolicited Pitch Submissions & Non-Confidentiality",
    body: [
      "MJV evaluates thousands of startup opportunities across overlapping sectors. Unless a separate written Non-Disclosure Agreement (NDA) has been executed by an authorized partner of MJV prior to submission, any pitch deck, executive summary, business plan, link, or information submitted via email (including pitch@mountjudi.com) or our Contact page is provided on a non-confidential basis.",
      "Submitting materials does not create any fiduciary, advisory, or partnership obligation on MJV, nor does it restrict MJV from evaluating, funding, or advising companies with competing or similar products, technologies, or business models.",
    ],
  },
  {
    number: "03",
    title: "Intellectual Property & Third-Party Marks",
    body: [
      "All original site content, copy, branding, and custom design elements on mountjudi.com are the property of Mount Judi Ventures LLP or its licensors. You may not scrape, reproduce, or redistribute site content for commercial purposes without prior written permission.",
      "Company names, logos, and press references displayed in portfolio or media sections belong to their respective owners and are shown solely to identify portfolio companies, exits, or third-party news coverage.",
    ],
  },
  {
    number: "04",
    title: "No Warranty & Limitation of Liability",
    body: [
      "This website is provided on an “as-is” and “as-available” basis without warranties of any kind. While we strive to keep portfolio, team, and fund information accurate and current, MJV makes no representation or warranty regarding completeness or timeliness.",
      "To the fullest extent permitted by law, Mount Judi Ventures LLP and its partners, employees, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your access to or reliance on this website or any linked external site.",
    ],
  },
  {
    number: "05",
    title: "Governing Law & Jurisdiction",
    body: [
      "These Terms of Use and any dispute arising from your use of this website are governed by the laws of India, with exclusive jurisdiction vested in the competent courts at Bengaluru, Karnataka, India.",
    ],
  },
];

function TermsPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-black/10 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="container-tight max-w-4xl">
          <div className="flex items-center gap-2.5 font-sans text-xs font-black uppercase tracking-[0.22em] text-[#1e6086] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0ab1d7]" />
            <span>WEBSITE GOVERNANCE</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 leading-[0.98]">
            Terms of Use
          </h1>
          <p className="mt-4 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Governing terms for visitors, founders submitting pitch materials, and third parties
            accessing mountjudi.com.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-sans">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e6086]/10 text-[#1e6086] border border-[#1e6086]/20 font-semibold">
              <Scale className="w-3.5 h-3.5" />
              Jurisdiction: Bengaluru, India
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b78c2d]/10 text-[#7c622b] border border-[#b78c2d]/30 font-semibold">
              <ShieldAlert className="w-3.5 h-3.5" />
              Non-NDA Pitch Submissions
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-black/10 font-medium">
              Effective: November 2026
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16">
        <div className="container-tight max-w-4xl space-y-6">
          {clauses.map((c) => (
            <article
              key={c.number}
              className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1e6086] text-white font-sans text-xs font-bold">
                  {c.number}
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                  {c.title}
                </h2>
              </div>
              <div className="space-y-3 font-sans text-sm text-neutral-700 leading-relaxed">
                {c.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="rounded-2xl border border-[#1e6086]/20 bg-[#1e6086]/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="font-sans text-sm text-neutral-700">
              For regulatory disclosures concerning our SEBI-registered funds, please review our{" "}
              <Link to="/disclosures" className="font-bold text-[#1e6086] underline">
                SEBI &amp; Risk Disclosures
              </Link>
              .
            </div>
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e6086] text-white font-sans text-xs font-bold hover:bg-[#164b6a] transition-colors shrink-0"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
