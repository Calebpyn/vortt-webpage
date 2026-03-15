'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const tx = t[lang].nav
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white font-black text-xl tracking-wider">
          VORTT
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/70 hover:text-white text-xs font-bold tracking-widest transition-colors">
            {tx.services}
          </a>
          <a href="#process" className="text-white/70 hover:text-white text-xs font-bold tracking-widest transition-colors">
            {tx.process}
          </a>
          <a href="#case-study" className="text-white/70 hover:text-white text-xs font-bold tracking-widest transition-colors">
            {tx.caseStudy}
          </a>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="border border-white/30 text-white text-xs font-bold px-3 py-1 tracking-widest hover:border-acid hover:text-acid transition-colors"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a
            href="#contact"
            className="bg-acid text-bg text-xs font-black px-4 py-2 tracking-widest hover:bg-acid-dark transition-colors hidden md:block"
          >
            {tx.getStarted}
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-card-border px-6 py-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-xs font-bold tracking-widest">
            {tx.services}
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-xs font-bold tracking-widest">
            {tx.process}
          </a>
          <a href="#case-study" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-xs font-bold tracking-widest">
            {tx.caseStudy}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-acid text-bg text-xs font-black px-4 py-2 tracking-widest text-center"
          >
            {tx.getStarted}
          </a>
        </div>
      )}
    </nav>
  )
}
