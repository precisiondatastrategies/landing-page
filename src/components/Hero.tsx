"use client"

// Add TypeScript declaration for Calendly on window
declare global {
  interface Window {
    Calendly?: any;
  }
}

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { TextReveal } from "./ui/TextReveal"
import { BookingModal } from "./BookingModal"

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = useCallback(() => {
    setIsExpanded(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsExpanded(false)
  }, [])

  useEffect(() => {
    const handleGlobalOpen = () => handleExpand()
    window.addEventListener("open-request-demo", handleGlobalOpen)

    return () => {
      window.removeEventListener("open-request-demo", handleGlobalOpen)
    }
  }, [handleExpand])

  // Supabase client (moved to BookingModal, but if needed elsewhere keep it. Hero doesn't seem to use it elsewhere)
  // Converting inline logic to BookingModal usage

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-start lg:justify-center px-4 pt-24 pb-12 sm:py-32 lg:py-20 overflow-x-hidden">

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center sm:gap-12 lg:gap-6 sm:px-10 lg:px-20">
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left mt-5">
            <TextReveal as="h2" className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#071A31] mix-blend-exclusion">
              AI Automation for Every Conversation, Every Lead, Every Workflow.
            </TextReveal>

            <TextReveal as="p" className="text-sm sm:text-lg md:text-xl leading-[160%] text-black/80 max-w-2xl" delay={0.2}>
              Turn calls, chats, emails, forms, and follow-ups into fully automated workflows powered by human-like AI voice agents, smart chatbots, and your central automation dashboard.
            </TextReveal>

            <AnimatePresence initial={false}>
              {!isExpanded && (
                <motion.div className="inline-block relative">
                  <motion.div
                    style={{
                      borderRadius: "100px",
                    }}
                    layout
                    layoutId="cta-card"
                    className="absolute inset-0 font-semibold bg-linear-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 items-center justify-center transform-gpu will-change-transform"
                  ></motion.div>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layout={false}
                    onClick={handleExpand}
                    className="h-15 px-8 py-3 text-xl font-regular text-[#E3E3E3] tracking-[-0.01em] relative"
                  >
                    Request a demo
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full lg:w-[700px] h-[340px] sm:h-[520px] lg:h-[500px] flex items-center justify-center"
          >

            <Image
              src="/industries/am.jpg"
              alt="Workflow Automation Dashboard"
              fill
              className="object-contain"
              priority
              quality={100}
              sizes="(min-width: 1024px) 700px, 100vw"
            />

          </motion.div>
        </div>
      </div>

      <BookingModal
        isOpen={isExpanded}
        onClose={handleClose}
        layoutId="cta-card"
      />
    </>
  )
}

export default Hero;