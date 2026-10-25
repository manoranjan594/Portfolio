import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowUpRight, MapPin, Clock, Globe } from 'lucide-react';
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
      formData.subject || `Inquiry from ${formData.name} via Portfolio`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:manoranjanat527@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const directChannels = [
    {
      label: 'Email Dispatch',
      value: 'manoranjanat527@gmail.com',
      href: 'mailto:manoranjanat527@gmail.com',
      icon: <Mail className="w-4 h-4" />,
    },
    {
      label: 'GitHub Code Repositories',
      value: 'github.com/manoranjan594',
      href: 'https://github.com/manoranjan594',
      icon: <Github className="w-4 h-4" />,
    },
    {
      label: 'LinkedIn Professional Profile',
      value: 'linkedin.com/in/manoranjan-at-16508735b',
      href: 'https://www.linkedin.com/in/manoranjan-at-16508735b/',
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#FFFDF9] border-t border-[#DDD5C7]">
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
            <span className="section-label">[OP. 08 — INITIATE CONTACT]</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DDD5C7]">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-[#292722] leading-tight">
              Have an idea, opportunity, or <br className="hidden sm:block" />
              <em className="italic font-serif text-[#C4A36B]">project</em> in mind?
            </h2>
            <p className="max-w-md text-sm text-[#77736B] font-sans">
              I&rsquo;m always interested in learning, connecting with fellow developers, and exploring opportunities to build useful digital products together.
            </p>
          </div>
        </motion.div>

        {/* Contact Layout: Form on Left, Direct Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Inquiry Form */}
          <motion.div
            className="lg:col-span-7 border border-[#DDD5C7] bg-[#FAF7F0] p-8 sm:p-12 shadow-[0_4px_30px_rgba(41,39,34,0.02)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DDD5C7]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A77A52]">
                DIRECT DISPATCH FORM
              </span>
              <span className="font-mono text-[10px] text-[#8B857A]">MAILTO PROTOCOL</span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-[#292722] mb-2">
                    Full Name <span className="text-[#C4A36B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FFFDF9] border text-[#292722] text-sm font-sans focus:outline-none focus:border-[#C4A36B] transition-colors ${
                      errors.name ? 'border-red-400' : 'border-[#DDD5C7]'
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500 font-mono">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-[#292722] mb-2">
                    Email Address <span className="text-[#C4A36B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FFFDF9] border text-[#292722] text-sm font-sans focus:outline-none focus:border-[#C4A36B] transition-colors ${
                      errors.email ? 'border-red-400' : 'border-[#DDD5C7]'
                    }`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500 font-mono">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-wider text-[#292722] mb-2">
                  Subject <span className="text-[#8B857A] lowercase font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FFFDF9] border border-[#DDD5C7] text-[#292722] text-sm font-sans focus:outline-none focus:border-[#C4A36B] transition-colors"
                  placeholder="Internship / Collaboration / General Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-[#292722] mb-2">
                  Message <span className="text-[#C4A36B]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 bg-[#FFFDF9] border text-[#292722] text-sm font-sans focus:outline-none focus:border-[#C4A36B] transition-colors resize-y min-h-[120px] ${
                    errors.message ? 'border-red-400' : 'border-[#DDD5C7]'
                  }`}
                  placeholder="Share details regarding your idea, opportunity, or question..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500 font-mono">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#292722] text-[#FAF7F0] px-8 py-3.5 font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#C4A36B] active:scale-[0.99] transition-all duration-300"
                >
                  <Send className="w-3.5 h-3.5 text-[#C4A36B]" />
                  <span>Send Message via Email</span>
                </button>
                <p className="font-mono text-[10px] text-[#8B857A] mt-3">
                  This action generates a pre-formatted email in your default client addressed to manoranjanat527@gmail.com.
                </p>
              </div>
            </form>
          </motion.div>

          {/* RIGHT: Direct Verification Channels */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Direct Connect Dossier */}
            <div className="border border-[#DDD5C7] bg-[#FFFDF9] p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4A36B] pb-3 mb-6 border-b border-[#DDD5C7]">
                [DIRECT CHANNELS]
              </div>

              <div className="space-y-4">
                {directChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={channel.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center justify-between p-4 border border-[#DDD5C7] bg-[#FAF7F0] hover:border-[#C4A36B] transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded border border-[#DDD5C7] bg-[#FFFDF9] flex items-center justify-center text-[#C4A36B] group-hover:text-[#292722] transition-colors shrink-0">
                        {channel.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#8B857A] block">
                          {channel.label}
                        </span>
                        <span className="text-xs text-[#292722] font-medium truncate block">
                          {channel.value}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8B857A] group-hover:text-[#C4A36B] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Geographical & Academic Registry */}
            <div className="border border-[#DDD5C7] bg-[#F0E9DC]/40 p-6 space-y-4 font-mono text-xs">
              <div className="text-[10px] uppercase tracking-widest text-[#8B857A] border-b border-[#DDD5C7] pb-2">
                REGISTRY SPECIFICATION
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C4A36B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8B857A] block text-[10px] uppercase">LOCATION</span>
                  <span className="text-[#292722]">Davangere, Karnataka, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C4A36B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8B857A] block text-[10px] uppercase">TIMEZONE</span>
                  <span className="text-[#292722]">Indian Standard Time (UTC+05:30)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#C4A36B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8B857A] block text-[10px] uppercase">CURRENT STATUS</span>
                  <span className="text-[#292722]">Full-time B.E. Student · Available for Collaborations</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
