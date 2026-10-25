import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

const SCROLL_THRESHOLD = 20;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "achievements", "contact"];
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, {
          rootMargin: "-25% 0px -65% 0px",
          threshold: 0,
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
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
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: "smooth",
        });
      }
      closeMobileMenu();
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
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const linkItemVariants: Variants = {
    closed: {
      opacity: 0,
      y: 12,
      transition: { duration: 0.15 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090A0C]/90 backdrop-blur-md border-b border-[#262B33] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
        >
          <div className="flex h-18 sm:h-20 items-center justify-between">
            {/* Clean Wordmark */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMobileMenu();
              }}
              className="group flex items-baseline gap-2 relative z-50"
              aria-label="Manoranjan AT — Return to top"
            >
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#E7E9EC] group-hover:text-[#8AA9FF] transition-colors duration-200">
                Manoranjan AT
              </span>
              <span className="hidden md:inline-block font-mono text-[11px] text-[#9298A2] tracking-wider">
                / Developer
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-7">
                {NAV_LINKS.map(({ label, href }) => {
                  const targetId = href.slice(1);
                  const isActive = activeSection === targetId;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={(e) => handleLinkClick(e, href)}
                      className={`relative font-sans text-xs tracking-wider uppercase transition-colors duration-200 py-1 ${
                        isActive
                          ? "text-[#E7E9EC] font-semibold"
                          : "text-[#9298A2] hover:text-[#E7E9EC]"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <span
                          className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#8AA9FF]"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Contact Button */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="inline-flex items-center gap-1.5 border border-[#262B33] bg-[#14161A] hover:bg-[#1C1F24] hover:border-[#8AA9FF]/50 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-[#E7E9EC] transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8AA9FF]" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="relative z-50 flex h-10 w-10 items-center justify-center border border-[#262B33] bg-[#14161A] text-[#E7E9EC] hover:text-[#8AA9FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8AA9FF] lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#090A0C] px-8 pt-28 pb-10 lg:hidden border-b border-[#262B33]"
          >
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#9298A2] border-b border-[#262B33] pb-3">
              Navigation Menu
            </div>

            <motion.nav className="flex flex-col gap-4 py-8" aria-label="Mobile navigation links">
              {NAV_LINKS.map(({ label, href }) => {
                const targetId = href.slice(1);
                const isActive = activeSection === targetId;
                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleLinkClick(e, href)}
                    variants={linkItemVariants}
                    className="flex items-center justify-between py-2 border-b border-[#1C1F24]"
                  >
                    <span className={`font-display text-2xl font-semibold transition-colors ${isActive ? 'text-[#8AA9FF]' : 'text-[#E7E9EC]'}`}>
                      {label}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8AA9FF]" />
                    )}
                  </motion.a>
                );
              })}
            </motion.nav>

            <div className="space-y-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#8AA9FF] text-[#090A0C] font-mono text-xs uppercase tracking-wider font-semibold"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex justify-between items-center text-[10px] font-mono text-[#9298A2] tracking-wider pt-2">
                <span>Manoranjan AT</span>
                <span>BIET CSE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
