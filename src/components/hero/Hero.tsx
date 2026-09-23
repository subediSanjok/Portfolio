import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, VSCodeIcon } from '../ui/Icons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#060c18] via-[#091328] to-[#0d1b38] text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[480px] h-[480px] bg-sky-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-2"
            >
              <p className="text-slate-300 text-base md:text-lg font-medium flex items-center gap-2">
                Hello, I'm <span className="inline-block animate-wave text-xl">👋</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Sanjok <span className="text-blue-500">Subedi</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 pt-1">
                Software Developer | Web &amp; Application Development
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              I build modern, responsive, and scalable web applications using technologies like React, Next.js, TypeScript, and Python. I enjoy solving problems and turning ideas into real products.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/subediSanjok"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b1528]/90 hover:bg-[#11203d] text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-500 transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </a>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/subediSanjok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjok-subedi-950776191/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-slate-800 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all"
                aria-label="VS Code / Projects"
              >
                <VSCodeIcon className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Avatar Photo & Handwritten Note */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              {/* Handwritten Note with Curved Arrow */}
              <div className="absolute -top-10 -right-4 sm:-right-8 z-20 pointer-events-none select-none">
                <div className="flex flex-col items-center">
                  <div className="font-handwriting text-2xl sm:text-3xl font-bold text-sky-300 -rotate-6 tracking-wide drop-shadow-md text-right leading-tight">
                    <span>Turning</span>
                    <br />
                    <span>ideas <span className="text-white">into</span></span>
                    <br />
                    <span className="text-sky-400">Digital <span className="text-blue-200">Reality</span></span>
                  </div>
                  {/* Curved Arrow pointing to the developer */}
                  <svg
                    className="w-10 h-10 text-sky-400 -rotate-12 mt-1 drop-shadow"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M38 12 C30 25, 18 30, 10 38" />
                    <polyline points="18 40 8 39 12 30" />
                  </svg>
                </div>
              </div>

              {/* Decorative Concentric Rings & Blob Glow */}
              <div className="absolute -inset-4 rounded-full border border-blue-500/30 animate-pulse pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-sky-400/20 pointer-events-none" />

              {/* Photo Frame Container with Gradient Background */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 p-1.5 shadow-2xl shadow-blue-500/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#070e1c] relative flex items-center justify-center">
                  <img
                    src="/images/avatar.jpg"
                    alt="Sanjok Subedi - Software Developer"
                    className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#060c18]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
