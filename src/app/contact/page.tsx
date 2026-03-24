import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "お問い合わせ | AIVEST",
  description:
    "AIVESTへのお問い合わせはこちら。AI導入・研修・経営支援について、初回相談無料でお気軽にご相談ください。",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-cloud to-background" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] blob-lime rounded-full opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-lime-dark mb-4">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            お<span className="gradient-text">問い合わせ</span>
          </h1>
          <p className="text-lg text-charcoal leading-relaxed max-w-2xl mx-auto">
            AIの導入について、お気軽にご相談ください。
          </p>
        </div>
      </section>

      <Contact />
      <FAQ />
    </>
  );
}
