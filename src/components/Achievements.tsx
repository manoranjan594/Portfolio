import { motion, type Variants } from 'framer-motion';
import { Calendar, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface CertificateEntry {
  title: string;
  category: 'Participation' | 'Appreciation' | 'Graded Certification';
  issuer: string;
  date?: string;
  grade?: string;
  description: string;
}

const certificates: CertificateEntry[] = [
  {
    title: 'V-Hack 10 Intercollegiate Hackathon',
    category: 'Appreciation',
    issuer: 'Intercollegiate Hackathon Consortium',
    date: '2 November 2025',
    description: 'Certificate of Appreciation for active participation and project collaboration in an intensive intercollegiate hackathon.',
  },
  {
    title: 'Web Development Certification',
    category: 'Graded Certification',
    issuer: 'Vishistaa Educational Association / Coding Pro',
    grade: 'Grade A+',
    description: 'Comprehensive course certification covering semantic HTML, CSS styling, responsive principles, and web foundations with highest distinction.',
  },
  {
    title: 'C Programming Certification',
    category: 'Graded Certification',
    issuer: 'Vishistaa Educational Association / Coding Pro',
    grade: 'Grade A',
    description: 'Structured programming certification in C language fundamentals, memory concepts, control structures, and pointers.',
  },
  {
    title: 'AI Fundamentals: Language and Vision in AI',
    category: 'Graded Certification',
    issuer: 'IBM SkillsBuild',
    date: '14 October 2026',
    description: 'Fundamental credential in core artificial intelligence principles, computer vision concepts, and natural language processing basics.',
  },
  {
    title: 'Code Quest 2.0',
    category: 'Participation',
    issuer: 'Department of Computer Science & Engineering, BIET',
    date: '30 October 2025',
    description: 'Certificate of Participation in department-level coding competition emphasizing timed problem-solving and algorithmic debugging.',
  },
  {
    title: 'Cipher Chase: Problem-Solving Treasure Hunt',
    category: 'Participation',
    issuer: 'BIET',
    date: '26 September 2025',
    description: 'Digital problem-solving and critical-thinking competition based on computational puzzles and logic decryption.',
  },
  {
    title: 'Opticode 2.0',
    category: 'Participation',
    issuer: 'Technical Club of BIET',
    date: '1 April 2026',
    description: 'Certificate of Participation in college-wide coding challenge centered on code optimization and clean execution.',
  },
];

const categoryBadgeStyles = {
  'Participation': 'border-[#DDD5C7] bg-[#F0E9DC]/60 text-[#8B857A]',
  'Appreciation': 'border-[#C4A36B]/60 bg-[#C4A36B]/10 text-[#A77A52]',
  'Graded Certification': 'border-[#292722]/30 bg-[#292722] text-[#FAF7F0]',
};

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
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-36 bg-[#FFFDF9] border-t border-[#DDD5C7]">
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
            <span className="section-label">[OP. 06 — VERIFIED MILESTONES]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DDD5C7]">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-[#292722] leading-tight">
              Certifications &amp; <br className="hidden sm:block" />
              <em className="italic font-serif text-[#C4A36B]">academic</em> recognitions.
            </h2>
            <p className="max-w-md text-sm text-[#77736B] font-sans">
              A truthful record of event participation, course grades, and institutional certificates earned throughout my computer science degree.
            </p>
          </div>
        </motion.div>

        {/* Certificates Architectural Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {certificates.map((cert) => (
            <motion.article
              key={cert.title}
              variants={itemVariants}
              className="border border-[#DDD5C7] bg-[#FAF7F0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#C4A36B] transition-colors duration-300 group"
            >
              <div>
                {/* Header: Category Badge + Grade */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#DDD5C7]/70">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                      categoryBadgeStyles[cert.category]
                    }`}
                  >
                    {cert.category}
                  </span>

                  {cert.grade && (
                    <span className="font-mono text-xs font-semibold text-[#C4A36B] bg-[#C4A36B]/10 px-2 py-0.5 border border-[#C4A36B]/30">
                      {cert.grade}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg text-[#292722] leading-snug mb-3 group-hover:text-[#C4A36B] transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 text-xs text-[#8B857A] mb-2 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-[#C4A36B] shrink-0" />
                  <span className="truncate">{cert.issuer}</span>
                </div>

                {/* Date if available */}
                {cert.date && (
                  <div className="flex items-center gap-2 text-xs text-[#8B857A] mb-3 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#A77A52] shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                )}

                {/* Context Description */}
                <p className="text-xs text-[#77736B] leading-relaxed pt-2 border-t border-[#DDD5C7]/40">
                  {cert.description}
                </p>
              </div>

              {/* Status Mark */}
              <div className="pt-4 mt-6 border-t border-[#DDD5C7]/60 flex items-center justify-between text-[10px] font-mono text-[#8B857A] uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>RECORD VERIFIED</span>
                </span>
                <span>BIET CSE</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Note Regarding Google Cloud & Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-[#DDD5C7] bg-[#F0E9DC]/40 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A36B] block mb-1">
              ADDITIONAL CREDENTIALS
            </span>
            <p className="text-sm text-[#292722] font-medium mb-1">
              Google Cloud Computing &amp; Generative AI Learning Records
            </p>
            <p className="text-xs text-[#77736B] leading-relaxed">
              Additional completion records covering AI infrastructure, Speech &amp; Language APIs, and Gemini Enterprise development are documented on my verified LinkedIn profile.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/manoranjan-at-16508735b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] px-5 py-3 border border-[#292722] bg-[#FFFDF9] text-[#292722] hover:bg-[#292722] hover:text-[#FAF7F0] transition-colors shrink-0"
          >
            <span>View LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C4A36B]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
