import React, { Suspense } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { SculptureFallback } from './SculptureFallback';
import { ErrorBoundary } from './ErrorBoundary';

/* ------------------------------------------------------------------ */
/*  Lazy-load the 3D sculpture                                        */
/* ------------------------------------------------------------------ */
const HeroSculpture = React.lazy(() => import('./HeroSculpture'));

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const sculptureVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#090A0C] flex flex-col justify-between overflow-hidden pt-24 pb-8 lg:pt-28"
      style={{ minHeight: '100svh' }}
    >
      {/* Background Architectural Grid Accent */}
      <div className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 opacity-20">
        <div className="col-span-7 border-r border-[#262B33] h-full hidden md:block" />
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
            {/* Professional Role Label */}
            <motion.div variants={childVariants} className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8AA9FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#8AA9FF] font-medium">
                Aspiring Software Developer
              </span>
              <span className="text-[#262B33]">/</span>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#9298A2]">
                CS&amp;E Student
              </span>
            </motion.div>

            {/* Major Heading: Name */}
            <motion.h1
              variants={childVariants}
              className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#E7E9EC] tracking-tight leading-none mb-4"
            >
              Manoranjan AT
            </motion.h1>

            {/* Core Statement */}
            <motion.h2
              variants={childVariants}
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#9298A2] font-normal leading-snug tracking-tight mb-6"
            >
              Building thoughtful <span className="text-[#E7E9EC] font-semibold">digital experiences.</span>
            </motion.h2>

            {/* Supporting Bio Copy */}
            <motion.p
              variants={childVariants}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-[#9298A2] mb-10 font-sans"
            >
              Third-semester Computer Science and Engineering student at Bapuji Institute of Engineering &amp; Technology, developing solid fundamentals in software engineering, programming, and web development through hands-on practical projects.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 bg-[#8AA9FF] text-[#090A0C] font-semibold px-6 py-3.5 font-mono text-xs uppercase tracking-wider hover:bg-[#A3BCFF] transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/manoranjan594"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 border border-[#262B33] bg-[#14161A] text-[#E7E9EC] px-6 py-3.5 font-mono text-xs uppercase tracking-wider hover:border-[#8AA9FF]/60 hover:text-[#8AA9FF] transition-all duration-200"
              >
                <Github className="w-4 h-4 text-[#9298A2] group-hover:text-[#8AA9FF] transition-colors" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9298A2] group-hover:text-[#8AA9FF] transition-colors" />
              </a>
            </motion.div>

            {/* Current Status Tracker */}
            <motion.div
              variants={childVariants}
              className="mt-12 pt-6 border-t border-[#1C2026] flex flex-wrap items-center gap-4 text-xs font-mono text-[#9298A2]"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#E7E9EC]">Currently Learning &amp; Building</span>
              </span>
              <span className="text-[#262B33]">·</span>
              <span>Open to Software Internships</span>
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT: TITANIUM MONOLITH 3D SCULPTURE (Cols 8-12)             */}
          {/* ============================================================== */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]"
            variants={sculptureVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#8AA9FF]/5 blur-3xl" />

            {/* ErrorBoundary + Suspense guarantees zero white screen on any device */}
            <div className="relative w-full h-full">
              <ErrorBoundary fallback={<SculptureFallback />}>
                <Suspense fallback={<SculptureFallback />}>
                  <HeroSculpture />
                </Suspense>
              </ErrorBoundary>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* BOTTOM TECHNICAL SPECIFICATION LEDGER                           */}
      {/* ============================================================== */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pt-8">
        <div className="border-t border-[#1C2026] pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-mono tracking-wider uppercase text-[#9298A2]">
          <div>
            <span className="block text-[#8AA9FF] font-medium">Institution</span>
            <span className="text-[#E7E9EC]">BIET Davangere</span>
          </div>
          <div>
            <span className="block text-[#8AA9FF] font-medium">Program</span>
            <span className="text-[#E7E9EC]">B.E. CS&amp;E (3rd Sem)</span>
          </div>
          <div>
            <span className="block text-[#8AA9FF] font-medium">Focus</span>
            <span className="text-[#E7E9EC]">Software Development</span>
          </div>
          <div className="text-right hidden md:block">
            <span className="block text-[#8AA9FF] font-medium">Location</span>
            <span className="text-[#E7E9EC]">Karnataka, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
