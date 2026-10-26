import { motion, type Variants } from 'framer-motion';
import { MapPin, Code2, GraduationCap, Sparkles, ArrowDown } from 'lucide-react';

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

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 bg-[#F8F7F2] text-[#252923] border-t border-[#E5E7DF] scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#174D38]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#174D38] font-bold">
              01 / Background &amp; Philosophy
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E7DF]">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#174D38] tracking-tight leading-[1.08]">
                Turning Ideas into <br />
                <span className="font-normal text-[#555A50]">Digital Experiences.</span>
              </h2>
              <p className="mt-2 text-sm text-[#555A50] font-sans font-medium">
                Grounded in software fundamentals. Curious by design.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#555A50] tracking-wide border-l border-[#E5E7DF] pl-6 hidden lg:flex font-sans font-medium">
              <MapPin className="w-4 h-4 text-[#174D38]" />
              <span>BIET Davangere, Karnataka, India</span>
            </div>
          </div>
        </motion.div>

        {/* Editorial Two-Column Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Authentic Narrative & Vision (Cols 1-7) */}
          <motion.div
            className="lg:col-span-7 space-y-7 text-[#474E40] text-base sm:text-lg leading-relaxed font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-xl sm:text-2xl font-display text-[#252923] font-semibold leading-snug"
            >
              I am a technology enthusiast pursuing Computer Science and Engineering at Bapuji Institute of Engineering and Technology (BIET), Davangere, dedicated to building reliable software systems and exploring modern computational architectures.
            </motion.p>

            {/* Technology Interests & Vision Feature Card */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E7DF] soft-card-shadow space-y-4"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C7A66A]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#174D38] font-bold">
                  Technology Interests &amp; Vision
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#174D38] tracking-tight leading-snug">
                Exploring the intersection of software engineering, artificial intelligence, and intelligent systems.
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#474E40] leading-relaxed">
                Passionate about learning how modern technologies work, developing practical software projects, and exploring the possibilities of AI, machine learning, and autonomous agents. Focused on strengthening technical foundations, experimenting with new ideas, and turning concepts into useful digital experiences.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Systems & Memory in C',
                  'Object-Oriented Programming (Java)',
                  'Python & REST Backends',
                  'Machine Learning Foundations',
                  'Intelligent AI Agents',
                  'Interactive Web Interfaces',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#F1F3EB] border border-[#E5E7DF] text-xs font-sans font-medium text-[#174D38]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeUp} custom={3}>
              My foundation is built on practical experimentation. Rather than treating programming solely as abstract coursework, I build real programs—investigating memory allocation, matrix manipulation, and pointer arithmetic in <strong className="text-[#252923] font-semibold">C</strong>, object-oriented encapsulation and inheritance in <strong className="text-[#252923] font-semibold">Java</strong>, and rapid backend logic and API services in <strong className="text-[#252923] font-semibold">Python</strong>.
            </motion.p>

            <motion.p variants={fadeUp} custom={4}>
              In web development, I construct responsive, accessible digital applications with <strong className="text-[#252923] font-semibold">HTML5 and CSS3</strong>. I rely on <strong className="text-[#174D38] font-semibold">HTML5</strong> as a semantic markup language to provide structure, meaning, and accessible document outlines, and <strong className="text-[#174D38] font-semibold">CSS3</strong> as a style sheet language to control visual styling, typography, spacing, Flexbox, CSS Grid, and responsive media-query layouts.
            </motion.p>

            <motion.p variants={fadeUp} custom={5}>
              Beyond computer science coursework, I bring a keen visual sensibility cultivated through <strong className="text-[#174D38] font-semibold">videography, poster design, and visual content creation</strong>. This creative discipline trains me in pacing, spatial contrast, color harmony, and visual rhythm—principles that directly elevate how I design intuitive software user experiences.
            </motion.p>

            {/* Philosophy Callout Quote */}
            <motion.div
              variants={fadeUp}
              custom={6}
              className="p-6 rounded-2xl bg-[#F1F3EB] border-l-4 border-[#174D38] text-sm text-[#252923] font-sans leading-relaxed"
            >
              <span className="font-bold block mb-1 text-xs uppercase tracking-wider text-[#174D38]">
                Engineering Ethos
              </span>
              &ldquo;Understand systems from foundational memory and control flow up to user interfaces. Prioritize clean, reliable code over unneeded complexity.&rdquo;
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Parchment Profile Card (Cols 8-12) */}
          <motion.div
            className="lg:col-span-5 rounded-3xl bg-[#FFFFFF] border border-[#E5E7DF] p-8 sm:p-10 soft-card-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={2}
          >
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E7DF]">
              <span className="font-display font-bold text-lg text-[#174D38]">
                Academic Profile
              </span>
              <span className="font-sans text-xs text-[#174D38] uppercase px-3 py-1 bg-[#D5F2A3] rounded-full border border-[#174D38]/15 font-bold">
                3rd Semester
              </span>
            </div>

            {/* Structured Rows */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F1F3EB] text-[#174D38] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#74796F] block uppercase tracking-wider font-semibold">
                    Degree Program
                  </span>
                  <span className="text-sm text-[#252923] font-bold">
                    B.E. Computer Science and Engineering
                  </span>
                  <span className="text-xs text-[#74796F] block mt-0.5">
                    BIET Davangere (Affiliated to VTU)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F1F3EB] text-[#174D38] shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#74796F] block uppercase tracking-wider font-semibold">
                    Core Languages &amp; Web Standards
                  </span>
                  <span className="text-sm text-[#252923] font-semibold">
                    Python, C Systems, Java, HTML5, CSS3, Git
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#F1F3EB] text-[#174D38] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#74796F] block uppercase tracking-wider font-semibold">
                    Creative Disciplines
                  </span>
                  <span className="text-sm text-[#252923] font-semibold">
                    Videography, Poster Design, Visual Composition
                  </span>
                </div>
              </div>
            </div>

            {/* Jump to projects pill */}
            <div className="pt-6 border-t border-[#E5E7DF]">
              <a
                href="#projects"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#174D38] hover:bg-[#123D2C] text-[#F8F7F2] py-3.5 px-5 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>View Real Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
