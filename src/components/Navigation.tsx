import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "skills", "achievements", "learning-journey", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // 1. If at the top of the page, always activate Home
      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // 2. If scrolled near the bottom, activate Contact
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // 3. Precise threshold check for scrolling both down AND up
      const threshold = 140;
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= threshold) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMobileMenu();

      if (href === "#hero" || href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("hero");
        return;
      }

      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 74;
        const topPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: Math.max(0, topPosition),
          behavior: "smooth",
        });
        setActiveSection(targetId);
      }
    },
    [closeMobileMenu]
  );

  const overlayVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const linkItemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -16,
      transition: { duration: 0.15 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#081711]/92 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        >
          <div className="flex h-18 sm:h-20 items-center justify-between">
            {/* Identity Wordmark */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="group flex items-center gap-3 relative z-50 focus:outline-none cursor-pointer"
              aria-label="Manoranjan AT — Return to top"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 text-[#D5F2A3] flex items-center justify-center font-roman font-bold text-xs sm:text-sm tracking-wider shadow-sm group-hover:bg-[#D5F2A3] group-hover:text-[#081711] transition-all backdrop-blur-sm">
                MR
              </div>
              <span className="font-sans font-semibold text-base sm:text-lg tracking-tight text-[#F8F7F2] group-hover:text-[#D5F2A3] transition-colors">
                Manoranjan <span className="text-[#D5F2A3]">AT</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              <div className="flex items-center gap-4 xl:gap-6">
                {NAV_LINKS.map(({ label, href }) => {
                  const targetId = href.slice(1);
                  const isActive = activeSection === targetId;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={(e) => handleLinkClick(e, href)}
                      className={`relative font-sans text-xs xl:text-sm tracking-wide font-medium transition-colors duration-200 py-2 cursor-pointer ${
                        isActive
                          ? "text-[#D5F2A3] font-bold"
                          : "text-[#A8B4AA] hover:text-[#F8F7F2]"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#D5F2A3] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Get in Touch CTA Pill */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 text-[#F8F7F2] hover:text-[#D5F2A3] px-4 xl:px-5 py-2 font-sans text-xs font-semibold tracking-wider transition-all duration-200 backdrop-blur-sm cursor-pointer shrink-0"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2.5 rounded-full bg-[#102A1F] border border-white/15 text-[#F8F7F2] hover:bg-[#174D38] transition-colors focus:outline-none shadow-xs cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#F8F7F2]" /> : <Menu className="w-5 h-5 text-[#F8F7F2]" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#0B1712] text-[#F8F7F2] flex flex-col justify-between px-6 pt-24 pb-8 lg:hidden border-b border-white/10 overflow-y-auto"
          >
            <div className="space-y-6 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C7A66A] block font-bold">
                Navigation
              </span>
              <nav className="space-y-3">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const targetId = href.slice(1);
                  const isActive = activeSection === targetId;
                  return (
                    <motion.div
                      key={href}
                      variants={linkItemVariants}
                      custom={i}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <a
                        href={href}
                        onClick={(e) => handleLinkClick(e, href)}
                        className={`flex items-baseline gap-3 font-display text-2xl sm:text-3xl font-bold tracking-tight py-1.5 transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#D5F2A3] underline decoration-[#C7A66A] decoration-2 underline-offset-6"
                            : "text-[#A8B4AA] hover:text-[#F8F7F2]"
                        }`}
                      >
                        <span>{label}</span>
                      </a>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-[#A8B4AA]">
              <span>Manoranjan AT · Portfolio</span>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="text-[#D5F2A3] font-bold hover:underline cursor-pointer"
              >
                manoranjanat527@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
