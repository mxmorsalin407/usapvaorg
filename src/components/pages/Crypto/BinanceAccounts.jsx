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
    title: "Fresh Binance Accounts",
    price: "$8",
    desc: "Freshly created Binance accounts with secure setup and clean activity.",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
    stock: "3.2K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Binance Accounts",
    price: "$35",
    desc: "Aged Binance accounts with stronger trust score and stable login history.",
    img: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200",
    stock: "1.4K In Stock",
    badge: "Best Seller",
  },
  {
    title: "KYC Verified Binance",
    price: "$95",
    desc: "Fully verified Binance accounts with secure recovery information included.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
    stock: "780 In Stock",
    badge: "KYC",
  },
  {
    title: "Bulk Binance Package",
    price: "$950",
    desc: "Bulk Binance account package for agencies, traders and crypto resellers.",
    img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function BinanceAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050505] text-white py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1305] via-[#050505] to-[#120d02]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#facc1530_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        {/* Ambient Glow */}
        <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[140px]" />

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
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Binance Accounts
              </span>
            </motion.h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium verified Binance accounts with secure access, instant
              delivery and trusted crypto-ready setup.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-400" />
              Fully Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-yellow-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-orange-400" />
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
                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.35)]"
              >

                {/* badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-400/20 text-yellow-300 text-xs font-bold backdrop-blur-xl">
                  {item.badge}
                </div>

                {/* image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#09090970] to-transparent" />
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
                      "Crypto Ready",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-yellow-400" />
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
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-yellow-500/10 to-orange-500/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All Binance accounts are manually checked • 24/7 customer support •
            Secure login & recovery access included
          </div>

          {/* Content */}
          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center leading-tight"
          >
            How to Create and Verify a{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Binance Account Legally
            </span>
          </motion.h1>

          {/* intro */}
          <p className="text-center text-gray-300 mt-6 max-w-3xl mx-auto">
            Cryptocurrency is growing fast, and Binance is one of the biggest global exchanges.
            This guide explains how to create and verify your account safely without risks.
          </p>

          {/* warning box */}
          <div className="mt-10 max-w-4xl mx-auto border border-red-500/20 bg-red-500/10 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="font-bold text-red-300 text-lg">
              ⚠ Avoid Buying Verified Accounts
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Buying accounts can lead to permanent bans, loss of funds, and security issues.
              Always create your own verified account using official methods.
            </p>
          </div>

          {/* sections */}
          <div className="mt-16 grid gap-10">

            {/* What is Binance */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-yellow-300">What is Binance?</h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Binance is a global cryptocurrency exchange platform where users can trade Bitcoin,
                Ethereum, and thousands of other digital assets. It is known for its security,
                liquidity, and user-friendly experience.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm text-gray-300">
                {[
                  "Spot & Futures Trading",
                  "P2P Crypto Exchange",
                  "Staking & Savings",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="text-yellow-400 w-4 h-4" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-amber-300">
                Step-by-Step Account Creation
              </h2>

              <ol className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed list-decimal pl-5">
                <li>Visit official Binance website and click Sign Up</li>
                <li>Enter email or phone number</li>
                <li>Create a strong password</li>
                <li>Verify email or phone OTP</li>
              </ol>
            </div>

            {/* Verification */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-orange-300">
                How to Verify Your Account (KYC)
              </h2>

              <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                <li>✔ Enter personal details (name, DOB, address)</li>
                <li>✔ Upload ID document (Passport / NID / License)</li>
                <li>✔ Complete facial verification</li>
                <li>✔ Wait for approval</li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-yellow-200">
                Benefits of Verified Account
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm text-gray-300">
                {[
                  "Higher withdrawal limits",
                  "Full trading access",
                  "P2P trading enabled",
                  "Better security protection",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-orange-200">
                Safety Tips
              </h2>

              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Shield className="text-green-400 w-4 h-4" />
                  Enable 2FA authentication
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-400 w-4 h-4" />
                  Monitor account activity regularly
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-yellow-400 w-4 h-4" />
                  Use strong password & avoid phishing
                </div>
              </div>
            </div>

            {/* final */}
            <div className="text-center text-gray-300 text-sm mt-6">
              Creating a Binance account is simple — but safety and accuracy are important.
              Always use official methods and avoid shortcuts.
            </div>

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