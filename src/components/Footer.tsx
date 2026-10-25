import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1D1A] text-[#FAF7F0] border-t border-[#292722]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#292722]/80 items-baseline">
          {/* Col 1-6: Colophon */}
          <div className="md:col-span-6 space-y-2">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C4A36B] block">
              COLOPHON // DIGITAL ATELIER
            </span>
            <h3 className="font-serif text-2xl text-[#FAF7F0]">
              Manoranjan AT
            </h3>
            <p className="text-xs text-[#8B857A] max-w-sm leading-relaxed">
              Designed &amp; engineered by Manoranjan AT. Computer Science and Engineering student at Bapuji Institute of Engineering and Technology, Davangere.
            </p>
          </div>

          {/* Col 7-9: Navigation Coordinates */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <span className="text-[10px] tracking-widest text-[#8B857A] uppercase block">INDEX DIRECTORY</span>
            <ul className="space-y-1.5 text-xs text-[#DDD5C7]">
              <li><a href="#about" className="hover:text-[#C4A36B] transition-colors">01 Profile</a></li>
              <li><a href="#skills" className="hover:text-[#C4A36B] transition-colors">02 Technical Toolkit</a></li>
              <li><a href="#projects" className="hover:text-[#C4A36B] transition-colors">03 Selected Works</a></li>
              <li><a href="#achievements" className="hover:text-[#C4A36B] transition-colors">04 Milestones</a></li>
              <li><a href="#contact" className="hover:text-[#C4A36B] transition-colors">05 Dispatch</a></li>
            </ul>
          </div>

          {/* Col 10-12: Direct Connection Channels */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <span className="text-[10px] tracking-widest text-[#8B857A] uppercase block">REPOSITORIES &amp; NETWORK</span>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/manoranjan594"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#DDD5C7]/20 flex items-center justify-center text-[#FAF7F0] hover:border-[#C4A36B] hover:text-[#C4A36B] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/manoranjan-at-16508735b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#DDD5C7]/20 flex items-center justify-center text-[#FAF7F0] hover:border-[#C4A36B] hover:text-[#C4A36B] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B857A]">
          <div>
            <span>© {CURRENT_YEAR} MANORANJAN AT · ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-[#C4A36B] transition-colors"
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#C4A36B]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
