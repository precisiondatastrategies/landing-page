"use client"

import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "AI Readiness Assessment",
    price: "$15K – $25K",
    timeline: "30-45 days",
    description:
      "The door-opener. Audit one portfolio company, identify every AI opportunity, and deliver a 90-day roadmap with projected EBITDA impact. Formatted for your investment committee.",
    features: [
      "30-45 day operational audit",
      "Call recording & revenue leak analysis",
      "CSR workflow & labor cost review",
      "Sales pipeline efficiency assessment",
      "Prioritized AI opportunity matrix",
      "Investment committee-ready report",
      "90-day implementation roadmap",
    ],
    cta: "Start with an Assessment",
    href: "/contact",
    highlight: false,
  },
  {
    name: "AI Implementation Sprint",
    price: "$50K – $150K",
    timeline: "8–12 weeks",
    description:
      "Deploy voice agents, scheduling automation, lead qualification, and CRM integrations. Fixed project fee. No scope creep. A working AI system in your portfolio company's stack.",
    features: [
      "AI voice agent across all locations",
      "Automated scheduling & dispatch",
      "AI lead scoring & routing",
      "CRM integration & pipeline automation",
      "Review generation workflow",
      "PE performance dashboard",
      "Fixed fee — no hourly billing",
    ],
    cta: "Book a Discovery Call",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Managed AI Operations",
    price: "$5K – $15K/mo",
    timeline: "Ongoing",
    description:
      "Ongoing monitoring, optimization, and reporting across your portfolio companies. Monthly EBITDA impact reporting for your operating partner and investment committee.",
    features: [
      "AI system monitoring & tuning",
      "Monthly EBITDA impact reporting",
      "Quarterly strategy reviews",
      "Voice agent retraining & optimization",
      "New use case identification",
      "Portfolio-wide benchmarking",
      "Direct operating partner access",
    ],
    cta: "Talk to Our Team",
    href: "/contact",
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">Engagement Model</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            PE-grade pricing. No retainers. No surprises.
          </h2>
          <p className="text-lg text-gray-500">
            Three engagement tiers designed for the PE buying process. Start with an assessment, convert to implementation, scale across the portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-[#0A192F] border border-blue-500/30 shadow-2xl"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {tier.highlight && (
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 self-start">
                  Core Engagement
                </span>
              )}

              <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? "!text-white" : "text-gray-900"}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-3xl font-bold ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                  {tier.price}
                </span>
              </div>
              <span className={`text-sm mb-4 ${tier.highlight ? "text-blue-300" : "text-gray-400"}`}>
                {tier.timeline}
              </span>
              <p className={`text-sm leading-relaxed mb-8 ${tier.highlight ? "text-white/60" : "text-gray-500"}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? "text-blue-400" : "text-green-500"}`} />
                    <span className={`text-sm ${tier.highlight ? "text-white/70" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                  tier.highlight
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {tier.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">
          One mid-market PE firm with 20 portfolio companies represents $1M–$3M in implementation work. The math compounds fast.
        </p>
      </div>
    </section>
  )
}
