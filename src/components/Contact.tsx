import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { Github, Linkedin } from './Icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide your message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:manoranjanat527@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const channels = [
    {
      label: 'Email',
      value: 'manoranjanat527@gmail.com',
      href: 'mailto:manoranjanat527@gmail.com',
      icon: <Mail className="w-4 h-4" />,
    },
    {
      label: 'GitHub',
      value: 'github.com/manoranjan594',
      href: 'https://github.com/manoranjan594',
      icon: <Github className="w-4 h-4" />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/manoranjan-at-16508735b',
      href: 'https://www.linkedin.com/in/manoranjan-at-16508735b/',
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#090A0C] border-t border-[#1C2026]">
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
            <span className="section-tag">Contact</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#262B33]">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#E7E9EC] tracking-tight">
              Get in touch. <br />
              <span className="text-[#8AA9FF] font-normal">Open to collaboration &amp; opportunities.</span>
            </h2>
            <p className="max-w-md text-sm text-[#9298A2] font-sans">
              I welcome conversations about internship opportunities, hackathons, and software engineering collaborations.
            </p>
          </div>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Form */}
          <motion.div
            className="lg:col-span-7 border border-[#262B33] bg-[#14161A] p-7 sm:p-10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#262B33]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8AA9FF]">
                Send an Email Message
              </span>
              <span className="font-mono text-[10px] text-[#9298A2]">Direct Mailto</span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-[#E7E9EC] mb-2">
                    Name <span className="text-[#8AA9FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#1C1F24] border text-[#E7E9EC] text-sm font-sans focus:outline-none focus:border-[#8AA9FF] transition-colors ${
                      errors.name ? 'border-red-400' : 'border-[#262B33]'
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-[#E7E9EC] mb-2">
                    Email <span className="text-[#8AA9FF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#1C1F24] border text-[#E7E9EC] text-sm font-sans focus:outline-none focus:border-[#8AA9FF] transition-colors ${
                      errors.email ? 'border-red-400' : 'border-[#262B33]'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-wider text-[#E7E9EC] mb-2">
                  Subject <span className="text-[#9298A2] font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1C1F24] border border-[#262B33] text-[#E7E9EC] text-sm font-sans focus:outline-none focus:border-[#8AA9FF] transition-colors"
                  placeholder="Internship / Project Discussion / General"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-[#E7E9EC] mb-2">
                  Message <span className="text-[#8AA9FF]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 bg-[#1C1F24] border text-[#E7E9EC] text-sm font-sans focus:outline-none focus:border-[#8AA9FF] transition-colors resize-y min-h-[110px] ${
                    errors.message ? 'border-red-400' : 'border-[#262B33]'
                  }`}
                  placeholder="Tell me about your project, idea, or role..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 bg-[#8AA9FF] text-[#090A0C] font-semibold px-7 py-3 font-mono text-xs uppercase tracking-wider hover:bg-[#A3BCFF] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>
                <p className="font-mono text-[10px] text-[#9298A2] mt-2">
                  Pre-fills an email addressed to manoranjanat527@gmail.com in your default client.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Direct Channels & Details */}
          <motion.div
            className="lg:col-span-5 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="border border-[#262B33] bg-[#14161A] p-6 sm:p-7">
              <div className="font-mono text-xs uppercase tracking-wider text-[#8AA9FF] pb-3 mb-5 border-b border-[#262B33]">
                Direct Contact Channels
              </div>

              <div className="space-y-3">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center justify-between p-3.5 border border-[#262B33] bg-[#1C1F24] hover:border-[#8AA9FF]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded border border-[#262B33] bg-[#14161A] flex items-center justify-center text-[#8AA9FF] shrink-0">
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] uppercase text-[#9298A2] block">
                          {c.label}
                        </span>
                        <span className="text-xs text-[#E7E9EC] font-medium truncate block">
                          {c.value}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9298A2] group-hover:text-[#8AA9FF] transition-colors shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Status Note */}
            <div className="border border-[#262B33] bg-[#14161A] p-6 space-y-3 font-mono text-xs text-[#9298A2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8AA9FF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#E7E9EC] block">Davangere, Karnataka, India</span>
                  <span className="text-[10px]">Bapuji Institute of Engineering &amp; Technology</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#1C2026]">
                <Clock className="w-4 h-4 text-[#8AA9FF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#E7E9EC] block">Indian Standard Time (UTC+05:30)</span>
                  <span className="text-[10px]">Active student &amp; developer</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
