"use client"

import { motion } from "motion/react"

type MiniCRMProps = {
  className?: string
}

const columns = [
  {
    title: "New Leads",
    color: "from-[#fcd8ff] to-white",
    cards: [
      { label: "Roofing inbound", value: "$12.4k" },
      { label: "Website chat", value: "$8.8k" },
      { label: "Referral", value: "$5.1k" }
    ]
  },
  {
    title: "In Review",
    color: "from-[#e0e7ff] to-white",
    cards: [
      { label: "Scope call", value: "Due today" },
      { label: "Budget sent", value: "Awaiting sign" },
      { label: "Ops sync", value: "Notes logged" }
    ]
  },
  {
    title: "Signed",
    color: "from-[#ccfbf1] to-white",
    cards: [
      { label: "Doc routed", value: "GDrive" },
      { label: "Kickoff set", value: "Monday" }
    ]
  }
]

// Animated kanban for the Mini CRM + Lead Tracker card.
export default function MiniCRMLottie({ className = "" }: MiniCRMProps) {
  return (
    <div className={`relative h-full w-full min-h-[200px] overflow-hidden rounded-2xl bg-linear-to-br from-[#fdf2ff] via-white to-[#eef2ff] p-4 ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_30%,rgba(250,232,255,0.6),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(199,210,254,0.45),transparent_35%)]" />

      <div className="relative z-10 flex h-full w-full flex-col gap-4">
        <div className="flex items-center justify-between text-[6px] font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Pipeline Live</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-600">SLA 2 hrs</span>
          </div>
          <div className="flex items-center gap-2 text-rose-500">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              12 hot leads
            </motion.span>
            <motion.span
              className="text-[6px] uppercase tracking-wide text-slate-400"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              updated live
            </motion.span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-1">
          {columns.map((column, columnIndex) => (
            <div
              key={column.title}
              className={`rounded-md border border-white/70 bg-white/90 p-2 shadow-xl shadow-indigo-100/60`}
            >
              <p className="text-[5px] font-semibold text-slate-700">{column.title}</p>
              <div className={`mt-2 rounded-md bg-linear-to-b ${column.color} p-1 px-2 text-[6px] text-slate-500`}> 
                Stage health
              </div>
              <div className="mt-1 space-y-2">
                {column.cards.map((card, cardIndex) => (
                  <motion.div
                    key={card.label}
                    className="rounded-md border border-slate-100 bg-white/95 px-3 py-2 text-[6px] font-medium text-slate-600 shadow"
                    animate={{
                      x: [0, columnIndex === 0 ? 4 : 0, 0],
                      y: [0, columnIndex === 1 ? -3 : 2, 0],
                      rotate: columnIndex === 1 ? [0, -0.8, 0] : [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: cardIndex * 0.35 + columnIndex * 0.25
                    }}
                  >
                    <div className="flex items-center justify-between text-[4px]">
                      <span className="text-slate-700">{card.label}</span>
                      <span className="text-[4px] text-slate-400">{card.value}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[4px] text-indigo-500">
                      <span className="h-1 w-1 rounded-full bg-indigo-400" />
                      Auto note logged
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-[11px] font-semibold text-slate-500 shadow">
          <motion.div
            className="flex items-center gap-2"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            Next follow-up 2:15 PM
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-emerald-500"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            Auto-task drop
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
