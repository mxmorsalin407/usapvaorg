import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)

  // instant mouse values
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // smooth spring animation
  const springConfig = {
    damping: 25,
    stiffness: 700,
    mass: 0.2,
  }

  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target

      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: -4,
          y: -4,
          willChange: 'transform',
        }}
      />

      {/* Ring Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: -20,
          y: -20,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering
            ? 'rgba(0,242,255,0.08)'
            : 'transparent',
          borderColor: isHovering
            ? '#ffd700'
            : 'rgba(0,242,255,0.25)',
          boxShadow: isHovering
            ? '0 0 25px rgba(255,215,0,0.35)'
            : '0 0 12px rgba(0,242,255,0.15)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      />
    </>
  )
}