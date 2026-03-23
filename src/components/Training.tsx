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
      gradient: "from-accent-blue to-purple-500",
      badgeColor: "bg-accent-blue",
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
      gradient: "from-accent-green to-accent-blue",
      badgeColor: "bg-accent-green",
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
      gradient: "from-accent-yellow to-accent-green",
      badgeColor: "bg-accent-yellow",
    },
  ];

  return (
    <section id="training" className="relative py-28 lg:py-36">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-blue rounded-full opacity-40" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] blob-green rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-yellow mb-4">
            Training Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="gradient-text">実践型</span>研修プログラム
          </h2>
          <p className="text-foreground/50 leading-relaxed">
            研修翌日から業務に活かせる。実務直結のカリキュラムで確実にスキルを定着させます。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${prog.gradient}`} />

              <div className="p-7">
                <span
                  className={`inline-block text-[10px] font-bold tracking-wider text-white ${prog.badgeColor} px-2.5 py-0.5 rounded-full mb-4`}
                >
                  {prog.badge}
                </span>

                <h3 className="text-lg font-bold mb-4">{prog.title}</h3>

                <div className="flex flex-wrap gap-3 mb-6 text-xs text-foreground/50">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                    {prog.audience}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {prog.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground/60"
                    >
                      <svg className="w-4 h-4 mt-0.5 text-accent-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center text-sm font-semibold py-2.5 rounded-xl border border-accent-blue/15 text-accent-blue hover:bg-accent-blue/5 transition-colors"
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
