import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Learning Journey", href: "#learning-journey" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#hero" || href === "#") {
      scrollToTop();
      return;
    }
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 74;
      const topPos = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#07100D] text-[#7E8F82] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          {/* Left: Identity (Clickable to return to top) */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3.5 cursor-pointer focus:outline-none"
            aria-label="Manoranjan AT — Return to top"
          >
            <div className="w-10 h-10 rounded-full bg-[#C7A66A] text-[#0B1712] flex items-center justify-center font-roman font-bold text-xs tracking-wider shadow-xs group-hover:bg-[#d8b97d] transition-colors">
              MR
            </div>
            <div>
              <span className="font-display font-bold text-lg text-[#F8F7F2] block leading-tight group-hover:text-[#D5F2A3] transition-colors">
                Manoranjan <span className="text-[#C7A66A]">AT</span>
              </span>
              <span className="text-xs text-[#A8B4AA] font-sans">
                BIET Davangere, Karnataka, India
              </span>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-7 font-sans text-xs tracking-wide uppercase font-semibold text-[#A8B4AA]">
            {FOOTER_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleLinkClick(e, href)}
                className="hover:text-[#F8F7F2] transition-colors cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/manoranjan594"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/15 bg-[#102A1F] flex items-center justify-center text-[#F8F7F2] hover:bg-[#174D38] hover:border-[#C7A66A] transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/manoranjan-at-16508735b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/15 bg-[#102A1F] flex items-center justify-center text-[#F8F7F2] hover:bg-[#174D38] hover:border-[#C7A66A] transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#7E8F82]">
          <div>
            <span>&copy; {CURRENT_YEAR} Manoranjan AT. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Crafted with React, Three.js &amp; Tailwind CSS</span>
            <span className="text-white/20">|</span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-[#D5F2A3] font-semibold hover:text-[#F8F7F2] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
