import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Terminal,
  Globe,
  GitBranch,
  Cpu,
  Film,
  Sparkles,
  Bug,
  Network,
  BookOpen,
  Video,
  Palette,
  Share2,
} from 'lucide-react';
import type { ReactNode } from 'react';
import {
  PythonLogo,
  CLogo,
  JavaLogo,
  Html5Logo,
  Css3Logo,
  JavaScriptLogo,
  GitLogo,
  Github,
  VsCodeLogo,
} from './Icons';

interface SkillItem {
  id: string;
  name: string;
  context: string;
  icon: ReactNode;
  categoryTag?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  icon: ReactNode;
  description: string;
  skills: SkillItem[];
}

const OFFICIAL_TECH_STACK = [
  { id: 'tech-python', name: 'Python', icon: <PythonLogo className="w-5 h-5" />, label: 'Programming' },
  { id: 'tech-c', name: 'C Programming', icon: <CLogo className="w-5 h-5" />, label: 'Core Language' },
  { id: 'tech-java', name: 'Java', icon: <JavaLogo className="w-5 h-5" />, label: 'Object-Oriented' },
  { id: 'tech-html5', name: 'HTML5', icon: <Html5Logo className="w-5 h-5" />, label: 'Semantic Structure' },
  { id: 'tech-css3', name: 'CSS3', icon: <Css3Logo className="w-5 h-5" />, label: 'Responsive Styles' },
  { id: 'tech-js', name: 'JavaScript', icon: <JavaScriptLogo className="w-5 h-5" />, label: 'DOM & Client' },
  { id: 'tech-git', name: 'Git', icon: <GitLogo className="w-5 h-5" />, label: 'Version Control' },
  { id: 'tech-github', name: 'GitHub', icon: <Github className="w-5 h-5 text-[#252923]" />, label: 'Remote Repos' },
  { id: 'tech-vscode', name: 'VS Code', icon: <VsCodeLogo className="w-5 h-5" />, label: 'Editor & CLI' },
];

const activeSkills: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Core Programming',
    badge: 'Languages in Active Practice',
    icon: <Terminal className="w-5 h-5 text-[#174D38]" />,
    description: 'Writing code regularly to build algorithmic problem-solving and computer science fundamentals.',
    skills: [
      {
        id: 'skill-python',
        name: 'Python',
        icon: <PythonLogo className="w-5 h-5" />,
        context: 'Scripting, Flask APIs, data parsing, and algorithmic problem-solving',
      },
      {
        id: 'skill-c',
        name: 'C Programming',
        icon: <CLogo className="w-5 h-5" />,
        context: 'Structured algorithms, memory allocation, pointer manipulation, and foundational problem-solving',
      },
      {
        id: 'skill-java',
        name: 'Java OOP',
        icon: <JavaLogo className="w-5 h-5" />,
        context: 'Object-oriented programming, classes, inheritance, and core software structures',
      },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    badge: 'Markup & Style Sheet Foundations',
    icon: <Globe className="w-5 h-5 text-[#174D38]" />,
    description: 'Crafting clean, semantic, and responsive interfaces following standard web specifications.',
    skills: [
      {
        id: 'skill-html5',
        name: 'HTML5',
        icon: <Html5Logo className="w-5 h-5" />,
        context: 'Markup language providing document structure and meaning—headings, paragraphs, links, images, forms, semantic elements, and accessible document organization',
      },
      {
        id: 'skill-css3',
        name: 'CSS3',
        icon: <Css3Logo className="w-5 h-5" />,
        context: 'Style sheet language controlling visual presentation—colors, typography, spacing, Flexbox, CSS Grid, transitions, animations, and responsive layouts using media queries',
      },
      {
        id: 'skill-js',
        name: 'JavaScript & DOM',
        icon: <JavaScriptLogo className="w-5 h-5" />,
        context: 'Client-side event handling, LocalStorage data persistence, and interactive user interface updates',
      },
    ],
  },
  {
    id: 'workflow',
    title: 'Development Workflow',
    badge: 'Version Control & Tools',
    icon: <GitBranch className="w-5 h-5 text-[#174D38]" />,
    description: 'Managing source code revisions and maintaining structured project environments.',
    skills: [
      {
        id: 'skill-git',
        name: 'Git',
        icon: <GitLogo className="w-5 h-5" />,
        context: 'Version tracking, commit discipline, branch management, and repository workflow',
      },
      {
        id: 'skill-github',
        name: 'GitHub',
        icon: <Github className="w-5 h-5 text-[#252923]" />,
        context: 'Remote repository hosting, portfolio management, and code sharing',
      },
      {
        id: 'skill-vscode',
        name: 'VS Code & CLI',
        icon: <VsCodeLogo className="w-5 h-5" />,
        context: 'Development setup, debugging tools, extensions, and terminal commands',
      },
    ],
  },
  {
    id: 'methods',
    title: 'Problem-Solving & Methods',
    badge: 'Engineering Discipline',
    icon: <Cpu className="w-5 h-5 text-[#174D38]" />,
    description: 'Approaching technical problems methodically from root cause to clean solution.',
    skills: [
      {
        id: 'skill-debugging',
        name: 'Systematic Debugging',
        icon: <Bug className="w-4 h-4 text-[#174D38]" />,
        context: 'Tracing execution flow, reading stack traces, and fixing edge cases',
      },
      {
        id: 'skill-algorithms',
        name: 'Algorithmic Thinking',
        icon: <Network className="w-4 h-4 text-[#174D38]" />,
        context: 'Decomposing computational challenges into efficient steps',
      },
      {
        id: 'skill-learning',
        name: 'Continuous Learning',
        icon: <BookOpen className="w-4 h-4 text-[#174D38]" />,
        context: 'Reading technical documentation, testing code, and iterating',
      },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Visual Media',
    badge: 'Visual Craft',
    icon: <Film className="w-5 h-5 text-[#174D38]" />,
    description: 'Applying creative design principles to improve user experience and product aesthetics.',
    skills: [
      {
        id: 'skill-videography',
        name: 'Videography',
        icon: <Video className="w-4 h-4 text-[#174D38]" />,
        context: 'Camera framing, sequence pacing, and post-production video editing',
      },
      {
        id: 'skill-poster',
        name: 'Poster & Graphic Design',
        icon: <Palette className="w-4 h-4 text-[#174D38]" />,
        context: 'Visual hierarchy, spatial balance, typography contrast, and composition',
      },
      {
        id: 'skill-content',
        name: 'Content Creation',
        icon: <Share2 className="w-4 h-4 text-[#174D38]" />,
        context: 'Communicating ideas clearly through visual and digital media',
      },
    ],
  },
];

const exploringAreas = [
  {
    title: 'Full-Stack Web Architecture',
    note: 'Learning to connect responsive frontends to REST APIs, databases, and secure token authentication.',
  },
  {
    title: 'AI & Machine Learning Foundations',
    note: 'Certified in AI Fundamentals by IBM SkillsBuild; studying natural language processing and computer vision concepts.',
  },
  {
    title: 'AI Agents & Automation',
    note: 'Exploring autonomous tool-use workflows, prompt engineering, and practical developer productivity systems.',
  },
  {
    title: 'Production Software Delivery',
    note: 'Studying deployment pipelines, cloud hosting, and software performance optimization.',
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

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const displayedCategories = selectedCategory === 'all'
    ? activeSkills
    : activeSkills.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-28 lg:py-36 bg-[#F8F7F2] text-[#252923] border-t border-[#E5E7DF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="mb-14 lg:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#174D38]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#174D38] font-bold">
              03 / Technical Toolkit &amp; Methodology
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E7DF]">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#174D38] tracking-tight leading-[1.08]">
                Practical Capability. <br />
                <span className="font-normal text-[#555A50]">Foundations over inflated percentages.</span>
              </h2>
              <p className="mt-3 text-base text-[#474E40] max-w-2xl font-sans">
                Every skill listed below is practiced through active programs, command-line utilities, web platform exercises, or verified academic projects.
              </p>
            </div>

            {/* Quick Filter Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] ${
                  selectedCategory === 'all'
                    ? 'bg-[#174D38] text-[#F8F7F2] border-[#174D38] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#74796F] border-[#E5E7DF] hover:text-[#174D38] hover:bg-[#F1F3EB]'
                }`}
              >
                All Domains
              </button>
              {activeSkills.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] ${
                    selectedCategory === cat.id
                      ? 'bg-[#174D38] text-[#F8F7F2] border-[#174D38] shadow-sm'
                      : 'bg-[#FFFFFF] text-[#74796F] border-[#E5E7DF] hover:text-[#174D38] hover:bg-[#F1F3EB]'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Official Recognized Technology Brand Logos Shelf */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.5}
          className="mb-14 rounded-2xl bg-[#FFFFFF] border border-[#E5E7DF] p-5 sm:p-6 soft-card-shadow"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E7DF]/60">
            <span className="font-sans text-[11px] font-bold text-[#174D38] uppercase tracking-wider">
              Core Technologies &amp; Official Tooling
            </span>
            <span className="font-sans text-xs text-[#74796F]">
              Recognized Industry Standards
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
            {OFFICIAL_TECH_STACK.map((tech) => (
              <div
                key={tech.id}
                id={tech.id}
                tabIndex={0}
                role="region"
                aria-label={`${tech.name} ${tech.label}`}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#F8F7F2] border border-[#E5E7DF] 
                  transition-all duration-200 ease-out 
                  hover:border-[#D5F2A3] hover:-translate-y-1 hover:bg-[#FFFFFF] 
                  hover:shadow-[0_10px_25px_-5px_rgba(23,77,56,0.12),0_0_15px_rgba(213,242,163,0.35)] 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] focus-visible:border-[#D5F2A3] focus-visible:-translate-y-1 
                  cursor-default group/tech text-center select-none"
              >
                <div className="mb-2 p-1.5 rounded-lg bg-white shadow-2xs border border-[#E5E7DF]/70 
                  transition-transform duration-200 ease-out group-hover/tech:scale-110 group-hover/tech:border-[#D5F2A3] group-focus-visible/tech:scale-110">
                  {tech.icon}
                </div>
                <span className="font-sans font-bold text-xs text-[#174D38] leading-tight transition-colors duration-200 group-hover/tech:text-[#0B1712]">
                  {tech.name}
                </span>
                <span className="font-sans text-[10px] text-[#74796F] mt-0.5 leading-tight transition-colors duration-200 group-hover/tech:text-[#252923]">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {displayedCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              custom={index}
              className="rounded-3xl bg-[#FFFFFF] border border-[#E5E7DF] p-8 soft-card-shadow soft-hover-shadow transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E7DF]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-[#D5F2A3]/40 text-[#174D38]">
                      {category.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#174D38]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#74796F] font-sans font-medium">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-sm text-[#74796F] mb-6 font-sans leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Contextual List with Smooth Interactive Hover Highlight Effect */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      id={skill.id}
                      tabIndex={0}
                      role="region"
                      aria-label={`${skill.name} details`}
                      className="p-3.5 rounded-2xl bg-[#F8F7F2] border border-[#E5E7DF] transition-all duration-200 ease-out 
                        hover:border-[#D5F2A3] hover:-translate-y-1 hover:bg-[#FFFFFF] 
                        hover:shadow-[0_10px_25px_-5px_rgba(23,77,56,0.12),0_0_15px_rgba(213,242,163,0.35)] 
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] focus-visible:border-[#D5F2A3] focus-visible:-translate-y-1 
                        cursor-default group/skill select-none"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-white border border-[#E5E7DF] p-1 flex items-center justify-center shadow-2xs shrink-0 
                            transition-all duration-200 ease-out group-hover/skill:scale-110 group-hover/skill:border-[#D5F2A3] group-focus-visible/skill:scale-110">
                            {skill.icon}
                          </div>
                          <span className="font-sans text-sm font-bold text-[#174D38] transition-colors duration-200 group-hover/skill:text-[#0B1712]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-sans uppercase font-bold text-[#174D38] px-2 py-0.5 rounded-full bg-[#D5F2A3]/50 border border-transparent 
                          transition-all duration-200 group-hover/skill:bg-[#D5F2A3] group-hover/skill:border-[#174D38]/20 group-hover/skill:shadow-2xs">
                          Active
                        </span>
                      </div>
                      <p className="text-xs text-[#74796F] leading-normal font-sans pl-9.5 transition-colors duration-200 group-hover/skill:text-[#252923]">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E5E7DF] flex items-center justify-between text-xs text-[#74796F] font-sans font-medium">
                <span>{category.badge}</span>
                <span className="text-[#174D38] font-bold">Active Practice</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Areas Under Active Exploration with Interactive Hover */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
          className="rounded-3xl bg-[#FFFFFF] border border-[#E5E7DF] p-8 sm:p-12 soft-card-shadow"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#174D38]" />
            <span className="text-xs uppercase tracking-widest text-[#174D38] font-bold font-sans">
              // Continuous Learning &amp; Emerging Domains
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#174D38] mb-6 tracking-tight">
            Active Research &amp; Study Areas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploringAreas.map((area, i) => (
              <div
                key={area.title}
                tabIndex={0}
                role="region"
                aria-label={`${area.title} exploration area`}
                className="p-6 rounded-2xl bg-[#F8F7F2] border border-[#E5E7DF] space-y-2.5 transition-all duration-200 ease-out 
                  hover:border-[#D5F2A3] hover:-translate-y-1 hover:bg-[#FFFFFF] 
                  hover:shadow-[0_10px_25px_-5px_rgba(23,77,56,0.12),0_0_15px_rgba(213,242,163,0.35)] 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] focus-visible:border-[#D5F2A3] 
                  cursor-default group/area"
              >
                <div className="text-[10px] text-[#174D38] uppercase tracking-wider font-bold font-sans transition-colors group-hover/area:text-[#123D2C]">
                  Domain 0{i + 1}
                </div>
                <h4 className="font-sans font-bold text-base text-[#252923] transition-colors group-hover/area:text-[#174D38]">
                  {area.title}
                </h4>
                <p className="text-xs text-[#74796F] leading-relaxed font-sans transition-colors group-hover/area:text-[#252923]">
                  {area.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
