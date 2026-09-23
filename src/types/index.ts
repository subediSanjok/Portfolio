export type ProjectCategory = 'all' | 'fullstack' | 'backend' | 'automation' | 'frontend' | 'interactive';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & Tools' | 'Specialty';
  iconName?: string;
  proficiency: string; // e.g. 'Advanced', 'Proficient', 'Core'
  description: string;
}

export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  homepage?: string | null;
}

export interface SDLCStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}
