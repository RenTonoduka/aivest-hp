const logos = [
  "製造業A社",
  "不動産B社",
  "IT企業C社",
  "小売D社",
  "コンサルE社",
  "物流F社",
  "金融G社",
  "教育H社",
];

export function LogoBand() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate mb-8">
          Trusted by leading companies
        </p>
        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
          {logos.map((name) => (
            <div
              key={name}
              className="px-5 py-2.5 rounded-lg bg-logic/[0.03] border border-logic/[0.06]"
            >
              <span className="text-sm font-semibold text-logic/30">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
