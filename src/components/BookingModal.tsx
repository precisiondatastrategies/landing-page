"use client"

import { useState, useEffect, useRef } from "react"
import { createClient } from '@supabase/supabase-js'
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Cal, { getCalApi } from "@calcom/embed-react"

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
    layoutId: string
}

export const BookingModal = ({ isOpen, onClose, layoutId }: BookingModalProps) => {
    const [modalStep, setModalStep] = useState<'form' | 'appointment' | 'thankyou'>('form')

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            setModalStep('form')
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // Calendly widget logic
    useEffect(() => {
        if (modalStep === 'appointment') {
            (async function () {
                const cal = await getCalApi({ namespace: "30min" });
                cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
            })();
            // Listen for Cal.com event scheduled
            function handleCalEvent(e: MessageEvent) {
                if (e.data?.event === "cal.scheduling.success") {
                    setModalStep("thankyou");
                }
            }
            window.addEventListener("message", handleCalEvent);
            return () => {
                window.removeEventListener("message", handleCalEvent);
            };
        }
    }, [modalStep]);

    useEffect(() => {
        if (modalStep === 'form') {
            const handleFormSubmit = (event: MessageEvent) => {
                if (
                    event.origin === "https://links.precisiondatastrategies.com" &&
                    event.data.type === 'form-submit'
                ) {
                    setModalStep('appointment');
                }
            };

            window.addEventListener('message', handleFormSubmit);

            return () => {
                window.removeEventListener('message', handleFormSubmit);
            };
        }
    }, [modalStep]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
                    {/* Modal background and content change by step */}
                    {modalStep === 'form' && (
                        <motion.div
                            layoutId={layoutId}
                            transition={{ duration: 0.3 }}
                            style={{ borderRadius: "24px" }}
                            layout
                            className="relative flex h-full w-full overflow-y-auto bg-[#004FE5] transform-gpu will-change-transform"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                layout={false}
                                transition={{ duration: 0.15, delay: 0.05 }}
                                className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                                style={{ borderRadius: "24px" }}
                            >
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.4 }}
                                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1200px] mx-auto items-center p-6 sm:p-10 lg:p-12 gap-8 lg:gap-12"
                            >
                                <div className="lg:w-2/5 flex flex-col justify-center space-y-3 w-full">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
                                        Talk to sales
                                    </h2>
                                    <div className="space-y-4 sm:space-y-6 pt-4">
                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-sm sm:text-base text-white leading-[150%]">Learn how Acme can transform your business with tailored solutions and flexible pricing options.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-sm sm:text-base text-white leading-[150%]">Experience firsthand how Acme Platform accelerates delivery &amp; drives results.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/20">
                                        <p className="text-lg sm:text-xl lg:text-2xl text-white leading-[150%] mb-4">Acme empowers our team to move faster and ship products with confidence.</p>
                                    </div>
                                </div>
                                <div className="lg:w-3/5 w-full h-[570px]">
                                    <iframe
                                        src="https://links.precisiondatastrategies.com/widget/form/YlUfjXQoR2QqxQfaK3g6"
                                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '15px' }}
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
                                    >
                                    </iframe>
                                </div>
                            </motion.div>
                            <motion.button
                                onClick={onClose}
                                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </motion.button>
                        </motion.div>
                    )}
                    {modalStep === 'appointment' && (
                        <motion.div
                            layoutId={layoutId}
                            transition={{ duration: 0.3 }}
                            style={{ borderRadius: "24px" }}
                            layout
                            className="relative h-full w-full overflow-y-auto transform-gpu will-change-transform shadow-2xl bg-white border border-blue-100 p-0 overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="flex-1 flex flex-col justify-center items-start bg-linear-to-br from-blue-100 via-white to-indigo-50 p-8 md:p-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 animate-slidein">Book Your Appointment</h2>
                                <p className="text-lg text-blue-700 mb-6 text-left animate-fadein-slow">Schedule a 30-minute call with our expert. Pick a time that works for you and let's accelerate your growth!</p>
                                <ul className="text-blue-700 text-base mb-6 space-y-2 animate-fadein-slow">
                                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> Free 30-min consultation</li>
                                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> Personalized advice</li>
                                    <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> No obligation</li>
                                </ul>
                                <div className="flex items-center gap-2 animate-fadein-slow">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3m-8 4v4a4 4 0 004 4h4" /></svg>
                                    <span className="text-blue-600 font-medium">Easy online scheduling</span>
                                </div>
                            </div>
                            <div className="flex-1 bg-white p-4 md:p-8 flex items-center justify-center animate-fadein">
                                <Cal
                                    namespace="30min"
                                    calLink="shafique-ur-rehman-jme44n/30min"
                                    style={{ minWidth: 320, height: 600, width: '100%', overflow: 'scroll', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                                    config={{
                                        layout: "month_view",
                                        theme: "light",
                                        hideEventTypeDetails: "true",
                                        hideAvatar: "true",
                                        hideTitle: "true",
                                        branding: "false"
                                    }}
                                />
                            </div>
                            <motion.button
                                onClick={onClose}
                                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-blue-900 bg-transparent transition-colors hover:bg-blue-100 rounded-full"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </motion.button>
                        </motion.div>
                    )}
                    {modalStep === 'thankyou' && (
                        <motion.div
                            layoutId={layoutId}
                            transition={{ duration: 0.3 }}
                            style={{ borderRadius: "24px" }}
                            layout
                            className="min-h-[500px] relative z-10 max-w-xl w-full mx-auto p-8 sm:p-12 rounded-2xl bg-[#001F63] shadow-2xl flex flex-col items-center"
                        >
                            <div className="mb-6">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="40" cy="40" r="40" fill="#2452F1" />
                                    <path d="M24 40L36 52L56 32" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center tracking-[-0.03em]">Thank You!</h2>
                            <p className="text-lg sm:text-xl text-white/90 mb-6 text-center">Your request has been received.<br />Our team will reach out soon to help you accelerate your marketing pipeline!</p>
                            <button className="mt-2 px-8 py-3 rounded-full bg-white text-[#0041C1] font-semibold hover:bg-white/90 transition-colors text-lg shadow-lg" onClick={onClose}>Back to Home</button>
                        </motion.div>
                    )}
                </div>
            )}
        </AnimatePresence>
    )
}
