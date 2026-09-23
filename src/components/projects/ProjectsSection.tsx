import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Projects displayed directly matching the reference UI
  const featuredProjects = [
    {
      id: 'file-organizer',
      title: 'Automated Desktop & Downloads File Organizer',
      description:
        'A Python application that continuously monitors your desktop and downloads folder, automatically organizes files into categorized folders with a GUI and undo/revert support.',
      image: '/images/file-organizer.jpg',
      tags: ['Python', 'GUI', 'File System'],
      githubUrl: 'https://github.com/subediSanjok',
      liveUrl: 'https://github.com/subediSanjok',
      fullProject: projectsData.find((p) => p.id === 'desktop-organizer') || projectsData[0],
    },
    {
      id: 'doc-processor',
      title: 'Intelligent Document Processor',
      description:
        'A Python-based tool that extracts and processes information from various document types (PDF, images, etc.) using intelligent techniques like OCR and text analysis.',
      image: '/images/doc-processor.jpg',
      tags: ['Python'],
      githubUrl: 'https://github.com/subediSanjok',
      liveUrl: 'https://github.com/subediSanjok',
      fullProject: projectsData.find((p) => p.id === 'doc-processor') || projectsData[1],
    },
    {
      id: 'microservices',
      title: 'Ecommerve Microservices',
      description:
        'A scalable e-commerce platform built with microservices architecture using modern web technologies and JavaScript.',
      image: '/images/microservices.jpg',
      tags: ['JavaScript', 'Node.js', 'Microservices'],
      githubUrl: 'https://github.com/subediSanjok',
      liveUrl: 'https://github.com/subediSanjok',
      fullProject: projectsData.find((p) => p.id === 'microservices-app') || projectsData[2],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-blue-600 font-bold text-sm tracking-wide uppercase flex items-center gap-1.5">
              <span className="w-5 h-0.5 bg-blue-600 inline-block"></span>
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              My Projects
            </h2>
          </div>

          <a
            href="https://github.com/subediSanjok?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => project.fullProject && setActiveProject(project.fullProject)}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Project Mockup Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-[#070e1c] border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5">
                      <span>View Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 mt-1" />
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags at bottom of card */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-tight border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Banner Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                6 Public Repositories
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Explore more projects on my GitHub profile.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/subediSanjok?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-blue-600 hover:bg-blue-50/50 text-slate-800 hover:text-blue-600 font-semibold text-xs sm:text-sm transition-all shadow-xs"
          >
            <span>View GitHub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
