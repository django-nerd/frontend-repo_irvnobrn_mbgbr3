import Hero from './components/Hero'
import ThreatDashboard from './components/ThreatDashboard'
import Services from './components/Services'
import Technology from './components/Technology'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#000910] text-white">
      {/* Ambient backdrop glows */}
      <div className="pointer-events-none fixed inset-0 opacity-50" style={{backgroundImage:'radial-gradient(60% 40% at 10% 10%, rgba(0,200,255,0.08), transparent 60%), radial-gradient(50% 35% at 90% 0%, rgba(138,68,255,0.08), transparent 60%)'}} />

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#000910]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-400 shadow-[0_0_20px_rgba(0,200,255,0.5)]" />
            <span className="font-['Orbitron'] text-sm tracking-widest text-white/90">CYBER DEFENSE</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            {[
              { href: '#services', label: 'Services' },
              { href: '#dashboard', label: 'Dashboard' },
              { href: '#technology', label: 'Technology' },
              { href: '#why', label: 'Why Us' },
              { href: '#trust', label: 'Trust' },
              { href: '#contact', label: 'Contact' },
            ].map(i => (
              <a key={i.label} href={i.href} className="text-sm text-cyan-100/80 hover:text-white">{i.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ThreatDashboard />
        <Services />
        <Technology />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#000910]/80 py-8 text-center text-xs text-cyan-100/60 backdrop-blur-md">
        © {new Date().getFullYear()} Cyber Defense. All rights reserved.
      </footer>
    </div>
  )
}

export default App
