import Image from "next/image";

export function Message() {
  return (
    <section id="message" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-navy rounded-full opacity-30" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] blob-indigo rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Message
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            代表<span className="gradient-text">メッセージ</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 lg:p-14">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-indigo/10 to-indigo-light/10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="代表取締役 戸野塚 蓮"
                  width={160}
                  height={160}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <div className="text-xs text-slate">代表取締役</div>
                <div className="text-sm font-bold mt-0.5">戸野塚 蓮</div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 space-y-5 text-sm text-charcoal leading-[1.9]">
              <p>
                AIは、もはや大企業だけのものではありません。中小企業こそ、AIエージェントの力を活用することで、少人数でも大きな成果を出せる時代が来ています。
              </p>
              <p>
                しかし、「何から始めればいいかわからない」「導入しても使いこなせない」という声を多くいただきます。技術だけを提供しても、現場で使われなければ意味がありません。
              </p>
              <p>
                だからこそ私たちAIVESTは、<strong className="text-foreground">構想から実装、そして運用定着まで</strong>を一気通貫で伴走します。AIの戦略立案、エージェント開発、社内研修——すべてをワンチームで提供することで、確実に成果につなげます。
              </p>
              <p className="text-foreground font-medium">
                AIの力で、すべてのビジネスに成長のきっかけを。
                <br />
                それが、AIVESTの使命です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
