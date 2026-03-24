import Link from "next/link";
import { ArrowRight, Building2, Factory, ShoppingBag } from "lucide-react";

const cases = [
  {
    Icon: Building2,
    industry: "不動産業",
    title: "物件マッチングAIで成約率2.4倍",
    metric: "2.4x",
    metricLabel: "成約率向上",
    gradient: "from-navy to-navy-light",
  },
  {
    Icon: Factory,
    industry: "製造業",
    title: "品質検査AIで不良率を90%削減",
    metric: "-90%",
    metricLabel: "不良率削減",
    gradient: "from-lime to-lime-light",
  },
  {
    Icon: ShoppingBag,
    industry: "小売・EC",
    title: "AIカスタマーサポートで対応時間1/3",
    metric: "1/3",
    metricLabel: "対応時間短縮",
    gradient: "from-navy-light to-lime",
  },
];

export function CasesHighlight() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-amber rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-navy-light mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="gradient-text">導入事例</span>
          </h2>
          <p className="text-charcoal leading-relaxed">
            業種・規模を問わず、AIで確かな成果を実現しています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-7 text-center"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4`}
              >
                <item.Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-[11px] text-slate font-medium mb-2">
                {item.industry}
              </div>
              <h3 className="text-sm font-bold mb-4">{item.title}</h3>
              <div className="text-3xl font-black gradient-text mb-1">
                {item.metric}
              </div>
              <div className="text-[11px] text-slate font-medium">
                {item.metricLabel}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-lime-dark transition-colors"
          >
            すべての導入事例を見る
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
