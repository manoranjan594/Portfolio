import { motion, type Variants } from "framer-motion";
import { Compass, Layers, Terminal } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.1,
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-36 bg-[#FAF7F0] border-t border-[#DDD5C7]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header & Architectural Catalog Tag */}
        <motion.div
          className="mb-14 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#C4A36B]" />
            <span className="section-label">[OP. 02 — PROFILE &amp; PHILOSOPHY]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <h2 className="lg:col-span-8 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-[#292722]">
              Learning through <em className="italic font-serif text-[#C4A36B]">deliberate</em> practice. <br />
              Growing through real challenges.
            </h2>
            <div className="lg:col-span-4 font-mono text-xs text-[#8B857A] tracking-wider uppercase border-l border-[#DDD5C7] pl-6 hidden lg:block">
              ENGINEERING FOUNDATIONS × CREATIVE INQUIRY
            </div>
          </div>
        </motion.div>

        {/* Editorial Layout: Two Columns with Hairline Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Authentic Biography */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-[#292722]/85 text-base sm:text-lg leading-relaxed font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp} custom={1} className="text-xl sm:text-2xl font-serif text-[#292722] leading-snug">
              I am a Computer Science student developing my programming and web development skills through practical projects. I enjoy exploring how software, design, and emerging AI technologies can come together to create useful digital experiences.
            </motion.p>

            <motion.p variants={fadeUp} custom={2} className="text-[#77736B]">
              Currently pursuing a Bachelor of Engineering in Computer Science and Engineering at Bapuji Institute of Engineering and Technology (BIET) in Davangere, Karnataka. My academic focus centers on hands-on understanding: dissecting technical concepts and putting them into practice rather than relying on abstract theory alone.
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="text-[#77736B]">
              I enjoy solving algorithmic problems, debugging code step-by-step, and breaking complex challenges into clean, manageable components. Building personal websites and coding exercises gives me the practical foundation needed to think like a professional software developer.
            </motion.p>

            <motion.p variants={fadeUp} custom={4} className="text-[#77736B]">
              Beyond code, I have a deep creative interest in <strong className="text-[#292722] font-medium">videography, poster design, and visual content creation</strong>. This creative discipline sharpens my eye for composition, pacing, and hierarchy—qualities that directly influence how I build digital interfaces.
            </motion.p>

            <motion.div variants={fadeUp} custom={5} className="pt-4 flex items-center gap-4 text-xs font-mono text-[#8B857A] tracking-widest uppercase">
              <span className="w-8 h-px bg-[#C4A36B]" />
              <span>GOAL: Meaningful software · Hackathons · Continuous growth</span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Academic & Practice Ledger */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={2}
          >
            <div className="border border-[#DDD5C7] bg-[#FFFDF9] p-8 sm:p-10 shadow-[0_4px_20px_rgba(41,39,34,0.02)]">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDD5C7]">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A36B]">
                  [SPECIFICATION // ACADEMIC]
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C4A36B]" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8B857A]">ACTIVE</span>
                </div>
              </div>

              {/* Institution & Degree */}
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B857A] block">PROGRAM</span>
                  <h3 className="font-serif text-xl text-[#292722]">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-sm text-[#A77A52] font-medium">Computer Science &amp; Engineering</p>
                </div>

                <div className="pt-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B857A] block">INSTITUTION</span>
                  <p className="text-sm text-[#292722] font-medium">
                    Bapuji Institute of Engineering and Technology (BIET)
                  </p>
                  <p className="text-xs text-[#8B857A]">Davangere, Karnataka, India</p>
                </div>

                <div className="pt-2 flex items-center justify-between font-mono text-xs border-t border-[#DDD5C7]/60 pt-3">
                  <span className="text-[#8B857A]">PROGRESS</span>
                  <span className="text-[#292722] font-semibold bg-[#F0E9DC] px-2.5 py-0.5 rounded">
                    3rd Semester
                  </span>
                </div>
              </div>

              {/* Core Tenets Checklist */}
              <div className="space-y-3 pt-4 border-t border-[#DDD5C7]">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8B857A] block mb-3">
                  PRACTICE AREAS
                </span>
                
                <div className="flex items-start gap-3 text-xs">
                  <Terminal className="w-4 h-4 text-[#C4A36B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#292722]">Algorithmic Practice:</span>
                    <span className="text-[#77736B] ml-1">Python, C, and Java programming exercises.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Layers className="w-4 h-4 text-[#C4A36B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#292722]">Interface Architecture:</span>
                    <span className="text-[#77736B] ml-1">Semantic HTML, modern CSS, responsive web layouts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Compass className="w-4 h-4 text-[#C4A36B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#292722]">Creative Direction:</span>
                    <span className="text-[#77736B] ml-1">Videography, poster design, and visual storytelling.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
