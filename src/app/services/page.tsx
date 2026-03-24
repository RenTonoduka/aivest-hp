import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { Flow } from "@/components/Flow";
import { Pricing } from "@/components/Pricing";
import { TopCTA } from "@/components/TopCTA";

export const metadata: Metadata = {
  title: "サービス | AIVEST",
  description:
    "AIエージェント開発・AI経営支援・AI研修・Claude Code実践研修・AI導入顧問。AIの力でビジネスを変革するサービスをご紹介します。",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-cloud to-background" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-indigo rounded-full opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo mb-4">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AIの力で、
            <span className="gradient-text">ビジネスを変革</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            開発・経営支援・研修・導入顧問まで、
            AI活用のすべてをワンストップで提供します。
          </p>
        </div>
      </section>

      <Services />
      <Flow />
      <Pricing />
      <TopCTA />
    </>
  );
}
