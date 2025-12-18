"use client"

import Image from "next/image"

const integrations = [
    { name: "Slack", icon: "/slack.png" },
    { name: "Notion", icon: "/notion.png" },
    { name: "n8n", icon: "/n8n.png" },
    { name: "Zapier", icon: "/zapier.webp" },
    { name: "Google Drive", icon: "/google_drive.png" },
    { name: "Calendly", icon: "/calendly.png" },
    { name: "GHL", icon: "/ghl.png" }, 
    { name: "Gmail", icon: "/gmail.png" },  
    { name: "Vapi", icon: "/vapi.png" },
]

export default function Integrations() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Works Seamlessly With Your Existing Tools
                    </h2>
                    <p className="sm:text-xl text-sm text-gray-600 max-w-3xl mx-auto mb-4">
                        Connect your automations to the platforms you already use — from scheduling and CRM to communication apps.
                    </p>
                </div>

                <div className="hidden md:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-300 group-hover:shadow-md transition-all duration-200">
                                <Image
                                    src={integration.icon}
                                    alt={integration.name + ' logo'}
                                    width={48}
                                    height={48}
                                    className="object-contain w-8 h-8 md:w-10 md:h-10"
                                />
                            </div>
                            <span className="text-xs md:text-sm font-medium text-gray-700">
                                {integration.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Mobile Scrolling View */}
                <div className="md:hidden overflow-hidden relative w-full">
                    <div className="flex animate-scroll">
                        {[...integrations, ...integrations].map((integration, index) => (
                            <div key={`${integration.name}-${index}`} className="shrink-0 w-28 flex flex-col items-center gap-3 mx-4">
                                <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                                    <Image
                                        src={integration.icon}
                                        alt={integration.name + ' logo'}
                                        width={48}
                                        height={48}
                                        className="object-contain w-8 h-8"
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-700 text-center">
                                    {integration.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 left-0 bottom-0 w-16 bg-linear-to-r from-gray-50 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 bottom-0 w-16 bg-linear-to-l from-gray-50 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    )
}
