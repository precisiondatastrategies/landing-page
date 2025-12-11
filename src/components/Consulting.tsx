"use client"

import {
    ArrowRight,
} from "lucide-react"

export default function Consulting() {
    return (
        <section className="relative overflow-hidden section-padding bg-linear-to-br from-white via-[#f6f8fb] to-white">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto space-y-14">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:max-w-xl">
                        <div className="relative grid gap-4">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-500/12 via-purple-500/10 to-cyan-400/10 blur-3xl" />
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/70 bg-white/70 backdrop-blur aspect-5/3">
                                <img
                                    src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80"
                                    alt="Consultant presenting to team"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
        
                        </div>
                    </div>

                    <div className="flex-1 space-y-6 w-full">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            AI consulting built to ship fast and stay accountable.
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            We partner with your execs, ops, and engineering to move from idea to controlled rollout without burning trust. Every engagement ships a playbook, ownership model, and live automation in your stack.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-3 rounded-full bg-linear-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-200 font-semibold  shadow-gray-900/10 hover:-translate-y-1 hover:shadow-xl   flex items-center justify-center gap-2">
                                Schedule a consultation
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold border border-gray-200 shadow-sm hover:border-gray-300 transition">
                                View sample playbook
                            </button>
                        </div>
 
                    </div>
                </div>
            </div>
        </section>
    )
}
