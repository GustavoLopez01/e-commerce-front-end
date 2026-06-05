import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const CATEGORIES = [
  "Electrónica",
  "Moda",
  "Hogar",
  "Deportes",
  "Gaming"
]

export default function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((item, i) => {
          return (
            <motion.button
              className="group relative overflow-hidden rounded-2xl aspect-3/4 bg-secondary"
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item}
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
              // style={{ background: `linear-gradient(to top, ${cat.color}DD 0%, ${cat.color}40 50%, transparent 100%)` }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-white font-bold text-base leading-tight mb-0.5">name</p>
                <p className="text-white/70 text-xs">10 productos</p>
                <div className="flex items-center gap-1 mt-2 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 translate-y-1 group-hover:translate-y-0">
                  Ver todo <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}


