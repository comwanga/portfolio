export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillCategory {
  domain: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    domain: "Bitcoin & Lightning Protocol",
    description: "Protocol mechanics, node RPC interfaces, transaction lifecycle, and Lightning infrastructure.",
    skills: [
      { name: "Bitcoin Core (RPC & Regtest)", context: "Direct node integration, regtest test harnesses, mempool policies" },
      { name: "Lightning Network & LND", context: "Channel balancing, HTLC telemetry, node monitoring, REST/gRPC" },
      { name: "PSBT & Multisig", context: "BIP-174 partial transactions, multi-party threshold schemes" },
      { name: "Descriptors & Taproot", context: "Output descriptors, Miniscript, key-path and script-path spending" },
      { name: "Transaction Lifecycle", context: "RBF fee-bumping, CPFP child spends, CLTV/CSV timelocks" },
      { name: "Nostr Protocol", context: "NIP-17 encrypted messaging, NIP-29 public channels, NIP-98 auth" },
    ],
  },
  {
    domain: "Systems & Deterministic Architecture",
    description: "High-integrity systems development, concurrent processing, and mathematical projections.",
    skills: [
      { name: "Rust (Async / Tokio / Axum)", context: "Kernel domain modeling, thread-safe graphs, memory safety" },
      { name: "Deterministic Engines", context: "Stable SHA-256 fingerprinting, replayable what-if simulations" },
      { name: "SQLite (WAL Mode)", context: "Single-writer lock, transactional migrations, trigger-enforced audit trails" },
      { name: "Observability & Telemetry", context: "Structured logging, O(1) health checks, metrics normalization" },
    ],
  },
  {
    domain: "Product & Application Engineering",
    description: "Full-stack web applications, tenant boundaries, and operational administrative software.",
    skills: [
      { name: "TypeScript (Strict Mode)", context: "End-to-end type safety, Zod validation, shared monorepo contracts" },
      { name: "Next.js (App Router) & React", context: "Server Components, streaming, responsive accessible UI" },
      { name: "PostgreSQL & Prisma", context: "Relational schema design, migrations, indexing, tenant filtering" },
      { name: "Multi-Role Authorization", context: "RBAC state machines, server-side session management, CSRF defense" },
      { name: "Deployment & Infrastructure", context: "Docker containers, Railway, S3 object storage integration" },
    ],
  },
  {
    domain: "Open Source & Collaboration",
    description: "Contribution lifecycle inside distributed production codebases and developer communities.",
    skills: [
      { name: "Git & GitHub Workflows", context: "Issue reproduction, structured PRs, branch management, CI/CD" },
      { name: "Issue Triage & Testing", context: "Identifying regression bugs, CI script fixes, reproducible evidence" },
      { name: "Localization (i18n)", context: "Swahili translation packs, technical lexicons, translator tooling" },
      { name: "Technical Documentation", context: "Architecture specs, ADRs (Architecture Decision Records), guides" },
    ],
  },
  {
    domain: "Active Growth Areas",
    description: "Technologies under active study and practical expansion.",
    skills: [
      { name: "C# / .NET & ASP.NET Core", context: "Deepening contributions into BTCPay Server backend plugins and daemons" },
      { name: "LDK (Lightning Development Kit)", context: "Building custom lightweight Lightning node gateways and interfaces" },
    ],
  },
];
