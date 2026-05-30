'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-foreground font-serif text-2xl font-bold hover:text-primary transition-colors">
          Jesús y los candidatos
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/temas" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            Temas
          </Link>
          <Link href="/panorama" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            Panorama
          </Link>
          <Link href="/metodologia" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
            Metodología
          </Link>
        </div>
      </div>
    </nav>
  );
}
