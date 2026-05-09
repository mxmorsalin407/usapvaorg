import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stars = [
    [7, 11], [14, 59], [21, 34], [34, 79], [44, 19],
    [54, 69], [61, 44], [69, 14], [77, 84], [84, 54],
    [91, 29], [11, 89], [27, 54], [39, 9], [49, 94],
    [64, 24], [74, 74], [87, 9], [4, 49], [47, 49],
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        .uf-root {
          position: relative;
          overflow: hidden;
          background: #04020e;
          font-family: 'Rajdhani', sans-serif;
        }

        /* BG */
        .uf-noise {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(ellipse 80% 55% at 50% -5%, rgba(110,50,255,0.22) 0%, transparent 68%),
            radial-gradient(ellipse 55% 50% at 92% 62%, rgba(255,130,50,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 45% 55% at 8% 82%, rgba(60,190,255,0.09) 0%, transparent 65%);
        }

        .uf-dotgrid {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 34px 34px;
        }

        .uf-scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          z-index: 2;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(150,90,255,0.55) 30%,
            rgba(255,170,50,0.55) 70%,
            transparent
          );
          animation: ufScan 9s linear infinite;
        }

        @keyframes ufScan {
          0% { top: -2px; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* GLOWS */
        .uf-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .uf-gl1 {
          width: 380px;
          height: 380px;
          top: -90px;
          left: -70px;
          background: radial-gradient(circle, rgba(110,50,255,0.25) 0%, transparent 70%);
          animation: ufGP 7s ease-in-out infinite;
        }

        .uf-gl2 {
          width: 320px;
          height: 320px;
          bottom: -90px;
          right: -70px;
          background: radial-gradient(circle, rgba(255,110,50,0.20) 0%, transparent 70%);
          animation: ufGP 9s ease-in-out 2s infinite;
        }

        .uf-gl3 {
          width: 560px;
          height: 320px;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(90,40,210,0.18) 0%, transparent 70%);
        }

        @keyframes ufGP {
          0%,100% {
            opacity: .7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        /* RINGS */
        .uf-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid;
          pointer-events: none;
          z-index: 2;
          top: 50%;
          left: 50%;
        }

        .uf-r1 {
          width: 500px;
          height: 500px;
          border-color: rgba(110,55,255,0.12);
          transform: translate(-50%,-50%) rotateX(72deg);
          animation: ufRRot 22s linear infinite;
        }

        .uf-r2 {
          width: 720px;
          height: 720px;
          border-color: rgba(255,130,50,0.08);
          transform: translate(-50%,-50%) rotateX(72deg);
          animation: ufRRot 34s linear infinite reverse;
        }

        @keyframes ufRRot {
          from {
            transform: translate(-50%,-50%) rotateX(72deg) rotateZ(0deg);
          }
          to {
            transform: translate(-50%,-50%) rotateX(72deg) rotateZ(360deg);
          }
        }

        /* LINKS */
        .uf-link {
          transition: all .25s ease;
        }

        .uf-link:hover {
          transform: translateX(4px);
        }

        /* SOCIAL */
        .uf-social {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all .25s ease;
          backdrop-filter: blur(10px);
        }

        .uf-social:hover {
          transform: translateY(-4px);
          border-color: rgba(80,200,255,.45);
          background: rgba(80,200,255,.08);
          box-shadow: 0 0 28px rgba(80,200,255,.15);
        }

        /* BIG TEXT */
        .uf-brand {
          font-family: 'Orbitron', sans-serif;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.92),
            rgba(255,255,255,0.08)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 40px rgba(170,100,255,0.18));
        }

        /* BUTTON */
        .uf-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #6d28ff 0%,
            #a855f7 55%,
            #e879f9 100%
          );
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .25s ease;
          box-shadow:
            0 0 32px rgba(150,70,255,0.40),
            inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .uf-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow:
            0 0 55px rgba(150,70,255,0.65),
            0 14px 44px rgba(0,0,0,0.45);
        }

        @media(max-width:760px){
          .uf-r1,
          .uf-r2{
            display:none;
          }
        }
      `}</style>

      <footer
        ref={containerRef}
        className="uf-root relative pt-24 pb-10 border-t border-white/10"
      >

        {/* BG */}
        <div className="uf-noise" />
        <div className="uf-dotgrid" />
        <div className="uf-scanline" />

        {/* GLOWS */}
        <div className="uf-glow uf-gl1" />
        <div className="uf-glow uf-gl2" />
        <div className="uf-glow uf-gl3" />

        {/* RINGS */}
        <div className="uf-ring uf-r1" />
        <div className="uf-ring uf-r2" />

        {/* STARS */}
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          {stars.map(([x, y], i) => (
            <circle
              key={i}
              cx={`${x}%`}
              cy={`${y}%`}
              r={i % 5 === 0 ? 1.6 : 0.9}
              fill="white"
              opacity={0.15 + (i % 6) * 0.08}
              style={{
                animation: `ufGP ${2 + (i % 4) * 0.7}s ease-in-out ${i * 0.28}s infinite`,
              }}
            />
          ))}

          <line
            x1="0"
            y1="0"
            x2="17%"
            y2="33%"
            stroke="rgba(110,55,255,0.09)"
            strokeWidth="1"
          />

          <line
            x1="100%"
            y1="0"
            x2="83%"
            y2="38%"
            stroke="rgba(255,130,50,0.08)"
            strokeWidth="1"
          />

          <line
            x1="0"
            y1="100%"
            x2="19%"
            y2="67%"
            stroke="rgba(60,190,255,0.07)"
            strokeWidth="1"
          />

          <line
            x1="100%"
            y1="100%"
            x2="81%"
            y2="66%"
            stroke="rgba(110,55,255,0.07)"
            strokeWidth="1"
          />
        </svg>

        {/* EXISTING GLOW */}
        <motion.div
          style={{ y, opacity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-gradient-to-b from-cyan-900/20 via-purple-900/10 to-transparent blur-[120px] rounded-b-full pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

            {/* BRAND */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(50,150,255,0.25)]">
                  <span className="text-white font-bold">U</span>
                </div>

                <span
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  USAPVA<span className="text-cyan-400">ORG</span>
                </span>
              </h3>

              <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-6">
                Premium verified digital infrastructure for scaling businesses globally.
                Instant delivery, high quality, zero restrictions.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Twitter", "Discord", "Telegram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="uf-social px-4 py-2 rounded-full text-gray-300 text-sm hover:text-white"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Services
              </h4>

              <ul className="space-y-3 text-sm">
                {[
                  "Verified Banking",
                  "Ad Accounts",
                  "Social PVAs",
                  "Email PVAs",
                  "Custom Infrastructure",
                ].map((item) => (
                  <li key={item}>
                    <a className="uf-link text-gray-400 hover:text-cyan-400 transition cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Company
              </h4>

              <ul className="space-y-3 text-sm">
                {[
                  "About Us",
                  "Refund Policy",
                  "Terms of Service",
                  "Privacy Policy",
                  "Contact Support",
                ].map((item) => (
                  <li key={item}>
                    <a className="uf-link text-gray-400 hover:text-purple-400 transition cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* BIG BRAND TEXT */}
          <div className="flex justify-center mb-14 overflow-hidden">

            <motion.h1
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="uf-brand text-[10vw] font-black tracking-tight leading-none text-center"
            >
              USAPVAORG
            </motion.h1>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col items-center justify-center border-t border-white/10 pt-6 text-center">

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">

              <p className="text-gray-500 text-xs">
                © 2026 USAPVAORG. All rights reserved.
              </p>

              <motion.p className="text-sm text-gray-300 flex items-center gap-2">
                Made with{" "}

                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-red-500 inline-block"
                >
                  ❤️
                </motion.span>{" "}

                by USAPVAORG
              </motion.p>

            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-6">

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="uf-btn"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>

          </div>

        </div>
      </footer>
    </>
  );
}