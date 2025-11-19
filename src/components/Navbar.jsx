import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-4 py-3">
          <a href="#home" className="text-white font-semibold tracking-wide">
            <span className="text-cyan-300">AI</span> Flames Blue
          </a>

          <nav className="hidden md:flex items-center gap-6 text-cyan-100/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90"><Menu /></button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-2 text-cyan-100/90">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
