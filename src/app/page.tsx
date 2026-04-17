import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValueProp from "@/components/ValueProp";
import Services from "@/components/Services";
import CaseStudyBanner from "@/components/CaseStudyBanner";
import WhoWeServe from "@/components/WhoWeServe";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Precision Data Strategies | AI Implementation for PE Portfolio Companies",
  description:
    "PDS deploys AI across private equity portfolio companies — voice agents, scheduling automation, lead qualification, and EBITDA-impact dashboards. Fixed fees and measurable execution.",
};

export default function Home() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Precision Data Strategies",
    url: "https://precisiondatastrategies.com",
    logo: "https://precisiondatastrategies.com/pds-logo.png",
    description:
      "AI implementation partner for private equity portfolio companies. Voice agents, workflow automation, and EBITDA-impact reporting.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8605 Santa Monica Blvd #724006",
      addressLocality: "West Hollywood",
      addressRegion: "CA",
      postalCode: "90069",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-424-722-3282",
      contactType: "Customer Service",
      email: "info@precisiondatastrategies.com",
    },
    sameAs: ["https://www.linkedin.com/company/precision-data-strategies-llc"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <Hero />
      <ValueProp />
      <Services />
      <CaseStudyBanner />
      <WhoWeServe />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
