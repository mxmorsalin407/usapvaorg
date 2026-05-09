import { ShieldCheck, Zap, Lock, Headphones } from 'lucide-react'

const marqueeItems = [
  { icon: <ShieldCheck className="w-6 h-6" />, text: "100% VERIFIED ACCOUNTS" },
  { icon: <Zap className="w-6 h-6" />, text: "INSTANT DELIVERY" },
  { icon: <Lock className="w-6 h-6" />, text: "SECURE CHECKOUT" },
  { icon: <Headphones className="w-6 h-6" />, text: "24/7 PREMIUM SUPPORT" },
  { icon: <ShieldCheck className="w-6 h-6" />, text: "LIFETIME REPLACEMENT GUARANTEE" }
]

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <div className="bg-primary py-8 overflow-hidden border-y border-white/5 flex whitespace-nowrap">
      <div className="animate-marquee flex items-center min-w-max">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 font-bold text-4xl tracking-widest uppercase mx-12 text-transparent hover:text-white transition-colors duration-500 cursor-default" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            <span className="text-electric" style={{ WebkitTextStroke: '0px' }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}
