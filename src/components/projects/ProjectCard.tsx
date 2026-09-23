import React from 'react';
import {
  ExternalLink,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import type { Project } from '../../types';
import { GithubIcon } from '../ui/Icons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="group rounded-2xl glass-panel glass-panel-hover border border-slate-800/90 flex flex-col justify-between overflow-hidden relative transition-all duration-300">
      {/* Top ambient highlight on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-80 group-hover:opacity-100"
        style={{ backgroundColor: project.accentColor || '#38bdf8' }}
      />

      <div className="p-6 sm:p-7 space-y-4">
        {/* Top meta strip */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase bg-slate-900 border border-slate-800 text-sky-400">
            {project.category}
          </span>

          {project.metrics && project.metrics[0] && (
            <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-medium">
              {project.metrics[0].label}: {project.metrics[0].value}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h3
            onClick={() => onOpenDetails(project)}
            className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors cursor-pointer flex items-center justify-between gap-2"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>
        </div>

        {/* 2 Key Architecture Bullets */}
        <div className="py-1 space-y-1.5 border-y border-slate-800/60 text-xs text-slate-400">
          {project.keyFeatures.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-6 py-3.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="text-xs font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Architecture &amp; Specs</span>
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
