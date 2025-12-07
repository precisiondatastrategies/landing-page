"use client"

import { Search, Workflow, Rocket, ArrowRight } from "lucide-react"

const services = [
    {
        icon: Search,
        title: "AI Readiness Assessment",
        description: "Find exactly what you can automate today.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Workflow,
        title: "Custom Workflow Design",
        description: "We map and build workflows around your business process.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Rocket,
        title: "Full Implementation",
        description: "We handle setup, integrations, and deployment from start to finish.",
        gradient: "from-green-500 to-emerald-500"
    }
]

export default function Consulting() {
    return (
        <section className="section-padding bg-linear-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        AI Consulting & Custom Automation Services
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        Get expert guidance and fully built automation systems tailored to your operations.
                    </p>
                    <p className="text-base text-gray-600 max-w-3xl mx-auto">
                        We help businesses understand where automation fits, design custom workflows, train AI agents, integrate their tools, and build end-to-end systems that run on autopilot.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover gradient background */}
                                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                            </div>
                        )
                    })}
                </div>

                {/* Engagement Process */}
                <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Our Engagement Process
                    </h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
                        {[
                            { step: "1", title: "Discovery Call", desc: "Understand your needs" },
                            { step: "2", title: "Strategy Design", desc: "Map your automation" },
                            { step: "3", title: "Implementation", desc: "Build & deploy" },
                            { step: "4", title: "Support", desc: "Ongoing optimization" }
                        ].map((item, index) => (
                            <div key={item.step} className="flex items-center gap-4">
                                <div className="shrink-0 text-center">
                                    <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center mb-2 shadow-lg">
                                        <span className="text-2xl font-bold text-blue-600">{item.step}</span>
                                    </div>
                                    <p className="font-semibold text-sm">{item.title}</p>
                                    <p className="text-xs text-white/80">{item.desc}</p>
                                </div>
                                {index < 3 && (
                                    <ArrowRight className="hidden md:block w-6 h-6 text-white/60 shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
