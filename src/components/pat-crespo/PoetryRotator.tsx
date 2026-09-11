"use client"

import { useState, useEffect } from "react"

const fragments = [
  {
    text: "En ocasiones el viento me roza la piel y siento... El recuerdo de otra piel, de otras caricias, llega y me arrasa.",
    source: "— El recuerdo de otras caricias",
  },
  {
    text: "Hay días en los que sentimos que el destino puede más que nuestra voluntad. Hay días en los que necesitamos volver a nosotros mismos y respirar.",
    source: "— Destino",
  },
  {
    text: "El tiempo deja sus pasos y en la memoria se graba lo que fuimos, lo que somos, lo que aún podemos ser.",
    source: "— Elegía",
  },
  {
    text: "Somos camino que se hace al andar, huella que el viento borra, instante que el verso atrapa.",
    source: "— Iniciando el camino",
  },
  {
    text: "Como pompas de jabón, los sueños flotan, brillan un instante y estallan. Pero en su breve existencia cabe toda la luz del mundo.",
    source: "— Vanitas",
  },
  {
    text: "La arquitectura de los cuerpos se escribe en el idioma del deseo, en la gramática de la piel que el tiempo traduce.",
    source: "— La arquitectura de los cuerpos",
  },
]

export default function PoetryRotator() {
  const [current, setCurrent] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % fragments.length)
        setFadeIn(true)
      }, 600)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-background-light rounded-xl p-8 sm:p-10 border border-primary/10">
      <div
        className={`transition-all duration-600 ease-in-out ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <p className="font-display text-xl sm:text-2xl text-primary leading-relaxed italic text-center">
          &ldquo;{fragments[current].text}&rdquo;
        </p>
        <p className="font-accent text-lg text-accent text-center mt-4">
          {fragments[current].source}
        </p>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {fragments.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFadeIn(false)
              setTimeout(() => {
                setCurrent(i)
                setFadeIn(true)
              }, 600)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-accent w-6" : "bg-primary/20 hover:bg-primary/40"
            }`}
            aria-label={`Fragmento ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
