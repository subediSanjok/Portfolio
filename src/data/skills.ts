import type { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 'Advanced', description: 'Hooks, Context, Custom Hooks, Performance tuning, Suspense' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 'Advanced', description: 'Strict typing, Generics, Utility types, Interfaces' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 'Advanced', description: 'Async/await, Event loop, DOM manipulation, Closures' },
  { name: 'HTML5 & Semantic Web', category: 'Frontend', proficiency: 'Advanced', description: 'Accessible structure, SEO metadata, ARIA attributes' },
  { name: 'CSS3 & Tailwind CSS', category: 'Frontend', proficiency: 'Advanced', description: 'Custom design systems, Responsive grids, Animations, Glassmorphism' },
  { name: 'Framer Motion', category: 'Frontend', proficiency: 'Proficient', description: 'Layout animations, Gestures, Spring physics, Scroll triggers' },

  // Backend
  { name: 'Java', category: 'Backend', proficiency: 'Advanced', description: 'OOP principles, Collections, Multithreading, Streams' },
  { name: 'Spring Boot', category: 'Backend', proficiency: 'Advanced', description: 'REST APIs, Microservices, Spring Security, Spring Cloud' },
  { name: 'Python', category: 'Backend', proficiency: 'Advanced', description: 'Automation scripts, Watchdog daemons, File processing, FastAPI' },
  { name: 'Node.js & Express', category: 'Backend', proficiency: 'Proficient', description: 'Async I/O, REST endpoints, Middleware, Authentication' },
  { name: 'RESTful API Design', category: 'Backend', proficiency: 'Advanced', description: 'Standard HTTP codes, Rate limiting, OpenAPI/Swagger, JWT' },
  { name: 'Microservices', category: 'Backend', proficiency: 'Proficient', description: 'Decoupled domain services, Service discovery, Circuit breakers' },

  // Database
  { name: 'MySQL', category: 'Database', proficiency: 'Advanced', description: 'Relational schema design, Indexing, Complex queries, Transactions' },
  { name: 'PostgreSQL', category: 'Database', proficiency: 'Proficient', description: 'ACID compliance, JSONB queries, Constraints, Foreign keys' },
  { name: 'MongoDB', category: 'Database', proficiency: 'Proficient', description: 'Document stores, Aggregation pipeline, Mongoose ODM' },
  { name: 'Hibernate / JPA', category: 'Database', proficiency: 'Advanced', description: 'Entity mapping, Lazy loading, Criteria API, Query optimization' },

  // Cloud & Tools
  { name: 'Git & GitHub', category: 'Cloud & Tools', proficiency: 'Advanced', description: 'Branching workflows, PR reviews, CI/CD Actions, Release tagging' },
  { name: 'Docker', category: 'Cloud & Tools', proficiency: 'Proficient', description: 'Dockerfile multi-stage builds, Docker Compose containerization' },
  { name: 'Postman', category: 'Cloud & Tools', proficiency: 'Advanced', description: 'Automated test collections, Environment variables, Mock servers' },
  { name: 'VS Code & JetBrains', category: 'Cloud & Tools', proficiency: 'Advanced', description: 'Debugging workflows, Profiling, Refactoring tools' },
  { name: 'npm / Vite', category: 'Cloud & Tools', proficiency: 'Advanced', description: 'Build pipeline optimization, Bundle analysis, Package management' },

  // Specialty & Interactive
  { name: 'Three.js / 3D Canvas', category: 'Specialty', proficiency: 'Proficient', description: '3D rack & data-center visualization, Scene graphs, Shaders' },
  { name: 'Desktop Automation', category: 'Specialty', proficiency: 'Advanced', description: 'File system event monitors, OS task batching, Shell scripting' },
  { name: 'Document AI / OCR', category: 'Specialty', proficiency: 'Proficient', description: 'Tesseract OCR, OpenCV image cleanup, NLP regex entity parsers' },
  { name: 'Web Performance & CWV', category: 'Specialty', proficiency: 'Advanced', description: 'LCP/INP/CLS tuning, Asset compression, Tree shaking, Lazy loading' }
];

export const skillCategories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & Tools', 'Specialty'] as const;
