'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { tx } = useLanguage()

  return (
    <footer className="border-t border-[#E5E5E5] bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm font-bold text-black">Blnk</span>

        <nav className="flex items-center gap-8">
          <a href="#services" className="text-xs text-[#888] hover:text-black transition-colors">{tx.footer.services}</a>
          <a href="#" className="text-xs text-[#888] hover:text-black transition-colors">{tx.footer.privacy}</a>
          <a href="#contact" className="text-xs text-[#888] hover:text-black transition-colors">{tx.footer.contact}</a>
        </nav>

        <p className="text-xs text-[#888]">{tx.footer.copy}</p>
      </div>
    </footer>
  )
}
