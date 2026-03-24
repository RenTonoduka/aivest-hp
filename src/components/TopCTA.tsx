import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TopCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-logic via-logic-dark to-logic" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-warmth rounded-full opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-warmth rounded-full opacity-15" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          AIの力で、
          <br className="sm:hidden" />
          ビジネスを次のステージへ。
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          まずは無料相談から。貴社の課題に合わせた
          <br className="hidden sm:block" />
          最適なAI活用プランをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-base font-semibold bg-white text-logic px-8 py-4 rounded-xl hover:bg-cloud hover:-translate-y-0.5 transition-all shadow-lg"
          >
            無料相談する
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center text-base font-semibold text-white/90 border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
          >
            サービスを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
