"use client"

import { ArrowRight, Check } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { BookingModal } from "./BookingModal"

export default function FinalCTA() {
    const [isExpanded, setIsExpanded] = useState(false)
    // List of icon filenames in public/videos or public/icons (update as needed)
    const icons = [
        '/ghl.png',
        '/notion.png',
        '/zapier.webp',
        '/google_drive.png',
        '/slack.png',
        '/supa.webp',
        '/n8n.png',
        '/gmail.png',
        '/lovable.png',
        '/zoho.png',

    ];

    // Positions for floating icons (matching the image layout)
    const iconPositions = [
        { name: 'ghl', top: '10%', left: '9%', rotate: '20deg' },    // top left corner
        { name: 'notion', top: '8%', left: '26%', rotate: '8deg' },      // top left-center
        { name: 'zapier', top: '30%', left: '19%', rotate: '-8deg' },    // middle left area
        { name: 'google_drive', top: '52%', left: '11%', rotate: '12deg' },    // lower left
        { name: 'slack', top: '62%', left: '21%', rotate: '-5deg' },    // bottom left area
        { name: 'supa', top: '8%', left: '76%', rotate: '-10deg' },    // top right area
        { name: 'n8n', top: '14%', left: '90%', rotate: '-70deg' },    // top right corner
        { name: 'gmail', top: '35%', left: '85%', rotate: '-90deg' },   // middle right
        { name: 'lovable', top: '58%', left: '72%', rotate: '-104deg' },     // lower right area
        { name: 'zoho', top: '65%', left: '90%', rotate: '-120deg' },    // bottom right corner
    ];

    return (
        <section className="relative bg-white min-h-[500px] flex items-center justify-center overflow-hidden" style={{ borderRadius: '20px' }}>
            {/* Floating icons */}
            {icons.map((icon, i) => (
                <img
                    key={icon}
                    src={icon}
                    alt="integration icon"
                    className="absolute drop-shadow-lg rounded-xl"
                    style={{
                        width: 64,
                        height: 64,
                        ...iconPositions[i % iconPositions.length],
                        zIndex: 2,
                        animation: `float${i} 6s ease-in-out infinite`,
                        transform: `rotate(${(i % iconPositions.length) * 18 - 36}deg)` // slight rotation for each icon
                    }}
                />
            ))}


            {/* Main content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center py-20">
                <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-4 shadow">
                        AI Automation Platform
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Unlock AI-Powered Automation<br />for Modern Businesses
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Automate workflows, boost productivity, and integrate your favorite tools with precision AI solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 min-h-20">
                    <AnimatePresence mode="wait">
                        {!isExpanded && (
                            <>
                                <motion.div className="relative inline-block">
                                    <motion.div
                                        layoutId="final-cta-card"
                                        className="absolute inset-0 bg-linear-to-r from-blue-500 to-teal-400 rounded-full"
                                        style={{ borderRadius: "9999px" }}
                                    />
                                    <motion.button
                                        onClick={() => setIsExpanded(true)}
                                        className="relative z-10 group px-8 py-4 font-semibold text-white shadow-lg flex items-center gap-2 rounded-full"
                                    >
                                        Request a Demo
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </motion.div>
                                <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <Link
                                        href="/consulting"
                                        className="inline-block px-8 py-4 bg-white border border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200"
                                    >
                                        Talk to an Expert
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
                <BookingModal isOpen={isExpanded} onClose={() => setIsExpanded(false)} layoutId="final-cta-card" />
            </div>

            {/* Custom floating animation keyframes */}
            <style jsx>{`
                ${icons.map((_, i) => `
                    @keyframes float${i} {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                `).join('')}
            `}</style>
        </section>
    );
}
