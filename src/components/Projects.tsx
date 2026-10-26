import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  X,
  Code2,
  Layers,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { Github } from './Icons';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Web Platform' | 'Finance Utility' | 'Civic & Cultural Web' | 'Biographical Archive' | 'Editorial Web Series';
  subtitle: string;
  description: string;
  purpose: string;
  highlights: string[];
  tech: string[];
  contribution: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: 'wander-tourism',
    title: 'Wander Tourism',
    category: 'Full-Stack',
    subtitle: 'Travel Discovery & Hotel Reservation Engine',
    featured: true,
    description:
      'A full-stack travel booking and destination discovery portal. Features structured RESTful API endpoints for user authentication (JWT), MongoDB data models for hotel catalogs, and Razorpay test payment gateway integration.',
    purpose:
      'Built to address fragmented travel planning by uniting destination exploration, verified accommodation browsing, and secure mock booking payments into a single, responsive web platform.',
    highlights: [
      'JWT-authenticated registration, password hashing, and session management workflow',
      'MongoDB data schemas for hotel inventory, pricing tiers, and user review scores',
      'Razorpay test checkout integration for simulated booking transactions',
      'Filterable destination browsing with responsive grid layouts',
      'Interactive booking management dashboard with reservation status feedback',
    ],
    tech: ['Python (Flask)', 'MongoDB', 'JWT Auth', 'Razorpay API', 'HTML5', 'CSS3 (Responsive)', 'REST API'],
    contribution:
      'Architected the Flask backend routing, designed MongoDB schemas for room types and users, integrated Razorpay’s JavaScript checkout modal, and built the responsive frontend interface.',
    githubUrl: 'https://github.com/manoranjan594',
    image: './projects/wander-tourism.jpg',
  },
  {
    id: 'learnhub',
    title: 'LearnHub',
    category: 'Web Platform',
    subtitle: 'Modular Learning Management System',
    featured: true,
    description:
      'A multi-page educational web platform providing course catalogs, lecture video viewports, interactive quizzes, student dashboards, and a course discussion forum with client-side persistence.',
    purpose:
      'Created to provide a structured, lightweight self-paced learning portal where learners can enroll in courses, track module completion, take self-assessment quizzes, and participate in discussion threads without requiring heavy server setups.',
    highlights: [
      'Multi-page application architecture: Student Dashboard, Courses Catalog, Lecture Player, and User Profile',
      'Client-side database layer utilizing LocalStorage for course progress and quiz scores',
      'Modular video player interface with interactive notes panel and timestamp bookmarks',
      'Course-specific discussion forum with real-time DOM-based post submission and replies',
    ],
    tech: ['HTML5 (Semantic)', 'CSS3 (Flexbox/Grid)', 'JavaScript (ES6+)', 'LocalStorage API', 'DOM Manipulation'],
    contribution:
      'Designed the multi-page navigation flow, implemented the complete JavaScript client-side state engine using LocalStorage, and built interactive quiz grading routines.',
    githubUrl: 'https://github.com/manoranjan594',
  },
  {
    id: 'money-saving-app',
    title: 'Money Saving & Expense Tracker',
    category: 'Finance Utility',
    subtitle: 'Budgeting & UPI Expense Tracking Tool',
    featured: true,
    description:
      'A personal finance utility to monitor daily, monthly, and annual savings goals. Features UPI payment method tagging (GPay, PhonePe, Paytm, Cash, Card), dynamic balance calculation, and JSON backup export/import to Google Drive.',
    purpose:
      'Developed to help individuals maintain daily spending discipline in India’s cash-free economy by tracking UPI micro-transactions, visualizing category spend, and backing up records without third-party vendor lock-in.',
    highlights: [
      'Daily, monthly, and yearly savings analytics engine with instant budget calculations',
      'UPI payment classification (GPay, PhonePe, Paytm, NetBanking, Cash) for cashflow categorization',
      'User-configurable financial target thresholds with visual warning badges',
      'JSON data export and import capability allowing offline file backups and Google Drive synchronization',
      'Dynamic expense filtering by date range, category, and payment channel',
    ],
    tech: ['JavaScript (ES6+)', 'HTML5 (Structure)', 'CSS3 (Flexbox/Grid)', 'JSON Export/Import', 'UPI Tagging Engine'],
    contribution:
      'Engineered the balance calculation algorithms, built the transaction filtering and categorization modules, and designed the JSON backup serializer.',
    githubUrl: 'https://github.com/manoranjan594',
  },
  {
    id: 'india-heritage',
    title: 'India Cultural & Heritage Portal',
    category: 'Civic & Cultural Web',
    subtitle: 'Historical Architecture & Landmark Showcase',
    featured: false,
    description:
      'A comprehensive cultural exploration portal celebrating India’s rich historical architecture, regional monuments, UNESCO World Heritage sites, and traditional arts.',
    purpose:
      'Built to present Indian heritage through an accessible, visually dignified editorial web layout, honoring diverse regional traditions and architectural wonders.',
    highlights: [
      'Carefully structured semantic HTML5 documents for high accessibility and SEO',
      'Interactive regional state filter and historical era timeline guide',
      'High-resolution visual galleries highlighting landmark architecture',
      'Responsive typography hierarchy optimized for reading comfort across mobile and desktop',
    ],
    tech: ['HTML5 (Semantic Structure)', 'CSS3 (Grid/Flexbox)', 'Responsive Typography', 'Web Accessibility'],
    contribution:
      'Curated the historical monument data, structured the multi-section semantic layout, and styled the warm cultural aesthetic using pure CSS3.',
    githubUrl: 'https://github.com/manoranjan594',
    image: './projects/india-heritage.jpg',
  },
  {
    id: 'virat-kohli',
    title: 'Virat Kohli Milestone Showcase',
    category: 'Biographical Archive',
    subtitle: 'Career Milestones & Century Archive',
    featured: false,
    description:
      'A curated sports biographical archive celebrating the career milestones, international cricket records, and statistical achievements of Virat Kohli.',
    purpose:
      'Created as a dynamic tribute and data-rich athletic showcase to celebrate modern cricket excellence, presenting key innings data in a clean, visual format.',
    highlights: [
      'Interactive century counter and milestone breakdown by format (Test, ODI, T20I)',
      'Editorial biography timeline highlighting formative career turning points',
      'Mobile-first responsive layout with athletic high-contrast typography',
      'Rich visual media cards with stats comparison callouts',
    ],
    tech: ['HTML5', 'CSS3 (Animations & Transforms)', 'JavaScript', 'Responsive Web Design'],
    contribution:
      'Synthesized statistical records across formats, crafted the visual layout and card hover interactions, and tested cross-device responsiveness.',
    githubUrl: 'https://github.com/manoranjan594',
    image: './projects/virat-kohli.jpg',
  },
  {
    id: 'warren-buffett',
    title: 'Warren Buffett Investment Principles',
    category: 'Editorial Web Series',
    subtitle: 'Long-Term Compounding & Value Investing Case Study',
    featured: false,
    description:
      'An editorial case study exploring Warren Buffett’s enduring investment philosophy, principles of compounding, economic moats, and disciplined capital allocation.',
    purpose:
      'Designed as a distraction-free, long-form reading experience to share fundamental wisdom on risk management, patience, and business evaluation.',
    highlights: [
      'Refined editorial typography with classical serif headings and generous line-heights',
      'Structured case breakdown: The Circle of Competence, Economic Moats, and Margin of Safety',
      'Interactive compounding calculator demonstration explaining exponential returns',
      'Curated quotes archive with source citations and contextual commentary',
    ],
    tech: ['HTML5 (Semantic)', 'CSS3 (Editorial Layout)', 'JavaScript (Calculator)', 'Typography Design'],
    contribution:
      'Authored the editorial breakdown, designed the classic reader-friendly typography system, and developed the interactive compounding math widget.',
    githubUrl: 'https://github.com/manoranjan594',
    image: './projects/warren-buffett.jpg',
  },
  {
    id: 'prime-ministers',
    title: 'Prime Ministers of India Archive',
    category: 'Civic & Cultural Web',
    subtitle: 'Constitutional Leadership & Policy Chronology',
    featured: false,
    description:
      'A civic reference archive documenting the tenures, constitutional roles, major national policies, and historical contributions of all Indian Prime Ministers since 1947.',
    purpose:
      'Built to provide an objective, educational reference on Indian governance and parliamentary democracy for students and civic-minded readers.',
    highlights: [
      'Chronological tenure timeline from 1947 to present day',
      'Key policy highlights and nation-building milestones for each administration',
      'Semantic document structure with accessible headings and tabular tenure data',
      'Search and filter functionality by decade and tenure length',
    ],
    tech: ['HTML5 (Semantic Hierarchy)', 'CSS3 (Timeline Layout)', 'JavaScript', 'Information Architecture'],
    contribution:
      'Compiled and verified historical tenure records, implemented the timeline layout with pure CSS, and ensured responsive readability.',
    githubUrl: 'https://github.com/manoranjan594',
    image: './projects/india-heritage.jpg',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProject]);

  const featuredProjects = ALL_PROJECTS.filter((p) => p.featured);
  const visualStudies = ALL_PROJECTS.filter((p) => !p.featured);

  const filteredFeatured = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 lg:py-36 bg-[#F8F7F2] text-[#252923] border-t border-[#E5E7DF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#174D38]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#174D38] font-bold">
              02 / Featured Work &amp; Code Showcases
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E7DF]">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#174D38] tracking-tight leading-[1.08]">
                Selected Work. <br />
                <span className="font-normal text-[#555A50]">Projects built through practice, curiosity, and experimentation.</span>
              </h2>
              <p className="mt-3 text-base text-[#474E40] max-w-2xl font-sans">
                Hands-on engineering projects spanning full-stack systems, modular web platforms, and financial utilities. Click any card to inspect full technical architecture and contributions.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Full-Stack', 'Web Platform', 'Finance Utility'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-[#174D38] text-[#F8F7F2] border-[#174D38] shadow-sm'
                      : 'bg-[#FFFFFF] text-[#74796F] border-[#E5E7DF] hover:text-[#174D38] hover:bg-[#F1F3EB]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Projects List */}
        <div className="space-y-12 mb-24">
          {filteredFeatured.map((project, index) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              custom={index}
              onClick={() => setSelectedProject(project)}
              className="rounded-3xl bg-[#FFFFFF] border border-[#E5E7DF] p-8 sm:p-12 soft-card-shadow soft-hover-shadow transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl cursor-pointer relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] focus-visible:border-[#D5F2A3]"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Details Column */}
                <div className={project.image ? "lg:col-span-7 space-y-6" : "lg:col-span-12 space-y-6"}>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7DF]">
                    <span className="px-3.5 py-1 rounded-full bg-[#D5F2A3] border border-[#174D38]/15 text-xs font-sans font-bold text-[#174D38] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#74796F] font-sans font-medium">
                      Project 0{index + 1} • Click for Architecture
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#174D38] tracking-tight group-hover:text-[#123D2C] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-base text-[#174D38] font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-[#74796F] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span className="font-sans text-xs text-[#252923] uppercase tracking-wider block font-bold">
                      Key Technical Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.highlights.slice(0, 4).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-xs text-[#74796F]">
                          <CheckCircle2 className="w-4 h-4 text-[#174D38] mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-[#F8F7F2] border border-[#E5E7DF] text-xs font-sans font-medium text-[#174D38]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link & Modal Prompt */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[#174D38] hover:bg-[#123D2C] text-[#F8F7F2] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-[#D5F2A3]" />
                      <span>Inspect Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-[#174D38]/30 hover:border-[#174D38] text-[#174D38] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Optional Image Preview */}
                {project.image && (
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden border border-[#E5E7DF] shadow-md relative group/img aspect-4/3 bg-[#F1F3EB]">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#174D38]/50 to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-sans flex items-center justify-between">
                        <span className="font-semibold drop-shadow-sm">Interactive Preview</span>
                        <span className="text-[11px] opacity-90 drop-shadow-sm">Click to Expand</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.article>
          ))}
        </div>

        {/* Visual Showcase of Case Studies & Exercises */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="border-t border-[#E5E7DF] pt-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#174D38] font-bold block mb-1 font-sans">
                // Visual Case Studies &amp; Document Archives
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#174D38] tracking-tight">
                Authentic Web Projects &amp; Layout Showcases
              </h3>
            </div>
            <span className="text-xs text-[#74796F] font-sans font-medium">
              Click any study to view implementation notes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedProject(study)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(study);
                  }
                }}
                className="rounded-3xl bg-[#FFFFFF] border border-[#E5E7DF] overflow-hidden soft-card-shadow soft-hover-shadow transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] focus-visible:border-[#D5F2A3]"
                aria-label={`View details for ${study.title}`}
              >
                <div>
                  {/* Image Header */}
                  <div className="aspect-16/10 overflow-hidden bg-[#F1F3EB] relative border-b border-[#E5E7DF]">
                    {study.image ? (
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#174D38]/10 to-[#D5F2A3]/30">
                        <Code2 className="w-10 h-10 text-[#174D38]/40" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-xs text-[10px] font-sans font-bold uppercase tracking-wider text-[#174D38] shadow-xs">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h4 className="font-display font-bold text-lg text-[#174D38] mb-2 group-hover:text-[#123D2C] transition-colors leading-snug">
                      {study.title}
                    </h4>
                    <p className="text-sm text-[#74796F] leading-relaxed font-sans mb-4">
                      {study.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E5E7DF]/60 flex items-center justify-between text-xs text-[#74796F] font-sans font-medium">
                  <span className="truncate mr-2 font-sans text-[11px] text-[#174D38] font-bold">
                    Inspect Architecture
                  </span>
                  <div className="inline-flex items-center gap-1 text-[#174D38] font-bold group-hover:translate-x-0.5 transition-transform">
                    <span>Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ============================================================== */}
      {/* INTERACTIVE PROJECT DETAILS MODAL DIALOG                        */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0B1712]/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Window Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-[#FFFFFF] rounded-3xl shadow-2xl border border-[#E5E7DF] overflow-hidden flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header Bar */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#E5E7DF] flex items-center justify-between bg-[#F8F7F2]">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#174D38] text-white text-[11px] font-sans font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-[#74796F] font-sans hidden sm:inline">
                    Technical Deep Dive
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white hover:bg-[#E5E7DF] border border-[#E5E7DF] text-[#252923] hover:text-[#174D38] transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="px-6 sm:px-8 py-6 sm:py-8 overflow-y-auto space-y-6">
                
                {/* Title & Subtitle */}
                <div>
                  <h3 id="modal-title" className="font-display font-extrabold text-2xl sm:text-3xl text-[#174D38] tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base font-semibold text-[#C7A66A] mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Real Image Preview (if present) */}
                {selectedProject.image && (
                  <div className="rounded-2xl overflow-hidden border border-[#E5E7DF] aspect-16/9 bg-[#F1F3EB]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Purpose & Problem Statement */}
                <div className="p-5 rounded-2xl bg-[#F8F7F2] border border-[#E5E7DF]">
                  <div className="flex items-center gap-2 mb-2 text-[#174D38] font-bold text-xs uppercase tracking-wider font-sans">
                    <Sparkles className="w-4 h-4" />
                    <span>Project Purpose &amp; Problem Solved</span>
                  </div>
                  <p className="font-sans text-sm text-[#474E40] leading-relaxed">
                    {selectedProject.purpose}
                  </p>
                </div>

                {/* Key Technical Features */}
                <div>
                  <span className="font-sans text-xs font-bold text-[#174D38] uppercase tracking-wider block mb-3">
                    Implemented Features &amp; Architecture:
                  </span>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555A50]">
                        <CheckCircle2 className="w-4 h-4 text-[#174D38] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honest Engineering Contribution */}
                <div className="p-5 rounded-2xl bg-[#D5F2A3]/25 border border-[#174D38]/15">
                  <div className="flex items-center gap-2 mb-2 text-[#174D38] font-bold text-xs uppercase tracking-wider font-sans">
                    <UserCheck className="w-4 h-4" />
                    <span>Manoranjan’s Honest Contribution &amp; Role</span>
                  </div>
                  <p className="font-sans text-sm text-[#252923] leading-relaxed">
                    {selectedProject.contribution}
                  </p>
                </div>

                {/* Technology Stack Tags */}
                <div>
                  <span className="font-sans text-xs font-bold text-[#174D38] uppercase tracking-wider block mb-2.5">
                    Technologies &amp; Libraries Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E7DF] text-xs font-sans font-semibold text-[#174D38] shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="px-6 sm:px-8 py-4 border-t border-[#E5E7DF] bg-[#F8F7F2] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#174D38] hover:bg-[#123D2C] text-[#F8F7F2] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full border border-[#E5E7DF] bg-white text-xs font-semibold text-[#74796F] hover:text-[#252923] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
