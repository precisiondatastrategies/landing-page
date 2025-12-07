"use client"

import { useState } from "react"
import { CheckCircle, MessageCircle } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        industry: "",
        email: "",
        phone: "",
        description: "",
        acceptPrivacy: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission
    }

    return (
        <section className="section-padding bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-blue-600 font-semibold mb-4">Contact Us</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                This is what will happen, after you{" "}
                                <span className="text-blue-600">submit form</span>
                            </h2>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    We can <span className="font-semibold">sign NDA</span> for complete secrecy
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    Discuss your <span className="font-semibold">project details</span>
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    Playno experts <span className="font-semibold">contact you within 24h</span>
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    Submit a <span className="font-semibold">comprehensive project proposal</span> with estimates, timelines, team composition, etc
                                </p>
                            </div>
                        </div>

                        {/* Consultation Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl max-w-md">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">
                                Need a custom consultation? Ask me!
                            </h3>
                            <p className="text-blue-100 mb-6">
                                Playno has a team of experts that ready to start your project. Ask me!
                            </p>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                                </div>
                                <div>
                                    <p className="font-semibold">Vitaliy Kovalev</p>
                                    <p className="text-sm text-blue-100">Sales Manager</p>
                                </div>
                            </div>

                            <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors">
                                Schedule a call
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h3>
                        <p className="text-gray-600 mb-8">
                            Fill in your details below or find us using these contacts. Let us know how we can help.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name and Industry */}
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
                                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                                        Industry*
                                    </label>
                                    <select
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                                    >
                                        <option value="">Select your industry</option>
                                        <option value="technology">Technology</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="finance">Finance</option>
                                        <option value="retail">Retail</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Email and Phone */}
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
                                        placeholder="@-"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Description */}
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

                            {/* Privacy Policy */}
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                            >
                                Send request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
