import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, AlertTriangle, ExternalLink, Landmark } from "lucide-react";

export const Route = createFileRoute("/disclosures")({
  head: () => ({
    meta: [
      { title: "SEBI & Risk Disclosures | Mount Judi Ventures LLP" },
      {
        name: "description",
        content:
          "Regulatory disclosures, SEBI AIF registration details, SCORES grievance redressal information, and venture capital investment risk factors for Mount Judi Ventures LLP.",
      },
      { property: "og:title", content: "SEBI & Risk Disclosures | Mount Judi Ventures LLP" },
      { property: "og:url", content: "/disclosures" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/disclosures" }],
  }),
  component: DisclosuresPage,
});

const registeredFunds = [
  {
    name: "Mount Judi India Growth Fund (MJIGF)",
    category: "Category II Alternative Investment Fund (AIF)",
    regNo: "IN/AIF2/18-19/0536",
    scoresId: "AIF00656",
    manager: "Mount Judi Ventures LLP",
    trustee: "Vistra ITCL (India) Limited",
  },
  {
    name: "Mount Judi India Micro Fund (MJIMF)",
    category: "Category I Alternative Investment Fund (VCF — Angel Fund)",
    regNo: "IN/AIF1/22-23/1068",
    scoresId: "AIF0094",
    manager: "Mount Judi Ventures LLP",
    trustee: "Vistra ITCL (India) Limited",
  },
];

function DisclosuresPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-black/10 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="container-tight max-w-4xl">
          <div className="flex items-center gap-2.5 font-sans text-xs font-black uppercase tracking-[0.22em] text-[#1e6086] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#b78c2d]" />
            <span>STATUTORY &amp; REGULATORY GOVERNANCE</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 leading-[0.98]">
            SEBI &amp; Risk Disclosures
          </h1>
          <p className="mt-4 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Important regulatory disclosures, risk factors, and investor grievance information for
            Alternative Investment Funds managed by Mount Judi Ventures LLP.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-tight max-w-4xl space-y-6">
          {/* Critical Private Placement & Risk Warning */}
          <div className="rounded-2xl border-2 border-[#b78c2d]/40 bg-[#b78c2d]/[0.06] p-6 sm:p-8">
            <div className="flex items-center gap-2 font-sans text-xs font-black uppercase tracking-[0.2em] text-[#7c622b] mb-3">
              <AlertTriangle className="w-4 h-4 text-[#b78c2d]" />
              <span>NOT A PUBLIC OFFER OR INVESTMENT ADVICE</span>
            </div>
            <div className="space-y-3 font-sans text-sm text-neutral-800 leading-relaxed">
              <p>
                <strong>Private Placement Only:</strong> The information on this website is solely
                for general informational purposes and does not constitute an offer to sell, or a
                solicitation of an offer to subscribe for, units in any fund or investment vehicle
                managed by Mount Judi Ventures LLP (“MJV”). Any participation in an Alternative
                Investment Fund (AIF) is strictly on a private placement basis to eligible,
                sophisticated/accredited investors meeting statutory minimum commitment thresholds
                under the SEBI (Alternative Investment Funds) Regulations, 2012, and only pursuant
                to the respective confidential Private Placement Memorandum (PPM) and contribution
                agreement.
              </p>
              <p>
                <strong>Market, Illiquidity &amp; Capital Loss Risks:</strong> Venture capital and
                early-stage equity investments are speculative, illiquid, and involve a high degree
                of risk, including the risk of partial or total loss of invested capital. Returns
                are not assured or guaranteed. Any references to portfolio companies, milestones, or
                realized exits (such as Internshala / upGrad) are historical examples only;{" "}
                <strong>past performance is not indicative of future results</strong>.
              </p>
              <p>
                <strong>No SEBI Endorsement of Returns:</strong> Registration with the Securities
                and Exchange Board of India (SEBI) does not imply endorsement by SEBI nor does it
                guarantee the performance of any fund or assure returns to investors.
              </p>
            </div>
          </div>

          {/* Registered AIF Registry Table */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2.5 mb-5">
              <Landmark className="w-5 h-5 text-[#1e6086]" />
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                Registered AIF Vehicles &amp; Statutory Counterparties
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {registeredFunds.map((f) => (
                <div
                  key={f.regNo}
                  className="rounded-xl border border-[#1e6086]/20 bg-[#1e6086]/[0.03] p-5 space-y-2.5 font-sans text-xs"
                >
                  <div className="font-display text-base font-bold text-neutral-950">{f.name}</div>
                  <div className="text-neutral-600 font-medium">{f.category}</div>
                  <div className="pt-2 border-t border-[#1e6086]/15 space-y-1.5">
                    <div className="flex justify-between gap-2">
                      <span className="text-neutral-500 uppercase font-semibold">SEBI Reg. No.</span>
                      <span className="font-bold text-neutral-950">{f.regNo}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-neutral-500 uppercase font-semibold">SCORES ID</span>
                      <span className="font-bold text-neutral-950">{f.scoresId}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-neutral-500 uppercase font-semibold">Manager</span>
                      <span className="font-bold text-neutral-950">{f.manager}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-neutral-500 uppercase font-semibold">Trustee</span>
                      <span className="font-bold text-neutral-950">{f.trustee}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-black/10 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-2">
              <p>
                <strong>Custody, Depositories &amp; Benchmarking:</strong> Fund units are issued in
                dematerialized form through NSDL / CDSL via a SEBI-registered Registrar &amp;
                Transfer Agent (RTA), with independent banking custody and semi-annual statutory
                benchmarking (NSE, CRISIL, Preqin) as mandated under SEBI AIF regulations.
              </p>
              <p>
                <strong>Entity &amp; Registered Office:</strong> Mount Judi Ventures LLP ·
                Registered Office: 1/1, The Presidency, #1, St. Marks Road, Bengaluru – 560 001 ·
                Corporate Office: 4th Floor, #85, Sheriff House, Richmond Road, Bengaluru – 560025.
              </p>
            </div>
          </div>

          {/* Investor Grievance & SCORES Card */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#1e6086]">
                <ShieldCheck className="w-4 h-4 text-[#0ab1d7]" />
                <span>INVESTOR GRIEVANCE REDRESSAL (SEBI SCORES)</span>
              </div>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed max-w-xl">
                Investors may address queries or grievances first to MJV’s Compliance Officer at{" "}
                <a href="mailto:info@mountjudi.com" className="font-semibold text-[#1e6086] underline">
                  info@mountjudi.com
                </a>
                . If a grievance remains unresolved, investors may lodge a complaint on the SEBI
                SCORES portal referencing the applicable SCORES ID above.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://scores.sebi.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e6086] text-white font-sans text-xs font-bold hover:bg-[#164b6a] transition-colors"
              >
                <span>Visit SEBI SCORES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/funds"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 bg-white text-neutral-900 font-sans text-xs font-bold hover:bg-neutral-50 transition-colors"
              >
                Back to Funds
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
