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
  FileSpreadsheet,
  QrCode,
  ShieldCheck,
  Camera,
  Layers,
  Database,
  Lock,
  ExternalLink,
  Github,
  AlertTriangle,
  CheckCircle2,
  Server,
  Cloud,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MazingiraOps | Multi-Ward Environment Operations Platform",
  description:
    "Production operational platform for municipal sanitation across Makina Ward, Kibra Subcounty, and Nairobi City County. Features QR attendance, S3 evidence, RBAC, and immutable reporting.",
};

export default function MazingiraOpsPage() {
  const project = projects.find((p) => p.slug === "mazingiraops")!;

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <ProjectJsonLd
        name="MazingiraOps"
        description={project.summary}
        url="https://comwanga.github.io/projects/mazingiraops"
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
            <Badge variant="default">Production Operational Platform</Badge>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              MazingiraOps
            </h1>
            <p className="text-lg sm:text-xl font-medium text-amber-600 dark:text-amber-400">
              {project.tagline}
            </p>
          </div>

          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex items-center flex-wrap gap-3 pt-2">
            <Button variant="primary" size="md" href={project.repo} external>
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </Button>
            <Button
              variant="outline"
              size="md"
              href="https://github.com/comwanga/mazingiraops/blob/main/docs/ARCHITECTURE.md"
              external
            >
              <Layers className="w-4 h-4" />
              <span>Architecture Specification</span>
            </Button>
          </div>

          {/* Operational Evolution Scope Box */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#121215] p-5 space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
              <Server className="w-4 h-4 text-amber-500" />
              <span>Operational Scale & Deployment Hierarchy</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200">
              <span className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 font-semibold">Makina Ward</span>
              <span className="text-amber-500 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 font-semibold">Kibra Subcounty</span>
              <span className="text-amber-500 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">Nairobi City County</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Real-World Operational Context */}
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              <AlertTriangle className="w-4 h-4" />
              <span>The Administrative Crisis</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Manual Records & Evidence Gaps
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Municipal environmental operations across informal settlements previously depended on physical paper rosters. Sign-in sheets were prone to ghost worker entries, daily attendance lacked timestamp or GPS integrity, and work descriptions were lost in ad-hoc messaging apps.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sick-offs and leave requests had no centralized approval state machine, causing administrative delays, while quarterly county performance appraisals required days of manual reconciliation.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineering Solution</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              End-to-End Verified Workflow Platform
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              MazingiraOps digitizes the entire administrative lifecycle: bulk roster imports with 11-digit year-prefixed IDs, daily expiring QR sessions with anti-duplicate validation, and verified work logs with multi-photo evidence (Before, During, After).
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Supervisors review and approve submissions through structured state transitions, feeding an automated reporting engine that outputs deterministic, immutable PDF and CSV reports.
            </p>
          </div>
        </div>
      </Container>

      {/* Product Workflow Visualizer */}
      <Container size="lg">
        {project.workflow && (
          <ArchitectureFlow
            steps={project.workflow}
            title="Operational Lifecycle Workflow"
            subtitle="From field roster ingestion to immutable municipal appraisal archives"
          />
        )}
      </Container>

      {/* Engineering Highlights & Pillars */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>System Hardening</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Security, Tenant Isolation & Privacy Invariants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-500 font-mono text-xs font-semibold">
                <Lock className="w-4 h-4" />
                <span>Multi-Role RBAC & Tenants</span>
              </div>
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Default-Deny Scoping
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Roles include System Admin, Ward Officer, Subcounty Reviewer, HR Viewer, and Read-Only. Default-deny tenant isolation is enforced at database queries and service boundaries.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-500 font-mono text-xs font-semibold">
                <Cloud className="w-4 h-4" />
                <span>Private Object Storage</span>
              </div>
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                S3 & Scoped Evidence
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Field photos, sick sheets, and medical certificates are stored in private S3 buckets and streamed exclusively via authorized signed routes. Medical files are restricted to HR viewers.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-500 font-mono text-xs font-semibold">
                <FileCheck className="w-4 h-4" />
                <span>Immutable Reporting</span>
              </div>
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Appraisal Snapshots
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Finalized reports are frozen as immutable snapshots unaffected by subsequent record edits. Spreadsheets are sanitized against CSV formula injection vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Monorepo Architecture & Stack */}
      <Container size="lg">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#121215] p-6 lg:p-8 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Monorepo Layout & Technologies
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              pnpm Monorepo Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] space-y-1">
              <div className="text-amber-500 font-semibold">apps/web</div>
              <div className="text-zinc-700 dark:text-zinc-300">Next.js App Router, React, Tailwind CSS</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] space-y-1">
              <div className="text-amber-500 font-semibold">apps/api</div>
              <div className="text-zinc-700 dark:text-zinc-300">NestJS + Fastify, TypeScript API Gateway</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] space-y-1">
              <div className="text-amber-500 font-semibold">packages/database</div>
              <div className="text-zinc-700 dark:text-zinc-300">PostgreSQL, Prisma schema & migrations</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] space-y-1">
              <div className="text-amber-500 font-semibold">packages/contracts</div>
              <div className="text-zinc-700 dark:text-zinc-300">Shared domain enums and API contracts</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] space-y-1">
              <div className="text-amber-500 font-semibold">packages/validation</div>
              <div className="text-zinc-700 dark:text-zinc-300">Shared Zod schemas for forms and APIs</div>
            </div>
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] space-y-1">
              <div className="text-amber-500 font-semibold">infrastructure/</div>
              <div className="text-zinc-700 dark:text-zinc-300">Docker containerization & Railway deployment</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
