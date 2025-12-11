"use client"

import { motion } from "motion/react"

type KnowledgeBaseProps = {
  className?: string
}

// Animated knowledge base search with pulsing document highlights.
export default function KnowledgeBaseLottie({ className = "" }: KnowledgeBaseProps) {
  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-b from-[#f6f3ff] via-white to-[#eef2ff] p-5 ${className}`}>
      <div className="absolute -top-12 -left-6 h-32 w-32 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute -bottom-10 right-4 h-32 w-32 rounded-full bg-rose-200/30 blur-3xl" />

      <div className="relative mx-auto flex h-full w-full max-w-[280px] flex-col gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-indigo-200/40">
        <div className="text-[10px] uppercase tracking-wide text-slate-400">Knowledge Graph</div>

        <motion.div
          className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-[11px] text-slate-600"
          animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 20px rgba(124,58,237,0.2)", "0 0 0 rgba(0,0,0,0)"] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Search contracts playbook
          <motion.span
            className="ml-auto flex gap-0.5"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
          </motion.span>
        </motion.div>

        <div className="space-y-2">
          {["Document summary", "Policy clause", "Next best reply"].map((label, index) => (
            <motion.div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white/90 px-3 py-2 text-[11px] text-slate-600"
              animate={{
                opacity: [0.5, 1, 0.5],
                x: [0, 4, 0],
              }}
              transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <span className="h-6 w-6 rounded-xl bg-linear-to-br from-[#a855f7]/70 to-[#ec4899]/70 text-[9px] font-semibold text-white flex items-center justify-center">KB</span>
              <div className="flex-1">
                <div className="font-semibold text-[11px] text-slate-800">{label}</div>
                <div className="text-[10px] text-slate-400">Verified · 0.{index + 3}s ago</div>
              </div>
              <motion.span
                className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-500"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
              >
                99%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-indigo-500 shadow"
        animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        On-brand answer
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-5 flex items-center gap-2 rounded-2xl border border-dashed border-purple-200/70 bg-white/70 px-3 py-1.5 text-[10px] font-semibold text-purple-600"
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.96, 1, 0.96] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Syncing docs
        <motion.span
          className="flex gap-0.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
        </motion.span>
      </motion.div>
    </div>
  )
}
