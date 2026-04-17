"use client"

import { TrendingUp, Clock, Users, BarChart3 } from "lucide-react"

const pillars = [
  {
    icon: TrendingUp,
    title: "EBITDA-First Thinking",
    description:
      "Every AI use case we identify is mapped to a projected financial outcome. We speak the language of your investment committee  -  margin expansion, cost reduction, revenue capture  -  not technology buzzwords.",
  },
  {
    icon: Clock,
    title: "Speed Is the Moat",
    description:
      "The Big 4 quote $300K–$500K per company. We deliver working AI systems at a fraction of the cost with execution tied directly to measurable value creation.",
  },
  {
    icon: Users,
    title: "The Portfolio Multiplier",
    description:
      "We sell once to the operating partner. They open every door in the portfolio. One PE firm relationship with 20 portfolio companies represents more revenue potential than 100 individual SMB clients.",
  },
  {
    icon: BarChart3,
    title: "Built for Operating Partners",
    description:
      "Our dashboards are built for you, not the portfolio company CEO. One number: AI-attributable EBITDA contribution. Make the operating partner look good to the partners, and the partners open every door.",
  },
]

export default function ValueProp() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">Why PDS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            The implementation partner PE firms have been looking for
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Most AI vendors sell tools. We deploy systems. There is a difference  -  and it shows up in your EBITDA.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
