"use client"

import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonialsColumn1 = [
    {
        quote: "Our data was scattered across multiple systems with no clear insights. PDS helped us centralize everything and now we make data-driven decisions with confidence.",
        author: "Emily Johnson",
        role: "VP of Operations",
        rating: 5,
        avatar: "EJ"
    },
    {
        quote: "PDS transformed how we handle customer data. Their analytics platform gave us visibility we never had before. Revenue forecasting accuracy improved by 85% in the first quarter.",
        author: "David Martinez",
        role: "Chief Data Officer",
        rating: 5,
        avatar: "DM"
    },
    {
        quote: "The data integration was seamless. PDS connected our CRM, ERP, and marketing platforms effortlessly. Real-time dashboards changed how our leadership team operates.",
        author: "Rachel Green",
        role: "Business Intelligence Manager",
        rating: 5,
        avatar: "RG"
    },
    {
        quote: "Implementation was faster than expected. The PDS team understood our industry challenges immediately. Now our entire organization has access to clean, reliable data.",
        author: "Tom Anderson",
        role: "Retail Analytics Director",
        rating: 5,
        avatar: "TA"
    }
]

const testimonialsColumn2 = [
    {
        quote: "We were drowning in spreadsheets and manual reports. PDS automated our entire reporting workflow. What used to take days now happens in minutes with better accuracy.",
        author: "Michael Roberts",
        role: "Financial Controller",
        rating: 5,
        avatar: "MR"
    },
    {
        quote: "The predictive analytics models PDS built for us are incredibly accurate. We've optimized inventory levels and reduced waste by 40% while improving customer satisfaction.",
        author: "Sophie Chen",
        role: "Supply Chain Manager",
        rating: 5,
        avatar: "SC"
    },
    {
        quote: "PDS doesn't just provide tools, they provide strategy. Their team helped us identify key metrics that actually matter. Our data culture has completely transformed.",
        author: "James Wilson",
        role: "Marketing Director",
        rating: 5,
        avatar: "JW"
    },
    {
        quote: "The data quality improvements alone justified the investment. PDS cleaned years of messy data and established governance processes that keep it clean.",
        author: "Amanda Foster",
        role: "Data Governance Lead",
        rating: 5,
        avatar: "AF"
    }
]

const testimonialsColumn3 = [
    {
        quote: "We needed customer segmentation for targeted campaigns. PDS delivered advanced clustering models that increased our campaign ROI by 3x. The insights were game-changing.",
        author: "Chris Brown",
        role: "Growth Marketing Manager",
        rating: 5,
        avatar: "CB"
    },
    {
        quote: "As a small business, we thought advanced analytics were out of reach. PDS created scalable solutions within our budget. Now we compete with much larger companies.",
        author: "Maria Santos",
        role: "Founder & CEO",
        rating: 5,
        avatar: "MS"
    },
    {
        quote: "The training PDS provided was exceptional. Our team went from basic Excel users to confidently building dashboards and running analyses independently.",
        author: "Kevin Park",
        role: "Operations Analyst",
        rating: 5,
        avatar: "KP"
    },
    {
        quote: "PDS helped us achieve GDPR and compliance requirements while making our data more accessible. Security and usability no longer feel like opposing goals.",
        author: "Lisa Thompson",
        role: "Compliance Officer",
        rating: 5,
        avatar: "LT"
    }
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsColumn1[0] }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
            <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-4 font-normal">
                {testimonial.quote}
            </p>
            
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
                    {testimonial.avatar}
                </div>
                <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
            </div>
        </div>
    )
}

function ScrollingColumn({ testimonials, direction }: { testimonials: typeof testimonialsColumn1, direction: 'up' | 'down' }) {
    const columnRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const column = columnRef.current
        if (!column) return
        
        // Duplicate content for seamless loop
        const content = column.innerHTML
        column.innerHTML = content + content
        
        let scrollPos = direction === 'up' ? column.scrollHeight / 2 : 0
        const speed = 0.5 // pixels per frame
        
        const scroll = () => {
            if (direction === 'up') {
                scrollPos -= speed
                if (scrollPos <= 0) {
                    scrollPos = column.scrollHeight / 2
                }
            } else {
                scrollPos += speed
                if (scrollPos >= column.scrollHeight / 2) {
                    scrollPos = 0
                }
            }
            column.scrollTop = scrollPos
            requestAnimationFrame(scroll)
        }
        
        const animation = requestAnimationFrame(scroll)
        
        return () => cancelAnimationFrame(animation)
    }, [direction])
    
    return (
        <div 
            ref={columnRef}
            className="h-[600px] overflow-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Why People Love Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover how PDS's AI automation has helped businesses grow and succeed
                    </p>
                </div>

                <div className="relative">
                    {/* Top blur gradient */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Bottom blur gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ScrollingColumn testimonials={testimonialsColumn1} direction="up" />
                        <ScrollingColumn testimonials={testimonialsColumn2} direction="down" />
                        <ScrollingColumn testimonials={testimonialsColumn3} direction="up" />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-500 mb-6">Trusted by 500+ businesses worldwide</p>
                    <div className="flex justify-center gap-8 flex-wrap">
                        {[
                            { value: "4.9/5", label: "Average Rating" },
                            { value: "500+", label: "Happy Clients" },
                            { value: "99.9%", label: "Uptime" },
                            { value: "24/7", label: "Support" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}