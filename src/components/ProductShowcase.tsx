"use client"
import React, { useState, useEffect, useRef } from "react"
import { Users, Calendar, Phone, Globe, CheckCircle, LucideIcon } from "lucide-react";
import Image from "next/image"

const Category = () => {
    const [activeSection, setActiveSection] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

    type Feature = {
        id: number;
        icon: LucideIcon;
        tag: string;
        title: string;
        description: string;
        videoFile: string;
        points: string[];
        bg: string;
    };

    const features: Feature[] = [
        {
            id: 1,
            icon: Users,
            tag: "Customer Profiles",
            title: "View and Manage Customer Profiles",
            description:
                "Keep track of all your customer information, job status, and activity history in one centralized dashboard.",
            videoFile: "step_1.mp4",
            points: [
                "Track job status in real-time",
                "Access complete customer information",
                "View detailed activity history",
                "Add notes and tags for organization",
            ],
            bg: "#FFF7ED", // light orange
        },
        {
            id: 2,
            icon: Calendar,
            tag: "Appointments",
            title: "Book Client Appointments",
            description:
                "Streamline your scheduling with automatic appointment booking, available time slots, and instant confirmations.",
            videoFile: "step_2.mp4",
            points: [
                "Automatic scheduling system",
                "View available time slots",
                "Instant appointment confirmations",
                "Seamless calendar synchronization",
            ],
            bg: "#F6F3FF", // light purple
        },
        {
            id: 3,
            icon: Phone,
            tag: "AI Voice Agent",
            title: "24/7 AI Voice Receptionist",
            description:
                "Never miss a call with our AI-powered voice receptionist that handles calls, answers questions, and books appointments around the clock.",
            videoFile: "step_3.mp4",
            points: [
                "24/7 call handling and response",
                "Automated Q&A for common questions",
                "Direct job booking from calls",
                "Intelligent lead screening",
            ],
            bg: "#E6FAF5", // light teal
        },
        {
            id: 4,
            icon: Globe,
            tag: "SEO Website",
            title: "SEO-Optimized Website to Grow Your Presence",
            description:
                "Boost your online visibility with a professionally designed, SEO-optimized website that captures leads and drives growth.",
            videoFile: "step_4.mp4",
            points: [
                "Improved search engine visibility",
                "Built-in lead capture forms",
                "Fast response time tracking",
                "Professional online presence",
            ],
            bg: "#F0F9FF", // light blue
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return

            const containerTop = containerRef.current.offsetTop
            const containerHeight = containerRef.current.offsetHeight
            const scrollY = window.scrollY
            const viewportHeight = window.innerHeight

            // Check if we're in the container viewport
            if (scrollY + viewportHeight > containerTop && scrollY < containerTop + containerHeight) {
                const relativeScroll = scrollY - containerTop + viewportHeight / 2
                const sectionHeight = containerHeight / features.length
                const newActiveSection = Math.floor(relativeScroll / sectionHeight)

                if (newActiveSection >= 0 && newActiveSection < features.length && newActiveSection !== activeSection) {
                    setActiveSection(newActiveSection)
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check
        return () => window.removeEventListener("scroll", handleScroll)
    }, [activeSection, features.length])

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <div ref={containerRef} className="bg-omniv-dark relative min-h-screen" style={{ background: features[activeSection].bg }}>
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
                        backgroundSize: "20px 20px",
                    }}
                ></div>
            </div>

            <div className="relative z-10">
                <div className="flex flex-col lg:flex-row min-h-[80vh] px-10">
                    {/* Left Side - Sticky Content, screenshot style */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-4 lg:p-8">
                        <div className="relative w-full max-w-2xl">
                            {/* Icon and Tag */}
                            {(() => {
                                const Icon = features[activeSection].icon;
                                return (
                                    <div className="inline-flex items-center gap-2 text-base font-medium text-gray-700 mb-4">
                                        <Icon className="w-5 h-5 text-gray-700" />
                                        <span className="text-gray-700">{features[activeSection].tag}</span>
                                    </div>
                                );
                            })()}
                            {/* Title */}
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                {features[activeSection].title}
                            </h2>
                            {/* Description */}
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                {features[activeSection].description}
                            </p>
                            {/* Bullet Points */}
                            <div className="space-y-3">
                                {features[activeSection].points.map((point, pointIndex) => (
                                    <div key={pointIndex} className="flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                                        <span className="text-base text-gray-900">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Scrollable Content */}
                    <div className="w-full lg:w-1/2 bg-omniv-dark px-6 md:px-12 py-8 lg:py-16">
                        <div className="space-y-16 lg:space-y-24">
                            {features.map((feature, i) => (
                                <div
                                    key={feature.id}
                                    ref={el => { sectionRefs.current[i] = el; }}
                                    className="min-h-[600px] flex items-center"
                                >
                                    {/* Video Placeholder */}
                                    <div className="relative w-full">                                
                                            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center border-2 border-gray-300">
                                                <video
                                                    src={`/videos/${feature.videoFile}`}
                                                    className="w-full h-full rounded-xl object-cover"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    controls={false}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                                                        if (fallback) fallback.style.display = 'flex';
                                                    }}
                                                />
                                                <div style={{display:'none',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-xl text-center text-gray-500 text-lg">
                                                    Video not found or format not supported.<br/>Please check the file name and format in <code>public/videos</code>.<br/>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    )
}

export default Category