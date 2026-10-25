import { motion, type Variants } from 'framer-motion';
import { Terminal, Globe, GitBranch, Brain, Cpu, Film } from 'lucide-react';
import type { ReactNode } from 'react';

interface SkillCategory {
  index: string;
  title: string;
  icon: ReactNode;
  scope: string;
  items: { name: string; tag: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    index: '01',
    title: 'Core Programming',
    icon: <Terminal className="w-4 h-4" />,
    scope: 'Foundational languages for problem-solving & data structures',
    items: [
      { name: 'Python', tag: 'Core / Scripting' },
      { name: 'C', tag: 'Systems Foundations' },
      { name: 'Java', tag: 'Object-Oriented' },
    ],
  },
  {
    index: '02',
    title: 'Web Technologies',
    icon: <Globe className="w-4 h-4" />,
    scope: 'Structuring and styling responsive digital experiences',
    items: [
      { name: 'HTML5', tag: 'Semantic Structure' },
      { name: 'CSS3', tag: 'Responsive Layouts & Styling' },
    ],
  },
  {
    index: '03',
    title: 'Version Control & Tools',
    icon: <GitBranch className="w-4 h-4" />,
    scope: 'Source control, code management, and repository workflow',
    items: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Repository Collaboration' },
    ],
  },
  {
    index: '04',
    title: 'Analytical & Problem-Solving',
    icon: <Brain className="w-4 h-4" />,
    scope: 'Methodical approaches to breaking down technical challenges',
    items: [
      { name: 'Problem Solving', tag: 'Algorithmic Thinking' },
      { name: 'Debugging Practice', tag: 'Root-Cause Analysis' },
      { name: 'Logical Structuring', tag: 'Step-by-step logic' },
      { name: 'Continuous Learning', tag: 'Active Skill Development' },
    ],
  },
  {
    index: '05',
    title: 'AI & Data Foundations',
    icon: <Cpu className="w-4 h-4" />,
    scope: 'Theoretical principles & emerging application concepts',
    items: [
      { name: 'Machine Learning', tag: 'Foundational Concepts' },
      { name: 'Data Science', tag: 'Core Principles' },
      { name: 'Data Analysis', tag: 'Analytical Fundamentals' },
      { name: 'AI Application Concepts', tag: 'Conceptual Exploration' },
    ],
  },
  {
    index: '06',
    title: 'Creative Craft',
    icon: <Film className="w-4 h-4" />,
    scope: 'Visual media, composition, pacing, and graphic design',
    items: [
      { name: 'Videography', tag: 'Cinematography & Editing' },
      { name: 'Poster Design', tag: 'Graphic Hierarchy' },
      { name: 'Content Creation', tag: 'Visual Communication' },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-36 bg-[#FFFDF9] border-t border-[#DDD5C7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#C4A36B]" />
            <span className="section-label">[OP. 03 — TECHNICAL TOOLKIT]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DDD5C7]">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-[#292722] leading-tight">
              Honest capability &amp; <br className="hidden sm:block" />
              <em className="italic font-serif text-[#C4A36B]">active</em> disciplines.
            </h2>
            <p className="max-w-md text-sm text-[#77736B] font-sans">
              A factual breakdown of the programming languages, web technologies, and creative disciplines I actively practice—without inflated ratings or artificial metrics.
            </p>
          </div>
        </motion.div>

        {/* Ledger Grid: Editorial 3-Column Catalog */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="border border-[#DDD5C7] bg-[#FAF7F0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#C4A36B] transition-colors duration-300 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD5C7]/70">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#C4A36B] group-hover:text-[#292722] transition-colors">
                      {cat.icon}
                    </span>
                    <h3 className="font-serif text-lg text-[#292722]">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#8B857A]">
                    {cat.index}
                  </span>
                </div>

                {/* Scope Note */}
                <p className="text-xs text-[#77736B] mb-6 leading-relaxed">
                  {cat.scope}
                </p>

                {/* Skill Items List */}
                <ul className="space-y-2.5" role="list">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between py-1.5 px-2.5 bg-[#FFFDF9] border border-[#DDD5C7]/60 text-xs transition-colors hover:border-[#C4A36B]/60"
                    >
                      <span className="font-medium text-[#292722]">
                        {item.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#8B857A] tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-6 border-t border-[#DDD5C7]/50 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8B857A] uppercase">
                <span>STATUS</span>
                <span className="text-[#C4A36B] font-semibold">ACTIVELY PRACTICING</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
