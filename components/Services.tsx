'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const { tx } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const [bot, reservations, report, reviews, leads, custom] = tx.services.cards

  return (
    <section id="services" className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="fade-in mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#888] mb-4">
            {tx.services.eyebrow}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              {tx.services.title}
            </h2>
            <p className="text-sm text-[#888] md:text-right md:max-w-xs">
              {tx.services.subtitle}
            </p>
          </div>
        </div>

        {/* ── ROW 1: AI Reply Bot (wide) + Reservations System (dark, featured) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* AI Reply Bot — spans 2 cols */}
          <div
            ref={(el) => { cardRefs.current[0] = el }}
            className="fade-in md:col-span-2 bg-white border border-[#E5E5E5] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#888] mb-3">
                {bot.tag}
              </p>
              <h3 className="text-xl font-bold text-black mb-2">{bot.subtitle}</h3>
              <p className="text-sm text-[#555] leading-relaxed max-w-sm">{bot.description}</p>
            </div>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="text-3xl font-extrabold text-black">{bot.price}</span>
              <span className="text-xs text-[#888] uppercase tracking-wider">{tx.services.setup}</span>
              <span className="text-base font-semibold text-black ml-6">{bot.monthly}</span>
              <span className="text-xs text-[#888] uppercase tracking-wider">month</span>
            </div>
          </div>

          {/* Reservations System — spans 1 col, dark featured card */}
          <div
            ref={(el) => { cardRefs.current[1] = el }}
            className="fade-in md:col-span-1 bg-black border border-black p-8 flex flex-col justify-between min-h-[220px]"
            style={{ transitionDelay: '80ms' }}
          >
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-3">
                {reservations.tag}
              </p>
              <h3 className="text-xl font-bold text-white mb-2">{reservations.subtitle}</h3>
              <p className="text-sm text-[#AAA] leading-relaxed">{reservations.description}</p>
            </div>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-white">{reservations.price}</span>
              <span className="text-base font-semibold text-[#AAA]">{reservations.monthly}</span>
            </div>
          </div>
        </div>

        {/* ── ROW 2: Three equal small cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[report, reviews, leads].map((s, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i + 2] = el }}
              className="fade-in bg-white border border-[#E5E5E5] p-6 flex flex-col justify-between min-h-[160px]"
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#888] mb-2">
                  {s.tag}
                </p>
                <p className="text-sm text-[#555] leading-relaxed">{s.description}</p>
              </div>
              <div className="mt-5 text-sm font-semibold text-black">
                {s.price} + {s.monthly}
              </div>
            </div>
          ))}
        </div>

        {/* ── ROW 3: Custom Flow — full width, light gray ── */}
        <div
          ref={(el) => { cardRefs.current[5] = el }}
          className="fade-in bg-[#F0F0F0] border border-black p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 min-h-[100px]"
          style={{ transitionDelay: '400ms' }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#888] mb-2">
              {custom.tag}
            </p>
            <h3 className="text-xl font-bold text-black mb-1">{custom.subtitle}</h3>
            <p className="text-sm text-[#555]">{custom.description}</p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-block border border-black bg-white text-black text-xs font-bold px-6 py-3 tracking-widest uppercase hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            >
              {tx.services.requestQuote.replace('→ ', '')}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
