import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Globe, RefreshCcw } from 'lucide-react'

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Delivery",
    desc: "Get automated access to your verified accounts and credentials within seconds of completing payment. No waiting times.",
    color: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Anti-Ban Protection",
    desc: "Accounts created using unique residential IPs, clean cookies, and real physical SIM cards to ensure maximum longevity.",
    color: "from-purple-500 to-pink-500",
    glow: "bg-purple-500"
  },
  {
    icon: <RefreshCcw className="w-8 h-8" />,
    title: "Lifetime Replacement",
    desc: "If an account gets restricted before your first use, we replace it instantly. Your investment is always protected.",
    color: "from-emerald-400 to-teal-500",
    glow: "bg-teal-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Compatibility",
    desc: "Whether you need US, UK, or EU accounts, our infrastructure works seamlessly worldwide without proxy issues.",
    color: "from-orange-500 to-yellow-500",
    glow: "bg-orange-500"
  }
]

export default function WhyChoose() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            Why USAPVAORG
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Unfair advantages for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">business</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-400 text-lg">
            We don't just sell accounts; we provide the ultimate infrastructure to scale your operations without restrictions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.04] backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all duration-700 overflow-hidden shadow-2xl"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.glow}/20 blur-[50px] group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${benefit.color} text-white shadow-lg shadow-${benefit.glow}/20`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
