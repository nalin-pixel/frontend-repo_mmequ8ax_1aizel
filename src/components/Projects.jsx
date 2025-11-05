import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NeoUI Landing',
    desc: 'Landing page futuristik dengan animasi 3D halus dan performa tinggi.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://github.com/',
    code: 'https://github.com/'
  },
  {
    title: 'API Pulse',
    desc: 'REST API cepat untuk analitik sederhana berbasis FastAPI.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://github.com/',
    code: 'https://github.com/'
  },
  {
    title: 'TaskFlow',
    desc: 'Aplikasi manajemen tugas dengan drag-and-drop dan sinkronisasi realtime.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://github.com/',
    code: 'https://github.com/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0c10] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(700px 380px at 50% 10%, rgba(0,212,255,0.10), transparent)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-semibold tracking-tight text-white/90">
          Proyek Terpilih
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white/90">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs text-white/90 transition hover:bg-white/20">
                    Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10">
                    Kode <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
