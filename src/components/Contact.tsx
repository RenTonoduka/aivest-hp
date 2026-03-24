"use client";

import { useState, type FormEvent } from "react";
import { Clock, ShieldCheck, BadgeJapaneseYen, Check } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      Icon: Clock,
      title: "24時間以内にご返信",
      desc: "営業日24時間以内にご連絡いたします",
    },
    {
      Icon: ShieldCheck,
      title: "秘密厳守",
      desc: "ご相談内容は厳格に管理いたします",
    },
    {
      Icon: BadgeJapaneseYen,
      title: "初回相談無料",
      desc: "お気軽にご相談ください",
    },
  ];

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-lime rounded-full opacity-40" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-amber rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-lime-dark mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              まずは
              <span className="gradient-text">無料相談</span>
              から
            </h2>
            <p className="text-charcoal leading-relaxed mb-10">
              「AIを導入したいが何から始めればいいかわからない」
              「社内のAIリテラシーを底上げしたい」——
              どんなご相談でもお気軽にお問い合わせください。
            </p>

            <div className="space-y-6">
              {benefits.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy/8 to-lime/8 flex items-center justify-center text-navy flex-shrink-0">
                    <item.Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-lime/20 to-gold/20 flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-lime" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-2">送信完了</h3>
                <p className="text-sm text-charcoal">
                  お問い合わせありがとうございます。
                  <br />
                  24時間以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5">
                    会社名
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/8 transition-all"
                    placeholder="株式会社○○"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      お名前
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/8 transition-all"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/8 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5">
                    ご興味のあるサービス
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/8 transition-all text-foreground/70">
                    <option value="">選択してください</option>
                    <option>AIエージェント開発</option>
                    <option>AI経営支援</option>
                    <option>AIエージェント研修</option>
                    <option>Claude Code実践研修</option>
                    <option>AIエージェント導入顧問</option>
                    <option>その他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1.5">
                    ご相談内容
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/8 transition-all resize-none"
                    placeholder="お気軽にご記入ください"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-center text-sm"
                >
                  無料相談を申し込む
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
