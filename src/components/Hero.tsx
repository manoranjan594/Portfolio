import React, { Suspense } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SculptureFallback } from './SculptureFallback';

/* ------------------------------------------------------------------ */
/*  Lazy-load the 3D sculpture                                        */
/* ------------------------------------------------------------------ */
const HeroSculpture = React.lazy(() => import('./HeroSculpture'));

/* ------------------------------------------------------------------ */
/*  Framer-motion variants                                             */
/* ------------------------------------------------------------------ */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const sculptureVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#FAF7F0] flex flex-col justify-between overflow-hidden pt-24 pb-8 lg:pt-28"
      style={{ minHeight: '100svh' }}
    >
      {/* Subtle architectural grid guidelines */}
      <div className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 opacity-30">
        <div className="col-span-7 border-r border-[#DDD5C7]/50 h-full hidden md:block" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT: EDITORIAL TYPOGRAPHY & IDENTITY (Cols 1-7)               */}
          {/* ============================================================== */}
          <motion.div
            className="lg:col-span-7 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Studio Note / Catalog Marker */}
            <motion.div variants={childVariants} className="flex items-center gap-3 mb-6">
              <span className="inline-block w-2 h-2 bg-[#C4A36B]" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8B857A]">
                [OP. 01 — DIGITAL ATELIER]
              </span>
              <span className="text-[#DDD5C7]">/</span>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#A77A52]">
                ASPIRING SOFTWARE DEVELOPER
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={childVariants}
              className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] text-[#292722] leading-[1.08] tracking-tight mb-6"
            >
              Thoughtfully built. <br />
              <em className="italic font-serif text-[#C4A36B]">Creatively</em> imagined.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={childVariants}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-[#77736B] mb-10 font-sans"
            >
              I&rsquo;m <strong className="font-semibold text-[#292722]">Manoranjan AT</strong>, a Computer Science student exploring software development, web experiences, and artificial intelligence through hands-on practical projects.
            </motion.p>

            {/* Action Group */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-[#292722] text-[#FAF7F0] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#C4A36B] transition-all duration-300 shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C4A36B] group-hover:text-[#FAF7F0] group-hover:translate-y-0.5 transition-all" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-[#DDD5C7] bg-[#FFFDF9] text-[#292722] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] hover:border-[#C4A36B] hover:text-[#C4A36B] transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8B857A] group-hover:text-[#C4A36B] group-hover:translate-x-0.5 transition-all" />
              </a>
            </motion.div>

            {/* Status Line */}
            <motion.div
              variants={childVariants}
              className="mt-12 pt-6 border-t border-[#DDD5C7]/70 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8B857A] tracking-wider"
            >
              <span className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600/80 animate-pulse" />
                <span>Currently learning &amp; building</span>
              </span>
              <span className="text-[#DDD5C7]">·</span>
              <span>Open to internship opportunities</span>
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT: THE ATELIER TOTEM 3D SCULPTURE (Cols 8-12)              */}
          {/* ============================================================== */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]"
            variants={sculptureVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtle decorative background pedestal arc */}
            <div className="pointer-events-none absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-b from-[#F0E9DC]/60 to-transparent blur-2xl" />

            {/* 3D Scene */}
            <div className="relative w-full h-full">
              <Suspense fallback={<SculptureFallback />}>
                <HeroSculpture />
              </Suspense>
            </div>

            {/* Sculptural Index Annotation */}
            <div
              className="absolute top-2 right-2 pointer-events-none hidden xl:block font-mono text-[9px] tracking-[0.2em] uppercase text-[#8B857A]/80"
              aria-hidden="true"
            >
              [FIG. 01 — THE ATELIER TOTEM]
            </div>
          </motion.div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* ATELIER BOTTOM SPECIFICATION LEDGER                             */}
      {/* ============================================================== */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pt-8">
        <div className="border-t border-[#DDD5C7] pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-mono tracking-[0.16em] uppercase text-[#8B857A]">
          <div>
            <span className="block text-[#C4A36B]">INSTITUTION</span>
            <span className="text-[#292722]">BIET DAVANGERE</span>
          </div>
          <div>
            <span className="block text-[#C4A36B]">DISCIPLINE</span>
            <span className="text-[#292722]">CS&amp;E · 3RD SEMESTER</span>
          </div>
          <div>
            <span className="block text-[#C4A36B]">METHODOLOGY</span>
            <span className="text-[#292722]">LEARN BY BUILDING</span>
          </div>
          <div className="text-right hidden md:block">
            <span className="block text-[#C4A36B]">PORTFOLIO</span>
            <span className="text-[#292722]">ATELIER EDITION 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
