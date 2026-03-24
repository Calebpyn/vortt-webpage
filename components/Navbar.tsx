'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, tx } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-black tracking-tight">Blnk</a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-[#1D1D1F] hover:text-black transition-colors">{tx.nav.services}</a>
          <a href="#process" className="text-sm text-[#1D1D1F] hover:text-black transition-colors">{tx.nav.process}</a>
          <a href="#services" className="text-sm text-[#1D1D1F] hover:text-black transition-colors">{tx.nav.pricing}</a>

          {/* Language toggle */}
          <div className="flex items-center gap-0 text-xs font-semibold border border-[#E5E5E5] rounded-sm overflow-hidden">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-black text-white' : 'bg-white text-[#888] hover:text-black'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1.5 transition-colors ${lang === 'es' ? 'bg-black text-white' : 'bg-white text-[#888] hover:text-black'}`}
            >
              ES
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-[#1D1D1F] transition-colors"
          >
            {tx.nav.cta}
          </a>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language toggle mobile */}
          <div className="flex items-center text-xs font-semibold border border-[#E5E5E5] rounded-sm overflow-hidden">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-black text-white' : 'bg-white text-[#888]'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-2.5 py-1 transition-colors ${lang === 'es' ? 'bg-black text-white' : 'bg-white text-[#888]'}`}
            >
              ES
            </button>
          </div>

          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#services" className="text-sm text-[#1D1D1F]" onClick={() => setMenuOpen(false)}>{tx.nav.services}</a>
            <a href="#process" className="text-sm text-[#1D1D1F]" onClick={() => setMenuOpen(false)}>{tx.nav.process}</a>
            <a href="#services" className="text-sm text-[#1D1D1F]" onClick={() => setMenuOpen(false)}>{tx.nav.pricing}</a>
            <a
              href="#contact"
              className="bg-black text-white text-sm font-medium px-5 py-2.5 text-center rounded-sm"
              onClick={() => setMenuOpen(false)}
            >
              {tx.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
