"use client"

import { ArrowRight, Check } from "lucide-react"

export default function FinalCTA() {
    return (
        <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div>
                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Automate Your Business with AI?
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Book a free demo and see your automation in action.
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
                        {[
                            "Setup in 48 hours",
                            "No coding required",
                            "Cancel anytime"
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Check className="w-5 h-5" />
                                <span className="font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg">
                            Get Started Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all duration-200">
                            Watch Demo
                        </button>
                    </div>

                    {/* Trust indicator */}
                    <p className="text-blue-100 text-sm mt-8">
                        Join 500+ businesses already automating with UNITZERO
                    </p>
                </div>
            </div>
        </section>
    )
}
