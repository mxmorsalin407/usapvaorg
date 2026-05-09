import React, { useEffect, useState } from "react";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";

const CYCLING_TEXTS = ["Instant Delivery", "Phone Verified", "Lifetime Replacement"];

export default function UltimateSaleHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % CYCLING_TEXTS.length);
        setAnimating(false);
      }, 380);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const stars = [
    [7, 11], [14, 59], [21, 34], [34, 79], [44, 19], [54, 69], [61, 44], [69, 14], [77, 84], [84, 54], [91, 29],
    [11, 89], [27, 54], [39, 9], [49, 94], [64, 24], [74, 74], [87, 9], [4, 49], [47, 49],
    [19, 21], [32, 65], [57, 32], [71, 87], [89, 64], [13, 43], [41, 77], [65, 7], [79, 39], [53, 58],
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Great+Vibes&family=Rajdhani:wght@400;500;600;700&display=swap');

        .uw { all: unset; display: block; }
        .uw *, .uw *::before, .uw *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .uw-root {
          width: 100%;
          min-height: 100vh;
          background: #04020e;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Rajdhani', sans-serif;
        }

        /* BG LAYERS */
        .uw-noise {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 80% 55% at 50% -5%, rgba(110,50,255,0.28) 0%, transparent 68%),
            radial-gradient(ellipse 55% 50% at 92% 62%, rgba(255,130,50,0.14) 0%, transparent 65%),
            radial-gradient(ellipse 45% 55% at 8% 82%, rgba(60,190,255,0.11) 0%, transparent 65%);
        }
        .uw-dotgrid {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px);
          background-size: 34px 34px;
        }
        .uw-scanline {
          position: absolute; left: 0; right: 0; height: 1px; z-index: 2;
          background: linear-gradient(90deg, transparent, rgba(150,90,255,0.55) 30%, rgba(255,170,50,0.55) 70%, transparent);
          animation: uwScan 9s linear infinite;
        }
        @keyframes uwScan {
          0% { top: -2px; opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { top: 100%; opacity: 0; }
        }

        /* GLOWS */
        .uw-glow { position: absolute; border-radius: 50%; pointer-events: none; z-index: 1; }
        .uw-gl1 {
          width: 380px; height: 380px; top: -90px; left: -70px;
          background: radial-gradient(circle, rgba(110,50,255,0.28) 0%, transparent 70%);
          animation: uwGP 7s ease-in-out infinite;
        }
        .uw-gl2 {
          width: 320px; height: 320px; bottom: -90px; right: -70px;
          background: radial-gradient(circle, rgba(255,110,50,0.22) 0%, transparent 70%);
          animation: uwGP 9s ease-in-out 2s infinite;
        }
        .uw-gl3 {
          width: 560px; height: 320px; top: -100px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(90,40,210,0.20) 0%, transparent 70%);
        }
        @keyframes uwGP {
          0%,100% { opacity: .7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.12); }
        }

        /* RINGS */
        .uw-ring {
          position: absolute; border-radius: 50%; border: 1px solid;
          pointer-events: none; z-index: 3; top: 50%; left: 50%;
        }
        .uw-r1 {
          width: 440px; height: 440px; border-color: rgba(110,55,255,0.18);
          transform: translate(-50%,-50%) rotateX(72deg);
          animation: uwRRot 22s linear infinite;
        }
        .uw-r2 {
          width: 620px; height: 620px; border-color: rgba(255,130,50,0.10);
          transform: translate(-50%,-50%) rotateX(72deg);
          animation: uwRRot 32s linear infinite reverse;
        }
        .uw-r3 {
          width: 800px; height: 800px; border-color: rgba(60,190,255,0.07);
          transform: translate(-50%,-50%) rotateX(72deg);
          animation: uwRRot 44s linear infinite;
        }
        @keyframes uwRRot {
          from { transform: translate(-50%,-50%) rotateX(72deg) rotateZ(0deg); }
          to   { transform: translate(-50%,-50%) rotateX(72deg) rotateZ(360deg); }
        }
        .uw-odot {
          position: absolute; z-index: 4; top: 50%; left: 50%;
          width: 0; height: 0; pointer-events: none;
          animation: uwODot 22s linear infinite;
        }
        .uw-odot::after {
          content: ''; position: absolute;
          width: 11px; height: 11px; border-radius: 50%;
          background: #9d5cff;
          box-shadow: 0 0 18px 5px rgba(157,92,255,0.7);
          transform: translate(-5px,-5px) translateX(220px);
        }
        @keyframes uwODot { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg); } }

        /* FLOATING CARDS */
        .uw-fc {
          position: absolute; z-index: 7;
          background: rgba(14,7,34,0.72);
          border: 1px solid rgba(130,72,255,0.38);
          border-radius: 14px; padding: 13px 18px;
          backdrop-filter: blur(14px);
          display: flex; align-items: center; gap: 12px;
          pointer-events: none;
          box-shadow: 0 0 44px rgba(90,40,200,0.22), inset 0 1px 0 rgba(255,255,255,0.07);
        }
        .uw-fc-icon {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .uw-fc-lbl {
          font-family: 'Rajdhani', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; color: rgba(155,135,200,0.7); line-height: 1;
        }
        .uw-fc-val {
          font-family: 'Orbitron', sans-serif;
          font-size: 13px; font-weight: 700; color: #fff; line-height: 1.3; margin-top: 3px;
        }
        .uw-fc-tl { top: 13%; left: 2.5%; animation: uwFC1 7s ease-in-out infinite; }
        .uw-fc-tr { top: 16%; right: 2.5%; animation: uwFC2 6.5s ease-in-out infinite; }
        .uw-fc-bl { bottom: 13%; left: 2.5%; animation: uwFC3 8.5s ease-in-out infinite; }
        .uw-fc-br { bottom: 16%; right: 2.5%; animation: uwFC1 9s ease-in-out 1.2s infinite; }
        @keyframes uwFC1 { 0%,100%{transform:translateY(0) rotate(-1.2deg);} 50%{transform:translateY(-14px) rotate(0deg);} }
        @keyframes uwFC2 { 0%,100%{transform:translateY(0) rotate(1deg);} 50%{transform:translateY(-10px) rotate(0deg);} }
        @keyframes uwFC3 { 0%,100%{transform:translateY(0) rotate(-1.8deg);} 60%{transform:translateY(-18px) rotate(-0.5deg);} }

        /* HERO CONTENT */
        .uw-content {
          position: relative; z-index: 10;
          text-align: center;
          padding: 56px 24px 72px;
          max-width: 860px; width: 100%;
        }

        /* BADGE */
        .uw-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 20px;
          border: 1px solid rgba(150,90,255,0.5);
          border-radius: 100px;
          background: rgba(110,50,255,0.13);
          color: rgba(200,170,255,0.9);
          font-size: 11.5px; letter-spacing: 2.5px; font-weight: 600;
          text-transform: uppercase; margin-bottom: 26px;
          animation: uwFU .6s ease both;
        }
        .uw-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #9d5cff; box-shadow: 0 0 8px #9d5cff;
          animation: uwDP 2s ease infinite; flex-shrink: 0;
        }
        @keyframes uwDP { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.45;transform:scale(.7);} }

        /* TITLE */
        .uw-title {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(40px, 8.5vw, 92px); font-weight: 900;
          letter-spacing: 7px; line-height: 1.04;
          display: flex; align-items: center; justify-content: center; gap: 18px;
          animation: uwFU .7s ease .1s both;
        }
        .uw-title-word {
          background: linear-gradient(135deg, #fff 25%, #c8a0ff 65%, #ff9d50 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 55px rgba(170,100,255,0.38));
        }
        .uw-sparkle {
          color: #c09cff;
          filter: drop-shadow(0 0 16px rgba(175,100,255,0.75));
          animation: uwSpin 14s linear infinite;
          flex-shrink: 0;
        }
        @keyframes uwSpin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }

        /* SALE */
        .uw-sale {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(68px, 13.5vw, 132px);
          line-height: 1; margin-top: -12px;
          background: linear-gradient(115deg, #ffd580 0%, #ff9d50 48%, #ff6cb5 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 32px rgba(255,155,80,.38));
          animation: uwFU .7s ease .2s both;
        }

        /* DYNAMIC ROW */
        .uw-dyn {
          display: flex; align-items: center; justify-content: center;
          margin: 20px 0 0;
          animation: uwFU .7s ease .3s both;
        }
        .uw-static {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(12px, 2.6vw, 19px); font-weight: 500;
          color: rgba(195,175,255,0.7); letter-spacing: 3px; white-space: nowrap;
        }
        .uw-sep {
          width: 1px; height: 26px;
          background: rgba(150,90,255,0.5);
          margin: 0 18px; flex-shrink: 0;
        }
        .uw-cyc-box {
          min-width: 230px; height: 36px;
          display: flex; align-items: center; overflow: hidden;
        }
        .uw-cyc {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(13px, 2.6vw, 19px); font-weight: 700; letter-spacing: 2px;
          white-space: nowrap;
          background: linear-gradient(90deg, #ffe080 0%, #ff9d50 50%, #ff6cb5 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          transition: transform .35s cubic-bezier(.4,0,.2,1), opacity .35s ease;
          transform: translateY(0); opacity: 1;
        }
        .uw-cyc.out { transform: translateY(-22px); opacity: 0; }

        /* DESC */
        .uw-desc {
          max-width: 570px; margin: 28px auto 0;
          color: rgba(175,165,210,0.72);
          font-size: clamp(13px, 1.8vw, 15px); line-height: 1.85;
          font-family: sans-serif; font-weight: 400;
          animation: uwFU .7s ease .4s both;
        }

        /* CTA */
        .uw-cta {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; margin-top: 42px; flex-wrap: wrap;
          animation: uwFU .7s ease .5s both;
        }
        .uw-btn-p {
          position: relative; padding: 0 38px; height: 54px;
          background: linear-gradient(135deg, #6d28ff 0%, #a855f7 55%, #e879f9 100%);
          border: none; border-radius: 8px; color: #fff; cursor: pointer; overflow: hidden;
          font-family: 'Orbitron', sans-serif; font-size: 12.5px; font-weight: 700; letter-spacing: 2.5px;
          transition: transform .25s ease, box-shadow .25s ease;
          box-shadow: 0 0 32px rgba(150,70,255,0.45), inset 0 1px 0 rgba(255,255,255,0.18);
          display: flex; align-items: center; gap: 10px;
        }
        .uw-btn-p::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%);
          border-radius: 8px; pointer-events: none;
        }
        .uw-btn-p:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 0 60px rgba(150,70,255,0.75), 0 14px 44px rgba(0,0,0,0.5);
        }
        .uw-btn-s {
          padding: 0 30px; height: 54px;
          background: transparent;
          border: 1px solid rgba(150,90,255,0.45);
          border-radius: 8px; color: rgba(215,195,255,0.9); cursor: pointer;
          font-family: 'Orbitron', sans-serif; font-size: 12.5px; font-weight: 600; letter-spacing: 2px;
          transition: all .25s ease; backdrop-filter: blur(6px);
          display: flex; align-items: center;
        }
        .uw-btn-s:hover {
          border-color: rgba(150,90,255,0.95);
          background: rgba(110,50,255,0.18);
          transform: translateY(-3px); color: #fff;
        }
        .uw-zap { animation: uwZap 2.8s ease-in-out infinite; }
        @keyframes uwZap {
          0%,100%{ filter: drop-shadow(0 0 2px #fff); }
          50%{ filter: drop-shadow(0 0 9px #ffcc44); }
        }

        /* TRUST */
        .uw-trust {
          display: flex; align-items: center; justify-content: center;
          gap: 22px; margin-top: 34px; flex-wrap: wrap;
          animation: uwFU .7s ease .6s both;
        }
        .uw-ti {
          display: flex; align-items: center; gap: 7px;
          font-size: 11.5px; color: rgba(170,155,210,0.62);
          letter-spacing: 1px; font-weight: 600; text-transform: uppercase;
          font-family: 'Rajdhani', sans-serif;
        }
        .uw-tdot { width: 3px; height: 3px; border-radius: 50%; background: rgba(150,90,255,0.38); flex-shrink: 0; }

        @keyframes uwFU { from{opacity:0;transform:translateY(22px);} to{opacity:1;transform:translateY(0);} }

        /* RESPONSIVE */
        @media(max-width:1080px){
          .uw-fc-tl,.uw-fc-bl { display: none; }
          .uw-r2,.uw-r3 { display: none; }
          .uw-fc-tr { top: 7%; right: 1.5%; }
          .uw-fc-br { bottom: 7%; right: 1.5%; }
        }
        @media(max-width:760px){
          .uw-fc-tl,.uw-fc-tr,.uw-fc-bl,.uw-fc-br { display: none; }
          .uw-r1,.uw-r2,.uw-r3,.uw-odot { display: none; }
          .uw-content { padding: 44px 18px 60px; }
          .uw-sale { margin-top: -6px; }
          .uw-dyn { flex-direction: column; gap: 7px; }
          .uw-sep { display: none; }
          .uw-cyc-box { justify-content: center; min-width: unset; }
          .uw-cta { flex-direction: column; align-items: center; }
          .uw-btn-p,.uw-btn-s { width: 100%; max-width: 290px; justify-content: center; }
          .uw-trust { gap: 12px; }
        }
        @media(max-width:420px){
          .uw-badge { font-size: 9.5px; padding: 6px 14px; }
          .uw-ti { font-size: 10px; }
        }
      `}</style>

      <div className="uw">
        <div className="uw-root">

          {/* BG layers */}
          <div className="uw-noise" />
          <div className="uw-dotgrid" />
          <div className="uw-scanline" />

          {/* Glows */}
          <div className="uw-glow uw-gl1" />
          <div className="uw-glow uw-gl2" />
          <div className="uw-glow uw-gl3" />

          {/* Star field */}
          <svg
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }}
          >
            {stars.map(([x, y], i) => (
              <circle
                key={i} cx={`${x}%`} cy={`${y}%`}
                r={i % 5 === 0 ? 1.6 : 0.9}
                fill="white"
                opacity={0.15 + (i % 6) * 0.08}
                style={{ animation: `uwDP ${2 + (i % 4) * 0.7}s ease-in-out ${i * 0.28}s infinite` }}
              />
            ))}
            {/* accent lines */}
            <line x1="0" y1="0" x2="17%" y2="33%" stroke="rgba(110,55,255,0.09)" strokeWidth="1" />
            <line x1="100%" y1="0" x2="83%" y2="38%" stroke="rgba(255,130,50,0.08)" strokeWidth="1" />
            <line x1="0" y1="100%" x2="19%" y2="67%" stroke="rgba(60,190,255,0.07)" strokeWidth="1" />
            <line x1="100%" y1="100%" x2="81%" y2="66%" stroke="rgba(110,55,255,0.07)" strokeWidth="1" />
            {/* hexagons */}
            <polygon points="115,74 136,62 157,74 157,98 136,110 115,98" fill="none" stroke="rgba(150,90,255,0.22)" strokeWidth="1" />
            <polygon points="575,195 598,183 621,195 621,219 598,231 575,219" fill="none" stroke="rgba(255,130,50,0.17)" strokeWidth="1" />
            <polygon points="62,380 79,370 96,380 96,400 79,410 62,400" fill="none" stroke="rgba(60,190,255,0.13)" strokeWidth="1" />
            {/* corner brackets */}
            <path d="M28 22L28 42M28 22L50 22" stroke="rgba(150,90,255,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M672 22L650 22M672 22L672 42" stroke="rgba(150,90,255,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M28 478L28 458M28 478L50 478" stroke="rgba(255,130,50,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M672 478L650 478M672 478L672 458" stroke="rgba(255,130,50,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>

          {/* Orbital rings */}
          <div className="uw-ring uw-r1" />
          <div className="uw-ring uw-r2" />
          <div className="uw-ring uw-r3" />
          <div className="uw-odot" />

          {/* Floating stat cards */}
          <div className="uw-fc uw-fc-tl">
            <div className="uw-fc-icon" style={{ background: "rgba(110,50,255,0.22)" }}>
              <svg width="18" height="18" fill="none" stroke="#a06cff" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <div className="uw-fc-lbl">Accounts Sold</div>
              <div className="uw-fc-val">128,400+</div>
            </div>
          </div>

          <div className="uw-fc uw-fc-tr">
            <div className="uw-fc-icon" style={{ background: "rgba(255,150,50,0.17)" }}>
              <svg width="18" height="18" fill="none" stroke="#ffaa44" strokeWidth="1.8" viewBox="0 0 24 24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <div className="uw-fc-lbl">Uptime</div>
              <div className="uw-fc-val">99.9%</div>
            </div>
          </div>

          <div className="uw-fc uw-fc-bl">
            <div className="uw-fc-icon" style={{ background: "rgba(70,200,100,0.17)" }}>
              <svg width="18" height="18" fill="none" stroke="#48e07a" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="uw-fc-lbl">Guaranteed</div>
              <div className="uw-fc-val">Lifetime</div>
            </div>
          </div>

          <div className="uw-fc uw-fc-br">
            <div className="uw-fc-icon" style={{ background: "rgba(255,90,175,0.17)" }}>
              <svg width="18" height="18" fill="none" stroke="#ff60b8" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <div className="uw-fc-lbl">Verified</div>
              <div className="uw-fc-val">Phone Auth</div>
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="uw-content">

            <div className="uw-badge">
              <span className="uw-badge-dot" />
              Premium Account Store
              <ShieldCheck size={13} />
            </div>

            <h1 className="uw-title">
              <Sparkles size={46} className="uw-sparkle" />
              <span className="uw-title-word">ULTIMATE</span>
            </h1>

            <div className="uw-sale">Sale</div>

            <div className="uw-dyn">
              <span className="uw-static">Premium Verified Accounts</span>
              <div className="uw-sep" />
              <div className="uw-cyc-box">
                <span className={`uw-cyc${animating ? " out" : ""}`}>
                  {CYCLING_TEXTS[currentIndex]}
                </span>
              </div>
            </div>

            <p className="uw-desc">
              The most trusted marketplace for premium social media accounts. Every account is
              phone-verified, instantly delivered, and backed by our lifetime replacement guarantee.
            </p>

            <div className="uw-cta">
              <button className="uw-btn-p">
                SHOP NOW
                <Zap size={15} className="uw-zap" />
              </button>
              <button className="uw-btn-s">LEARN MORE</button>
            </div>

            <div className="uw-trust">
              <div className="uw-ti">
                <svg width="13" height="13" fill="none" stroke="#9d5cff" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Instant Delivery
              </div>
              <div className="uw-tdot" />
              <div className="uw-ti">
                <svg width="13" height="13" fill="none" stroke="#9d5cff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                Phone Verified
              </div>
              <div className="uw-tdot" />
              <div className="uw-ti">
                <svg width="13" height="13" fill="none" stroke="#9d5cff" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Lifetime Replacement
              </div>
              <div className="uw-tdot" />
              <div className="uw-ti">
                <svg width="13" height="13" fill="none" stroke="#9d5cff" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                128k+ Happy Clients
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}