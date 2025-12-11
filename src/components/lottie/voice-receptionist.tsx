"use client"

import { motion } from "motion/react"
import Image from "next/image"

type VoiceReceptionistProps = {
  className?: string
}

// Animated call control preview for the AI Voice Receptionist card.
export default function VoiceReceptionistLottie({ className = "" }: VoiceReceptionistProps) {
  const bars = Array.from({ length: 24 })

  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-br from-[#eef2ff] via-white to-[#fef3f3] p-4 ${className}`}>
      <div className="absolute inset-x-6 top-4 h-20 rounded-3xl bg-white/70 blur-2xl" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.25),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(244,114,182,0.25),transparent_40%)]" />

      <div className="relative mx-auto flex h-full w-full max-w-[280px] flex-col gap-4 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl shadow-blue-100">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-slate-400">Inbound</p>
            <p className="text-sm text-slate-700">New Service Lead</p>
          </div>
          <motion.span
            className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-600"
            animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1, 0.95] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Live
          </motion.span>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3">
          <div className="flex items-center gap-3">         
              <Image src={"/voice1.png"} width={48} height={48} alt="Voice Receptionist" />
            <div>
              <p className="text-sm font-semibold text-slate-800">AI Voice Receptionist</p>
              <p className="text-xs text-slate-500">Qualifying caller, logging CRM notes</p>
            </div>
          </div>

          <div className="mt-4 flex h-20 items-center justify-center gap-1 overflow-hidden rounded-xl bg-white/90 px-3">
            {bars.map((_, index) => (
              <motion.span
                key={`bar-${index}`}
                className="w-1 rounded-full bg-linear-to-b from-indigo-500 via-blue-500 to-cyan-400"
                animate={{
                  height: [8, 32, 12, 28],
                  opacity: [0.4, 1, 0.6, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/80 bg-linear-to-r from-[#7c3aed]/10 to-[#ec4899]/10 px-4 py-3 text-xs font-semibold text-slate-600">
          <motion.div
            className="flex items-center gap-2"
            animate={{ x: [0, 2, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Booked Visit 3:42 PM
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-[11px] text-purple-600"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            CRM Sync
            <span className="h-2 w-2 rounded-full bg-purple-400" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-5 left-6 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-blue-600 shadow"
        animate={{ y: [0, -3, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Call summary emailed
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-rose-500 shadow"
        animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        Missed calls: 0
      </motion.div>
    </div>
  )
}
