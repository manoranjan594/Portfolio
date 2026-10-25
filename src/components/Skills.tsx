import { motion, type Variants } from 'framer-motion';
import { Terminal, Globe, GitBranch, Cpu, Film, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

interface SkillCategory {
  title: string;
  badge: string;
  icon: ReactNode;
  description: string;
  skills: { name: string; level: string }[];
}

const activeSkills: SkillCategory[] = [
  {
    title: 'Core Programming',
    badge: 'Languages in Active Use',
    icon: <Terminal className="w-4 h-4" />,
    description: 'Developing foundational problem-solving and algorithmic thinking.',
    skills: [
      { name: 'Python', level: 'Actively Writing & Practicing' },
      { name: 'C', level: 'Systems & Memory Foundations' },
      { name: 'Java', level: 'Object-Oriented Concepts' },
    ],
  },
  {
    title: 'Web Technologies',
    badge: 'Frontend Foundations',
    icon: <Globe className="w-4 h-4" />,
    description: 'Structuring and styling responsive digital experiences.',
    skills: [
      { name: 'HTML5', level: 'Semantic Structure & Accessibility' },
      { name: 'CSS3', level: 'Responsive Layouts & Visual Styling' },
    ],
  },
  {
    title: 'Development Workflow',
    badge: 'Source Management',
    icon: <GitBranch className="w-4 h-4" />,
    description: 'Tracking code revisions and repository collaboration.',
    skills: [
      { name: 'Git', level: 'Version Control & Branching' },
      { name: 'GitHub', level: 'Repository Hosting & Code Sharing' },
    ],
  },
  {
    title: 'Problem-Solving Mindset',
    badge: 'Analytical Strengths',
    icon: <Cpu className="w-4 h-4" />,
    description: 'Approaching computational challenges with patience and discipline.',
    skills: [
      { name: 'Debugging Practice', level: 'Systematic Root-Cause Analysis' },
      { name: 'Algorithmic Thinking', level: 'Step-by-Step Logic Design' },
      { name: 'Continuous Learning', level: 'Hands-on Experimentation' },
    ],
  },
  {
    title: 'Creative Media',
    badge: 'Visual Design Craft',
    icon: <Film className="w-4 h-4" />,
    description: 'Translating concepts into compelling visual communication.',
    skills: [
      { name: 'Videography', level: 'Camera Operation & Video Editing' },
      { name: 'Poster Design', level: 'Composition, Pacing & Layout' },
      { name: 'Content Creation', level: 'Visual Storytelling' },
    ],
  },
];

const exploringAreas = [
  {
    title: 'Full-Stack Development',
    note: 'Connecting client interfaces with server endpoints and database layers.',
  },
  {
    title: 'Machine Learning Concepts',
    note: 'Grasping foundational predictive models, mathematics, and data flows.',
  },
  {
    title: 'AI Agent Architecture',
    note: 'Exploring autonomous tool-use, workflow chains, and model reasoning.',
  },
  {
    title: 'Practical Software Products',
    note: 'Building utility-driven digital tools that address genuine real-world needs.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#090A0C] border-t border-[#1C2026]">
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
            <span className="section-tag">Technical Skills &amp; Toolkit</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#262B33]">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#E7E9EC] tracking-tight">
              Technologies in use. <br />
              <span className="text-[#8AA9FF] font-normal">Clearly stated capabilities.</span>
            </h2>
            <p className="max-w-md text-sm text-[#9298A2] font-sans">
              An honest account of the programming languages, web technologies, and problem-solving practices I work with—without inflated ratings or artificial metrics.
            </p>
          </div>
        </motion.div>

        {/* Part 1: Current Working Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {activeSkills.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="border border-[#262B33] bg-[#14161A] p-6 hover:border-[#8AA9FF]/40 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262B33]">
                  <div className="flex items-center gap-2 text-[#8AA9FF]">
                    {cat.icon}
                    <h3 className="font-display font-semibold text-base text-[#E7E9EC]">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#9298A2] mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="space-y-2.5">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-baseline justify-between p-2 bg-[#1C1F24] border border-[#262B33] text-xs"
                    >
                      <span className="font-medium text-[#E7E9EC]">{s.name}</span>
                      <span className="font-mono text-[10px] text-[#9298A2]">{s.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-5 border-t border-[#262B33] flex items-center justify-between text-[10px] font-mono text-[#9298A2] uppercase tracking-wider">
                <span>STATUS</span>
                <span className="text-[#8AA9FF] font-semibold">{cat.badge}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Part 2: Clearly Separated Areas Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="border border-[#262B33] bg-[#14161A] p-8 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#262B33]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8AA9FF]" />
              <h3 className="font-display font-semibold text-xl text-[#E7E9EC]">
                Currently Exploring
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8AA9FF] tracking-wider uppercase">
              Areas of Active Learning &amp; Interest
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#9298A2] leading-relaxed mb-6 max-w-3xl">
            These are emerging domains I am actively studying and experimenting with, framed as learning interests rather than claims of professional mastery:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploringAreas.map((area) => (
              <div
                key={area.title}
                className="border border-[#262B33] bg-[#1C1F24] p-4 hover:border-[#8AA9FF]/30 transition-colors"
              >
                <h4 className="font-display font-medium text-sm text-[#E7E9EC] mb-1.5">
                  {area.title}
                </h4>
                <p className="text-xs text-[#9298A2] leading-relaxed">
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
