import React from 'react';
import { MapPin, Code, Heart } from 'lucide-react';
import { NexusLogo } from '../ui/Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About Me */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-blue-600 font-bold text-sm tracking-wide uppercase flex items-center gap-1.5">
                <span className="w-5 h-0.5 bg-blue-600 inline-block"></span>
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                I'm a passionate
                <br />
                Software <span className="text-blue-600">Developer</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              I enjoy building web applications and desktop tools that are fast, user-friendly, and solve real-world problems. I'm always exploring new technologies and improving my skills to create better digital experiences.
            </p>

            {/* Quick Badges Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Based in Nepal</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                <Code className="w-3.5 h-3.5 text-blue-600" />
                <span>Open to opportunities</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                <span>Always learning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Work Experience Card */}
          <div id="experience" className="lg:col-span-5 scroll-mt-28">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Company Logo Badge */}
                <div className="shrink-0">
                  <NexusLogo className="w-14 h-14" />
                </div>

                {/* Experience Details */}
                <div className="space-y-1.5 flex-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Work Experience
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    Nexus World Nepal / Nexus World
                  </h3>
                  <p className="text-sm font-semibold text-blue-600">
                    Software Developer
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    Working on web and application development, contributing to innovative solutions and real-world projects at Nexus World.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
