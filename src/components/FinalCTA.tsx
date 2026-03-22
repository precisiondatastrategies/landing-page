"use client"

import { ArrowRight, Shield, Clock, TrendingUp } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { BookingModal } from "./BookingModal"

const stats = [
    { icon: Clock, value: "3 Weeks", label: "To first deliverable" },
    { icon: TrendingUp, value: "10–15%", label: "Avg. EBITDA lift" },
    { icon: Shield, value: "NDA", label: "Signed on day one" },
]



export default function FinalCTA() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="relative overflow-hidden bg-[#060F1E]">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Radial glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
            </div>



            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-center px-6 py-28">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-8"
                >
                    AI Implementation for PE Portfolio Companies
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
                    style={{ color: "#ffffff" }}
                >
                    Ready to See the EBITDA<br />
                    <span style={{ color: "#60a5fa" }}>Impact Across Your Portfolio?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base text-white/50 leading-relaxed mb-10 max-w-xl mx-auto"
                >
                    Start with a $15K AI Readiness Assessment. Three weeks. One portfolio company.
                    A prioritized roadmap with projected EBITDA impact — formatted for your investment committee.
                </motion.p>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center justify-center gap-8 mb-12"
                >
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-1">
                                <Icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <span className="text-white font-bold text-lg leading-none">{value}</span>
                            <span className="text-white/40 text-xs">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <AnimatePresence mode="wait">
                        {!isExpanded && (
                            <>
                                <motion.div className="relative inline-block" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <motion.div
                                        layoutId="final-cta-card"
                                        className="absolute inset-0 rounded-full bg-blue-600"
                                        style={{ borderRadius: "9999px" }}
                                    />
                                    <motion.button
                                        onClick={() => setIsExpanded(true)}
                                        className="relative z-10 group px-8 py-4 font-semibold text-white flex items-center gap-2 rounded-full hover:opacity-90 transition-opacity"
                                    >
                                        Request a Demo
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </motion.div>
                                <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <Link
                                        href="/consulting"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 font-semibold hover:border-white/30 hover:text-white transition-all duration-200 text-sm"
                                    >
                                        Talk to an Expert
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-6 text-xs text-white/25"
                >
                    No commitment required. NDA available on request.
                </motion.p>
            </div>

            <BookingModal isOpen={isExpanded} onClose={() => setIsExpanded(false)} layoutId="final-cta-card" />
        </section>
    )
}
