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
    title: "Fresh Yahoo Accounts",
    price: "$0.30",
    desc: "Freshly created Yahoo accounts with clean activity and instant access.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    stock: "10.2K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Yahoo Accounts",
    price: "$1.40",
    desc: "Aged Yahoo accounts with stable login history and higher trust score.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
    stock: "5.1K In Stock",
    badge: "Best Seller",
  },
  {
    title: "PVA Yahoo Accounts",
    price: "$2.80",
    desc: "Phone verified Yahoo accounts with secure recovery setup included.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
    stock: "7.7K In Stock",
    badge: "PVA",
  },
  {
    title: "Bulk Yahoo Package",
    price: "$135",
    desc: "Large quantity Yahoo account package for agencies and resellers.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function YahooAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#090511] text-white py-24 overflow-hidden">

        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d2e] via-[#090511] to-[#12071d]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#a855f730_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        {/* Ambient Glow */}
        <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-fuchsia-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[140px]" />

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
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Yahoo! Accounts
              </span>
            </motion.h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium Yahoo! accounts with instant delivery, secure login
              access and high trust score for marketing and business use.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-400" />
              100% Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-fuchsia-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-violet-400" />
              Lifetime Replacement
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/20 text-fuchsia-300 text-xs font-bold backdrop-blur-xl">
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
                      "Secure Login",
                      "High Quality",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-fuchsia-400" />
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
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-violet-500 text-white text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-fuchsia-500/10 to-violet-500/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer text */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All accounts are manually checked • 24/7 customer support • Secure
            login guarantee for every Yahoo! account purchase
          </div>

          {/* Content section */}
          <section className="relative py-24 px-6 text-white bg-[#070A14] overflow-hidden">

            {/* background glow */}
            <div className="absolute top-[-220px] left-[-220px] w-[560px] h-[560px] bg-purple-500/10 blur-[170px]" />
            <div className="absolute bottom-[-220px] right-[-220px] w-[560px] h-[560px] bg-yellow-500/10 blur-[180px]" />

            <div className="max-w-5xl mx-auto relative z-10">

              {/* title */}
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                How to Create and Secure a{" "}
                <span className="text-purple-400">Yahoo Mail Account</span> Properly
              </h1>

              <p className="text-gray-300 mt-6 leading-relaxed">
                Email remains one of the most important tools in today’s digital world. From signing up on websites to professional communication and online security, having a reliable email account is essential. Among the oldest and most trusted email services, Yahoo Mail still holds a strong position globally.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Yahoo Mail is a free email platform developed by Yahoo that allows users to send, receive, and manage emails securely. It has been used for decades and continues to serve millions of users worldwide.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                This guide will explain how to properly create, verify, and secure a Yahoo Mail account in 2026, along with best practices for safe usage.
              </p>

              {/* what is yahoo mail */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">What is Yahoo Mail?</h2>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Yahoo Mail is a web-based email service that enables users to communicate electronically over the internet. It offers free email accounts with strong storage capacity, spam protection, and mobile accessibility.
                </p>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Free email service</li>
                  <li>• Large storage space (up to 1TB)</li>
                  <li>• Spam and security filters</li>
                  <li>• Mobile and desktop access</li>
                  <li>• Organized inbox categories</li>
                </ul>
              </div>

              {/* importance */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Why Yahoo Mail is Still Important Today</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>1. Large Storage</b> – Massive space for emails and files.</p>
                  <p><b>2. Simple Interface</b> – Easy for beginners and all users.</p>
                  <p><b>3. Reliable Delivery</b> – Stable email sending system.</p>
                  <p><b>4. Spam Protection</b> – Built-in filtering system.</p>
                  <p><b>5. Cross-Device Access</b> – Works on mobile and desktop.</p>
                </div>
              </div>

              {/* warning */}
              <div className="mt-12 p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400">
                  Why You Should Avoid Buying Yahoo Accounts
                </h3>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Yahoo can reclaim account ownership</li>
                  <li>• Permanent suspension risk</li>
                  <li>• Security compromise</li>
                  <li>• Privacy exposure</li>
                  <li>• Terms of service violation</li>
                </ul>

                <p className="mt-4 text-purple-300 font-semibold">
                  👉 The only safe option is to create your own Yahoo Mail account.
                </p>
              </div>

              {/* steps */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Step-by-Step Guide to Create a Yahoo Mail Account</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>Step 1:</b> Visit official Yahoo signup page</p>
                  <p><b>Step 2:</b> Click “Create Account”</p>
                  <p><b>Step 3:</b> Enter name, username, and password</p>
                  <p><b>Step 4:</b> Add mobile number</p>
                  <p><b>Step 5:</b> Verify OTP and complete setup</p>
                </div>
              </div>

              {/* security */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">How to Secure Your Yahoo Mail Account</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>Step 1:</b> Use strong password (letters + numbers + symbols)</p>
                  <p><b>Step 2:</b> Enable Two-Step Verification</p>
                  <p><b>Step 3:</b> Add recovery email and phone number</p>
                  <p><b>Step 4:</b> Monitor login activity regularly</p>
                  <p><b>Step 5:</b> Avoid suspicious emails and links</p>
                </div>
              </div>

              {/* final */}
              <div className="mt-16 text-gray-300 leading-relaxed">
                <h2 className="text-2xl font-bold text-white">Final Thoughts</h2>

                <p className="mt-4">
                  Creating and securing a Yahoo Mail account is simple but important. It is a powerful communication tool that helps users stay connected safely and efficiently.
                </p>

                <p className="mt-4 text-purple-300 font-medium">
                  The best approach is always to create your own account using official methods and secure it properly with strong protection settings.
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