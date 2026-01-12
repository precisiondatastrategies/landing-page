"use client"

import Link from "next/link"
import Image from "next/image"
import { TextReveal } from "./ui/TextReveal"
import { useRef, useEffect } from "react"
import gsap from "gsap"

type AIServicesProps = {
    showAll?: boolean
}

const services = [
    {
        title: "AI Website Chatbot",
        description: "Instant replies, lead capture, FAQs — available 24/7 on your site.",
        tag: "Web Chat",
        metric: "Response <2.3s",
        image: "/services/chatbot1.jpg" // Add image URL here
    },
    {
        title: "AI Voice Receptionist",
        description: "Answers calls, books jobs, qualifies leads, and handles follow-ups.",
        tag: "Voice",
        metric: "Missed calls 0",
        image: "/services/voice2.png" // Add image URL here
    },
    {
        title: "Mini CRM + Lead Tracker",
        description: "Track leads, notes, follow-ups, tasks, and customer journeys.",
        tag: "CRM",
        metric: "Pipeline live",
        image: "/services/mini.jpg" // Add image URL here
    },
    {
        title: "AI Ticketing Workflow",
        description: "Turn conversations into tickets automatically with smart routing.",
        tag: "Support",
        metric: "Smart routing",
        image: "/services/tick.jpg"
    },
    {
        title: "Confirmation Email Engine",
        description: "Automatic confirmation emails after calls, chats, or bookings.",
        tag: "Email",
        metric: "Send in 30s",
        image: "/services/email1.png" // Add image URL here
    },
    {
        title: "Multi-Channel Lead Capture Hub",
        description: "Capture leads from WhatsApp, Instagram, website, email, and phone.",
        tag: "Omni-Channel",
        metric: "6+ channels",
        image: "/services/mc.jpg" // Add image URL here
    },
    {
        title: "Knowledge Base AI",
        description: "AI trained on your documents for accurate, real-time answers.",
        tag: "Docs AI",
        metric: "On-brand answers",
        image: "/services/aa1.jpg" // Add image URL here
    },
    {
        title: "Contract Automation",
        description: "Generate, send, and store digital contracts automatically.",
        tag: "Docs",
        metric: "E-sign ready",
        image: "/services/contract.jpg" // Add image URL here
    },
    {
        title: "AI Follow-Up Sequences",
        description: "Automated follow-up messaging across SMS, email, and chat.",
        tag: "Sequences",
        metric: "Hands-free",
        image: "" // Add image URL here
    },
    {
        title: "Real-Time Qualification Bot",
        description: "Qualifies leads with AI-driven logic before sending them to your team.",
        tag: "Qualification",
        metric: "Hot lead alerts",
        image: "" // Add image URL here
    }
]

export default function AIServices({ showAll = false }: AIServicesProps) {
    const visibleServices = showAll ? services : services.slice(0, 6)
    // const gridRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.to(".service-card", {
    //             scrollTrigger: {
    //                 trigger: gridRef.current,
    //                 start: "top 80%",
    //             },
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.8,
    //             stagger: 0.1,
    //             ease: "power3.out",
    //         })
    //     }, gridRef)

    //     return () => ctx.revert()
    // }, [])

    return (
        <section
            id="services"
            className="section-padding relative overflow-hidden bg-[#f8f6ff]"
        >
            <div className="absolute inset-0">
                <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-linear-to-br from-[#a855f7]/30 to-[#6366f1]/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-4xl bg-linear-to-tr from-[#f9a8d4]/30 via-[#c4b5fd]/40 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl space-y-6">
                        <TextReveal as="h2" className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Our Powerful AI Solutions
                        </TextReveal>
                        <p className="text-lg text-gray-600">
                            Launch a concierge-level automation layer with animated chat previews, multilingual playbooks, and instant handoffs. Pick a template, sync your knowledge base, and go live.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {visibleServices.map((service) => (
                        <div
                            key={service.title}
                            className="service-card group relative overflow-hidden rounded-3xl bg-transparent  shadow-[0_20px_60px_rgba(124,58,237,0.08)]  transition duration-300   hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                        >
                            <div className="relative rounded-2xl bg-[#f5f3ff]">
                                <div className="relative h-80 overflow-hidden rounded-xl  shadow-inner">
                                    {service.image && (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="text-lg font-semibold text-gray-900">{service.title}</div>
                                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-200 px-6 py-3 text-sm font-semibold hover:translate-y-0.5"
                        >
                            Explore more services

                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
