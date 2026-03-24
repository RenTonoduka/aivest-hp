import {
  MessageSquare,
  FileSearch,
  Rocket,
  Settings,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    Icon: MessageSquare,
    step: "STEP 01",
    title: "無料相談",
    description:
      "現状の課題やご要望をヒアリング。AI導入の方向性を一緒に整理します。オンラインでもお気軽にご相談ください。",
    gradient: "from-navy to-navy-light",
  },
  {
    Icon: FileSearch,
    step: "STEP 02",
    title: "調査・ご提案",
    description:
      "業務フローを分析し、最適なAI活用プランをご提案。期待される効果とROIを明確にした計画書をお渡しします。",
    gradient: "from-lime to-lime-light",
  },
  {
    Icon: Rocket,
    step: "STEP 03",
    title: "開発・導入",
    description:
      "アジャイル開発で素早くプロトタイプを構築。フィードバックを取り入れながら、実用レベルまで短期間で仕上げます。",
    gradient: "from-amber to-gold",
  },
  {
    Icon: Settings,
    step: "STEP 04",
    title: "運用・改善",
    description:
      "導入後もデータを分析しながら継続的に改善。研修や社内サポート体制の構築まで、長期的に伴走します。",
    gradient: "from-gold to-amber",
  },
];

export function Flow() {
  return (
    <section id="flow" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] blob-lime rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-lime-dark mb-4">
            Flow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            ご利用の<span className="gradient-text">流れ</span>
          </h2>
          <p className="text-charcoal leading-relaxed">
            ご相談から運用開始まで、4つのステップでスムーズに進めます。
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((item, i) => (
            <div key={item.step}>
              <div className="glass-card rounded-2xl p-7 group relative overflow-hidden">
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.gradient}`}
                />
                <div className="flex items-start gap-5 pl-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <item.Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold tracking-widest text-slate uppercase">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-silver" strokeWidth={2} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
