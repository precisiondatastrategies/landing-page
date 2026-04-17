"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, CheckCircle, FileSearch, LucideIcon, Phone, TrendingUp } from "lucide-react"

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
        icon: FileSearch,
        tag: "AI Readiness Assessment",
        title: "Know Exactly Where the EBITDA Is Before You Spend a Dollar",
        description:
            "We audit every portfolio company's operations and deliver a prioritized roadmap mapped to projected EBITDA impact. Investment committee-ready.",
        videoFile: "step_1.mp4",
        points: [
            "Call recording analysis & revenue leak identification",
            "CSR workflow and labor cost audit",
            "Sales pipeline efficiency review",
            "Prioritized implementation roadmap",
        ],
        bg: "#FFF7ED",
    },
    {
        id: 2,
        icon: Phone,
        tag: "AI Voice Agent",
        title: "24/7 AI Voice Agent That Books Jobs and Captures Revenue",
        description:
            "Replace your answering service with an AI agent that answers every call, books appointments directly into your dispatch system, and handles emergency triage.",
        videoFile: "voice.mp4",
        points: [
            "After-hours booking rate from 31% to 71%",
            "Inbound call answer rate from 72% to 98.4%",
            "Integrated with ServiceTitan, Salesforce, HubSpot",
            "Answering service contract eliminated",
        ],
        bg: "#F6F3FF",
    },
    {
        id: 3,
        icon: TrendingUp,
        tag: "Sales & Lead Qualification",
        title: "Stop Your Sales Team From Wasting 40% of Their Time",
        description:
            "AI lead scoring and routing that instantly separates hot commercial prospects from tire-kickers. Lead response speed improves dramatically.",
        videoFile: "step_2.mp4",
        points: [
            "AI lead scoring with instant hot-lead routing",
            "Automated nurture sequences for warm leads",
            "CRM integration with full lead dossier on handoff",
            "Sales team qualified lead ratio from 45% to 78%",
        ],
        bg: "#E6FAF5",
    },
    {
        id: 4,
        icon: BarChart3,
        tag: "PE Performance Dashboard",
        title: "One Number: AI-Attributable EBITDA Contribution",
        description:
            "A real-time dashboard built for operating partners, not portfolio company CEOs. Every metric connects directly to EBITDA  -  the number your LPs are tracking.",
        videoFile: "dash.mp4",
        points: [
            "Revenue capture from AI-booked jobs",
            "Cost savings vs. previous labor and vendor spend",
            "Sales pipeline conversion by lead score tier",
            "EBITDA impact updated in real time",
        ],
        bg: "#F0F9FF",
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
                                                    Video preview not available.
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
        if (typeof window === "undefined" || window.innerWidth >= 1024) return

        let ScrollTriggerModule: any = null

        const load = async () => {
            const { gsap } = await import("gsap")
            const { ScrollTrigger } = await import("gsap/ScrollTrigger")

            ScrollTriggerModule = ScrollTrigger
            gsap.registerPlugin(ScrollTrigger)

            sectionsRef.current.forEach((section, index) => {
                if (!section || index === sectionsRef.current.length - 1) return

                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    onLeave: () => { gsap.set(section, { autoAlpha: 0 }) },
                    onEnterBack: () => { gsap.set(section, { autoAlpha: 1 }) },
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
                            ref={(el) => { sectionsRef.current[index] = el }}
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
