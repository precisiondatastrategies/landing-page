"use client";

import { motion } from "framer-motion";
import { Play, Users, Target, Lightbulb, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import { useEffect, useRef, useState } from "react"


// CountUp component for animated numbers
function CountUp({ end, duration = 2, className }: { end: number, duration?: number, className?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasAnimated) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;
        let start = 10;
        const increment = end / (duration * 60); // 60fps
        let frame = 0;
        function animate() {
            frame++;
            start += increment;
            if (start < end) {
                setCount(Math.floor(start));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        }
        animate();
    }, [hasAnimated, end, duration]);

    return (
        <span ref={ref} className={className}>{count}%</span>
    );
}


export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-16 bg-[#F9F9F7]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900">About Us</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About</h1>
        </div>
        {/* Decorative wave line */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <svg className="absolute top-20 left-10 w-64 h-64 text-gray-200 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 100 C 50 100, 50 50, 100 50 C 150 50, 150 100, 190 100" stroke="currentColor" strokeWidth="2" fill="none" />
             </svg>
        </div>
      </section>

      {/* --- SECTION 1: INTRO --- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Business Meeting" 
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Users className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Review on Clutch</p>
                    <div className="flex text-orange-400 text-xs">★★★★★</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">"They help us to develop our business and generate new leads."</p>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-medium mb-2 block">About Company</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                We Are Business Consulting & Credit Repair Experts
              </h2>
              <p className="text-gray-500 mb-6">
                We help you to develop your business and generate new leads. We are a team of experts who are ready to help you to grow your business.
              </p>
              <p className="text-gray-500 mb-8">
                Our mission is to provide the best service to our customers. We are always ready to help you to grow your business.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
                    <Play size={10} className="ml-0.5" />
                  </div>
                  See Video
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY CHOOSE US --- */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-medium mb-2 block">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-10 leading-tight">
                Reasons Why We are Best Business Consulting Agency
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Users className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Advisors</h3>
                    <p className="text-gray-500 text-sm">We have a team of professional advisors who are ready to help you.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Target className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Planning</h3>
                    <p className="text-gray-500 text-sm">We help you to create a strategic plan for your business.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Lightbulb className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experience Design</h3>
                    <p className="text-gray-500 text-sm">We create the best experience for your customers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <BrainCircuit className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Artificial Intelligence</h3>
                    <p className="text-gray-500 text-sm">We use AI to help you to grow your business.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Image Collage */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
               <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden z-10">
                 <Image 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                    alt="Office working" 
                    fill
                    className="object-cover"
                 />
               </div>
               <div className="absolute bottom-0 left-0 w-2/3 h-1/2 rounded-lg overflow-hidden border-8 border-[#F9F9F7] z-20">
                 <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                    alt="Team collaboration" 
                    fill
                    className="object-cover"
                 />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
        <div className="relative py-10">
                {/* Dot Pattern Background */}
                <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3, zIndex: 0 }}>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
                            backgroundSize: "20px 20px",
                            borderRadius: "24px"
                        }}
                    ></div>
                </div>
                <div className="mb-8 relative z-10 max-w-6xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 tracking-tight" style={{ lineHeight: 1.15 }}>ELEVATE YOUR BUSINESS WITH PDS'S PROVEN IMPACT</h3>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl">Join the league of forward-thinking businesses that have experienced a remarkable transformation through PDS's AI automation solutions. Our commitment to innovation and excellence has delivered tangible results that speak for themselves.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10 md:gap-8 lg:gap-12 relative z-10">
                    <div className="flex flex-col">
                        <CountUp end={20} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                        <span className="text-lg font-semibold text-gray-900 mb-1">REDUCTION IN OPERATIONAL COSTS</span>
                        <span className="text-gray-500 text-base">Experience substantial savings as AI-driven automation optimizes resource allocation and minimizes wastage.</span>
                    </div>
                    <div className="flex flex-col">
                        <CountUp end={99} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                        <span className="text-lg font-semibold text-gray-900 mb-1">CUSTOMER SATISFACTION</span>
                        <span className="text-gray-500 text-base">Delight your customers with personalized interactions and solutions, leading to heightened satisfaction and loyalty.</span>
                    </div>
                    <div className="flex flex-col">
                        <CountUp end={96} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                        <span className="text-lg font-semibold text-gray-900 mb-1">INCREASE IN EFFICIENCY</span>
                        <span className="text-gray-500 text-base">Say goodbye to manual, time-consuming tasks. PDS's streamlined processes elevate efficiency, allowing you to focus on strategic initiatives.</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10 md:gap-8 lg:gap-12 mt-10 relative z-10">
                    <div className="flex flex-col">
                        <CountUp end={44} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                        <span className="text-lg font-semibold text-gray-900 mb-1">RISE IN REVENUE GENERATION</span>
                        <span className="text-gray-500 text-base">Unlock new revenue streams with data-driven insights and predictive analytics.</span>
                    </div>
                </div>
            </div>


      {/* --- SECTION 3: CENTERED CONTENT --- */}
      <section className="py-20 bg-[#F9F9F7]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-500 font-medium mb-2 block">Our Story</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Are Business Consulting & Credit Repair Experts
            </h2>
            <p className="text-gray-500">
              We help you to develop your business and generate new leads. We are a team of experts who are ready to help you to grow your business.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full rounded-xl overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
              alt="Consulting Session" 
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="max-w-4xl mx-auto mt-12 text-center text-gray-500 leading-relaxed">
            <p>
              We are a team of experts who are ready to help you to grow your business. We help you to develop your business and generate new leads. We are a team of experts who are ready to help you to grow your business. We help you to develop your business and generate new leads.
            </p>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <Team />

      <FinalCTA />
    </main>
  );
}
