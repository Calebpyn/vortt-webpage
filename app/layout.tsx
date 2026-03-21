import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blnk — Automate the invisible.',
  description: 'We connect AI to your business. Customer service, reservations, reports and lead follow-up — running automatically, 24 hours a day.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
