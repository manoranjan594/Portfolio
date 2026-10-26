import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check, Send, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const EMAIL_ADDRESS = 'manoranjanat527@gmail.com';
const GITHUB_URL = 'https://github.com/manoranjan594';
const LINKEDIN_URL = 'https://www.linkedin.com/in/manoranjan-at-16508735b/';

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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setValidationError('Please complete your name, email, and message.');
      return;
    }

    setValidationError('');
    setSubmitted(true);

    const subjectLine = encodeURIComponent(
      formState.subject.trim() || `Portfolio Inquiry from ${formState.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    // Launch system email client directly
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subjectLine}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[#0B1712] text-[#F8F7F2] border-t border-white/10 relative overflow-hidden scroll-mt-20">
      {/* Ambient lighting accents */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#174D38]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[380px] h-[380px] bg-[#C7A66A]/10 rounded-full blur-[130px] pointer-events-none" />

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
              06 / Direct Communication
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F8F7F2] tracking-tight leading-[1.08]">
                Let&apos;s Build Something <br />
                <span className="font-normal text-[#A8B4AA]">Meaningful &amp; Impactful.</span>
              </h2>
              <p className="mt-3 text-base text-[#A8B4AA] max-w-2xl font-sans">
                Open to software development internship opportunities, hackathon collaborations, open-source projects, and technical dialogues.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#A8B4AA] tracking-wide border-l border-white/10 pl-6 hidden lg:flex font-sans font-medium">
              <MapPin className="w-4 h-4 text-[#C7A66A]" />
              <span>Davangere, Karnataka, India</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Grid: Direct Cards (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Status (Cols 1-5) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="rounded-3xl bg-[#102A1F]/90 backdrop-blur-xs border border-white/10 p-8 space-y-5 shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-[#A8B4AA] font-bold flex items-center gap-2 font-sans">
                  <Mail className="w-4 h-4 text-[#C7A66A]" />
                  <span>Primary Inbox</span>
                </span>
                <span className="text-[10px] text-[#0B1712] bg-[#C7A66A] px-3 py-0.5 rounded-full font-black uppercase">
                  Direct Response
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#A8B4AA] block font-sans">Email Address:</span>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="font-sans text-sm xs:text-base sm:text-lg text-[#F8F7F2] hover:text-[#D5F2A3] transition-colors font-semibold tracking-tight block whitespace-nowrap overflow-hidden text-ellipsis"
                  title={EMAIL_ADDRESS}
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1712] border border-white/15 hover:bg-[#174D38] text-xs font-semibold uppercase tracking-wider text-[#F8F7F2] transition-colors font-sans shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D5F2A3]" />
                      <span className="text-[#D5F2A3] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A8B4AA]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=Software%20Opportunity%20Inquiry`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C7A66A] hover:bg-[#d8b97d] text-xs font-bold uppercase tracking-wider text-[#0B1712] transition-colors font-sans shadow-sm"
                >
                  <span>Launch Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-[#102A1F]/90 border border-white/10 hover:border-[#C7A66A] hover:bg-[#174D38] transition-all shadow-md group flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-full bg-[#0B1712] text-[#C7A66A] group-hover:bg-[#102A1F] transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-[#F8F7F2] block group-hover:text-[#D5F2A3] transition-colors">
                      GitHub
                    </span>
                    <span className="text-xs text-[#A8B4AA] font-sans">
                      @manoranjan594
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A8B4AA] group-hover:text-[#C7A66A] transition-colors" />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-[#102A1F]/90 border border-white/10 hover:border-[#C7A66A] hover:bg-[#174D38] transition-all shadow-md group flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-full bg-[#0B1712] text-[#C7A66A] group-hover:bg-[#102A1F] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-[#F8F7F2] block group-hover:text-[#D5F2A3] transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-xs text-[#A8B4AA] font-sans">
                      Manoranjan AT
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A8B4AA] group-hover:text-[#C7A66A] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Transmission Form (Cols 6-12) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={2}
            className="lg:col-span-7 rounded-3xl bg-[#102A1F]/90 backdrop-blur-xs border border-white/10 p-8 sm:p-12 shadow-lg"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="font-display font-bold text-lg text-[#F8F7F2]">
                Send a Message
              </span>
              <span className="text-xs text-[#A8B4AA] font-sans">
                Direct Dispatch
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#A8B4AA] font-bold mb-2 font-sans">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Alex Chen"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0B1712] border border-white/15 text-sm text-[#F8F7F2] placeholder-[#7E8F82] focus:outline-none focus:border-[#C7A66A] focus:bg-[#07100D] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#A8B4AA] font-bold mb-2 font-sans">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#0B1712] border border-white/15 text-sm text-[#F8F7F2] placeholder-[#7E8F82] focus:outline-none focus:border-[#C7A66A] focus:bg-[#07100D] transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-[#A8B4AA] font-bold mb-2 font-sans">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Internship opportunity / Technical collaboration"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0B1712] border border-white/15 text-sm text-[#F8F7F2] placeholder-[#7E8F82] focus:outline-none focus:border-[#C7A66A] focus:bg-[#07100D] transition-colors font-sans"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#A8B4AA] font-bold mb-2 font-sans">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details regarding your opportunity or inquiry..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#0B1712] border border-white/15 text-sm text-[#F8F7F2] placeholder-[#7E8F82] focus:outline-none focus:border-[#C7A66A] focus:bg-[#07100D] transition-colors font-sans resize-none"
                />
              </div>

              {validationError && (
                <p className="text-xs text-[#F87171] font-sans font-medium">{validationError}</p>
              )}

              {submitted && (
                <div className="p-4 rounded-2xl bg-[#174D38] border border-[#D5F2A3]/30 text-xs text-[#D5F2A3] font-sans font-semibold">
                  Mail client launched. If it did not open automatically, please send directly to {EMAIL_ADDRESS}.
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C7A66A] hover:bg-[#d8b97d] text-[#0B1712] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Dispatch Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
