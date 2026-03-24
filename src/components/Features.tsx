export function Features() {
  const features = [
    {
      num: "01",
      title: "構想から実装まで一気通貫",
      description:
        "AI戦略の立案から、エージェント開発、社内研修、運用定着まで。すべてのフェーズをワンチームで伴走するため、意思疎通のロスがなく、スピーディに成果を出せます。",
      gradient: "from-navy to-indigo-dark",
    },
    {
      num: "02",
      title: "最新技術をキャッチアップ",
      description:
        "Claude・GPT・Geminiなど、日々進化するAI技術を常にキャッチアップ。最新のモデルやツールチェーンを活用し、最も効果的なソリューションを提案します。",
      gradient: "from-indigo-light to-navy-light",
    },
    {
      num: "03",
      title: "実務で使える研修プログラム",
      description:
        "座学だけで終わらない実践型カリキュラム。参加者の実際の業務課題を題材にハンズオンで取り組み、研修翌日から業務に活かせるスキルを確実に身につけます。",
      gradient: "from-indigo-dark to-navy-light",
    },
    {
      num: "04",
      title: "経営視点でのAI活用",
      description:
        "技術だけでなく経営インパクトを重視。ROIを意識したAI導入計画と、組織全体でのAI活用を推進するチェンジマネジメントまで、経営者目線でサポートします。",
      gradient: "from-navy-light to-navy",
    },
  ];

  return (
    <section id="features" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] blob-indigo rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Why AIVEST
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            選ばれる
            <span className="gradient-text">4つの理由</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.num}
              className="glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden"
            >
              <span className="absolute -top-4 -right-2 text-[120px] font-black text-navy/[0.03] leading-none select-none">
                {f.num}
              </span>

              <div className="relative">
                <span
                  className={`inline-block text-xs font-bold bg-gradient-to-r ${f.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {f.num}
                </span>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {f.description}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
