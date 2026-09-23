import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'automated-desktop-file-organizer',
    slug: 'automated-desktop-file-organizer',
    title: 'Automated Desktop File Organizer',
    category: 'automation',
    tagline: 'Intelligent background daemon for automated file sorting and system organization',
    description: 'A Python-powered desktop automation system that continuously monitors system directories and automatically categorizes, indexes, and moves files into organized subdirectories based on extension, MIME type, and metadata rules.',
    technologies: ['Python', 'Watchdog', 'OS / Shutil', 'File I/O', 'Automation', 'Multithreading'],
    githubUrl: 'https://github.com/subediSanjok/Automated-Desktop-File-Organizer',
    featured: true,
    accentColor: '#38bdf8',
    problem: 'Manual file organization in messy desktop/download folders consumes developer time, degrades workflow efficiency, and causes clutter.',
    solution: 'Designed an event-driven background service utilizing the Python Watchdog library that intercepts file system events in real-time, validates file integrity, and routes files instantly without consuming excessive CPU resources.',
    architecture: [
      'Event Listener (Watchdog FileSystemEventHandler)',
      'Rule Engine & MIME Categorization Pipeline',
      'Safe I/O Atomic Renamer & Conflict Handler',
      'Configurable YAML/JSON Rules & Logging System'
    ],
    keyFeatures: [
      'Real-time directory monitoring with zero polling delay',
      'Collision resolution (timestamp tagging & duplicate detection)',
      'Extensible classification for Documents, Media, Code, Archives, and Executables',
      'Low memory footprint and background daemon mode'
    ],
    metrics: [
      { label: 'Latency', value: '< 20ms' },
      { label: 'File Types', value: '50+ Supported' },
      { label: 'CPU Usage', value: '< 0.5%' }
    ]
  },
  {
    id: 'intelligent-document-processor',
    slug: 'intelligent-document-processor',
    title: 'Intelligent Document Processor',
    category: 'automation',
    tagline: 'AI-driven OCR & NLP pipeline for structured data extraction from unstructured docs',
    description: 'An intelligent pipeline designed to parse complex PDFs, invoices, and scanned documents, leveraging OCR and NLP to extract key-value entities, tabular data, and semantic summaries.',
    technologies: ['Python', 'Tesseract OCR', 'OpenCV', 'NLP / Transformers', 'FastAPI', 'Pandas'],
    githubUrl: 'https://github.com/subediSanjok/Intelligent-Document-Processor',
    featured: true,
    accentColor: '#34d399',
    problem: 'Extracting structured data from messy, scanned, or non-standardized documents manually is labor-intensive and prone to human error.',
    solution: 'Engineered an end-to-end processing pipeline using image pre-processing (deskewing, binarization), OCR parsing, and regularized entity recognition models to output clean JSON/CSV schemas.',
    architecture: [
      'Image Preprocessing & Denoising via OpenCV',
      'Optical Character Recognition (OCR) Engine',
      'Named Entity Recognition (NER) & Schema Parser',
      'REST API Layer for Batch File Processing'
    ],
    keyFeatures: [
      'Noise filtering, deskewing, and dynamic thresholding for low-contrast scans',
      'Automated key-value pair and table boundary extraction',
      'RESTful endpoints for asynchronous document queueing',
      'Structured JSON output ready for ERP/database ingestion'
    ],
    metrics: [
      { label: 'Accuracy', value: '96.8%' },
      { label: 'Processing Speed', value: '~1.8s/page' },
      { label: 'Formats', value: 'PDF, PNG, TIFF, JPG' }
    ]
  },
  {
    id: 'ecommerce-microservices',
    slug: 'ecommerve-microservices',
    title: 'E-Commerce Microservices Architecture',
    category: 'backend',
    tagline: 'Resilient, distributed microservices platform built with Spring Boot & Docker',
    description: 'A distributed backend architecture for an e-commerce platform incorporating product catalog, order processing, inventory management, API gateway routing, service discovery, and database per service.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Docker', 'RESTful APIs', 'JWT Auth'],
    githubUrl: 'https://github.com/subediSanjok/Ecommerve_microservices',
    featured: true,
    accentColor: '#818cf8',
    problem: 'Monolithic architectures struggle to scale independently under fluctuating traffic (e.g. flash sales vs product catalog browsing) and suffer from single points of failure.',
    solution: 'Designed domain-driven microservices with decoupled databases, an API Gateway for unified authentication and rate limiting, and centralized discovery for dynamic service scaling.',
    architecture: [
      'Spring Cloud Gateway (Reverse Proxy & JWT Authentication Filter)',
      'Eureka Service Discovery & Config Server',
      'Order Service & Product Service with Isolated PostgreSQL DBs',
      'Docker Compose Orchestration for Multi-Container Deployment'
    ],
    keyFeatures: [
      'Service discovery with load balancing and health checks',
      'Resilient inter-service communication with circuit breakers',
      'Stateless token authentication (JWT) with RBAC authorization',
      'Containerized environment with instant Docker Compose spin-up'
    ],
    metrics: [
      { label: 'Architecture', value: 'Event / REST Driven' },
      { label: 'Containerization', value: '100% Dockerized' },
      { label: 'Scalability', value: 'Horizontal Pod Ready' }
    ]
  },
  {
    id: 'school-management-system',
    slug: 'school-management-system',
    title: 'School Management System',
    category: 'fullstack',
    tagline: 'Comprehensive academic enterprise ERP for students, faculty, and administrative staff',
    description: 'An enterprise management portal handling student admissions, course enrollments, attendance tracking, grading systems, fee collection, and administrative dashboards.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API', 'Tailwind CSS', 'Hibernate JPA'],
    githubUrl: 'https://github.com/subediSanjok/School-Management-System',
    featured: true,
    accentColor: '#f59e0b',
    problem: 'Educational institutions face fragmented data across paper logs and disparate spreadsheets, causing delays in grading, attendance tracking, and administrative reporting.',
    solution: 'Developed a full-stack unified system featuring a role-based React dashboard and a Spring Boot JPA backend with ACID transactional guarantees.',
    architecture: [
      'React Single Page Application with dynamic role views',
      'Spring Boot REST Controller & Service Layer',
      'Hibernate / JPA Data Access Layer with MySQL',
      'Role-Based Access Control (Admin, Teacher, Student, Parent)'
    ],
    keyFeatures: [
      'Granular permissions for Admins, Instructors, and Students',
      'Real-time student attendance calculation & performance analytics',
      'Automated transcript and report card generation',
      'Fee invoice management and status ledger'
    ],
    metrics: [
      { label: 'Roles', value: '4 Distinct Tiers' },
      { label: 'Data Integrity', value: '100% ACID DB' },
      { label: 'UI Speed', value: 'SPA Instant Navigation' }
    ]
  },
  {
    id: 'portal-news',
    slug: 'portal-news',
    title: 'Portal News Platform',
    category: 'frontend',
    tagline: 'High-performance interactive news aggregator with category filtering and responsive UX',
    description: 'A responsive news portal web application featuring breaking news tickers, categorized article feeds, trending topics, search indexing, and fluid reader experience.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Vite', 'Responsive Design'],
    githubUrl: 'https://github.com/subediSanjok/portal_news',
    featured: false,
    accentColor: '#ec4899',
    problem: 'Standard news platforms suffer from slow layout reflows, heavy intrusive ads, and poor mobile navigation when parsing live editorial feeds.',
    solution: 'Built a lightweight, component-driven client leveraging dynamic asynchronous fetching, skeleton loaders, and responsive grid layouts for instant reading.',
    architecture: [
      'React Modular Component Tree',
      'News API Ingestion & Cached State Layer',
      'Responsive Grid & Mobile-First Breakpoint Engine',
      'Client-Side Filter & Live Search Pipeline'
    ],
    keyFeatures: [
      'Dynamic categorization (Technology, Business, Sports, Entertainment)',
      'Instant keyword search and client-side caching',
      'Skeleton loading states to ensure zero layout shift (CLS < 0.05)',
      'Optimized dark/light contrast for long-form reading'
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Feed Refresh', value: 'Real-time API' },
      { label: 'Bundle Size', value: '< 85 KB' }
    ]
  },
  {
    id: 'interactive-portfolio-system',
    slug: 'portfolio',
    title: 'Developer Portfolio & Interactive 3D System',
    category: 'interactive',
    tagline: 'Modern engineering showcase with live GitHub API and interactive architecture visualizer',
    description: 'The website you are currently viewing. Built with React, TypeScript, Tailwind CSS, and Framer Motion. Engineered for extreme performance, Core Web Vitals excellence, and technical depth.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas / 3D', 'GitHub REST API'],
    githubUrl: 'https://github.com/subediSanjok/Portfolio',
    liveUrl: '#',
    featured: true,
    accentColor: '#06b6d4',
    problem: 'Most developer portfolios are static templates that fail to show actual software architecture, code depth, or live engineering capabilities.',
    solution: 'Engineered a bespoke, interactive portfolio showcasing live GitHub metrics, system architecture models, and interactive project deep-dives.',
    architecture: [
      'React 19 + TypeScript Component Hierarchy',
      'Framer Motion Hardware-Accelerated Animation Layer',
      'Live GitHub REST API Service with Resilient Fallback Cache',
      'Interactive Canvas System Node Visualizer'
    ],
    keyFeatures: [
      'Zero-jank interactive architecture node canvas',
      'Real-time GitHub repository stats and activity visualizer',
      'Deep-dive interactive project architectural modals',
      'Full mobile responsiveness and accessible semantic HTML'
    ],
    metrics: [
      { label: 'Core Web Vitals', value: '100% Green' },
      { label: 'Live Data', value: 'GitHub Sync' },
      { label: 'Type Safety', value: '100% Strict TS' }
    ]
  }
];
