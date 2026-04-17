"use client"

import { useEffect, useState } from "react"
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react"

type HighLevelWindow = Window & {
  HighLevel?: { Forms?: { init?: () => void } }
}

const steps = [
  "We can sign an NDA for complete confidentiality",
  "Discuss your portfolio company's specific challenges",
  "Receive a custom AI opportunity overview",
  "Agree on scope and kick off the AI Readiness Assessment",
]

export default function Contact() {
  const [showCalendar, setShowCalendar] = useState(false)

  useEffect(() => {
    const scriptId = "ghl-form-embed"
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!existing) {
      const script = document.createElement("script")
      script.id = scriptId
      script.src = "https://link.msgsndr.com/js/form_embed.js"
      script.async = true
      script.onload = () => (window as HighLevelWindow).HighLevel?.Forms?.init?.()
      document.body.appendChild(script)
    } else {
      (window as HighLevelWindow).HighLevel?.Forms?.init?.()
    }
  }, [])

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">Get in Touch</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Ready to see the EBITDA impact across your portfolio?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Start with a conversation. Tell us about your portfolio and your exit targets. We will show you exactly where the AI opportunities are and what they are worth.
            </p>

            <div className="space-y-4 mb-10">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-3 text-gray-500">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-gray-400" />
                <span className="text-sm">8605 Santa Monica Blvd #724006, West Hollywood, CA 90069</span>
              </div>
              <a href="tel:+14247223282" className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                <span className="text-sm">(424) 722-3282</span>
              </a>
              <a href="mailto:info@precisiondatastrategies.com" className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-gray-400" />
                <span className="text-sm">info@precisiondatastrategies.com</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div style={{ overflow: "hidden", margin: "0 -20px" }}>
            <iframe
              src="https://links.precisiondatastrategies.com/widget/form/YlUfjXQoR2QqxQfaK3g6"
              style={{ width: "calc(100% + 40px)", height: "569px", border: "none", borderRadius: "0px" }}
              id="inline-YlUfjXQoR2QqxQfaK3g6"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="website contact form"
              data-height="569"
              data-layout-iframe-id="inline-YlUfjXQoR2QqxQfaK3g6"
              data-form-id="YlUfjXQoR2QqxQfaK3g6"
              title="website contact form"
            />
            </div>
            <script src="https://links.precisiondatastrategies.com/js/form_embed.js" />
          </div>
        </div>
      </div>
    </section>
  )
}
