export function Company() {
  const info = [
    { label: "会社名", value: "株式会社AIVEST" },
    { label: "所在地", value: "栃木県佐野市" },
    { label: "代表取締役", value: "戸野塚 蓮" },
    { label: "事業内容", value: "AI顧問事業 / AIスクール事業（ワークショップ・研修）" },
    { label: "URL", value: "ai-vest.com" },
  ];

  return (
    <section id="company" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] blob-logic rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Company
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            会社<span className="gradient-text">概要</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 lg:p-12">
          <div className="divide-y divide-foreground/5">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row py-5 first:pt-0 last:pb-0"
              >
                <dt className="text-sm font-semibold text-slate sm:w-40 flex-shrink-0 mb-1 sm:mb-0">
                  {item.label}
                </dt>
                <dd className="text-sm text-foreground/80">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
