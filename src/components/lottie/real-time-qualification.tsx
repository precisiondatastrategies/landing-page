"use client"

import { motion } from "motion/react"

type QualificationBotProps = {
  className?: string
}

// Depicts live scoring and routing of qualified leads.
export default function RealTimeQualificationLottie({ className = "" }: QualificationBotProps) {
  const criteria = [
    { label: "Budget", score: 92, delay: 0 },
    { label: "Timeline", score: 86, delay: 0.2 },
    { label: "Fit", score: 94, delay: 0.4 },
  ]

  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-b from-[#f5f3ff] via-white to-[#eef2ff] p-5 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(147,51,234,0.2),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(236,72,153,0.2),transparent_45%)]" />

      <div className="relative z-10 flex h-full w-full flex-col gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-purple-200/50">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-400">
          <span>Qualification Bot</span>
          <motion.span
            className="flex items-center gap-1 text-emerald-500"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            Hot lead alerts
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </motion.span>
        </div>

        <motion.div
          className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 p-3"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="space-y-1 text-[10px] text-slate-500">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Jamie Patel
            </div>
            <div>Channel · Web chat</div>
            <div>Requested seats · 45</div>
          </div>
          <motion.div
            className="ml-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#7c3aed] to-[#ec4899] text-[12px] font-bold text-white"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            96%
          </motion.div>
        </motion.div>

        <div className="space-y-2">
          {criteria.map((criterion, index) => (
            <motion.div
              key={criterion.label}
              className="rounded-xl border border-white/80 bg-linear-to-br from-white to-[#f9f5ff] px-3 py-2"
              animate={{ opacity: [0.6, 1, 0.6], x: [0, 4, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: criterion.delay }}
            >
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-600">
                <span>{criterion.label}</span>
                <span>{criterion.score}% fit</span>
              </div>
              <motion.div
                className="mt-2 h-1.5 rounded-full bg-linear-to-r from-[#a855f7] to-[#ec4899]"
                animate={{ scaleX: [0.75, 1, 0.8] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 text-[10px] text-slate-600">
          {["Route to AE", "Send playbook"].map((action, index) => (
            <motion.div
              key={action}
              className="rounded-xl border border-white/70 bg-white/90 px-3 py-2 shadow"
              animate={{ opacity: [0.6, 1, 0.6], scale: [0.96, 1.02, 0.96] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <div className="text-[9px] uppercase tracking-wide text-slate-400">Next</div>
              <div className="text-[12px] font-semibold text-slate-700">{action}</div>
              <div className="text-[9px] text-emerald-500">ready</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-between rounded-xl border border-dashed border-slate-200 bg-white/80 px-3 py-2 text-[10px] font-semibold text-slate-600"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Logic paths
          <span className="text-purple-500">12</span>
          <span className="flex items-center gap-1 text-emerald-500">
            Latency 0.5s
            <motion.span
              className="h-2 w-2 rounded-full bg-emerald-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </div>
    </div>
  )
}
