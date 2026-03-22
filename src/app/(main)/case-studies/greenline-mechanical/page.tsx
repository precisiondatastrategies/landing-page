"use client"

import FinalCTA from "@/components/FinalCTA"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, TrendingUp, Clock, Phone, Building2, Users } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
}

export default function GreenlineCaseStudyPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#0A192F] overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-[#0A192F] via-[#0A192F]/90 to-transparent" />
                
                <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                    <div className="space-y-6">
                        <Link href="/private-equity" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-4">
                            &larr; Back to Private Equity
                        </Link>
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium">
                            Case Study
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                            How AI Deployment Drove <br className="hidden md:block"/>
                            <span className="text-blue-400">$1.8M in Annual EBITDA</span> in 6 Months.
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            A mid-market private equity firm leveraged PDS to overhaul call handling and scheduling for a $48M commercial HVAC portfolio company, directly adding ~$15M to their targeted exit valuation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Metrics Bar */}
            <section className="border-b border-gray-100 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
                        <div>
                            <div className="text-sm text-gray-500 mb-1 font-medium">Annual EBITDA Added</div>
                            <div className="text-3xl font-bold text-gray-900">$1.88M</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1 font-medium">Response Time</div>
                            <div className="text-3xl font-bold text-gray-900">11 mins <span className="text-sm font-normal text-green-600 block sm:inline">(from 4.2 days)</span></div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1 font-medium">After-Hours Booking</div>
                            <div className="text-3xl font-bold text-gray-900">71% <span className="text-sm font-normal text-green-600 block sm:inline">(from 31%)</span></div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1 font-medium">Implementation Time</div>
                            <div className="text-3xl font-bold text-gray-900">12 Weeks</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 lg:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    
                    <div className="prose prose-lg prose-blue max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge: Bleeding Revenue After Hours</h2>
                        <p className="text-gray-600 mb-8">
                            Greenline Mechanical Services, a commercial HVAC and plumbing company with $48M in annual revenue, had grown rapidly through add-on acquisitions under their PE sponsor. However, growth had strained their operational infrastructure.
                        </p>
                        
                        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Phone className="w-5 h-5 text-red-500" /> Operational Bottlenecks
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                                    <span><strong>28% of inbound calls were abandoned</strong>, sent to voicemail, or handled by an ineffective answering service.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                                    <span>The after-hours answering service booked appointments <strong>only 31% of the time</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                                    <span>The commercial sales team spent <strong>40% of their time on unqualified leads</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                                    <span>Average lead response time dragged to an unacceptable <strong>4.2 days</strong>.</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Phase 1: The AI Readiness Assessment</h2>
                        <p className="text-gray-600 mb-6">
                            PDS bypassed generic consulting models and deployed a 3-week deep operational audit. Instead of theoretical IT assessments, we analyzed exact call recordings and Salesforce data to map the financial exposure:
                        </p>
                        <p className="text-gray-600 mb-8 font-medium italic">
                            We proved that an estimated 340 missed new-customer calls represented roughly $952K in monthly revenue exposure.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Phase 2: Execution & Implementation</h2>
                        <p className="text-gray-600 mb-8">
                            Over a 12-week intensive sprint, the PDS engineering team deployed the following multi-tiered custom automation architecture:
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-sm border-t border-b border-r border-gray-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">1. 24/7 AI Voice Agent</h4>
                                <p className="text-gray-600">Replaced the failing answering service with an intelligent voice agent integrated directly into ServiceTitan. It schedules appointments proactively, handles complex routing, and fields common queries seamlessly without human intervention.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-sm border-t border-b border-r border-gray-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">2. Intelligent Dispatch & Scheduling</h4>
                                <p className="text-gray-600">Built automated n8n workflows connecting directly to ServiceTitan. Automatic slotting, technician routing based on branch location, and intelligent re-scheduling dramatically reduced manual CSR hours.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-sm border-t border-b border-r border-gray-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">3. Commercial Lead Qualification Engine</h4>
                                <p className="text-gray-600">Integrated GoHighLevel & AI layers into Salesforce to automatically categorize inbound leads by property size and potential value. Warm leads auto-routed to nurture sequences while 'hot' leads instantly pinged commercial sales representatives.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Phase 3: Measurable Results at 6 Months</h2>
                        
                        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Key Metric</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Before PDS</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">After 6 Months</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-green-600">Impact</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Inbound Answer Rate</td>
                                        <td className="px-6 py-4 text-gray-500">72%</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">98.4%</td>
                                        <td className="px-6 py-4 text-green-600 font-medium">+26.4%</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">After-Hours Booking Rate</td>
                                        <td className="px-6 py-4 text-gray-500">31%</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">71%</td>
                                        <td className="px-6 py-4 text-green-600 font-medium">+129%</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Avg. Lead Response</td>
                                        <td className="px-6 py-4 text-gray-500">4.2 days</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">11 minutes</td>
                                        <td className="px-6 py-4 text-green-600 font-medium">-99.8%</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Sales Qual. Lead Ratio</td>
                                        <td className="px-6 py-4 text-gray-500">45%</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">78%</td>
                                        <td className="px-6 py-4 text-green-600 font-medium">+73%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-600 text-white rounded-3xl p-8 lg:p-12 text-center mt-16 mb-8 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">The Exit Valuation Math</h3>
                            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                                The PE sponsor tracked a concrete increase of <strong className="text-white">$148,000 per month</strong> in AI-attributable EBITDA contribution. 
                            </p>
                            <div className="bg-blue-700/50 rounded-2xl p-6 inline-block">
                                <div className="text-xl font-medium mb-1">Total EBITDA Improvement</div>
                                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">$1.78M <span className="text-xl font-normal">Annualized</span></div>
                                <div className="text-blue-200">Adding ~$15.3M of Enterprise Value at targeted 8.5x exit</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}