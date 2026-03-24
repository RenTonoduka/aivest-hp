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
                <strong className="text-foreground">「成果から逆算。AIを力に。」</strong>——これが私たちの原点です。
              </p>
              <p>
                AIツールを導入しただけでは、成果は出ません。「何から始めればいいかわからない」「導入しても使いこなせない」——そんな声を多くいただいてきました。
              </p>
              <p>
                だからこそAIVESTは、<strong className="text-foreground">「AI参謀」</strong>という立ち位置を選びました。戦略を考えるだけでなく、自ら手を動かし、成果が出るまで伴走する。考える参謀であり、動く社員でもある。それがAI参謀です。
              </p>
              <p>
                自分が使っていないものは教えない。自分が成果を出した方法だけを伝える。実践者であり続けることが、私たちの信条です。
              </p>
              <p className="text-foreground font-medium">
                すべての経営者に、AI参謀を。
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
