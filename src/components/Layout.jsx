import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import CustomCursor from './Home/CustomCursor'
import Header from './Home/Header'
import Footer from './Home/Footer'
import FloatingChat from './Home/FloatingChat'

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    return () => lenis.destroy()
  }, [])

  return (
    <div className="bg-[#030305] text-[#F3F3F3] min-h-screen selection:bg-electric selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/15 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/15 blur-[180px] rounded-full"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-indigo-900/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </div>
    </div>
  )
}

export default Layout
