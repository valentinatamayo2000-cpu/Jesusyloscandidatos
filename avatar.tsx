'use client';

import { matrizFactual } from '@/data/panorama';

const getCoberturaColor = (nivel: string) => {
  switch (nivel) {
    case 'sí':
      return 'bg-accent text-accent-foreground';
    case 'parcial':
      return 'bg-accent/50 text-accent-foreground';
    case 'no':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-border text-foreground';
  }
};

const getCoberturaLabel = (nivel: string) => {
  switch (nivel) {
    case 'sí':
      return '✓';
    case 'parcial':
      return '◐';
    case 'no':
      return '✗';
    default:
      return '–';
  }
};

export default function MatrizFactual() {
  const candidatos = [
    { id: 'paloma', nombre: 'Paloma Valencia' },
    { id: 'fajardo', nombre: 'Sergio Fajardo' },
    { id: 'espriella', nombre: 'De la Espriella' },
    { id: 'cepeda', nombre: 'Iván Cepeda' },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto border border-border rounded-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Tema</th>
              {candidatos.map((candidato) => (
                <th key={candidato.id} className="px-4 py-3 text-center font-semibold text-foreground">
                  {candidato.nombre}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrizFactual.map((item) => (
              <tr key={item.temaSlug} className="border-b border-border hover:bg-secondary/10 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{item.temaTitulo}</td>
                {candidatos.map((candidato) => {
                  const data = item[candidato.id as keyof typeof item] as { nivel: string; nota: string };
                  return (
                    <td key={`${item.temaSlug}-${candidato.id}`} className="px-4 py-3 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-sm font-bold transition-colors ${getCoberturaColor(
                          data.nivel
                        )}`}
                        title={data.nota}
                      >
                        {getCoberturaLabel(data.nivel)}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-card border border-border rounded-sm p-4 text-sm text-foreground/70">
        <p className="mb-2 font-medium text-foreground">Leyenda:</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent text-accent-foreground flex items-center justify-center rounded-sm text-xs font-bold">
              ✓
            </div>
            <span>Sí — Abordado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent/50 text-accent-foreground flex items-center justify-center rounded-sm text-xs font-bold">
              ◐
            </div>
            <span>Parcial — Parcialmente</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-muted text-muted-foreground flex items-center justify-center rounded-sm text-xs font-bold">
              ✗
            </div>
            <span>No — No abordado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
