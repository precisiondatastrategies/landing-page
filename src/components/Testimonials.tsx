"use client"

import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
// CountUp component for animated numbers
function CountUp({ end, duration = 2, className }: { end: number, duration?: number, className?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasAnimated) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;
        let start = 10;
        const increment = end / (duration * 60); // 60fps
        let frame = 0;
        function animate() {
            frame++;
            start += increment;
            if (start < end) {
                setCount(Math.floor(start));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        }
        animate();
    }, [hasAnimated, end, duration]);

    return (
        <span ref={ref} className={className}>{count}%</span>
    );
}

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
            <div className="">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Why People Love Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover how PDS's AI automation has helped businesses grow and succeed
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
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

                <div className="mt-16  relative">
                    {/* Dot Pattern Background */}
                    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3, zIndex: 0 }}>
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
                                backgroundSize: "20px 20px",
                                borderRadius: "24px"
                            }}
                        ></div>
                    </div>
                    <div className="mb-8 relative z-10 max-w-6xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 tracking-tight" style={{lineHeight:1.15}}>ELEVATE YOUR BUSINESS WITH PDS'S PROVEN IMPACT</h3>
                        <p className="text-gray-600 text-base md:text-lg max-w-3xl">Join the league of forward-thinking businesses that have experienced a remarkable transformation through PDS's AI automation solutions. Our commitment to innovation and excellence has delivered tangible results that speak for themselves.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10 md:gap-8 lg:gap-12 relative z-10">
                        <div className="flex flex-col">
                            <CountUp end={20} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                            <span className="text-lg font-semibold text-gray-900 mb-1">REDUCTION IN OPERATIONAL COSTS</span>
                            <span className="text-gray-500 text-base">Experience substantial savings as AI-driven automation optimizes resource allocation and minimizes wastage.</span>
                        </div>
                        <div className="flex flex-col">
                            <CountUp end={99} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                            <span className="text-lg font-semibold text-gray-900 mb-1">CUSTOMER SATISFACTION</span>
                            <span className="text-gray-500 text-base">Delight your customers with personalized interactions and solutions, leading to heightened satisfaction and loyalty.</span>
                        </div>
                        <div className="flex flex-col">
                            <CountUp end={96} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                            <span className="text-lg font-semibold text-gray-900 mb-1">INCREASE IN EFFICIENCY</span>
                            <span className="text-gray-500 text-base">Say goodbye to manual, time-consuming tasks. PDS's streamlined processes elevate efficiency, allowing you to focus on strategic initiatives.</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10 md:gap-8 lg:gap-12 mt-10 relative z-10">
                        <div className="flex flex-col">
                            <CountUp end={44} className="text-[64px] md:text-[80px] font-extrabold text-gray-300 leading-none mb-2" />
                            <span className="text-lg font-semibold text-gray-900 mb-1">RISE IN REVENUE GENERATION</span>
                            <span className="text-gray-500 text-base">Unlock new revenue streams with data-driven insights and predictive analytics.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}