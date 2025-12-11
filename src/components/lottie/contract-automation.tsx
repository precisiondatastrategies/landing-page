"use client"

import { motion } from "motion/react"

type ContractAutomationProps = {
  className?: string
}

// Compact animation for embedding inside cards.
export default function ContractAutomationLottie({ className = "" }: ContractAutomationProps) {
  return (
    <div className={`relative h-full w-full min-h-[220px] overflow-hidden rounded-2xl bg-linear-to-br from-[#faf5ff] via-white to-[#fce7f3] p-4 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,180,254,0.4),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(251,207,232,0.4),transparent_40%)]" />

      <div className="relative z-10 flex h-full w-full flex-col gap-4">
        {/* <div className="flex items-center justify-between text-[7px] font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-purple-100 bg-white/80 px-3 py-1 text-purple-600">Auto send</span>
            <span className="rounded-full border border-emerald-100 bg-white/80 px-3 py-1 text-emerald-600">E-sign ready</span>
          </div>
          <motion.span
            className="text-rose-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Contracts synced
          </motion.span>
        </div> */}

        <div className="relative flex flex-1 flex-col gap-4 rounded-xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-purple-100/60">
          <div className="grid grid-cols-[2fr_1fr] gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[7px] uppercase tracking-wide text-slate-400">
                <span>Master services agreement</span>
                <span>#PD-2047</span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-linear-to-br from-white to-[#f5f3ff] p-4 shadow-inner">
                <div className="space-y-2 text-[5px] text-slate-500">
                  {["Scope", "Term", "Payment schedule"].map((section) => (
                    <div key={section} className="flex items-center justify-between">
                      <span className="text-slate-600">{section}</span>
                      <motion.span
                        className="h-1 w-10 rounded-full bg-linear-to-r from-purple-300 to-pink-300"
                        animate={{ scaleX: [0.8, 1, 0.85] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-2 rounded-md border border-dashed border-slate-200 bg-white/70 px-3 py-2">
                  <p className="text-xs font-semibold text-slate-600">Signature</p>
                  <motion.div
                    className="mt-2 h-1 rounded-full bg-linear-to-r from-indigo-400 to-rose-400"
                    animate={{ width: ["30%", "70%", "50%"], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-md border border-slate-100 bg-white/95 p-2 text-[8px] text-slate-500">
              {["Legal", "Finance", "Client"].map((role, index) => (
                <motion.div
                  key={role}
                  className="flex items-center justify-between rounded-md border border-white/90 bg-linear-to-r from-[#f5f3ff] to-white px-2 py-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                >
                  <div className="flex text-[6px] items-center gap-2 text-slate-600">
                    <span className="h-2 w-2  rounded-full bg-emerald-400" />
                    {role}
                  </div>
                  <span className="text-[6px] text-purple-500">Signed</span>
                </motion.div>
              ))}

              <motion.div
                className="mt-auto rounded-md border border-purple-100 bg-purple-50/70 px-2 py-1 text-purple-600 text-[6px"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Audit trail archived
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-[7px] text-slate-500">
            {[
              { label: "Prep", value: "Drafted" },
              { label: "Send", value: "Automation" },
              { label: "Sign", value: "2/2 complete" },
            ].map((step, index) => (
              <motion.div
                key={step.label}
                className="rounded-md border border-white/80 bg-white/90 px-3 py-2 shadow"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: index === 2 ? [0.98, 1.02, 0.98] : [1, 1, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                <p className="text-[7px] uppercase tracking-wide text-slate-400">{step.label}</p>
                <p className="text-[10px] font-semibold text-slate-700">{step.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}