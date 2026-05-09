import {
  Search,
  ShoppingBag,
  Menu,
  ChevronDown,
  Sparkles,
  Zap,
  X,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

const navItems = [
  {
    label: "Bank",
    links: [
      {
        name: "Buy Verified PayPal Accounts",
        desc: "Secure & aged US/UK/EU PayPal",
        href: "/buy-verified-paypal-accounts",
      },
      {
        name: "Buy Verified Stripe Accounts",
        desc: "Ready-to-use business Stripe",
        href: "/buy-verified-stripe-accounts",
      },
    ],
  },
  {
    label: "Crypto",
    links: [
      {
        name: "Buy Verified Binance Accounts",
        desc: "Fully KYC verified Binance",
        href: "/buy-verified-binance-accounts",
      },
      {
        name: "Buy Verified Coinbase Accounts",
        desc: "High limit exchange accounts",
        href: "/buy-verified-coinbase-accounts",
      },
    ],
  },
  {
    label: "Social",
    links: [
      {
        name: "Buy Verified Airbnb Accounts",
        desc: "Host & Guest verified accounts",
        href: "/buy-verified-airbnb-accounts",
      },
      {
        name: "Buy Verified Meta Ads Accounts",
        desc: "High spend agency ad accounts",
        href: "/buy-verified-meta-ads-accounts",
      },
    ],
  },
  {
    label: "Email",
    links: [
      {
        name: "Buy Verified Gmail Accounts",
        desc: "PVA aged Gmail accounts",
        href: "/buy-verified-gmail-accounts",
      },
      {
        name: "Buy Verified Outlook Accounts",
        desc: "Bulk verified email accounts",
        href: "/buy-verified-outlook-accounts",
      },
      {
        name: "Buy Verified Yahoo Accounts",
        desc: "Bulk verified email accounts",
        href: "/buy-verified-yahoo-accounts",
      },
    ],
  },
  {
    label: "Others",
    links: [
      {
        name: "View All Services",
        desc: "Explore our full marketplace",
        href: "/view-all-services",
      },
    ],
  },
]

// Flatten all links for searching
const allServices = navItems.flatMap(item => item.links.map(link => ({ ...link, category: item.label })))

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  
  const searchInputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = allServices.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5) // Limit to 5 suggestions
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [searchQuery])

  const handleSearchItemClick = (href) => {
    navigate(href)
    setShowSearch(false)
    setSearchQuery("")
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setShowSearch(prev => !prev)
      }
      if (e.key === 'Escape') {
        setShowSearch(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* NAVBAR */}
        <div
          className={`relative flex items-center justify-between rounded-2xl border transition-all duration-500 px-4 lg:px-6 py-3
          ${isScrolled
              ? "bg-[#090C14]/85 backdrop-blur-2xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              : "bg-[#090C14]/55 backdrop-blur-xl border-white/5"
            }`}
        >
          {/* LIGHT EFFECT */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/[0.03] via-blue-500/[0.02] to-purple-500/[0.03] pointer-events-none"></div>

          {/* LEFT */}
          <div className="flex items-center gap-8 relative z-10">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50"></div>

                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center border border-white/10 shadow-[0_0_25px_rgba(0,242,255,0.35)]">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>

              <h1 className="hidden sm:block text-xl font-black tracking-tight uppercase text-white">
                USAPVA
                <span className="text-cyan-400">ORG</span>
              </h1>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase">
              {/* HOME */}
              <Link
                to="/"
                className="relative px-4 py-2.5 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-xl bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-all"></span>

                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-8"></span>

                <span className="relative z-10">Home</span>
              </Link>

              {navItems.map((item) => {
                const isActive = activeDropdown === item.label

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* NAV ITEM */}
                    <button
                      className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 group overflow-hidden
                      ${isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {/* BACKGROUND */}
                      <span
                        className={`absolute inset-0 rounded-xl transition-all duration-300
                        ${isActive
                            ? "bg-gradient-to-b from-cyan-500/12 to-blue-500/8 border border-cyan-400/20"
                            : "bg-white/[0.03] opacity-0 group-hover:opacity-100"
                          }`}
                      ></span>

                      {/* ACTIVE EFFECT */}
                      {isActive && (
                        <>
                          <span className="absolute inset-x-3 bottom-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_12px_#00f2ff]"></span>

                          <span className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2ff]"></span>
                        </>
                      )}

                      {/* TEXT */}
                      <span className="relative z-10">
                        {item.label}
                      </span>

                      {/* ICON */}
                      <ChevronDown
                        className={`relative z-10 w-3.5 h-3.5 transition-all duration-300
                        ${isActive
                            ? "rotate-180 text-cyan-400"
                            : "group-hover:text-cyan-300"
                          }`}
                      />
                    </button>

                    {/* DROPDOWN */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-3 w-[340px] z-50"
                        >
                          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F17]/95 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.55)] p-3">
                            {/* GLOW */}
                            <div className="absolute top-0 left-10 w-28 h-28 bg-cyan-500/10 blur-3xl"></div>

                            {/* HEADER */}
                            <div className="relative flex items-center justify-between px-2 pb-3 mb-2 border-b border-white/5">
                              <div>
                                <h3 className="text-white text-xs font-black tracking-[0.18em] uppercase">
                                  {item.label}
                                </h3>

                                <p className="text-[10px] text-gray-500 mt-1">
                                  Premium marketplace services
                                </p>
                              </div>

                              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/10 flex items-center justify-center">
                                <Zap className="w-3.5 h-3.5 text-cyan-300" />
                              </div>
                            </div>

                            {/* LINKS */}
                            <div className="space-y-2">
                              {item.links.map((link) => (
                                <Link
                                  key={link.name}
                                  to={link.href}
                                  className="group/item relative flex items-start justify-between gap-3 rounded-xl border border-transparent hover:border-cyan-400/10 bg-white/[0.02] hover:bg-gradient-to-r hover:from-cyan-500/8 hover:to-blue-500/5 p-3 transition-all duration-300"
                                >
                                  {/* LEFT BAR */}
                                  <span className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-cyan-400 opacity-0 group-hover/item:opacity-100 transition-all"></span>

                                  <div>
                                    <div className="text-[12px] font-bold text-white group-hover/item:text-cyan-300 transition-colors">
                                      {link.name}
                                    </div>

                                    <div className="text-[10px] text-gray-500 leading-relaxed mt-1 group-hover/item:text-gray-300 transition-colors">
                                      {link.desc}
                                    </div>
                                  </div>

                                  <div className="mt-1 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                                    <ChevronDown className="-rotate-90 w-4 h-4 text-cyan-300" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 relative z-10">
            {/* ICONS */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={() => setShowSearch(true)}
                className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-cyan-500/10 hover:border-cyan-400/20 flex items-center justify-center text-gray-300 hover:text-cyan-300 transition-all duration-300"
              >
                <Search className="w-4 h-4" />
              </button>

              <button className="relative w-10 h-10 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-cyan-500/10 hover:border-cyan-400/20 flex items-center justify-center text-gray-300 hover:text-cyan-300 transition-all duration-300">
                <ShoppingBag className="w-4 h-4" />

                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 text-black text-[9px] font-black flex items-center justify-center shadow-[0_0_10px_#00f2ff]">
                  0
                </span>
              </button>
            </div>

            {/* LOGIN */}
            <button className="hidden sm:block text-[11px] font-bold tracking-[0.18em] uppercase text-gray-300 hover:text-white transition-all">
              Login
            </button>

            {/* JOIN */}
            <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black text-[11px] font-black uppercase tracking-[0.18em] px-5 py-2.5 rounded-xl transition-all shadow-[0_0_25px_rgba(0,242,255,0.3)] hover:shadow-[0_0_35px_rgba(0,242,255,0.5)] active:scale-95">
              Join
              <Zap className="w-3.5 h-3.5" />
            </button>

            {/* MOBILE MENU BTN */}
            <div className="flex items-center gap-2 lg:hidden">
              <button 
                onClick={() => setShowSearch(true)}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white"
              >
                {mobileMenu ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-3"
            >
              <div className="rounded-2xl border border-white/10 bg-[#0B0F17]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-3">
                <div className="space-y-2">
                  {/* HOME */}
                  <Link
                    to="/"
                    className="block rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-sm font-bold text-white"
                  >
                    Home
                  </Link>

                  {/* MOBILE DROPDOWNS */}
                  {navItems.map((item) => {
                    const open = mobileDropdown === item.label

                    return (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              open ? null : item.label
                            )
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold transition-all
                          ${open
                              ? "text-white bg-cyan-500/10"
                              : "text-gray-300"
                            }`}
                        >
                          {item.label}

                          <ChevronDown
                            className={`w-4 h-4 transition-transform
                            ${open
                                ? "rotate-180 text-cyan-400"
                                : ""
                              }`}
                          />
                        </button>

                        <AnimatePresence>
                          {open && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-3 pb-3"
                            >
                              <div className="space-y-2">
                                {item.links.map((link) => (
                                  <Link
                                    key={link.name}
                                    to={link.href}
                                    className="block rounded-xl bg-black/20 border border-white/5 hover:border-cyan-400/10 hover:bg-cyan-500/5 p-3 transition-all"
                                  >
                                    <div className="text-sm font-bold text-white">
                                      {link.name}
                                    </div>

                                    <div className="text-[11px] text-gray-500 mt-1">
                                      {link.desc}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-[#030305]/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                
                <div className="relative flex items-center gap-4 bg-[#090C14] border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <Search className="w-6 h-6 text-cyan-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for accounts, services, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-white text-lg placeholder:text-gray-600"
                  />
                  <button 
                    onClick={() => setShowSearch(false)}
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* SUGGESTIONS */}
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#090C14]/80 backdrop-blur-xl shadow-2xl p-2"
                  >
                    {suggestions.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleSearchItemClick(item.href)}
                        className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.03] transition-all group"
                      >
                        <div className="flex flex-col items-start text-left">
                          <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{item.name}</span>
                          <span className="text-[10px] text-gray-500 mt-0.5">{item.desc}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-cyan-500/50 bg-cyan-500/10 px-2 py-0.5 rounded-full">{item.category}</span>
                          <Zap className="w-3.5 h-3.5 text-gray-700 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
                
                {searchQuery.trim().length > 0 && suggestions.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 p-8 text-center"
                  >
                    <p className="text-gray-500 text-sm">No results found for "<span className="text-white italic">{searchQuery}</span>"</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* QUICK HINTS */}
              <div className="mt-8 flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                <span className="flex items-center gap-2"><kbd className="bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-400 font-sans">ESC</kbd> to close</span>
                <span className="flex items-center gap-2"><kbd className="bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-400 font-sans">ENTER</kbd> to select</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}