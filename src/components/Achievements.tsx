import { motion, type Variants } from 'framer-motion';
import { Calendar, Building2, ArrowUpRight } from 'lucide-react';
import { Linkedin } from './Icons';

interface Milestone {
  title: string;
  category: 'Hackathon' | 'Certification' | 'Department Competition';
  issuer: string;
  date?: string;
  grade?: string;
  details: string;
}

const milestones: Milestone[] = [
  {
    title: 'AI Fundamentals: Language and Vision in AI',
    category: 'Certification',
    issuer: 'IBM SkillsBuild',
    date: '14 October 2026',
    details: 'Industry credential covering artificial intelligence foundations, natural language processing (NLP), and computer vision applications.',
  },
  {
    title: 'V-Hack 10 Intercollegiate Hackathon',
    category: 'Hackathon',
    issuer: 'Intercollegiate Hackathon Consortium',
    date: '2 November 2025',
    details: 'Certificate of Appreciation for active collaboration, software ideation, and problem-solving in a fast-paced team environment.',
  },
  {
    title: 'Web Development Practical Certification',
    category: 'Certification',
    issuer: 'Vishistaa Educational Association / Coding Pro',
    grade: 'Grade A+',
    details: 'Hands-on practical training covering semantic HTML5 structure, responsive CSS3 styling, and foundational web standards.',
  },
  {
    title: 'C Programming Practical Certification',
    category: 'Certification',
    issuer: 'Vishistaa Educational Association / Coding Pro',
    grade: 'Grade A',
    details: 'Structured programming coursework covering control logic, memory allocation, arrays, and pointer manipulation.',
  },
  {
    title: 'Code Quest 2.0 Coding Challenge',
    category: 'Department Competition',
    issuer: 'Department of CS&E, BIET',
    date: '30 October 2025',
    details: 'Certificate of Participation in department-level timed algorithmic challenge testing problem-solving and coding speed.',
  },
  {
    title: 'Cipher Chase: Computational Logic Hunt',
    category: 'Department Competition',
    issuer: 'BIET',
    date: '26 September 2025',
    details: 'Computational logic and analytical thinking competition focusing on cipher decoding and structured puzzle solving.',
  },
  {
    title: 'Opticode 2.0 Optimization Contest',
    category: 'Department Competition',
    issuer: 'Technical Club of BIET',
    date: '1 April 2026',
    details: 'Certificate of Participation in college-wide coding competition centered on code efficiency, logic refinement, and edge-case handling.',
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

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 lg:py-36 bg-[#0B1712] text-[#F8F7F2] border-t border-white/10 relative overflow-hidden scroll-mt-20">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#174D38]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#C7A66A]/10 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="w-2 h-2 rounded-full bg-[#C7A66A]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#C7A66A] font-bold">
              04 / Verified Credentials &amp; Contests
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F8F7F2] tracking-tight leading-[1.08]">
                Milestones &amp; Proof. <br />
                <span className="font-normal text-[#A8B4AA]">Verified certifications &amp; hackathons.</span>
              </h2>
              <p className="mt-3 text-base text-[#A8B4AA] max-w-2xl font-sans">
                A verified record of certifications, industry credentials, and intercollegiate coding competitions completed throughout my studies.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/manoranjan-at-16508735b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#102A1F] border border-white/15 hover:border-[#C7A66A] hover:bg-[#174D38] text-xs font-sans font-semibold uppercase tracking-wider text-[#F8F7F2] transition-colors shadow-xs"
            >
              <Linkedin className="w-4 h-4 text-[#C7A66A]" />
              <span>Verify on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A66A]" />
            </a>
          </div>
        </motion.div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              custom={index}
              className="rounded-3xl bg-[#102A1F]/90 backdrop-blur-xs border border-white/10 p-8 shadow-lg hover:border-[#C7A66A]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#174D38] text-[#D5F2A3] border border-[#D5F2A3]/20 font-bold font-sans">
                    {item.category}
                  </span>
                  {item.grade ? (
                    <span className="text-xs text-[#0B1712] font-black font-sans flex items-center gap-1 bg-[#C7A66A] px-2.5 py-0.5 rounded-full">
                      ★ {item.grade}
                    </span>
                  ) : (
                    <span className="text-xs text-[#C7A66A] font-bold font-mono">
                      0{index + 1}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#F8F7F2] mb-3 group-hover:text-[#D5F2A3] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Details */}
                <p className="text-sm text-[#A8B4AA] leading-relaxed font-sans mb-6">
                  {item.details}
                </p>
              </div>

              {/* Issuer & Date Footer */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-sans text-[#A8B4AA]">
                <div className="flex items-center gap-2 text-[#F8F7F2] font-medium">
                  <Building2 className="w-4 h-4 text-[#C7A66A]" />
                  <span className="truncate">{item.issuer}</span>
                </div>
                {item.date && (
                  <div className="flex items-center gap-2 text-[#A8B4AA]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
