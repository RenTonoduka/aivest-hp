import Link from "next/link";
import {
  Sparkles,
  BarChart3,
  GraduationCap,
  Terminal,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    Icon: Sparkles,
    title: "AIエージェント開発",
    description: "業務プロセスを自動化するAIエージェントをオーダーメイドで開発。",
    gradient: "from-navy to-navy-light",
  },
  {
    Icon: BarChart3,
    title: "AI経営支援",
    description: "データ分析からAI戦略策定まで、経営判断にAIを組み込みます。",
    gradient: "from-lime to-lime-light",
  },
  {
    Icon: GraduationCap,
    title: "AIエージェント研修",
    description: "実務直結のハンズオン形式で確実にスキルを定着させます。",
    gradient: "from-navy-light to-lime-dark",
  },
  {
    Icon: Terminal,
    title: "Claude Code 実践研修",
    description: "AIコーディングツールで開発生産性を劇的に向上。",
    gradient: "from-navy to-lime-dark",
  },
  {
    Icon: Users,
    title: "AIエージェント導入顧問",
    description: "AI導入の戦略設計から運用定着まで経営目線で伴走。",
    gradient: "from-lime-dark to-navy",
  },
];

export function ServicesOverview() {
  return (
    <section className="relative py-28 lg:py-36">
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
            開発・経営支援・研修・導入顧問まで、ワンストップで提供。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-charcoal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-lime-dark transition-colors"
          >
            サービス詳細を見る
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
