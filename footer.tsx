import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import MatrizFactual from '@/components/panorama/matriz-factual';
import EjesResonancia from '@/components/panorama/ejes-resonancia';

export const metadata = {
  title: 'Panorama - Jesús y los candidatos',
  description: 'Vista panorámica de la cobertura de temas y resonancia con los enseñanzas de Jesús.',
};

export default function PanoramaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1">
        {/* Disclaimer */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <p className="text-sm md:text-base leading-relaxed text-center">
              <strong>Nota importante:</strong> Este ejercicio no pretende evaluar el cristianismo de cada candidato. Es un ejercicio de comparar los programas con los discursos y acciones de Jesús. Se hizo con ayuda de la IA y no se le indicó preferencia por ningún candidato. No pretende tener 100% de objetividad, no es un ejercicio ni teológico ni político en profundidad. Es más una comparación discursiva y actitudinal desde los planes de gobierno; no se incluyen discursos ni declaraciones.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Panorama
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl">
              Visualización de cómo los candidatos presidenciales abordan cada tema en relación con las enseñanzas de Jesús.
            </p>
          </div>
        </section>

        {/* Matriz Factual */}
        <section className="max-w-6xl mx-auto px-4 py-16 border-b border-border">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Matriz de Cobertura
          </h2>
          <p className="text-foreground/70 mb-8">
            Indica qué candidatos abordan cada tema en sus plataformas presidenciales.
          </p>
          <MatrizFactual />
        </section>

        {/* Ejes de Resonancia */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Ejes de Resonancia
          </h2>
          <p className="text-foreground/70 mb-8">
            Medición del grado de alineación entre las propuestas de cada candidato y los valores que Jesús enfatizó en los Evangelios.
          </p>
          <EjesResonancia />
        </section>
      </div>

      <Footer />
    </main>
  );
}
