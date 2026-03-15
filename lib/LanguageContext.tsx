'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang } from './translations'

interface LangContextType {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangContextType>({ lang: 'en', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang((l) => (l === 'en' ? 'es' : 'en'))
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
