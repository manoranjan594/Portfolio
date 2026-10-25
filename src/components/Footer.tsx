import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0C] text-[#9298A2] border-t border-[#1C2026]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1C2026]">
          {/* Left: Identity */}
          <div>
            <span className="font-display font-bold text-xl text-[#E7E9EC] block">
              Manoranjan AT
            </span>
            <span className="text-xs font-mono text-[#9298A2]">
              Aspiring Software Developer · BIET Davangere
            </span>
          </div>

          {/* Center: Clean Nav anchors */}
          <div className="flex items-center gap-6 font-sans text-xs tracking-wider uppercase">
            <a href="#about" className="hover:text-[#8AA9FF] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#8AA9FF] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#8AA9FF] transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-[#8AA9FF] transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-[#8AA9FF] transition-colors">Contact</a>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/manoranjan594"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#262B33] bg-[#14161A] flex items-center justify-center text-[#E7E9EC] hover:border-[#8AA9FF] hover:text-[#8AA9FF] transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/manoranjan-at-16508735b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-[#262B33] bg-[#14161A] flex items-center justify-center text-[#E7E9EC] hover:border-[#8AA9FF] hover:text-[#8AA9FF] transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span>© {CURRENT_YEAR} Manoranjan AT. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-[#8AA9FF] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#8AA9FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
