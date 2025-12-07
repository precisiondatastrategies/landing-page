"use client"

import { MessageSquare, Phone, Database, FileText, Mail, BookOpen, Ticket, Inbox, Send, CheckCircle } from "lucide-react"

const services = [
    {
        icon: MessageSquare,
        title: "AI Website Chatbot",
        description: "Instant replies, lead capture, FAQs — available 24/7 on your site."
    },
    {
        icon: Phone,
        title: "AI Voice Receptionist",
        description: "Answers calls, books jobs, qualifies leads, and handles follow-ups."
    },
    {
        icon: Database,
        title: "Mini CRM + Lead Tracker",
        description: "Track leads, notes, follow-ups, tasks, and customer journeys."
    },
    {
        icon: FileText,
        title: "Contract Automation",
        description: "Generate, send, and store digital contracts automatically."
    },
    {
        icon: Mail,
        title: "Confirmation Email Engine",
        description: "Automatic confirmation emails after calls, chats, or bookings."
    },
    {
        icon: BookOpen,
        title: "Knowledge Base AI",
        description: "AI trained on your documents for accurate, real-time answers."
    },
    {
        icon: Ticket,
        title: "AI Ticketing Workflow",
        description: "Turn conversations into tickets automatically with smart routing."
    },
    {
        icon: Inbox,
        title: "Multi-Channel Lead Capture Hub",
        description: "Capture leads from WhatsApp, Instagram, website, email, and phone."
    },
    {
        icon: Send,
        title: "AI Follow-Up Sequences",
        description: "Automated follow-up messaging across SMS, email, and chat."
    },
    {
        icon: CheckCircle,
        title: "Real-Time Qualification Bot",
        description: "Qualifies leads with AI-driven logic before sending them to your team."
    }
]

export default function AIServices() {
    return (
        <section id="services" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything You Need to Automate Your Business
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A complete suite of AI tools designed to capture leads, handle conversations, automate workflows, and deliver great customer experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-blue-50 transition-colors">
                                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
