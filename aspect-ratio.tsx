'use client';

import { ejesPanorama, type NivelResonancia, type NivelTension } from '@/data/panorama';

const getResonanciaStyle = (nivel: NivelResonancia) => {
  switch (nivel) {
    case 'clara':
      return { bg: 'bg-emerald-600', text: 'text-white', label: 'Clara' };
    case 'parcial':
      return { bg: 'bg-emerald-400/70', text: 'text-emerald-900', label: 'Parcial' };
    case 'ninguna':
      return { bg: 'bg-muted', text: 'text-muted-foreground', label: 'Ninguna' };
  }
};

const getTensionStyle = (nivel: NivelTension) => {
  switch (nivel) {
    case 'fuerte':
      return { bg: 'bg-orange-600', text: 'text-white', label: 'Fuerte' };
    case 'parcial':
      return { bg: 'bg-orange-400/70', text: 'text-orange-900', label: 'Parcial' };
    case 'ninguna':
      return { bg: 'bg-muted', text: 'text-muted-foreground', label: 'Ninguna' };
  }
};

export default function EjesResonancia() {
  return (
    <div className="space-y-12">
      {ejesPanorama.map((eje) => (
        <div key={eje.temaSlug} className="border border-border rounded-sm overflow-hidden">
          {/* Header */}
          <div className="bg-secondary/30 px-6 py-4 border-b border-border">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              {eje.temaTitulo}
            </h3>
            <p className="text-foreground/70 text-sm italic">
              {eje.posturaJesus}
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Resonancias */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-600 rounded-full"></span>
                  Resonancias
                </h4>
                <div className="space-y-4">
                  {eje.resonancias.map((pos) => {
                    const style = getResonanciaStyle(pos.nivel);
                    return (
                      <div key={`res-${eje.temaSlug}-${pos.candidatoId}`} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: pos.color }}
                            />
                            <span className="font-medium text-sm text-foreground">{pos.nombre}</span>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${style.bg} ${style.text}`}>
                            {style.label}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/60 leading-relaxed pl-5">
                          {pos.nota}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tensiones */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
                  Tensiones
                </h4>
                <div className="space-y-4">
                  {eje.tensiones.map((pos) => {
                    const style = getTensionStyle(pos.nivel);
                    return (
                      <div key={`ten-${eje.temaSlug}-${pos.candidatoId}`} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: pos.color }}
                            />
                            <span className="font-medium text-sm text-foreground">{pos.nombre}</span>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${style.bg} ${style.text}`}>
                            {style.label}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/60 leading-relaxed pl-5">
                          {pos.nota}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Leyenda */}
      <div className="bg-card border border-border rounded-sm p-6">
        <p className="mb-4 font-semibold text-foreground">Guía de interpretación:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-600 rounded-full"></span>
              Resonancias
            </p>
            <div className="space-y-1 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-600 text-white rounded-sm">Clara</span>
                <span>Alineación profunda con la enseñanza de Jesús</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-400/70 text-emerald-900 rounded-sm">Parcial</span>
                <span>Alineación con matices o limitaciones</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-muted text-muted-foreground rounded-sm">Ninguna</span>
                <span>Sin resonancia identificable</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
              Tensiones
            </p>
            <div className="space-y-1 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-orange-600 text-white rounded-sm">Fuerte</span>
                <span>Contraste significativo con la enseñanza</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-orange-400/70 text-orange-900 rounded-sm">Parcial</span>
                <span>Tensión presente pero matizada</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-muted text-muted-foreground rounded-sm">Ninguna</span>
                <span>Sin tensión identificable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
