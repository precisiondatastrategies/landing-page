"use client"

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
        image: buildVector("#a855f7", "#c4b5fd", "#f472b6")
    },
    {
        title: "AI Voice Receptionist",
        description: "Answers calls, books jobs, qualifies leads, and handles follow-ups.",
        tag: "Voice",
        metric: "Missed calls 0",
        image: buildVector("#7c3aed", "#a5b4fc", "#f472b6")
    },
    {
        title: "Mini CRM + Lead Tracker",
        description: "Track leads, notes, follow-ups, tasks, and customer journeys.",
        tag: "CRM",
        metric: "Pipeline live",
        image: buildVector("#9333ea", "#ddd6fe", "#fb7185")
    },
    {
        title: "Contract Automation",
        description: "Generate, send, and store digital contracts automatically.",
        tag: "Docs",
        metric: "E-sign ready",
        image: buildVector("#c026d3", "#c4b5fd", "#f472b6")
    },
    {
        title: "Confirmation Email Engine",
        description: "Automatic confirmation emails after calls, chats, or bookings.",
        tag: "Email",
        metric: "Send in 30s",
        image: buildVector("#7c3aed", "#f5d0fe", "#ec4899")
    },
    {
        title: "Knowledge Base AI",
        description: "AI trained on your documents for accurate, real-time answers.",
        tag: "Docs AI",
        metric: "On-brand answers",
        image: buildVector("#a855f7", "#d8b4fe", "#fb7185")
    },
    {
        title: "AI Ticketing Workflow",
        description: "Turn conversations into tickets automatically with smart routing.",
        tag: "Support",
        metric: "Smart routing",
        image: buildVector("#7c3aed", "#c4b5fd", "#a78bfa")
    },
    {
        title: "Multi-Channel Lead Capture Hub",
        description: "Capture leads from WhatsApp, Instagram, website, email, and phone.",
        tag: "Omni-Channel",
        metric: "6+ channels",
        image: buildVector("#8b5cf6", "#e9d5ff", "#f472b6")
    },
    {
        title: "AI Follow-Up Sequences",
        description: "Automated follow-up messaging across SMS, email, and chat.",
        tag: "Sequences",
        metric: "Hands-free",
        image: buildVector("#a855f7", "#ddd6fe", "#fb7185")
    },
    {
        title: "Real-Time Qualification Bot",
        description: "Qualifies leads with AI-driven logic before sending them to your team.",
        tag: "Qualification",
        metric: "Hot lead alerts",
        image: buildVector("#9333ea", "#c4b5fd", "#ec4899")
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

                    {/* <div className="grid w-full max-w-sm grid-cols-2 gap-4 text-sm">
                        <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-[#c4b5fd]/40">
                            <p className="text-xs uppercase tracking-wide text-[#a855f7]">Playbook</p>
                            <h3 className="mt-2 text-xl font-semibold text-gray-900">Story Mode</h3>
                            <p className="mt-1 text-gray-500">Animated walkthrough chat you can embed in any landing page.</p>
                            <div className="mt-4 h-24 rounded-xl bg-linear-to-br from-[#a855f7]/20 via-white to-[#f0abfc]/30" />
                        </div>
                        <div className="flex flex-col justify-between rounded-2xl border border-white/60 bg-linear-to-b from-white/90 to-white/40 p-5 text-gray-600 shadow-lg shadow-[#c4b5fd]/30">
                            <div>
                                <p className="text-xs uppercase tracking-wide text-[#6366f1]">Response Time</p>
                                <h3 className="mt-2 text-3xl font-bold text-gray-900">2.3s</h3>
                                <p className="text-sm">Avg. answer speed across chat, voice, SMS.</p>
                            </div>
                            <div className="mt-6 rounded-xl border border-dashed border-[#c4b5fd] p-4 text-xs uppercase tracking-wide text-[#a855f7]">
                                Trusted by 1200+ teams
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                            <div
                                key={service.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(124,58,237,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                            >
                                <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                                    <span className="rounded-full bg-[#f3e8ff] px-3 py-1 text-[#7c3aed]">{service.tag}</span>
                                    <span className="text-[#7c3aed]/80">{service.metric}</span>
                                </div>
                                <div className="mt-5 relative rounded-2xl bg-[#f5f3ff] p-4">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-36 w-full rounded-2xl object-contain"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-4 right-4 rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#7c3aed]">
                                        Demo Ready
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}
