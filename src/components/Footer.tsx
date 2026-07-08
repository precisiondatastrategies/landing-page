"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"

const nav = {
  services: [
    { name: "AI Voice Agent", href: "/services#voice" },
    { name: "Lead Qualification AI", href: "/services#leads" },
    { name: "Scheduling Automation", href: "/services#scheduling" },
    { name: "CRM & Pipeline AI", href: "/services#crm" },
    { name: "PE Performance Dashboard", href: "/services#dashboard" },
    { name: "All Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Private Equity", href: "/private-equity" },
    { name: "Consulting", href: "/consulting" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
}

const social = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/precision-data-strategies-llc", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/precisiondatastrategies", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/precisiondatastrategies", label: "Instagram" },
  { icon: BsTwitterX, href: "https://x.com/PrecisionDatStr", label: "X" },
  { icon: FaYoutube, href: "https://www.youtube.com/@PrecisionDataStrategies", label: "YouTube" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060F1A] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/">
              <Image
                src="/pds-logo.png"
                alt="Precision Data Strategies"
                width={140} height={50}
                className="w-auto h-10 object-contain brightness-0 invert mb-5"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs mb-6">
              AI implementation partner for private equity portfolio companies. We deploy AI systems that improve EBITDA  -  not slide decks.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">8605 Santa Monica Blvd #724006<br />West Hollywood, CA 90069</span>
              </div>
              <a href="tel:+14247223282" className="flex items-center gap-2.5 text-gray-500 hover:text-white transition-colors text-xs">
                <Phone className="w-4 h-4 shrink-0" /> (424) 722-3282
              </a>
              <a href="mailto:info@precisiondatastrategies.com" className="flex items-center gap-2.5 text-gray-500 hover:text-white transition-colors text-xs">
                <Mail className="w-4 h-4 shrink-0" /> info@precisiondatastrategies.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-5">Services</p>
            <ul className="space-y-3">
              {nav.services.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-5">Company</p>
            <ul className="space-y-3">
              {nav.company.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-5">Get Started</p>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Start with an AI Readiness Assessment for one portfolio company.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {year} Precision Data Strategies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {nav.legal.map((l) => (
              <Link key={l.name} href={l.href} className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {social.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-gray-400" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
