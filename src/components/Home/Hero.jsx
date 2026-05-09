import React, { useEffect } from "react";
import { Sparkles, Zap } from "lucide-react";

export default function UltimateSaleHero() {
  useEffect(() => {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
      star.style.animationDelay = `${index * 0.6}s`;
    });
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Great+Vibes&display=swap');

          .ultimate-wrapper * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .ultimate-wrapper {
            width: 100%;
            min-height: 100vh;
            background: transparent;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* HERO */

          .hero-content {
            position: relative;
            text-align: center;
            z-index: 5;
            padding: 20px;
          }

          .title{
            font-size:90px;
            color:#ffb12c;
            letter-spacing:8px;
            font-weight:500;
          }

          .sale-text{
            font-family:'Great Vibes',cursive;
            font-size:120px;
            color:white;
            margin-top:-40px;
            font-weight:400;
          }

          .hero-content p{
            max-width:700px;
            color:#8e8fb1;
            margin:20px auto 35px;
            font-size:14px;
            line-height:1.7;
            font-family:sans-serif;
          }

          .hero-content button{
            width:190px;
            height:58px;
            border:3px solid #cfd0d6;
            background:white;
            color:#111;
            font-size:18px;
            font-weight:bold;
            letter-spacing:2px;
            cursor:pointer;
            transition:0.3s;
          }

          .hero-content button:hover{
            transform:translateY(-5px);
            box-shadow:0 0 25px rgba(255,255,255,0.5);
          }

          /* GRID */

          .circle-grid{
            position:absolute;
            inset:0;
            background-image:radial-gradient(
              circle,
              transparent 32px,
              rgba(255,255,255,0.08) 34px,
              transparent 36px
            );
            background-size:80px 80px;
            opacity:0.8;
          }

          /* LEFT SHAPE */

          .shape-left{
            position:absolute;
            width:280px;
            height:280px;
            border-radius:50%;
            border:35px solid transparent;
            border-top-color:#ff9562;
            border-left-color:#ffb86b;
            transform:rotate(-35deg);
            top:50px;
            left:-20px;
            filter:drop-shadow(0 0 25px rgba(255,160,120,0.5));
            animation:float1 6s ease-in-out infinite;
          }

          /* RIGHT SHAPE */

          .shape-right{
            position:absolute;
            width:370px;
            height:370px;
            border-radius:50%;
            border:40px solid transparent;
            border-top-color:#ff78ff;
            border-right-color:#9a5cff;
            right:-70px;
            top:120px;
            transform:rotate(20deg);
            animation:rotateRing 12s linear infinite;
            filter:drop-shadow(0 0 35px rgba(187,87,255,0.6));
          }

          /* BOTTOM SHAPE */

          .shape-bottom{
            position:absolute;
            width:180px;
            height:180px;
            border-radius:50%;
            border:28px solid transparent;
            border-top-color:#f2a7ff;
            border-right-color:#825cff;
            bottom:-40px;
            left:130px;
            transform:rotate(40deg);
            animation:float2 5s ease-in-out infinite;
          }

          /* BALL */

          .small-ball{
            position:absolute;
            width:70px;
            height:70px;
            border-radius:50%;
            background:radial-gradient(circle at 30% 30%, white, #ff914d);
            left:35px;
            bottom:150px;
            animation:pulse 3s infinite;
          }

          /* ORBIT */

          .orbit-line{
            position:absolute;
            width:700px;
            height:260px;
            border-top:2px solid rgba(255,255,255,0.7);
            border-radius:50%;
            top:230px;
            left:280px;
            transform:rotate(-6deg);
          }

          /* PLANET */

          .planet{
            position:absolute;
            width:38px;
            height:38px;
            border-radius:50%;
            background:radial-gradient(circle at 30% 30%, white, #48b0ff);
            top:245px;
            right:330px;
            box-shadow:0 0 30px #5bc0ff;
            animation:planetMove 4s ease-in-out infinite;
          }

          /* GLOWS */

          .glow{
            position:absolute;
            border-radius:50%;
            filter:blur(80px);
          }

          .glow1{
            width:250px;
            height:250px;
            background:rgba(179,69,255,0.35);
            right:120px;
            top:70px;
          }

          .glow2{
            width:200px;
            height:200px;
            background:rgba(255,0,221,0.3);
            left:-50px;
            bottom:80px;
          }

          .glow3{
            width:180px;
            height:180px;
            background:rgba(144,80,255,0.25);
            left:220px;
            bottom:-30px;
          }

          /* STARS */

          .star{
            position:absolute;
            color:white;
            font-size:45px;
            animation:twinkle 2s infinite;
          }

          .star1{
            left:350px;
            top:200px;
          }

          .star2{
            right:280px;
            top:330px;
          }

          .star3{
            left:150px;
            top:350px;
          }

          /* ANIMATIONS */

          @keyframes twinkle{
            0%,100%{
              opacity:0.4;
              transform:scale(1);
            }

            50%{
              opacity:1;
              transform:scale(1.2);
            }
          }

          @keyframes rotateRing{
            from{
              transform:rotate(20deg);
            }

            to{
              transform:rotate(380deg);
            }
          }

          @keyframes pulse{
            0%,100%{
              transform:scale(1);
            }

            50%{
              transform:scale(1.1);
            }
          }

          @keyframes float1{
            0%,100%{
              transform:rotate(-35deg) translateY(0);
            }

            50%{
              transform:rotate(-35deg) translateY(-20px);
            }
          }

          @keyframes float2{
            0%,100%{
              transform:rotate(40deg) translateY(0);
            }

            50%{
              transform:rotate(40deg) translateY(-15px);
            }
          }

          @keyframes planetMove{
            0%,100%{
              transform:translateY(0);
            }

            50%{
              transform:translateY(-15px);
            }
          }

          /* RESPONSIVE */

          @media (max-width:992px){

            .title{
              font-size:60px;
            }

            .sale-text{
              font-size:90px;
            }

            .orbit-line{
              width:500px;
              left:120px;
            }

            .planet{
              right:180px;
            }

            .shape-right{
              width:280px;
              height:280px;
            }
          }

          @media (max-width:768px){

            .title{
              font-size:42px;
              letter-spacing:4px;
            }

            .sale-text{
              font-size:70px;
              margin-top:-20px;
            }

            .hero-content p{
              width:90%;
              font-size:13px;
            }

            .shape-left{
              width:180px;
              height:180px;
              border-width:22px;
            }

            .shape-right{
              width:220px;
              height:220px;
              border-width:25px;
              right:-80px;
            }

            .shape-bottom{
              width:120px;
              height:120px;
              left:40px;
            }

            .orbit-line{
              width:350px;
              left:30px;
              top:260px;
            }

            .planet{
              right:60px;
              top:280px;
            }
            @keyframes slow-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes lightning-glow {
              0%, 100% { filter: drop-shadow(0 0 2px #fff); transform: scale(1); }
              50% { filter: drop-shadow(0 0 10px #00f2ff); transform: scale(1.1); }
            }
            .animate-slow-spin {
              animation: slow-spin 12s linear infinite;
            }
            .animate-lightning-glow {
              animation: lightning-glow 3s ease-in-out infinite;
            }
          }
        `}
      </style>

      <div className="ultimate-wrapper">
        {/* Background */}
        <div className="circle-grid"></div>

        {/* Glow Effects */}
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
        <div className="glow glow3"></div>

        {/* Shapes */}
        <div className="shape-left"></div>
        <div className="shape-right"></div>
        <div className="shape-bottom"></div>

        {/* Ball */}
        <div className="small-ball"></div>

        {/* Orbit */}
        <div className="orbit-line"></div>

        {/* Planet */}
        <div className="planet"></div>

        {/* Stars */}
        <div className="star star1 animate-slow-spin">✦</div>
        <div className="star star2 animate-slow-spin">✦</div>
        <div className="star star3 animate-slow-spin">✦</div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="title flex items-center justify-center gap-4">
            <Sparkles className="w-12 h-12 text-[#ffb12c] animate-slow-spin" />
            ULTIMATE
          </h1>

          <h2 className="sale-text">Sale</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum vehicula vitae risus at eleifend. Maecenas lobortis,
            eros sit amet.
          </p>

          <button className="flex items-center justify-center gap-2 mx-auto overflow-hidden relative group">
            READ MORE
            <Zap className="w-5 h-5 animate-lightning-glow" />
          </button>
        </div>
      </div>
    </>
  );
}