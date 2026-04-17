"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X, ChevronDown, Phone, Zap, Calendar, BarChart2, LayoutDashboard, Workflow } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const servicesDropdown = [
    { name: "AI Voice Agent", desc: "24/7 call handling & booking", href: "/services#voice", icon: Phone },
    { name: "Lead Qualification AI", desc: "Score & route leads instantly", href: "/services#leads", icon: Zap },
    { name: "Scheduling Automation", desc: "Zero-touch dispatch & booking", href: "/services#scheduling", icon: Calendar },
    { name: "CRM & Pipeline AI", desc: "Salesforce, HubSpot, GHL", href: "/services#crm", icon: BarChart2 },
    { name: "PE Performance Dashboard", desc: "Live EBITDA reporting", href: "/services#dashboard", icon: LayoutDashboard },
    { name: "Workflow & Back-Office AI", desc: "Contracts, tickets, knowledge base", href: "/services#workflow", icon: Workflow },
]

const primaryLinks = [
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Private Equity", href: "/private-equity", hasDropdown: false },
    { name: "Case Studies", href: "/case-studies", hasDropdown: false },
    { name: "Consulting", href: "/consulting", hasDropdown: false },
    { name: "About Us", href: "/about-us", hasDropdown: false },
    { name: "Blog", href: "/blog", hasDropdown: false },
]

const secondaryLinks = [
    { name: "Blog", href: "/blog" },
]

// Pages where the hero/top section has a light background  -  logo must be dark (visible)
const lightHeroPaths = ["/services", "/about-us", "/privacy-policy", "/cookie-policy", "/terms-of-service", "/contact", "/consulting", "/blog", "/case-studies"]
const isLightPage = (path: string) => lightHeroPaths.some(p => path === p || path.startsWith(p + "/"))

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        if (typeof window === "undefined") return
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setServicesOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setServicesOpen(false), 150)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                scrolled
                    ? "bg-[#0A192F]/95 backdrop-blur-md border-white/10"
                    : isLightPage(pathname)
                        ? "bg-white/95 backdrop-blur-md border-gray-200"
                        : "bg-transparent border-white/10"
            }`}
        >
            <div className="w-full flex items-center justify-between h-20 px-6 sm:px-12 lg:px-24">

                {/* Left: Logo & Primary Nav */}
                <div className="flex items-center gap-12">
                    <Link href="/" className="shrink-0 flex items-center mt-1">
                        <Image
                            width={160}
                            height={50}
                            src="/pds-logo.png"
                            alt="Precision Data Strategies Logo"
                            className={`w-auto h-10 object-contain transition-all duration-300 ${
                                !scrolled && isLightPage(pathname)
                                    ? "brightness-0" // dark logo on light background
                                    : "brightness-0 invert" // white logo on dark background
                            }`}
                            priority
                        />
                    </Link>

                    {/* Desktop Primary Nav */}
                    <div className="hidden lg:flex items-center gap-1 mt-1">
                        {primaryLinks.map((link) =>
                            link.hasDropdown ? (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                                            !scrolled && isLightPage(pathname)
                                                ? "text-gray-700 hover:text-gray-900"
                                                : "text-white/80 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                        <ChevronDown
                                            className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </Link>

                                    {/* Dropdown */}
                                    {servicesOpen && (
                                        <div
                                            className="absolute top-full left-0 mt-2 w-[520px] bg-[#0D2137]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="grid grid-cols-2 gap-px p-3">
                                                {servicesDropdown.map((item) => {
                                                    const Icon = item.icon
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="flex items-start gap-3 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-colors group"
                                                            onClick={() => setServicesOpen(false)}
                                                        >
                                                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                                                                <Icon className="w-4 h-4 text-blue-400" />
                                                            </div>
                                                            <div>
                                                                <span className="block text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-snug">
                                                                    {item.name}
                                                                </span>
                                                                <span className="block text-xs text-white/40 mt-0.5 leading-snug">{item.desc}</span>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                            <div className="border-t border-white/10 px-4 py-3 flex items-center justify-between bg-white/2">
                                                <span className="text-xs text-white/30">AI solutions for PE portfolio companies</span>
                                                <Link
                                                    href="/services"
                                                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                                                    onClick={() => setServicesOpen(false)}
                                                >
                                                    View all services →
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                        !scrolled && isLightPage(pathname)
                                            ? "text-gray-700 hover:text-gray-900"
                                            : "text-white/80 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        )}
                    </div>
                </div>

                {/* Right: CTA */}
                <div className="hidden lg:flex items-center mt-1">
                    <Link
                        href="/contact"
                        className={`px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                            !scrolled && isLightPage(pathname)
                                ? "bg-gray-900 text-white hover:bg-gray-700"
                                : "bg-white text-black hover:bg-gray-100"
                        }`}
                    >
                        Talk to an Expert
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:hidden p-2 transition-colors ${
                        !scrolled && isLightPage(pathname)
                            ? "text-gray-700 hover:text-gray-900"
                            : "text-white/80 hover:text-white"
                    }`}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#0A192F] border-t border-white/10 px-6 py-6 space-y-1">
                    {primaryLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block py-3 text-base font-medium text-white/80 hover:text-white border-b border-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
