'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Services() {
  const { lang } = useLang()
  const tx = t[lang].services

  return (
    <section id="services" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white font-black italic text-2xl md:text-3xl tracking-widest mb-12">
          {tx.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tx.items.map((item) => (
            <div
              key={item.num}
              className="bg-card border border-card-border p-8 hover:border-acid/30 transition-colors group"
            >
              <span className="inline-block bg-acid text-bg text-xs font-black px-2 py-1 mb-5 tracking-wider">
                {item.num}
              </span>
              <h3 className="text-white font-black text-lg tracking-widest mb-3 group-hover:text-acid transition-colors">
                {item.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
