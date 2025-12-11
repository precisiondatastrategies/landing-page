"use client"

import { motion } from "motion/react"

type AIChatbotProps = {
  className?: string
}

// Animated chat preview for the AI Website Chatbot card.
export default function AIChatbotLottie({ className = "" }: AIChatbotProps) {
  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-b from-[#fdf2ff] via-white to-[#eef2ff] p-4 ${className}`}>
      <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto h-full w-full max-w-[280px] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-indigo-200/40">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-400">
          <span>Concierge Chat</span>
          <span>Online</span>
        </div>
        <div className="mt-3 space-y-3">
          <motion.div
            className="w-max max-w-full rounded-2xl rounded-bl-none bg-linear-to-r from-[#a855f7] to-[#ec4899] px-4 py-2 text-xs text-white shadow-lg shadow-pink-200/40"
            animate={{
              opacity: [0.4, 1, 1],
              y: [8, 0, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            Hey Jamie! Ready to see your pricing breakdown?
          </motion.div>

          <motion.div
            className="ml-auto w-max max-w-full rounded-2xl rounded-br-none border border-indigo-100 bg-white px-4 py-2 text-xs text-slate-600 shadow"
            animate={{
              opacity: [0.3, 0.9, 0.9],
              y: [6, 0, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            Show me options for onboarding 25 seats.
          </motion.div>

          <motion.div
            className="flex w-max items-center rounded-2xl rounded-bl-none bg-linear-to-r from-[#7c3aed] to-[#a855f7] px-4 py-2 text-xs text-white shadow-lg"
            animate={{
              opacity: [0.5, 1, 1],
              y: [6, 0, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4,
            }}
          >
            <span className="text-white/80">Typing playbook...</span>
          </motion.div>

          <motion.div
            className="ml-auto flex w-24 items-center justify-between rounded-full border border-dashed border-purple-200/70 px-3 py-1 text-[10px] uppercase tracking-wide text-purple-600"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>AI Draft</span>
            <motion.span
              className="flex gap-0.5"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-indigo-500 shadow"
        animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        2.3s reply
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-6 flex items-center gap-1 text-[11px] font-semibold text-rose-500"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        Live human handoff
      </motion.div>
    </div>
  )
}
