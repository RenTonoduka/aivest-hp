import type { Metadata } from "next";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { TopCTA } from "@/components/TopCTA";

export const metadata: Metadata = {
  title: "導入事例 | AIVEST",
  description:
    "AIエージェント導入による成果事例をご紹介。不動産・製造・小売など、業種を問わず確かな成果を実現しています。",
};

export default function CasesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-cloud to-background" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-warmth rounded-full opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-warmth mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">導入事例</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            業種・規模を問わず、AIで確かな成果を実現しています。
          </p>
        </div>
      </section>

      <CaseStudies />
      <Testimonials />
      <TopCTA />
    </>
  );
}
