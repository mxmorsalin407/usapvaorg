import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Users,
  Globe2,
  BadgeCheck,
  Activity,
} from "lucide-react";

const allReviews = [
  {
    name: "Michael Chen",
    role: "E-com Founder",
    country: "🇺🇸",
    verified: "Verified Buyer",
    text: "Got a verified Stripe US account instantly. The dashboard is flawless and support is available 24/7.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Sarah Jenkins",
    role: "Media Buyer",
    country: "🇬🇧",
    verified: "Trusted Client",
    text: "Best agency ad accounts I've ever used. High daily limits and zero bans so far.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "David Mueller",
    role: "Dropshipping Pro",
    country: "🇩🇪",
    verified: "Verified Buyer",
    text: "Their PayPal aged accounts are top tier. Extremely reliable service.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Agency",
    country: "🇪🇸",
    verified: "Verified Agency",
    text: "100% login rate, no verifications triggered. Will buy again.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "James Carter",
    role: "SaaS Owner",
    country: "🇨🇦",
    verified: "Premium User",
    text: "Needed a UK Wise business account and had it fully operational within an hour.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    name: "Aisha Patel",
    role: "Affiliate Marketer",
    country: "🇦🇺",
    verified: "Verified Buyer",
    text: "My campaigns have been running untouched for months.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=6",
  },
  {
    name: "Lucas Silva",
    role: "Crypto Investor",
    country: "🇧🇷",
    verified: "Trusted Client",
    text: "Paid with Crypto, received the verified exchange accounts instantly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=7",
  },
  {
    name: "Kenji Sato",
    role: "Store Owner",
    country: "🇯🇵",
    verified: "Premium Member",
    text: "The quality of the accounts is unmatched. Worth every penny.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=8",
  },
  {
    name: "Daniel White",
    role: "Agency Owner",
    country: "🇺🇸",
    verified: "Verified Agency",
    text: "Instant delivery and premium quality accounts. Very professional.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=9",
  },
  {
    name: "Nina Brooks",
    role: "Digital Marketer",
    country: "🇳🇱",
    verified: "Verified Buyer",
    text: "Best support team I've experienced in this industry.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=10",
  },
  {
    name: "Ahmed Khan",
    role: "Entrepreneur",
    country: "🇦🇪",
    verified: "Trusted Client",
    text: "Very smooth onboarding process and secure accounts.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=11",
  },
  {
    name: "Sophia Miller",
    role: "Ads Specialist",
    country: "🇫🇷",
    verified: "Premium User",
    text: "Running multiple campaigns with zero issues so far.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=12",
  },
];

const stats = [
  {
    label: "Happy Clients",
    value: 15000,
    suffix: "+",
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    label: "Account Uptime",
    value: 99.9,
    suffix: "%",
    decimal: 1,
    icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-green-400 to-emerald-600",
  },
  {
    label: "Average Rating",
    value: 4.9,
    suffix: "/5",
    decimal: 1,
    icon: <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    label: "Countries Served",
    value: 120,
    suffix: "+",
    icon: <Globe2 className="w-5 h-5 md:w-6 md:h-6" />,
    color: "from-purple-500 to-pink-600",
  },
];

const ReviewCard = ({ review }) => (
  <div className="w-[320px] md:w-[380px] shrink-0 mx-3 md:mx-4 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.04] border border-white/10 backdrop-blur-3xl hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 group">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-all"
          />

          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border border-[#050505]">
            <ShieldCheck className="w-3 h-3 text-white" />
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm md:text-base font-semibold flex items-center gap-2">
            {review.name}
            <span>{review.country}</span>
          </h4>

          <p className="text-gray-500 text-[11px] md:text-xs">
            {review.role}
          </p>

          <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-bold tracking-wide uppercase">
            <BadgeCheck className="w-3 h-3" />
            {review.verified}
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500"
          />
        ))}
      </div>
    </div>

    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
      "{review.text}"
    </p>
  </div>
);

export default function Testimonials() {
  const topRow = [...allReviews.slice(0, 6), ...allReviews.slice(0, 6)];
  const bottomRow = [...allReviews.slice(6, 12), ...allReviews.slice(6, 12)];

  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">

      {/* bg effects */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 blur-[120px] md:blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 blur-[120px] md:blur-[140px] rounded-full"></div>

      {/* heading */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-14 md:mb-20">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-5 md:mb-6 backdrop-blur-md"
          >
            <Star className="w-3 h-3 fill-current" />
            Customer Success
          </motion.div>

          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Trusted by 10,000+ businesses
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#06b6d4]">
              worldwide.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-lg max-w-2xl mt-4 md:mt-5"
          >
            Don't just take our word for it. See what top entrepreneurs,
            media buyers, and agencies say about our premium accounts.
          </motion.p>
        </div>
      </div>

      {/* marquee */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 overflow-hidden">

        <div className="flex whitespace-nowrap animate-marquee gap-0">
          {topRow.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        <div className="flex whitespace-nowrap animate-marquee-reverse gap-0">
          {bottomRow.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-[10%] md:w-[12%] bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-20"></div>
        <div className="absolute inset-y-0 right-0 w-[10%] md:w-[12%] bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-20"></div>
      </div>

      {/* stats */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20 md:mt-28">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-3xl overflow-hidden"
        >

          {/* gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>

          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 md:p-6 overflow-hidden"
            >

              {/* glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${stat.color} blur-3xl`}
              ></div>

              {/* icon */}
              <div
                className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,255,255,0.08)] mb-3 md:mb-5`}
              >
                {stat.icon}
              </div>

              {/* counter */}
              <h3 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-1 md:mb-2">
                {stat.value}
                {stat.suffix}
              </h3>

              {/* label */}
              <p className="relative z-10 text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] leading-relaxed">
                {stat.label}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* marquee animation */}
      <style>
        {`
          .animate-marquee {
            animation: marquee 45s linear infinite;
            width: max-content;
          }

          .animate-marquee-reverse {
            animation: marqueeReverse 45s linear infinite;
            width: max-content;
          }

          @keyframes marquee {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes marqueeReverse {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0%);
            }
          }
        `}
      </style>
    </section>
  );
}