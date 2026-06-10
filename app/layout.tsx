import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Poppins, Cairo } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic'],
  weight: ['700', '800'],
})

export const metadata: Metadata = {
  title: 'Moul Pounj - Le spécialiste du sommeil au Maroc',
  description: 'Dormez mieux. Vivez mieux. Matelas fabriqués au Maroc, livrés directement depuis nos usines.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${poppins.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased bg-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
