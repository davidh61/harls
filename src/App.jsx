import { useState } from 'react'
import GlitchHeader from './components/GlitchHeader'
import MediaGrid from './components/MediaGrid'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-black">
      {/* Effects Overlays */}
      <div className="noise-overlay"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>

      {/* Navigation / Top Bar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <span className="font-mono text-sm tracking-widest">EST. 2024</span>
        <div className="flex gap-6 font-mono text-sm">
          <a href="#work" className="hover:text-[var(--color-accent)] transition-colors">WORK</a>
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">ABOUT</a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        <GlitchHeader text="harls" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 font-mono text-sm text-neutral-500 tracking-[0.5em] uppercase"
        >
          Director / Editor / Photographer
        </motion.p>

        <div className="absolute bottom-10 animate-bounce">
          <span className="text-xs font-mono text-neutral-600">SCROLL_DOWN</span>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen w-full py-20 px-4 md:px-10">
        <div className="mb-12 border-b border-neutral-800 pb-4 flex justify-between items-end">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">Selected Works</h2>
          <span className="font-mono text-xs text-[var(--color-accent)]">/// RECENT_UPLOADS</span>
        </div>
        <MediaGrid />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[50vh] w-full flex flex-col items-center justify-center bg-neutral-950 relative border-t border-neutral-900">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 hover:text-[var(--color-accent)] transition-colors cursor-pointer">
            Let's Create
          </h2>
          <a href="mailto:hello@harls.com" className="text-lg md:text-xl font-mono text-neutral-400 hover:text-white transition-colors">
            hello@harls.com
          </a>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#" className="text-neutral-500 hover:text-[var(--color-accent)] transition-colors">INSTAGRAM</a>
            <a href="#" className="text-neutral-500 hover:text-[var(--color-accent)] transition-colors">VIMEO</a>
            <a href="#" className="text-neutral-500 hover:text-[var(--color-accent)] transition-colors">TWITTER</a>
          </div>
        </div>
        <footer className="absolute bottom-4 text-xs font-mono text-neutral-800">
          © 2025 HARLS. ALL RIGHTS RESERVED.
        </footer>
      </section>
    </div>
  )
}

export default App
