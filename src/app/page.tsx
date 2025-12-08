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

export default function Home() {
  return (
    <div className="min-h-screen">
        <Hero />
        <Integrations />
        <ProductShowcase />
        <AIServices />
        <WorkflowExplainer />
        <AutomateBoutique />
        <Consulting />
        <Testimonials />
        <Pricing />
        <Contact />
        <FinalCTA />
    </div>
  );
}
