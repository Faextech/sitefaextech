"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, GitMerge, Zap } from "lucide-react";

const nodes = [
  { id: "erp", label: "ERP", x: 12, y: 20, delay: 0 },
  { id: "crm", label: "CRM", x: 82, y: 15, delay: 0.3 },
  { id: "api", label: "APIs", x: 88, y: 65, delay: 0.6 },
  { id: "cloud", label: "Cloud", x: 10, y: 70, delay: 0.9 },
];

export default function TechHubVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Outer ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full border border-hb-blue/20 animate-rotate-slow" />
        <div className="absolute h-56 w-56 rounded-full border border-dashed border-hb-orange/20" />
      </div>

      {/* Main panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="glow-card relative z-10 overflow-hidden p-1"
      >
        <div className="rounded-[0.875rem] bg-white p-5">
          {/* Window chrome */}
          <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="ml-2 font-mono text-[10px] text-hb-text-dim">3hb-hub.integrator</span>
            <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              LIVE
            </span>
          </div>

          {/* Hub diagram */}
          <div className="relative h-48">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 80">
              {nodes.map((node) => (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50" y1="40"
                  x2={node.x} y2={node.y}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="3 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1, delay: node.delay + 0.5 }}
                />
              ))}
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E5BAA" />
                  <stop offset="100%" stopColor="#FF5A1F" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center hub */}
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(255,90,31,0.3)", "0 0 40px rgba(255,90,31,0.5)", "0 0 20px rgba(255,90,31,0.3)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-hb-orange to-hb-orange-bright"
            >
              <Cpu className="h-7 w-7 text-white" />
            </motion.div>

            {nodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: node.delay + 0.8, type: "spring" }}
                className="absolute flex flex-col items-center"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="rounded-lg border border-gray-200 bg-white px-2 py-1 font-mono text-[9px] text-hb-text-muted">
                  {node.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Metrics row */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: GitMerge, label: "Integrações", val: "23" },
              { icon: Zap, label: "Automações", val: "47" },
              { icon: Activity, label: "Uptime", val: "99.9%" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-gray-100 bg-white p-2 text-center">
                <m.icon className="mx-auto mb-1 h-3 w-3 text-hb-orange" />
                <p className="font-mono text-sm font-bold text-foreground">{m.val}</p>
                <p className="text-[9px] text-hb-text-dim">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -right-4 top-8 z-20 rounded-lg border border-hb-orange/30 bg-white px-3 py-2 font-mono text-[10px] text-hb-orange shadow-lg"
      >
        API sync ✓
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute -left-4 bottom-12 z-20 rounded-lg border border-hb-blue/30 bg-white px-3 py-2 font-mono text-[10px] text-hb-blue-bright shadow-lg"
      >
        Pipeline ativo
      </motion.div>
    </div>
  );
}
