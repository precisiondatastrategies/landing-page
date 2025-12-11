"use client"

import { motion } from "motion/react"

type ConfirmationEmailProps = {
  className?: string
}

const timeline = [
  { label: "Call wrap summary", status: "Queued", color: "text-amber-500" },
  { label: "Smart merge", status: "Personalized", color: "text-purple-500" },
  { label: "Inbox drop", status: "Delivered", color: "text-emerald-500" }
]

// Animated confirmation email preview for the Confirmation Email Engine card.
export default function ConfirmationEmailLottie({ className = "" }: ConfirmationEmailProps) {
  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-br from-[#eef2ff] via-white to-[#fdf2ff] p-4 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(191,219,254,0.55),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(251,207,232,0.45),transparent_40%)]" />

      <div className="relative z-10 flex h-full w-full flex-col gap-4">
        <div className="flex items-center justify-between text-[7px] font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-blue-600">Send in 30s</span>
            <span className="rounded-full border border-emerald-100 bg-white/80 px-3 py-1 text-emerald-600 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              99% deliverability
            </span>
          </div>
          <motion.span
            className="text-rose-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Hand-off locked
          </motion.span>
        </div>

        <div className="grid flex-1 grid-cols-[1.4fr_0.8fr] gap-4">
          <div className="flex flex-col rounded-3xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-blue-100/60">
            <div className="text-[6px] uppercase tracking-wide text-slate-400 flex items-center justify-between">
              <span>Confirmation email</span>
              <span>#CM-482</span>
            </div>
            <div className="mt-3 space-y-3 text-[5px] text-slate-600">
              <div className="flex items-center">
                <span className="text-slate-400">To</span>
                <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[7px] font-semibold text-slate-600">jamie@northbuild.com</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-400">Subject</span>
                <span className="font-semibold text-slate-700">Site visit confirmed for Thu</span>
              </div>
            </div>

            <div className="mt-2 rounded-md border border-slate-100 bg-linear-to-b from-white to-[#eef2ff] p-2 text-[7px] text-slate-600">
              <p>Hi Jamie,</p>
              <p className="mt-2">Thanks for the call today. Your crew is locked for <span className="font-semibold text-slate-800">Thursday 2:30 PM</span>. We attached the prep checklist and auto-shared driving notes.</p>
              <motion.div
                className="mt-3 rounded-xl border border-dashed border-indigo-200 bg-white/80 px-3 py-2 text-[5px] font-semibold text-indigo-500"
                animate={{ opacity: [0.5, 1, 0.5], y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Attachments packaged (3)
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-white/80 bg-white/90 p-2 shadow-xl shadow-rose-100/40 text-[11px] text-slate-500">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">Send timeline</p>
            <div className="mt-2 space-y-3">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-linear-to-r from-[#fdf2ff] to-white px-3 py-2"
                  animate={{ opacity: [0.6, 1, 0.6], x: [0, 3, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                >
                  <div className="flex text-[6px] items-center gap-2 text-slate-600">
                    <span className="h-1 w-2 rounded-md bg-purple-400" />
                    {item.label}
                  </div>
                  <span className={`text-[6px] font-semibold ${item.color}`}>{item.status}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 rounded-xl border border-dashed border-slate-200 bg-white/70 p-3">
              <p className="text-[7px] uppercase tracking-wide text-slate-400">Channels</p>
              <div className="mt-2 flex  gap-2 text-[7px] font-semibold text-slate-600">
                {["Email", "SMS", "Slack"].map((channel) => (
                  <span key={channel} className="rounded-full bg-[#eef2ff] px-2 py-1">{channel}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
