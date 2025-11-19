import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const roles = [
  'Web Developer',
  'UI/UX Designer',
  'CAD/BIM Drafter',
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1F]" />
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(0,229,255,0.18),transparent_60%),radial-gradient(900px_500px_at_80%_20%,rgba(0,123,255,0.16),transparent_60%),radial-gradient(700px_500px_at_50%_80%,rgba(0,229,255,0.10),transparent_60%)]" />

      {/* AI Flame decorative shapes */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-30" style={{background: 'conic-gradient(from 160deg at 50% 50%, rgba(0,229,255,0.0), rgba(0,229,255,0.45), rgba(0,123,255,0.35), rgba(255,255,255,0.05), rgba(0,229,255,0.0))'}} />
      <div className="pointer-events-none absolute -bottom-48 -right-40 w-[800px] h-[800px] rounded-full blur-3xl opacity-25" style={{background: 'conic-gradient(from 320deg at 50% 50%, rgba(0,123,255,0.0), rgba(0,123,255,0.5), rgba(0,229,255,0.35), rgba(255,255,255,0.05), rgba(0,123,255,0.0))'}} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/20 text-cyan-200 text-xs tracking-wide backdrop-blur">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            Futuristic Portfolio • AI Flames Blue
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.35)]">Your Name</span>
          </h1>
          <p className="mt-4 text-cyan-100/90 text-base sm:text-lg max-w-xl">
            Building immersive web experiences and clean product interfaces with precision and creativity.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-cyan-200/80">
            {roles.map((r, i) => (
              <span key={r} className="px-3 py-1 rounded-full bg-white/5 border border-cyan-400/20">
                {r}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a href="#contact" className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-medium text-[#0A0F1F] bg-[linear-gradient(90deg,#00E5FF_0%,#007BFF_100%)] shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.55)] transition-shadow">
              Hire Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(0,229,255,0.15),0_0_60px_rgba(0,229,255,0.15)_inset] bg-gradient-to-b from-white/5 to-white/[0.02]">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_10%,rgba(0,229,255,0.15),transparent_60%)]" />
        </div>
      </div>
    </section>
  )
}
