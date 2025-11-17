import { motion } from 'framer-motion'
import { Activity, ShieldAlert, TerminalSquare } from 'lucide-react'

function Radar() {
  return (
    <div className="relative h-64 w-64 rounded-full border border-emerald-300/30 bg-gradient-to-b from-emerald-400/5 to-cyan-400/5 shadow-[0_0_40px_rgba(0,255,191,0.2)]">
      <div className="absolute inset-0 rounded-full border border-emerald-300/30" />
      <div className="absolute inset-6 rounded-full border border-emerald-300/20" />
      <div className="absolute inset-12 rounded-full border border-emerald-300/10" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[52%] w-px origin-top -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-emerald-300 to-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
      />
      {[[-35, -10], [20, 35], [-15, 25], [30, -25]].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(0,255,191,0.8)]"
          style={{ left: `calc(50% + ${pos[0]}%)`, top: `calc(50% + ${pos[1]}%)` }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.5 }}
        />
      ))}
    </div>
  )
}

const cards = [
  { label: 'Total Requests', value: '54.2M', delta: '+3.4%' },
  { label: 'Threats Blocked', value: '1.28M', delta: '+12.1%' },
  { label: 'Avg Latency', value: '18ms', delta: '-2.3%' },
]

export default function ThreatDashboard() {
  return (
    <section id="dashboard" className="relative bg-[#0a0f14] py-24">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(40% 30% at 20% 0%, rgba(0,200,255,0.18), transparent 60%)'}} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-['Orbitron'] text-3xl font-bold text-white md:text-4xl">Threat Monitoring</h2>
            <p className="mt-2 text-cyan-100/80">Live analytics, holographic radar, and scanning telemetry in a glass console.</p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cards.map((c) => (
                <div key={c.label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <span className="text-[10px] uppercase tracking-widest text-white/70">{c.label}</span>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="font-['Orbitron'] text-2xl text-white">{c.value}</span>
                    <span className="text-xs text-emerald-300">{c.delta}</span>
                  </div>
                  <div className="mt-4 h-8 w-full overflow-hidden rounded bg-black/30">
                    <div className="h-full w-full animate-pulse bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-emerald-500/20" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-white/90"><Activity className="h-4 w-4 text-cyan-300" /><span className="text-xs">Anomalies</span></div>
                <div className="mt-3 h-24 w-full overflow-hidden rounded bg-black/40">
                  <div className="h-full w-full animate-[pulse_1.8s_ease-in-out_infinite] bg-gradient-to-b from-cyan-400/15 to-transparent" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-white/90"><ShieldAlert className="h-4 w-4 text-fuchsia-300" /><span className="text-xs">WAF Events</span></div>
                <div className="mt-3 flex flex-col gap-2 text-xs text-cyan-100/80">
                  <div className="rounded border border-white/10 bg-black/40 px-2 py-1">SQLi attempt • blocked</div>
                  <div className="rounded border border-white/10 bg-black/40 px-2 py-1">XSS payload • neutralized</div>
                  <div className="rounded border border-white/10 bg-black/40 px-2 py-1">Botnet surge • rate-limited</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <Radar />
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="mb-2 flex items-center gap-2 text-white/90"><TerminalSquare className="h-4 w-4 text-emerald-300" /><span className="text-xs">Scanner</span></div>
              <div className="flex gap-2">
                <input className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="https://yourdomain.com" />
                <button className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 text-cyan-100 backdrop-blur-md transition hover:bg-cyan-400/20">Scan</button>
              </div>
              <div className="mt-3 h-10 w-full overflow-hidden rounded bg-black/30">
                <div className="h-full w-full animate-pulse bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-fuchsia-500/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
