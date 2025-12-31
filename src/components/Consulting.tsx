"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TextReveal } from "./ui/TextReveal"

export default function Consulting() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <TextReveal
                            as="h2"
                            className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.15]"
                        >
                            AI Consulting Built To Ship Fast & Stay Accountable
                        </TextReveal>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-gray-600 leading-relaxed max-w-xl"
                        >
                            We partner with your execs, ops, and engineering to move from idea to controlled rollout without burning trust. Every engagement ships a playbook, ownership model, and live automation in your stack.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/consulting">
                                <button className="px-8 py-3.5 rounded-full bg-linear-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-200 flex items-center gap-2">
                                    Explore Now
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Image Collage */}
                    <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
                        {/* Decorative Blue Lines/Circles behind images */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* Blue Glow Effect */}
                            <div className="absolute w-[300px] h-[300px] bg-blue-400/50 rounded-full blur-[100px]" />

                            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30 text-blue-400 relative z-10">
                                <path d="M300,300 m-200,0 a200,200 0 1,0 400,0 a200,200 0 1,0 -400,0" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
                                <path d="M300,300 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0" stroke="currentColor" strokeWidth="1" />
                                <path d="M300,300 m-250,0 a250,250 0 1,0 500,0 a250,250 0 1,0 -500,0" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" style={{ animationDuration: '20s' }} />
                            </svg>
                        </div>

                        {/* Images Container */}
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Top Left */}
                            <motion.div
                                initial={{ opacity: 0, rotate: -10, x: -20 }}
                                whileInView={{ opacity: 1, rotate: -6, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="absolute top-0 left-0 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop"
                                    alt="Team Meeting"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Top Right */}
                            <motion.div
                                initial={{ opacity: 0, rotate: 10, x: 20 }}
                                whileInView={{ opacity: 1, rotate: 6, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="absolute top-8 right-0 w-44 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                                    alt="Consultant"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, rotate: 5, y: 20 }}
                                whileInView={{ opacity: 1, rotate: 3, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="absolute bottom-12 left-4 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-30"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop"
                                    alt="Office"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, rotate: -5, y: 20 }}
                                whileInView={{ opacity: 1, rotate: -3, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute bottom-0 right-8 w-48 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop"
                                    alt="Analytics"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
