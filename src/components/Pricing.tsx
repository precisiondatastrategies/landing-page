"use client"

import { Check } from "lucide-react"

const pricingTiers = [
    {
        name: "Starter",
        price: "$499",
        period: "/month",
        description: "Perfect for small businesses getting started with automation",
        features: [
            "AI website chatbot",
            "Basic workflows (up to 5)",
            "Email automation",
            "Lead capture forms",
            "Basic analytics",
            "Email support"
        ],
        popular: false
    },
    {
        name: "Professional",
        price: "$1,299",
        period: "/month",
        description: "For growing businesses ready to scale with AI",
        features: [
            "AI Voice Agent + Chatbot",
            "Advanced workflows (unlimited)",
            "Mini CRM + Lead Tracker",
            "Appointment scheduling",
            "Contract automation",
            "Advanced analytics",
            "Priority support",
            "Custom integrations"
        ],
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Full automation suite with dedicated support",
        features: [
            "Everything in Professional",
            "Custom AI agent training",
            "Dedicated account manager",
            "Custom workflow development",
            "White-label options",
            "SLA guarantee",
            "24/7 phone support",
            "Consulting hours included"
        ],
        popular: false
    }
]

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the setup that fits your business. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={tier.name}
                            className={`relative bg-white rounded-2xl p-8 ${tier.popular
                                ? "border-2 border-blue-600 shadow-xl"
                                : "border border-gray-200 shadow-md"
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Tier Name */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                                <p className="text-sm text-gray-600">{tier.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-gray-900">
                                        {tier.price}
                                    </span>
                                    {tier.period && (
                                        <span className="text-gray-500 text-lg">{tier.period}</span>
                                    )}
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${tier.popular
                                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    }`}
                            >
                                {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">All plans include a 14-day free trial • No credit card required</p>
                    <p className="text-sm text-gray-500">Need a custom solution? <a href="#" className="text-blue-600 hover:underline font-medium">Talk to our team</a></p>
                </div>
            </div>
        </section>
    )
}
