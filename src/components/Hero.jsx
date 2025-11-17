import { motion } from 'framer-motion'
import { Shield, ScanLine, ChevronRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const neon = {
  blue: '#00c8ff',
  purple: '#8a44ff',
  emerald: '#00ffbf',
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#000910]">
      {/* Grid + glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_10%,#00c8ff_0%,transparent_25%),radial-gradient(circle_at_80%_20%,#8a44ff_0%,transparent_25%),radial-gradient(circle_at_50%_90%,#00ffbf_0%,transparent_25%)]" />
        <div className="absolute inset-0 mix-blend-screen" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000910]/50 via-[#000910]/40 to-[#000910]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <ScanLine className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-semibold tracking-widest text-cyan-200/80">CYBER DEFENSE OS</span>
          </div>

          <h1 className="mt-6 text-4xl leading-tight text-white md:text-6xl">
            <span className="block font-['Orbitron'] font-extrabold tracking-tight">
              Web Security. <span style={{color: neon.emerald}}>Zero Breaches.</span>
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-base text-cyan-100/80 md:text-lg">
            Next-gen protection for apps, servers, and cloud infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-cyan-100 shadow-[0_0_25px_rgba(0,200,255,0.25)] backdrop-blur-md transition hover:bg-cyan-500/20">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Start Protection</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#scan" className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 backdrop-blur-md transition hover:bg-white/10">
              <ScanLine className="h-5 w-5 text-emerald-300" />
              <span className="font-semibold">Scan Website</span>
            </a>
          </div>
        </motion.div>

        {/* Glass dashboard strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {["Threats Blocked", "Active Shields", "Uptime"].map((label, i) => (
            <div key={label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-60" style={{background:`radial-gradient(60% 100% at 50% 0%, ${i===0?neon.blue:i===1?neon.purple:neon.emerald}33 0%, transparent 60%)`}} />
              <p className="text-sm uppercase tracking-widest text-white/70">{label}</p>
              <p className="mt-2 font-['Orbitron'] text-3xl font-bold text-white">{i===0?"1,284,932":"99.99%"}{i===1?" 24/7":""}</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400" style={{width: i===0? '82%': i===1? '64%':'99%'}} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
