import { Clock, User, Check } from "lucide-react";

export function Training() {
  const programs = [
    {
      badge: "POPULAR",
      title: "Claude Code 実践研修",
      duration: "2日間",
      format: "ハンズオン",
      audience: "エンジニア・開発チーム",
      points: [
        "Claude Codeの基本操作からプロンプト設計",
        "MCPサーバー連携・スキル開発",
        "実務タスクでの活用ワークショップ",
        "チーム開発ワークフローへの統合",
      ],
      gradient: "from-navy to-navy-light",
      badgeColor: "bg-navy",
    },
    {
      badge: "NEW",
      title: "AIエージェント活用研修",
      duration: "1日〜3日間",
      format: "ハンズオン + 座学",
      audience: "全部門・DX推進担当",
      points: [
        "生成AIの基礎と業務活用の全体像",
        "ChatGPT / Claude / Gemini の使い分け",
        "プロンプトエンジニアリング実践",
        "部門別ユースケースワークショップ",
      ],
      gradient: "from-indigo to-indigo-light",
      badgeColor: "bg-indigo",
    },
    {
      badge: "EXECUTIVE",
      title: "AI経営戦略ワークショップ",
      duration: "半日",
      format: "ワークショップ",
      audience: "経営層・マネジメント",
      points: [
        "AI技術トレンドと経営インパクト",
        "AI導入のROI試算フレームワーク",
        "自社に最適なAI活用ロードマップ策定",
        "リスク管理とガバナンス体制構築",
      ],
      gradient: "from-indigo to-indigo-light",
      badgeColor: "bg-indigo",
    },
  ];

  return (
    <section id="training" className="relative py-28 lg:py-36">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-navy rounded-full opacity-40" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] blob-indigo rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Training Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="gradient-text">実践型</span>研修プログラム
          </h2>
          <p className="text-charcoal leading-relaxed">
            研修翌日から業務に活かせる。実務直結のカリキュラムで確実にスキルを定着させます。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className={`h-1 bg-gradient-to-r ${prog.gradient}`} />

              <div className="p-7">
                <span
                  className={`inline-block text-[10px] font-bold tracking-wider text-white ${prog.badgeColor} px-2.5 py-0.5 rounded-full mb-4`}
                >
                  {prog.badge}
                </span>

                <h3 className="text-lg font-bold mb-4">{prog.title}</h3>

                <div className="flex flex-wrap gap-3 mb-6 text-xs text-charcoal">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" strokeWidth={2} />
                    {prog.audience}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {prog.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-charcoal"
                    >
                      <Check className="w-4 h-4 mt-0.5 text-emerald flex-shrink-0" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block text-center text-sm font-semibold py-2.5 rounded-xl border border-navy/12 text-navy hover:bg-navy/5 transition-colors"
                >
                  詳細を相談する
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
