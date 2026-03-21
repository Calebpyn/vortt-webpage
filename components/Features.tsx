'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Features() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
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
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#F5F5F5] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {tx.features.map((f, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el }}
            className="fade-in"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="text-2xl text-black block mb-5">{f.icon}</span>
            <h3 className="text-sm font-bold tracking-widest uppercase text-black mb-3">{f.title}</h3>
            <p className="text-sm text-[#555] leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
