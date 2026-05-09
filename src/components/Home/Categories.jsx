import { motion } from 'framer-motion'

const categories = [
  { title: "All", active: false },
  { title: "New", active: true },
  { title: "Banking", active: false },
  { title: "Social Media", active: false },
  { title: "Ads", active: false },
  { title: "Email", active: false },
  { title: "Others", active: false }
]

const cards = [
  {
    title: "PayPal US Fullz",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Meta Ads Agency",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Stripe EU Verified",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
]

export default function Categories() {
  return (
    <section className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        
        {/* Header Text */}
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[80px] md:text-[120px] font-bold leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E8C] to-[#8C52FF] flex items-start"
          >
            40<span className="text-4xl mt-4">+</span>
          </motion.div>
          
          <div className="overflow-hidden mb-4">
            <motion.h2 
              initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E8C] to-[#8C52FF]"
            >
              State of the art accounts
            </motion.h2>
          </div>
          
          <p className="text-gray-400 max-w-xl mx-auto text-[15px] leading-relaxed">
            Save time & effort with our premium verified accounts. Easily start your business with a few clicks or mix and match to craft your dream workflow.
          </p>
        </div>

        {/* Pill Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all ${
                cat.active 
                ? "bg-transparent text-[#FF7E8C] border border-[#FF7E8C]" 
                : "bg-transparent text-gray-300 border border-white/20 hover:border-white/50"
              }`}
              style={cat.active ? { borderImage: "linear-gradient(to right, #FF7E8C, #8C52FF) 1", borderRadius: "9999px" } : {}}
            >
              <span className={cat.active ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E8C] to-[#8C52FF]" : ""}>
                {cat.title}
              </span>
            </button>
          ))}
        </div>

        {/* Example Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.05] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] overflow-hidden p-8 group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-700 shadow-2xl"
            >
              <div className="flex gap-2 mb-4 px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-primary">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
