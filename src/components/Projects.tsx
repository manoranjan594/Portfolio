import { motion } from 'framer-motion';
import { Globe, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  stack: string[];
  githubUrl: string;
  accent: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: '01',
    title: 'Wander Tourism',
    subtitle: 'Travel Discovery & Destination Interface',
    description:
      'A tourism-focused web application built as a personal project to practice layout architecture, scenic image composition, and responsive multi-section hierarchy.',
    category: 'Personal Web Project',
    stack: ['HTML5', 'CSS3', 'Responsive Design'],
    githubUrl: 'https://github.com/manoranjan594',
    accent: '#C4A36B',
  },
  {
    id: '02',
    title: 'LearnHub',
    subtitle: 'Educational Resource Platform',
    description:
      'An educational website designed to explore structured curriculum display, content readability, and clean modern web development fundamentals.',
    category: 'Personal Web Project',
    stack: ['HTML5', 'CSS3', 'Information Architecture'],
    githubUrl: 'https://github.com/manoranjan594',
    accent: '#A77A52',
  },
];

interface ArchiveEntry {
  ref: string;
  title: string;
  type: string;
  stack: string;
  notes: string;
}

const archiveEntries: ArchiveEntry[] = [
  {
    ref: 'EXP-01',
    title: 'India Information Portal',
    type: 'Informational Website',
    stack: 'HTML5, CSS3',
    notes: 'National cultural and geographic facts layout with responsive typography.',
  },
  {
    ref: 'EXP-02',
    title: 'Virat Kohli Biographical Showcase',
    type: 'Informational Website',
    stack: 'HTML5, CSS3',
    notes: 'Sports profile layout focusing on editorial text hierarchy and statistics presentation.',
  },
  {
    ref: 'EXP-03',
    title: 'Warren Buffett Investor Profile',
    type: 'Informational Website',
    stack: 'HTML5, CSS3',
    notes: 'Case-study website exploring financial wisdom quotations and structured timelines.',
  },
  {
    ref: 'EXP-04',
    title: 'Prime Minister Informational Website',
    type: 'Informational Website',
    stack: 'HTML5, CSS3',
    notes: 'Civic information layout emphasizing clear sectioning and public interest details.',
  },
  {
    ref: 'EXP-05',
    title: 'Python Algorithmic Experiments',
    type: 'Scripting Exercises',
    stack: 'Python 3',
    notes: 'Algorithmic drawing scripts including mathematical flower graphs and nested star/diamond patterns.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-36 bg-[#FAF7F0] border-t border-[#DDD5C7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#C4A36B]" />
            <span className="section-label">[OP. 05 — SELECTED WORKS]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DDD5C7]">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-[#292722] leading-tight">
              Personal projects &amp; <br className="hidden sm:block" />
              <em className="italic font-serif text-[#C4A36B]">experimental</em> software.
            </h2>
            <div className="max-w-md text-sm text-[#77736B] font-sans">
              Real projects uploaded to GitHub and hands-on coding exercises. Each represents a tangible step in my journey toward software development.
            </div>
          </div>
        </motion.div>

        {/* Featured Projects: Alternating Asymmetric Showcases */}
        <div className="space-y-16 lg:space-y-24 mb-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="border border-[#DDD5C7] bg-[#FFFDF9] p-8 sm:p-12 shadow-[0_4px_30px_rgba(41,39,34,0.02)]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Project Cover */}
                  <div
                    className={`lg:col-span-6 relative bg-gradient-to-br from-[#F0E9DC] via-[#FAF7F0] to-[#FAF5EC] border border-[#DDD5C7] p-8 sm:p-12 min-h-[260px] sm:min-h-[320px] flex flex-col justify-between overflow-hidden group ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Architectural Grid Watermark */}
                    <div className="absolute inset-4 border border-[#DDD5C7]/50 pointer-events-none" />
                    
                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A77A52]">
                        [PROJECT // {project.id}]
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#DDD5C7] bg-[#FFFDF9] flex items-center justify-center text-[#C4A36B]">
                        <Globe className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="my-auto py-6 z-10">
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#292722] mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-[#8B857A]">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#DDD5C7]/70 z-10 text-[10px] font-mono tracking-widest text-[#8B857A] uppercase">
                      <span>VERIFIED REPO</span>
                      <span className="text-[#C4A36B]">PERSONAL WORK</span>
                    </div>
                  </div>

                  {/* Editorial Description Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C4A36B]">
                          {project.category}
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl sm:text-3xl text-[#292722] mb-4">
                        {project.title}
                      </h4>

                      <p className="text-[#77736B] leading-relaxed mb-6 font-sans text-base">
                        {project.description}
                      </p>

                      {/* Technical Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-3 py-1 bg-[#F0E9DC]/60 border border-[#DDD5C7] text-[#292722]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Repository Action */}
                    <div className="pt-6 border-t border-[#DDD5C7]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#292722] text-[#FAF7F0] px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:bg-[#C4A36B] transition-colors duration-300"
                        aria-label={`View ${project.title} repository on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C4A36B]" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Exploratory Archive Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border border-[#DDD5C7] bg-[#FFFDF9] p-8 sm:p-12 shadow-[0_4px_24px_rgba(41,39,34,0.02)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 mb-6 border-b border-[#DDD5C7]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A36B] block mb-1">
                [LEDGER // 02]
              </span>
              <h3 className="font-serif text-2xl text-[#292722]">
                Additional Coding Experiments &amp; Web Exercises
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8B857A] uppercase tracking-wider">
              5 VERIFIED ENTRIES
            </span>
          </div>

          <div className="divide-y divide-[#DDD5C7]">
            {archiveEntries.map((entry) => (
              <div
                key={entry.ref}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#FAF7F0]/80 transition-colors px-2"
              >
                <div className="md:col-span-2 font-mono text-xs text-[#A77A52] tracking-wider">
                  {entry.ref}
                </div>
                <div className="md:col-span-4 font-serif text-lg text-[#292722]">
                  {entry.title}
                </div>
                <div className="md:col-span-2 font-mono text-xs text-[#8B857A]">
                  {entry.stack}
                </div>
                <div className="md:col-span-4 text-xs text-[#77736B] leading-relaxed font-sans">
                  {entry.notes}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#DDD5C7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8B857A]">
            <span>More experimental code maintained on GitHub</span>
            <a
              href="https://github.com/manoranjan594"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#292722] hover:text-[#C4A36B] transition-colors"
            >
              <span>github.com/manoranjan594</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
