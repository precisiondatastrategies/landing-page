"use client"

import { Calendar, Users, Lightbulb } from "lucide-react"

export default function WorkflowExplainer() {
    const steps = [
        {
            number: "01",
            icon: Calendar,
            title: "Schedule a meeting",
            description: "You schedule a meeting with our product development team at a time that works for you."
        },
        {
            number: "02",
            icon: Users,
            title: "Meet PDS team",
            description: "You share your product idea and ask any questions you have after we sign an NDA"
        },
        {
            number: "03",
            icon: Lightbulb,
            title: "Obtain a strategy",
            description: "We outline how we can assist you in developing and bringing your product idea to life"
        }
    ]

    return (
        <section className="section-padding bg-linear-to-br from-blue-500 via-blue-500 to-blue-600 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                        Steps to Start AI Automation Project
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-12 left-0 right-0 h-0.5 bg-cyan-400/40 hidden lg:block"
                        style={{ top: '3.5rem' }}>
                        {/* Progress dots */}
                        <div className="absolute left-0 w-3 h-3 bg-cyan-400 rounded-full -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                        <div className="absolute left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                        <div className="absolute right-0 w-3 h-3 bg-cyan-400 rounded-full -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                            >
                                {/* Step Number */}
                                <div className="text-7xl md:text-8xl font-bold text-white/20 mb-6 transition-all duration-300 group-hover:text-white/30 group-hover:scale-110">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110 group-hover:shadow-xl">
                                    <step.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-cyan-100">
                                    {step.title}
                                </h3>
                                <p className="text-blue-100 text-base md:text-lg leading-relaxed transition-all duration-300 group-hover:text-white">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
