import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'We sleep better. Zero incidents since the switch.', author: 'CTO, FinTech Unicorn' },
  { quote: 'Best-in-class mitigation. Invisible latency.', author: 'Head of Platform, Global SaaS' },
  { quote: 'Compliance audits went from stressful to simple.', author: 'CISO, Healthcare Cloud' },
]

export default function Testimonials() {
  return (
    <section id="trust" className="relative bg-[#000910] py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="text-center font-['Orbitron'] text-2xl font-bold text-white md:text-3xl">Trusted by leaders</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{opacity:0, y:16}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:i*0.07}}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-50" style={{boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.06)'}} />
              <p className="text-sm leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-xs text-cyan-200/80">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
