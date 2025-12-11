"use client"

import { motion } from "motion/react"

type MultiChannelLeadProps = {
  className?: string
}

// Illustrates capturing leads from multiple channels into one hub.
export default function MultiChannelLeadCaptureLottie({ className = "" }: MultiChannelLeadProps) {
  const channels = [
    { name: "WhatsApp", color: "bg-emerald-400" },
    { name: "Instagram", color: "bg-rose-400" },
    { name: "Email", color: "bg-indigo-400" },
    { name: "SMS", color: "bg-amber-400" },
    { name: "Web Chat", color: "bg-purple-400" },
    { name: "Phone", color: "bg-cyan-400" },
  ]

  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-b from-[#f7f4ff] via-white to-[#eef2ff] p-5 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(167,139,250,0.25),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(251,207,232,0.35),transparent_40%)]" />

      <div className="relative z-10 flex h-full w-full flex-col gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-purple-200/50">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-400">
          <span>Capture Hub</span>
          <motion.span
            className="flex items-center gap-1 text-emerald-500"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            Synced
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </motion.span>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
          <motion.div
            className="grid grid-cols-1 gap-2"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {channels.slice(0, 3).map((channel, index) => (
              <motion.div
                key={channel.name}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white/95 px-3 py-2 text-[11px] text-slate-600"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                <span className={`h-2 w-2 rounded-full ${channel.color}`} />
                {channel.name}
                <span className="ml-auto text-[10px] font-semibold text-purple-500">Lead</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative flex flex-col items-center">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed border-purple-200 bg-linear-to-b from-[#a855f7]/90 to-[#6366f1]/90 text-center text-[10px] font-semibold text-white"
              animate={{ scale: [0.95, 1.05, 0.95], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 15px 35px rgba(124,58,237,0.35)", "0 0 0 rgba(0,0,0,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Unified<br />Inbox
            </motion.div>
            <motion.div
              className="mt-2 h-1.5 w-24 rounded-full bg-linear-to-r from-[#ec4899] to-[#8b5cf6]"
              animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.8, 1, 0.85] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="mt-3 rounded-full border border-dashed border-emerald-200 bg-white/80 px-3 py-1 text-[10px] font-semibold text-emerald-500"
              animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Auto-assign
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {channels.slice(3).map((channel, index) => (
              <motion.div
                key={channel.name}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white/95 px-3 py-2 text-[11px] text-slate-600"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                <span className={`h-2 w-2 rounded-full ${channel.color}`} />
                {channel.name}
                <span className="ml-auto text-[10px] font-semibold text-purple-500">Lead</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-[10px] text-slate-600">
          {["Hot", "Warm"].map((segment, index) => (
            <motion.div
              key={segment}
              className="rounded-xl border border-white/70 bg-linear-to-br from-white to-[#f4f0ff] px-3 py-2 shadow"
              animate={{ opacity: [0.6, 1, 0.6], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <div className="text-[9px] uppercase tracking-wide text-slate-400">Segment</div>
              <div className="text-[12px] font-semibold text-slate-700">{segment} leads</div>
              <div className="text-[9px] text-emerald-500">Live sync</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
