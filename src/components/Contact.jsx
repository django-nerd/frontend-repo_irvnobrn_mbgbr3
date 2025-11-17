import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0a0f14] py-24">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 10%, rgba(0,200,255,0.12), transparent 40%), radial-gradient(circle at 80% 20%, rgba(138,68,255,0.1), transparent 40%)'}} />
      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-['Orbitron'] text-3xl font-bold text-white md:text-4xl">Ready to secure everything?</h2>
            <p className="mt-2 text-cyan-100/80">Get a free assessment. Enter your website and we’ll run a zero‑trust scan.</p>
          </div>

          <motion.form initial={{opacity:0, y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-cyan-200/70">Full Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-cyan-200/70">Company Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="security@company.com" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-cyan-200/70">Website</label>
                <input type="url" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" placeholder="https://yourdomain.com" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-cyan-200/70">Notes</label>
                <textarea rows="3" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Infrastructure, concerns, timelines..." />
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 font-semibold text-emerald-200 shadow-[0_0_25px_rgba(0,255,191,0.25)] backdrop-blur-md transition hover:bg-emerald-400/20">Request Assessment</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
