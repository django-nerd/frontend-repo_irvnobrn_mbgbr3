import { motion } from 'framer-motion'
import { Cpu, Network, Brain } from 'lucide-react'

export default function Technology() {
  return (
    <section id="technology" className="relative bg-[#000910] py-24">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(60% 40% at 50% 0%, rgba(0,200,255,0.12), transparent 60%)'}} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-center font-['Orbitron'] text-3xl font-bold text-white md:text-4xl">Technology</h2>
        <p className="mt-2 text-center text-cyan-100/80">Futuristic diagrams, cyber-mesh networks, AI brain nodes.</p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[{icon:Cpu,title:'Edge Compute Core',desc:'Low-latency inspection at the edge with WASM sandboxes.'},{icon:Network,title:'Cyber Mesh Network',desc:'Self-healing, encrypted overlay with quantum-safe handshakes.'},{icon:Brain,title:'AI Threat Engine',desc:'Neural anomaly graphs trained on billions of signals.'}].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(0,200,255,0.12), rgba(138,68,255,0.12), rgba(0,255,191,0.12), rgba(0,200,255,0.12))'}} />
              <div className="relative z-10">
                <b.icon className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 font-['Orbitron'] text-xl text-white">{b.title}</h3>
                <p className="mt-2 text-cyan-100/70">{b.desc}</p>
                <div className="mt-6 h-32 w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 p-2">
                  <div className="h-full w-full animate-pulse rounded-lg bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
