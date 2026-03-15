'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function CaseStudy() {
  const { lang } = useLang()
  const tx = t[lang].caseStudy

  return (
    <section id="case-study" className="bg-bg py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-acid p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left content */}
          <div className="flex-1">
            <span className="inline-block border border-bg/40 text-bg text-[10px] font-bold px-3 py-1 tracking-widest mb-6">
              {tx.badge}
            </span>
            <h2 className="text-bg font-black text-3xl md:text-4xl tracking-tight mb-6 leading-none">
              {tx.title}
            </h2>
            <p className="text-bg/70 text-sm leading-relaxed mb-8 max-w-md">
              {tx.body}
            </p>
            <div className="flex gap-10">
              <div>
                <div className="text-bg font-black text-3xl md:text-4xl tracking-tighter">{tx.stat1}</div>
                <div className="text-bg/60 text-[10px] font-bold tracking-widest mt-1">{tx.stat1Label}</div>
              </div>
              <div>
                <div className="text-bg font-black text-3xl md:text-4xl tracking-tighter">{tx.stat2}</div>
                <div className="text-bg/60 text-[10px] font-bold tracking-widest mt-1">{tx.stat2Label}</div>
              </div>
            </div>
          </div>

          {/* Right: mock report card */}
          <div className="flex-shrink-0 w-full md:w-64">
            <div className="bg-[#aadd00] border border-bg/20 p-4 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-bg text-[10px] font-bold tracking-wider">DAILY_REPORT_V2.PDF</span>
                <span className="text-bg/50 text-[9px]">09:50 AM</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-bg/20 rounded-sm w-full" />
                <div className="h-2 bg-bg/20 rounded-sm w-4/5" />
                <div className="h-2 bg-bg/20 rounded-sm w-3/5" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-bg/20 h-12 flex items-center justify-center">
                  <div className="w-8 h-1 bg-bg/40 rounded" />
                </div>
                <div className="bg-[#88bb00] h-12 flex items-center justify-center">
                  <div className="w-8 h-1 bg-bg/40 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
