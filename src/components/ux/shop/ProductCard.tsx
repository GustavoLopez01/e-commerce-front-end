import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import { URL_BACKEND_APP } from "../../../constant";
import type { Product } from "../../../types/product";

type ProductCardProps = {
  product: Product
  onShowDetail: () => void
}

export default function ProductCard({
  product,
  onShowDetail
}: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-2xl border border-border overflow-hidden cursor-pointer"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden bg-secondary aspect-square">
        <img
          src={`${URL_BACKEND_APP}/products/get-image-product/${product.id}`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        // onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format'; }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {/* {product.isNew && (
            <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-foreground text-primary-foreground">
              NUEVO
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2 py-0.5 rounded-md text-xs font-bold" style={{ background: 'var(--brand)', color: 'white' }}>
              MÁS VENDIDO
            </span>
          )} */}
          {/* {product.discount > 0 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-destructive text-destructive-foreground">
              -{product.discount}%
            </span>
          )} */}
        </div>

        {/* Stock warning */}
        {/* {product.stock <= 5 && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 text-xs font-semibold text-destructive">
            <Zap className="w-3 h-3" />
            ¡Solo {product.stock}!
          </div>
        )} */}

        {/* Hover actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
          <button
            className="cursor-pointer flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-sm font-semibold text-foreground hover:bg-secondary transition-colors shadow-md"
            onClick={onShowDetail}
          >
            <Eye className="w-3.5 h-3.5" />
            Ver detalles
          </button>
        </div>

        {/* Image thumbnails on hover */}
        {/* {product.images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {product.images.slice(0, 3).map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setImgIdx(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-150 ${imgIdx === i ? 'scale-125' : 'opacity-60'}`}
                style={{ background: imgIdx === i ? 'var(--brand)' : 'white' }}
              />
            ))}
          </div>
        )} */}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Brand + wishlist */}
        <div className="flex items-start justify-between mb-1">
          <span className="text-xs text-muted-foreground font-semibold tracking-widest">
            Apple
          </span>
          <button
            // onClick={e => { e.stopPropagation(); onToggleWishlist(product.id); }}
            className="p-1 -mt-1 -mr-1 rounded-full hover:bg-secondary transition-colors"
            aria-label="Favorito"
          >
            <Heart
            // className={`w-4 h-4 transition-colors ${isWished ? 'fill-current text-red-500' : 'text-muted-foreground'}`}
            />
          </button>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-foreground text-sm leading-tight mb-2 line-clamp-2" style={{ fontWeight: 600 }}>
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(s => (
              <Star
                key={s}
              // className={`w-3 h-3 ${s <= Math.round(product.rating) ? 'fill-current' : ''}`}
              // style={{ color: s <= Math.round(product.rating) ? '#F59E0B' : '#E5E7EB' }}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">4.9 (2922)</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-black text-foreground">{product.price} MXN</span>

            <span className="ml-2 text-sm text-muted-foreground line-through">5000 MXN</span>

          </div>
          <button
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${true
              ? 'bg-accent text-white scale-95'
              : 'bg-foreground text-primary-foreground hover:opacity-80'
              }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {false ? '¡Añadido!' : 'Añadir'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
