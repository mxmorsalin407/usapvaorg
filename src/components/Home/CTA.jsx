import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Grid Pattern & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-tl from-[#14b8a6] via-[#06b6d4]/20 to-transparent blur-[150px] opacity-50 z-0"></div>

      {/* Massive CTA Section (Match Image 4) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-8 relative"
          >
            <svg viewBox="0 0 100 100" className="w-32 h-32 absolute animate-[spin_20s_linear_infinite]">
              <path id="curve" d="M 10 50 A 40 40 0 1 1 90 50 A 40 40 0 1 1 10 50" fill="transparent" />
              <text className="text-[9px] font-bold tracking-widest uppercase fill-white">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  • ONE-TIME PAYMENT • NO MONTHLY FEES
                </textPath>
              </text>
            </svg>
            <div className="text-[#FF7E8C] text-3xl">⚡</div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-2"
          >
            Grab USAPVAORG now before
          </motion.h2>
          
          {/* Swoosh Gradient Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="relative inline-block mb-12"
          >
            <h2 className="text-5xl md:text-8xl font-semibold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-[#3b82f6] to-[#a855f7]">
                price increase
              </span>
            </h2>
            <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C80 -2 220 -2 298 10" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" />
              <path d="M20 12C90 2 210 2 280 12" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#14b8a6" />
                  <stop offset="0.5" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#14b8a6" />
                  <stop offset="0.5" stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold text-[15px] flex items-center gap-3 transition-colors backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Purchase Now <span className="font-bold">$88</span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
