import type { SDLCStep } from '../types';

export const sdlcSteps: SDLCStep[] = [
  {
    step: '01',
    title: 'Plan & Architecture',
    description: 'Deconstruct domain requirements, model data entities, choose optimal technical stack, and design clean system boundaries.',
    deliverables: ['System Architecture Diagram', 'Database Schema Models', 'API Contract Specifications'],
    icon: 'BrainCircuit'
  },
  {
    step: '02',
    title: 'UI/UX & Interface Design',
    description: 'Structure modern, responsive, and accessible user flows with intuitive navigation, dark obsidian themes, and micro-interactions.',
    deliverables: ['Design Token System', 'Component Hierarchy', 'Accessibility & Responsive Specs'],
    icon: 'Layout'
  },
  {
    step: '03',
    title: 'Robust Implementation',
    description: 'Write clean, modular, and type-safe code in React, TypeScript, Java Spring Boot, or Python with strict architectural patterns.',
    deliverables: ['Type-safe React Components', 'Spring Boot / REST Services', 'Modular Automation Daemons'],
    icon: 'Code2'
  },
  {
    step: '04',
    title: 'API & Service Integration',
    description: 'Connect frontend to backend microservices, implement state synchronization, handle caching, and secure with JWT/RBAC.',
    deliverables: ['REST / GraphQL Endpoints', 'Stateless JWT Authentication', 'Resilient Network Retries'],
    icon: 'Share2'
  },
  {
    step: '05',
    title: 'Testing & Verification',
    description: 'Ensure system stability, transactional integrity, cross-browser compatibility, and edge-case handling across all viewports.',
    deliverables: ['Unit & Integration Tests', 'Postman API Assertions', 'Cross-browser Verification'],
    icon: 'ShieldCheck'
  },
  {
    step: '06',
    title: 'Performance & Optimization',
    description: 'Audit Core Web Vitals, eliminate render-blocking assets, optimize SQL queries/indexes, and reduce memory footprints.',
    deliverables: ['LCP < 2.5s & CLS < 0.1', 'Bundle Code Splitting', 'DB Index & Query Tuning'],
    icon: 'Zap'
  },
  {
    step: '07',
    title: 'CI/CD & Deployment',
    description: 'Package applications via Docker multi-stage containers and automate build pipelines for continuous, zero-downtime deployment.',
    deliverables: ['Dockerized Containers', 'GitHub Actions Pipelines', 'Production Monitoring'],
    icon: 'Rocket'
  }
];
