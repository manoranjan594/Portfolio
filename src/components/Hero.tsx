import React, { Suspense } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  PythonLogo,
  CLogo,
  JavaLogo,
  Html5Logo,
  Css3Logo,
  Github,
} from './Icons';
import { SculptureFallback } from './SculptureFallback';
import { ErrorBoundary } from './ErrorBoundary';

const HeroSculpture = React.lazy(() => import('./HeroSculpture'));

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const quickTech = [
  { name: 'Python', icon: <PythonLogo className="w-4 h-4" /> },
  { name: 'C', icon: <CLogo className="w-4 h-4" /> },
  { name: 'Java', icon: <JavaLogo className="w-4 h-4" /> },
  { name: 'HTML5', icon: <Html5Logo className="w-4 h-4" /> },
  { name: 'CSS3', icon: <Css3Logo className="w-4 h-4" /> },
  { name: 'GitHub', icon: <Github className="w-4 h-4 text-white" /> },
];

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 74;
      const topPos = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#081711] text-[#F8F7F2] flex flex-col justify-between overflow-hidden pt-28 sm:pt-32 pb-8 sm:pb-12 scroll-mt-0"
    >
      {/* ============================================================== */}
      {/* CINEMATIC FULL-WIDTH LANDSCAPE SCENE (Mountains, Arch & Sun)    */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/hero-landscape-bg.jpg"
          alt="Cinematic Alpine Observatory Pavilion"
          className="w-full h-full object-cover object-center lg:object-[65%_center] opacity-95 filter brightness-[0.92] contrast-[1.04]"
        />
        {/* Editorial Shadow Vignette on left for pristine typographic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081711] via-[#081711]/85 sm:via-[#081711]/65 to-transparent pointer-events-none" />
        {/* Soft bottom atmospheric fade to smoothly transition into About section */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#081711] via-[#081711]/70 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: INTRODUCTION & IDENTITY (Cols 1-7)               */}
          {/* ============================================================== */}
          <motion.div
            className="lg:col-span-7 z-20 space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtle Friendly Kicker with gold line */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5">
              <span className="text-sm font-sans text-[#D1D9D3] font-medium tracking-wide">
                Hi, I’m
              </span>
              <span className="w-7 h-[1px] bg-[#C7A66A]/70" />
            </motion.div>

            {/* Main Name Headline — Single line on desktop in elegant editorial serif */}
            <motion.h1
              variants={itemVariants}
              className="font-editorial font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-[#F8F7F2] tracking-tight leading-[1.1] select-none whitespace-normal lg:whitespace-nowrap drop-shadow-xs"
            >
              Manoranjan <span className="text-[#D5F2A3]">AT</span>
            </motion.h1>

            {/* Subtitle: Aspiring Software Developer */}
            <motion.h2
              variants={itemVariants}
              className="font-sans font-medium text-base sm:text-lg lg:text-xl text-[#E5E7DF] tracking-wide"
            >
              Aspiring Software Developer
            </motion.h2>

            {/* Introduction Narrative */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-sm sm:text-base text-[#D1D9D3] leading-relaxed max-w-lg font-normal"
            >
              I’m a 3rd-semester CSE student, passionate about building creative solutions with code. I love learning, exploring new technologies and turning ideas into real-world products.
            </motion.p>

            {/* Two Action Buttons: View My Projects & Let's Connect */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2"
            >
              {/* Primary Action Button: View My Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center gap-2.5 bg-[#D5F2A3] hover:bg-[#c4e68e] text-[#081711] font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#081711]" />
              </a>

              {/* Secondary Action Button: Let's Connect */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2.5 border border-white/25 bg-white/5 hover:bg-white/10 text-[#F8F7F2] font-semibold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 backdrop-blur-sm cursor-pointer"
              >
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Quick Tech Strip (Clean minimal row matching reference image) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-[#D1D9D3]"
            >
              {quickTech.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-1.5 text-xs text-[#E5E7DF] font-sans hover:text-[#D5F2A3] transition-colors"
                >
                  <div className="w-4 h-4 flex items-center justify-center opacity-90">
                    {item.icon}
                  </div>
                  <span className="font-medium text-[11px] sm:text-xs tracking-wide">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: 3D SCULPTURAL CENTERPIECE (Cols 8-12)            */}
          {/* ============================================================== */}
          <motion.div
            className="lg:col-span-5 relative w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
          >
            {/* Seamless 3D Viewport positioned above the scene's pedestal */}
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px] flex items-center justify-center">
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
      {/* BOTTOM SCROLL INDICATOR (Near bottom right)                     */}
      {/* ============================================================== */}
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pt-4 z-10">
        <div className="flex items-center justify-end">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="group flex flex-col items-center gap-1.5 text-[#A8B4AA] hover:text-[#D5F2A3] transition-colors cursor-pointer"
            aria-label="Scroll to About Me"
          >
            <div className="w-5 h-8 rounded-full border border-white/30 group-hover:border-[#D5F2A3] flex items-start justify-center p-1 transition-colors backdrop-blur-sm">
              <span className="w-1 h-1.5 rounded-full bg-[#D5F2A3] group-hover:translate-y-2 transition-transform duration-300" />
            </div>
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#D1D9D3] group-hover:text-[#D5F2A3]">
              Scroll
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
