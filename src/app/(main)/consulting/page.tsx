"use client"

import FinalCTA from "@/components/FinalCTA"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
}

export default function ConsultingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 space-y-8 z-10">
                            <motion.h1
                                {...fadeInUp}
                                className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900"
                            >
                                Expert Insights <br />
                                Powering Your <br />
                                <span className="text-blue-600">Business Success.</span>
                            </motion.h1>

                            <motion.p
                                {...fadeInUp}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-600 leading-relaxed max-w-md"
                            >
                                We help businesses streamline operations and drive growth through strategic AI consulting and automation.
                            </motion.p>

                            <motion.div
                                {...fadeInUp}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 pt-4"
                            >
                                <Link href="/contact" className="px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-200 hover:shadow-xl">
                                    Get Free Consultation
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Image Composition */}
                        <div className="w-full lg:w-1/2 relative h-[600px] hidden lg:block">
                            {/* Main Tall Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="absolute right-0 top-0 w-[65%] h-[90%] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                                    alt="Consulting Strategy"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Floating Small Image 1 (Top Left) */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute left-[10%] top-[10%] w-[35%] h-[35%] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8"
                                    alt="Team Meeting"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Floating Small Image 2 (Bottom Left) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute left-[5%] bottom-[15%] w-[40%] h-[30%] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                                    alt="Data Analysis"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="relative">
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

            {/* Trusted Advisors Section */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 mb-16">
                        <div className="lg:w-1/2">
                            <motion.h2
                                {...fadeInUp}
                                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                            >
                                Trusted Advisors for Your <br />
                                <span className="text-blue-600">Business Success</span>
                            </motion.h2>
                        </div>
                        <div className="lg:w-1/2 flex items-end">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                With decades of experience in AI and automation, our team is dedicated to helping you navigate the complexities of digital transformation. We don't just advise; we partner with you to deliver tangible results.
                            </p>
                        </div>
                    </div>

                    {/* 3 Images Row */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { src: "/team/ronald.jpeg", name: "Ronald Parent", role: "Senior Consultant" },
                            { src: "/team/hilal.jpeg", name: "Hilal Aziz", role: "Senior Consultant" },
                            { src: "/team/shafique.jpeg", name: "Shafique Ur Rehman", role: "Junior Consultant" }
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative aspect-3/4 rounded-xl overflow-hidden"
                            >
                                <Image
                                    src={member.src}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <div className="font-bold text-lg">{member.name}</div>
                                        <div className="text-sm opacity-90">{member.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Services Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Left: Services List */}
                        <div className="w-full lg:w-1/2 space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    Strategic services designed for <span className="text-blue-600">business success</span>
                                </h2>
                                <p className="text-gray-600">
                                    Comprehensive solutions tailored to your unique challenges.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Business Strategy & Planning",
                                        desc: "Aligning AI initiatives with your core business objectives for maximum impact."
                                    },
                                    {
                                        title: "Operational Excellence",
                                        desc: "Streamlining workflows and reducing inefficiencies through intelligent automation."
                                    },
                                    {
                                        title: "Digital Transformation",
                                        desc: "Guiding your organization through the adoption of cutting-edge AI technologies."
                                    }
                                ].map((service, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-6 group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                            <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="w-full lg:w-1/2 relative h-[600px]">
                            <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                                    alt="Strategic Planning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -left-12 bottom-12 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden lg:block"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Results Driven</div>
                                        <div className="text-sm text-gray-500">Proven Methodology</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    "Precision Data Strategies helped us unlock 30% more efficiency in just 3 months."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <FinalCTA />

        </div>
    )
}
