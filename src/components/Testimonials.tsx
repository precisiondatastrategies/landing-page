"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

function CountUp({ end, suffix = "", duration = 2, className }: { end: number; suffix?: string; duration?: number; className?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHasAnimated(true)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return
    let start = 0
    const increment = end / (duration * 60)
    const animate = () => {
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [hasAnimated, end, duration])

  return <span ref={ref} className={className}>{count}{suffix}</span>
}

const testimonials = [
  {
    quote: "The Big 4 quoted us $400K. PDS delivered a working voice agent at our first portfolio company at a fraction of that cost. The EBITDA impact was clear and measurable.",
    author: "David K.",
    role: "AI Operating Partner, Mid-Market PE Fund",
    rating: 5,
  },
  {
    quote: "The assessment report alone was worth the $15K. It gave us a prioritized roadmap with projected EBITDA impact for every AI opportunity — formatted for our investment committee.",
    author: "Sarah L.",
    role: "Technology Operating Partner",
    rating: 5,
  },
  {
    quote: "After-hours booking rate went from 31% to 71%. The answering service contract was canceled, which alone delivered $24K in cost savings.",
    author: "Tom A.",
    role: "COO, Multi-Location Home Services Company",
    rating: 5,
  },
  {
    quote: "PDS never recommended laying off our CSRs. They redeployed them into revenue-generating roles. That approach got buy-in from the portfolio company CEO.",
    author: "Rachel G.",
    role: "Operating Partner, Service Industry Fund",
    rating: 5,
  },
  {
    quote: "We signed a Master Services Agreement covering our entire Fund III portfolio, and PDS is now our preferred AI implementation partner across all 14 companies.",
    author: "Maria S.",
    role: "Partner, Mid-Market PE Firm",
    rating: 5,
  },
  {
    quote: "Commercial lead response speed improved significantly. That single change added a measurable lift to our close rate.",
    author: "Chris B.",
    role: "Commercial Sales Director, HVAC Platform",
    rating: 5,
  },
]

const impactStats = [
  { value: 139, suffix: "x", label: "Return on AI investment", sub: "$110K engagement → $15.3M exit value added" },
  { value: 98, suffix: "%", label: "Inbound call answer rate", sub: "Up from 72% before PDS deployment" },
  { value: 129, suffix: "%", label: "After-hours booking improvement", sub: "31% → 71% booking rate" },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">Results</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What PE operating partners are saying
          </h2>
          <p className="text-lg text-gray-500">
            From first assessment to portfolio-wide deployment — results measured in EBITDA, not vanity metrics.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact stats */}
        <div className="bg-[#0A192F] rounded-2xl p-10 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-10">
            The numbers that matter to your investment committee
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-white/40 text-sm">{stat.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-10 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <p className="text-white font-semibold text-lg">$1.8M annualized EBITDA improvement</p>
                <p className="text-white/40 text-sm">Delivered at a single portfolio company. At 8.5x exit multiple, that is $15.3M in exit value created.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
