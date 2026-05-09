import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Select Service",
    desc: "Browse our catalog and choose the premium account that fits your exact business needs.",
    icon: "🛍️",
    glow: "from-cyan-400 to-blue-500",
  },
  {
    num: "02",
    title: "Secure Payment",
    desc: "Complete your purchase securely using Crypto, Card, or your preferred local payment method.",
    icon: "🔒",
    glow: "from-purple-400 to-pink-500",
  },
  {
    num: "03",
    title: "Instant Delivery",
    desc: "Receive your account credentials instantly via email with full recovery data.",
    icon: "⚡",
    glow: "from-emerald-400 to-cyan-500",
  },
  {
    num: "04",
    title: "Scale Safely",
    desc: "Start using accounts safely with our optimized usage guide for scaling.",
    icon: "🚀",
    glow: "from-orange-400 to-red-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden border-t border-white/5">

      {/* ===== FLOATING BACKGROUND ICONS (3D EFFECT) ===== */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 text-white/10 text-6xl animate-float blur-[0.8px]">⚙️</div>
        <div className="absolute top-40 right-20 text-white/10 text-7xl animate-float-slow">🔐</div>
        <div className="absolute bottom-20 left-1/5 text-white/10 text-6xl animate-float">🚀</div>
        <div className="absolute bottom-10 right-1/3 text-white/10 text-5xl animate-float-slow">💎</div>

      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row gap-16 items-center justify-between">

          {/* LEFT TEXT */}
          <div className="md:w-1/3 text-center md:text-left">

            <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
              Simple Process
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How it{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                works
              </span>
            </h2>

            <p className="text-gray-400 text-lg">
              Fast, secure and automated workflow designed for premium users.
            </p>
          </div>

          {/* RIGHT STEPS */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10 relative">

            {/* CONNECTING LINES */}
            <div className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2"></div>
            <div className="hidden sm:block absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent -translate-x-1/2"></div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >

                {/* glow border */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${step.glow} rounded-3xl blur opacity-10 group-hover:opacity-30 transition`}></div>

                {/* card */}
                <div className="relative p-10 rounded-[2.5rem] bg-white/[0.04] border border-white/10 backdrop-blur-3xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-700">

                  {/* ICON + STEP */}
                  <div className="flex items-center gap-4 mb-5">

                    {/* 3D ICON */}
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${step.glow} text-white text-2xl shadow-lg shadow-black/40`}>
                      {step.icon}
                    </div>

                    {/* STEP NUMBER */}
                    <span className="text-white/30 font-bold text-sm tracking-widest">
                      STEP {step.num}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION CSS */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
}