"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import FinalCTA from "@/components/FinalCTA"

const caseStudies = [
    {
        slug: "greenline-mechanical",
        label: "Illustrative Example",
        number: "01",
        industry: "Commercial HVAC & Plumbing",
        company: "Apex Mechanical Services — PORTFOLIO ILLUSTRATION ONLY",
        sponsor: "Ridgecrest Capital Partners",
        headline: "$1.8M Annual EBITDA Added in 6 Months",
        description:
            "A $48M PE-backed HVAC platform was bleeding revenue through missed calls and manual dispatch. PDS deployed a 24/7 AI voice agent, automated scheduling, and a commercial lead qualification engine — adding $15.3M to the projected exit valuation.",
        metrics: [
            { label: "EBITDA Added", value: "$1.78M", sub: "annualized" },
            { label: "Lead Response", value: "11 min", sub: "from 4.2 days" },
            { label: "After-Hours Booking", value: "71%", sub: "from 31%" },
            { label: "Exit Value Added", value: "$15.3M", sub: "at 8.5x" },
        ],
        tags: ["AI Voice Agent", "Lead Qualification", "Scheduling Automation", "PE Dashboard"],
        engagement: "$110K total · 15-week engagement",
        roi: "139x ROI",
    },
]

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-white font-sans">

            {/* Hero */}
            <section className="pt-36 pb-20 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-5">Case Studies</p>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                            AI that moves<br />the exit number.
                        </h1>
                        <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
                            Every engagement is measured in EBITDA impact, not deliverables. Here&apos;s what that looks like in practice.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Study Cards */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
                    {caseStudies.map((cs, i) => (
                        <motion.div
                            key={cs.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <Link href={`/case-studies/${cs.slug}`} className="group block">
                                <div className="border border-gray-200 rounded-3xl p-8 lg:p-12 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 bg-white">

                                    {/* Top meta row */}
                                    <div className="flex flex-wrap items-center gap-3 mb-8">
                                        <span className="text-4xl font-bold text-gray-100 select-none mr-2">{cs.number}</span>
                                        <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
                                            {cs.label}
                                        </span>
                                        <span className="text-gray-400 text-sm">{cs.industry}</span>
                                        <span className="text-gray-200">·</span>
                                        <span className="text-gray-400 text-sm">{cs.sponsor}</span>
                                    </div>

                                    <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
                                        {/* Left */}
                                        <div className="lg:flex-1">
                                            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">{cs.company}</p>
                                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-200">
                                                {cs.headline}
                                            </h2>
                                            <p className="text-gray-500 leading-relaxed mb-7 text-base max-w-lg">
                                                {cs.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-7">
                                                {cs.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-xs font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-5 text-sm">
                                                <span className="text-gray-400">{cs.engagement}</span>
                                                <span className="font-semibold text-emerald-600">{cs.roi}</span>
                                            </div>
                                        </div>

                                        {/* Right — metrics */}
                                        <div className="grid grid-cols-2 gap-3 lg:w-64 shrink-0">
                                            {cs.metrics.map(m => (
                                                <div key={m.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 group-hover:border-gray-200 transition-colors">
                                                    <div className="text-2xl font-bold text-gray-900 mb-0.5">{m.value}</div>
                                                    <div className="text-xs text-emerald-600 font-semibold mb-1">{m.sub}</div>
                                                    <div className="text-xs text-gray-400">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom CTA row */}
                                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">15-week engagement · HVAC / Plumbing</span>
                                        <span className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                                            Read full case study <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Coming soon */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="border border-dashed border-gray-200 rounded-3xl p-10 text-center"
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-3">Coming Soon</p>
                        <p className="text-gray-400 text-base">More case studies in progress — pest control, dental DSO, commercial cleaning.</p>
                    </motion.div>
                </div>
            </section>

            <FinalCTA />
        </main>
    )
}
