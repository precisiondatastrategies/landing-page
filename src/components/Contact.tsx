"use client"

import { useState } from "react"
import { createClient } from '@supabase/supabase-js'
import { CheckCircle, MessageCircle } from "lucide-react"
import Image from "next/image"

// Supabase client (must be outside component for Next.js)
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        businessType: "",
        email: "",
        phone: "",
        description: "",
        acceptPrivacy: false
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Save to Supabase
        const { fullName, businessName, businessType, email, phone, description } = formData
        const { error } = await supabase.from('web_leads').insert({
            full_name: fullName,
            business_name: businessName,
            business_type: businessType,
            email,
            phone,
            description
        })
        if (!error) {
            setSubmitted(true)
        } else {
            alert('Error submitting form. Please try again.')
        }
    }

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
                        <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl max-w-md">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
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

                            <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors">
                                Schedule a call
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        {!submitted ? (
                        <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h3>
                        <p className="text-gray-600 mb-8">
                            Fill in your details below or find us using these contacts. Let us know how we can help.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full name*
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Business name
                                    </label>
                                    <input
                                        type="text"
                                        id="businessName"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        placeholder="Enter your business name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter e-mail"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone*
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Business type*
                                    </label>
                                    <select
                                        id="businessType"
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                                    >
                                        <option value="">Select business type</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Hvac">Hvac</option>
                                        <option value="Real estate">Real estate</option>
                                        <option value="Law firms">Law firms</option>
                                        <option value="Electretions">Electretions</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div></div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Describe your project (optional)
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter your comment"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="acceptPrivacy"
                                    name="acceptPrivacy"
                                    checked={formData.acceptPrivacy}
                                    onChange={handleChange}
                                    required
                                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
                                />
                                <label htmlFor="acceptPrivacy" className="text-sm text-gray-700">
                                    I accept <span className="font-semibold">Privacy Policy</span> & <span className="font-semibold">Cookie</span>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                            >
                                Send request
                            </button>
                        </form>
                        </>
                        ) : (
                            <div className="flex flex-col items-center justify-center min-h-[300px]">
                                <h3 className="text-2xl font-bold text-blue-600 mb-4">Thank you!</h3>
                                <p className="text-gray-700 text-lg mb-2">Your request has been received. Our team will contact you soon.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}