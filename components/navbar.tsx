'use client'

import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif font-bold text-xl text-foreground">
          Jesús y los Candidatos
        </Link>
        <ul className="hidden md:flex gap-8 items-center">
          <li><Link href="/temas" className="text-foreground/70 hover:text-foreground transition-colors">Temas</Link></li>
          <li><Link href="/panorama" className="text-foreground/70 hover:text-foreground transition-colors">Panorama</Link></li>
          <li><Link href="/candidatos" className="text-foreground/70 hover:text-foreground transition-colors">Candidatos</Link></li>
          <li><Link href="/metodologia" className="text-foreground/70 hover:text-foreground transition-colors">Metodología</Link></li>
        </ul>
      </div>
    </nav>
  )
}
