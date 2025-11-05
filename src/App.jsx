import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target;
      if (target.matches('a[href^="#"]')) {
        const id = target.getAttribute('href');
        if (id && id !== '#') {
          e.preventDefault();
          document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0c10]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">RIZKY.dev</a>
        <nav className="hidden gap-6 md:flex text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#0a0c10] border-t border-white/10 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">Designed & Built by Rizky — © 2025</p>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Always in dark mode — toggle coming soon
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0c10] selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
