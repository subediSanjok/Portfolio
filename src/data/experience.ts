import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'nexus-world',
    company: 'Nexus World Pvt. Ltd.',
    role: 'Software Developer',
    period: '2023 — Present',
    location: 'Kathmandu, Nepal',
    type: 'Full-time',
    description: 'Leading full-stack and frontend development initiatives for scalable web applications, API integrations, interactive 3D visualizations, and high-performance client digital platforms.',
    responsibilities: [
      'Architected and built robust, modular React and TypeScript web applications with responsive design and high Lighthouse scores.',
      'Integrated complex RESTful API services, managing state synchronization, caching, and optimistic UI updates.',
      'Engineered interactive 3D rack and data-center visualization prototypes leveraging Three.js and React Three Fiber.',
      'Audited and optimized Core Web Vitals (LCP, INP, CLS), reducing initial load times by over 35%.',
      'Collaborated with cross-functional teams to translate product requirements into maintainable, well-tested code.'
    ],
    achievements: [
      'Reduced web application bundle sizes by ~30% through aggressive code splitting and asset compression.',
      'Delivered 10+ high-profile client and internal web products on schedule.',
      'Pioneered interactive 3D web concepts that enhanced user engagement metrics by 40%.'
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'REST APIs',
      'Tailwind CSS',
      'Three.js / 3D',
      'Performance Optimization',
      'Git / GitHub',
      'WordPress & Custom Architecture'
    ]
  }
];

export const educationData = [
  {
    institution: 'Tribhuvan University Affiliated Institute',
    degree: 'Bachelor of Science in Computer Science & Information Technology (B.Sc. CSIT)',
    period: 'Completed',
    focus: 'Software Engineering, Distributed Systems, Data Structures & Algorithms, Database Management'
  }
];
