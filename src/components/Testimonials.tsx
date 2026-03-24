import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "AIの導入は不安でしたが、戦略設計から研修まで一貫してサポートしてもらえたので、社内にスムーズに浸透しました。今では営業チーム全員がAIを活用しています。",
    author: "代表取締役",
    company: "不動産会社 / 従業員50名",
    rating: 5,
  },
  {
    quote:
      "Claude Codeの研修を受けて、開発チームの生産性が劇的に変わりました。研修翌日から実務で使えるレベルだったのが本当にありがたかった。",
    author: "CTO",
    company: "ITスタートアップ / 従業員20名",
    rating: 5,
  },
  {
    quote:
      "経営視点でAI活用のロードマップを一緒に作ってもらえたのが大きかった。ツール導入だけでなく、組織としてどう活用するかまで考えてくれるパートナーです。",
    author: "経営企画部長",
    company: "製造業 / 従業員200名",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] blob-warmth rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-warmth mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            お客様の<span className="gradient-text">声</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="glass-card rounded-2xl p-7 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-warmth fill-warmth"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <blockquote className="text-sm text-charcoal leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="pt-5 border-t border-foreground/5">
                <div className="text-sm font-semibold text-foreground">
                  {item.author}
                </div>
                <div className="text-[11px] text-slate mt-0.5">
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
