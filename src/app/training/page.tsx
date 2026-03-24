import type { Metadata } from "next";
import { Training } from "@/components/Training";
import { TopCTA } from "@/components/TopCTA";

export const metadata: Metadata = {
  title: "研修プログラム | AIVEST",
  description:
    "Claude Code実践研修・AIエージェント活用研修・AI経営戦略ワークショップ。実務直結のカリキュラムで確実にスキルを定着させます。",
};

export default function TrainingPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-cloud to-background" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] blob-navy rounded-full opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Training Programs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">実践型</span>研修プログラム
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            研修翌日から業務に活かせる。実務直結のカリキュラムで確実にスキルを定着させます。
          </p>
        </div>
      </section>

      <Training />
      <TopCTA />
    </>
  );
}
