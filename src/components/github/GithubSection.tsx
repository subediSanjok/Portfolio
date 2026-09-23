import React, { useState, useEffect } from 'react';
import {
  Star,
  GitFork,
  ExternalLink,
  FolderGit2
} from 'lucide-react';
import { fetchGithubProfile, fetchGithubRepos } from '../../services/github';
import type { GithubProfile } from '../../services/github';
import type { GithubRepo } from '../../types';
import { ActivityGraph } from './ActivityGraph';
import { GithubIcon } from '../ui/Icons';

export const GithubSection: React.FC = () => {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    async function loadData() {
      const [profData, reposData] = await Promise.all([
        fetchGithubProfile(),
        fetchGithubRepos()
      ]);
      setProfile(profData);
      setRepos(reposData);
    }
    loadData();
  }, []);

  const languageColors: Record<string, string> = {
    Python: '#3572A5',
    Java: '#b07219',
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c'
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>LIVE GITHUB ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Open Source Repositories &amp; Code
            </h2>
            <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
              Synchronized directly with the GitHub API for{' '}
              <a
                href="https://github.com/subediSanjok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                @subediSanjok
              </a>.
            </p>
          </div>

          {/* Quick Profile Stat Card */}
          {profile && (
            <div className="flex items-center gap-4 p-3.5 rounded-2xl glass-panel border border-slate-800/90 w-fit">
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center font-mono font-bold text-sky-400 text-lg">
                SS
              </div>
              <div className="text-xs font-mono space-y-0.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span>{profile.login}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-slate-400 flex items-center gap-3">
                  <span><strong className="text-sky-400">{profile.public_repos}</strong> Repositories</span>
                  <span><strong className="text-emerald-400">{profile.followers}</strong> Followers</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contribution Activity Graph */}
        <div className="mb-10">
          <ActivityGraph />
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="p-5 rounded-xl glass-panel glass-panel-hover border border-slate-800/90 flex flex-col justify-between group relative"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold font-mono text-white group-hover:text-sky-400 transition-colors line-clamp-1"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-1"
                    aria-label={`View ${repo.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {repo.description || 'Public GitHub software repository by Sanjok Subedi.'}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                {repo.language ? (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || '#38bdf8' }}
                    />
                    <span className="text-slate-300">{repo.language}</span>
                  </span>
                ) : (
                  <span>Code</span>
                )}

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/subediSanjok?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-xs transition-all shadow-lg"
          >
            <GithubIcon className="w-4 h-4 text-sky-400" />
            <span>View All Public Repositories on GitHub →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
