import { motion } from 'framer-motion'
import { LayoutGrid, Sparkles } from 'lucide-react'
import ProductGrid from '../Home/ProductGrid'

const AllServices = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Marketplace Full Catalog
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">
          Explore <span className="text-cyan-400">All</span> Services
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Browse our complete range of verified accounts and business solutions.
        </p>
      </div>

      {/* Reusing the existing ProductGrid for the full list */}
      <ProductGrid />
    </div>
  )
}

export default AllServices
