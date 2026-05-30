import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { temas } from '@/data/temas';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const tema = temas.find((t) => t.id === params.id);
  
  if (!tema) return {};

  return {
    title: `${tema.titulo} - Jesús y los candidatos`,
    description: tema.descripcion,
  };
}

export default function TemaDetailPage({ params }: { params: { id: string } }) {
  const tema = temas.find((t) => t.id === params.id);
  const temaIndex = temas.findIndex((t) => t.id === params.id);
  const prevTema = temaIndex > 0 ? temas[temaIndex - 1] : null;
  const nextTema = temaIndex < temas.length - 1 ? temas[temaIndex + 1] : null;

  if (!tema) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          <header className="mb-12 border-b border-border pb-8">
            <Link href="/temas" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium mb-4 inline-block">
              ← Volver a temas
            </Link>
            <h1 className="font-serif text-5xl font-bold text-foreground mb-6">
              {tema.titulo}
            </h1>
            <p className="text-foreground/70 text-xl leading-relaxed max-w-3xl">
              {tema.descripcion}
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-neutral max-w-none mb-16">
            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Perspectiva de Jesús
              </h2>
              <div className="bg-secondary/20 border border-border rounded-sm p-8 mb-8">
                <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                  {tema.perspectiva_jesus}
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Referencias Evangélicas
              </h2>
              <div className="space-y-4">
                {tema.referencias_biblia.map((ref, idx) => (
                  <div key={idx} className="border-l-4 border-accent pl-6 py-3">
                    <p className="font-semibold text-foreground mb-2">{ref}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Análisis de Propuestas
              </h2>
              <div className="space-y-6">
                {tema.candidatos.map((candidato, idx) => (
                  <div key={idx} className="border border-border rounded-sm p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {candidato.nombre}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Propuesta</h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {candidato.propuesta}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Alineación con Jesús</h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {candidato.alineacion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Conclusión
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {tema.conclusion}
              </p>
            </section>
          </div>

          {/* Navigation */}
          <div className="border-t border-border pt-12 flex items-center justify-between">
            {prevTema ? (
              <Link href={`/temas/${prevTema.id}`} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <span>←</span>
                <span>{prevTema.titulo}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextTema ? (
              <Link href={`/temas/${nextTema.id}`} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <span>{nextTema.titulo}</span>
                <span>→</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
