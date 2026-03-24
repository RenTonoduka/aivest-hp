import type { Metadata } from "next";
import { Message } from "@/components/Message";
import { Company } from "@/components/Company";

export const metadata: Metadata = {
  title: "会社概要 | AIVEST",
  description:
    "株式会社AIVESTの会社情報。AIエージェント開発・AI経営支援・AI研修を通じて、企業のDXを加速します。",
};

export default function CompanyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-cloud to-background" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] blob-logic rounded-full opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-warmth mb-4">
            Company
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            会社<span className="gradient-text">概要</span>
          </h1>
        </div>
      </section>

      <Message />
      <Company />
    </>
  );
}
