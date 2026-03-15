'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

const WHATSAPP_NUMBER = '521TUNUMERO' // Replace with actual number e.g. 5215512345678

export default function CTA() {
  const { lang } = useLang()
  const tx = t[lang].cta

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <section id="contact" className="bg-bg py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-white font-black italic text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-tightest mb-12">
          {tx.title}
        </h2>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-acid text-bg font-black text-sm md:text-base tracking-[0.2em] px-12 py-5 hover:bg-acid-dark transition-colors"
        >
          {tx.button}
        </a>
      </div>
    </section>
  )
}
