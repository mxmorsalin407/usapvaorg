import { AnimatePresence, motion } from "framer-motion";
import {
    X,
    ShieldCheck,
    Clock3,
    BadgeCheck,
    MessageCircle,
    Send,
    Mail,
    CheckCircle2,
} from "lucide-react";

export default function PurchaseModal({
    isOpen,
    onClose,
    product,
}) {
    if (!product) return null;

    const whatsappMessage = `Hi, I want to buy ${product.title} - ${product.price}`;

    const whatsappLink = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    const telegramLink = `https://t.me/yourusername`;

    const emailLink = `mailto:your@email.com?subject=Buy ${product.title}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 cursor-default"
                >
                    {/* MODAL */}
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{
                            opacity: 0,
                            y: 30,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.96,
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                        className="
              relative
              w-full
              max-w-4xl
              overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-[#09090c]/95
              shadow-[0_0_80px_rgba(0,255,255,0.08)]
              cursor-auto
            "
                    >
                        {/* background glow */}
                        <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
                        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />

                        {/* CLOSE */}
                        <button
                            onClick={onClose}
                            className="
                absolute top-4 right-4 z-50
                h-10 w-10 rounded-full
                bg-white/5 hover:bg-red-500/20
                border border-white/10
                flex items-center justify-center
                transition
              "
                        >
                            <X className="w-4 h-4 text-white" />
                        </button>

                        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

                            {/* LEFT SIDE */}
                            <div className="relative hidden lg:block min-h-[520px]">

                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                {/* floating glow */}
                                <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500/20 blur-[90px] rounded-full" />

                                {/* content */}
                                <div className="absolute bottom-0 p-8">

                                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-xs font-bold">
                                        {product.badge || "Premium Stock"}
                                    </div>

                                    <h2 className="mt-5 text-4xl font-black text-white leading-tight">
                                        {product.title}
                                    </h2>

                                    <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-md">
                                        {product.desc}
                                    </p>

                                    <div className="mt-5 flex items-center gap-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

                                        <span className="text-green-400 text-sm font-semibold">
                                            {product.stock}
                                        </span>
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="relative p-6 md:p-8 lg:p-10">

                                {/* mobile image */}
                                <div className="lg:hidden mb-5 overflow-hidden rounded-2xl border border-white/10">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                <div className="flex items-start justify-between gap-5">

                                    <div>
                                        <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-bold">
                                            Secure Checkout
                                        </p>

                                        <h3 className="mt-2 text-3xl md:text-4xl font-black text-white">
                                            Complete Purchase
                                        </h3>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 uppercase">
                                            Price
                                        </p>

                                        <div className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                                            {product.price}
                                        </div>
                                    </div>

                                </div>

                                {/* features */}
                                <div className="mt-7 grid grid-cols-2 gap-3">

                                    {[
                                        "Instant Delivery",
                                        "Verified Accounts",
                                        "Secure Login",
                                        "Replacement Support",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="
                        flex items-center gap-2
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.03]
                        px-4 py-3
                        text-sm text-gray-300
                      "
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                            {item}
                                        </div>
                                    ))}

                                </div>

                                {/* action buttons */}
                                <div className="mt-8 space-y-3">

                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                      group
                      h-14 rounded-2xl
                      bg-[#25D366]
                      hover:scale-[1.015]
                      transition-all duration-300
                      flex items-center justify-center gap-3
                      font-bold text-white
                    "
                                    >
                                        <MessageCircle size={19} />
                                        Buy via WhatsApp
                                    </a>

                                    <a
                                        href={telegramLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                      group
                      h-14 rounded-2xl
                      bg-[#229ED9]
                      hover:scale-[1.015]
                      transition-all duration-300
                      flex items-center justify-center gap-3
                      font-bold text-white
                    "
                                    >
                                        <Send size={19} />
                                        Buy via Telegram
                                    </a>

                                    <a
                                        href={emailLink}
                                        className="
                      group
                      h-14 rounded-2xl
                      border border-cyan-400/20
                      bg-gradient-to-r from-cyan-500/20 to-violet-500/20
                      hover:scale-[1.015]
                      transition-all duration-300
                      flex items-center justify-center gap-3
                      font-bold text-white
                    "
                                    >
                                        <Mail size={19} />
                                        Email Order
                                    </a>

                                </div>

                                {/* trust */}
                                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-5">

                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <ShieldCheck className="w-4 h-4 text-green-400" />
                                        Secure Payment
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Clock3 className="w-4 h-4 text-cyan-400" />
                                        Instant Delivery
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <BadgeCheck className="w-4 h-4 text-violet-400" />
                                        Trusted Vendor
                                    </div>

                                </div>

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}