import { Star } from "lucide-react";

const REVIEWSDATA = [
  {
    user: "Axel lópez",
    message: "NEXUS ha cambiado mi forma de comprar tech. La calidad de los productos y la velocidad de entrega son simplemente increíbles. Nunca volvería a comprar en otro sitio."
  },
  {
    user: "Gustavo Zarate",
    message: "Compré la cámara Alpha Z9 y fue la mejor decisión de mi carrera. El servicio postventa es excepcional. Respondieron mis dudas en menos de 2 horas."
  },
  {
    user: "Daniela Hernandez",
    message: "La experiencia de compra en NEXUS es como ninguna otra. El sitio es intuitivo, los productos son de primera calidad y el envío llegó en 24 horas. Perfecto."
  }
]

export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {REVIEWSDATA.map(item => {
          return (
            <div className="p-10 bg-gray-200/30 border-2 rounded-md aspect-5/3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map(() => (
                  <Star className="size-4 text-amber-400 fill-amber-400 " />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2"> {item.message} </p>
              <p className="text-sm text-gray-600 mt-2"> {item.user} </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
