import type { GithubRepo } from '../types';

export interface GithubProfile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
}

const FALLBACK_PROFILE: GithubProfile = {
  login: 'subediSanjok',
  name: 'Sanjok Subedi',
  bio: 'Software Developer | React, Java Spring Boot, Python Automation & Systems',
  avatar_url: 'https://avatars.githubusercontent.com/u/subediSanjok',
  html_url: 'https://github.com/subediSanjok',
  public_repos: 6,
  followers: 4,
  following: 5,
  location: 'Kathmandu, Nepal'
};

const FALLBACK_REPOS: GithubRepo[] = [
  {
    name: 'Automated-Desktop-File-Organizer',
    description: 'Automated background file organizer in Python using event-driven watchdog listeners to classify and route files.',
    html_url: 'https://github.com/subediSanjok/Automated-Desktop-File-Organizer',
    stargazers_count: 2,
    forks_count: 0,
    language: 'Python',
    updated_at: '2025-11-15T12:00:00Z',
    topics: ['python', 'automation', 'file-organizer', 'watchdog']
  },
  {
    name: 'Intelligent-Document-Processor',
    description: 'AI-driven OCR and NLP document processing engine for extracting structured data from unstructured scans and PDFs.',
    html_url: 'https://github.com/subediSanjok/Intelligent-Document-Processor',
    stargazers_count: 3,
    forks_count: 1,
    language: 'Python',
    updated_at: '2025-10-20T09:30:00Z',
    topics: ['python', 'ocr', 'tesseract', 'nlp', 'document-ai']
  },
  {
    name: 'Ecommerve_microservices',
    description: 'Distributed e-commerce microservices platform built with Spring Boot, Spring Cloud, PostgreSQL, and Docker Compose.',
    html_url: 'https://github.com/subediSanjok/Ecommerve_microservices',
    stargazers_count: 2,
    forks_count: 0,
    language: 'Java',
    updated_at: '2025-09-18T14:15:00Z',
    topics: ['java', 'spring-boot', 'microservices', 'docker', 'postgresql']
  },
  {
    name: 'School-Management-System',
    description: 'Full-stack enterprise educational portal with Spring Boot backend, React interface, and role-based access control.',
    html_url: 'https://github.com/subediSanjok/School-Management-System',
    stargazers_count: 2,
    forks_count: 0,
    language: 'Java',
    updated_at: '2025-08-10T11:00:00Z',
    topics: ['java', 'spring-boot', 'react', 'mysql', 'education']
  },
  {
    name: 'portal_news',
    description: 'Modern React-based news aggregator web application featuring categorized live feeds and responsive reading experience.',
    html_url: 'https://github.com/subediSanjok/portal_news',
    stargazers_count: 1,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2025-06-05T08:45:00Z',
    topics: ['react', 'javascript', 'news-app', 'api', 'tailwind']
  },
  {
    name: 'Portfolio',
    description: 'Personal developer portfolio and interactive showcase built with React, TypeScript, Vite, and Tailwind CSS.',
    html_url: 'https://github.com/subediSanjok/Portfolio',
    stargazers_count: 4,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2026-03-22T04:00:00Z',
    topics: ['react', 'typescript', 'portfolio', 'tailwind', 'framer-motion']
  }
];

export async function fetchGithubProfile(): Promise<GithubProfile> {
  try {
    const res = await fetch('https://api.github.com/users/subediSanjok', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const data = await res.json();
    return {
      login: data.login || 'subediSanjok',
      name: data.name || 'Sanjok Subedi',
      bio: data.bio || FALLBACK_PROFILE.bio,
      avatar_url: data.avatar_url || FALLBACK_PROFILE.avatar_url,
      html_url: data.html_url || 'https://github.com/subediSanjok',
      public_repos: data.public_repos ?? 6,
      followers: data.followers ?? 4,
      following: data.following ?? 5,
      location: data.location || 'Kathmandu, Nepal'
    };
  } catch {
    return FALLBACK_PROFILE;
  }
}

export async function fetchGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch('https://api.github.com/users/subediSanjok/repos?sort=updated&per_page=12', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return FALLBACK_REPOS;
    return data.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count || 0,
      forks_count: repo.forks_count || 0,
      language: repo.language,
      updated_at: repo.updated_at,
      topics: repo.topics || []
    }));
  } catch {
    return FALLBACK_REPOS;
  }
}
