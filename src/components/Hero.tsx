"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Bot,
  BrainCircuit,
  Workflow,
} from "lucide-react";

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
      <div
        ref={orbRef}
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] transition-transform duration-[3s] ease-out"
      >
        <div className="w-full h-full blob-lime rounded-full opacity-60" />
      </div>
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] blob-amber rounded-full opacity-40" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] blob-navy rounded-full opacity-30" />

      {/* Floating particles */}
      <div className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-lime/30 animate-float" />
      <div className="absolute top-[60%] right-[10%] w-2 h-2 rounded-full bg-amber/30 animate-float delay-200" />
      <div className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 rounded-full bg-gold/30 animate-float delay-400" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.08] tracking-tight mb-6 animate-fade-in-up opacity-0 delay-100">
              <span className="text-foreground">構想から実装まで</span>
              <br />
              <span className="gradient-text">一気通貫。</span>
            </h1>

            {/* Sub headline */}
            <p className="text-lg text-charcoal leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0 delay-200">
              AIエージェント開発・経営支援・研修を
              <br className="hidden sm:block" />
              ワンチームで伴走する、
              <strong className="text-foreground">唯一のパートナー。</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up opacity-0 delay-300">
              <a
                href="/contact"
                className="btn-primary text-center inline-flex items-center justify-center gap-2 text-base"
              >
                無料相談する
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <a
                href="/services"
                className="btn-secondary text-center text-base"
              >
                サービスを見る
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 animate-fade-in-up opacity-0 delay-400">
              {[
                { num: "50+", label: "導入実績", Icon: TrendingUp },
                { num: "98%", label: "満足度", Icon: Shield },
                { num: "3x", label: "業務効率化", Icon: Zap },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <div className="w-px h-8 bg-navy/10 -ml-4" />
                  )}
                  <div>
                    <div className="text-2xl font-black gradient-text leading-none">
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

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up opacity-0 delay-300 hidden lg:block">
            {/* Main glass card */}
            <div className="relative glass-card rounded-3xl p-8 lg:p-10">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-lime/10 via-amber/5 to-navy/10 rounded-[2rem] blur-2xl -z-10" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">AIVEST Platform</div>
                  <div className="text-[11px] text-slate">AI-Powered Business Solutions</div>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber" />
                  <span className="w-2.5 h-2.5 rounded-full bg-navy/20" />
                </div>
              </div>

              {/* Service modules */}
              <div className="space-y-3">
                {[
                  {
                    icon: Bot,
                    label: "AIエージェント開発",
                    status: "稼働中",
                    statusColor: "bg-lime",
                    progress: 92,
                  },
                  {
                    icon: TrendingUp,
                    label: "AI経営支援",
                    status: "分析中",
                    statusColor: "bg-amber",
                    progress: 78,
                  },
                  {
                    icon: Workflow,
                    label: "業務自動化",
                    status: "最適化中",
                    statusColor: "bg-gold",
                    progress: 85,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 bg-white/50 rounded-xl px-4 py-3.5 border border-foreground/5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-navy/8 to-lime/8 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4.5 h-4.5 text-navy" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-foreground mb-1.5">
                        {item.label}
                      </div>
                      <div className="w-full h-1.5 bg-navy/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-navy to-lime"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`} />
                      <span className="text-[10px] font-medium text-slate">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom metric */}
              <div className="mt-6 pt-5 border-t border-foreground/5 flex items-center justify-between">
                <div className="text-[11px] text-slate">業務効率改善率</div>
                <div className="text-2xl font-black gradient-text">+340%</div>
              </div>
            </div>

            {/* Floating mini card - top right */}
            <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-navy" strokeWidth={2} />
                <span className="text-xs font-semibold text-foreground">
                  セキュリティ対応済
                </span>
              </div>
            </div>

            {/* Floating mini card - bottom left */}
            <div className="absolute -bottom-3 -left-3 glass rounded-xl px-4 py-3 shadow-lg animate-float delay-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber" strokeWidth={2} />
                <span className="text-xs font-semibold text-foreground">
                  24h以内に返信
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
