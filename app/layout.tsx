import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/LanguageContext'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VORTT – We Automate. You Grow.',
  description:
    'Deploy elite AI systems that replace repetitive tasks with pure efficiency. Less noise, more scale.',
  openGraph: {
    title: 'VORTT – We Automate. You Grow.',
    description:
      'Deploy elite AI systems that replace repetitive tasks with pure efficiency.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="bg-bg font-sans antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
