import React from 'react';
import {
  PythonIcon,
  JSIcon,
  ReactIcon,
  NextJSIcon,
  TSIcon,
  WordPressIcon,
  GitIcon,
  HTML5Icon,
  CSS3Icon,
  TailwindIcon,
  DockerIcon,
  MySQLIcon,
} from '../ui/Icons';

export const SkillsMatrix: React.FC = () => {
  const skillsRow1 = [
    { name: 'Python', icon: <PythonIcon className="w-8 h-8" /> },
    { name: 'JavaScript', icon: <JSIcon className="w-8 h-8" /> },
    { name: 'React', icon: <ReactIcon className="w-8 h-8" /> },
    { name: 'Next.js', icon: <NextJSIcon className="w-8 h-8" /> },
    { name: 'TypeScript', icon: <TSIcon className="w-8 h-8" /> },
    { name: 'WordPress', icon: <WordPressIcon className="w-8 h-8" /> },
    { name: 'Git', icon: <GitIcon className="w-8 h-8" /> },
  ];

  const skillsRow2 = [
    { name: 'HTML5', icon: <HTML5Icon className="w-8 h-8" /> },
    { name: 'CSS3', icon: <CSS3Icon className="w-8 h-8" /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon className="w-8 h-8" /> },
    { name: 'Docker', icon: <DockerIcon className="w-8 h-8" /> },
    { name: 'MySQL', icon: <MySQLIcon className="w-8 h-8" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-[#f8fafc] text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <span className="text-blue-600 font-bold text-sm tracking-wide uppercase flex items-center gap-1.5">
            <span className="w-5 h-0.5 bg-blue-600 inline-block"></span>
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technologies I Work With
          </h2>
        </div>

        {/* Skills Cards Grid - Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-4">
          {skillsRow1.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Cards Grid - Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skillsRow2.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
