import { useState, useEffect, useRef } from "react";

const GRID_COLS = 24;
const GRID_ROWS = 14;

function GridCanvas() {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: -1000, y: -1000 });
    const dots = useRef([]);
    const animFrame = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w, h;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            dots.current = [];
            const spacingX = w / (GRID_COLS + 1);
            const spacingY = h / (GRID_ROWS + 1);
            for (let r = 1; r <= GRID_ROWS; r++) {
                for (let c = 1; c <= GRID_COLS; c++) {
                    dots.current.push({
                        ox: spacingX * c,
                        oy: spacingY * r,
                        x: spacingX * c,
                        y: spacingY * r,
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.3 + Math.random() * 0.4,
                    });
                }
            }
        };

        const onMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const draw = (t) => {
            ctx.clearRect(0, 0, w, h);
            const time = t * 0.001;

            dots.current.forEach((d) => {
                d.x = d.ox + Math.sin(time * d.speed + d.phase) * 1.5;
                d.y = d.oy + Math.cos(time * d.speed * 0.8 + d.phase) * 1.5;

                const dx = mouse.current.x - d.x;
                const dy = mouse.current.y - d.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 180;

                let radius = 1.2;
                let alpha = 0.12;

                if (dist < maxDist) {
                    const factor = 1 - dist / maxDist;
                    radius = 1.2 + factor * 3;
                    alpha = 0.12 + factor * 0.7;
                    d.x -= dx * factor * 0.06;
                    d.y -= dy * factor * 0.06;
                }

                const pulse = 0.5 + 0.5 * Math.sin(time * 1.2 + d.phase);
                alpha += pulse * 0.04;

                ctx.beginPath();
                ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(110, 210, 255, ${alpha})`;
                ctx.fill();
            });

            const lineDist = 140;
            dots.current.forEach((a) => {
                const da = Math.sqrt(
                    (mouse.current.x - a.x) ** 2 + (mouse.current.y - a.y) ** 2
                );
                if (da > 250) return;
                dots.current.forEach((b) => {
                    if (a === b) return;
                    const dd = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
                    if (dd < lineDist) {
                        const lineAlpha = (1 - dd / lineDist) * 0.06;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(110, 210, 255, ${lineAlpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animFrame.current = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMove);
        animFrame.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(animFrame.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
        />
    );
}

function ScanLine() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[2]">
            <div
                className="absolute left-0 right-0 h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(110,210,255,0.08), transparent)",
                    animation: "scanMove 8s linear infinite",
                }}
            />
            <style>{`
        @keyframes scanMove {
          0% { top: -2%; }
          100% { top: 102%; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
        </div>
    );
}

export default function ComingSoon() {
    const [loaded, setLoaded] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    const handleSubmit = () => {
        if (email.includes("@")) {
            setSubmitted(true);
            setEmail("");
        }
    };

    return (
        <div
            className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 40%, #0a1628 0%, #050b14 60%, #020408 100%)",
            }}
        >
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <style>{`
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .font-space { font-family: 'Space Mono', monospace; }
        .text-cyan-brand { color: rgba(110,210,255,0.7); }
        .text-cyan-bright { color: rgba(110,210,255,0.85); }
        .text-cyan-muted { color: rgba(110,210,255,0.4); }
        .text-cyan-ghost { color: rgba(110,210,255,0.18); }
        .text-cyan-confirm { color: rgba(110,210,255,0.8); }
        .text-slate-body { color: rgba(180,200,220,0.6); }
        .text-slate-sub { color: rgba(160,180,200,0.4); }
        .text-slate-hint { color: rgba(140,160,180,0.35); }
        .text-ice { color: #e8f4fa; }
        .text-ice-dim { color: rgba(200,220,240,0.35); }
        .text-ice-input { color: #c8dce8; }
        .bg-cyan-dot { background-color: #6ed2ff; }
        .border-cyan-15 { border-color: rgba(110,210,255,0.15); }
        .border-cyan-12 { border-color: rgba(110,210,255,0.12); }
        .border-cyan-08 { border-color: rgba(110,210,255,0.08); }
        .bg-badge { background: rgba(110,210,255,0.03); }
        .bg-input-wrap { background: rgba(8,18,32,0.8); }
        .bg-confirm { background: rgba(110,210,255,0.06); }
        .bg-pill { background: rgba(110,210,255,0.02); }
        .btn-cta {
          background: linear-gradient(135deg, #6ed2ff 0%, #5ab8e8 100%);
          color: #0a1628;
        }
        .btn-cta:hover {
          background: linear-gradient(135deg, #8ae0ff 0%, #6ed2ff 100%);
        }
        .gradient-hero {
          background: linear-gradient(135deg, #6ed2ff 0%, #3b8bdb 50%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .heading-clamp { font-size: clamp(2rem, 5.5vw, 4rem); }
      `}</style>

            {/* Ambient glow */}
            <div
                className="fixed pointer-events-none z-0"
                style={{
                    width: "70vw",
                    height: "50vh",
                    top: "15%",
                    left: "15%",
                    background:
                        "radial-gradient(ellipse at center, rgba(30,80,140,0.07) 0%, transparent 70%)",
                }}
            />

            <GridCanvas />
            <ScanLine />

            {/* Main content */}
            <div className="relative flex flex-col items-center px-6 text-center z-10 max-w-3xl">

                {/* Status badge */}
                <div
                    className={`flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-cyan-15 bg-badge transition-all duration-1000 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                >
          <span className="relative flex h-2 w-2">
            <span
                className="absolute inline-flex h-full w-full rounded-full bg-cyan-dot opacity-60"
                style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-dot" />
          </span>
                    <span className="font-space text-xs text-cyan-brand uppercase tracking-[0.2em]">
            Sorvian AI
          </span>
                </div>

                {/* Main heading */}
                <h1
                    className={`font-space font-bold leading-none tracking-tight heading-clamp transition-all duration-1000 delay-200 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                >
                    <span className="text-ice">Something </span>
                    <span className="gradient-hero">Grand</span>
                    <br />
                    <span className="text-ice-dim font-normal">is Coming Soon</span>
                </h1>

                {/* Divider */}
                <div
                    className="my-8 h-px transition-all duration-1000 delay-500"
                    style={{
                        width: loaded ? 80 : 0,
                        background:
                            "linear-gradient(90deg, transparent, rgba(110,210,255,0.4), transparent)",
                    }}
                />

                {/* Subtext */}
                <p
                    className={`font-dm text-lg leading-relaxed font-light tracking-wide text-slate-body max-w-lg transition-all duration-1000 delay-[600ms] ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
                    }`}
                >
                    Building and deploying{" "}
                    <span className="text-cyan-bright font-medium">secure AI</span>{" "}
                    for enterprises.
                    <br />
                    <span className="text-neutral-400 text-sm">
            Engineered for scale. Designed for trust.
          </span>
                </p>

                {/* Email signup */}
              {/*  <div*/}
              {/*      className={`mt-10 flex flex-col items-center gap-3 transition-all duration-1000 delay-[800ms] ${*/}
              {/*          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"*/}
              {/*      }`}*/}
              {/*  >*/}
              {/*      {!submitted ? (*/}
              {/*          <>*/}
              {/*              <div className="flex items-center rounded-lg overflow-hidden border border-cyan-12 bg-input-wrap backdrop-blur-xl">*/}
              {/*                  <input*/}
              {/*                      type="email"*/}
              {/*                      value={email}*/}
              {/*                      onChange={(e) => setEmail(e.target.value)}*/}
              {/*                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}*/}
              {/*                      placeholder="Enter your email"*/}
              {/*                      className="font-dm bg-transparent outline-none px-4 py-3 text-sm text-ice-input w-64 caret-sky-300"*/}
              {/*                  />*/}
              {/*                  <button*/}
              {/*                      onClick={handleSubmit}*/}
              {/*                      className="font-space btn-cta px-5 py-3 text-xs font-medium uppercase tracking-widest transition-all duration-300"*/}
              {/*                  >*/}
              {/*                      Notify Me*/}
              {/*                  </button>*/}
              {/*              </div>*/}
              {/*              <span className="font-dm text-xs text-slate-hint">*/}
              {/*  Be the first to know when we launch.*/}
              {/*</span>*/}
              {/*          </>*/}
              {/*      ) : (*/}
              {/*          <div className="flex items-center gap-2 px-5 py-3 rounded-lg bg-confirm border border-cyan-15">*/}
              {/*              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
              {/*                  <path*/}
              {/*                      d="M3 8.5L6.5 12L13 4"*/}
              {/*                      stroke="#6ed2ff"*/}
              {/*                      strokeWidth="1.5"*/}
              {/*                      strokeLinecap="round"*/}
              {/*                      strokeLinejoin="round"*/}
              {/*                  />*/}
              {/*              </svg>*/}
              {/*              <span className="font-space text-xs text-cyan-confirm">*/}
              {/*  You&#39;re on the list. We&#39;ll be in touch.*/}
              {/*</span>*/}
              {/*          </div>*/}
              {/*      )}*/}
              {/*  </div>*/}

                {/* Feature pills */}
                <div
                    className={`flex flex-wrap justify-center gap-3 mt-14 transition-all duration-1000 delay-1000 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
                    }`}
                >
                    {[
                        "End-to-End Integrations",
                        "SOC 2 Compliant",
                        "On-Prem Deployment",
                        "Zero-Trust Architecture",
                        "Localized Models"
                    ].map((label) => (
                        <span
                            key={label}
                            className="font-space px-3.5 py-1.5 rounded text-sm tracking-wide text-cyan-muted border border-cyan-08 bg-pill"
                        >
              {label}
            </span>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className={`fixed bottom-0 left-0 right-0 flex items-center justify-center py-5 z-10 transition-all duration-1000 delay-[1200ms] ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            >
        <span className="font-space text-[10px] uppercase tracking-[0.15em] text-cyan-600">
          © 2026 &nbsp;·&nbsp; All rights reserved
        </span>
            </div>
        </div>
    );
}