import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContributionCard } from "@/components/github/contribution-card";
import {
  openSourceContributions,
  contributionProgression,
} from "@/data/open-source";
import {
  Github,
  GitPullRequest,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Open Source Contributions | BTCPay Server & Bitcoin Ecosystem",
  description:
    "Open-source contributions across BTCPay Server documentation, bug triage, Swahili localization, and Bitcoin protocol toolings by Collins Mwanga.",
};

export default function OpenSourcePage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <Container size="lg">
        <div className="space-y-4 max-w-3xl border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Github className="w-4 h-4" />
            <span>Open Source Development</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Open-Source Contributions
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Collaborating inside mature, production Bitcoin open-source ecosystems. Tracking documentation auditing, issue triage, Swahili localization, and deepening C#/.NET backend contributions.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="bitcoin"
              size="sm"
              href="https://github.com/comwanga"
              external
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              href="https://github.com/btcpayserver/btcpayserver"
              external
            >
              <span>BTCPay Server Org</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Contribution Progression Roadmap */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Layers className="w-4 h-4" />
              <span>Contribution Progression</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Progression Path into Core Bitcoin Software
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A deliberate learning trajectory from documentation navigation to deep backend protocol development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributionProgression.map((item) => (
              <div
                key={item.phase}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      {item.phase}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        item.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                          : item.status === "Active"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border-zinc-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      Verified Evidence:
                    </div>
                    <ul className="space-y-1">
                      {item.evidence.map((ev, idx) => (
                        <li
                          key={idx}
                          className="text-xs font-mono text-zinc-700 dark:text-zinc-300 flex items-start gap-1.5"
                        >
                          <span className="text-amber-500">›</span>
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Verified GitHub Contributions List */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <GitPullRequest className="w-4 h-4" />
              <span>Verified Records</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Pull Requests, Issues & Ecosystem Proposals
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Real contribution records across BTCPay Server, Mastering Bitcoin, and Btrust Builders repositories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openSourceContributions.map((item) => (
              <ContributionCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>

      {/* Future Ecosystem Contributions */}
      <Container size="lg">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#121215] p-6 lg:p-8 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Expansion Roadmap
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Targeted Bitcoin Ecosystem Projects
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Designed to grow continuously with ongoing contributions across core protocol repositories:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs pt-2">
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e]">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">BTCPay Server</div>
              <div className="text-zinc-500 mt-1">C# / ASP.NET plugins & checkout daemon</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e]">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">LDK (Rust)</div>
              <div className="text-zinc-500 mt-1">Lightning node daemon interfaces & gateways</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e]">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">rust-bitcoin</div>
              <div className="text-zinc-500 mt-1">Protocol primitives, PSBT & descriptor tests</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e]">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">Bitcoin Core</div>
              <div className="text-zinc-500 mt-1">RPC test harnesses & regtest documentation</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
