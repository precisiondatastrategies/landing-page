"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const metrics = [
  { before: "72%", after: "98.4%", label: "Inbound call answer rate" },
  { before: "31%", after: "71%", label: "After-hours booking rate" },
  { before: "4.2 days", after: "11 min", label: "Commercial lead response time" },
  { before: "$5.8M", after: "$7.6M", label: "Portfolio company EBITDA" },
]

export default function CaseStudyBanner() {
  return (
    <section className="py-24 bg-[#0A192F] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">Illustrative Example</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              $110K engagement. $15.3M added to exit valuation.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              An illustrative example: a $48M commercial HVAC platform. PDS deployed AI across all 8 locations in 12 weeks. The projected result: $1.8M in annualized EBITDA improvement and a portfolio-wide Master Services Agreement.
            </p>
            <Link
              href="/case-studies/greenline-mechanical"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Read the full case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — metrics */}
          <div className="grid grid-cols-2 gap-4 lg:w-[480px] shrink-0">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-white/30 text-sm line-through">{m.before}</span>
                  <span className="text-2xl font-bold text-white">{m.after}</span>
                </div>
                <p className="text-white/50 text-xs leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
