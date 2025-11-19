import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_10%_10%,rgba(0,229,255,0.07),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full max-w-sm mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 shadow-[0_0_25px_rgba(0,229,255,0.25)]">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur">
              <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop" alt="Profile" className="w-full h-80 object-cover" />
            </div>
          </div>
          <div className="pointer-events-none absolute -z-0 -bottom-8 -right-8 w-52 h-52 rounded-full blur-2xl opacity-40" style={{background:'radial-gradient(circle, rgba(0,229,255,0.4) 0%, rgba(0,123,255,0.2) 60%, transparent 70%)'}} />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-cyan-100/90 leading-relaxed">
            I craft engaging digital products with a blend of aesthetic finesse and robust engineering. My process is driven by research, rapid prototyping, and pixel-perfect execution.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {label: 'Experience', value: '6+ Years'},
              {label: 'Projects', value: '40+ Completed'},
              {label: 'Location', value: 'Remote / On-site'},
              {label: 'Focus', value: 'Web • UI/UX • BIM'},
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-4 bg-white/[0.04] border border-white/10 text-cyan-100/90">
                <div className="text-xs uppercase tracking-wider text-cyan-300/80">{item.label}</div>
                <div className="text-lg font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
