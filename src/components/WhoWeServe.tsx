"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const segments = [
  {
    tag: "Primary Target",
    title: "Mid-Market PE Firms",
    subtitle: "$500M – $5B AUM",
    description:
      "You have the mandate to drive AI value creation across your portfolio but no internal implementation team. We are your execution arm — from the first assessment to portfolio-wide deployment.",
    points: [
      "AI Readiness Assessments at $15K–$25K per company",
      "Implementation sprints at fixed fees, no scope creep",
      "Portfolio-wide MSA after the first successful engagement",
    ],
    href: "/private-equity",
    accent: "bg-blue-600",
  },
  {
    tag: "Strong Fit",
    title: "Upper Mid-Market Funds",
    subtitle: "$5B – $100B AUM",
    description:
      "You have a Technology Operating Partner and a value creation mandate. We integrate with your existing team as the hands-on AI implementation partner your strategy requires.",
    points: [
      "Plug into existing value creation teams",
      "Multi-portfolio deployment playbooks",
      "Investment committee-ready reporting",
    ],
    href: "/private-equity",
    accent: "bg-indigo-600",
  },
  {
    tag: "Highest ROI Vertical",
    title: "Service Industry Portfolios",
    subtitle: "HVAC, Plumbing, Pest Control, Healthcare Services",
    description:
      "These portfolio companies bleed revenue through missed calls and manual scheduling. We fix both problems in a single sprint — and the EBITDA impact shows up in month two.",
    points: [
      "AI voice agents replace answering services on day one",
      "Automated scheduling eliminates manual dispatch",
      "$1M+ EBITDA impact per company is achievable",
    ],
    href: "/services",
    accent: "bg-cyan-600",
  },
]

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">Who We Serve</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Built for PE firms that cannot afford to leave EBITDA on the table
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From mid-market funds to upper mid-market platforms — we deploy AI across your portfolio companies and measure everything in the language your LPs speak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${seg.accent}`} />

              <div className="p-8 flex flex-col flex-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{seg.tag}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{seg.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{seg.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{seg.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {seg.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span className="text-sm text-gray-600">{pt}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={seg.href}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all mt-auto"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
