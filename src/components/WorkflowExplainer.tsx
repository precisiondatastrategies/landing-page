"use client"

import { FileSearch, Zap, BarChart3 } from "lucide-react"

export default function WorkflowExplainer() {
    const steps = [
        {
            number: "01",
            icon: FileSearch,
            title: "AI Readiness Assessment",
            description: "We audit one portfolio company in 30-45 days. Call recordings, CSR workflows, sales pipeline, dispatch operations. You get a 90-day roadmap with projected EBITDA impact for every AI opportunity — formatted for your investment committee."
        },
        {
            number: "02",
            icon: Zap,
            title: "Implementation Sprint",
            description: "We deploy voice agents, scheduling automation, lead qualification, and CRM integrations in 8–12 weeks. Fixed project fee. No scope creep. A working AI system in your portfolio company's stack — not a slide deck."
        },
        {
            number: "03",
            icon: BarChart3,
            title: "Portfolio Expansion",
            description: "Once you see the EBITDA impact at company one, we roll the same playbook across your portfolio. One operating partner relationship. One proven system. Deployed at scale across every company before your exit window closes."
        }
    ]

    return (
        <section className="section-padding bg-linear-to-br from-blue-500 via-blue-500 to-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                        How We Deploy AI Across Your Portfolio
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Three phases. Fixed fees. Measurable EBITDA impact at every step.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute top-12 left-0 right-0 h-0.5 bg-cyan-400/40 hidden lg:block"
                        style={{ top: '3.5rem' }}>
                        <div className="absolute left-0 w-3 h-3 bg-cyan-400 rounded-full -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                        <div className="absolute left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                        <div className="absolute right-0 w-3 h-3 bg-cyan-400 rounded-full -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                            >
                                <div className="text-7xl md:text-8xl font-bold text-white/20 mb-6 transition-all duration-300 group-hover:text-white/30 group-hover:scale-110">
                                    {step.number}
                                </div>

                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110 group-hover:shadow-xl">
                                    <step.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                                </div>

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
