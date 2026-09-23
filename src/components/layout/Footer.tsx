import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, VSCodeIcon, SendPlaneIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#070e1c] to-[#040812] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Left: Message & Icon */}
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
              <SendPlaneIcon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Let's Build Something Great
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                I'm always open to discussing new projects, collaborations, or opportunities.
              </p>
            </div>
          </div>

          {/* Right: Social Icons & GitHub CTA */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/subediSanjok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d172e] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjok-subedi-950776191/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d172e] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-slate-800 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/subediSanjok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0d172e] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all"
                aria-label="VS Code / Projects"
              >
                <VSCodeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-slate-700" />

            {/* Check out my work link */}
            <a
              href="https://github.com/subediSanjok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors group"
            >
              <span>Check out my work on GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-400" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center">
          <p className="text-slate-500 text-xs">
            © 2025 Sanjok Subedi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
