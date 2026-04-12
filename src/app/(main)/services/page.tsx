"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import FinalCTA from "@/components/FinalCTA"
import Link from "next/link"
import { Phone, Zap, Calendar, BarChart3, MessageSquare, Workflow, Bot, Mail, Users, FileText, ArrowRight } from "lucide-react"

const sections = [
    {
        id: "voice",
        label: "Voice",
        icon: Phone,
        title: "AI Voice Agent",
        headline: "Never miss a call. Never lose a booking.",
        description: "Replaces your answering service entirely. Our AI voice agent answers every call 24/7, books appointments directly into your dispatch system, handles emergency triage, qualifies leads, and sends instant text confirmations — all without a human CSR.",
        bullets: [
            "98.4% inbound call answer rate",
            "After-hours booking: 31% → 71%",
            "Integrated with ServiceTitan, RingCentral, and major dispatch platforms",
            "Live in 4 weeks",
        ],
        image: "/services/voice2.png",
        cta: "Start with a Voice Agent Assessment",
    },
    {
        id: "leads",
        label: "Lead Qualification",
        icon: Zap,
        title: "Lead Qualification AI",
        headline: "Stop wasting your sales team on tire kickers.",
        description: "AI scores every inbound lead in real time and routes hot prospects to your sales team in seconds — with a full dossier. Cold leads enter automated nurture. Your team stops spending 40% of their time on unqualified inquiries.",
        bullets: [
            "Lead response time: 4.2 days → 11 minutes",
            "Qualified lead ratio: 45% → 78%",
            "Native Salesforce, HubSpot, and GoHighLevel integration",
            "Hot lead alerts via SMS and email",
        ],
        image: "/services/bot.jpg",
        cta: "See Lead Qualification in Action",
    },
    {
        id: "scheduling",
        label: "Scheduling",
        icon: Calendar,
        title: "Scheduling Automation",
        headline: "Zero-touch dispatch. Zero scheduling gaps.",
        description: "Processes appointment requests from voice, web, and email. Auto-schedules based on technician skills, location, and availability. Sends reminders and enables one-tap rescheduling — eliminating 2–3 hours of daily manual dispatch per location.",
        bullets: [
            "Instant text and email confirmations",
            "24-hour and 2-hour automated reminders",
            "Multi-location and multi-branch support",
            "One-tap rescheduling via SMS",
        ],
        image: "/services/step.jpg",
        cta: "Automate Your Scheduling",
    },
    {
        id: "crm",
        label: "CRM & Pipeline",
        icon: MessageSquare,
        title: "CRM & Pipeline Automation",
        headline: "Your CRM should work for you, not the other way around.",
        description: "Full Salesforce, HubSpot, and GoHighLevel integrations with automated lead scoring, follow-up sequences, and pipeline analytics. Capture leads from every channel — web, phone, email, WhatsApp, Instagram — into one unified pipeline.",
        bullets: [
            "Multi-channel lead capture: 6+ sources",
            "Automated follow-up sequences across SMS, email, and chat",
            "Full pipeline visibility and conversion tracking",
            "AI-powered contact enrichment",
        ],
        image: "/services/mini.jpg",
        cta: "Connect Your CRM",
    },
    {
        id: "dashboard",
        label: "PE Dashboard",
        icon: BarChart3,
        title: "PE Performance Dashboard",
        headline: "One number. Monthly AI-attributable EBITDA.",
        description: "Real-time EBITDA impact reporting built for operating partners and portfolio CEOs. Every AI metric tied to a financial outcome — not vanity tech stats. IC-ready reporting that makes your operating partner look good to the partners.",
        bullets: [
            "Live EBITDA contribution view",
            "Revenue capture, cost savings, and pipeline metrics",
            "IC-ready reporting with sensitivity analysis",
            "Portfolio benchmarking across companies",
        ],
        image: "/services/mc.jpg",
        cta: "See the Dashboard",
    },
    {
        id: "workflow",
        label: "Back-Office AI",
        icon: Workflow,
        title: "Workflow & Back-Office AI",
        headline: "Automate the admin. Free your team for revenue work.",
        description: "Contract generation, review workflows, ticketing automation, and knowledge base AI trained on your portfolio company's documents. Reduce admin overhead across every location without adding headcount.",
        bullets: [
            "E-sign ready contract generation and storage",
            "Smart ticket routing and resolution",
            "AI knowledge base trained on your documents",
            "Post-service review generation workflow",
        ],
        image: "/services/contract.jpg",
        cta: "Automate Your Back Office",
    },
]

export default function ServicesPage() {
    const ldJson = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation Services",
        "provider": {
            "@type": "Organization",
            "name": "Precision Data Strategies",
            "url": "https://precisiondatastrategies.com"
        },
        "areaServed": "US",
        "description": "AI automation services for PE-backed service companies — voice agents, lead qualification, scheduling automation, CRM integration, and EBITDA dashboards."
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
            <main className="min-h-screen bg-white font-sans">

                {/* Header */}
                <section className="relative pt-36 pb-20 bg-white border-b border-gray-100 overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-gray-700">Services</span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">What We Deploy</p>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]">
                                The AI stack for<br />
                                <span className="text-blue-600">service-industry portfolios.</span>
                            </h1>
                            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                                Six core systems. Each one tied to a measurable EBITDA outcome. Deployed in weeks, not months.
                            </p>
                        </motion.div>

                        {/* Jump links */}
                        <div className="flex flex-wrap gap-2 mt-10">
                            {sections.map(s => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-gray-500 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
                                >
                                    <s.icon className="w-3.5 h-3.5" />
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Sections */}
                <div className="divide-y divide-gray-100">
                    {sections.map((s, i) => (
                        <section key={s.id} id={s.id} className="py-20 scroll-mt-24">
                            <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-16 items-center`}
                                >
                                    {/* Image */}
                                    <div className="w-full lg:w-2/5 shrink-0">
                                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-lg">
                                            <Image
                                                src={s.image}
                                                alt={s.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-xs font-semibold text-gray-700 shadow-sm">
                                                <s.icon className="w-3.5 h-3.5 text-blue-600" />
                                                {s.label}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">{s.title}</p>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                            {s.headline}
                                        </h2>
                                        <p className="text-gray-500 leading-relaxed mb-7 text-base">
                                            {s.description}
                                        </p>

                                        <ul className="space-y-2.5 mb-8">
                                            {s.bullets.map(b => (
                                                <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                                                    <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    </span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                                        >
                                            {s.cta} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    ))}
                </div>

                <FinalCTA />
            </main>
        </>
    )
}
