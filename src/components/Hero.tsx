"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-cloud to-background" />
      <div className="absolute inset-0 grid-bg" />

      {/* Decorative blobs */}
      <div ref={orbRef} className="absolute top-[10%] right-[5%] w-[500px] h-[500px] transition-transform duration-[3s] ease-out">
        <div className="w-full h-full blob-lime rounded-full opacity-60" />
      </div>
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] blob-amber rounded-full opacity-40" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] blob-navy rounded-full opacity-30" />

      {/* Floating particles */}
      <div className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-lime/30 animate-float" />
      <div className="absolute top-[60%] right-[10%] w-2 h-2 rounded-full bg-amber/30 animate-float delay-200" />
      <div className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 rounded-full bg-gold/30 animate-float delay-400" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-10 animate-fade-in-up opacity-0">
            <Image src="/logo.png" alt="" width={20} height={20} className="w-5 h-5" />
            <span className="text-xs font-semibold text-navy tracking-wide">
              AI経営支援のパイオニア
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-black leading-[1.08] tracking-tight mb-8 animate-fade-in-up opacity-0 delay-100">
            <span className="text-foreground">構想から実装まで</span>
            <br />
            <span className="gradient-text">一気通貫。</span>
          </h1>

          {/* Sub headline */}
          <p className="text-lg sm:text-xl text-charcoal leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-200">
            AIエージェント開発・経営支援・研修を
            <br className="hidden sm:block" />
            ワンチームで伴走する、
            <strong className="text-foreground">唯一のパートナー。</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up opacity-0 delay-300">
            <a href="#contact" className="btn-primary text-center inline-flex items-center justify-center gap-2 text-base">
              無料相談する
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a href="#services" className="btn-secondary text-center text-base">
              サービスを見る
            </a>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up opacity-0 delay-400">
            <div className="inline-flex items-center glass rounded-2xl px-3 py-3 sm:px-8 sm:py-5 gap-6 sm:gap-12">
              {[
                { num: "50+", label: "導入実績", Icon: TrendingUp },
                { num: "98%", label: "満足度", Icon: Shield },
                { num: "3x", label: "業務効率化", Icon: Zap },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <div className="hidden sm:block w-px h-10 bg-navy/8 -ml-3 sm:-ml-6" />
                  )}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime/10 to-amber/10 items-center justify-center hidden sm:flex">
                    <stat.Icon className="w-5 h-5 text-navy" strokeWidth={1.5} />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-black gradient-text leading-none">
                      {stat.num}
                    </div>
                    <div className="text-[11px] text-slate mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
