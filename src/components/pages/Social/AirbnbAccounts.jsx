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
    title: "Fresh Airbnb Accounts",
    price: "$6",
    desc: "Freshly created Airbnb accounts with clean setup and verified email access.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
    stock: "3.5K In Stock",
    badge: "Fresh",
  },
  {
    title: "Aged Airbnb Accounts",
    price: "$22",
    desc: "Aged Airbnb accounts with stable profile history and higher trust score.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    stock: "1.2K In Stock",
    badge: "Best Seller",
  },
  {
    title: "Verified Airbnb Accounts",
    price: "$55",
    desc: "Fully verified Airbnb accounts with secure recovery and strong credibility.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    stock: "780 In Stock",
    badge: "Verified",
  },
  {
    title: "Bulk Airbnb Package",
    price: "$520",
    desc: "Bulk Airbnb account package for agencies, travel operators and resellers.",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
    stock: "Bulk Ready",
    badge: "Bulk",
  },
];

export default function AirbnbAccounts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#050814] text-white py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1b2c] via-[#050814] to-[#071018]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ff385c30_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-40" />

        {/* Glow */}
        <div className="absolute top-20 left-20 w-[700px] h-[700px] bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[140px]" />

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
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
                Airbnb Accounts
              </span>
            </motion.h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Premium verified Airbnb accounts with trusted profiles, instant delivery
              and secure access for hosting and travel use.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-400" />
              Verified Profiles
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-pink-400" />
              Instant Delivery
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-rose-400" />
              High Trust Rating
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
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/20 text-pink-300 text-xs font-bold backdrop-blur-xl">
                  {item.badge}
                </div>

                {/* image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090814] via-[#09081470] to-transparent" />
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
                      "Host Ready Profile",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-pink-400" />
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
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 text-black text-xs font-black uppercase hover:scale-105 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-pink-500/10 to-rose-500/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center text-gray-400 text-sm">
            All Airbnb accounts are manually verified • 24/7 support • Secure access included
          </div>

          {/* Content Section */}
          <div className="mt-[1in] max-w-4xl mx-auto space-y-12">

            <header className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                How to Use Airbnb for Booking Accommodation Easily (Complete Guide 2026)
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Travel has become easier than ever thanks to online platforms that connect travelers
                with accommodation options around the world. One of the most popular platforms for
                short-term stays is Airbnb, which allows people to rent homes, apartments, and unique
                stays directly from hosts.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Airbnb is a global platform that connects travelers with hosts who offer accommodations
                ranging from budget rooms to luxury villas. It has changed the way people travel by
                offering flexible, affordable, and local stay options.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">What is Airbnb?</h2>
              <p className="text-gray-300 leading-relaxed">
                Airbnb is an online marketplace where hosts can list their properties for short-term
                rentals, and travelers can book those places for their stay. It operates in almost
                every country and offers millions of listings worldwide.
              </p>

              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Private rooms</li>
                <li>Entire apartments</li>
                <li>Luxury villas</li>
                <li>Shared spaces</li>
                <li>Unique stays (treehouses, boats, cabins)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Why Airbnb is Popular Among Travelers</h2>
              <p className="text-gray-300">
                Airbnb has become one of the most widely used travel platforms due to its flexibility
                and variety.
              </p>

              <ul className="space-y-3 text-gray-300">
                <li>✔ Wide Range of Options</li>
                <li>✔ Local Experience</li>
                <li>✔ Flexible Pricing</li>
                <li>✔ Easy Booking System</li>
                <li>✔ Reviews and Ratings</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">How Airbnb Works</h2>

              <div className="space-y-2 text-gray-300">
                <p>Host lists property with photos and details</p>
                <p>Guest searches for accommodation</p>
                <p>Guest sends booking request</p>
                <p>Host accepts or declines</p>
                <p>Payment is processed securely</p>
                <p>Guest stays at property</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">How to Create an Airbnb Account</h2>

              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Visit Airbnb Website or App</li>
                <li>Sign Up using Email / Google / Apple / Phone</li>
                <li>Enter Basic Details</li>
                <li>Verify Your Account</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">How to Book a Stay on Airbnb</h2>

              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Search Location</li>
                <li>Choose Dates</li>
                <li>Filter Options</li>
                <li>Check Listing Details</li>
                <li>Book the Property</li>
                <li>Make Payment</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Tips for a Better Airbnb Experience</h2>

              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Read reviews carefully before booking</li>
                <li>Check cancellation policy</li>
                <li>Communicate with the host</li>
                <li>Compare multiple listings</li>
                <li>Book early during peak seasons</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Benefits of Using Airbnb</h2>

              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>More Space</li>
                <li>Affordable Options</li>
                <li>Local Experience</li>
                <li>Unique Properties</li>
                <li>Flexible Choices</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Airbnb Safety Features</h2>

              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Verified identity system</li>
                <li>Secure payment system</li>
                <li>Review system for transparency</li>
                <li>24/7 customer support</li>
                <li>Messaging system for communication</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Final Thoughts</h2>

              <p className="text-gray-300 leading-relaxed">
                Airbnb is one of the most flexible and popular travel platforms in the world. It allows
                users to find unique and affordable accommodations while experiencing local culture in
                different countries.
              </p>

              <p className="text-gray-300 leading-relaxed">
                By understanding how to use the platform properly, travelers can enjoy a smooth and
                comfortable booking experience.
              </p>
            </section>
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