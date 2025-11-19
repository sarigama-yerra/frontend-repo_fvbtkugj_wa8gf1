import React from 'react'

const items = new Array(8).fill(0).map((_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  img: `https://images.unsplash.com/photo-1527443224154-c4a3942d3aad?q=80&w=1600&auto=format&fit=crop`,
}))

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_70%_10%,rgba(0,229,255,0.08),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur">
              <div className="absolute pointer-events-none inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background:'radial-gradient(500px_200px_at_20%_10%, rgba(0,229,255,0.25), transparent 60%)'}} />
              <img src={it.img} alt={it.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <div className="text-white font-semibold">{it.title}</div>
                <div className="text-cyan-200/80 text-sm">UI • Web • 3D</div>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500" style={{background:'radial-gradient(circle, rgba(0,229,255,0.5) 0%, rgba(0,123,255,0.3) 60%, transparent 70%)'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
