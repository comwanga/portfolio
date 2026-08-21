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
  Binary,
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
  ShieldCheck,
  FileCheck,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BitScope | Reproducible Bitcoin Protocol Laboratory",
  description:
    "Reproducible Bitcoin protocol workbench backed by a real Bitcoin Core node on regtest. Constructs, attacks, and verifies transactions producing deterministic cryptographic proof bundles.",
};

export default function BitScopePage() {
  const project = projects.find((p) => p.slug === "bitscope")!;

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <ProjectJsonLd
        name="BitScope"
        description={project.summary}
        url="https://comwanga.github.io/projects/bitscope"
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
            <Badge variant="warning">Protocol Laboratory</Badge>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              BitScope
            </h1>
            <p className="text-lg sm:text-xl font-medium text-amber-600 dark:text-amber-400">
              {project.tagline}
            </p>
          </div>

          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex items-center flex-wrap gap-3 pt-2">
            {project.demoUrl && (
              <Button variant="bitcoin" size="md" href={project.demoUrl} external>
                <span>Explore Live Lab Docs</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
            <Button variant="outline" size="md" href={project.repo} external>
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </Button>
          </div>

          {/* Headline Callout */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 p-5 space-y-1.5">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
              <Binary className="w-4 h-4" />
              <span>Pedagogical Principle</span>
            </div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              &quot;Learn Bitcoin by constructing, executing, attacking and verifying what actually happens against a real Bitcoin Core node.&quot;
            </p>
          </div>
        </div>
      </Container>

      {/* Protocol Laboratory vs Block Explorer */}
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>The Learning Gap</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Theoretical Abstraction vs. Node Reality
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Standard block explorers provide a passive view of confirmed transactions without revealing how Bitcoin Core actually enforces validation rules, rejects sub-fee replacements, executes scripts, or handles mempool churn.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Without hands-on regtest experimentation, developers struggle to understand critical protocol mechanics like BIP-125 Replace-By-Fee (RBF), CPFP child spends, PSBT multisig signing, and Taproot script-tree evaluation.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Protocol Lab Workbench</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Construct, Provoke & Verify
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              BitScope provides an active experimental harness. Users construct raw transaction hex, submit it directly to Bitcoin Core via JSON-RPC, observe exact consensus responses, and intentionally inject attack payloads (such as double spends or timelock violations).
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every completed lab run generates a deterministic proof archive bundling raw RPC receipts, mined block headers, and verification hashes.
            </p>
          </div>
        </div>
      </Container>

      {/* Lab Workflow Visualizer */}
      <Container size="lg">
        {project.workflow && (
          <ArchitectureFlow
            steps={project.workflow}
            title="BitScope Protocol Lab Lifecycle"
            subtitle="Step-by-step experiment construction, execution, attack simulation, and proof generation"
          />
        )}
      </Container>

      {/* Implemented Protocol Surfaces */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Binary className="w-4 h-4" />
              <span>Covered Mechanics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Implemented Protocol Experiments
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Verified against Bitcoin Core 28.1+ on disposable regtest datadirs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Transaction Lifecycle & RBF
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Construct unconfirmed transactions, test BIP-125 replacement rules, fee bumping, and mempool eviction policies.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                CPFP (Child-Pays-For-Parent)
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Accelerate stuck parent transactions by spending unconfirmed outputs with high fee child transactions.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                PSBT & 2-of-3 Multisig
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                BIP-174 Partially Signed Bitcoin Transactions: construct, combine, finalize, and broadcast multi-party signatures.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Timelocks (CLTV & CSV)
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Absolute (OP_CHECKLOCKTIMEVERIFY) and relative (OP_CHECKSEQUENCEVERIFY) locktimes verified through mined blocks.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Output Descriptors & Miniscript
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Structured script expressions for P2WPKH, P2WSH, and complex spending policies validated via Bitcoin Core RPC.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-2">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Taproot & Script Trees
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                BIP-341/342 Taproot spending: key-path spends with Schnorr signatures and script-path spends via MAST Merkle roots.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Proof Bundles & Safety Model */}
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <FileCheck className="w-4 h-4" />
              <span>Deterministic Proof Bundles</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Cryptographic Evidence Archives
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every completed scenario produces a verifiable proof archive containing:
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2 font-mono">
                <span className="text-amber-500 font-bold">›</span>
                <span>raw_tx.hex & transaction deserialization JSON</span>
              </li>
              <li className="flex items-center gap-2 font-mono">
                <span className="text-amber-500 font-bold">›</span>
                <span>bitcoin-cli testmempoolaccept validation response</span>
              </li>
              <li className="flex items-center gap-2 font-mono">
                <span className="text-amber-500 font-bold">›</span>
                <span>Mined block header hash & coinbase confirmation receipt</span>
              </li>
              <li className="flex items-center gap-2 font-mono">
                <span className="text-amber-500 font-bold">›</span>
                <span>SHA-256 bundle manifest verification hash</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Safety & Trust Boundaries</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Local-First Node Invariants
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              BitScope is engineered with strict safeguards to protect real funds and user privacy:
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Mainnet connections are read-only; spending/mining is locked to regtest.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Local access token required for all wallet and broadcast mutations.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">›</span>
                <span>Zero private key generation or storage; uses public descriptors only.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
