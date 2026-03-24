"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/services", label: "サービス" },
  { href: "/cases", label: "導入事例" },
  { href: "/training", label: "研修" },
  { href: "/company", label: "会社概要" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-logic/5 border border-white/60"
            : "bg-white/50 backdrop-blur-md border border-white/30"
        }`}
      >
        <div className="flex items-center justify-between h-14 lg:h-16 px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="AIVEST" width={36} height={36} className="w-9 h-9" />
            <span className="text-lg font-bold tracking-tight gradient-text">AIVEST</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-foreground/60 hover:text-warmth transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[13px] font-semibold text-white bg-logic px-5 py-2 rounded-xl hover:bg-logic-light hover:shadow-md hover:shadow-logic/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              無料相談
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] w-full bg-foreground/70 transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-foreground/70 transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-foreground/70 transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-foreground/5 mx-5">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground/60 hover:text-warmth hover:bg-warmth/5 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block text-center text-sm font-semibold text-white bg-logic py-2.5 rounded-xl mt-3"
                onClick={() => setIsOpen(false)}
              >
                無料相談
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
