'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Proyecto</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Un análisis riguroso de las plataformas presidenciales colombianas, comparadas con las enseñanzas de Jesús.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/temas" className="text-foreground/70 hover:text-foreground transition-colors">Temas</a></li>
              <li><a href="/panorama" className="text-foreground/70 hover:text-foreground transition-colors">Panorama</a></li>
              <li><a href="/metodologia" className="text-foreground/70 hover:text-foreground transition-colors">Metodología</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Información</h3>
            <p className="text-foreground/70 text-sm">
              Basado en los Evangelios de Mateo, Marcos, Lucas y Juan.
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/50 text-sm">
            © 2024 Jesús y los Candidatos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
