import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/ui/Toast';
import type { ToastMessage } from './components/ui/Toast';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // IntersectionObserver to track active section in viewport
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      {/* Top Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <SkillsMatrix />
        <ProjectsSection />
      </main>

      {/* Footer CTA & Copyright */}
      <Footer />

      {/* Toast Notification Layer */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
