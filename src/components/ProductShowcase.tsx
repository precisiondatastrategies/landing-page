"use client"

import { useState } from "react"
import { Users, Calendar, Phone, Globe, CheckCircle, LucideIcon } from "lucide-react"

type Feature = {
    id: number
    icon: LucideIcon
    tag: string
    title: string
    description: string
    videoFile: string
    points: string[]
}

const features: Feature[] = [
    {
        id: 1,
        icon: Users,
        tag: "Customer Profiles",
        title: "View and Manage Customer Profiles",
        description: "Keep track of all your customer information, job status, and activity history in one centralized dashboard.",
        videoFile: "View_and_Manage_Client_Profiles_on_Automate_Boutique.mp4",
        points: [
            "Track job status in real-time",
            "Access complete customer information",
            "View detailed activity history",
            "Add notes and tags for organization"
        ]
    },
    {
        id: 2,
        icon: Calendar,
        tag: "Appointments",
        title: "Book Client Appointments",
        description: "Streamline your scheduling with automatic appointment booking, available time slots, and instant confirmations.",
        videoFile: "Book_Client_Appointments_with_Available_Slots.mp4",
        points: [
            "Automatic scheduling system",
            "View available time slots",
            "Instant appointment confirmations",
            "Seamless calendar synchronization"
        ]
    },
    {
        id: 3,
        icon: Phone,
        tag: "AI Voice Agent",
        title: "24/7 AI Voice Receptionist",
        description: "Never miss a call with our AI-powered voice receptionist that handles calls, answers questions, and books appointments around the clock.",
        videoFile: "Configure_and_Test_Your_Assistant_on_Vapi_Dashboard.mp4",
        points: [
            "24/7 call handling and response",
            "Automated Q&A for common questions",
            "Direct job booking from calls",
            "Intelligent lead screening"
        ]
    },
    {
        id: 4,
        icon: Globe,
        tag: "SEO Website",
        title: "SEO-Optimized Website to Grow Your Presence",
        description: "Boost your online visibility with a professionally designed, SEO-optimized website that captures leads and drives growth.",
        videoFile: "Schedule_Plumbing_Services_and_Explore_Response_Times.mp4",
        points: [
            "Improved search engine visibility",
            "Built-in lead capture forms",
            "Fast response time tracking",
            "Professional online presence"
        ]
    }
]

export default function ProductShowcase() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Dot Pattern Background - more visible */}
            <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)', // darker dots
                        backgroundSize: '20px 20px' // slightly smaller spacing
                    }}
                ></div>
            </div>
            
            {/* Navigation Tabs */}
            <div className="relative z-10 pt-12 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeTab === index
                                    ? "bg-white text-gray-900 shadow-md"
                                    : "bg-white/60 text-gray-700 hover:bg-white/80"
                                    }`}
                            >
                                {feature.tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Content */}
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className={`transition-opacity duration-300 ${activeTab === index ? "block" : "hidden"
                        }`}
                >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 ${index === 0
                        ? "bg-linear-to-br from-orange-100/80 via-pink-50/60 to-purple-100/80"
                        : "bg-linear-to-br from-purple-100/80 via-pink-50/60 to-blue-100/80"
                        }`}></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                            {/* Left: Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <feature.icon className="w-5 h-5" />
                                    <span>{feature.tag}</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    {feature.title}
                                </h2>

                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                                    {feature.description}
                                </p>

                                {/* Bullet Points */}
                                <div className="space-y-3">
                                    {feature.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                                            <p className="text-base text-gray-700">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Video Placeholder */}
                            <div className="relative">
                                <div className="bg-white/95 rounded-2xl p-8 shadow-2xl border border-white/50">
                                    <div className="aspect-video bg-linear-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                                        <div className="text-center space-y-3">
                                            <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Video Demo</p>
                                                <p className="text-xs text-gray-600 mt-1">{feature.videoFile}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
