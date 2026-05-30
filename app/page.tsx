export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Jesús y los candidatos</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Análisis de las plataformas de candidatos presidenciales de Colombia a través de las enseñanzas de Jesús en los Evangelios.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">Candidatos</h2>
            <p className="text-muted-foreground">Explora la alineación de cada candidato</p>
          </div>
          
          <div className="p-6 border border-border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">Principios</h2>
            <p className="text-muted-foreground">Descubre los enseñanzas de Jesús</p>
          </div>
          
          <div className="p-6 border border-border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">Comparativas</h2>
            <p className="text-muted-foreground">Visualiza las diferencias</p>
          </div>
        </div>
      </div>
    </main>
  )
}
