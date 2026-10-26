import { motion, type Variants } from 'framer-motion';
import { Layers, Terminal, Compass, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface JourneyStep {
  number: string;
  title: string;
  phase: string;
  description: string;
  focusAreas: string[];
  icon: typeof Terminal;
  status: 'In Active Practice' | 'Ongoing Exploration';
}

const journeySteps: JourneyStep[] = [
  {
    number: '01',
    title: 'Learn the Fundamentals',
    phase: 'Core Computer Science',
    description:
      'Grounded in foundational systems programming. Exploring manual memory management, pointer arithmetic, and multidimensional arrays in C, paired with object-oriented encapsulation and inheritance in Java.',
    focusAreas: ['Memory Management & Pointers', 'Array & Matrix Algorithms', 'Object-Oriented Programming (Java)'],
    icon: Terminal,
    status: 'In Active Practice',
  },
  {
    number: '02',
    title: 'Build Practical Projects',
    phase: 'Applied Software Engineering',
    description:
      'Translating theory into functioning applications. Constructing full-stack web platforms with Python (Flask) REST backends, MongoDB persistence, and responsive, accessible interfaces using semantic HTML5 and CSS3.',
    focusAreas: ['Flask REST APIs & Routing', 'MongoDB Schemas & Collections', 'Responsive Semantic Web Interfaces'],
    icon: Layers,
    status: 'In Active Practice',
  },
  {
    number: '03',
    title: 'Practice Problem-Solving & Debugging',
    phase: 'Algorithmic Discipline',
    description:
      'Participating in intercollegiate hackathons (V-Hack 10) and department-level coding contests. Developing a methodical mindset for tracing execution flow, isolating edge cases, and optimizing efficiency.',
    focusAreas: ['Systematic Code Debugging', 'Time-Constrained Hackathons', 'Logic Decomposition & Edge Cases'],
    icon: Compass,
    status: 'In Active Practice',
  },
  {
    number: '04',
    title: 'Explore New Technologies',
    phase: 'Frontier Curiosity',
    description:
      'Expanding perspective beyond university coursework. Certified in AI Fundamentals by IBM SkillsBuild, and actively investigating prompt orchestration, agentic tool-calling workflows, and modern interactive 3D web graphics.',
    focusAreas: ['AI Foundations (Language & Vision)', 'Autonomous Agent Workflows', 'Three.js & WebGL Interactive Graphics'],
    icon: Cpu,
    status: 'Ongoing Exploration',
  },
  {
    number: '05',
    title: 'Improve Through Feedback & Experimentation',
    phase: 'Continuous Refinement',
    description:
      'Treating software development as a craft of continual iteration. Refining code architecture, accepting peer feedback, studying industry standards, and working toward eventually building meaningful digital products.',
    focusAreas: ['Code Review & Refactoring', 'Clean Architecture Principles', 'User Experience & Visual Craft'],
    icon: Sparkles,
    status: 'Ongoing Exploration',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

export default function Journey() {
  return (
    <section id="learning-journey" className="py-28 lg:py-36 bg-[#F8F7F2] text-[#252923] border-t border-[#E5E7DF] relative overflow-hidden scroll-mt-20">
      <span id="journey" className="sr-only" aria-hidden="true" />
      {/* Subtle Ambient Accent */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#D5F2A3]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
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
              05 / Learning Journey
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E7DF]">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#174D38] tracking-tight leading-[1.08]">
                Continuous Evolution. <br />
                <span className="font-normal text-[#657067]">An honest engineering progression.</span>
              </h2>
              <p className="mt-3 text-base text-[#474E40] max-w-2xl font-sans leading-relaxed">
                Software development is an evolving journey of practical problem-solving. Here is how I structure my ongoing learning, from computer science fundamentals to emerging technologies.
              </p>
            </div>

            <div className="text-xs font-sans text-[#657067] flex items-center gap-2 bg-[#FFFFFF] px-4 py-2 rounded-full border border-[#E5E7DF] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#174D38] animate-pulse" />
              <span className="font-semibold text-[#174D38]">Stage 03 / Active Practice</span>
            </div>
          </div>
        </motion.div>

        {/* Stepped Architectural Pathway Grid */}
        <div className="relative">
          {/* Vertical Architectural Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#174D38] via-[#C7A66A] to-[#174D38]/20 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-10 lg:space-y-12">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={index}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left / Right Card Container */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:text-right lg:pr-8' : 'lg:col-start-8 lg:text-left lg:pl-8'
                    }`}
                  >
                    <div className="bg-[#FFFFFF] border border-[#E5E7DF] rounded-3xl p-7 sm:p-8 soft-card-shadow soft-hover-shadow transition-all duration-300">
                      {/* Step Header */}
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#174D38] text-[#F8F7F2]">
                          Step {step.number}
                        </span>
                        <span className="font-sans text-xs text-[#C7A66A] font-semibold uppercase tracking-wider">
                          {step.phase}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#174D38] mb-3">
                        {step.title}
                      </h3>

                      <p className="font-sans text-sm text-[#474E40] leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Focus Pills */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        {step.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F3EB] border border-[#E5E7DF] text-xs font-sans text-[#174D38] font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#174D38]" />
                            <span>{area}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Gyroscopic Node on Desktop */}
                  <div className="hidden lg:flex lg:col-span-2 justify-center items-center relative z-20">
                    <div className="w-12 h-12 rounded-full bg-[#174D38] text-[#F8F7F2] border-4 border-[#F8F7F2] shadow-md flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#D5F2A3]" />
                    </div>
                  </div>

                  {/* Empty Spacing Column for Desktop Alignment */}
                  <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:col-start-8' : 'lg:col-start-1'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
