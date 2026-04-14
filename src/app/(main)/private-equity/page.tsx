"use client"

import FinalCTA from "@/components/FinalCTA"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Shield, Building, BarChart, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
}

export default function PrivateEquityPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A192F] sm:px-20 px-5">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-transparent" /> */}
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-3/5 space-y-8">
                       
                            <motion.h1
                                {...fadeInUp}
                                className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight drop-shadow-lg"
                                style={{ color: "#ffffff" }}
                            >
                                <span style={{ color: "#ffffff" }}>AI Audits & Execution for</span> <br />
                                <span style={{ color: "#60a5fa" }}>Portfolio Companies.</span>
                            </motion.h1>
                            <motion.p
                                {...fadeInUp}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                            >
                                We partner with private equity firms and institutional leaders to drive measurable efficiency across mid-sized businesses. From in person audits to hands-on roll out, we maximize EBITDA without disrupting core operations.
                            </motion.p>
                            <motion.div
                                {...fadeInUp}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap items-center gap-4 pt-4"
                            >
                                <Link href="/consulting" className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-all duration-200">
                                    Discuss Your Portfolio
                                </Link>
                                <Link href="#case-studies" className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-xs flex items-center gap-2">
                                    View Case Studies <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Offerings */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            How We Partner With Private Equity
                        </h2>
                        <p className="text-gray-600">
                            We don't just advise—we execute. Our team works directly with portfolio companies' technical staff to identify and implement high-leverage automation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Building,
                                title: "AI Readiness Audits",
                                desc: "We remotely meet with your portfolio management and tech teams. We map bottlenecks and find immediate automation opportunities."
                            },
                            {
                                icon: Shield,
                                title: "Confidential Execution",
                                desc: "We understand the nuances of institutional deals. All deployments, data strategies, and AI developments are handled under strict NDAs and security protocols."
                            },
                            {
                                icon: BarChart,
                                title: "EBITDA Expansion",
                                desc: "Our methodology is strictly focused on cost-reduction and throughput increase. We implement changes that directly impact the bottom line."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex flex-col items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Anonymized Case Studies Section */}
            <section id="case-studies" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 mb-16 items-end">
                        <div className="lg:w-2/3">
                            <motion.h2 {...fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Proven Results for <br />
                                <span className="text-blue-600">Mid-Sized Portfolios</span>
                            </motion.h2>
                            <motion.p {...fadeInUp} className="text-gray-600 text-lg leading-relaxed">
                                We work quietly behind the scenes to deliver massive operational wins. The following are illustrative examples of recent transformations.
                            </motion.p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Case Study 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 border border-gray-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
                        >
                            <Link href="/case-studies/greenline-mechanical" className="absolute inset-0 z-10" />
                            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative z-0">
                                <div className="md:w-1/3">
                                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Industry: HVAC / Plumbing</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Apex Mechanical <span className="text-sm font-normal text-gray-400">(Illustrative Example)</span></h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="font-medium">$1.8M Annual EBITDA added</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="font-medium">11-min lead response (down from 4 days)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 space-y-4 text-gray-600">
                                    <p>
                                        <strong>Challenge:</strong> Answering service was only booking 31% of after-hours calls, abandoning $952K/mo in revenue exposure. The commercial sales team wasted 40% of their time on unqualified leads.
                                    </p>
                                    <p>
                                        <strong>Solution:</strong> We conducted an AI readiness audit and deployed a 24/7 AI Voice Agent, automated scheduling across their ServiceTitan ERP, and a Salesforce AI routing layer. This bypassed legacy friction points while generating a 139x ROI on our engagement over 6 months.
                                    </p>
                                    <div className="pt-2">
                                        <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                                            Read the Full Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Case Study 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 border border-gray-100 rounded-3xl p-8 lg:p-12"
                        >
                            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                                <div className="md:w-1/3">
                                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Industry: B2B Services</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Regional Service Group</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span className="font-medium">Zero missed leads</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span className="font-medium">35% increase in conversion</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 space-y-4 text-gray-600">
                                    <p>
                                        <strong>Challenge:</strong> Multiple regional branches acquired by the PE firm were operating on disparate systems, losing track of inbound leads outside of business hours.
                                    </p>
                                    <p>
                                        <strong>Solution:</strong> We deployed a unified, customized AI Voice Receptionist & CRM pipeline across all branches. The AI handled initial qualification and syncing instantly, allowing the consolidated sales team to focus purely on closing high-value accounts.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}