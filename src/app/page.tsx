import { Hero } from "@/components/Hero";
import { LogoBand } from "@/components/LogoBand";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Features } from "@/components/Features";
import { CasesHighlight } from "@/components/CasesHighlight";
import { TopCTA } from "@/components/TopCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBand />
      <ServicesOverview />
      <Features />
      <CasesHighlight />
      <TopCTA />
    </>
  );
}
