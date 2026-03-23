"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Brain, BarChart3, GraduationCap, Handshake, RefreshCw } from "lucide-react";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const orbitItems = [
    { label: "経営支援", angle: 0, Icon: BarChart3 },
    { label: "開発", angle: 72, Icon: Sparkles },
    { label: "研修", angle: 144, Icon: GraduationCap },
    { label: "顧問", angle: 216, Icon: Handshake },
    { label: "自動化", angle: 288, Icon: RefreshCw },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 -right-32 w-[600px] h-[600px] blob-blue rounded-full" />
      <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] blob-green rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blob-yellow rounded-full" />

      {/* Floating orbs */}
      <div ref={orbRef} className="absolute top-32 right-[15%] transition-transform duration-[2s] ease-out">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-green/20 backdrop-blur-sm border border-white/30 animate-float" />
      </div>
      <div className="absolute bottom-32 left-[10%]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow/20 to-accent-blue/20 backdrop-blur-sm border border-white/30 animate-float delay-300" />
      </div>
      <div className="absolute top-[40%] right-[8%]">
        <div className="w-6 h-6 rounded-full bg-accent-green/15 backdrop-blur-sm border border-white/30 animate-float delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in-up opacity-0">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-xs font-medium text-foreground/60">
                AIで経営を、次のステージへ
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6 animate-fade-in-up opacity-0 delay-100">
              AIエージェントで
              <br />
              <span className="gradient-text">ビジネスを</span>
              <br />
              <span className="gradient-text">加速する。</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/55 leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0 delay-200">
              AIエージェント開発から経営支援、実践研修まで。
              <br className="hidden sm:block" />
              構想から実装まで一気通貫でサポートします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-300">
              <a href="#contact" className="btn-primary text-center">
                無料相談する
              </a>
              <a href="#services" className="btn-secondary text-center">
                サービスを見る
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 animate-fade-in-up opacity-0 delay-400">
              {[
                { num: "50+", label: "導入実績" },
                { num: "98%", label: "満足度" },
                { num: "3x", label: "業務効率化" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-blue-green">
                    {stat.num}
                  </div>
                  <div className="text-xs text-foreground/40 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px]">
              {/* Center circle */}
              <div className="absolute inset-[80px] rounded-full bg-gradient-to-br from-accent-blue/10 to-accent-green/10 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent-blue to-accent-green flex items-center justify-center shadow-lg shadow-accent-blue/20 mb-3">
                    <Brain className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-foreground/70">AI Agent</span>
                </div>
              </div>

              {/* Orbiting items */}
              {orbitItems.map((item) => (
                <div
                  key={item.label}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{ transform: `rotate(${item.angle}deg)` }}
                >
                  <div
                    className="glass rounded-xl px-3 py-2 flex items-center gap-2 whitespace-nowrap hover:scale-110 transition-transform cursor-default"
                    style={{
                      transform: `translateX(180px) rotate(-${item.angle}deg) translate(-50%, -50%)`,
                    }}
                  >
                    <item.Icon className="w-4 h-4 text-accent-blue" strokeWidth={2} />
                    <span className="text-xs font-medium text-foreground/70">{item.label}</span>
                  </div>
                </div>
              ))}

              {/* Orbit ring */}
              <div className="absolute inset-[25px] rounded-full border border-dashed border-accent-blue/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
