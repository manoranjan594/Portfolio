import { motion, type Variants } from "framer-motion";
import { Terminal, Layers, Compass, Code2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.08,
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[#090A0C] border-t border-[#1C2026]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-14 lg:mb-18"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8AA9FF]" />
            <span className="section-tag">About Me</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#262B33]">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#E7E9EC] tracking-tight">
              Engineering with curiosity. <br />
              <span className="text-[#8AA9FF] font-normal">Growing through practical challenges.</span>
            </h2>
            <div className="font-mono text-xs text-[#9298A2] tracking-wider uppercase border-l border-[#262B33] pl-6 hidden lg:block">
              Bapuji Institute of Engineering &amp; Technology
            </div>
          </div>
        </motion.div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Authentic Narrative */}
          <motion.div
            className="lg:col-span-7 space-y-5 text-[#9298A2] text-base leading-relaxed font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp} custom={1} className="text-lg sm:text-xl font-display text-[#E7E9EC] font-medium leading-snug">
              I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at Bapuji Institute of Engineering and Technology (BIET), Davangere, Karnataka.
            </motion.p>

            <motion.p variants={fadeUp} custom={2}>
              My academic journey is anchored in hands-on learning: understanding core technical concepts and immediately putting them into practice. Rather than memorizing syntax, I focus on debugging real code, understanding algorithmic tradeoffs, and breaking complex problems down into step-by-step logic.
            </motion.p>

            <motion.p variants={fadeUp} custom={3}>
              I actively write code in <strong className="text-[#E7E9EC] font-medium">Python, C, and Java</strong>, while designing responsive web interfaces with <strong className="text-[#E7E9EC] font-medium">HTML and CSS</strong>. Building personal projects and practical coding exercises helps me solidify my engineering mindset.
            </motion.p>

            <motion.p variants={fadeUp} custom={4}>
              Beyond programming, I bring a keen visual eye through interests in <strong className="text-[#E7E9EC] font-medium">videography, poster design, and visual content creation</strong>. This creative discipline trains me to appreciate layout balance, pacing, and visual hierarchy—qualities essential for building modern digital products.
            </motion.p>

            <motion.div variants={fadeUp} custom={5} className="pt-2 flex items-center gap-3 text-xs font-mono text-[#8AA9FF] tracking-wider uppercase">
              <span className="w-6 h-px bg-[#8AA9FF]" />
              <span>Goal: Software development growth · Hackathons · Impactful projects</span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Structured Technical Profile */}
          <motion.div
            className="lg:col-span-5 border border-[#262B33] bg-[#14161A] p-7 sm:p-9 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={2}
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#262B33]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8AA9FF]">
                Academic Dossier
              </span>
              <span className="font-mono text-[10px] text-[#9298A2] uppercase">
                3rd Semester
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#9298A2] block">DEGREE</span>
                <h3 className="font-display font-semibold text-lg text-[#E7E9EC]">
                  Bachelor of Engineering (B.E.)
                </h3>
                <p className="text-xs text-[#8AA9FF]">Computer Science and Engineering</p>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#9298A2] block">INSTITUTION</span>
                <p className="text-sm text-[#E7E9EC] font-medium">
                  Bapuji Institute of Engineering &amp; Technology
                </p>
                <p className="text-xs text-[#9298A2]">Davangere, Karnataka, India</p>
              </div>
            </div>

            {/* Core Competency Highlights */}
            <div className="space-y-3 pt-5 border-t border-[#262B33]">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#9298A2] block">
                Practice Disciplines
              </span>

              <div className="flex items-start gap-3 text-xs">
                <Terminal className="w-4 h-4 text-[#8AA9FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#E7E9EC]">Programming Fundamentals:</span>
                  <span className="text-[#9298A2] ml-1">Structured algorithmic code in Python, C, and Java.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Layers className="w-4 h-4 text-[#8AA9FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#E7E9EC]">Web Engineering:</span>
                  <span className="text-[#9298A2] ml-1">Semantic HTML, modern CSS layouts, responsive design.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Code2 className="w-4 h-4 text-[#8AA9FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#E7E9EC]">Problem Solving:</span>
                  <span className="text-[#9298A2] ml-1">Debugging practice and breaking complex logic into clean steps.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Compass className="w-4 h-4 text-[#8AA9FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#E7E9EC]">Creative Direction:</span>
                  <span className="text-[#9298A2] ml-1">Videography, poster design, and visual storytelling.</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
