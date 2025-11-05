import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const useTyping = (text, speed = 50) => {
  const [display, setDisplay] = useState('');
  const indexRef = useRef(0);
  useEffect(() => {
    setDisplay('');
    indexRef.current = 0;
    const id = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(indexRef.current));
      indexRef.current += 1;
      if (indexRef.current >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return display;
};

export default function Hero() {
  const subtitle = useTyping('Membangun pengalaman digital yang indah, fungsional, dan cepat.', 25);

  const words = useMemo(() => ['visioner', 'kreatif', 'efisien'], []);
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIndex((w) => (w + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a0c10] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0c10]/70 via-[#0a0c10]/60 to-[#0a0c10]" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(800px 400px at 70% 20%, rgba(0,200,255,0.15), transparent), radial-gradient(600px 300px at 30% 60%, rgba(168,85,247,0.12), transparent)'
      }} />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur border border-white/10">
              <Rocket className="h-4 w-4 text-cyan-400" />
              <p className="text-xs tracking-wide text-cyan-200/80">Future-ready portfolio</p>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="block text-white/90">Hi, I’m</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Rizky — Future Web Developer.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 min-h-[56px]">
              {subtitle}
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="ml-2 rounded-md bg-white/5 px-2 py-1 text-cyan-300"
              >
                {words[wordIndex]}
              </motion.span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Lihat Proyek
              </a>
              <a href="#contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
                Hubungi Saya
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/40 to-violet-500/40 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                {/* Profile placeholder */}
                <div className="flex h-full w-full items-center justify-center">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 p-[2px]">
                    <div className="h-full w-full rounded-full bg-[#0a0c10] grid place-items-center text-white/80 font-medium">
                      R
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
