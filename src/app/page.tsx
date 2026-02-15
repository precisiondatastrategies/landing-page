import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import ProductShowcase from "@/components/ProductShowcase";
import AIServices from "@/components/AIServices";
import WorkflowExplainer from "@/components/WorkflowExplainer";
import AutomateBoutique from "@/components/AutomateBoutique";
import Consulting from "@/components/Consulting";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import WhoNeedsThis from "@/components/WhoNeedsThis";

export const metadata = {
  title: 'Precision Data Strategies | AI Automation & Data Solutions',
  description: 'Transform your business with AI automation solutions. Expert consulting, data strategies, and intelligent automation to boost efficiency and drive growth.',
};

export default function Home() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Precision Data Strategies",
    "url": "https://precisiondatastrategies.com",
    "logo": "https://precisiondatastrategies.com/logo.png",
    "description": "AI automation and data solutions provider specializing in business transformation through intelligent automation and strategic consulting.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@precisiondatastrategies.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/precision-data-strategies"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <div className="min-h-screen">
        <Hero />
        <Integrations />
        <div id="solutions">
          <ProductShowcase />
        </div>
        <div id="services">
          <AIServices />
        </div>
        <WhoNeedsThis />
        <WorkflowExplainer />
        <AutomateBoutique />
        <div id="consulting">
          <Consulting />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Contact />
        <FinalCTA />
      </div>
    </>
  );
}
