import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0c10] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px 320px at 50% 20%, rgba(168,85,247,0.12), transparent), radial-gradient(700px 380px at 50% 80%, rgba(56,189,248,0.10), transparent)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-semibold tracking-tight text-white/90">
          Kontak
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <input type="text" id="name" placeholder=" " className="peer w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-transparent outline-none transition focus:border-cyan-400" />
                <label htmlFor="name" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-[#0a0c10] px-1 text-xs text-white/60 transition-all peer-focus:top-0 peer-focus:text-cyan-300 peer-[&:not(:placeholder-shown)]:top-0">Nama</label>
              </div>
              <div className="relative">
                <input type="email" id="email" placeholder=" " className="peer w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-transparent outline-none transition focus:border-cyan-400" />
                <label htmlFor="email" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-[#0a0c10] px-1 text-xs text-white/60 transition-all peer-focus:top-0 peer-focus:text-cyan-300 peer-[&:not(:placeholder-shown)]:top-0">Email</label>
              </div>
              <div className="relative">
                <textarea id="message" rows="4" placeholder=" " className="peer w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-transparent outline-none transition focus:border-cyan-400"></textarea>
                <label htmlFor="message" className="pointer-events-none absolute left-3 top-3 bg-[#0a0c10] px-1 text-xs text-white/60 transition-all peer-focus:top-0 peer-focus:text-cyan-300 peer-[&:not(:placeholder-shown)]:top-0">Pesan</label>
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Mail className="mr-2 h-4 w-4" />
                Kirim Pesan
              </button>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-white/80">Mari terhubung dan bangun sesuatu yang bernilai. Saya terbuka untuk proyek freelance, kolaborasi, maupun magang.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"><Github className="h-4 w-4" /> GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"><Instagram className="h-4 w-4" /> Instagram</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
