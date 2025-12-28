"use client"

import { useEffect, useState } from "react"
import { CheckCircle, MessageCircle, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

type HighLevelWindow = Window & {
    HighLevel?: {
        Forms?: {
            init?: () => void
        }
    }
}

export default function Contact() {
    const [showCalendar, setShowCalendar] = useState(false)
    
    // Ensure GHL form script is available before rendering the iframe
    useEffect(() => {
        const scriptId = "ghl-form-embed"
        const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null

        if (!existingScript) {
            const script = document.createElement("script")
            script.id = scriptId
            script.src = "https://link.msgsndr.com/js/form_embed.js"
            script.async = true
            script.onload = () => {
                (window as HighLevelWindow).HighLevel?.Forms?.init?.()
            }
            document.body.appendChild(script)
        } else {
            (window as HighLevelWindow).HighLevel?.Forms?.init?.()
        }
    }, [])

    return (
        <section className="section-padding bg-linear-to-br from-blue-50 to-gray-50 relative overflow-hidden">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="sm:max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-blue-600 font-semibold mb-4">Contact Us</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                This is what will happen, after you{" "}
                                <span className="bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">submit form</span>
                            </h2>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    We can <span className="font-semibold">sign NDA</span> for complete secrecy
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    Discuss your <span className="font-semibold">project details</span>
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    PDS experts <span className="font-semibold">contact you within 24h</span>
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    Submit a <span className="font-semibold">comprehensive project proposal</span> with estimates, timelines, team composition, etc
                                </p>
                            </div>
                        </div>

                        {/* Consultation Card */}
                        <div className="max-w-lg">
                            {!showCalendar ? (
                                <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl max-w-md">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 ">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">
                                        Need a custom consultation? Ask me!
                                    </h3>
                                    <p className="text-blue-100 mb-6">
                                        PDS has a team of experts that ready to start your project. Ask me!
                                    </p>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                                            <Image src="/ronald.jpg" alt="Ronald Parent" width={48} height={48} />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Ronald Parent</p>
                                            <p className="text-sm text-blue-100">CEO</p>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => setShowCalendar(true)}
                                        className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors"
                                    >
                                        Schedule a call
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full bg-white rounded-xl overflow-hidden" style={{ minHeight: "700px" }}>
                                    <iframe 
                                        src="https://api.leadconnectorhq.com/widget/booking/zGOl6MishBHEkjPRUkmp" 
                                        style={{ width: "100%", height: "700px", border: "none" }} 
                                        scrolling="yes" 
                                        id="zGOl6MishBHEkjPRUkmp_1766107105322"
                                        title="Schedule a call"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <div className="p-8 mt-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h3>
                            <p className="text-gray-600 mb-6">
                                Fill in your details below or find us using these contacts. Let us know how we can help.
                            </p>

                        </div>
                        <div className="rounded-2xl overflow-hidden" style={{ minHeight: "502px" }}>
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/CaxxvWR3a7PQwpzQWPQN"
                                id="inline-CaxxvWR3a7PQwpzQWPQN"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Website Form"
                                data-height="602"
                                data-layout-iframe-id="inline-CaxxvWR3a7PQwpzQWPQN"
                                data-form-id="CaxxvWR3a7PQwpzQWPQN"
                                title="Website Form"
                                style={{ width: "100%", height: "100%", border: "none", borderRadius: "20px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}