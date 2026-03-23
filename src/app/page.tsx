import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Training } from "@/components/Training";
import { Company } from "@/components/Company";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Training />
      <Company />
      <Contact />
    </>
  );
}
