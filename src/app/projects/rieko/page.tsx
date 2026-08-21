import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArchitectureFlow } from "@/components/projects/architecture-flow";
import { ProjectJsonLd } from "@/components/seo/json-ld";
import { projects } from "@/data/projects";
import {
  ShieldAlert,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  Lock,
  Database,
  Terminal,
  ExternalLink,
  Github,
  AlertTriangle,
  FileCode,
  Workflow,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rieko | Bitcoin & Lightning Operational Intelligence Engine",
  description:
    "Operational intelligence engine for Bitcoin and Lightning infrastructure written in Rust. Features deterministic detectors, typed findings, what-if simulations, and human-in-the-loop safety.",
};

export default function RiekoPage() {
  const project = projects.find((p) => p.slug === "rieko")!;

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <ProjectJsonLd
        name="Rieko"
        description={project.summary}
        url="https://comwanga.github.io/projects/rieko"
        codeRepository={project.repo}
      />

      {/* Header */}
      <Container size="lg">
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center gap-2">
            <Link
              href="/projects"
              className="text-xs font-mono text-zinc-500 hover:text-amber-500 transition-colors"
            >
              ← All Projects
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <Badge variant="bitcoin">Flagship Technical Project</Badge>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Rieko
            </h1>
            <p className="text-lg sm:text-xl font-medium text-amber-600 dark:text-amber-400">
              {project.tagline}
            </p>
          </div>

          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.summary}
          </p>

          {/* Quick links & Repo */}
          <div className="flex items-center flex-wrap gap-3 pt-2">
            <Button variant="bitcoin" size="md" href={project.repo} external>
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </Button>
            <Button
              variant="outline"
              size="md"
              href="https://github.com/comwanga/rieko/blob/main/docs/adrs/0005-v2-deterministic-simulation.md"
              external
            >
              <FileCode className="w-4 h-4" />
              <span>Simulation ADR Spec</span>
            </Button>
          </div>

          {/* Core Philosophy Box */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 p-5 space-y-1.5">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Core Operational Thesis</span>
            </div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              &quot;Rieko helps Bitcoin and Lightning operators understand what is happening, why it matters, and what actions they should consider—deterministically, safely, and without blind automation.&quot;
            </p>
          </div>
        </div>
      </Container>

      {/* Problem & Approach */}
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              <AlertTriangle className="w-4 h-4" />
              <span>The Operational Problem</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Telemetry Volume vs. Actionable Signal
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Operating Bitcoin Core and LND nodes generates massive streams of telemetry: channel capacities, HTLC forwarding events, peer disconnections, and dynamic fee fluctuations. 
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Operators face two failure modes: drowning in noisy dashboards without clear root-cause context, or relying on black-box automated rebalancing scripts that execute dangerous, costly mutations against live channels without deterministic simulation.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Rieko Approach</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Typed Pipeline & Mathematical Projections
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Rieko structures node management as an immutable intelligence pipeline. Raw REST/RPC events are normalized into domain models, mapped onto a typed routing graph, and evaluated by deterministic detectors.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Instead of unverified rebalancing, Rieko v2 computes deterministic what-if simulations: projecting the exact mathematical outcome of a liquidity transfer against a historical snapshot with zero node contact.
            </p>
          </div>
        </div>
      </Container>

      {/* Architecture Flow Visualizer */}
      <Container size="lg">
        {project.workflow && (
          <ArchitectureFlow
            steps={project.workflow}
            title="Rieko Processing Pipeline"
            subtitle="Deterministic execution from raw LND telemetry to replayable what-if projections"
          />
        )}
      </Container>

      {/* Engineering Principles */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <ShieldAlert className="w-4 h-4" />
              <span>Design Invariants</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Engineering Principles & Safety Model
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.engineeringPrinciples.map((principle, idx) => {
              const [title, desc] = principle.split(":");
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2 shadow-sm"
                >
                  <div className="text-xs font-mono font-semibold text-amber-500">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {desc || title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Crate Architecture Breakdown */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Layers className="w-4 h-4" />
              <span>Rust Workspace Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Modular Kernel & Engine Crates
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Organized into clear domain layers ensuring pure mathematical logic is decoupled from side effects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.crates?.map((crate) => (
              <div
                key={crate.name}
                className="flex items-start justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {crate.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                      {crate.layer}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {crate.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Deterministic Simulation & Storage Specs */}
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Cpu className="w-4 h-4" />
              <span>v2 Deterministic Simulation</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Pure Liquidity Redistribution Model
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every simulation is bound to exact source and destination channel snapshots observed at runtime. Replaying with identical inputs generates the same cryptographic SHA-256 fingerprint.
            </p>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Projections compute baselines, deltas, assumptions, and confidence bounds.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Rate-limited to 5 requests/sec to prevent local compute exhaustion.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Contains explicit safety statement guaranteeing zero mutation.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Database className="w-4 h-4" />
              <span>Persistence & Storage Safety</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Single-Writer WAL Architecture
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Rieko uses an embedded SQLite database versioned transactionally with automatic schema upgrades. Readers query concurrently while a single monitor thread holds write authority.
            </p>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>WAL mode with synchronous=NORMAL and finite busy timeouts.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Append-only audit trail enforced by database triggers.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Status queries execute in O(1) time without full table scans.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
