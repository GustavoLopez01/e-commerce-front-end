import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

const footerLinks = {
  'Tienda': ['Novedades', 'Más vendidos', 'Ofertas', 'Electrónica', 'Moda', 'Deportes', 'Hogar', 'Gaming'],
  'Ayuda': ['Centro de ayuda', 'Seguimiento de pedidos', 'Devoluciones', 'Garantía', 'Contacto'],
  'Empresa': ['Sobre NEXUS', 'Blog', 'Trabaja con nosotros', 'Prensa', 'Afiliados', 'B2B / Empresas'],
  'Legal': ['Términos y condiciones', 'Privacidad', 'Cookies', 'Accesibilidad'],
};

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter/X' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 style={{ fontWeight: 800, fontSize: '1.5rem' }}>Únete al club NEXUS</h3>
              <p className="text-white/50 mt-1 text-sm">Accede primero a ofertas exclusivas, lanzamientos y contenido premium.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button
                className="px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 shrink-0 hover:opacity-90 transition-opacity"
                style={{ background: 'var(--brand)', color: 'white' }}
              >
                Suscribirme
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-foreground text-sm font-black">N</span>
              </div>
              <span className="text-xl font-black">NEXUS</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Tu destino premium para tecnología, moda y estilo de vida. Calidad sin compromiso desde 2018.
            </p>
            <div className="flex flex-col gap-2 mt-6 text-sm text-white/50">
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                hola@nexus.es
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +34 900 123 456
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Calle Serrano 42, Madrid
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 NEXUS Store. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
