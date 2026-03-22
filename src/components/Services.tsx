"use client"

import Link from "next/link"
import { Phone, Calendar, TrendingUp, BarChart3, MessageSquare, Workflow, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    description:
      "Replaces answering services entirely. Books jobs, handles emergency triage, qualifies leads, and sends confirmations — 24/7, integrated with ServiceTitan, RingCentral, and your dispatch system.",
    metrics: ["98.4% answer rate", "After-hours booking: 31% → 71%", "Live in 4 weeks"],
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Lead Qualification & Routing",
    description:
      "AI scores every inbound lead and routes hot prospects to sales in seconds. Commercial leads get a full dossier. Cold leads enter automated nurture. Your team stops wasting 40% of their time.",
    metrics: ["Response time: 4.2 days → 11 min", "Qualified lead ratio: 45% → 78%", "Salesforce & HubSpot native"],
    color: "indigo",
  },
  {
    icon: Calendar,
    title: "Scheduling Automation",
    description:
      "Processes appointment requests from voice, web, and email. Auto-schedules based on technician skills, location, and availability. Sends reminders and enables one-tap rescheduling.",
    metrics: ["Zero manual dispatch", "Instant text confirmations", "Multi-location support"],
    color: "cyan",
  },
  {
    icon: BarChart3,
    title: "PE Performance Dashboard",
    description:
      "Real-time EBITDA impact reporting built for operating partners. Every AI metric tied to a financial outcome. Monthly AI-attributable EBITDA contribution — the one number your LPs are tracking.",
    metrics: ["Live EBITDA view", "IC-ready reporting", "Portfolio benchmarking"],
    color: "blue",
  },
  {
    icon: MessageSquare,
    title: "CRM & Pipeline Automation",
    description:
      "Salesforce, HubSpot, and GoHighLevel integrations with automated lead scoring, follow-up sequences, and pipeline analytics. Your sales team works on deals, not data entry.",
    metrics: ["Full pipeline visibility", "Automated follow-up sequences", "Multi-CRM support"],
    color: "indigo",
  },
  {
    icon: Workflow,
    title: "Workflow & Back-Office AI",
    description:
      "Contract generation, review workflows, ticketing automation, and knowledge base AI trained on your portfolio company's documents. Reduce admin overhead across every location.",
    metrics: ["E-sign ready contracts", "Smart ticket routing", "On-brand AI answers"],
    color: "cyan",
  },
]

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  cyan: "bg-cyan-50 text-cyan-600",
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">What We Deploy</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The AI stack for service-industry portfolio companies
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm shrink-0"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${colorMap[service.color]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                <div className="space-y-2 pt-4 border-t border-gray-50">
                  {service.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-xs font-medium text-gray-600">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
