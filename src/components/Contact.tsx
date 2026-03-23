"use client";

import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-green rounded-full opacity-40" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-yellow rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              まずは
              <span className="gradient-text">無料相談</span>
              から
            </h2>
            <p className="text-foreground/50 leading-relaxed mb-10">
              「AIを導入したいが何から始めればいいかわからない」
              「社内のAIリテラシーを底上げしたい」——
              どんなご相談でもお気軽にお問い合わせください。
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "24時間以内にご返信",
                  desc: "営業日24時間以内にご連絡いたします",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: "秘密厳守",
                  desc: "ご相談内容は厳格に管理いたします",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  ),
                  title: "初回相談無料",
                  desc: "お気軽にご相談ください",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-green/10 flex items-center justify-center text-accent-blue flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5">{item.title}</h4>
                    <p className="text-xs text-foreground/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-green/20 to-accent-blue/20 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">送信完了</h3>
                <p className="text-sm text-foreground/50">
                  お問い合わせありがとうございます。
                  <br />
                  24時間以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-foreground/60 mb-1.5">
                    会社名
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-accent-blue/40 focus:ring-2 focus:ring-accent-blue/10 transition-all"
                    placeholder="株式会社○○"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/60 mb-1.5">
                      お名前
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-accent-blue/40 focus:ring-2 focus:ring-accent-blue/10 transition-all"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/60 mb-1.5">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-accent-blue/40 focus:ring-2 focus:ring-accent-blue/10 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/60 mb-1.5">
                    ご興味のあるサービス
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-accent-blue/40 focus:ring-2 focus:ring-accent-blue/10 transition-all text-foreground/70">
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
                  <label className="block text-xs font-semibold text-foreground/60 mb-1.5">
                    ご相談内容
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-foreground/8 text-sm focus:outline-none focus:border-accent-blue/40 focus:ring-2 focus:ring-accent-blue/10 transition-all resize-none"
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
