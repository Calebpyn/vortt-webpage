'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const { tx } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div ref={ref} className="fade-in max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black leading-[1.05] mb-8">
          {tx.cta.headline1}{' '}
          <span className="italic font-light text-[#AAAAAA]">{tx.cta.headline2}</span>
        </h2>
        <p className="text-base text-[#555] mb-12 leading-relaxed">
          {tx.cta.sub}
        </p>
        <a
          href="mailto:hello@blnk.ai"
          className="inline-block bg-black text-white text-sm font-semibold px-10 py-4 tracking-widest uppercase hover:bg-[#1D1D1F] transition-colors"
        >
          {tx.cta.button}
        </a>
      </div>
    </section>
  )
}
