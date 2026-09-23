import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Career Timeline
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real-world engineering impact, software architecture, and production delivery.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel rounded-2xl border border-slate-800/90 p-6 sm:p-8 relative overflow-hidden border-glow-sky"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500" />

              {/* Company & Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-300 flex items-center gap-1.5">
                    <span className="text-sky-400 font-mono font-bold">@</span> {exp.company}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="py-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Two Column Grid: Responsibilities vs Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Responsibilities */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-3">
                  <h5 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ChevronRight className="w-4 h-4" />
                    Core Engineering Duties
                  </h5>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-3">
                  <h5 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    Key Milestones &amp; Results
                  </h5>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium text-slate-200">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Applied Strip */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Technologies Applied:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
