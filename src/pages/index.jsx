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

      // Draw faint connecting lines near mouse
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
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
      />
  );
}

function ScanLine() {
  return (
      <div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 2 }}
      >
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
            fontFamily: "'DM Sans', sans-serif",
          }}
      >
        <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap"
            rel="stylesheet"
        />

        {/* Ambient glow */}
        <div
            className="fixed pointer-events-none"
            style={{
              width: "70vw",
              height: "50vh",
              top: "15%",
              left: "15%",
              background:
                  "radial-gradient(ellipse at center, rgba(30,80,140,0.07) 0%, transparent 70%)",
              zIndex: 0,
            }}
        />

        <GridCanvas />
        <ScanLine />

        {/* Main content */}
        <div
            className="relative flex flex-col items-center px-6 text-center"
            style={{ zIndex: 10, maxWidth: 820 }}
        >
          {/* Status badge */}
          <div
              className="flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border transition-all duration-1000"
              style={{
                borderColor: "rgba(110,210,255,0.15)",
                background: "rgba(110,210,255,0.03)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(12px)",
              }}
          >
          <span
              className="relative flex h-2 w-2"
          >
            <span
                className="absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{
                  backgroundColor: "#6ed2ff",
                  animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
                }}
            />
            <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "#6ed2ff" }}
            />
          </span>
            <span
                className="text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(110,210,255,0.7)",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.2em",
                }}
            >
            In Development
          </span>
            <style>{`
            @keyframes ping {
              75%, 100% { transform: scale(2.5); opacity: 0; }
            }
          `}</style>
          </div>

          {/* Main heading */}
          <h1
              className="leading-none transition-all duration-1000"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5.5vw, 4rem)",
                color: "#e8f4fa",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "200ms",
                letterSpacing: "-0.02em",
              }}
          >
            Something{" "}
            <span
                style={{
                  background: "linear-gradient(135deg, #6ed2ff 0%, #3b8bdb 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
            >
            Grand
          </span>
            <br />
            <span style={{ color: "rgba(200,220,240,0.35)", fontWeight: 400 }}>
            is Coming Soon
          </span>
          </h1>

          {/* Divider */}
          <div
              className="my-8 transition-all duration-1000"
              style={{
                width: loaded ? 80 : 0,
                height: 1,
                background:
                    "linear-gradient(90deg, transparent, rgba(110,210,255,0.4), transparent)",
                transitionDelay: "500ms",
              }}
          />

          {/* Subtext */}
          <p
              className="text-lg leading-relaxed transition-all duration-1000"
              style={{
                color: "rgba(180,200,220,0.6)",
                maxWidth: 520,
                fontWeight: 300,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(14px)",
                transitionDelay: "600ms",
                letterSpacing: "0.01em",
              }}
          >
            Building and deploying{" "}
            <span style={{ color: "rgba(110,210,255,0.85)", fontWeight: 500 }}>
            secure AI
          </span>{" "}
            for enterprises.
            <br />
            <span style={{ fontSize: "0.9em", color: "rgba(160,180,200,0.4)" }}>
            Engineered for scale. Designed for trust.
          </span>
          </p>

          {/* Email signup */}
          <div
              className="mt-10 flex flex-col items-center gap-3 transition-all duration-1000"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(14px)",
                transitionDelay: "800ms",
              }}
          >
            {!submitted ? (
                <>
                  <div
                      className="flex items-center rounded-lg overflow-hidden border"
                      style={{
                        borderColor: "rgba(110,210,255,0.12)",
                        background: "rgba(8,18,32,0.8)",
                        backdropFilter: "blur(12px)",
                      }}
                  >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        placeholder="Enter your email"
                        className="bg-transparent outline-none px-4 py-3 text-sm"
                        style={{
                          color: "#c8dce8",
                          width: 260,
                          fontFamily: "'DM Sans', sans-serif",
                          caretColor: "#6ed2ff",
                        }}
                    />
                    <button
                        onClick={handleSubmit}
                        className="px-5 py-3 text-sm font-medium transition-all duration-300"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 12,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#0a1628",
                          background:
                              "linear-gradient(135deg, #6ed2ff 0%, #5ab8e8 100%)",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.background =
                                "linear-gradient(135deg, #8ae0ff 0%, #6ed2ff 100%)")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.background =
                                "linear-gradient(135deg, #6ed2ff 0%, #5ab8e8 100%)")
                        }
                    >
                      Notify Me
                    </button>
                  </div>
                  <span
                      className="text-xs"
                      style={{
                        color: "rgba(140,160,180,0.35)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                  >
                Be the first to know when we launch.
              </span>
                </>
            ) : (
                <div
                    className="flex items-center gap-2 px-5 py-3 rounded-lg"
                    style={{
                      background: "rgba(110,210,255,0.06)",
                      border: "1px solid rgba(110,210,255,0.15)",
                    }}
                >
                  <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                  >
                    <path
                        d="M3 8.5L6.5 12L13 4"
                        stroke="#6ed2ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>
                  <span
                      className="text-sm"
                      style={{
                        color: "rgba(110,210,255,0.8)",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 12,
                      }}
                  >
                You&#39;re on the list. We&#39;ll be in touch.
              </span>
                </div>
            )}
          </div>

          {/* Feature pills */}
          <div
              className="flex flex-wrap justify-center gap-3 mt-14 transition-all duration-1000"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(10px)",
                transitionDelay: "1000ms",
              }}
          >
            {[
              "End-to-End Encryption",
              "SOC 2 Compliant",
              "On-Prem Deployment",
              "Zero-Trust Architecture",
            ].map((label) => (
                <span
                    key={label}
                    className="px-3.5 py-1.5 rounded text-xs"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.08em",
                      color: "rgba(110,210,255,0.4)",
                      border: "1px solid rgba(110,210,255,0.08)",
                      background: "rgba(110,210,255,0.02)",
                    }}
                >
              {label}
            </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
            className="fixed bottom-0 left-0 right-0 flex items-center justify-center py-5 transition-all duration-1000"
            style={{
              zIndex: 10,
              opacity: loaded ? 1 : 0,
              transitionDelay: "1200ms",
            }}
        >
        <span
            className="text-xs"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.15em",
              color: "rgba(110,210,255,0.18)",
              textTransform: "uppercase",
            }}
        >
          © 2026 &nbsp;·&nbsp; All rights reserved
        </span>
        </div>
      </div>
  );
}