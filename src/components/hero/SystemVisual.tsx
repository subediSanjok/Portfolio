import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Database,
  Globe,
  Zap,
  Activity,
  Play,
  Workflow
} from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  role: string;
  tech: string;
  type: 'client' | 'gateway' | 'service' | 'storage';
  metric: string;
  desc: string;
}

const NODES: NodeData[] = [
  {
    id: 'client',
    label: '1. Frontend Client',
    role: 'UI/UX Layer',
    tech: 'React 19 • TypeScript • Tailwind',
    type: 'client',
    metric: '60 FPS • < 2.5s LCP',
    desc: 'Responsive SPA with hardware-accelerated animations & 3D visualizations'
  },
  {
    id: 'gateway',
    label: '2. API Gateway & Routing',
    role: 'Traffic & Auth',
    tech: 'Spring Cloud Gateway • JWT Auth',
    type: 'gateway',
    metric: 'Stateless • Rate Limited',
    desc: 'Centralized route dispatching, CORS handling, and token verification'
  },
  {
    id: 'microservices',
    label: '3. Backend Microservices',
    role: 'Business Logic',
    tech: 'Java Spring Boot • REST APIs',
    type: 'service',
    metric: 'Decoupled Services',
    desc: 'Domain-isolated services for orders, users, catalog, and school ERP'
  },
  {
    id: 'automation',
    label: '4. Python Automation & AI',
    role: 'Background Daemons',
    tech: 'Python • Watchdog • OCR / NLP',
    type: 'service',
    metric: '< 20ms Latency',
    desc: 'Asynchronous daemons for file system sorting and intelligent document AI'
  },
  {
    id: 'database',
    label: '5. Database & Persistence Tier',
    role: 'Storage Layer',
    tech: 'PostgreSQL • MySQL • Hibernate JPA',
    type: 'storage',
    metric: '100% ACID DB',
    desc: 'Relational schemas, indexed queries, connection pooling, and migrations'
  }
];

export const SystemVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'blueprint' | 'console'>('flow');
  const [activeNode, setActiveNode] = useState<string>('client');
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    '[INIT] System architecture initialized',
    '[OK] React 19 client ready (Vite build)',
    '[GATEWAY] API Gateway routing online: 200 OK',
    '[DAEMON] Watchdog background event loop active'
  ]);
  const [packetCount, setPacketCount] = useState<number>(184);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    const actions = [
      '[REQ] Client dispatched POST /api/documents/process',
      '[GATEWAY] Auth verified via JWT token -> routing to service',
      '[PYTHON AI] OCR preprocessing deskew + NER pipeline executed',
      '[SPRING] Order & document state persisted in PostgreSQL',
      '[RESP] 200 OK — Request cycle completed in 24ms'
    ];

    actions.forEach((msg, idx) => {
      setTimeout(() => {
        setSimulatedLogs((prev) => [...prev.slice(-4), msg]);
        setPacketCount((c) => c + 1);
        if (idx === actions.length - 1) setIsSimulating(false);
      }, (idx + 1) * 350);
    });
  };

  const selectedNodeData = NODES.find((n) => n.id === activeNode) || NODES[0];

  return (
    <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden p-5 sm:p-6 border-glow-sky">

      {/* Top Header with Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-1">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-300">
            system_architecture.tsx
          </span>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('flow')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-all cursor-pointer ${activeTab === 'flow'
              ? 'bg-sky-500 text-slate-950'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            System Flow
          </button>
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-all cursor-pointer ${activeTab === 'blueprint'
              ? 'bg-sky-500 text-slate-950'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            Blueprint
          </button>
          <button
            onClick={() => setActiveTab('console')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-all cursor-pointer ${activeTab === 'console'
              ? 'bg-sky-500 text-slate-950'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            Console
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'flow' && (
        <div className="space-y-3">
          {/* Quick interactive trigger */}
          <div className="flex items-center justify-between bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-300 font-mono flex items-center gap-1.5 text-[11px]">
              <Workflow className="w-3.5 h-3.5 text-sky-400" />
              Click any tier to inspect architecture:
            </span>
            <button
              onClick={triggerSimulation}
              disabled={isSimulating}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all disabled:opacity-50 cursor-pointer shadow-sm shadow-sky-500/20"
            >
              <Play className="w-3 h-3 fill-slate-950" />
              <span>{isSimulating ? 'Simulating...' : 'Test Request'}</span>
            </button>
          </div>

          {/* Tier Buttons Stack */}
          <div className="space-y-2">
            {NODES.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${isSelected
                    ? 'bg-sky-500/15 border-sky-500/60 shadow-md shadow-sky-500/10'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${node.type === 'client' ? 'bg-sky-500/20 text-sky-400' :
                        node.type === 'gateway' ? 'bg-indigo-500/20 text-indigo-400' :
                          node.type === 'service' ? 'bg-emerald-500/20 text-emerald-400' :
                            'bg-amber-500/20 text-amber-400'
                        }`}>
                        {node.type === 'client' && <Globe className="w-3.5 h-3.5" />}
                        {node.type === 'gateway' && <Layers className="w-3.5 h-3.5" />}
                        {node.type === 'service' && <Cpu className="w-3.5 h-3.5" />}
                        {node.type === 'storage' && <Database className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                          {node.label}
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-mono">{node.tech}</p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                      {node.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Tier Detail Box */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span className="font-bold">{selectedNodeData.role}</span>
              <span className="text-slate-400">Status: Active</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {selectedNodeData.desc}
            </p>
          </div>
        </div>
      )}

      {/* Blueprint View */}
      {activeTab === 'blueprint' && (
        <div className="space-y-3 py-1">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-sky-400 uppercase font-bold">Frontend Stack</span>
              <p className="text-xs font-bold text-white">React 19 &amp; TypeScript</p>
              <p className="text-[11px] text-slate-400">Tailwind CSS, Framer Motion, Three.js 3D</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">Microservices</span>
              <p className="text-xs font-bold text-white">Spring Boot &amp; Cloud</p>
              <p className="text-[11px] text-slate-400">Eureka, Gateway, JWT, Resilience4j</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Automation &amp; AI</span>
              <p className="text-xs font-bold text-white">Python Background Daemons</p>
              <p className="text-[11px] text-slate-400">Watchdog daemon, OCR &amp; NLP pipelines</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Persistence</span>
              <p className="text-xs font-bold text-white">PostgreSQL &amp; MySQL</p>
              <p className="text-[11px] text-slate-400">ACID compliance, JPA/Hibernate, Docker</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs text-sky-300 font-mono">
            💡 Architecture Principle: Separation of concerns, high throughput, zero-downtime microservices.
          </div>
        </div>
      )}

      {/* Console Output Tab */}
      {activeTab === 'console' && (
        <div className="space-y-3">
          <div className="rounded-xl bg-slate-950 border border-slate-900 p-3.5 font-mono text-xs space-y-1.5">
            <div className="flex items-center justify-between text-slate-400 text-[10px] pb-2 border-b border-slate-900">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Activity className="w-3.5 h-3.5" />
                SYSTEM RUNTIME MONITOR
              </span>
              <span>PROCESSED: {packetCount} PACKETS</span>
            </div>
            {simulatedLogs.map((log, i) => (
              <div key={i} className="flex items-center gap-2 py-0.5">
                <span className="text-sky-400 font-bold">&gt;</span>
                <span className={
                  log.includes('[OK]') || log.includes('[RESP]') ? 'text-emerald-400 font-medium' :
                    log.includes('[REQ]') ? 'text-amber-300' :
                      log.includes('[GATEWAY]') ? 'text-indigo-300' :
                        'text-slate-300'
                }>
                  {log}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={triggerSimulation}
              disabled={isSimulating}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all disabled:opacity-50 cursor-pointer"
            >
              {isSimulating ? 'Sending Request...' : 'Trigger Test Request'}
            </button>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All Services Operational
            </span>
          </div>
        </div>
      )}

      {/* Footer bar */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-300">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          Distributed System Topology
        </span>
        <span className="text-sky-400 font-semibold">Production Ready</span>
      </div>

    </div>
  );
};
