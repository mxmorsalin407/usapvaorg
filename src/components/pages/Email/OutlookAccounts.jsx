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
    title: "Fresh Outlook Accounts",
    price: "$0.25",
    desc: "Brand new created accounts with clean history. Perfect for new campaigns.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    stock: "12.4K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Outlook Accounts",
    price: "$1.20",
    desc: "6+ months aged accounts with strong trust score and stable performance.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
    stock: "4.8K In Stock",
    badge: "Best Seller",
  },
  {
    title: "PVA Outlook Accounts",
    price: "$2.40",
    desc: "Phone verified + recovery email included. High success rate for marketing.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
    stock: "8.2K In Stock",
    badge: "PVA",
  },
  {
    title: "Bulk Outlook Package",
    price: "$120",
    desc: "Special package for agencies & resellers. Best value for bulk purchase.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function OutlookAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#0a0719] text-white py-24 overflow-hidden">

        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1033] via-[#0a0719] to-[#120d24]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f130_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        {/* Ambient Glow */}
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Outlook Accounts
              </span>
            </motion.h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              High-quality, verified Outlook accounts with instant delivery.
              Trusted by marketers, agencies and businesses worldwide.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-400" />
              100% Phone Verified
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-amber-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-cyan-400" />
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 text-xs font-bold backdrop-blur-xl">
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer text */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All accounts are manually checked • 24/7 customer support • 100%
            money back guarantee if login fails
          </div>

          {/* Content section */}
          <section className="relative py-24 px-6 text-white bg-[#070A14] overflow-hidden">

            {/* background glow */}
            <div className="absolute top-[-220px] left-[-220px] w-[550px] h-[550px] bg-cyan-500/10 blur-[170px]" />
            <div className="absolute bottom-[-220px] right-[-220px] w-[550px] h-[550px] bg-blue-500/10 blur-[180px]" />

            <div className="max-w-5xl mx-auto relative z-10">

              {/* title */}
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                How to Create and Secure an{" "}
                <span className="text-cyan-400">Outlook (Hotmail)</span> Account Properly
              </h1>

              <p className="text-gray-300 mt-6 leading-relaxed">
                Email is one of the most essential tools in the digital world. Whether you are a student, freelancer, business owner, or casual internet user, having a reliable email account is necessary for communication, account registration, and online security.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Outlook.com is a free email service developed by Microsoft that allows users to send, receive, and manage emails securely. It was previously known as Hotmail and is still widely used today for both personal and professional purposes.
              </p>

              <p className="text-gray-300 mt-4 leading-relaxed">
                This guide will show you how to create, verify, and secure an Outlook account properly in 2026.
              </p>

              {/* what is outlook */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">What is Outlook (Hotmail)?</h2>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Outlook is Microsoft’s modern email platform that replaced the old Hotmail system. It is part of the Microsoft ecosystem and integrates with tools like OneDrive, Word, Excel, Teams, and more.
                </p>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Free email service</li>
                  <li>• Professional email interface</li>
                  <li>• Strong spam and phishing protection</li>
                  <li>• Cloud storage integration (OneDrive)</li>
                  <li>• Calendar and task management</li>
                </ul>
              </div>

              {/* benefits */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Why Outlook is Important</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>1. Professional Communication</b> – Widely accepted in corporate environments.</p>
                  <p><b>2. Strong Security System</b> – Microsoft uses advanced protection systems.</p>
                  <p><b>3. Free Tools & Storage</b> – OneDrive and Office integration.</p>
                  <p><b>4. Easy Integration</b> – Works perfectly with Windows ecosystem.</p>
                  <p><b>5. Global Usage</b> – Trusted by millions of organizations.</p>
                </div>
              </div>

              {/* warning */}
              <div className="mt-12 p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400">
                  Why You Should Avoid Buying Outlook Accounts
                </h3>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Microsoft can recover original ownership</li>
                  <li>• Permanent account suspension risk</li>
                  <li>• Security compromise</li>
                  <li>• Privacy risk from previous owners</li>
                  <li>• Violation of Microsoft policies</li>
                </ul>

                <p className="mt-4 text-cyan-300 font-semibold">
                  👉 The only safe method is to create your own Outlook account.
                </p>
              </div>

              {/* steps */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Step-by-Step Guide to Create an Outlook Account</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>Step 1:</b> Visit official Microsoft account creation page</p>
                  <p><b>Step 2:</b> Click “Create Account”</p>
                  <p><b>Step 3:</b> Choose @outlook.com email and password</p>
                  <p><b>Step 4:</b> Enter personal details (name, DOB, country)</p>
                  <p><b>Step 5:</b> Verify phone/email and complete setup</p>
                </div>
              </div>

              {/* security */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">How to Secure Your Outlook Account</h2>

                <div className="mt-6 space-y-4 text-gray-300">
                  <p><b>Step 1:</b> Enable Two-Step Verification</p>
                  <p><b>Step 2:</b> Use strong password (uppercase + numbers + symbols)</p>
                  <p><b>Step 3:</b> Add recovery email and phone number</p>
                  <p><b>Step 4:</b> Monitor login activity regularly</p>
                  <p><b>Step 5:</b> Avoid suspicious emails and links</p>
                </div>
              </div>

              {/* final */}
              <div className="mt-16 text-gray-300 leading-relaxed">
                <h2 className="text-2xl font-bold text-white">Final Thoughts</h2>

                <p className="mt-4">
                  Creating an Outlook account is easy, but securing it properly is very important. Avoid shortcuts like buying accounts, as they can lead to permanent loss and security risks.
                </p>

                <p className="mt-4 text-cyan-300 font-medium">
                  The best approach is always to create your own account using official Microsoft services and protect it with strong security settings.
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