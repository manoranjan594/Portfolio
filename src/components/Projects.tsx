import { motion, type Variants } from 'framer-motion';
import { Globe, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Github } from './Icons';

interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Wander Tourism',
    category: 'Personal Web Project',
    description:
      'A tourism-focused web application designed to explore scenic destination browsing, multi-section content hierarchy, and responsive web design principles.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    githubUrl: 'https://github.com/manoranjan594',
  },
  {
    title: 'LearnHub',
    category: 'Educational Web Project',
    description:
      'An educational platform website built to explore structured resource presentation, typography readability, and clean frontend web development fundamentals.',
    tech: ['HTML5', 'CSS3', 'Information Architecture'],
    githubUrl: 'https://github.com/manoranjan594',
  },
];

interface PracticeProject {
  title: string;
  type: string;
  tech: string;
  description: string;
}

const practiceProjects: PracticeProject[] = [
  {
    title: 'India Information Portal',
    type: 'Informational Website',
    tech: 'HTML5 · CSS3',
    description: 'National overview portal focusing on geographical landmarks, cultural heritage, and clean content structuring.',
  },
  {
    title: 'Virat Kohli Biographical Showcase',
    type: 'Informational Website',
    tech: 'HTML5 · CSS3',
    description: 'Athlete biographical profile exploring visual statistics layout, milestones timeline, and sports imagery presentation.',
  },
  {
    title: 'Warren Buffett Investor Profile',
    type: 'Informational Website',
    tech: 'HTML5 · CSS3',
    description: 'Case study website dedicated to investing principles, famous quotations, and structured editorial reading layout.',
  },
  {
    title: 'Prime Minister Informational Website',
    type: 'Informational Website',
    tech: 'HTML5 · CSS3',
    description: 'Civic information portal built to practice multi-column document layouts and official public information display.',
  },
  {
    title: 'Python Algorithmic Drawing & Patterns',
    type: 'Programming Exercises',
    tech: 'Python 3',
    description: 'Mathematical turtle graphing scripts generating flower curves, alongside nested loop star and diamond pattern algorithms.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#090A0C] border-t border-[#1C2026]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-14 lg:mb-18"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AA9FF]" />
            <span className="section-tag">Featured Works</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#262B33]">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#E7E9EC] tracking-tight">
              Selected projects &amp; <br />
              <span className="text-[#8AA9FF] font-normal">coding experiments.</span>
            </h2>
            <p className="max-w-md text-sm text-[#9298A2] font-sans">
              Real projects uploaded to GitHub and hands-on coding exercises. Each project represents practical experimentation and continuous skill building.
            </p>
          </div>
        </motion.div>

        {/* Featured Projects: 2 Clean Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="border border-[#262B33] bg-[#14161A] p-7 sm:p-9 hover:border-[#8AA9FF]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Architectural Banner */}
                <div className="relative h-44 sm:h-52 bg-gradient-to-br from-[#1C1F24] via-[#14161A] to-[#090A0C] border border-[#262B33] p-6 mb-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-[#9298A2]">
                    <span className="font-mono text-xs text-[#8AA9FF] font-medium">
                      0{idx + 1}
                    </span>
                    <Globe className="w-4 h-4 text-[#9298A2] group-hover:text-[#8AA9FF] transition-colors" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#E7E9EC] mb-1">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-[#9298A2] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#9298A2] border-t border-[#262B33] pt-2">
                    <span>GITHUB REPOSITORY</span>
                    <span className="text-[#8AA9FF]">PERSONAL PROJECT</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9298A2] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 bg-[#1C1F24] border border-[#262B33] text-[#E7E9EC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Button */}
              <div className="pt-4 border-t border-[#262B33]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E7E9EC] hover:text-[#8AA9FF] transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8AA9FF]" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Practice Exercises & Informational Sites Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="border border-[#262B33] bg-[#14161A] p-7 sm:p-9"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#262B33]">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#8AA9FF]" />
              <h3 className="font-display font-semibold text-lg text-[#E7E9EC]">
                Additional Web Exercises &amp; Programming Practice
              </h3>
            </div>
            <span className="font-mono text-xs text-[#9298A2] tracking-wider uppercase">
              5 Practice Records
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="divide-y divide-[#1C2026]"
          >
            {practiceProjects.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline hover:bg-[#1C1F24]/50 transition-colors px-2"
              >
                <div className="md:col-span-4 font-display font-medium text-base text-[#E7E9EC]">
                  {item.title}
                </div>
                <div className="md:col-span-3 font-mono text-xs text-[#8AA9FF]">
                  {item.tech}
                </div>
                <div className="md:col-span-5 text-xs text-[#9298A2] leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 pt-4 border-t border-[#262B33] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#9298A2]">
            <span>All source code and exercises maintained on GitHub</span>
            <a
              href="https://github.com/manoranjan594"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#E7E9EC] hover:text-[#8AA9FF] transition-colors"
            >
              <span>github.com/manoranjan594</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8AA9FF]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
