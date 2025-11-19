import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_20%,rgba(0,229,255,0.06),transparent_70%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Get in touch</h2>
        <form className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-cyan-200/80 mb-2">Name</label>
              <input type="text" className="w-full rounded-xl bg-[#0A0F1F]/60 border border-cyan-400/20 focus:border-cyan-400/50 outline-none text-white px-4 py-3" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-cyan-200/80 mb-2">Email</label>
              <input type="email" className="w-full rounded-xl bg-[#0A0F1F]/60 border border-cyan-400/20 focus:border-cyan-400/50 outline-none text-white px-4 py-3" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-cyan-200/80 mb-2">Message</label>
            <textarea rows="5" className="w-full rounded-xl bg-[#0A0F1F]/60 border border-cyan-400/20 focus:border-cyan-400/50 outline-none text-white px-4 py-3" placeholder="Tell me about your project..." />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-cyan-200/60">I’ll reply within 24–48 hours.</p>
            <button type="submit" className="rounded-full px-6 py-3 text-[#0A0F1F] font-medium bg-[linear-gradient(90deg,#00E5FF_0%,#007BFF_100%)] shadow-[0_0_25px_rgba(0,229,255,0.35)]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
