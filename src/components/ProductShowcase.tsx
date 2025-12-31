"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, CheckCircle, Globe, LucideIcon, Phone, Users } from "lucide-react"

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
        videoFile: "voice.mp4",
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
        videoFile: "web.mp4",
        points: [
            "Improved search engine visibility",
            "Built-in lead capture forms",
            "Fast response time tracking",
            "Professional online presence",
        ],
        bg: "#F0F9FF", // light blue
    },
];

function DesktopFeatureShowcase() {
    const [activeSection, setActiveSection] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return

            const containerTop = containerRef.current.offsetTop
            const containerHeight = containerRef.current.offsetHeight
            const scrollY = window.scrollY
            const viewportHeight = window.innerHeight

            if (scrollY + viewportHeight > containerTop && scrollY < containerTop + containerHeight) {
                const relativeScroll = scrollY - containerTop + viewportHeight / 2
                const sectionHeight = containerHeight / features.length
                const newActiveSection = Math.floor(relativeScroll / sectionHeight)

                if (newActiveSection >= 0 && newActiveSection < features.length) {
                    setActiveSection(newActiveSection)
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="hidden lg:block">
            <div ref={containerRef} className="relative min-h-screen" style={{ background: features[activeSection].bg }}>
                <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
                            backgroundSize: "20px 20px",
                        }}
                    ></div>
                </div>

                <div className="relative z-10">
                    <div className="flex min-h-[80vh] flex-col lg:flex-row p-5 sm:px-10 sm:py-0">
                        <div className="flex w-full items-center justify-center p-4 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:p-8">
                            <div className="relative w-full max-w-2xl">
                                {(() => {
                                    const Icon = features[activeSection].icon
                                    return (
                                        <div className="mb-4 inline-flex items-center gap-2 text-base font-medium text-gray-700">
                                            <Icon className="h-5 w-5 text-gray-700" />
                                            <span className="text-gray-700">{features[activeSection].tag}</span>
                                        </div>
                                    )
                                })()}
                                <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                                    {features[activeSection].title}
                                </h2>
                                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                    {features[activeSection].description}
                                </p>
                                <div className="space-y-3">
                                    {features[activeSection].points.map((point) => (
                                        <div key={point} className="flex items-center gap-2">
                                            <CheckCircle className="h-6 w-6 shrink-0 text-green-600" />
                                            <span className="text-base text-gray-900">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-6 py-8 md:px-12 lg:w-1/2 lg:py-16">
                            <div className="space-y-16 lg:space-y-24">
                                {features.map((feature) => (
                                    <div key={feature.id} className="flex min-h-[600px] items-center">
                                        <div className="relative w-full">
                                            <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-200">
                                                <video
                                                    src={`/videos/${feature.videoFile}`}
                                                    className="h-full w-full rounded-xl object-cover"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    controls={false}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = "none"
                                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                                                        if (fallback) fallback.style.display = "flex"
                                                    }}
                                                />
                                                <div
                                                    style={{ display: "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
                                                    className="absolute left-0 top-0 h-full w-full rounded-xl bg-gray-100 text-center text-gray-500 text-lg"
                                                >
                                                    Video not found or format not supported.
                                                    <br />
                                                    Please check the file name and format in public/videos.
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MobileFeatureStack() {
    const sectionsRef = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        if (typeof window === "undefined" || window.innerWidth >= 1024) {
            return
        }

        let ScrollTriggerModule: any = null

        const load = async () => {
            const { gsap } = await import("gsap")
            const { ScrollTrigger } = await import("gsap/ScrollTrigger")

            ScrollTriggerModule = ScrollTrigger
            gsap.registerPlugin(ScrollTrigger)

            sectionsRef.current.forEach((section, index) => {
                if (!section || index === sectionsRef.current.length - 1) {
                    return
                }

                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    onLeave: () => {
                        gsap.set(section, { autoAlpha: 0 })
                    },
                    onEnterBack: () => {
                        gsap.set(section, { autoAlpha: 1 })
                    },
                })

                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                    scale: 0.95,
                    ease: "none",
                })
            })
        }

        load()

        return () => {
            if (ScrollTriggerModule) {
                ScrollTriggerModule.getAll().forEach((trigger: any) => trigger.kill())
            }
        }
    }, [])

    return (
        <div className="lg:hidden">
            <div className="relative">
                {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                        <section
                            key={feature.id}
                            ref={(el) => {
                                sectionsRef.current[index] = el
                            }}
                            className="relative flex items-center justify-center p-6 sm:p-8"
                        >
                            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl" style={{ background: feature.bg }}>
                                <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: "radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
                                            backgroundSize: "20px 20px",
                                        }}
                                    ></div>
                                </div>
                                <div className="relative z-10 space-y-4 p-8">
                                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700">
                                        <Icon className="h-5 w-5 text-gray-700" />
                                        <span>{feature.tag}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold leading-tight text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base text-gray-700">
                                        {feature.description}
                                    </p>
                                    <div className="space-y-3">
                                        {feature.points.map((point) => (
                                            <div key={point} className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                                                <span className="text-sm text-gray-900 sm:text-base">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default function Category() {
    return (
        <>
            <DesktopFeatureShowcase />
            <MobileFeatureStack />
        </>
    )
}