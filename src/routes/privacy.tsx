import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Mail, FileText } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mount Judi Ventures LLP" },
      {
        name: "description",
        content:
          "Privacy Policy for Mount Judi Ventures LLP covering personal data handling, founder pitch correspondence, LP inquiries, cookies, and DPDPA/GDPR rights.",
      },
      { property: "og:title", content: "Privacy Policy | Mount Judi Ventures LLP" },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    number: "01",
    title: "Data Fiduciary & Scope",
    body: [
      "This Privacy Policy explains how Mount Judi Ventures LLP (“MJV”, “we”, “us”, or “our”), an investment manager to SEBI-registered Alternative Investment Funds with its registered office at 1/1, The Presidency, #1, St. Marks Road, Bengaluru – 560 001 and corporate office at 4th Floor, #85, Sheriff House, Richmond Road, Bengaluru – 560025, handles information when you visit mountjudi.com or communicate with us.",
      "This notice is aligned with India’s Digital Personal Data Protection Act, 2023 (DPDPA) and applicable international data protection principles.",
    ],
  },
  {
    number: "02",
    title: "Information You Provide Voluntarily",
    body: [
      "Our website does not maintain user accounts or a server-side database for public form submissions. When you use the founder intake or inquiry form on our Contact page, the details you enter (such as your name, email address, phone number, company name, pitch deck URL, and message) are formatted into an email draft addressed to pitch@mountjudi.com or ebaadmomin@mountjudi.com via your own email client.",
      "Once you send an email or share pitch materials, investor onboarding documents, or KYC records with us, we process that personal and business data solely to evaluate investment opportunities, manage prospective or existing Limited Partner (LP) relationships, comply with SEBI/statutory KYC and AML obligations, and respond to your inquiries.",
    ],
  },
  {
    number: "03",
    title: "Cookies, Analytics & Technical Telemetry",
    body: [
      "This website does not set first-party advertising or behavioral tracking cookies, nor does it use third-party advertising pixels or web analytics trackers in application code.",
      "Standard technical requests occur when your browser loads assets—including font stylesheets from Google Fonts (fonts.googleapis.com / fonts.gstatic.com), CDN/edge hosting infrastructure, and client-side error boundary diagnostics (which capture route path and error details if an unexpected page error occurs). Hosting providers may also record standard server access logs (such as IP address and user-agent) for security and availability.",
    ],
  },
  {
    number: "04",
    title: "How We Use & Share Information",
    body: [
      "We do not sell, rent, or trade personal data. Access to pitch submissions and investor inquiries is restricted to MJV partners, investment professionals, compliance personnel, and authorized professional advisors (such as legal counsel, auditors, fund administrators, trustees, custodians, or registrars) strictly on a need-to-know basis or as required by SEBI regulations and applicable law.",
    ],
  },
  {
    number: "05",
    title: "Data Retention & Security",
    body: [
      "We retain correspondence and investment diligence records only for as long as necessary for investment evaluation, ongoing fund administration, audit, or statutory record-keeping requirements under Indian securities and corporate laws.",
      "While we apply reasonable technical and organizational safeguards, no email transmission or internet communication is completely risk-free. Please avoid sending sensitive personal financial or statutory identity documents until requested through secure onboarding channels.",
    ],
  },
  {
    number: "06",
    title: "Your Rights & Grievance Officer",
    body: [
      "Subject to applicable law (including the DPDPA, 2023), you may request access to, correction of, updating of, or erasure of personal data you have shared with us, or withdraw consent for voluntary communications (where processing is not required by law or statutory fund compliance).",
      "To exercise your rights or raise a privacy concern, please write to our Compliance & Grievance Officer at info@mountjudi.com or by post to Mount Judi Ventures LLP, 4th Floor, #85, Sheriff House, Richmond Road, Bengaluru – 560025.",
    ],
  },
];

function PrivacyPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-black/10 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="container-tight max-w-4xl">
          <div className="flex items-center gap-2.5 font-sans text-xs font-black uppercase tracking-[0.22em] text-[#1e6086] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#b78c2d]" />
            <span>LEGAL &amp; DATA GOVERNANCE</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 leading-[0.98]">
            Privacy Policy
          </h1>
          <p className="mt-4 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            How Mount Judi Ventures LLP collects, uses, and safeguards personal information across
            our website, founder pitch intake, and institutional inquiries.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-sans">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e6086]/10 text-[#1e6086] border border-[#1e6086]/20 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              DPDPA 2023 Aligned
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0ab1d7]/10 text-[#0d748f] border border-[#0ab1d7]/25 font-semibold">
              <Lock className="w-3.5 h-3.5" />
              Zero Ad/Analytics Tracking Cookies
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
          {sections.map((s) => (
            <article
              key={s.number}
              className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1e6086] text-white font-sans text-xs font-bold">
                  {s.number}
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                  {s.title}
                </h2>
              </div>
              <div className="space-y-3 font-sans text-sm text-neutral-700 leading-relaxed">
                {s.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </article>
          ))}

          {/* Contact & Cross-links Card */}
          <div className="rounded-2xl bg-[#1e6086] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#0ab1d7] mb-1">
                PRIVACY &amp; GRIEVANCE CONTACT
              </div>
              <p className="font-sans text-sm text-white/90 leading-relaxed max-w-xl">
                Questions about this policy or data requests can be directed to{" "}
                <a href="mailto:info@mountjudi.com" className="underline font-semibold text-white">
                  info@mountjudi.com
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/terms"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#1e6086] font-sans text-xs font-bold hover:bg-[#f0f8ff] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Terms of Use
              </Link>
              <Link
                to="/disclosures"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#b78c2d] text-white font-sans text-xs font-bold hover:bg-[#9c7623] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                SEBI Disclosures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
