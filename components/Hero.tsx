'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { tx } = useLanguage()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add('visible'), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <div ref={ref} className="fade-in max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#888] mb-10">
          {tx.hero.eyebrow}
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black leading-[1.0] mb-8">
          {tx.hero.headline1}{' '}
          <span className="italic font-light text-[#AAAAAA]">{tx.hero.headline2}</span>
        </h1>

        <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-xl mx-auto mb-12">
          {tx.hero.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-black text-white text-sm font-semibold px-8 py-4 tracking-wider uppercase hover:bg-[#1D1D1F] transition-colors"
          >
            {tx.hero.cta1}
          </a>
          <a
            href="#process"
            className="border border-black text-black text-sm font-semibold px-8 py-4 tracking-wider uppercase hover:bg-[#F5F5F5] transition-colors"
          >
            {tx.hero.cta2}
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center gap-2">
          <p className="text-xs text-[#CCC] tracking-widest uppercase">{tx.hero.scroll}</p>
          <div className="w-px h-12 bg-gradient-to-b from-[#CCC] to-transparent" />
        </div>
      </div>
    </section>
  )
}
