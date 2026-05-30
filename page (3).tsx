import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
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

        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Jesús y los candidatos
            </h1>
            <p className="text-foreground/70 max-w-2xl text-lg mb-8 leading-relaxed">
              Un análisis riguroso de las plataformas presidenciales colombianas, comparadas con los enseñanzas de Jesús en los Evangelios de Mateo, Marcos, Lucas y Juan.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a 
                href="/temas" 
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Explorar temas
              </a>
              <a 
                href="/panorama" 
                className="px-8 py-3 border border-border bg-card text-foreground font-medium rounded-sm hover:bg-secondary/30 transition-colors"
              >
                Ver panorama
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border rounded-sm bg-card/50">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                8 Temas Centrales
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Análisis detallado de pobreza, salud, educación, justicia, paz, medio ambiente, participación democrática y bien común.
              </p>
            </div>
            <div className="p-8 border border-border rounded-sm bg-card/50">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Perspectiva Evangélica
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Basado en los Evangelios de Mateo, Marcos, Lucas y Juan, con referencias directas al mensaje de Jesús sobre justicia social.
              </p>
            </div>
            <div className="p-8 border border-border rounded-sm bg-card/50">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Rigor Académico
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Investigación meticulosa que compara literalmente los enseñanzas de Jesús con las propuestas de los candidatos presidenciales.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
