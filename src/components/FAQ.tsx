"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "AIについて詳しくなくても相談できますか？",
    a: "もちろんです。「AIで何ができるかわからない」という段階からご相談いただけます。現状の課題をお聞きし、AI活用の可能性をわかりやすくご説明します。",
  },
  {
    q: "どのくらいの期間で導入できますか？",
    a: "プロジェクトの規模によりますが、簡易的なAIエージェントであれば2〜4週間、本格的なシステム開発は1〜3ヶ月が目安です。まずはスモールスタートで効果を実感していただくことをお勧めしています。",
  },
  {
    q: "研修だけの依頼も可能ですか？",
    a: "はい、研修のみのご依頼も承っております。Claude Code実践研修、AIエージェント活用研修、AI経営戦略ワークショップなど、目的に合わせたプログラムをご用意しています。",
  },
  {
    q: "対応エリアに制限はありますか？",
    a: "オンラインでの対応が中心のため、全国どこからでもご利用いただけます。対面でのミーティングや研修をご希望の場合もお気軽にご相談ください。",
  },
  {
    q: "料金体系を教えてください。",
    a: "プロジェクトの内容・規模に応じてお見積りいたします。初回のご相談は無料ですので、まずはお気軽にお問い合わせください。",
  },
  {
    q: "セキュリティ面は大丈夫ですか？",
    a: "お客様のデータは厳格に管理し、NDA（秘密保持契約）の締結にも対応しています。社内データを外部AIに送信しない構成など、セキュリティ要件に合わせた設計が可能です。",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-emerald rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-warmth mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            よくある<span className="gradient-text">ご質問</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => (
            <div key={item.q} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-foreground pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-sm text-charcoal leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
