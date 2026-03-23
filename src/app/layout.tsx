import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIVEST | AI経営支援・AIエージェント開発",
  description:
    "AIエージェント開発、AI経営支援、AIエージェント研修、Claude Code実践研修。AIの力でビジネスを次のステージへ。",
  openGraph: {
    title: "AIVEST | AI経営支援・AIエージェント開発",
    description:
      "AIエージェント開発、AI経営支援、AIエージェント研修、Claude Code実践研修。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
