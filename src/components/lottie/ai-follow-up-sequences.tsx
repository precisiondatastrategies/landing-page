"use client"

import { motion } from "motion/react"

type FollowUpSequencesProps = {
  className?: string
}

// Shows staggered follow-up messages across SMS, email, and chat.
export default function AIFollowUpSequencesLottie({ className = "" }: FollowUpSequencesProps) {
  const steps = [
    { label: "SMS", color: "from-[#ec4899] to-[#f97316]", delay: 0 },
    { label: "Email", color: "from-[#a855f7] to-[#6366f1]", delay: 0.2 },
    { label: "Chat", color: "from-[#14b8a6] to-[#0ea5e9]", delay: 0.4 },
  ]

  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-b from-[#f7f4ff] via-white to-[#eef2ff] p-5 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_10%,rgba(236,72,153,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.25),transparent_45%)]" />

      <div className="relative z-10 flex h-full w-full flex-col gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-pink-200/50">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-400">
          <span>Follow-up Lab</span>
          <motion.span
            className="flex items-center gap-1 text-emerald-500"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            Hands-free
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </motion.span>
        </div>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className={`relative overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-3 shadow`}
              animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-600">
                <span>{step.label} playbook</span>
                <motion.span
                  className="flex items-center gap-1 text-purple-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: step.delay }}
                >
                  Scheduled
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                </motion.span>
              </div>
              <motion.div
                className={`mt-3 h-1.5 rounded-full bg-linear-to-r ${step.color}`}
                animate={{ scaleX: [0.7, 1, 0.8] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: step.delay }}
              />
              <div className="mt-2 flex items-center justify-between text-[9px] text-slate-400">
                <span>Step {index + 1}</span>
                <span>Delay {index * 30}m</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 text-[10px] text-slate-600">
          {["Nurture", "Re-activate"].map((audience, index) => (
            <motion.div
              key={audience}
              className="rounded-xl border border-white/70 bg-linear-to-br from-white to-[#fdf2ff] px-3 py-2 shadow"
              animate={{ opacity: [0.6, 1, 0.6], scale: [0.97, 1.03, 0.97] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <div className="text-[9px] uppercase tracking-wide text-slate-400">Audience</div>
              <div className="text-[12px] font-semibold text-slate-700">{audience}</div>
              <div className="text-[9px] text-emerald-500">Live sync</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-between rounded-xl border border-dashed border-slate-200 bg-white/80 px-3 py-2 text-[10px] font-semibold text-slate-600"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Steps
          <span className="text-purple-500">3</span>
          <span className="flex items-center gap-1 text-emerald-500">
            Ready in 90s
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
