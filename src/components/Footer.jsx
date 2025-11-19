import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-cyan-200/70">
        <div>© {new Date().getFullYear()} AI Flames Blue — All rights reserved.</div>
        <div className="text-sm">Built with love and neon.</div>
      </div>
    </footer>
  )
}
