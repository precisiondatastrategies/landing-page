"use client"

import { ArrowRight, Check } from "lucide-react"

export default function FinalCTA() {
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
   
    ];

    // Positions for floating icons (percentages for top/left)
    const iconPositions = [
        { top: '15%', left: '10%' },
        { top: '10%', left: '30%' },
        { top: '70%', left: '15%' },
        { top: '80%', left: '35%' },
        { top: '75%', left: '75%' },
        { top: '65%', left: '90%' },
        { top: '20%', left: '80%' },
        { top: '10%', left: '60%' },
        { top: '50%', left: '95%' },
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
                        ...iconPositions[i],
                        zIndex: 2,
                        animation: `float${i} 6s ease-in-out infinite`,
                    }}
                />
            ))}


            {/* Main content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center py-20">
                <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full mb-4 shadow">
                        Live on Passionfroot
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Thousands of campaigns<br />launched to date
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    with 60% lower CPC than Linkedin Ads*
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button className="group px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 shadow-lg">
                        Get access
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200">
                        Book a call
                    </button>
                </div>
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
