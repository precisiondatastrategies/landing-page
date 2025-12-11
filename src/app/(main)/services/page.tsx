"use client"

import AIChatbotLottie from "@/components/lottie/ai-chatbot"
import ConfirmationEmailLottie from "@/components/lottie/confirmation-email"
import ContractAutomationLottie from "@/components/lottie/contract-automation"
import MiniCRMLottie from "@/components/lottie/mini-crm"
import VoiceReceptionistLottie from "@/components/lottie/voice-receptionist"
import KnowledgeBaseLottie from "@/components/lottie/knowledge-base"
import AITicketingWorkflowLottie from "@/components/lottie/ai-ticketing-workflow"
import MultiChannelLeadCaptureLottie from "@/components/lottie/multi-channel-lead"
import AIFollowUpSequencesLottie from "@/components/lottie/ai-follow-up-sequences"
import RealTimeQualificationLottie from "@/components/lottie/real-time-qualification"

const buildVector = (primary: string, secondary: string, accent: string) => {
    const svg = `
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" rx="28" fill="${primary}" fill-opacity="0.08"/>
        <circle cx="68" cy="76" r="42" fill="${secondary}" fill-opacity="0.35"/>
        <rect x="112" y="32" width="152" height="26" rx="13" fill="${primary}" fill-opacity="0.35"/>
        <rect x="112" y="72" width="118" height="26" rx="13" fill="${accent}" fill-opacity="0.45"/>
        <rect x="112" y="112" width="92" height="26" rx="13" fill="${secondary}" fill-opacity="0.35"/>
        <circle cx="252" cy="134" r="30" fill="${accent}" fill-opacity="0.4"/>
        <path d="M72 130L108 146L72 162" stroke="${accent}" stroke-opacity="0.8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const services = [
    {
        title: "AI Website Chatbot",
        description: "Instant replies, lead capture, FAQs — available 24/7 on your site.",
        tag: "Web Chat",
        metric: "Response <2.3s",
        component: <AIChatbotLottie className="h-full w-full" />
    },
    {
        title: "AI Voice Receptionist",
        description: "Answers calls, books jobs, qualifies leads, and handles follow-ups.",
        tag: "Voice",
        metric: "Missed calls 0",
        component: <VoiceReceptionistLottie className="h-full w-full" />
    },
    {
        title: "Mini CRM + Lead Tracker",
        description: "Track leads, notes, follow-ups, tasks, and customer journeys.",
        tag: "CRM",
        metric: "Pipeline live",
        component: <MiniCRMLottie className="h-full w-full" />
    },
    {
        title: "Contract Automation",
        description: "Generate, send, and store digital contracts automatically.",
        tag: "Docs",
        metric: "E-sign ready",
        component: <ContractAutomationLottie className="h-full w-full" />
    },
    {
        title: "Confirmation Email Engine",
        description: "Automatic confirmation emails after calls, chats, or bookings.",
        tag: "Email",
        metric: "Send in 30s",
        component: <ConfirmationEmailLottie className="h-full w-full" />
    },
    {
        title: "Knowledge Base AI",
        description: "AI trained on your documents for accurate, real-time answers.",
        tag: "Docs AI",
        metric: "On-brand answers",
        component: <KnowledgeBaseLottie className="h-full w-full" />
    },
    {
        title: "AI Ticketing Workflow",
        description: "Turn conversations into tickets automatically with smart routing.",
        tag: "Support",
        metric: "Smart routing",
        component: <AITicketingWorkflowLottie className="h-full w-full" />
    },
    {
        title: "Multi-Channel Lead Capture Hub",
        description: "Capture leads from WhatsApp, Instagram, website, email, and phone.",
        tag: "Omni-Channel",
        metric: "6+ channels",
        component: <MultiChannelLeadCaptureLottie className="h-full w-full" />
    },
    {
        title: "AI Follow-Up Sequences",
        description: "Automated follow-up messaging across SMS, email, and chat.",
        tag: "Sequences",
        metric: "Hands-free",
        component: <AIFollowUpSequencesLottie className="h-full w-full" />
    },
    {
        title: "Real-Time Qualification Bot",
        description: "Qualifies leads with AI-driven logic before sending them to your team.",
        tag: "Qualification",
        metric: "Hot lead alerts",
        component: <RealTimeQualificationLottie className="h-full w-full" />
    }
]

export default function AIServices() {
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
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Our Powerful <span className="bg-linear-to-r from-[#7c3aed] via-[#ec4899] to-[#6366f1] bg-clip-text text-transparent">AI Solutions</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Launch a concierge-level automation layer with animated chat previews, multilingual playbooks, and instant handoffs. Pick a template, sync your knowledge base, and go live.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative overflow-hidden rounded-3xl bg-transparent  shadow-[0_20px_60px_rgba(124,58,237,0.08)]  transition duration-300   hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                        >
                            <div className="relative rounded-2xl bg-[#f5f3ff]">
                                <div className="relative h-40 md:h-80 overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-inner">
                                    {service.component}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="text-lg font-semibold text-gray-900">{service.title}</div>
                                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
