import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Features } from "@/components/Features";
import { Flow } from "@/components/Flow";
import { Training } from "@/components/Training";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Message } from "@/components/Message";
import { Company } from "@/components/Company";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Features />
      <Flow />
      <Training />
      <Pricing />
      <Testimonials />
      <Message />
      <Company />
      <FAQ />
      <Contact />
    </>
  );
}
