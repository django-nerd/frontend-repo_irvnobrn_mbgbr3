import { motion } from 'framer-motion'
import { ShieldCheck, CloudLightning, Bug, Server, Radar } from 'lucide-react'

const neon = {
  blue: '#00c8ff',
  purple: '#8a44ff',
  emerald: '#00ffbf',
}

const services = [
  { title: 'Web Application Firewall', icon: ShieldCheck, color: neon.blue },
  { title: 'DDoS Mitigation', icon: CloudLightning, color: neon.purple },
  { title: 'Penetration Testing', icon: Bug, color: neon.emerald },
  { title: 'Server Security', icon: Server, color: neon.blue },
  { title: 'Real-time Threat Detection', icon: Radar, color: neon.purple },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0f14] py-24">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 10% 10%, rgba(0,200,255,0.15), transparent 40%), radial-gradient(circle at 90% 20%, rgba(138,68,255,0.12), transparent 40%), radial-gradient(circle at 50% 90%, rgba(0,255,191,0.12), transparent 40%)'}} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-center font-['Orbitron'] text-3xl font-bold text-white md:text-4xl">Services</h2>
        <p className="mt-2 text-center text-cyan-100/80">Glowing glass panels with neon borders, engineered for zero trust.</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              style={{ boxShadow: `0 0 40px ${s.color}22` }}
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-70" style={{background:`linear-gradient(120deg, ${s.color}33, transparent 40%)`}} />
              <div className="relative z-10 flex items-center gap-4">
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <s.icon className="h-6 w-6" style={{ color: s.color }} />
                </div>
                <div>
                  <h3 className="font-['Orbitron'] text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-cyan-100/70">Advanced protection with AI-driven heuristics and zero-delay mitigation.</p>
                </div>
              </div>
              <div className="relative z-10 mt-6 h-0.5 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <button className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur-md transition group-hover:border-white/20 group-hover:bg-white/10">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
