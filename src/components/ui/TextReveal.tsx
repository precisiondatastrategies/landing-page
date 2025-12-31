"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
    children: string
    className?: string
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
    delay?: number
}

export const TextReveal = ({ children, className = "", as: Component = "div", delay = 0 }: TextRevealProps) => {
    const elementRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        // Split text into words manually to avoid needing SplitText plugin
        const words = children.split(" ")
        element.innerHTML = words
            .map((word) => `<span class="inline-block overflow-hidden align-top"><span class="inline-block translate-y-full will-change-transform">${word}&nbsp;</span></span>`)
            .join("")

        const wordElements = element.querySelectorAll(".translate-y-full")

        const ctx = gsap.context(() => {
            gsap.to(wordElements, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 0,
                duration: 0.8,
                stagger: 0.02,
                ease: "power3.out",
                delay: delay,
            })
        })

        return () => ctx.revert()
    }, [children, delay])

    return (
        <Component ref={elementRef as any} className={`opacity-100 ${className}`} aria-label={children} />
    )
}
