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
    title: "Fresh Coinbase Accounts",
    price: "$12",
    desc: "Freshly registered Coinbase accounts with clean activity and secure access.",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
    stock: "2.1K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Coinbase Accounts",
    price: "$48",
    desc: "Aged Coinbase accounts with trusted login history and higher account stability.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
    stock: "920 In Stock",
    badge: "Best Seller",
  },
  {
    title: "KYC Verified Coinbase",
    price: "$120",
    desc: "Fully verified Coinbase accounts with recovery access and secure login setup.",
    img: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200",
    stock: "610 In Stock",
    badge: "KYC",
  },
  {
    title: "Bulk Coinbase Package",
    price: "$1400",
    desc: "Large Coinbase account package for crypto agencies, traders and resellers.",
    img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function CoinbaseAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#04070d] text-white py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07152c] via-[#04070d] to-[#08111f]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f630_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        {/* Glow */}
        <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[120px]" />
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
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Coinbase Accounts
              </span>
            </motion.h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium verified Coinbase accounts with secure access, instant
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
              <Clock className="text-cyan-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-blue-400" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/20 text-blue-300 text-xs font-bold backdrop-blur-xl">
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
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All Coinbase accounts are manually checked • 24/7 customer support •
            Secure login & recovery access included
          </div>

          {/* Content Section */}
          <section className="relative py-24 px-6 text-white bg-[#070A14] overflow-hidden">

            {/* background glow */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px]" />
            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px]" />

            <div className="max-w-5xl mx-auto relative z-10">

              {/* title */}
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                How to Create and Verify a{" "}
                <span className="text-cyan-400">Coinbase Account</span> Legally
              </h1>

              <p className="text-gray-300 mt-6 leading-relaxed">
                Cryptocurrency adoption is growing rapidly, and platforms like Coinbase have made it easier than ever for beginners to enter the crypto world. Whether you want to buy Bitcoin, invest in Ethereum, or simply explore digital assets, a verified Coinbase account is the first step.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                However, many users try shortcuts like buying pre-verified accounts, which is unsafe and can lead to permanent bans or financial loss. This guide explains how to properly create and verify your account in a safe and legal way.
              </p>

              {/* What is Coinbase */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white">What is Coinbase?</h2>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Coinbase is one of the most trusted cryptocurrency exchange platforms in the world. It allows users to buy, sell, store, and manage digital currencies securely.
                </p>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Buy and sell cryptocurrencies easily</li>
                  <li>• Secure crypto wallet storage</li>
                  <li>• Mobile and desktop access</li>
                  <li>• Staking and earning rewards</li>
                  <li>• Institutional-grade security</li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Why Coinbase is Popular Worldwide</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>1. Beginner-Friendly Interface</b> – Even first-time users can navigate easily.</p>
                  <p><b>2. Strong Security System</b> – Advanced encryption and cold storage protect user funds.</p>
                  <p><b>3. Regulated Platform</b> – Coinbase operates under strict financial regulations.</p>
                  <p><b>4. Wide Crypto Selection</b> – Supports major cryptocurrencies like Bitcoin and Ethereum.</p>
                  <p><b>5. Trusted by Millions</b> – Used by individuals and institutions globally.</p>
                </div>
              </div>

              {/* warning */}
              <div className="mt-12 p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400">
                  Why You Should Avoid Buying Verified Coinbase Accounts
                </h3>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Permanent Account Ban risk</li>
                  <li>• Loss of funds instantly</li>
                  <li>• Identity verification conflicts</li>
                  <li>• Fraud possibility</li>
                  <li>• Legal and compliance risks</li>
                </ul>

                <p className="mt-4 text-cyan-300 font-semibold">
                  👉 The only safe method is to create your own account.
                </p>
              </div>

              {/* steps */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Step-by-Step Guide to Create a Coinbase Account</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>Step 1:</b> Visit Official Website and click “Get Started.”</p>
                  <p><b>Step 2:</b> Enter full name, email, and password.</p>
                  <p><b>Step 3:</b> Verify your email address.</p>
                  <p><b>Step 4:</b> Add and verify phone number using OTP.</p>
                </div>
              </div>

              {/* KYC */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">How to Verify Your Coinbase Account (KYC)</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>Step 1:</b> Start identity verification</p>
                  <p><b>Step 2:</b> Provide personal details (DOB, address, nationality)</p>
                  <p><b>Step 3:</b> Upload documents (ID, passport, license)</p>
                  <p><b>Step 4:</b> Take selfie or live photo</p>
                  <p><b>Step 5:</b> Wait for approval</p>
                </div>
              </div>

              {/* final */}
              <div className="mt-16 text-gray-300 leading-relaxed">
                <h2 className="text-2xl font-bold text-white">Final Thoughts</h2>

                <p className="mt-4">
                  Creating and verifying a Coinbase account is simple, secure, and essential for entering the cryptocurrency world. Always avoid shortcuts like buying accounts, as they can lead to permanent bans and financial loss.
                </p>

                <p className="mt-4 text-cyan-300 font-medium">
                  The safest approach is always to create your own verified account using official methods.
                </p>
              </div>

            </div>
          </section>
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