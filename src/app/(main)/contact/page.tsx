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
				<div className="grid lg:grid-cols-5 gap-12 items-start">
					{/* Left Column */}
					<div className="space-y-8 lg:col-span-2">
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
					</div>

					{/* Right Column - Contact Form */}
					<div className="lg:col-span-3">
						<div className="rounded-2xl overflow-hidden" style={{ minHeight: "502px" }}>
					    <iframe
                                src="https://links.precisiondatastrategies.com/widget/form/YlUfjXQoR2QqxQfaK3g6"
                                style={{width:'100%',height:'100%',border:'none',borderRadius:'15px'}}
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
					</div>
				</div>
			</div>
		</section>
	)
}