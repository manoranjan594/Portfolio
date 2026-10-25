import { motion, type Variants } from 'framer-motion';
import { Target, Users, Trophy, Code2, ArrowUpRight } from 'lucide-react';

const goals = [
  {
    icon: <Target className="w-4 h-4" />,
    number: '01',
    title: 'Internship Opportunities',
    description: 'Seeking software development internships where I can contribute to production codebases and learn under experienced mentors.',
  },
  {
    icon: <Trophy className="w-4 h-4" />,
    number: '02',
    title: 'Hackathons & Innovation',
    description: 'Collaborating in intercollegiate hackathons to ideate and build practical prototypes within fast-paced multidisciplinary teams.',
  },
  {
    icon: <Users className="w-4 h-4" />,
    number: '03',
    title: 'Developer Peer Collaboration',
    description: 'Exchanging ideas, participating in technical discussions, and reviewing code with fellow students and open-source contributors.',
  },
  {
    icon: <Code2 className="w-4 h-4" />,
    number: '04',
    title: 'Practical Software Projects',
    description: 'Advancing beyond tutorial exercises to architect useful digital tools that address genuine everyday needs.',
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

export default function Goals() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF7F0] border-t border-[#DDD5C7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#C4A36B]" />
            <span className="section-label">[OP. 07 — DIRECTION &amp; OPPORTUNITIES]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DDD5C7]">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-[#292722] leading-tight">
              Open to learning, collaboration, <br className="hidden sm:block" />
              and new <em className="italic font-serif text-[#C4A36B]">challenges</em>.
            </h2>
            <p className="max-w-md text-sm text-[#77736B] font-sans">
              Currently in my 3rd semester of Computer Science &amp; Engineering, actively seeking meaningful learning environments to apply my growing skills.
            </p>
          </div>
        </motion.div>

        {/* 4-Item Architectural Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.title}
              variants={itemVariants}
              className="border border-[#DDD5C7] bg-[#FFFDF9] p-6 flex flex-col justify-between hover:border-[#C4A36B] transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DDD5C7]/70">
                  <div className="text-[#C4A36B] group-hover:text-[#292722] transition-colors">
                    {goal.icon}
                  </div>
                  <span className="font-mono text-xs text-[#8B857A]">
                    {goal.number}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-[#292722] mb-2 group-hover:text-[#C4A36B] transition-colors">
                  {goal.title}
                </h3>

                <p className="text-xs text-[#77736B] leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#DDD5C7]/50 flex items-center justify-between text-[10px] font-mono text-[#8B857A] uppercase">
                <span>INTENT</span>
                <span className="text-[#A77A52]">ACTIVE TARGET</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Invitation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-[#DDD5C7] bg-[#F0E9DC]/60 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-serif text-2xl text-[#292722] mb-1">
              Have a project or opportunity?
            </h4>
            <p className="text-xs sm:text-sm text-[#77736B]">
              I welcome conversations about internship roles, hackathons, and creative software collaborations.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#292722] text-[#FAF7F0] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#C4A36B] transition-colors shrink-0"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C4A36B]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
