"use client"

// Add TypeScript declaration for Calendly on window
declare global {
  interface Window {
    Calendly?: any;
  }
}

import { useState, useEffect, useRef, useCallback } from "react"
import { createClient } from '@supabase/supabase-js'
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Cal, { getCalApi } from "@calcom/embed-react";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    businessType: "",
    email: "",
    phone: "",
    description: ""
  })
  const [submitting, setSubmitting] = useState(false)
  const [modalStep, setModalStep] = useState<'form' | 'appointment' | 'thankyou'>('form')
  const calendlyRef = useRef(null)
  const router = useRouter()

  // Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleExpand = useCallback(() => {
    setIsExpanded(true)
    setModalStep('form')
  }, [])

  const handleClose = useCallback(() => {
    setIsExpanded(false)
    setModalStep('form')
  }, [])

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  useEffect(() => {
    const handleGlobalOpen = () => handleExpand()
    window.addEventListener("open-request-demo", handleGlobalOpen)

    return () => {
      window.removeEventListener("open-request-demo", handleGlobalOpen)
    }
  }, [handleExpand])

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    // Save to Supabase
    const { fullName, businessName, businessType, email, phone, description } = form
    const { error } = await supabase.from('web_leads').insert({
      full_name: fullName,
      business_name: businessName,
      business_type: businessType,
      email,
      phone,
      description
    })
    setSubmitting(false)
    if (!error) {
      setModalStep('appointment')
    } else {
      alert('Error submitting form. Please try again.')
    }
  }

  // Calendly widget logic
  useEffect(() => {
    if (modalStep === 'appointment') {
      (async function () {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
      })();
      // Listen for Cal.com event scheduled
      function handleCalEvent(e: MessageEvent) {
        if (e.data?.event === "cal.scheduling.success") {
          setModalStep("thankyou");
        }
      }
      window.addEventListener("message", handleCalEvent);
      return () => {
        window.removeEventListener("message", handleCalEvent);
      };
    }
  }, [modalStep]);

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        {/* Gradient Background + Grid Lines */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {/* Gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, #ffffff 0%, #f6f8ff 40%, #e7edff 60%, #93c5fd 100%)',
            opacity: 1,
          }} />
          {/* SVG Grid Lines */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            {/* Vertical lines */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={(i * 96).toString()}
                y1="0"
                x2={(i * 96).toString()}
                y2="900"
                stroke="#dbeafe"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
            {/* Horizontal lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={(i * 90).toString()}
                x2="1440"
                y2={(i * 90).toString()}
                stroke="#dbeafe"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center pt-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-normal  tracking-[-0.03em] text-[#071A31] mix-blend-exclusion max-w-4xl">
            AI Automation for Every Conversation, Every Lead, Every Workflow.
          </h1>

          <p className="text-sm sm:text-lg md:text-xl leading-[160%] text-black max-w-2xl px-4">
            Turn calls, chats, emails, forms, and follow-ups into fully automated workflows powered by human-like AI voice agents, smart chatbots, and your central automation dashboard.
          </p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative">
                <motion.div
                  style={{
                    borderRadius: "100px",
                  }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 font-semibold bg-linear-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 items-center justify-center transform-gpu will-change-transform"
                ></motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="h-15 px-6 sm:px-8 py-3 text-lg sm:text-xl font-regular text-[#E3E3E3] tracking-[-0.01em] relative"
                >
                  Request a demo
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            {/* Modal background and content change by step */}
            {modalStep === 'form' && (
              <motion.div
                layoutId="cta-card"
                transition={{ duration: 0.3 }}
                style={{ borderRadius: "24px" }}
                layout
                className="relative flex h-full w-full overflow-y-auto bg-[#004FE5] transform-gpu will-change-transform"
              >
                {/* ...existing MeshGradient and form content... */}
                <motion.div
                  initial={{ opacity: 0, scale: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  layout={false}
                  transition={{ duration: 0.15, delay: 0.05 }}
                  className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                  style={{ borderRadius: "24px" }}
                >
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"
                >
                  {/* ...existing left and right form content... */}
                  <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
                      Talk to sales
                    </h2>
                    <div className="space-y-4 sm:space-y-6 pt-4">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <p className="text-sm sm:text-base text-white leading-[150%]">Learn how Acme can transform your business with tailored solutions and flexible pricing options.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4">
                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div>
                          <p className="text-sm sm:text-base text-white leading-[150%]">Experience firsthand how Acme Platform accelerates delivery &amp; drives results.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/20">
                      <p className="text-lg sm:text-xl lg:text-2xl text-white leading-[150%] mb-4">Acme empowers our team to move faster and ship products with confidence.</p>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="fullName" className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase">FULL NAME *</label>
                          <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10" placeholder="Enter your name" />
                        </div>
                        <div>
                          <label htmlFor="businessName" className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase">BUSINESS NAME</label>
                          <input type="text" id="businessName" name="businessName" value={form.businessName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10" placeholder="Enter your business name" />
                        </div>
                        <div className="flex gap-4">
                          <div className="w-1/2">
                            <label htmlFor="email" className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase">EMAIL *</label>
                            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10" placeholder="Enter your email" />
                          </div>
                          <div className="w-1/2">
                            <label htmlFor="phone" className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase">PHONE *</label>
                            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10" placeholder="Enter your phone number" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="businessType" className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase">BUSINESS TYPE *</label>
                          <select id="businessType" name="businessType" value={form.businessType} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10">
                            <option value="">Select business type</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Hvac">Hvac</option>
                            <option value="Real estate">Real estate</option>
                            <option value="Law firms">Law firms</option>
                            <option value="Electretions">Electretions</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="description" className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase">DESCRIPTION</label>
                          <textarea id="description" name="description" value={form.description} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-sm" placeholder="Describe your needs or project" />
                        </div>
                        <button type="submit" disabled={submitting} className="w-full px-8 py-2.5 rounded-full bg-white text-[#0041C1] font-medium hover:bg-white/90 transition-colors tracking-[-0.03em] h-10">{submitting ? "Submitting..." : "Submit"}</button>
                    </form>
                  </div>
                </motion.div>
                <motion.button
                  onClick={handleClose}
                  className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </motion.div>
            )}
            {modalStep === 'appointment' && (
              <motion.div
                layoutId="cta-card"
                transition={{ duration: 0.3 }}
                style={{ borderRadius: "24px" }}
                layout
                className="relative h-full w-full overflow-y-auto transform-gpu will-change-transform shadow-2xl bg-white border border-blue-100 p-0 overflow-hidden flex flex-col md:flex-row"
              >
                <div className="flex-1 flex flex-col justify-center items-start bg-linear-to-br from-blue-100 via-white to-indigo-50 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 animate-slidein">Book Your Appointment</h2>
                  <p className="text-lg text-blue-700 mb-6 text-left animate-fadein-slow">Schedule a 30-minute call with our expert. Pick a time that works for you and let's accelerate your growth!</p>
                  <ul className="text-blue-700 text-base mb-6 space-y-2 animate-fadein-slow">
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> Free 30-min consultation</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> Personalized advice</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> No obligation</li>
                  </ul>
                  <div className="flex items-center gap-2 animate-fadein-slow">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3m-8 4v4a4 4 0 004 4h4" /></svg>
                    <span className="text-blue-600 font-medium">Easy online scheduling</span>
                  </div>
                </div>
                <div className="flex-1 bg-white p-4 md:p-8 flex items-center justify-center animate-fadein">
                  <Cal
                    namespace="30min"
                    calLink="shafique-ur-rehman-jme44n/30min"
                    style={{ minWidth: 320, height: 600, width: '100%', overflow: 'scroll', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                    config={{
                      layout: "month_view",
                      theme: "light",
                      hideEventTypeDetails: "true",
                      hideAvatar: "true",
                      hideTitle: "true",
                      branding: "false"
                    }}
                  />
                </div>
                <motion.button
                  onClick={handleClose}
                  className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-blue-900 bg-transparent transition-colors hover:bg-blue-100 rounded-full"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </motion.div>
            )}
            {modalStep === 'thankyou' && (
              <motion.div
                layoutId="cta-card"
                transition={{ duration: 0.3 }}
                style={{ borderRadius: "24px" }}
                layout
                className="min-h-[500px] relative z-10 max-w-xl w-full mx-auto p-8 sm:p-12 rounded-2xl bg-[#001F63] shadow-2xl flex flex-col items-center"
              >
                <div className="mb-6">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#2452F1" />
                    <path d="M24 40L36 52L56 32" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center tracking-[-0.03em]">Thank You!</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 text-center">Your request has been received.<br />Our team will reach out soon to help you accelerate your marketing pipeline!</p>
                <button className="mt-2 px-8 py-3 rounded-full bg-white text-[#0041C1] font-semibold hover:bg-white/90 transition-colors text-lg shadow-lg" onClick={handleClose}>Back to Home</button>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Hero;