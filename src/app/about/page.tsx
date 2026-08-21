import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site-config";
import {
  Cpu,
  Terminal,
  Layers,
  Globe2,
  Github,
  Twitter,
  Mail,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Collins Mwanga",
  description:
    "Engineering background, core philosophies, and current focus areas of Collins Mwanga (comwanga).",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <Container size="lg">
        <div className="space-y-4 max-w-3xl border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Terminal className="w-4 h-4" />
            <span>Profile & Background</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            About Collins Mwanga
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Bitcoin & Open-Source Engineer based in Nairobi, Kenya. Working at the intersection of protocol engineering, deterministic operational systems, public-sector digital infrastructure, and East African technical accessibility.
          </p>
        </div>
      </Container>

      {/* Engineering Profile & Background */}
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main narrative */}
          <div className="lg:col-span-2 space-y-6 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Engineering Narrative
            </h2>
            <p>
              I build software designed to help operators, developers, and communities understand and run complex systems with clarity and confidence. My work spans the spectrum from bare-metal Bitcoin node RPC verification to full-stack multi-tenant operational platforms deployed for municipal governance.
            </p>
            <p>
              As a Bitcoin Educator & Community Developer at <strong>Bitsacco</strong> in Kenya, I combine hands-on grassroots protocol education in communities like Kibra with deep systems programming in Rust and TypeScript. I believe true sovereignty requires both deep technical verification at the node layer and accessible, localized knowledge in the languages people speak natively.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Core Engineering Tenets
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">›</span>
                  <span><strong>Deterministic Truth:</strong> Avoid fuzzy heuristics and black-box automation. Systems should provide verifiable cryptographic proofs and replayable simulations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">›</span>
                  <span><strong>Node-Level Verification:</strong> Rely on authentic Bitcoin Core and LND consensus data rather than outsourced third-party indexer APIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">›</span>
                  <span><strong>Practical Public Impact:</strong> Solve real administrative friction—such as municipal sanitation workflows in MazingiraOps—with production-hardened engineering.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-4 shadow-sm">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                Quick Facts
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div>
                  <div className="text-zinc-500">Location</div>
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200">{siteConfig.location}</div>
                </div>
                <div>
                  <div className="text-zinc-500">Current Role</div>
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200">{siteConfig.companyRole}</div>
                  <div className="text-zinc-500">{siteConfig.company}</div>
                </div>
                <div>
                  <div className="text-zinc-500">Primary Languages</div>
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200">Rust, TypeScript, C#, Python</div>
                </div>
                <div>
                  <div className="text-zinc-500">Spoken Languages</div>
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200">English, Kiswahili (Native)</div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-2">
                <Button variant="outline" size="sm" href={siteConfig.links.github} external>
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </Button>
                <Button variant="ghost" size="sm" href={siteConfig.links.twitter} external>
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Twitter / X</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Current Focus Areas */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Zap className="w-4 h-4" />
              <span>Active Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Current Focus & Active Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2 shadow-sm">
              <div className="text-xs font-mono font-semibold text-amber-500">01 / RIEKO</div>
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Rieko Intelligence Engine
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Extending Rust-based deterministic drift detectors, rate-limited simulation models, and Axum UI for Lightning node operators.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2 shadow-sm">
              <div className="text-xs font-mono font-semibold text-amber-500">02 / BTCPAY & C#</div>
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                BTCPay Server Backend
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Deepening contributions inside BTCPay Server&apos;s C# codebase, plugin architecture, and payment gateway daemon integrations.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2 shadow-sm">
              <div className="text-xs font-mono font-semibold text-amber-500">03 / SWAHILI BITCOIN</div>
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Technical Translation & Cohorts
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Advancing the Mastering Bitcoin 3rd edition Swahili translation initiative and running sovereign developer workshops across Nairobi.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
