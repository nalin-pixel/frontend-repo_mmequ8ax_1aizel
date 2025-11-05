import { motion } from 'framer-motion';
import { Code, Cpu, Database, GitBranch } from 'lucide-react';

const SkillTag = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur hover:bg-white/10 transition">
    {label}
  </span>
);

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0c10] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px 320px at 80% 20%, rgba(56,189,248,0.10), transparent), radial-gradient(700px 360px at 20% 80%, rgba(168,85,247,0.08), transparent)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-semibold tracking-tight text-white/90">
          Keahlian
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Frontend */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-medium">Frontend</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion'].map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <motion.div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" initial={{ width: 0 }} whileInView={{ width: '90%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Cpu className="h-5 w-5 text-violet-400" />
              <h3 className="text-lg font-medium">Backend</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Node.js', 'Express', 'Python', 'FastAPI'].map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <motion.div className="h-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-500" initial={{ width: 0 }} whileInView={{ width: '80%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-medium">Tools</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Git', 'GitHub', 'Vite', 'Figma', 'Postman'].map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <motion.div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500" initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
            </div>
          </motion.div>

          {/* Database & Soft Skills */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-blue-300" />
              <h3 className="text-lg font-medium">Database & Soft Skills</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['MongoDB', 'MySQL', 'Problem Solving', 'Communication', 'Teamwork'].map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <motion.div className="h-2 rounded-full bg-gradient-to-r from-blue-300 to-violet-400" initial={{ width: 0 }} whileInView={{ width: '75%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
