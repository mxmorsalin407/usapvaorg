import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#121216] to-[#0A0A0F] border border-blue-500/20 rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-[0_0_80px_rgba(74,140,255,0.1)] group"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-[11px] mb-4">
                <ShieldCheck className="w-4 h-4" /> Ironclad Guarantee
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                100% Replacement & <br className="hidden md:block"/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Money Back Guarantee</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                We are incredibly confident in the quality of our verified accounts. If you encounter any login or verification issue prior to use, we will replace the account instantly or refund your payment in full. No questions asked.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite] border-t-blue-400"></div>
                <div className="absolute inset-2 border-2 border-teal-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-b-teal-400"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_40px_rgba(74,140,255,0.2)]">
                  <ShieldCheck className="w-20 h-20 text-blue-400 drop-shadow-[0_0_15px_rgba(74,140,255,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
