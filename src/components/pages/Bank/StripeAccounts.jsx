import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ShoppingCart,
  Award,
  Clock,
  Shield,
} from "lucide-react";
import PurchaseModal from "../PurchaseModal";

const products = [
  {
    title: "Fresh Stripe Accounts",
    price: "$25",
    desc: "Freshly registered Stripe accounts with clean setup and secure access.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    stock: "1.8K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Stripe Accounts",
    price: "$75",
    desc: "Aged Stripe accounts with better trust score and stable transaction history.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200",
    stock: "920 In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Business Stripe",
    price: "$180",
    desc: "Fully verified Stripe business accounts with recovery access and secure login.",
    img: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200",
    stock: "640 In Stock",
    badge: "Business",
  },
  {
    title: "Bulk Stripe Package",
    price: "$1200",
    desc: "Bulk Stripe account package for agencies, payment solutions and resellers.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function StripeAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#060816] text-white py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120b2c] via-[#060816] to-[#09121f]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf630_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        {/* Glow */}
        <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[140px]" />

        <div className="container mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black tracking-tight"
            >
              Buy Verified{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Stripe Accounts
              </span>
            </motion.h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium verified Stripe accounts with secure access, instant
              delivery and stable payment processing support.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-400" />
              Fully Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-cyan-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-violet-400" />
              Secure Recovery Included
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.3)]"
              >

                {/* badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/20 text-violet-300 text-xs font-bold backdrop-blur-xl">
                  {item.badge}
                </div>

                {/* image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090912] via-[#09091270] to-transparent" />
                </div>

                {/* content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* stock */}
                  <div className="mt-4 text-sm font-bold text-emerald-400">
                    {item.stock}
                  </div>

                  {/* features */}
                  <div className="mt-5 space-y-3">
                    {[
                      "Instant Delivery",
                      "Secure Access",
                      "Stable Processing",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* bottom */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-3xl font-black">
                      {item.price}
                    </div>

                    <button
                      onClick={() =>
                        setSelectedProduct(item)
                      }
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-400 to-cyan-400 text-black text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-violet-500/10 to-cyan-500/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All Stripe accounts are manually checked • 24/7 customer support •
            Secure login & recovery access included
          </div>

          {/* COntent */}
          <div className="mt-[1in] text-gray-300 space-y-8 leading-relaxed">

            <h2 className="text-2xl md:text-3xl font-black text-white">
              How to Create and Verify a Stripe Account Legally
            </h2>

            <p>
              Stripe is one of the most powerful online payment processing platforms in the world.
              It allows businesses, freelancers, and entrepreneurs to accept payments securely and efficiently.
            </p>

            <p>
              However, many users try shortcuts like buying verified accounts, which can lead to account bans
              and financial loss. The safest method is always to create your own verified Stripe account.
            </p>

            <h3 className="text-xl font-bold text-white">What is Stripe?</h3>

            <p>
              Stripe is a global payment system that allows businesses to accept online payments through cards,
              wallets, and other digital methods. It is widely used by e-commerce stores, SaaS platforms,
              freelancers, and online services.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>E-commerce websites</li>
              <li>SaaS businesses</li>
              <li>Freelancers and agencies</li>
              <li>Subscription services</li>
              <li>Online marketplaces</li>
            </ul>

            <h3 className="text-xl font-bold text-white">Why Stripe is Important</h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>Global payment support</li>
              <li>High-level security system</li>
              <li>Easy integration with apps and websites</li>
              <li>Fast payouts to bank accounts</li>
              <li>Scalable for any business size</li>
            </ul>

            <h3 className="text-xl font-bold text-white">Why You Should Avoid Buying Stripe Accounts</h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>Permanent account suspension risk</li>
              <li>Financial loss possibility</li>
              <li>Legal and policy violations</li>
              <li>Security risks from third-party access</li>
              <li>Business reputation damage</li>
            </ul>

            <h3 className="text-xl font-bold text-white">How to Create a Stripe Account</h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>Visit official Stripe website</li>
              <li>Sign up with email and password</li>
              <li>Verify email address</li>
              <li>Enter business information</li>
              <li>Add personal details correctly</li>
            </ul>

            <h3 className="text-xl font-bold text-white">How to Verify Stripe Account</h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>Link your bank account</li>
              <li>Upload identity documents</li>
              <li>Provide business verification (if required)</li>
              <li>Complete payment activation setup</li>
            </ul>

            <h3 className="text-xl font-bold text-white">Benefits of Verified Stripe Account</h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>Accept global payments</li>
              <li>Higher transaction limits</li>
              <li>Better customer trust</li>
              <li>Full platform access</li>
              <li>Business scalability</li>
            </ul>

            <h3 className="text-xl font-bold text-white">Final Thoughts</h3>

            <p>
              Creating and verifying a Stripe account is simple when done correctly. Avoid shortcuts like buying accounts,
              as they can lead to permanent bans. Always use real information for long-term business safety and growth.
            </p>

          </div>
        </div>
      </section>

      {/* Modal */}
      <PurchaseModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}