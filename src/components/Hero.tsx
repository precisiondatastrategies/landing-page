"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BookingModal } from "./BookingModal"

const slides = [
  {
    id: 1,
    headline: (
      <>
        AI that moves <br /> your multiple
      </>
    ),
    subheadline: "We deploy AI across PE portfolio companies and measure everything in EBITDA  -  not technology vanity metrics.",
    videoUrl: "/videos/h2.mp4",
  },
  {
    id: 2,
    headline: (
      <>
        From assessment <br /> to exit value
      </>
    ),
    subheadline: "$110K engagement. $15.3M added to exit valuation. That is the math that makes operating partners pick up the phone.",
    videoUrl: "/videos/h3.mp4",
  },
  // {
  //   id: 3,
  //   headline: (
  //     <>
  //       One firm. <br /> Entire portfolio.
  //     </>
  //   ),
  //   subheadline: "Land one PE firm, deploy across every portfolio company. The portfolio multiplier is real  -  and it compounds fast.",
  //   videoUrl: "https://cdn.pixabay.com/video/2020/01/21/31422-386008544_large.mp4",
  // }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 100000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Video Backgrounds */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={slides[currentSlide].videoUrl}
          />
          {/* Overlays to make text pop */}
          <div className="absolute inset-0 bg-black/40" />
          {/* <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" /> */}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6 text-white! drop-shadow-2xl">
                {slides[currentSlide].headline}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white! font-light max-w-2xl mb-10 leading-relaxed drop-shadow-lg">
                {slides[currentSlide].subheadline}
              </p>
              
              <button
                onClick={handleExpand}
                className="bg-white text-black hover:bg-gray-100 transition-colors px-10 py-4 text-sm font-semibold tracking-widest uppercase"
              >
                Request a Demo
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 sm:px-8 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-10 h-10 sm:w-16 sm:h-16 font-light" strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-10 h-10 sm:w-16 sm:h-16 font-light" strokeWidth={1} />
        </button>
      </div>

      <BookingModal
        isOpen={isExpanded}
        onClose={handleClose}
        layoutId="cta-card"
      />
    </div>
  )
}