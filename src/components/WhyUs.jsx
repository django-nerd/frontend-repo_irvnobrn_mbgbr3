import { motion } from 'framer-motion'
import { Clock, Activity, Shield, BadgeCheck } from 'lucide-react'

const bullets = [
  { icon: Clock, title: '24/7 monitoring' },
  { icon: Activity, title: 'AI-powered anomaly detection' },
  { icon: Shield, title: 'Zero-trust security architecture' },
  { icon: BadgeCheck, title: 'Full compliance (GDPR, SOC2, ISO)' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-[#0a0f14] py-24">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <h2 className="font-['Orbitron'] text-3xl font-bold text-white md:text-4xl">Why Us</h2>
            <p className="mt-2 text-cyan-100/80">Hyper-modern, elite, hacker-proof. Built like a next‑gen cybersecurity OS.</p>
            <ul className="mt-6 space-y-4">
              {bullets.map((b, i) => (
                <li key={b.title} className="flex items-start gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-md"><b.icon className="h-5 w-5 text-emerald-300" /></div>
                  <span className="font-medium text-white">{b.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,255,0.15),transparent_40%)]" />
            <div className="relative h-full w-full rounded-xl border border-white/10 bg-black/40">
              <div className="absolute inset-0 opacity-40" style={{backgroundImage:'linear-gradient(rgba(0,255,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,191,0.08) 1px, transparent 1px)', backgroundSize:'22px 22px'}} />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 shadow-[0_0_40px_rgba(0,255,191,0.25)]" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 animate-ping" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
