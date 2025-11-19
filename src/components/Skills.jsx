import React from 'react'
import { Cpu, Code, PenTool, Database } from 'lucide-react'

const skills = [
  { name: 'React / Vite', level: 90, icon: Code },
  { name: 'UI/UX & Prototyping', level: 85, icon: PenTool },
  { name: 'Three.js / 3D', level: 70, icon: Cpu },
  { name: 'CAD/BIM (Revit, AutoCAD)', level: 88, icon: Database },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ name, level, icon: Icon }) => (
            <div key={name} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-6">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/15 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{name}</div>
                    <div className="text-cyan-200/70 text-sm">Proficiency</div>
                  </div>
                </div>
                <div className="text-cyan-200/80 font-semibold">{level}%</div>
              </div>

              <div className="relative mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(0,229,255,0.5)]" style={{ width: `${level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
