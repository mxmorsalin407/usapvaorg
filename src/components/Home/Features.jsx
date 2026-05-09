import { motion } from "framer-motion";

export default function Features() {
  const cards = [
    {
      title: "Instant Account Access",
      desc: "Import your credentials instantly & easily using our automated dashboard - All in one secure portal.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Lifetime Replacement",
      desc: "Similarly using our support system you can update or replace accounts to the latest verified version anytime.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Secure Payments",
      desc: "Fully encrypted checkout system with trusted global payment gateways and fraud protection.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      title: "24/7 Support",
      desc: "Dedicated support team available 24/7 to help you with instant response and guidance.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">

      {/* Spotlight Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vh] bg-gradient-to-r from-blue-900 via-cyan-900/40 to-transparent blur-[120px] opacity-60 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER (UNCHANGED) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

          <div className="hidden lg:block w-48 h-48 relative animate-[spin_20s_linear_infinite] opacity-60">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white/40 fill-none stroke-current" strokeWidth="0.5">
              <circle cx="50" cy="50" r="48" />
              <ellipse cx="50" cy="50" rx="48" ry="20" />
              <ellipse cx="50" cy="50" rx="20" ry="48" />
              <ellipse cx="50" cy="50" rx="48" ry="10" transform="rotate(45 50 50)" />
              <ellipse cx="50" cy="50" rx="48" ry="10" transform="rotate(-45 50 50)" />
            </svg>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-[100px] font-black tracking-tight leading-[0.9] text-white uppercase"
            >
              POWERFUL
            </motion.h2>

            <motion.h2
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-[100px] font-black tracking-tight leading-[0.9] text-transparent uppercase"
              style={{ WebkitTextStroke: "1px #8b5cf6" }}
            >
              FEATURES
            </motion.h2>
          </div>

          <div className="lg:w-1/3 text-gray-400 text-sm leading-relaxed">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                ⚡
              </div>
              <span className="font-bold text-white text-xl tracking-widest">
                usapvaorg
              </span>
            </div>
            Explore highlight features that make us stand out from others. Buy one account and access all these premium business tools.
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="flex flex-col gap-10">

          {cards.map((card, i) => {
            const fromLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -120 : 120,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className={`flex ${fromLeft ? "justify-start" : "justify-end"}`}
              >

                <div className="group w-full md:w-[80%] lg:w-[70%] relative">

                  {/* Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-3xl blur opacity-10 group-hover:opacity-30 transition`}></div>

                  {/* CARD */}
                  <div className="relative bg-white/[0.04] backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/10 flex gap-10 overflow-hidden group-hover:bg-white/[0.07] group-hover:border-white/20 transition-all duration-700">

                    {/* IMAGE 1:1 */}
                    <div className="w-[240px] aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">

                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col justify-center">

                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color} animate-pulse`} />
                        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                          Highlight
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white/90 transition">
                        {card.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed max-w-[500px]">
                        {card.desc}
                      </p>

                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}