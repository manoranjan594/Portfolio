import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Work", href: "#projects", num: "03" },
  { label: "Achievements", href: "#achievements", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
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
        const navHeight = 76;
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
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const linkItemVariants: Variants = {
    closed: {
      opacity: 0,
      y: 16,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF7F0]/92 backdrop-blur-md border-b border-[#DDD5C7] shadow-[0_2px_12px_rgba(41,39,34,0.03)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Atelier primary navigation"
          className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
        >
          <div className="flex h-20 items-center justify-between">
            {/* Wordmark & Atelier Tag */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMobileMenu();
              }}
              className="group flex items-baseline gap-3 relative z-50"
              aria-label="Manoranjan AT — Return to top"
            >
              <span className="font-serif text-xl tracking-[0.08em] text-[#292722] group-hover:text-[#C4A36B] transition-colors duration-300">
                MANORANJAN AT
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#8B857A]">
                [ATELIER // 2026]
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-1 border border-[#DDD5C7]/70 bg-[#FFFDF9]/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {NAV_LINKS.map(({ label, href, num }) => {
                  const targetId = href.slice(1);
                  const isActive = activeSection === targetId;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={(e) => handleLinkClick(e, href)}
                      className={`relative px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? "text-[#292722] font-semibold"
                          : "text-[#8B857A] hover:text-[#292722]"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="text-[9px] text-[#C4A36B] opacity-75">{num}</span>
                      <span>{label}</span>
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#C4A36B]"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Atelier Connect Action */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="group inline-flex items-center gap-2 border border-[#C4A36B]/60 bg-[#FFFDF9] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#292722] hover:bg-[#C4A36B] hover:text-[#FAF7F0] hover:border-[#C4A36B] transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C4A36B] group-hover:text-[#FAF7F0] transition-colors" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="relative z-50 flex h-10 w-10 items-center justify-center border border-[#DDD5C7] bg-[#FFFDF9] text-[#292722] hover:text-[#C4A36B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A36B] lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-atelier-menu"
              aria-label={isMobileMenuOpen ? "Close navigation drawer" : "Open navigation drawer"}
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
                    <X size={18} strokeWidth={1.75} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} strokeWidth={1.75} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-atelier-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Atelier mobile menu"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#FAF7F0] px-8 pt-28 pb-12 lg:hidden border-b border-[#DDD5C7]"
          >
            {/* Top Catalogue Reference */}
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8B857A] border-b border-[#DDD5C7] pb-3">
              DIRECTORY // ATELIER NAVIGATION
            </div>

            {/* Menu List */}
            <motion.nav className="flex flex-col gap-3 py-6" aria-label="Mobile navigation links">
              {NAV_LINKS.map(({ label, href, num }) => {
                const targetId = href.slice(1);
                const isActive = activeSection === targetId;
                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleLinkClick(e, href)}
                    variants={linkItemVariants}
                    className="flex items-baseline justify-between py-2 border-b border-[#DDD5C7]/50"
                  >
                    <span className={`font-serif text-3xl transition-colors ${isActive ? 'text-[#C4A36B]' : 'text-[#292722] hover:text-[#C4A36B]'}`}>
                      {label}
                    </span>
                    <span className="font-mono text-xs text-[#C4A36B]">{num}</span>
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* Mobile Footer CTAs & Info */}
            <div className="space-y-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#292722] text-[#FAF7F0] font-mono text-xs uppercase tracking-[0.18em]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4 text-[#C4A36B]" />
              </a>

              <div className="flex justify-between items-center text-[10px] font-mono text-[#8B857A] tracking-widest uppercase pt-2">
                <span>MANORANJAN AT</span>
                <span>BIET CS&E · 3RD SEM</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
