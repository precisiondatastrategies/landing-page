"use client"

import Image from "next/image"

const integrations = [
  { name: "Vapi", icon: "/vapi.png" },
  { name: "n8n", icon: "/n8n.png" },
  { name: "GoHighLevel", icon: "/ghl.png" },
  { name: "Zapier", icon: "/zapier.webp" },
  { name: "Salesforce", icon: "/zoho.png" },
  { name: "Slack", icon: "/slack.png" },
  { name: "Google Drive", icon: "/google_drive.png" },
  { name: "Notion", icon: "/notion.png" },
  { name: "Make", icon: "/make.png" },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Integrates with the tools your portfolio companies already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {integrations.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity">
              <Image
                src={item.icon}
                alt={item.name}
                width={36}
                height={36}
                className="object-contain w-8 h-8"
              />
              <span className="text-xs text-gray-500 font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
