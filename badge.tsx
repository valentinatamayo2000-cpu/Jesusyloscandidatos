'use client';

import Link from 'next/link';

interface TemaCardProps {
  id: string;
  titulo: string;
  descripcion: string;
  resumen: string;
}

export default function TemaCard({ id, titulo, descripcion, resumen }: TemaCardProps) {
  return (
    <Link href={`/temas/${id}`}>
      <div className="group h-full border border-border rounded-sm bg-card hover:bg-secondary/30 transition-all duration-300 p-6 cursor-pointer hover:shadow-md">
        <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {titulo}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 leading-relaxed line-clamp-2">
          {descripcion}
        </p>
        <p className="text-foreground/50 text-xs font-medium group-hover:text-accent transition-colors">
          Explorar tema →
        </p>
      </div>
    </Link>
  );
}
