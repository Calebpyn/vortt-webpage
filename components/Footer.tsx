'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLang()
  const tx = t[lang].footer

  return (
    <footer className="bg-bg border-t border-card-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        <span className="text-white font-black text-lg tracking-widest">VORTT</span>
        <p className="text-white/30 text-[10px] tracking-widest text-center">{tx.copy}</p>
        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-white text-[10px] font-bold tracking-widest transition-colors">
            {tx.linkedin}
          </a>
          <a href="#" className="text-white/40 hover:text-white text-[10px] font-bold tracking-widest transition-colors">
            {tx.twitter}
          </a>
        </div>
      </div>
    </footer>
  )
}
