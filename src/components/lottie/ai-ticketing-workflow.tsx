"use client"

import { motion } from "motion/react"

type TicketingWorkflowProps = {
  className?: string
}

// Visualizes smart routing and ticket lifecycle.
export default function AITicketingWorkflowLottie({ className = "" }: TicketingWorkflowProps) {
  const stages = [
    { label: "Capture", color: "from-[#a855f7] to-[#ec4899]" },
    { label: "Categorize", color: "from-[#7c3aed] to-[#6366f1]" },
    { label: "Route", color: "from-[#22d3ee] to-[#0ea5e9]" },
  ]

  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-br from-[#fdf4ff] via-white to-[#eef2ff] p-5 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(251,207,232,0.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.35),transparent_40%)]" />

      <div className="relative z-10 flex h-full w-full flex-col gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-purple-200/50">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-400">
          <span>Ticket Stream</span>
          <motion.span
            className="flex items-center gap-1 text-emerald-500"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            Smart routing
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </motion.span>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-3">
          <motion.div
            className="space-y-2"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {["Phone", "Chat", "Email", "Instagram"].map((channel, index) => (
              <motion.div
                key={channel}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white/95 px-3 py-2 text-[11px] text-slate-600"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {channel}
                <span className="ml-auto rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-500">New</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              className="h-6 w-6 rounded-full border border-dashed border-purple-200 bg-white/80 text-[9px] font-semibold text-purple-500 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              AI
            </motion.div>
            <motion.div
              className="h-24 w-1 rounded-full bg-linear-to-b from-[#a855f7] via-transparent to-[#0ea5e9]"
              animate={{ scaleY: [0.8, 1, 0.85], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="h-6 w-6 rounded-full border border-dashed border-emerald-200 bg-white/80 text-[9px] font-semibold text-emerald-500 flex items-center justify-center"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              Ops
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-600">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.label}
              className={`rounded-xl border border-white/60 bg-linear-to-br ${stage.color} px-3 py-2 text-white shadow-lg shadow-purple-200/40`}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [0.96, 1, 0.96],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <div className="text-[9px] uppercase tracking-wide text-white/70">Stage {index + 1}</div>
              <div className="text-[12px] font-semibold">{stage.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-between rounded-xl border border-dashed border-slate-200 bg-white/80 px-3 py-2 text-[10px] font-semibold text-slate-600"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Routed in
          <span className="text-purple-500">0.4s</span>
          <span className="flex items-center gap-1 text-emerald-500">
            SLA Guard
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
