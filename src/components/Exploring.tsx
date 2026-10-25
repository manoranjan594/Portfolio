import { motion, type Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const exploringTopics = [
  {
    title: 'Full-Stack Development',
    note: 'Bridging responsive frontend interfaces with robust backend architectures.',
  },
  {
    title: 'Artificial Intelligence & ML',
    note: 'Grasping foundational algorithms, neural concepts, and model evaluation.',
  },
  {
    title: 'AI Agent Development',
    note: 'Exploring autonomous tool-use, workflow chaining, and structured reasoning.',
  },
  {
    title: 'Hackathons & Innovation',
    note: 'Testing ideas under fast collaborative constraints to solve real-world needs.',
  },
  {
    title: 'Practical Software Products',
    note: 'Building utility-driven digital tools that deliver genuine everyday value.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

export default function Exploring() {
  return (
    <section id="exploring" className="py-24 lg:py-32 bg-[#FAF7F0] border-t border-[#DDD5C7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#C4A36B]" />
            <span className="section-label">[OP. 04 — RESEARCH TRAJECTORY]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <h2 className="lg:col-span-7 font-serif text-[clamp(2rem,4vw,3.25rem)] text-[#292722] leading-tight">
              What I&rsquo;m <em className="italic font-serif text-[#C4A36B]">exploring</em> next.
            </h2>
            <p className="lg:col-span-5 text-sm text-[#77736B] leading-relaxed">
              These represent active areas of learning, experimentation, and curiosity—clearly distinguished from established production experience.
            </p>
          </div>
        </motion.div>

        {/* Editorial Statement Panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="border border-[#DDD5C7] bg-[#FFFDF9] p-8 sm:p-12 mb-12 shadow-[0_4px_24px_rgba(41,39,34,0.02)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none select-none font-serif text-8xl text-[#C4A36B]">
            &ldquo;
          </div>
          
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A36B] block mb-3">
              RESEARCH STATEMENT
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#292722] leading-snug">
              &ldquo;I&rsquo;m continuously learning, experimenting with new technologies, and working toward building useful digital products that address real-world needs.&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* Exploration Matrix Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {exploringTopics.map((topic, i) => (
            <motion.div
              key={topic.title}
              variants={itemVariants}
              className="border border-[#DDD5C7] bg-[#F0E9DC]/40 p-6 hover:bg-[#FFFDF9] hover:border-[#C4A36B] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-[#C4A36B] tracking-widest uppercase">
                  FOCUS 0{i + 1}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#C4A36B] opacity-70 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-serif text-lg text-[#292722] mb-2 group-hover:text-[#C4A36B] transition-colors">
                {topic.title}
              </h3>
              <p className="text-xs text-[#77736B] leading-relaxed">
                {topic.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
