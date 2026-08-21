"use client";

import React, { useState } from "react";
import { ArchitectureStep } from "@/data/projects";
import { ArrowRight, CheckCircle2, ChevronRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureFlowProps {
  steps: ArchitectureStep[];
  title?: string;
  subtitle?: string;
}

export function ArchitectureFlow({
  steps,
  title = "System Pipeline & Execution Flow",
  subtitle = "Deterministic step-by-step processing lifecycle",
}: ArchitectureFlowProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = steps[activeStepIndex];

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#121215] p-6 lg:p-8 space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Cpu className="w-4 h-4" />
          <span>{title}</span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      </div>

      {/* Horizontal step selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-2">
        {steps.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          const isPast = idx < activeStepIndex;

          return (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={cn(
                "flex flex-col items-start p-3 rounded-lg border text-left transition-all relative",
                isActive
                  ? "bg-white dark:bg-zinc-900 border-amber-500/50 ring-1 ring-amber-500/20 shadow-sm"
                  : "bg-white/60 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              )}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span
                  className={cn(
                    "text-xs font-mono font-semibold px-1.5 py-0.5 rounded",
                    isActive
                      ? "bg-amber-500 text-white dark:bg-amber-500 dark:text-zinc-900"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  )}
                >
                  {step.step}
                </span>
                {isPast && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
              </div>
              <span
                className={cn(
                  "text-xs font-medium line-clamp-1",
                  isActive
                    ? "text-zinc-900 dark:text-zinc-100 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400"
                )}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Container */}
      {activeStep && (
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 transition-all">
          <div className="flex items-start justify-between flex-wrap gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
            <div>
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-1">
                STAGE {activeStep.step} OF {steps.length.toString().padStart(2, "0")}
              </div>
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                {activeStep.title}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-2.5 py-1 rounded text-xs font-mono border border-zinc-200 dark:border-zinc-800 disabled:opacity-30 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Prev
              </button>
              <button
                type="button"
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-2.5 py-1 rounded text-xs font-mono border border-zinc-200 dark:border-zinc-800 disabled:opacity-30 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {activeStep.description}
            </p>

            {activeStep.technicalDetails && activeStep.technicalDetails.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Technical Components & Invariants:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.technicalDetails.map((detail) => (
                    <span
                      key={detail}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
