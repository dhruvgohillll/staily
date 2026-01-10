import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBrands } from "@/components/TrustedBrands";
import { Testimonial } from "@/components/Testimonial";
import { Features } from "@/components/Features";
import { AgentRoles } from "@/components/AgentRoles";
import { Comparison } from "@/components/Comparison";
import { Integrations } from "@/components/Integrations";
import { LLMProviders } from "@/components/LLMProviders";
import { Stats } from "@/components/Stats";
import { Security } from "@/components/Security";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <Testimonial />
        <Features />
        <AgentRoles />
        <Comparison />
        <Integrations />
        <LLMProviders />
        <Stats />
        <Security />
        <Reviews />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
