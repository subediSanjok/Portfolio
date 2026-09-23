import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Layers,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  GitBranch
} from 'lucide-react';
import type { Project } from '../../types';
import { GithubIcon } from '../ui/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-slate-200"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 uppercase">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Featured Project
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 font-mono">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-sky-500/20"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-slate-700 transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-sky-400" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">

            {/* Project Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest">
                Overview &amp; Context
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>Problem Solved</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Engineering Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Architecture &amp; System Flow</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2"
                  >
                    <span className="text-sky-400 font-bold">{idx + 1}.</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Key Features</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-sky-400" />
              Repository ID: {project.slug}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
