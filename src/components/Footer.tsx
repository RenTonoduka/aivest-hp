import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="AIVEST" width={32} height={32} className="w-8 h-8" />
              <span className="text-lg font-bold gradient-text">AIVEST</span>
            </Link>
            <p className="text-sm text-charcoal leading-relaxed max-w-sm">
              AIエージェント開発・AI経営支援・AI研修を通じて、
              企業のデジタルトランスフォーメーションを加速します。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground/80">
              サービス
            </h4>
            <ul className="space-y-2.5">
              {[
                "AIエージェント開発",
                "AI経営支援",
                "AIエージェント研修",
                "Claude Code実践研修",
                "AIエージェント導入顧問",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-charcoal hover:text-navy transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground/80">
              情報
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "導入事例", href: "/cases" },
                { label: "研修プログラム", href: "/training" },
                { label: "会社概要", href: "/company" },
                { label: "お問い合わせ", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal hover:text-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate">
            &copy; {new Date().getFullYear()} AIVEST. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate">
            <span>Powered by</span>
            <span className="gradient-text font-medium">AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
