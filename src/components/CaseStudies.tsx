import { ArrowUpRight, Building2, Factory, ShoppingBag } from "lucide-react";

const cases = [
  {
    Icon: Building2,
    industry: "不動産業",
    company: "従業員50名",
    title: "物件マッチングAIで成約率2.4倍",
    description:
      "顧客の希望条件と物件データをAIエージェントが自動マッチング。営業担当の提案準備時間を80%削減し、成約率が2.4倍に向上。",
    metrics: [
      { label: "成約率", value: "2.4x" },
      { label: "提案準備時間", value: "-80%" },
    ],
    gradient: "from-navy to-navy-light",
  },
  {
    Icon: Factory,
    industry: "製造業",
    company: "従業員200名",
    title: "品質検査AIで不良率を90%削減",
    description:
      "画像認識AIによる自動品質検査システムを導入。検査工程の人的コストを大幅に削減しながら、不良品の流出をほぼゼロに。",
    metrics: [
      { label: "不良率", value: "-90%" },
      { label: "検査コスト", value: "-65%" },
    ],
    gradient: "from-indigo to-indigo-light",
  },
  {
    Icon: ShoppingBag,
    industry: "小売・EC",
    company: "従業員30名",
    title: "AIカスタマーサポートで対応時間1/3",
    description:
      "問い合わせ対応をAIエージェントが一次対応。24時間365日の即時回答で顧客満足度が向上し、サポートチームの負荷を大幅に軽減。",
    metrics: [
      { label: "対応時間", value: "1/3", },
      { label: "顧客満足度", value: "+42%" },
    ],
    gradient: "from-indigo to-indigo-light",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-28 lg:py-36">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-indigo rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blob-navy rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="gradient-text">導入事例</span>
          </h2>
          <p className="text-charcoal leading-relaxed">
            業種・規模を問わず、AIで確かな成果を実現しています。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className={`h-1 bg-gradient-to-r ${item.gradient}`} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}
                  >
                    <item.Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">
                      {item.industry}
                    </div>
                    <div className="text-[11px] text-slate">{item.company}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-charcoal leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex gap-4 mb-5">
                  {item.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex-1 bg-navy/[0.03] rounded-xl px-4 py-3 text-center"
                    >
                      <div className="text-xl font-black gradient-text">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate mt-0.5 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-indigo transition-colors"
                >
                  詳しく聞く
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
