import React from 'react'

const steps = [
  { year: '2024 – Present', role: 'Senior Frontend Engineer', place: 'NeoTech Labs' },
  { year: '2022 – 2024', role: 'UI/UX Designer', place: 'Pixel Forge' },
  { year: '2020 – 2022', role: 'CAD/BIM Drafter', place: 'BuildMatrix' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">Experience</h2>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/60 to-transparent" />

          <div className="space-y-10">
            {steps.map((s, idx) => (
              <div key={idx} className={`relative grid grid-cols-1 sm:grid-cols-2 gap-6 ${idx % 2 === 0 ? '' : 'sm:direction-rtl'}`}>
                <div className={`sm:col-start-1 ${idx % 2 !== 0 ? 'sm:order-2' : ''}`}>
                  <div className="rounded-2xl p-5 bg-white/[0.04] border border-white/10">
                    <div className="text-cyan-300/90 text-sm">{s.year}</div>
                    <div className="text-white font-semibold">{s.role}</div>
                    <div className="text-cyan-200/80 text-sm">{s.place}</div>
                  </div>
                </div>
                <div className={`hidden sm:block relative ${idx % 2 !== 0 ? 'order-1' : ''}`}>
                  <div className="absolute -left-[5px] top-6 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
