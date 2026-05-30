'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-foreground">Jesús y los candidatos</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Un análisis riguroso de las plataformas presidenciales colombianas a través de los enseñanzas de Jesús en los Evangelios.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/temas" className="text-foreground/70 hover:text-primary transition-colors">Temas</a></li>
              <li><a href="/panorama" className="text-foreground/70 hover:text-primary transition-colors">Panorama</a></li>
              <li><a href="/metodologia" className="text-foreground/70 hover:text-primary transition-colors">Metodología</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Información</h4>
            <p className="text-foreground/70 text-sm">
              Creado con rigor académico y propósito público.
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex items-center justify-between text-xs text-foreground/50">
          <p>&copy; {currentYear} Jesús y los candidatos. Todos los derechos reservados.</p>
          <p>Basado en los Evangelios de Mateo, Marcos, Lucas y Juan.</p>
        </div>
      </div>
    </footer>
  );
}
