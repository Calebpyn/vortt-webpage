'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang].hero

  return (
    <section className="min-h-screen bg-bg flex flex-col justify-center pt-14">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="font-black leading-none tracking-tightest mb-8">
          <span className="block text-white text-[clamp(4rem,12vw,10rem)] leading-[0.9]">
            {tx.line1}
          </span>
          <span className="block text-white text-[clamp(4rem,12vw,10rem)] leading-[0.9]">
            {tx.line2}
          </span>
          <span className="block text-acid italic text-[clamp(4rem,12vw,10rem)] leading-[0.9]">
            {tx.line3}
          </span>
        </h1>

        <p className="text-white/60 text-sm md:text-base max-w-sm leading-relaxed mb-10">
          {tx.sub}
        </p>

        <a
          href="#services"
          className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest border-b-2 border-white pb-1 hover:text-acid hover:border-acid transition-colors"
        >
          {tx.cta} <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  )
}
