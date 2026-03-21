'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { t, Lang } from './translations'

type LanguageContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  tx: typeof t['en']
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LanguageContext.Provider value={{ lang, setLang, tx: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
