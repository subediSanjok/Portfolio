import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitMerge,
  BrainCircuit,
  Layout,
  Code2,
  Share2,
  ShieldCheck,
  Zap,
  Rocket,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { sdlcSteps } from '../../data/sdlc';

export const HowIBuild: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Share2': return <Share2 className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  const currentStep = sdlcSteps[activeStep];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium">
            <GitMerge className="w-3.5 h-3.5" />
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build Robust Software
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A disciplined 7-phase software development lifecycle ensuring high performance, fault tolerance, and clean architecture from concept to production.
          </p>
        </div>

        {/* 7-Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10 max-w-6xl mx-auto">
          {sdlcSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${isSelected
                  ? 'bg-sky-500/15 border-sky-500/60 shadow-lg shadow-sky-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" />
                )}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="font-mono text-xs font-bold text-sky-400">{step.step}</span>
                  <div className={`p-1 rounded-md ${isSelected ? 'text-sky-400 bg-sky-500/20' : 'text-slate-400'
                    }`}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>
                <h4 className="text-xs font-bold text-slate-200 line-clamp-1">
                  {step.title.split('&')[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <motion.div
          key={currentStep.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800/90 relative overflow-hidden max-w-5xl mx-auto border-glow-sky"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-sky-400">
                  {currentStep.step}
                </span>
                <span className="text-slate-600 font-mono text-xl">/</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentStep.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="pt-4 space-y-2.5">
                <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Key Deliverables &amp; Artifacts:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStep.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side SDLC step navigation actions */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Phase Progress</span>
                <span className="text-sky-400 font-bold">{activeStep + 1} of {sdlcSteps.length}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / sdlcSteps.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
                >
                  &larr; Previous Phase
                </button>
                <button
                  disabled={activeStep === sdlcSteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(sdlcSteps.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-xs font-mono font-bold text-slate-950 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
