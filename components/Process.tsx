'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Process() {
  const { lang } = useLang()
  const tx = t[lang].process

  return (
    <section id="process" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white font-black text-2xl md:text-3xl tracking-widest text-center mb-20">
          {tx.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {tx.steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="w-14 h-14 rounded-full border-2 border-acid flex items-center justify-center mb-6">
                <span className="text-acid font-black text-xl italic">{step.num}</span>
              </div>

              {/* Connector line (desktop only, not on last) */}
              {i < tx.steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}

              <h3 className="text-white font-black text-sm tracking-[0.2em] mb-3">
                {step.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
