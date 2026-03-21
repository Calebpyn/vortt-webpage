'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Process() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)
  const { tx } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="fade-in mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#888] mb-4">
            {tx.process.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            {tx.process.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {tx.process.steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el }}
              className="fade-in"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#888] mb-6">
                {step.title}
              </p>
              <div className="flex items-start gap-4 mb-5">
                <span className="text-4xl font-extrabold text-[#E5E5E5] leading-none">
                  {step.number}
                </span>
              </div>
              <p className="text-sm text-[#555] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
