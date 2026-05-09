import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ShoppingCart,
  Award,
  Clock,
  Shield,
  BarChart3,
  Target,
  TrendingUp,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import PurchaseModal from "../PurchaseModal";

const products = [
  {
    title: "Fresh Meta Ads Accounts",
    price: "$15",
    desc: "Freshly created Meta Ads accounts with clean history and ready-to-run setup.",
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200",
    stock: "2.8K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Meta Ads Accounts",
    price: "$60",
    desc: "Aged Meta Ads accounts with stable activity and higher ad trust score.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    stock: "1.1K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Business Ads",
    price: "$150",
    desc: "Fully verified Meta business ads accounts with secure BM setup and recovery.",
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1200",
    stock: "690 In Stock",
    badge: "Business",
  },
  {
    title: "Bulk Ads Package",
    price: "$1100",
    desc: "Bulk Meta Ads accounts for agencies, marketers and scaling campaigns.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function MetaAdsAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050510] text-white py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#050510] to-[#070a18]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1877f230_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        {/* Glow */}
        <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[140px]" />

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
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Meta Ads Accounts
              </span>
            </motion.h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium verified Meta (Facebook & Instagram) ads accounts with stable
              performance, instant delivery and high trust ad history.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-400" />
              Fully Verified Accounts
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-blue-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-indigo-400" />
              High Ad Trust Score
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
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
                      "High Ad Approval Rate",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-blue-400" />
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
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-500 text-black text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All Meta Ads accounts are manually verified • 24/7 support • Secure BM access included
          </div>

          {/* Content Section */}
          <div className="w-full text-white px-5 md:px-10 py-12 md:py-20 space-y-14">

            {/* HERO */}
            <header className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                How to Run Successful Meta Ads for Your Business (Complete Guide 2026)
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Digital marketing has become one of the most powerful ways to grow any online or offline
                business. Among all advertising platforms, Meta’s advertising system stands out as one of
                the most effective tools for reaching targeted audiences.
              </p>

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600"
                alt="Meta Ads dashboard"
                className="rounded-2xl w-full object-cover"
              />

              <p className="text-gray-300 leading-relaxed">
                Meta Platforms provides one of the world’s largest digital advertising networks, allowing
                businesses to promote products and services across Facebook, Instagram, Messenger, and
                partner platforms.
              </p>
            </header>

            {/* WHAT ARE ADS */}
            <section className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">What Are Meta Ads?</h2>

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600"
                alt="Marketing analytics"
                className="rounded-2xl w-full object-cover"
              />

              <p className="text-gray-300">
                Meta Ads are paid advertisements shown across Facebook and Instagram. They allow precise
                targeting based on interests, behavior, and demographics.
              </p>
            </section>

            {/* BENEFITS */}
            <section className="max-w-4xl mx-auto space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold">Why Meta Ads Are Important</h2>

              <img
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1600"
                alt="Digital marketing growth"
                className="rounded-2xl w-full object-cover"
              />

              <div className="grid gap-4">
                {[
                  "Massive Audience Reach",
                  "Advanced Targeting Options",
                  "Flexible Budgeting",
                  "Multiple Ad Formats",
                  "Real-Time Analytics",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="max-w-4xl mx-auto space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold">How Meta Ads Work</h2>

              <img
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1600"
                alt="Ads process"
                className="rounded-2xl w-full object-cover"
              />

              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Create Meta Business Account</li>
                <li>Set up campaign</li>
                <li>Define audience</li>
                <li>Set budget</li>
                <li>Create ad</li>
                <li>Launch campaign</li>
              </ol>
            </section>

            {/* TYPES */}
            <section className="max-w-4xl mx-auto space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold">Types of Meta Ads</h2>

              <img
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1600"
                alt="Different ad formats"
                className="rounded-2xl w-full object-cover"
              />

              <div className="grid gap-3 text-gray-300">
                <p>• Image Ads</p>
                <p>• Video Ads</p>
                <p>• Carousel Ads</p>
                <p>• Story Ads</p>
                <p>• Reels Ads</p>
              </div>
            </section>

            {/* STEPS */}
            <section className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">How to Create Meta Ads Step-by-Step</h2>

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600"
                alt="Ad setup dashboard"
                className="rounded-2xl w-full object-cover"
              />

              <div className="space-y-2 text-gray-300">
                <p>1. Create Business Account</p>
                <p>2. Open Ads Manager</p>
                <p>3. Choose Objective</p>
                <p>4. Define Audience</p>
                <p>5. Set Budget</p>
                <p>6. Create Ad</p>
                <p>7. Publish Campaign</p>
              </div>
            </section>

            {/* TIPS */}
            <section className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Best Practices for High Performance</h2>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600"
                alt="Team working on marketing"
                className="rounded-2xl w-full object-cover"
              />

              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Use high-quality visuals</li>
                <li>Write strong headlines</li>
                <li>Target the right audience</li>
                <li>Test multiple ads</li>
                <li>Optimize regularly</li>
              </ul>
            </section>

            {/* FINAL */}
            <footer className="max-w-4xl mx-auto space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold">Final Thoughts</h2>

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600"
                alt="Business growth chart"
                className="rounded-2xl w-full object-cover"
              />

              <p className="text-gray-300 leading-relaxed">
                Meta Ads are one of the most powerful digital marketing tools available today. With the
                right strategy, businesses can grow fast and reach millions of customers worldwide.
              </p>
            </footer>

          </div>
        </div>
      </section>

      <PurchaseModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}