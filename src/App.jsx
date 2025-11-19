import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white relative">
      {/* Global background with subtle grain and gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{background:'radial-gradient(1200px_800px_at_50%_-10%, rgba(0,229,255,0.18), rgba(0,123,255,0.12) 40%, transparent 70%)'}} />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
