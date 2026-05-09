import { motion } from 'framer-motion'
import { ShoppingBag, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    title: "Stripe US Verified Business",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    price: "$250.00",
    rating: 5,
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "PayPal Aged Account (2 Years)",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    price: "$150.00",
    rating: 4.8,
    tag: "Hot"
  },
  {
    id: 3,
    title: "Meta Ads Agency Account",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    price: "$500.00",
    rating: 5,
    tag: "High Limit"
  },
  {
    id: 4,
    title: "Gmail PVA Accounts (Pack of 50)",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop",
    price: "$25.00",
    rating: 4.9,
    tag: null
  }
]

export default function ProductGrid() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden mb-2">
            <motion.h2 
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl font-semibold text-white tracking-tight flex justify-center"
            >
              Trending Accounts
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-sm"
          >
            Top rated accounts handpicked for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[4/5] overflow-hidden bg-primary mb-5 rounded-md">
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-white text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                    {product.tag}
                  </div>
                )}
                
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                />

                {/* Hover Add to Cart Button */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full bg-white text-primary hover:bg-electric hover:text-white py-3 rounded-sm font-bold text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-600'}`} />
                  ))}
                </div>
                <h3 className="text-white font-medium mb-1 hover:text-electric transition-colors cursor-pointer text-[15px]">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
