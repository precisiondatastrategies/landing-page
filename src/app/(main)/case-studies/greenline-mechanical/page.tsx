"use client"

import FinalCTA from "@/components/FinalCTA"
import { motion } from "framer-motion"
import { ArrowLeft, Phone, Clock, Users, Building2, Zap, BarChart3, AlertTriangle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const topMetrics = [
    { label: "Annual EBITDA Added", value: "$1.78M", sub: "annualized" },
    { label: "Lead Response", value: "Prioritized", sub: "from delayed follow-up" },
    { label: "After-Hours Booking", value: "71%", sub: "up from 31%" },
    { label: "Exit Value Created", value: "$15.3M", sub: "at 8.5x exit multiple" },
]

const results = [
    { metric: "Inbound call answer rate", before: "72%", after: "98.4%", delta: "+26.4%" },
    { metric: "After-hours booking rate", before: "31%", after: "71%", delta: "+129%" },
    { metric: "AI-booked revenue", before: "$0 tracked", after: "$127K", delta: "+$127K" },
    { metric: "Commercial lead response", before: "Delayed", after: "Prioritized", delta: "Improved" },
    { metric: "Sales qualified lead ratio", before: "45%", after: "78%", delta: "+73%" },
    { metric: "Answering service cost", before: "Legacy vendor cost", after: "$0", delta: "Eliminated" },
    { metric: "CSR admin labor", before: "High admin load", after: "Reduced admin load", delta: "Lower cost" },
    { metric: "Google review average", before: "3.6 stars", after: "4.4 stars", delta: "+0.8" },
]

export default function GreenlineCaseStudyPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">

            {/* Disclaimer */}
            <div className="bg-amber-50 border-b border-amber-100 py-3 px-6 text-center">
                <span className="inline-flex items-center justify-center gap-2 text-amber-700 text-sm">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span><strong>Illustrative Example:</strong> Company name and figures are fictional  -  projected outcomes based on PDS methodology, not an actual client engagement.</span>
                </span>
            </div>

            {/* Hero */}
            <section className="pt-24 pb-20 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-5 lg:px-6 xl:px-8">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                        <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors text-sm mb-10">
                            <ArrowLeft className="w-4 h-4" /> All Case Studies
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">Illustrative Example</span>
                            <span className="text-gray-400 text-sm">Commercial HVAC &amp; Plumbing</span>
                            <span className="text-gray-200">·</span>
                            <span className="text-gray-400 text-sm">Ridgecrest Capital Partners</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6 max-w-3xl">
                            How AI Deployment Drove{" "}
                            <span className="text-blue-600">$1.8M in EBITDA</span>{" "}
                            Impact.
                        </h1>

                        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-8">
                            A mid-market PE firm deployed PDS across a $48M commercial HVAC platform. $110K total cost. $15.3M added to the projected exit valuation.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {["AI Voice Agent", "Lead Qualification", "Scheduling Automation", "PE Dashboard", "ServiceTitan", "Salesforce"].map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Metrics Bar */}
            <section className="border-b border-gray-100 bg-gray-50">
                <div className="max-w-6xl mx-auto px-5 lg:px-6 xl:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
                        {topMetrics.map((m, i) => (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="py-8 px-6 first:pl-0 last:pr-0"
                            >
                                <div className="text-3xl font-bold text-gray-900 mb-1">{m.value}</div>
                                <div className="text-xs text-emerald-600 font-semibold mb-1">{m.sub}</div>
                                <div className="text-sm text-gray-500">{m.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-5 lg:px-6 xl:px-8">
                    <div className="grid lg:grid-cols-[1fr_280px] gap-16">

                        {/* Article body */}
                        <div className="space-y-20 min-w-0">

                            {/* The Players */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">The Players</p>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">A PE firm. A portfolio company. A high-stakes value creation mandate.</h2>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">The PE Firm</p>
                                        <p className="text-base font-bold text-gray-900 mb-2">Ridgecrest Capital Partners</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">Mid-market PE firm, $2.8B AUM, 14 portfolio companies in Fund III. Hired their first Technology Operating Partner with a $500K budget to deploy AI across the portfolio before exits.</p>
                                    </div>
                                    <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">The Portfolio Company</p>
                                        <p className="text-base font-bold text-gray-900 mb-2">Apex Mechanical Services <span className="text-red-600 font-bold"> -  PORTFOLIO ILLUSTRATION ONLY</span></p>
                                        <p className="text-gray-500 text-sm leading-relaxed">$48M commercial HVAC &amp; plumbing platform. 8 locations across AZ, NV, NM. 310 employees. Grown from $22M through 3 add-on acquisitions. Target exit multiple: 8–9x EBITDA.</p>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                                    <div className="px-6 py-3.5 border-b border-gray-100 bg-gray-50">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Company Profile</span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-gray-100">
                                        {[
                                            { label: "Annual Revenue", value: "$48M" },
                                            { label: "EBITDA", value: "$5.8M (12.1%)" },
                                            { label: "Employees", value: "310" },
                                            { label: "Locations", value: "8 branches" },
                                            { label: "Monthly Inbound Calls", value: "~4,200" },
                                            { label: "Avg. Ticket Size", value: "$2,800 / $18,500" },
                                        ].map(item => (
                                            <div key={item.label} className="px-6 py-4 bg-white">
                                                <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                                                <div className="text-gray-900 font-semibold text-sm">{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* The Problem */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">The Problem</p>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Revenue bleeding through every crack in the operation.</h2>
                                <p className="text-gray-500 leading-relaxed mb-8">
                                    Growth through acquisitions had created a patchwork operation. The company was generating $48M in revenue but losing a significant portion to operational gaps no one had bandwidth to fix.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { icon: Phone, title: "28% of inbound calls abandoned", desc: "Sent to voicemail or an answering service that booked appointments only 31% of the time. ~340 missed new-customer calls created significant revenue exposure estimated at $952K." },
                                        { icon: Clock, title: "Lead response lagged materially", desc: "A property manager with a 200-unit complex called after hours and booked a competitor before follow-up. Estimated lost revenue: $41,000 from one call." },
                                        { icon: Users, title: "Sales team wasting 40% of their time", desc: "55% of inbound leads were unqualified  -  residential callers, out-of-area, tire kickers. The 6-person commercial team was doing manual lead triage instead of closing deals." },
                                        { icon: Building2, title: "Manual dispatch across 8 locations", desc: "Office managers spent substantial time manually scheduling technicians in ServiceTitan. Wrong-skilled techs were dispatched to jobs. Scheduling gaps cost billable hours." },
                                    ].map(item => (
                                        <div key={item.title} className="flex gap-4 border border-gray-200 rounded-2xl p-5 bg-white hover:border-gray-300 transition-colors">
                                            <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                                <item.icon className="w-4 h-4 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-semibold text-sm mb-1">{item.title}</p>
                                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Phase 1 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">1</div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Phase 1 · $15K</p>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Readiness Assessment</h2>
                                <p className="text-gray-500 leading-relaxed mb-8">
                                    PDS conducted a deep operational audit  -  not a technology audit. The goal: find where the business loses money, misses revenue, or wastes labor hours, then map each problem to an AI solution with a projected financial impact.
                                </p>

                                <div className="space-y-3 mb-8">
                                    {[
                                        { week: "Stage A", title: "Discovery & Data Collection", desc: "Transcribed RingCentral call recordings using Deepgram. Classified 4,218 calls by type. Performed dedicated on-site observation of CSR workflows at Phoenix HQ. Reviewed Salesforce pipeline data." },
                                        { week: "Stage B", title: "Opportunity Mapping & ROI Modeling", desc: "Built a detailed opportunity matrix mapping each AI use case to a projected financial impact  -  grounded in actual data, not industry benchmarks. Every number had a confidence rating and complexity score." },
                                        { week: "Stage C", title: "IC-Ready Deliverable", desc: "Delivered a 32-page AI Readiness Assessment formatted for investment committee review  -  including sensitivity analysis, implementation risk factors, and a projected aggregate EBITDA impact of $1.4M–$2.1M." },
                                    ].map(item => (
                                        <div key={item.week} className="flex gap-4">
                                            <div className="w-16 shrink-0 text-xs font-semibold text-gray-400 pt-4">{item.week}</div>
                                            <div className="flex-1 border border-gray-200 rounded-2xl p-5 bg-white">
                                                <p className="text-gray-900 font-semibold text-sm mb-1">{item.title}</p>
                                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">The Moment That Closed the Deal</p>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        During the presentation, Ronald played a recording of one missed after-hours call. A property manager with a 200-unit apartment complex needed emergency HVAC service for 14 units. The answering service told them someone would call back in the morning. By morning, they had booked a competitor.{" "}
                                        <strong className="text-gray-900">Estimated lost revenue from that single call: $41,000.</strong>{" "}
                                        David approved the full implementation engagement that afternoon.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Phase 2 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">2</div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Phase 2 · $95K</p>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Sprint</h2>

                                <div className="space-y-4">
                                    {[
                                        {
                                            sprint: "Sprint 1",
                                            title: "24/7 AI Voice Agent",
                                            icon: Phone,
                                            result: "After-hours booking: 31% → 68%",
                                            desc: "Deployed across all 8 locations, integrated with ServiceTitan and RingCentral. The agent handles after-hours calls, overflow during business hours, and first-ring pickup. Books directly into ServiceTitan in real time, handles emergency triage, answers FAQs, and sends automated text confirmations.",
                                            stack: ["Vapi", "ElevenLabs", "Claude API", "ServiceTitan API", "RingCentral API", "n8n", "GoHighLevel"],
                                        },
                                        {
                                            sprint: "Sprint 2",
                                            title: "Scheduling Automation + Lead Qualification",
                                            icon: Zap,
                                            result: "Lead response significantly improved",
                                            desc: "Built an n8n scheduling engine that auto-slots appointments from voice, web, and email into ServiceTitan based on technician skills, location, and availability. Added an AI lead qualification layer to Salesforce  -  hot leads routed instantly to sales reps with a full dossier. 2 of 3 CSRs redeployed into revenue-generating roles.",
                                            stack: ["n8n", "Salesforce", "GoHighLevel", "ServiceTitan"],
                                        },
                                        {
                                            sprint: "Sprint 3",
                                            title: "PE Performance Dashboard + Optimization",
                                            icon: BarChart3,
                                            result: "Escalation rate: 14% → 9% after retraining",
                                            desc: "Built a real-time dashboard for the operating partner and portfolio CEO showing AI performance tied directly to financial outcomes  -  not vanity metrics. Every number connects to EBITDA. Added a post-service review workflow routing happy customers to Google reviews and unhappy customers to the Customer Success Coordinator.",
                                            stack: ["PDS Dashboard", "n8n", "ServiceTitan", "Salesforce"],
                                        },
                                    ].map(item => (
                                        <div key={item.title} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                                            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50">
                                                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                                                    <item.icon className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs text-gray-400 font-medium">{item.sprint}</p>
                                                    <p className="text-gray-900 font-bold text-sm">{item.title}</p>
                                                </div>
                                                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full hidden md:block shrink-0">
                                                    {item.result}
                                                </span>
                                            </div>
                                            <div className="px-6 py-5">
                                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.stack.map(s => (
                                                        <span key={s} className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-xs">{s}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Results */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold shrink-0">3</div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Phase 3 · Results Snapshot</p>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">The numbers David showed the partners.</h2>

                                <div className="border border-gray-200 rounded-2xl overflow-hidden mb-10">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Metric</th>
                                                <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Before</th>
                                                <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">After</th>
                                                <th className="text-left px-6 py-4 text-gray-500 font-semibold text-xs uppercase tracking-wider">Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {results.map((r, i) => (
                                                <tr key={r.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                                    <td className="px-6 py-4 text-gray-700 font-medium">{r.metric}</td>
                                                    <td className="px-6 py-4 text-gray-400">{r.before}</td>
                                                    <td className="px-6 py-4 text-gray-900 font-semibold">{r.after}</td>
                                                    <td className="px-6 py-4 text-emerald-600 font-semibold">{r.delta}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Exit math */}
                                <div className="bg-[#0A192F] rounded-3xl p-8 lg:p-10 text-white">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">The Exit Valuation Math</p>
                                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                                        <div>
                                            <p className="text-white/40 text-xs mb-1">EBITDA Before PDS</p>
                                            <p className="text-3xl font-bold text-white">$5.8M</p>
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-xs mb-1">Projected EBITDA After</p>
                                            <p className="text-3xl font-bold text-emerald-400">$7.6M</p>
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-xs mb-1">Exit Value Added (8.5x)</p>
                                            <p className="text-3xl font-bold text-blue-400">+$15.3M</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <p className="text-white/40 text-xs mb-1">Total PDS Engagement Cost</p>
                                            <p className="text-white font-semibold">$110,000 (audit + implementation)</p>
                                        </div>
                                        <div className="md:text-right">
                                            <p className="text-white/40 text-xs mb-1">Return on AI Investment</p>
                                            <p className="text-4xl font-bold text-emerald-400">139x</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* What Happened Next */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">What Happened Next</p>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">One portfolio company became the entire fund.</h2>

                                <div className="space-y-3 mb-10">
                                    {[
                                        { month: "Update A", event: "David presented results at the Ridgecrest portfolio review. Partners asked one question: 'Which portfolio companies are next?'" },
                                        { month: "Update B", event: "PDS signed a Master Services Agreement with Ridgecrest covering the entire Fund III portfolio  -  additional AI Readiness Assessments were authorized." },
                                        { month: "Update C", event: "Assessments began at more portfolio companies: regional pest control (12 locations), commercial cleaning (18 locations), and a dental DSO (9 practices). All converted to full implementations." },
                                        { month: "Update D", event: "David mentioned PDS by name at a PE Operating Partners Forum. Two operating partners from different PE firms approached Ronald after the panel and requested intro calls." },
                                    ].map(item => (
                                        <div key={item.month} className="flex gap-4">
                                            <div className="w-20 shrink-0 text-xs font-semibold text-blue-600 pt-4">{item.month}</div>
                                            <div className="flex-1 border border-gray-200 rounded-xl px-5 py-4 text-gray-500 text-sm leading-relaxed bg-white">
                                                {item.event}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Revenue table */}
                                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                                    <div className="px-6 py-3.5 border-b border-gray-100 bg-gray-50">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Ridgecrest Relationship  -  Year 1 Revenue</span>
                                    </div>
                                    <table className="w-full text-sm">
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                { line: "AI Readiness Assessments (7 � -  $15K)", amount: "$105,000" },
                                                { line: "Implementation Sprints (4 completed � -  avg. $95K)", amount: "$380,000" },
                                                { line: "Implementation Sprints (3 in progress, partial)", amount: "$142,500" },
                                                { line: "Managed AI Services (4 companies � -  avg. $8K/mo)", amount: "$160,000" },
                                            ].map(r => (
                                                <tr key={r.line} className="bg-white">
                                                    <td className="px-6 py-4 text-gray-500">{r.line}</td>
                                                    <td className="px-6 py-4 text-gray-900 font-semibold text-right">{r.amount}</td>
                                                </tr>
                                            ))}
                                            <tr className="bg-gray-50">
                                                <td className="px-6 py-4 text-gray-900 font-bold">Total Year 1 from One PE Firm</td>
                                                <td className="px-6 py-4 text-emerald-600 font-bold text-right text-lg">$787,500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>

                        </div>

                        {/* Sticky Sidebar */}
                        <div className="hidden lg:block">
                            <div className="sticky top-28 space-y-4">
                                <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Engagement Summary</p>
                                    <div className="space-y-3 text-sm">
                                        {[
                                            { label: "Industry", value: "Commercial HVAC" },
                                            { label: "Revenue", value: "$48M" },
                                            { label: "Locations", value: "8 branches" },
                                            { label: "Phase 1", value: "$15K" },
                                            { label: "Phase 2", value: "$95K" },
                                            { label: "Total Cost", value: "$110,000" },
                                            { label: "EBITDA Added", value: "$1.78M/yr" },
                                            { label: "Exit Value Added", value: "$15.3M" },
                                            { label: "ROI", value: "139x" },
                                        ].map(item => (
                                            <div key={item.label} className="flex justify-between items-center">
                                                <span className="text-gray-400">{item.label}</span>
                                                <span className="text-gray-900 font-semibold">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Vapi", "ElevenLabs", "Claude API", "n8n", "ServiceTitan", "RingCentral", "Salesforce", "GoHighLevel", "Deepgram"].map(t => (
                                            <span key={t} className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 text-xs">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-2xl transition-colors text-sm"
                                >
                                    Start Your AI Assessment →
                                </Link>
                                <Link
                                    href="/case-studies"
                                    className="block w-full text-center border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-700 font-medium px-6 py-3 rounded-2xl transition-colors text-sm"
                                >
                                    ← All Case Studies
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}
