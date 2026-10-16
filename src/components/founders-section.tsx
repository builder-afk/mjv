import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import skyeAirFounder from "@/assets/founders/skyeair.jpeg";
import basecareFounder from "@/assets/founders/4basecare.jpeg";
import staquTechFounder from "@/assets/founders/staqutech.jpeg";
import sproboticsFounder from "@/assets/founders/sprobotics.jpeg";
import extramileFounder from "@/assets/founders/extramile.png";
import loFoodsFounder from "@/assets/founders/Lofoods.png";
import hexalogFounder from "@/assets/founders/Hexalog Reliability Quote Poster.png";

interface FounderItem {
  name: string;
  role: string;
  company: string;
  sector: string;
  image: string;
  slug: string;
  quote?: string;
  imagePosition?: string;
}

const FOUNDERS: FounderItem[] = [
  {
    name: "Ankit Kumar",
    role: "Founder & CEO",
    company: "Skye Air Mobility",
    sector: "Autonomous Logistics",
    image: skyeAirFounder,
    slug: "skye-air",
    quote: "Building India's autonomous aerial delivery corridors.",
    imagePosition: "object-top",
  },
  {
    name: "Hitesh Goswami",
    role: "Co-Founder & CEO",
    company: "4baseCare",
    sector: "Precision Oncology",
    image: basecareFounder,
    slug: "4basecare",
    quote: "Pioneering South Asia's first indigenous cancer genomic panels.",
    imagePosition: "object-top",
  },
  {
    name: "Atul Rai",
    role: "Co-Founder & CEO",
    company: "Staqu Technologies",
    sector: "Computer Vision & AI",
    image: staquTechFounder,
    slug: "staqu",
    quote: "JARVIS AI powering real-time video intelligence across 12+ states.",
    imagePosition: "object-center",
  },
  {
    name: "Pooja Bajaj Chadha",
    role: "Founder & CEO",
    company: "ExtraMile Play",
    sector: "Enterprise HR Tech",
    image: extramileFounder,
    slug: "extramile",
    quote: "AI-driven employee engagement platform trusted by top enterprises.",
    imagePosition: "object-center",
  },
  {
    name: "Sudarshan Gangrade",
    role: "Founder & CEO",
    company: "The Protein Chef (Lo! Foods)",
    sector: "Consumer Health",
    image: loFoodsFounder,
    slug: "lo-foods",
    quote: "Category-defining high-protein nutrition for Indian consumers.",
    imagePosition: "object-center",
  },
  {
    name: "Pranavan Sankar",
    role: "Co-Founder",
    company: "SP Robotic Works",
    sector: "Next-Gen EdTech",
    image: sproboticsFounder,
    slug: "sprw",
    quote: "Hands-on robotics and coding pedagogy empowering millions of students.",
    imagePosition: "object-center",
  },
  {
    name: "Dibyanshu Tripathi",
    role: "Co-Founder & CEO",
    company: "Hexalog",
    sector: "Cross-Border Logistics",
    image: hexalogFounder,
    slug: "hexalog",
    quote: "The most important factor for business is reliability. Reliability is the product.",
    imagePosition: "object-top",
  },
];

export function FoundersSection() {
  return (
    <section className="border-t border-[var(--ink)]/15 bg-[var(--paper)] py-16 md:py-24">
      <div className="container-tight">
        {/* Simple Minimal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[var(--ink)]/15">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold)] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              PORTFOLIO FOUNDERS
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--ink)]">
              The Founders We Back
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[var(--ink-muted)] max-w-md leading-relaxed">
            Mission-driven category builders engineering India's physical and digital infrastructure.
          </p>
        </div>

        {/* Clean, Simple 4-Column Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDERS.map((founder) => (
            <Link
              key={founder.slug}
              to="/portfolio/$slug"
              params={{ slug: founder.slug }}
              className="group border border-[var(--ink)]/15 bg-white p-5 flex flex-col justify-between hover:border-[var(--ink)] transition-all duration-200"
            >
              <div>
                {/* Founder Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 border border-[var(--ink)]/10">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    loading="lazy"
                    className={`w-full h-full object-cover ${founder.imagePosition || "object-center"} group-hover:scale-[1.02] transition-all duration-300`}
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider">
                    {founder.sector}
                  </div>
                </div>

                {/* Founder Details */}
                <div className="mt-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
                    {founder.name}
                  </h3>
                  <div className="font-mono text-xs text-[var(--gold-dark)] font-semibold uppercase tracking-wider mt-0.5">
                    {founder.role} · {founder.company}
                  </div>
                  {founder.quote && (
                    <p className="mt-2.5 font-sans text-xs text-[var(--ink-muted)] leading-relaxed line-clamp-2">
                      "{founder.quote}"
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-4 pt-3 border-t border-[var(--ink)]/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-[var(--ink-muted)] group-hover:text-[var(--ink)] font-semibold transition-colors">
                  View Dossier
                </span>
                <ArrowUpRight
                  size={13}
                  className="text-[var(--gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </Link>
          ))}

          {/* 8th Card: Simple Founder Intake Tile */}
          <Link
            to="/contact"
            className="group border border-dashed border-[var(--ink)]/30 bg-[var(--paper-subtle)] p-6 flex flex-col justify-between hover:border-[var(--ink)] hover:bg-white transition-all duration-200"
          >
            <div>
              <div className="aspect-[4/5] w-full flex flex-col items-center justify-center p-6 text-center border border-[var(--ink)]/10 bg-white/50">
                <div className="h-12 w-12 rounded-full border border-[var(--gold)] flex items-center justify-center font-display text-xl font-bold text-[var(--gold)] group-hover:scale-110 transition-transform">
                  +
                </div>
                <div className="mt-4 font-display text-base font-bold uppercase tracking-tight text-[var(--ink)]">
                  Next Category Leader
                </div>
                <p className="mt-2 font-mono text-[11px] text-[var(--ink-muted)] leading-relaxed">
                  Are you engineering India's future? We write ₹2 Cr to ₹25 Cr initial cheques.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--ink)]/10 flex items-center justify-between font-mono text-[11px] text-[var(--ink)] font-bold">
              <span>Pitch Your Deck</span>
              <ArrowUpRight size={13} className="text-[var(--gold)]" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
