import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';

const BADGES = [
  { icon: Truck, text: 'Envío gratis +600MXN' },
  { icon: ShieldCheck, text: 'Garantía 2 años' },
  { icon: RotateCcw, text: 'Devolución 30 días' },
];

export default function MainProduct() {
  return (
    <section className="relative overflow-hidden ">
      <div className="relative min-h-[92vh] flex items-center bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=1000&fit=crop&auto=format"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground via-foreground/90 to-foreground/40" />
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #10B981, transparent)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Nuevo · Colección 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              Descubre la<br />
              <span style={{ color: 'var(--brand)' }}>próxima era</span><br />
              del estilo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/60 max-w-md leading-relaxed"
            >
              Tecnología de vanguardia, diseño excepcional y calidad premium. Todo lo que necesitas, en un solo lugar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:gap-3"
                style={{ background: 'var(--brand)', color: 'white' }}
              >
                Comprar ahora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                Explorar catálogo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {BADGES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/50 text-sm">
                  <Icon className="w-4 h-4 text-accent" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div
                className="absolute inset-8 rounded-3xl blur-2xl opacity-30"
                style={{ background: 'radial-gradient(circle, #10B981, #3B82F6)' }}
              />
              <button
                className="relative block w-full group"
              >
                <div className="relative overflow-hidden rounded-3xl" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <img
                    src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={"main-product"}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.9), transparent)' }}>
                    <p className="text-white font-bold text-xl">
                      Audifonos nova pro
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-white text-2xl font-black">$1200 MXN</span>
                      <span className="text-white/40 line-through">
                        $1500 MXN
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold" style={{ background: 'var(--brand)', color: 'white' }}>
                        -30%
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '50K+', label: 'Clientes satisfechos' },
              { value: '4.9', label: 'Valoración media' },
              { value: '2.400+', label: 'Productos premium' },
              { value: '48h', label: 'Entrega express' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
