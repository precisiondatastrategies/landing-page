"use client"

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const footerLinks = {
    company: [
        { name: "About Us", href: "about-us" },
        { name: "Consulting", href: "/consulting" },
        { name: "Our Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
    ],
    product: [
        { name: "AI Voice Receptionist", href: "https://assistant.precisiondatastrategies.com/" },
        { name: "All-in-One CRM", href: "https://crm.precisiondatastrategies.com" },
        { name: "Automate Boutique", href: "https://www.automateboutique.app/" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookie-policy" },
    ],
}

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/precision-data-strategies-llc", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
]

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 overflow-x-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-1 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                width={140}
                                height={80}
                                src="/pds-logo.png"
                                alt="Precision Data Strategies Logo"
                                className="w-auto h-12 object-contain"
                                priority
                            />

                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            AI Automation for Every Conversation, Every Lead, Every Workflow. Transform your business with intelligent automation.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-start gap-2 text-gray-400">
                                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                                <span className="text-sm">
                                    Precision Data Strategies LLC<br />
                                    8605 Santa Monica Blvd #724006<br />
                                    West Hollywood, CA 90069
                                </span>
                            </div>
                            <a href="tel:+14247223282" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">(424) 722-3282</span>
                            </a>
                            <a href="mailto:info@precisiondatastrategies.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">info@precisiondatastrategies.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4" style={{ color: '#fff', opacity: 1 }}>Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4" style={{ color: '#fff', opacity: 1 }}>Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4" style={{ color: '#fff', opacity: 1 }}>Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-white font-semibold mb-2" style={{ color: '#fff', opacity: 1 }}>Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Get the latest AI automation insights and updates.</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Precision Data Strategies. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
