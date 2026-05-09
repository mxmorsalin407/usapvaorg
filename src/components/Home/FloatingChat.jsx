import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'bg-[#25D366]',
      href: 'https://wa.me/1234567890', // Replace with your WhatsApp number
      delay: 0.1
    },
    {
      name: 'Telegram',
      icon: <Send className="w-5 h-5" />,
      color: 'bg-[#0088cc]',
      href: 'https://t.me/yourusername', // Replace with your Telegram username
      delay: 0.2
    }
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">

      {/* Social Buttons List */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ duration: 0.2, delay: link.delay }}
                className={`flex items-center gap-3 px-4 py-2 rounded-2xl text-white font-bold text-sm shadow-2xl hover:scale-110 transition-transform ${link.color} group`}
              >
                <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300">
                  {link.name}
                </span>
                {link.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <div className="relative">
        {!isOpen && (
          <div className="absolute inset-0 bg-electric rounded-full animate-ping opacity-30"></div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full shadow-[0_10px_40px_rgba(0,242,255,0.3)] transition-all flex items-center justify-center hover:scale-110 z-10 ${isOpen ? 'bg-white text-black rotate-90' : 'bg-electric text-white'
            }`}
          title="Contact Support"
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
        </button>

        {/* Glow behind main button */}
        <div className="absolute inset-0 bg-electric/20 blur-2xl rounded-full -z-10"></div>
      </div>
    </div>
  )
}
