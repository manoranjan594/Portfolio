import { motion, type Variants } from 'framer-motion';
import { Award, Calendar, Building2, ArrowUpRight } from 'lucide-react';

interface Milestone {
  title: string;
  type: 'Participation' | 'Appreciation' | 'Graded Certification';
  issuer: string;
  date?: string;
  grade?: string;
  details: string;
}

const milestones: Milestone[] = [
  {
    title: 'V-Hack 10 Intercollegiate Hackathon',
    type: 'Appreciation',
    issuer: 'Intercollegiate Hackathon Consortium',
    date: '2 November 2025',
    details: 'Certificate of Appreciation for active collaboration and problem-solving in an intercollegiate hackathon.',
  },
  {
    title: 'Web Development Certification',
    type: 'Graded Certification',
    issuer: 'Vishistaa Educational Association / Coding Pro',
    grade: 'Grade A+',
    details: 'Practical coursework certification covering semantic HTML, responsive CSS, and frontend fundamentals.',
  },
  {
    title: 'C Programming Certification',
    type: 'Graded Certification',
    issuer: 'Vishistaa Educational Association / Coding Pro',
    grade: 'Grade A',
    details: 'Structured programming certification in C covering control structures, memory management, and pointers.',
  },
  {
    title: 'AI Fundamentals: Language and Vision in AI',
    type: 'Graded Certification',
    issuer: 'IBM SkillsBuild',
    date: '14 October 2026',
    details: 'Foundational certification covering artificial intelligence concepts, natural language processing, and computer vision.',
  },
  {
    title: 'Code Quest 2.0 Coding Challenge',
    type: 'Participation',
    issuer: 'Department of CS&E, BIET',
    date: '30 October 2025',
    details: 'Certificate of Participation in department-level algorithmic problem-solving and coding competition.',
  },
  {
    title: 'Cipher Chase: Problem-Solving Digital Hunt',
    type: 'Participation',
    issuer: 'BIET',
    date: '26 September 2025',
    details: 'Computational logic and critical-thinking competition focusing on decryption challenges and puzzle solving.',
  },
  {
    title: 'Opticode 2.0 Optimization Contest',
    type: 'Participation',
    issuer: 'Technical Club of BIET',
    date: '1 April 2026',
    details: 'Certificate of Participation in college-wide coding competition centered on code optimization and problem analysis.',
  },
];

const badgeColors = {
  'Participation': 'border-[#262B33] bg-[#1C1F24] text-[#9298A2]',
  'Appreciation': 'border-[#8AA9FF]/30 bg-[#8AA9FF]/10 text-[#8AA9FF]',
  'Graded Certification': 'border-[#262B33] bg-[#14161A] text-[#E7E9EC]',
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-[#090A0C] border-t border-[#1C2026]">
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
            <span className="section-tag">Certifications &amp; Achievements</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#262B33]">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#E7E9EC] tracking-tight">
              Recognitions, certifications &amp; <br />
              <span className="text-[#8AA9FF] font-normal">verified milestones.</span>
            </h2>
            <p className="max-w-md text-sm text-[#9298A2] font-sans">
              A factual record of course certifications, hackathon appreciation, and competition participation throughout my computer science degree.
            </p>
          </div>
        </motion.div>

        {/* Timeline / Editorial List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4 mb-12"
        >
          {milestones.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="border border-[#262B33] bg-[#14161A] p-5 sm:p-6 hover:border-[#8AA9FF]/40 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-3 border-b border-[#1C2026]">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                      badgeColors[item.type]
                    }`}
                  >
                    {item.type}
                  </span>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-[#E7E9EC]">
                    {item.title}
                  </h3>
                </div>

                {item.grade && (
                  <span className="font-mono text-xs font-semibold text-[#8AA9FF] bg-[#8AA9FF]/10 px-2.5 py-0.5 border border-[#8AA9FF]/30 self-start md:self-auto">
                    {item.grade}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs text-[#9298A2]">
                <div className="md:col-span-4 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-[#8AA9FF] shrink-0" />
                  <span>{item.issuer}</span>
                </div>

                {item.date && (
                  <div className="md:col-span-3 flex items-center gap-2 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#9298A2] shrink-0" />
                    <span>{item.date}</span>
                  </div>
                )}

                <div className="md:col-span-5 text-[#9298A2] leading-relaxed">
                  {item.details}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Cloud learning note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-[#262B33] bg-[#14161A] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-[#8AA9FF]" />
              <h4 className="font-display font-medium text-base text-[#E7E9EC]">
                Google Cloud Learning Achievements
              </h4>
            </div>
            <p className="text-xs text-[#9298A2] max-w-2xl leading-relaxed">
              Additional completion records covering AI infrastructure, Speech and Language APIs, and Cloud Computing concepts are documented on my LinkedIn profile.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/manoranjan-at-16508735b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-4 py-2.5 border border-[#262B33] bg-[#1C1F24] text-[#E7E9EC] hover:border-[#8AA9FF]/60 hover:text-[#8AA9FF] transition-colors shrink-0"
          >
            <span>View on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8AA9FF]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
