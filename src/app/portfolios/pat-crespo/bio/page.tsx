import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bio",
  description: "Biografía de Patricia Crespo Alcalá — poeta, escritora y crítica literaria valenciana",
}

export default function BioPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl text-primary">Biografía</h1>
        <div className="w-16 h-px bg-wood-medium mt-4" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start mb-8">
        <div className="w-full sm:w-56 shrink-0 rounded-2xl overflow-hidden shadow-md bg-primary/5">
          <img
            src="/images/pat-crespo/patricia-crespo-alcala.webp"
            alt="Patricia Crespo Alcalá"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="font-body text-text leading-relaxed space-y-6 flex-1">
        <p className="text-lg leading-[1.8]">
          Patricia Crespo Alcalá es poeta, escritora y crítica literaria valenciana. Licenciada en
          Filología Clásica por la Universitat de València, su obra poética se caracteriza por una
          profunda sensibilidad hacia el lenguaje, explorando los límites entre la prosa poética y
          el verso, con una mirada que abarca desde lo íntimo hasta lo universal.
        </p>

        <p className="text-lg leading-[1.8]">
          Colabora regularmente con medios como <em className="text-accent">Zenda Libros</em> y{" "}
          <em className="text-accent">Vallejo &amp; Co.</em>, donde publica críticas literarias
          y artículos sobre poesía contemporánea. Es colaboradora del programa de radio &ldquo;Mar
          de Muses&rdquo; y ha coorganizado los encuentros poéticos &ldquo;Lavadero poético&rdquo;
          (2019), &ldquo;Plaza poética&rdquo; (2020). Actualmente es responsable del Festival Poético
          &ldquo;Villa de las palabras&rdquo; en Puertomingalvo (Teruel).
        </p>

        <p className="text-lg leading-[1.8]">
          Ha impartido talleres de escritura poética y ha participado con sus poemas en varias
          exposiciones. Su trabajo ha sido reconocido con el{" "}
          <strong className="font-display text-primary">Premio de Poesía Prólogos Marina Izquierdo</strong>{" "}
          y <strong className="font-display text-primary">Manifiesto de Incertidumbre</strong> fue
          finalista de los <strong className="font-display text-primary">Premios de la Crítica Literaria Valenciana</strong>{" "}
          en la categoría de poesía. Su poesía ha trascendido fronteras: una selección de sus poemas
          fue traducida al búlgaro por la hispanista Valentina Istatkova.
        </p>
      </div>
    </div>

    <div className="decorative-divider my-12" />

    <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">Obras</h2>

    <div className="space-y-6">
      <div className="bg-background-light rounded-lg p-6 border border-primary/10 hover:border-accent/30 transition-colors">
        <div className="flex items-start gap-4">
          <span className="text-accent font-display text-3xl leading-none mt-1">&ldquo;</span>
          <div>
            <h3 className="font-display text-xl text-primary">Erosgrafías</h3>
            <p className="text-text-muted text-sm mt-1">Bohodón Ediciones, 2018</p>
            <p className="mt-3 leading-relaxed">
              Prosas poéticas ilustradas por Santi Cervera. Un libro que transita por el deseo,
              el cuerpo y la memoria. Palabras sin filtro dichas desde la sinceridad del cuerpo,
              acompañadas de imágenes que introducen aún más en las sensaciones que transmite.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background-light rounded-lg p-6 border border-primary/10 hover:border-accent/30 transition-colors">
        <div className="flex items-start gap-4">
          <span className="text-accent font-display text-3xl leading-none mt-1">&ldquo;</span>
          <div>
            <h3 className="font-display text-xl text-primary">Cantos de la desesperanza</h3>
            <p className="text-text-muted text-sm mt-1">Bohodón Ediciones, 2020</p>
            <p className="mt-3 leading-relaxed">
              Poemario que transita por la desesperanza y la búsqueda de sentido a través de
              una voz poética que deambula sin rumbo, en un viaje interior hacia ningún lado.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background-light rounded-lg p-6 border border-primary/10 hover:border-accent/30 transition-colors">
        <div className="flex items-start gap-4">
          <span className="text-accent font-display text-3xl leading-none mt-1">&ldquo;</span>
          <div>
            <h3 className="font-display text-xl text-primary">Manifiesto de Incertidumbre</h3>
            <p className="text-text-muted text-sm mt-1">Ed. Olélibros, 2022 &mdash; Finalista Premios de la Crítica Literaria Valenciana</p>
            <p className="mt-3 leading-relaxed">
              Un poemario que indaga en la incertidumbre como espacio donde la palabra busca
              su sentido, reconocido por la crítica valenciana como una de las obras poéticas
              más destacadas del año.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background-light rounded-lg p-6 border border-primary/10 hover:border-accent/30 transition-colors">
        <div className="flex items-start gap-4">
          <span className="text-accent font-display text-3xl leading-none mt-1">&ldquo;</span>
          <div>
            <h3 className="font-display text-xl text-primary">un solo árbol (Thimmamma Marrimanu)</h3>
            <p className="text-text-muted text-sm mt-1">Ed. Milenio, 2024</p>
            <p className="mt-3 leading-relaxed">
              Poemario que toma su título del bosque sagrado de la India germinado a partir de
              un único baniano. Un libro donde de un solo árbol, un cuerpo, brota un bosque y
              su ecosistema. Atravesar los lindes del cuerpo y deambular por el bosque es
              cartografiar la vida.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="decorative-divider my-12" />

    <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">Premios y reconocimientos</h2>

    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-primary/5 rounded-lg p-5 border border-primary/10">
        <span className="font-display text-lg text-primary">Premio de Poesía Prólogos Marina Izquierdo</span>
      </div>
      <div className="bg-primary/5 rounded-lg p-5 border border-primary/10">
        <span className="font-display text-lg text-primary">Finalista Premios de la Crítica Literaria Valenciana</span>
        <p className="text-text-muted text-sm mt-1">Manifiesto de Incertidumbre (2022)</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-5 border border-primary/10">
        <span className="font-display text-lg text-primary">Traducción al búlgaro</span>
        <p className="text-text-muted text-sm mt-1">Poemas de &ldquo;un solo árbol&rdquo; por Valentina Istatkova</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-5 border border-primary/10">
        <span className="font-display text-lg text-primary">Recitales internacionales</span>
        <p className="text-text-muted text-sm mt-1">Festivales y encuentros en Europa y América</p>
      </div>
    </div>
    </div>
  )
}
