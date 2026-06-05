import { motion } from "motion/react";
import { Headphones, RefreshCw, Shield, Van } from "lucide-react";

const BENEFITS = [
  {
    title: "Envio gratis",
    description: "En todos los pedidos superiores a 99 €. Entrega express en 24-48h.",
    icon: <Van className="text-blue-500" />,
    bg: "bg-blue-200/20"
  },
  {
    title: "Devoluciones fáciles",
    description: "30 días para devolver sin preguntas. Reembolso completo garantizado.",
    icon: <RefreshCw className="text-green-500" />,
    bg: "bg-green-200/40"
  },
  {
    title: "Soporte 24/7",
    description: "Equipo de expertos disponible por chat, email o teléfono siempre.",
    icon: <Headphones className="text-purple-500" />,
    bg: "bg-purple-400/10"
  },
  {
    title: "Pago 100% seguro",
    description: "Cifrado SSL de grado bancario. Aceptamos tarjeta, PayPal y Bizum.",
    icon: <Shield className="text-orange-400" />,
    bg: "bg-orange-200/40"
  },
];

export default function FeaturesCard() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {BENEFITS.map(({ icon, description, title, bg }, i) => {
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-gray-200/30 border-2 rounded-2xl py-11 md:aspect-4/3 md:py-8 p-5"
            >
              <div className={`${bg} w-12 p-3 rounded-md`}>
                {icon}
              </div>
              <h3 className="py-2">{title}</h3>
              <span className="text-gray-500 text-sm"> {description} </span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
