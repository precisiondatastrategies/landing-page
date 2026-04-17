"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "AI Readiness Assessment",
    duration: "$15K–$25K fee",
    description:
      "We conduct a deep operational audit of one portfolio company — call recordings, CSR workflows, sales pipeline, dispatch operations. You receive a 32-page report with a prioritized AI opportunity matrix, projected EBITDA impact for each use case, and a prioritized implementation roadmap. Formatted for your investment committee.",
    deliverables: [
      "Call recording analysis & revenue leak quantification",
      "CSR workflow audit with labor redeployment plan",
      "Sales pipeline efficiency review",
      "Prioritized AI opportunity matrix with ROI projections",
    ],
  },
  {
    number: "02",
    title: "AI Implementation Sprint",
    duration: "$50K–$150K fee",
    description:
      "We deploy the highest-impact AI systems identified in the assessment. Voice agents, scheduling automation, lead qualification, CRM integrations. Project fee — no scope creep, no variable billing. A working AI system in your portfolio company's stack, not a slide deck.",
    deliverables: [
      "AI voice agent live across all locations",
      "Automated scheduling & dispatch engine",
      "AI lead scoring & routing integrated with CRM",
      "PE performance dashboard with live EBITDA tracking",
    ],
  },
  {
    number: "03",
    title: "Portfolio Expansion",
    duration: "$5K–$15K per company",
    description:
      "Once you see the EBITDA impact at company one, we roll the same playbook across your portfolio. One operating partner relationship. One proven system. Deployed at scale across every company before your exit window closes. The per-company sales cycle for companies 2–7 is essentially zero.",
    deliverables: [
      "Managed AI operations & continuous optimization",
      "Recurring EBITDA impact reporting for IC review",
      "Strategic reviews with operating partner",
      "New use case identification as portfolio evolves",
    ],
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">How We Work</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Three phases. Clear fees. Measurable EBITDA at every step.
            </h2>
          </div>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm shrink-0"
          >
            View consulting details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Step number */}
                <div className="shrink-0">
                  <span className="text-6xl font-bold text-gray-100 leading-none">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6">{step.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                        <span className="text-sm text-gray-600">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
