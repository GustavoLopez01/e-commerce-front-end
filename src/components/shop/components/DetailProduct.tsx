import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useProductStore } from "../../../store/useProductStore"
import {
  CheckCircle2,
  ChevronLeft,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck,
  Zap
} from "lucide-react";
import { URL_BACKEND_APP } from "../../../constant";
import { api_getProductById } from "../../../api/products/api_product";
import type { Product } from "../../../types/product";

export default function DetailProduct() {
  const params = useParams<{ productId: string }>()
  const productStore = useProductStore(state => state.product);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productStore) {
      setProduct(productStore);
      return;
    }
    api_getProductById(Number(params?.productId)).then(response => {
      if (response?.success && response.product?.id) setProduct(response.product);
    })
  }, [productStore?.id]);

  console.log(product);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <button
            // onClick={onBack} 
            className="flex items-center gap-1 hover:text-foreground transition-colors font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver
          </button>
          <span>/</span>
          {/* <span className="capitalize">{product.category}</span> */}
          <span>/</span>
          {/* <span className="text-foreground font-medium truncate">{product.name}</span> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-square">
              <AnimatePresence mode="wait">
                <motion.img
                  // key={mainImg}
                  // initial={{ opacity: 0, scale: 1.04 }}
                  // animate={{ opacity: 1, scale: 1 }}
                  // exit={{ opacity: 0 }}
                  // transition={{ duration: 0.25 }}
                  src={`${URL_BACKEND_APP}/products/get-image-product/${product?.id}`}
                  // alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Fullscreen hint */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 rounded-full text-white text-xs backdrop-blur-sm">
                {/* {mainImg + 1} / {product.images.length} */}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {/* {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className={`w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${mainImg === i ? 'border-accent scale-105' : 'border-border opacity-70 hover:opacity-100'
                    }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))} */}
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            {/* Brand + badges */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                {/* <p className="text-xs text-accent font-bold tracking-widest">{product.brand.toUpperCase()}</p> */}
                <div className="flex gap-2 flex-wrap">
                  {/* {product.isNew && <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-foreground text-primary-foreground">NUEVO</span>} */}
                  {/* {product.isBestSeller && <span className="px-2 py-0.5 rounded-md text-xs font-bold" style={{ background: 'var(--brand)', color: 'white' }}>MÁS VENDIDO</span>} */}
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Heart className={`w-6 h-6 ${true ? 'fill-current text-red-500' : 'text-muted-foreground'}`} />
              </button>
            </div>

            <div>
              <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, lineHeight: 1.15 }} className="text-foreground">
                {/* {product.name} */}
              </h1>
              {/* <p className="text-muted-foreground mt-2">{product.tagline}</p> */}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              {/* <div className="flex">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className={`w-5 h-5 ${s <= Math.round(product.rating) ? 'fill-current' : ''}`} style={{ color: s <= Math.round(product.rating) ? '#F59E0B' : '#E5E7EB' }} />
                ))}
              </div> */}
              {/* <span className="font-bold text-foreground">{product.rating}</span> */}
              {/* <span className="text-muted-foreground text-sm">({product.reviewCount.toLocaleString('es')} valoraciones)</span> */}
              <span className="text-xs text-muted-foreground">·</span>
              {/* <span className="text-xs font-medium" style={{ color: 'var(--brand)' }}>SKU: {product.sku}</span> */}
            </div>

            {/* Price */}
            <div className="p-4 rounded-2xl bg-secondary space-y-2">
              <div className="flex items-end gap-3">
                <span style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--foreground)', lineHeight: 1 }}>
                  {/* {product.price} € */}
                </span>
                {/* <span className="text-muted-foreground line-through text-lg">{product.originalPrice} €</span> */}
                <span className="px-2 py-0.5 rounded-md text-sm font-bold bg-destructive text-destructive-foreground">
                  {/* -{product.discount}% */}
                </span>
              </div>
              {/* {qty > 1 && (
                <p className="text-sm" style={{ color: 'var(--brand)' }}>
                  Ahorro total: <strong>{savings.toFixed(0)} €</strong>
                </p>
              )} */}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              {/* {product?.quantity > 10 ? (
                <><CheckCircle2 className="w-4 h-4 text-accent" /><span className="text-sm font-medium text-accent">En stock · Envío en 24h</span></>
              ) : product.stock > 0 ? (
                <><Zap className="w-4 h-4 text-orange-500" /><span className="text-sm font-medium text-orange-600">¡Quedan solo {product.stock} unidades!</span></>
              ) : (
                <><Package className="w-4 h-4 text-muted-foreground" /><span className="text-sm text-muted-foreground">Agotado temporalmente</span></>
              )} */}
            </div>

            {/* Variants */}
            {/* {product.variants.map(varGroup => (
              <div key={varGroup.label}>
                <p className="text-sm font-semibold text-foreground mb-3">{varGroup.label}</p>
                {varGroup.type === 'color' ? (
                  <div className="flex gap-3">
                    {varGroup.options.map(opt => (
                      <button
                        key={opt.value}
                        disabled={!opt.available}
                        onClick={() => setSelectedVariants(prev => ({ ...prev, [varGroup.label]: opt.value }))}
                        title={opt.label}
                        className={`relative w-9 h-9 rounded-full border-2 transition-all ${selectedVariants[varGroup.label] === opt.value ? 'border-foreground scale-110' : 'border-border'
                          } ${!opt.available ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'}`}
                        style={{ background: opt.value }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {varGroup.options.map(opt => (
                      <button
                        key={opt.value}
                        disabled={!opt.available}
                        onClick={() => setSelectedVariants(prev => ({ ...prev, [varGroup.label]: opt.value }))}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${selectedVariants[varGroup.label] === opt.value
                            ? 'border-foreground bg-foreground text-primary-foreground'
                            : 'border-border hover:border-foreground/30'
                          } ${!opt.available ? 'opacity-30 cursor-not-allowed line-through' : ''}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))} */}

            {/* Quantity */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Cantidad</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-border rounded-xl overflow-hidden">
                  <button
                    // onClick={() => setQty(q => Math.max(1, q - 1))}
                    className="p-2.5 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  {/* <span className="w-12 text-center font-bold text-lg">{qty}</span> */}
                  <button
                    // onClick={() => setQty(q => Math.min(product.stock, q + 1))}
                    className="p-2.5 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {/* <span className="text-sm text-muted-foreground">{product.stock} disponibles</span> */}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <button
                // onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all duration-200 ${true ? 'bg-accent text-white' : 'bg-foreground text-primary-foreground hover:opacity-80'
                  }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {/* {added ? '¡Añadido al carrito!' : 'Añadir al carrito'} */}
              </button>
              <button
                // onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base text-white transition-all hover:opacity-90"
                style={{ background: 'var(--brand)' }}
              >
                <Zap className="w-5 h-5" />
                Comprar ahora
              </button>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border font-semibold text-sm hover:bg-secondary transition-colors">
              <Share2 className="w-4 h-4" />
              Compartir
            </button>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, label: 'Pago seguro', sub: 'SSL 256-bit' },
                { icon: Truck, label: 'Envío gratis', sub: 'Pedidos +99 €' },
                { icon: RotateCcw, label: 'Devolución', sub: '30 días gratis' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center p-3 rounded-xl bg-secondary gap-1">
                  <Icon className="w-5 h-5" style={{ color: 'var(--brand)' }} />
                  <span className="text-xs font-semibold text-foreground">{label}</span>
                  <span className="text-xs text-muted-foreground">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs: Description, Specs, FAQ, Reviews */}
        {/* <div className="mt-16">
          <Tabs.Root defaultValue="description">
            <Tabs.List className="flex gap-1 border-b border-border mb-8">
              {['description', 'specs', 'faq', 'reviews'].map(tab => {
                const labels: Record<string, string> = {
                  description: 'Descripción',
                  specs: 'Especificaciones',
                  faq: 'Preguntas frecuentes',
                  reviews: `Valoraciones (${product.reviewCount.toLocaleString('es')})`,
                };
                return (
                  <Tabs.Trigger
                    key={tab}
                    value={tab}
                    className="px-4 py-3 text-sm font-semibold text-muted-foreground border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:text-foreground transition-colors -mb-px"
                  >
                    {labels[tab]}
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>

            <Tabs.Content value="description">
              <div className="max-w-2xl">
                <p className="text-muted-foreground leading-relaxed text-base">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="specs">
              <div className="max-w-xl divide-y divide-border">
                {product.specs.map(spec => (
                  <div key={spec.label} className="flex items-center justify-between py-3.5">
                    <span className="text-sm text-muted-foreground font-medium">{spec.label}</span>
                    <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="faq">
              <div className="max-w-2xl">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl overflow-hidden px-5">
                      <AccordionTrigger className="text-sm font-semibold no-underline hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Tabs.Content>

            <Tabs.Content value="reviews">
              {/* Rating summary */}
        {/* <div className="flex flex-col sm:flex-row gap-8 mb-10">
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary text-center min-w-[140px]">
                  <span style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>{product.rating}</span>
                  <div className="flex mt-2 mb-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className={`w-4 h-4 ${s <= Math.round(product.rating) ? 'fill-current' : ''}`} style={{ color: '#F59E0B' }} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{product.reviewCount.toLocaleString('es')} valoraciones</p>
                </div>
                <div className="flex-1 space-y-2">
                  {ratingDist.map(({ stars, pct }) => (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-4">{stars}</span>
                      <Star className="w-3.5 h-3.5 fill-current text-yellow-400 flex-shrink-0" />
                      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'var(--brand)' }} />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div> */}

        {/* Review cards */}
        {/* <div className="space-y-5">
                {reviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root> */}
        {/* </div> */}

        {/* Related products */}
        {/* {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-foreground mb-8" style={{ fontSize: '1.5rem', fontWeight: 800 }}>También te puede gustar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.slice(0, 4).map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onProductClick={onProductClick}
                  onAddToCart={(item) => onAddToCart(item)}
                  wishlist={wishlist}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </motion.div>
  )
}
