import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import TemaCard from '@/components/tema-card';
import { temas } from '@/data/temas';

export const metadata = {
  title: 'Temas - Jesús y los candidatos',
  description: 'Explora los 8 temas centrales del análisis de las plataformas presidenciales colombianas.',
};

export default function TemasPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1">
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Temas Centrales
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl">
              Ocho ejes temáticos fundamentales en los que Jesús enfatizó valores específicos según los Evangelios, y cómo se alinean o contrastan con las propuestas de los candidatos presidenciales colombianos.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {temas.map((tema) => (
              <TemaCard
                key={tema.id}
                id={tema.id}
                titulo={tema.titulo}
                descripcion={tema.descripcion}
                resumen={tema.resumen}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
