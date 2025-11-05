import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0c10] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(500px 240px at 20% 10%, rgba(99,102,241,0.10), transparent), radial-gradient(600px 300px at 80% 80%, rgba(34,211,238,0.08), transparent)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-semibold tracking-tight text-white/90">
          Tentang Saya
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-1">
            <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-xl group-hover:blur-2xl transition" />
              <div className="relative h-full w-full rounded-xl bg-[#0a0c10] grid place-items-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-[3px] rotate-0 group-hover:rotate-6 transition-transform duration-500">
                  <div className="h-full w-full rounded-full bg-[#0a0c10] grid place-items-center text-3xl font-semibold">R</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="md:col-span-2">
            <div className="prose prose-invert max-w-none text-white/80">
              <p className="text-lg leading-relaxed">
                Saya adalah Rizky, calon Web Developer yang berfokus pada pembuatan antarmuka modern dan performa yang prima. Saya percaya bahwa kode bukan sekadar baris perintah, melainkan cara menyampaikan ide ke dunia.
              </p>
              <p>
                Visi saya adalah membangun solusi digital yang elegan, fungsional, dan berdampak. Saya menikmati merancang pengalaman yang mulus dari konsep hingga implementasi, menyatukan estetika, aksesibilitas, dan kecepatan.
              </p>
              <p>
                Di luar layar, saya senang mengeksplor teknologi baru, menulis, dan berkolaborasi dalam komunitas developer. Mari membangun sesuatu yang berarti.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
