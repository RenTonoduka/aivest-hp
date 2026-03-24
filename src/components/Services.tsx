import {
  Sparkles,
  BarChart3,
  GraduationCap,
  Terminal,
  Users,
} from "lucide-react";

const services = [
  {
    Icon: Sparkles,
    title: "AIエージェント開発",
    description:
      "業務プロセスを自動化するAIエージェントをオーダーメイドで開発。ChatGPT・Claude・Geminiなど最新モデルを活用し、貴社の業務に最適なソリューションを構築します。",
    tags: ["カスタム開発", "業務自動化", "マルチモデル"],
    gradient: "from-navy to-navy-light",
  },
  {
    Icon: BarChart3,
    title: "AI経営支援",
    description:
      "データ分析からAI戦略策定まで、経営判断にAIを組み込みます。AIエージェントによるC-Suite体制で、CEOの意思決定をリアルタイムにサポート。",
    tags: ["経営戦略", "データ分析", "意思決定支援"],
    gradient: "from-lime to-lime-light",
  },
  {
    Icon: GraduationCap,
    title: "AIエージェント研修",
    description:
      "実務で即戦力となるAIエージェント活用スキルを習得。座学だけでなく、実際の業務課題を使ったハンズオン形式で確実にスキルを定着させます。",
    tags: ["ハンズオン", "実務直結", "チーム研修"],
    gradient: "from-navy-light to-lime-dark",
  },
  {
    Icon: Terminal,
    title: "Claude Code 実践研修",
    description:
      "AIコーディングツールClaude Codeの実践的な使い方を徹底指導。プロンプトエンジニアリングからワークフロー自動化まで、開発生産性を劇的に向上させます。",
    tags: ["Claude Code", "開発効率化", "実践型"],
    gradient: "from-navy to-lime-dark",
  },
  {
    Icon: Users,
    title: "AIエージェント導入顧問",
    description:
      "AI導入の戦略設計から運用定着まで伴走。技術選定、ベンダー評価、社内体制構築、効果測定まで、経営目線でAI活用を成功に導きます。",
    tags: ["伴走支援", "戦略設計", "運用定着"],
    gradient: "from-lime-dark to-navy",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-lime rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-navy rounded-full opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-lime-dark mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            AIの力で、
            <span className="gradient-text">ビジネスを変革</span>
          </h2>
          <p className="text-charcoal leading-relaxed">
            開発・経営支援・研修・導入顧問まで、
            AI活用のすべてをワンストップで提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`glass-card rounded-2xl p-7 group ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <service.Icon className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-charcoal leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-navy/5 text-navy/70 border border-navy/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
