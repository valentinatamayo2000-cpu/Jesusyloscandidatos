import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const interFont = Inter({ subsets: ["latin"], variable: '--font-inter' });
const sourceSerifFont = Source_Serif_4({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Jesús y los candidatos',
  description: 'Análisis de las plataformas de candidatos presidenciales de Colombia a través de los enseñanzas de Jesús en los Evangelios.',
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
    <html lang="es" className={`${interFont.variable} ${sourceSerifFont.variable}`} style={{
      '--background': '#f7f7f6',
      '--foreground': '#2d2d2d',
      '--card': '#ffffff',
      '--card-foreground': '#2d2d2d',
      '--primary': '#3d3d3d',
      '--primary-foreground': '#f7f7f6',
      '--secondary': '#f2f2f1',
      '--secondary-foreground': '#3d3d3d',
      '--border': '#e5e5e5',
      '--muted': '#ececeb',
      '--muted-foreground': '#808080',
      '--accent': '#b8860b',
      '--accent-foreground': '#ffffff',
    } as React.CSSProperties}>
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
