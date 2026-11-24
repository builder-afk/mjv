import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, ShieldCheck } from "lucide-react";
import creedMountainPeak from "@/assets/get.jpg";
import creedMountainField from "@/assets/set.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Pitch | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Pitch your startup directly to Mount Judi Ventures. Direct partner review, no analyst filters, guaranteed response. Cheques from ₹2 Cr to ₹25 Cr.",
      },
      { property: "og:title", content: "Pitch Mount Judi Ventures" },
      {
        property: "og:description",
        content: "Direct founder review. Clear feedback. Seed to Series A capital.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Pitch a Startup (Seed to Series A)",
    company: "",
    link: "",
    message: "",
  });

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = "pitch@mountjudi.com";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone || "N/A"}%0D%0ACompany: ${formData.company || "N/A"}%0D%0ALink: ${formData.link || "N/A"}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(`[${formData.subject}] ${formData.company ? `- ${formData.company}` : ""}`)}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. MINIMALIST EDITORIAL HERO ── */}
      <section className="relative overflow-hidden bg-white text-neutral-950 border-b border-black/15">
        <div className="container-tight pt-12 pb-14 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Bold Editorial Typography & Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] leading-[0.94] text-balance text-neutral-950">
                  Building wealth
                  <br />
                  through symbiotic
                  <br />
                  growth.
                  <br />
                  Pitch us directly.
                </h1>
                <p className="mt-6 sm:mt-8 font-sans text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
                  Every submission below is logged directly to our General Partners and
                  Investment Committee. We know how much focus it takes to build. We
                  commit to an unambiguous, candid decision within 14 calendar days.
                </p>
              </div>

              {/* Bottom Interactive Action Pill */}
              <div className="mt-8 sm:mt-12">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-3 p-1.5 pr-5 rounded-full bg-white hover:bg-neutral-100 border-2 border-neutral-950 text-neutral-950 text-xs font-mono uppercase tracking-wider transition-all duration-200 group shadow-xs cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center font-black text-xs shrink-0">
                    ↓
                  </span>
                  <span className="font-bold truncate">PITCH YOUR STARTUP</span>
                  <span className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs group-hover:translate-y-0.5 transition-transform shadow-xs shrink-0 font-bold">
                    ↓
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: 2x2 Bento Visual Grid */}
            <div className="lg:col-span-5">
              <div className="flex justify-end font-mono text-[11px] tracking-widest text-neutral-600 mb-4 font-bold">
                <span>  FOUNDER INTAKE </span>
              </div>

              {/* 2x2 Grid with Rounded Bento Cards */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {/* 1. Top-Left: Mountain Peak Summit */}
                <div className="rounded-[28px] overflow-hidden relative aspect-square bg-neutral-100 shadow-xs border-2 border-neutral-950 group">
                  <img
                    src={creedMountainPeak}
                    alt="Mount Judi Summit"
                    loading="lazy"
                    className="w-full h-full object-cover object-[50%_30%] origin-[50%_30%] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/20 font-bold">
                    Summit View
                  </span>
                </div>

                {/* 2. Top-Right: Clean Ivory Card */}
                <div className="rounded-[28px] bg-white p-5 flex flex-col justify-between shadow-xs border-2 border-neutral-950 aspect-square text-neutral-950 group hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-black/10 flex items-center justify-center text-neutral-950">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
                      Founder-first
                    </span>
                  </div>

                  <div>
                    <div className="font-display text-base font-black uppercase tracking-tight text-neutral-950 leading-tight">
                      Vision
                    </div>
                    <p className="text-[11px] text-neutral-600 mt-1 leading-snug">
                      A generation of Indian companies admired equally for what they build and how they build it.                    </p>
                    <div className="mt-2.5 inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-100 border border-black/10 text-[9px] font-mono uppercase font-bold text-neutral-900">
                      Lead Cheques
                    </div>
                  </div>
                </div>

                {/* 3. Bottom-Left: Midnight Dark Card */}
                <div className="rounded-[28px] bg-neutral-950 p-5 flex flex-col justify-between shadow-xs border-2 border-neutral-950 aspect-square text-white group hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 font-bold">
                      Long-term
                    </span>
                  </div>

                  <div>
                    <div className="font-display text-base font-black uppercase tracking-tight text-white leading-tight">
                      Mission
                    </div>
                    <p className="text-[11px] text-neutral-300 mt-1 leading-snug">
                      To back ethical founders building responsible companies that compound value for decades, not quarters.
                    </p>
                    <div className="mt-2.5 inline-flex items-center px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono uppercase font-bold text-white/90">
                      Seed → Series A
                    </div>
                  </div>
                </div>

                {/* 4. Bottom-Right: Mountain Ridge */}
                <div className="rounded-[28px] overflow-hidden relative aspect-square bg-neutral-100 shadow-xs border-2 border-neutral-950 group">
                  <img
                    src={creedMountainField}
                    alt="Mount Judi Ridge"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/20 font-bold">
                    Active Investments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SIMPLE DIRECT CONTACT FORM ── */}
      <section id="contact-form" className="container-tight py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Inquiries & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                Direct Communication
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 leading-tight">
                Get in touch with Mount Judi.
              </h2>
              <p className="mt-3 text-sm text-neutral-600 font-sans leading-relaxed">
                Whether you are a founder building category-defining technology, an investor inquiring about our funds, or seeking partnership dialogue, our leadership team reviews every submission directly.
              </p>
            </div>

            {/* Quick Touchpoints Card */}
            <div className="rounded-2xl border-2 border-neutral-950 bg-white p-6 sm:p-7 space-y-5 shadow-xs">
              {/* Pitch */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
                  FOUNDER PITCH INTAKE
                </span>
                <a
                  href="mailto:pitch@mountjudi.com"
                  className="font-display font-black text-base sm:text-lg text-[#036089] hover:underline"
                >
                  pitch@mountjudi.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="pt-4 border-t border-black/10 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
                  PHONE CONTACT
                </span>
                <div className="font-mono text-xs sm:text-[13px] text-neutral-900 font-semibold flex flex-wrap items-center gap-2">
                  <a href="tel:+919699831366" className="hover:text-[#036089] hover:underline">
                    +91 96998 31366
                  </a>
                  <span className="text-neutral-400">/</span>
                  <a href="tel:+919880365936" className="hover:text-[#036089] hover:underline">
                    +91 98803 65936
                  </a>
                </div>
              </div>

              {/* Corporate Office */}
              <div className="pt-4 border-t border-black/10 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
                  CORPORATE OFFICE
                </span>
                <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                  Mount Judi Ventures LLP<br />
                  4th Floor, #85, &ldquo;Sheriff House&rdquo;,<br />
                  Richmond Road, Bengaluru – 560025
                </p>
              </div>

              {/* Registered Address */}
              <div className="pt-4 border-t border-black/10 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
                  REGISTERED ADDRESS
                </span>
                <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                  Mount Judi Ventures LLP<br />
                  1/1, The Presidency, #1, St. Marks Road,<br />
                  Bengaluru – 560 001
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Response SLA</span>
                <span className="font-bold text-neutral-900">Direct Partner Review</span>
              </div>
            </div>

            {/* Response Guarantee Badge */}
            <div className="rounded-2xl bg-neutral-100/70 border border-black/10 p-5 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                <span className="h-2 w-2 rounded-full bg-[#036089]" />
                Zero Analyst Gatekeeping
              </div>
              <p className="text-[11px] font-sans text-neutral-600 leading-relaxed">
                All submissions reach our Investment Committee partners directly. Clear, candid responses guaranteed.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-neutral-950 bg-white p-7 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="py-14 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-2xl shadow-sm">
                    ✓
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 font-mono text-xs uppercase tracking-wider text-neutral-800 font-semibold">
                    <span>[ MESSAGE DELIVERED ]</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
                    Thank You for Reaching Out
                  </h3>
                  <p className="max-w-md mx-auto font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Your message has been addressed directly to{" "}
                    <span className="font-bold text-neutral-900 font-mono">
                      pitch@mountjudi.com
                    </span>
                    . We will review your note and respond promptly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "Pitch a Startup (Seed to Series A)",
                          company: "",
                          link: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
                      Send a Message
                    </h2>
                    <p className="mt-1 text-xs text-neutral-500 font-sans">
                      Fill out the form below and we will get back to you directly.
                    </p>
                  </div>

                  {/* 2-col: Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                        YOUR NAME *
                      </span>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={inputClasses}
                      />
                    </label>

                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                        EMAIL ADDRESS *
                      </span>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="you@company.com"
                        className={inputClasses}
                      />
                    </label>
                  </div>

                  {/* 2-col: Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                        PHONE NUMBER
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </label>

                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                        COMPANY / STARTUP NAME
                      </span>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="e.g. Hexalog Systems"
                        className={inputClasses}
                      />
                    </label>
                  </div>

                  {/* 2-col: Subject / Reason & Link */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                        INQUIRY TYPE *
                      </span>
                      <select
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className={inputClasses}
                      >
                        <option>Pitch a Startup (Seed to Series A)</option>
                        <option>Investor & LP Relations</option>
                        <option>Media & Press</option>
                        <option>General Inquiry</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                        DECK / WEBSITE URL (OPTIONAL)
                      </span>
                      <input
                        type="url"
                        value={formData.link}
                        onChange={(e) => handleChange("link", e.target.value)}
                        placeholder="https://docsend.com/... or website"
                        className={inputClasses}
                      />
                    </label>
                  </div>

                  {/* Message textarea */}
                  <label className="block">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-600 font-bold">
                      YOUR MESSAGE *
                    </span>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about what you are building, your traction, or your inquiry..."
                      className={textareaClasses}
                    />
                  </label>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const inputClasses =
  "mt-1.5 w-full rounded-full border border-black/10 bg-neutral-50 px-5 py-3 font-sans text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all";

const textareaClasses =
  "mt-1.5 w-full rounded-2xl border border-black/10 bg-neutral-50 px-5 py-3 font-sans text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white resize-none transition-all";
