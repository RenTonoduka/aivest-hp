import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "スポット研修",
    price: "15万円〜",
    unit: "/ 1日",
    description: "単発の研修プログラム",
    features: [
      "Claude Code / AIエージェント研修",
      "カリキュラムカスタマイズ",
      "研修資料・ハンドアウト提供",
      "アフターフォロー（2週間）",
    ],
    cta: "相談する",
    gradient: "from-navy to-navy-light",
    featured: false,
  },
  {
    name: "AI導入パートナー",
    price: "30万円〜",
    unit: "/ 月",
    description: "開発・導入・研修をまとめて",
    features: [
      "AIエージェント開発",
      "経営支援・戦略立案",
      "社内研修（月1回〜）",
      "チャットサポート無制限",
      "月次レポート・改善提案",
    ],
    cta: "相談する",
    gradient: "from-indigo to-indigo-light",
    featured: true,
  },
  {
    name: "AI導入顧問",
    price: "10万円〜",
    unit: "/ 月",
    description: "経営視点でのAI活用アドバイス",
    features: [
      "月2回のオンライン相談",
      "AI活用ロードマップ策定",
      "ツール選定・ベンダー評価",
      "社内体制構築サポート",
    ],
    cta: "相談する",
    gradient: "from-indigo to-indigo-light",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 lg:py-36">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-indigo rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blob-emerald rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            料金<span className="gradient-text">プラン</span>
          </h2>
          <p className="text-charcoal leading-relaxed">
            プロジェクトの規模・内容に応じて柔軟に対応します。
            <br className="hidden sm:block" />
            まずはお気軽にご相談ください。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card rounded-2xl overflow-hidden ${
                plan.featured ? "ring-2 ring-indigo/30 lg:scale-105" : ""
              }`}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-indigo to-indigo-light text-center py-1.5">
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-7">
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-slate mb-5">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate">{plan.unit}</span>
                </div>

                <ul className="space-y-3 mb-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-charcoal"
                    >
                      <Check
                        className="w-4 h-4 mt-0.5 text-emerald flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                    plan.featured
                      ? "btn-primary"
                      : "border border-navy/12 text-navy hover:bg-navy/5"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate mt-8">
          ※ 表示価格は税別です。プロジェクトの内容により変動します。
        </p>
      </div>
    </section>
  );
}
