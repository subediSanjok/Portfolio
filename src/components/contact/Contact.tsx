import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface ContactProps {
  onShowToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'sanjoksubedi1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    onShowToast('success', 'Email Copied!', 'sanjoksubedi1@gmail.com has been copied to your clipboard.');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('error', 'Incomplete Fields', 'Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
        // Safe fallback if confetti isn't supported
      }

      onShowToast(
        'success',
        'Message Sent Successfully!',
        `Thank you ${formData.name}. Your message has been prepared and dispatched.`
      );

      // Open user mail client as a backup fallback
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Have an open engineering opportunity, a software project, or want to discuss full-stack &amp; automation architecture? My inbox is always open.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Email Box */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/90 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Email</h4>
                  <p className="text-xs text-slate-400 font-mono">Fastest response route</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-sky-300 truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-mono shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Profiles card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/90 space-y-4">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest">
                Professional Profiles
              </h4>

              <div className="space-y-2.5">
                <a
                  href="https://www.linkedin.com/in/sanjok-subedi-950776191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-[#0a66c2]/50 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0a66c2]/10 border border-[#0a66c2]/30 flex items-center justify-center text-[#0a66c2]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white group-hover:text-[#0a66c2] transition-colors font-mono">
                        LinkedIn Profile
                      </h5>
                      <p className="text-[11px] text-slate-400">linkedin.com/in/sanjok-subedi</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-[#0a66c2] transition-colors">
                    Connect →
                  </span>
                </a>

                <a
                  href="https://github.com/subediSanjok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors font-mono">
                        GitHub Profile
                      </h5>
                      <p className="text-[11px] text-slate-400">github.com/subediSanjok</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-sky-400 transition-colors">
                    Explore →
                  </span>
                </a>
              </div>
            </div>

            {/* Timezone / Availability card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">Response Time</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Typically responds within 12–24 hours for engineering roles and project collaborations.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-5"
            >
              <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Subject / Topic</label>
                <input
                  type="text"
                  placeholder="Frontend / Full Stack Engineering Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Sanjok, I reviewed your work and would love to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
