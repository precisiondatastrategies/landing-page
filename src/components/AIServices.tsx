"use client"

import Link from "next/link"
import Image from "next/image"
import { TextReveal } from "./ui/TextReveal"

type AIServicesProps = {
    showAll?: boolean
}

const services = [
    {
        title: "AI Voice Agent",
        description: "Replaces answering services. Books jobs, handles emergency triage, and qualifies leads 24/7  -  integrated with your dispatch system.",
        tag: "Voice",
        metric: "98.4% answer rate",
        image: "/services/voice2.png"
    },
    {
        title: "AI Lead Qualification",
        description: "Scores and routes inbound leads instantly. Hot prospects go to sales in seconds. Cold leads enter automated nurture. No more wasted rep time.",
        tag: "Sales AI",
        metric: "Priority response routing",
        image: "/services/chatbot1.jpg"
    },
    {
        title: "Automated Scheduling Engine",
        description: "Processes appointment requests from voice, web, and email. Auto-schedules based on technician skills, location, and availability.",
        tag: "Scheduling",
        metric: "Zero manual dispatch",
        image: "/services/step.jpg"
    },
    {
        title: "PE Performance Dashboard",
        description: "Real-time EBITDA impact reporting for operating partners. Every AI metric tied to a financial outcome  -  built for investment committee review.",
        tag: "Reporting",
        metric: "Live EBITDA view",
        image: "/services/mini.jpg"
    },
    {
        title: "CRM & Pipeline Automation",
        description: "Salesforce, HubSpot, GoHighLevel integrations with automated lead scoring, follow-up sequences, and pipeline analytics.",
        tag: "CRM",
        metric: "Full pipeline visibility",
        image: "/services/follow.jpg"
    },
    {
        title: "Multi-Channel Lead Capture",
        description: "Capture and qualify leads from phone, web, email, and chat into a single pipeline. No lead falls through the cracks.",
        tag: "Omni-Channel",
        metric: "6+ channels unified",
        image: "/services/mc.jpg"
    },
    {
        title: "AI Ticketing & Support Workflow",
        description: "Turn customer conversations into routed tickets automatically. Reduce CSR workload and improve resolution time across portfolio companies.",
        tag: "Support",
        metric: "Smart routing",
        image: "/services/tick.jpg"
    },
    {
        title: "Contract Automation",
        description: "Generate, send, and store digital contracts automatically after a job is booked or a deal is closed. E-sign ready.",
        tag: "Docs",
        metric: "E-sign ready",
        image: "/services/contract.jpg"
    },
    {
        title: "Review Generation Workflow",
        description: "Post-service text workflow that routes happy customers to Google reviews and flags unhappy ones for priority follow-up before they post publicly.",
        tag: "Reputation",
        metric: "3.6 → 4.4 stars",
        image: "/services/bot.jpg"
    },
    {
        title: "Knowledge Base AI",
        description: "AI trained on your portfolio company's documents for accurate, on-brand answers to customer and staff questions.",
        tag: "Docs AI",
        metric: "On-brand answers",
        image: "/services/aa1.jpg"
    }
]

export default function AIServices({ showAll = false }: AIServicesProps) {
    const visibleServices = showAll ? services : services.slice(0, 6)

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
                            The AI Stack We Deploy Across Your Portfolio
                        </TextReveal>
                        <p className="text-lg text-gray-600">
                            Every tool is purpose-built for service-industry portfolio companies. We integrate with your existing tech stack  -  ServiceTitan, Salesforce, HubSpot, RingCentral  -  and execute against measurable operating outcomes.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {visibleServices.map((service) => (
                        <div
                            key={service.title}
                            className="service-card group relative overflow-hidden rounded-3xl bg-transparent shadow-[0_20px_60px_rgba(124,58,237,0.08)] transition duration-300 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                        >
                            <div className="relative rounded-2xl bg-[#f5f3ff]">
                                <div className="relative h-80 overflow-hidden rounded-xl shadow-inner">
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
                            Explore all services
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
