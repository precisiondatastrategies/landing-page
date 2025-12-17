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

export default function Home() {
  return (
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
  );
}
