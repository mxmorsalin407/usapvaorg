import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldCheck, Zap, HelpCircle, Lock } from "lucide-react";

const faqs = [
  {
    q: "Are these accounts fully verified?",
    a: "Yes, all accounts are phone + email verified with unique IP creation for maximum safety.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    q: "How fast is delivery?",
    a: "Instant delivery after payment confirmation with full credentials + recovery access.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    q: "Do you provide replacement?",
    a: "Yes, we provide instant replacement if any issue occurs on first login.",
    icon: <Lock className="w-5 h-5" />
  },
  {
    q: "What payment methods are supported?",
    a: "Crypto, cards, and selected regional payment options are accepted securely.",
    icon: <HelpCircle className="w-5 h-5" />
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">

      {/* BIG LUXURY BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white tracking-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Questions
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Premium support answers for all your queries
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-6">

          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              layout
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className={`relative rounded-[2.5rem] border overflow-hidden group
              ${openIdx === idx
                  ? "bg-white/[0.08] border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.2)] scale-[1.01] backdrop-blur-3xl"
                  : "bg-white/[0.04] border-white/10 hover:border-white/20 backdrop-blur-2xl"
                }`}
            >

              {/* animated glow border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10" />

              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="relative w-full flex items-center justify-between p-6"
              >

                {/* LEFT ICON (3D FLOAT) */}
                <div className="flex items-center gap-4">

                  <motion.div
                    animate={{
                      y: openIdx === idx ? -3 : 0,
                      rotate: openIdx === idx ? 8 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                  >
                    {/* glow aura */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
                    {faq.icon}
                  </motion.div>

                  <span className={`text-[16px] font-semibold transition-all ${openIdx === idx ? "text-white" : "text-gray-300"
                    }`}>
                    {faq.q}
                  </span>
                </div>

                {/* RIGHT ICON */}
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition
                  ${openIdx === idx
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-white/5 text-gray-400"
                    }`}
                >
                  {openIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </motion.div>

              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 pl-[76px] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}