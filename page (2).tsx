import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Metodología - Jesús y los candidatos',
  description: 'Explora la metodología rigurosa utilizada para este análisis académico.',
};

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12 border-b border-border pb-8">
            <h1 className="font-serif text-5xl font-bold text-foreground mb-6">
              Metodología
            </h1>
            <p className="text-foreground/70 text-xl leading-relaxed">
              Este análisis combina rigor académico con perspectiva teológica para comparar sistemáticamente las plataformas presidenciales colombianas con los enseñanzas de Jesús en los Evangelios.
            </p>
          </header>

          <div className="prose prose-neutral max-w-none space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Marco Teórico
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Este estudio se fundamenta en una lectura rigurosa de los Evangelios de Mateo, Marcos, Lucas y Juan, enfocándose en los enseñanzas de Jesús sobre justicia social, dignidad humana y el bien común. Se identificaron ocho temas centrales que constituyen el núcleo del mensaje evangélico sobre cómo organizar la sociedad.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Estos temas no son caprichosos, sino que emergen de un análisis sistemático de las prioridades que Jesús enfatizó en sus enseñanzas, parábolas y acciones registradas en los Evangelios.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Los Ocho Temas Centrales
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">1. Pobreza y Riqueza</h3>
                  <p className="text-foreground/70 text-sm">
                    Jesús enseñó sobre la renunciación de riquezas injustas y el cuidado de los pobres como prioridad moral.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">2. Salud y Sanación</h3>
                  <p className="text-foreground/70 text-sm">
                    El cuidado de la salud es un acto de compasión y responsabilidad social central en la misión de Jesús.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">3. Educación y Sabiduría</h3>
                  <p className="text-foreground/70 text-sm">
                    Jesús enfatizó la importancia del conocimiento, la comprensión y el aprendizaje espiritual y moral.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">4. Justicia y Equidad</h3>
                  <p className="text-foreground/70 text-sm">
                    La justicia imparcial, la protección de los vulnerables y el trato equitativo son pilares centrales.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">5. Paz y Reconciliación</h3>
                  <p className="text-foreground/70 text-sm">
                    Jesús enseñó la resolución pacífica de conflictos, el perdón y la construcción de comunidades reconciliadas.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">6. Medio Ambiente y Creación</h3>
                  <p className="text-foreground/70 text-sm">
                    El cuidado de la creación como responsabilidad humana es implícito en la visión de Jesús sobre el reino de Dios.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">7. Participación Democrática</h3>
                  <p className="text-foreground/70 text-sm">
                    La dignidad de cada persona implica el derecho a participar en las decisiones que afectan sus vidas.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-3">
                  <h3 className="font-semibold text-foreground mb-2">8. Bien Común</h3>
                  <p className="text-foreground/70 text-sm">
                    La búsqueda del bienestar colectivo, no solo individual, es el telos del mensaje evangélico.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Proceso de Análisis
              </h2>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-foreground/80">
                  <span className="font-semibold">Recopilación de datos:</span> Se revisaron exhaustivamente las plataformas presidenciales publicadas de cada candidato.
                </li>
                <li className="text-foreground/80">
                  <span className="font-semibold">Mapeo de temas:</span> Para cada tema, se identificaron las propuestas específicas de cada candidato.
                </li>
                <li className="text-foreground/80">
                  <span className="font-semibold">Análisis evangélico:</span> Se compararon las propuestas con los enseñanzas de Jesús en los Evangelios.
                </li>
                <li className="text-foreground/80">
                  <span className="font-semibold">Evaluación de resonancia:</span> Se cuantificó el grado de alineación entre cada propuesta y los valores evangélicos identificados.
                </li>
                <li className="text-foreground/80">
                  <span className="font-semibold">Síntesis y presentación:</span> Los hallazgos se presentan en formato accesible pero riguroso.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Criterios de Evaluación
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Para cada propuesta, evaluamos:
              </p>
              <ul className="space-y-3 list-disc list-inside text-foreground/80">
                <li><span className="font-semibold">Congruencia:</span> ¿Está la propuesta en línea con los valores evangélicos identificados?</li>
                <li><span className="font-semibold">Profundidad:</span> ¿Aborda la propuesta las raíces del problema que Jesús se propuso resolver?</li>
                <li><span className="font-semibold">Universalidad:</span> ¿Beneficia la propuesta a todos, especialmente a los más vulnerables?</li>
                <li><span className="font-semibold">Viabilidad:</span> ¿Es la propuesta realista y prácticamente implementable?</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Limitaciones y Caveat
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Este análisis es un ejercicio académico y teológico, no una declaración política o electoral. Reconocemos que:
              </p>
              <ul className="space-y-3 list-disc list-inside text-foreground/80">
                <li>La interpretación de los Evangelios es compleja y existen múltiples perspectivas válidas.</li>
                <li>Los candidatos tienen posiciones complejas que no pueden reducirse completamente a un número.</li>
                <li>El análisis refleja la lectura de los Evangelios por parte del autor, sujeta a sesgos inevitables.</li>
                <li>Este trabajo es una herramienta para la reflexión, no una recomendación de voto.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Fuentes Primarias
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Este análisis se fundamenta en los cuatro Evangelios canónicos del Nuevo Testamento cristiano, considerados registros fundamentales de la vida, enseñanzas y ministerio de Jesús de Nazaret. Se han consultado múltiples traducciones y comentarios bíblicos autorizados para asegurar la precisión de la interpretación.
              </p>
            </section>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
