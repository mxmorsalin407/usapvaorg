import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter Bundle",
    desc: "Perfect for testing new campaigns and small businesses.",
    price: "$49",
    popular: false,
    color: {
      border: "border-cyan-500",
      glow: "shadow-[0_0_50px_rgba(6,182,212,0.25)]",
      badge: "from-cyan-500 to-blue-600",
      button: "from-cyan-400 to-blue-500",
      icon: "text-cyan-400",
    },
    features: [
      "1x Verified US PayPal Account",
      "1x Aged Gmail Account",
      "Standard IPs",
      "24/7 Basic Support",
      "24hr Replacement Guarantee",
    ],
  },
  {
    name: "Agency Pro",
    desc: "Our best-selling package for scaling operations globally.",
    price: "$149",
    popular: true,
    color: {
      border: "border-purple-500",
      glow: "shadow-[0_0_50px_rgba(168,85,247,0.25)]",
      badge: "from-purple-500 to-pink-600",
      button: "from-purple-500 to-pink-500",
      icon: "text-purple-400",
    },
    features: [
      "1x Verified Stripe Business",
      "1x Wise Business Account",
      "5x High-Limit FB Ad Accounts",
      "Premium Residential IPs",
      "Priority VIP Support",
      "Lifetime Replacement",
    ],
  },
  {
    name: "Enterprise",
    desc: "Custom infrastructure for massive scale and volume.",
    price: "$499",
    popular: false,
    color: {
      border: "border-orange-500",
      glow: "shadow-[0_0_50px_rgba(249,115,22,0.25)]",
      badge: "from-orange-500 to-red-500",
      button: "from-orange-400 to-red-500",
      icon: "text-orange-400",
    },
    features: [
      "Unlimited Accounts (Custom Quota)",
      "Dedicated Account Manager",
      "Custom LLC Formation Docs",
      "Private Server Hosting",
      "API Access for Automation",
      "100% Anti-Ban SLA",
    ],
  },
];

export default function Pricing() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="py-24 bg-primary relative overflow-hidden border-t border-white/5">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md"
          >
            Popular Accounts
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Scale without{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              limits
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Choose the perfect bundle for your business size. No hidden fees,
            instant delivery.
          </motion.p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

          {plans.map((plan, idx) => {
            const active = selected === idx;

            return (
              <motion.div
                key={idx}
                onClick={() => setSelected(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative cursor-pointer p-10 rounded-[2.5rem] border transition-all duration-700 overflow-hidden ${active
                  ? `bg-[#0B0B0F]/90 backdrop-blur-3xl ${plan.color.border} ${plan.color.glow} scale-[1.03]`
                  : "bg-white/[0.04] border-white/10 backdrop-blur-3xl hover:border-white/20"
                  }`}
              >

                {/* active glow */}
                {active && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color.badge} opacity-[0.06] pointer-events-none`}></div>
                )}

                {/* badge */}
                {(plan.popular || active) && (
                  <div
                    className={`absolute -top-1 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg bg-gradient-to-r ${plan.color.badge}`}
                  >
                    <Zap className="w-3 h-3" />

                    {plan.popular
                      ? "Most Popular"
                      : active
                        ? "Selected Plan"
                        : ""}
                  </div>
                )}

                {/* content */}
                <div className="relative z-10">

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>

                    <p className="text-gray-400 text-sm h-10">
                      {plan.desc}
                    </p>
                  </div>

                  {/* price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-white tracking-tight">
                        {plan.price}
                      </span>

                      <span className="text-gray-500 text-sm font-medium">
                        /one-time
                      </span>
                    </div>
                  </div>

                  {/* features */}
                  <ul className="space-y-4 mb-8">

                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <Check
                          className={`w-5 h-5 shrink-0 ${active ? plan.color.icon : "text-gray-500"
                            }`}
                        />

                        {feat}
                      </li>
                    ))}

                  </ul>

                  {/* button */}
                  <button
                    className={`w-full py-4 rounded-full font-bold text-sm transition-all border ${active
                      ? `bg-gradient-to-r ${plan.color.button} text-white border-transparent shadow-lg`
                      : "bg-white/10 text-white hover:bg-white/20 border-white/10"
                      }`}
                  >
                    {active ? "Selected Plan" : "Get Started"}
                  </button>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}