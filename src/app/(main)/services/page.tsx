"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import FinalCTA from "@/components/FinalCTA"
import Link from "next/link"

const services = [
    {
        title: "AI Website Chatbot",
        description: "Instant replies, lead capture, FAQs — available 24/7 on your site.",
        tag: "Web Chat",
        metric: "Response <2.3s",
        image: "/services/chatbot1.jpg"
    },
    {
        title: "AI Voice Receptionist",
        description: "Answers calls, books jobs, qualifies leads, and handles follow-ups.",
        tag: "Voice",
        metric: "Missed calls 0",
        image: "/services/voice2.png"
    },
    {
        title: "Mini CRM + Lead Tracker",
        description: "Track leads, notes, follow-ups, tasks, and customer journeys.",
        tag: "CRM",
        metric: "Pipeline live",
        image: "/services/mini.jpg"
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
        image: "/services/email1.png"
    },
        {
        title: "Multi-Channel Lead Capture Hub",
        description: "Capture leads from WhatsApp, Instagram, website, email, and phone.",
        tag: "Omni-Channel",
        metric: "6+ channels",
        image: "/services/mc.jpg"
    },
    {
        title: "Knowledge Base AI",
        description: "AI trained on your documents for accurate, real-time answers.",
        tag: "Docs AI",
        metric: "On-brand answers",
        image: "/services/aa1.jpg"
    },
    {
        title: "Contract Automation",
        description: "Generate, send, and store digital contracts automatically.",
        tag: "Docs",
        metric: "E-sign ready",
        image: "/services/contract.jpg"
    },
    {
        title: "AI Follow-Up Sequences",
        description: "Automated follow-up messaging across SMS, email, and chat.",
        tag: "Sequences",
        metric: "Hands-free",
        image: "/services/follow.jpg"
    },
    {
        title: "Real-Time Qualification Bot",
        description: "Qualifies leads with AI-driven logic before sending them to your team.",
        tag: "Qualification",
        metric: "Hot lead alerts",
        image: "/services/bot.jpg"
    }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
            {/* --- HEADER SECTION --- */}
            <section className="relative pt-32 pb-20 bg-[#F9F9F7] overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gray-900">Services</span>
                    </div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
                    >
                        Our <span className="text-blue-600">Solutions</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Comprehensive AI automation tools designed to streamline your operations and boost growth.
                    </motion.p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
                </div>
            </section>

            {/* --- SERVICES GRID --- */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                                    {service.image && (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                                        {service.tag}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 grow leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            {service.metric}
                                        </div>
                                        <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                                            Learn more →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    )
}

