"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Consulting", href: "/consulting" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)

    // Hide navbar on downward scroll, reveal on upward scrolls near the top
    useEffect(() => {
        if (typeof window === "undefined") return

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 80) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            setIsVisible(true)
        }
    }, [mobileMenuOpen])

    const triggerRequestDemo = () => {
        if (typeof window === "undefined") return
        window.dispatchEvent(new Event("open-request-demo"))
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="sm:rounded-3xl rounded-2xl shadow-lg bg-white/60 backdrop-blur-3xl flex items-center justify-between px-4 sm:px-6 sm:py-2 border border-white/40">
                    {/* Logo - larger and more visible */}
                    <div className="flex items-center h-16">
                        <a href="/" className="flex items-center gap-3">
                            <Image
                                width={120}
                                height={40}
                                src="/pds-logo.png"
                                alt="Precision Data Strategies Logo"
                                className="w-auto h-12 object-contain"
                                priority
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center gap-1"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            type="button"
                            onClick={triggerRequestDemo}
                            className="px-6 py-2.5 font-semibold rounded-full bg-linear-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-200 flex items-center gap-2"
                        >
                            Request a demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/30 bg-white/60 backdrop-blur-2xl shadow-xl">
                    <div className="px-6 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                setMobileMenuOpen(false)
                                triggerRequestDemo()
                            }}
                            className="w-full px-4 py-2.5 bg-linear-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 font-semibold rounded-full text-center"
                        >
                            Request a demo
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
