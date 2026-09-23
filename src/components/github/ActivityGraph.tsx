import React, { useMemo } from 'react';
import { GitCommit } from 'lucide-react';

export const ActivityGraph: React.FC = () => {
  // Generate 52 weeks x 7 days pseudo-heatmap matrix with realistic distribution
  const { weeks, totalContributions } = useMemo(() => {
    let total = 0;
    const grid: number[][] = [];

    // Seeded predictable random for aesthetic stability
    const seed = (s: number) => {
      const x = Math.sin(s++) * 10000;
      return x - Math.floor(x);
    };

    for (let w = 0; w < 44; w++) {
      const days: number[] = [];
      for (let d = 0; d < 7; d++) {
        const val = seed(w * 7 + d);
        let level = 0;
        if (val > 0.85) level = 4;
        else if (val > 0.68) level = 3;
        else if (val > 0.45) level = 2;
        else if (val > 0.22) level = 1;

        days.push(level);
        total += level * 2;
      }
      grid.push(days);
    }
    return { weeks: grid, totalContributions: total + 480 };
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 4: return 'bg-emerald-400';
      case 3: return 'bg-emerald-500/80';
      case 2: return 'bg-emerald-600/60';
      case 1: return 'bg-emerald-900/50';
      default: return 'bg-slate-900/90 border border-slate-800/60';
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-slate-800/90 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-white">
          <GitCommit className="w-4 h-4 text-emerald-400" />
          <h4 className="text-sm font-bold font-mono">
            {totalContributions} Contributions in the last year
          </h4>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-slate-800"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-900/50"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600/60"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Heatmap Grid container with horizontal scroll on small devices */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-flex gap-1 min-w-full">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  title={`Level ${level} activity`}
                  className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${getColor(level)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
        <span>Mon, Wed, Fri active commits</span>
        <span className="text-emerald-400">Continuous GitHub Activity</span>
      </div>
    </div>
  );
};
