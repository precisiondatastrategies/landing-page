"use client"

import { Slack, FileText, Zap, Calendar, Mail, MessageSquare, Database, Cloud } from "lucide-react"

const integrations = [
    { name: "Slack", icon: Slack },
    { name: "Notion", icon: FileText },
    { name: "n8n", icon: Zap },
    { name: "Zapier", icon: Zap },
    { name: "Google Drive", icon: Cloud },
    { name: "Calendly", icon: Calendar },
    { name: "WhatsApp", icon: MessageSquare },
    { name: "Gmail", icon: Mail },
    { name: "Vapi", icon: Database },
]

export default function Integrations() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Works Seamlessly With Your Existing Tools
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                        Connect your automations to the platforms you already use — from scheduling and CRM to communication apps.
                    </p>
                    <p className="text-base text-gray-500 max-w-3xl mx-auto">
                        UNITZERO integrates with tools like Slack, Notion, n8n, Zapier, Google Drive, Calendly, WhatsApp, Gmail, Vapi, and more.
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
                    {integrations.map((integration) => {
                        const Icon = integration.icon
                        return (
                            <div
                                key={integration.name}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-300 group-hover:shadow-md transition-all duration-200">
                                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700" />
                                </div>
                                <span className="text-xs md:text-sm font-medium text-gray-700">
                                    {integration.name}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
