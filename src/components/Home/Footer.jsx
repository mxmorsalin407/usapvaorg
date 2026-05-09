import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useRef } from 'react'

export default function Footer() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  // Parallax effect for the background glow
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={containerRef} className="relative bg-[#050505] overflow-hidden pt-32 pb-8 border-t border-white/5">
      
      {/* Massive Parallax Glowing Orb Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[100vh] bg-gradient-to-b from-cyan-900/30 via-gold-900/10 to-transparent blur-[120px] pointer-events-none z-0 rounded-b-full"
      ></motion.div>


      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-black text-white mb-6 tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                <span className="text-white text-lg leading-none">U</span>
              </div>
              USAPVA<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-gold-500">ORG</span>

            </h3>
            <p className="text-gray-400 max-w-sm mb-10 leading-relaxed text-[15px]">
              Premium verified digital infrastructure for scaling businesses globally. Unmatched quality, instant delivery, zero restrictions.
            </p>
            
            <div className="flex gap-4">
              {['Twitter', 'Discord', 'Telegram'].map((social, i) => (
                <motion.a 
                  key={social} 
                  href="#" 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 text-sm font-medium hover:border-blue-500 hover:text-white hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(74,140,255,0.3)] transition-all duration-300"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-4">
              {['Verified Banking', 'Ad Accounts', 'Social PVAs', 'Email PVAs', 'Custom Infrastructure'].map((link, i) => (
                <motion.li key={link} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-blue-500 opacity-0 group-hover:opacity-100">→</span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Refund Policy', 'Terms of Service', 'Privacy Policy', 'Contact Support'].map((link, i) => (
                <motion.li key={link} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-purple-500 opacity-0 group-hover:opacity-100">→</span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Text Animation on Scroll Reveal */}
        <div className="w-full flex justify-center mb-12 overflow-hidden pointer-events-none select-none">
          <motion.h1 
            initial={{ y: "100%", opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/5 uppercase text-center"
          >
            USAPVAORG
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm font-medium mb-6 md:mb-0">
            © {new Date().getFullYear()} USAPVAORG. All rights reserved.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(74,140,255,0.5)] transition-all duration-500 group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
