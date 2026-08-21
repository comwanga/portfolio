export interface ArchitectureStep {
  step: string;
  title: string;
  description: string;
  technicalDetails?: string[];
}

export interface CrateInfo {
  name: string;
  layer: "Kernel" | "Engine" | "Ingest" | "Persistence" | "Interface" | "Future";
  description: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "demo" | "docs" | "proposal";
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: "Bitcoin Infrastructure" | "Operational Systems" | "Protocol Laboratory" | "Decentralized Systems" | "Bitcoin Education";
  status: "Active Production" | "Active Research & Development" | "Production-Ready Open Source" | "Completed Lab";
  featured: boolean;
  order: number;
  repo: string;
  demoUrl?: string;
  technologies: string[];
  highlights: string[];
  problemStatement: string;
  solutionApproach: string;
  engineeringPrinciples: string[];
  workflow?: ArchitectureStep[];
  crates?: CrateInfo[];
  securityAndSafety?: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "rieko",
    name: "Rieko",
    tagline: "Operational intelligence engine for Bitcoin and Lightning infrastructure",
    summary:
      "A deterministic systems engine written in Rust that ingests live telemetry from Bitcoin Core and LND, builds an in-memory graph, evaluates typed detectors, generates prioritized operational recommendations, and executes deterministic what-if simulations.",
    category: "Bitcoin Infrastructure",
    status: "Active Research & Development",
    featured: true,
    order: 1,
    repo: "https://github.com/comwanga/rieko",
    technologies: [
      "Rust (1.80+)",
      "Tokio / Axum",
      "SQLite (WAL Mode)",
      "LND REST API",
      "Bitcoin Core RPC",
      "TypeScript",
      "Next.js",
      "Zod",
    ],
    highlights: [
      "Deterministic detectors with stable SHA-256 identities and zero replay duplication",
      "Pure what-if simulation engine projecting liquidity redistribution without mutating node state",
      "LLM explanations are strictly decoupled and never part of the core detection loop",
      "Single-writer SQLite operational model with append-only trigger-enforced audit logging",
      "Read-only by default with strict human-in-the-loop interlocks preventing accidental mutation",
      "300+ automated unit, integration, and release E2E tests validating zero-mutation safety",
    ],
    problemStatement:
      "Operating production Bitcoin and Lightning infrastructure generates massive streams of low-level telemetry—channel balances, HTLC forwarding events, peer connection churn, and fee dynamics. Operators struggle to distinguish normal routing fluctuations from critical operational degradation, and evaluating rebalancing actions often risks unexpected node state mutation.",
    solutionApproach:
      "Rieko introduces a deterministic pipeline: raw LND and Bitcoin Core data is ingested and normalized into strongly typed domain objects, mapped into an in-memory graph, evaluated by deterministic detectors (liquidity starvation and drift trends), converted into typed recommendations, and modeled through local replayable simulations before any operator action is contemplated.",
    engineeringPrinciples: [
      "Deterministic Detection: Every finding has a stable identity derived from canonical evidence. Replaying a snapshot produces zero duplicate alerts.",
      "Typed Operational Evidence: Findings and recommendations are typed Rust structs with strictly validated invariants.",
      "Decoupled LLM Layer: Language models provide optional human-readable summaries; they never participate in threshold evaluation or detector decisions.",
      "Zero Node Mutation: The simulation subsystem produces local projections only. Simulation routes cannot contact or mutate a live node.",
      "Single-Writer WAL Persistence: SQLite runs in WAL mode with synchronous=NORMAL. Monitor locks prevent dual writers while enabling concurrent read-only queries.",
      "Append-Only Auditability: State changes and simulation projections are recorded into an append-only audit trail enforced by database triggers.",
    ],
    workflow: [
      {
        step: "01",
        title: "Ingestion & Normalization",
        description: "Pulls channel, peer, and forwarding telemetry via LND REST or Bitcoin Core RPC normalizers into canonical domain models.",
        technicalDetails: ["rieko-ingest-lnd", "rieko-ingest-core", "rieko-domain"],
      },
      {
        step: "02",
        title: "Graph Construction",
        description: "Constructs a typed in-memory network graph tracking channel capacities, fee policies, directional liquidity, and routing paths.",
        technicalDetails: ["rieko-graph", "Directional edge indexing", "O(V+E) path evaluation"],
      },
      {
        step: "03",
        title: "Deterministic Detectors",
        description: "Evaluates channel liquidity bounds and drift trends over historical snapshots, emitting typed findings with SHA-256 fingerprints.",
        technicalDetails: ["rieko-detectors", "channel_liquidity detector", "liquidity_trend detector"],
      },
      {
        step: "04",
        title: "Recommendations & Simulations",
        description: "Transforms findings into prioritized action plans. Simulates liquidity redistribution scenarios deterministically against snapshot baselines.",
        technicalDetails: ["rieko-recommendations", "rieko-simulation (pure kernel)", "5 req/sec rate limit"],
      },
      {
        step: "05",
        title: "Alerts & Human-in-the-Loop Review",
        description: "Dispatches deduplicated notifications with persistent cooldowns. Exposes telemetry and projections to the operator via Axum REST API and UI.",
        technicalDetails: ["rieko-alerts", "Telegram rate-cooldown", "Embedded Axum web interface"],
      },
    ],
    crates: [
      { name: "rieko-domain", layer: "Kernel", description: "Core domain primitives, channel models, and balance types" },
      { name: "rieko-graph", layer: "Kernel", description: "Typed Lightning topology graph with path-finding algorithms" },
      { name: "rieko-simulation", layer: "Kernel", description: "Pure mathematical simulation models for liquidity redistribution" },
      { name: "rieko-storage", layer: "Persistence", description: "SQLite WAL backend, transaction management, and migrations" },
      { name: "rieko-findings", layer: "Engine", description: "Typed findings, recommendation schemas, and fingerprinting" },
      { name: "rieko-detectors", layer: "Engine", description: "Deterministic liquidity and drift detection algorithms" },
      { name: "rieko-recommendations", layer: "Engine", description: "Finding-to-recommendation mapping and prioritization" },
      { name: "rieko-simulation-app", layer: "Engine", description: "Simulation orchestration, projection comparisons, and reporting" },
      { name: "rieko-alerts", layer: "Engine", description: "Alert deduplication, persistent cooldowns, and Telegram dispatcher" },
      { name: "rieko-llm", layer: "Engine", description: "Optional OpenAI/Groq client for plain-language evidence explanation" },
      { name: "rieko-status", layer: "Engine", description: "O(1) system health assessment and node connectivity status" },
      { name: "rieko-ingest-lnd", layer: "Ingest", description: "LND REST client, macaroon authentication, and data normalizer" },
      { name: "rieko-ingest-core", layer: "Ingest", description: "Bitcoin Core RPC client and mempool/block normalizer" },
      { name: "rieko-api", layer: "Interface", description: "axum HTTP API routes, middleware, and embedded frontend delivery" },
      { name: "rieko-cli", layer: "Interface", description: "Command-line interface entrypoint for scan, monitor, and simulations" },
      { name: "rieko-execution", layer: "Future", description: "Feature-gated node mutation module with strict runtime interlocks" },
    ],
    securityAndSafety: [
      "All simulation endpoints (/api/v2/simulations) are mathematically isolated and cannot issue network commands or sign transactions.",
      "Live execution code is gated behind Cargo `--features execute` and interlocked at runtime.",
      "Non-loopback network listening requires explicit `--allow-external` flag and a cryptographically verified token file.",
      "Payload sizes are capped at 1 MB, and query pagination is strictly bounded between 1 and 500 records.",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/comwanga/rieko", type: "github" },
      { label: "Deterministic Simulation ADR", url: "https://github.com/comwanga/rieko/blob/main/docs/adrs/0005-v2-deterministic-simulation.md", type: "docs" },
      { label: "Execution Safety ADR", url: "https://github.com/comwanga/rieko/blob/main/docs/adrs/0002-rebalance-execution-safety.md", type: "docs" },
    ],
  },
  {
    slug: "mazingiraops",
    name: "MazingiraOps",
    tagline: "Multi-ward environment operations platform",
    summary:
      "A multi-tenant operational platform engineered to digitize municipal sanitation and environmental management from Makina Ward to Kibra Subcounty and Nairobi City County. Features QR attendance, leave approval workflows, field work evidence, and immutable reporting.",
    category: "Operational Systems",
    status: "Active Production",
    featured: true,
    order: 2,
    repo: "https://github.com/comwanga/mazingiraops",
    technologies: [
      "TypeScript",
      "Next.js (App Router)",
      "NestJS + Fastify",
      "PostgreSQL (Prisma)",
      "Zod",
      "S3 Object Storage",
      "Docker",
      "Railway",
    ],
    highlights: [
      "Transitioned municipal workflows from unverified paper rosters to cryptographic QR check-ins",
      "Default-deny tenant isolation enforced server-side across staff, attendance, logs, and reports",
      "Private S3 object storage with scoped access control for sensitive field and medical evidence",
      "Deterministic aggregation engine generating immutable daily, weekly, and monthly reports",
      "Multi-role RBAC: System Admin, Ward Officer, Subcounty Reviewer, HR Viewer, Read-Only",
      "Production deployment on Railway with continuous migration, health readiness, and automated backup drills",
    ],
    problemStatement:
      "Municipal field operations across informal settlements and urban wards suffered from severe record fragmentation: manual paper sign-in sheets led to ghost workers, absence and sick leaves had no verifiable audit trail, road cleanup documentation was lost in chat apps, and compiling weekly subcounty reports took days of manual reconciliation.",
    solutionApproach:
      "MazingiraOps implements a structured digital pipeline designed for field conditions: roster management with Excel/CSV bulk import, daily expiring QR check-ins with anti-duplicate validation, verified work logs with multi-photo evidence (before/during/after), supervisor approval chains, and automated generation of immutable PDF and CSV reports.",
    engineeringPrinciples: [
      "Tenant Isolation: Multi-ward data boundaries are enforced at the database and service layer, ensuring subcounties only access authorized ward records.",
      "Deterministic Reporting: Finalized reports are cryptographically snapshotted and retained independently of later changes to underlying records.",
      "Evidence Security: Field photos, sick sheets, and medical certificates are stored in private S3 buckets and streamed exclusively via authorized signed routes.",
      "Audit Trail Integrity: Every administrative change, approval, rejection, and report export generates an append-only audit event.",
      "Production Hardening: Session cookies use strict SameSite flags, password hashing uses scrypt, and formula injection vulnerabilities are neutralized during CSV exports.",
    ],
    workflow: [
      {
        step: "01",
        title: "Staff & Roster Ingestion",
        description: "Imports and validates 11-digit year-prefixed Employee IDs via Excel/CSV rosters, updating records without deleting historical data.",
        technicalDetails: ["Roster reconciliation", "Unique ID constraints", "Deactivation/Reactivation"],
      },
      {
        step: "02",
        title: "Expiring QR Attendance",
        description: "Generates daily time-bounded QR sessions for field check-in with GPS verification, duplicate prevention, and late classification.",
        technicalDetails: ["Expiring token sessions", "Audited manual exceptions", "Daily attendance sheets"],
      },
      {
        step: "03",
        title: "Field Work & Photo Evidence",
        description: "Field officers capture daily road/area work logs with staff counts, waste volumes, challenges, and up to 12 photo evidence items.",
        technicalDetails: ["Private S3 storage", "Before/During/After stages", "Upload size/MIME validation"],
      },
      {
        step: "04",
        title: "Review & Approval Chains",
        description: "Ward supervisors and subcounty officers review submitted work logs and leave applications before inclusion in official county reporting.",
        technicalDetails: ["Two-tier approval state machine", "Audit log entries", "HR sick-off verification"],
      },
      {
        step: "05",
        title: "Immutable Report Finalization",
        description: "Aggregates verified operational data into deterministic PDF print layouts and CSV archives ready for administrative appraisals.",
        technicalDetails: ["Snapshot archiving", "Formula-injection escaping", "Appraisal-ready export"],
      },
    ],
    securityAndSafety: [
      "Complies with Kenya Data Protection Act operational principles: medical records restricted to authorized HR viewers.",
      "Production container startup enforces SECURE_COOKIES=true and verified S3 configuration, failing closed on misconfiguration.",
      "Rate-limited login and QR check-in verification endpoints protect against credential brute-forcing.",
      "Read-only benchmark accounts are structurally barred from modifying or exporting operational data.",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/comwanga/mazingiraops", type: "github" },
      { label: "Architecture Spec", url: "https://github.com/comwanga/mazingiraops/blob/main/docs/ARCHITECTURE.md", type: "docs" },
      { label: "Authorization Model", url: "https://github.com/comwanga/mazingiraops/blob/main/docs/AUTHORIZATION_MODEL.md", type: "docs" },
    ],
  },
  {
    slug: "bitscope",
    name: "BitScope",
    tagline: "Reproducible Bitcoin protocol laboratory backed by a real Bitcoin Core node",
    summary:
      "An educational and experimental protocol workbench that constructs, executes, attacks, and verifies Bitcoin transactions against a live local Bitcoin Core node on regtest, producing deterministic cryptographic evidence bundles.",
    category: "Protocol Laboratory",
    status: "Completed Lab",
    featured: true,
    order: 3,
    repo: "https://github.com/comwanga/BitScope",
    demoUrl: "https://comwanga.github.io/BitScope/",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Bitcoin Core (regtest)",
      "JSON-RPC",
      "Docker Compose",
    ],
    highlights: [
      "Zero reliance on third-party block explorers; all state is verified against a live local Bitcoin Core node",
      "Hands-on experiments for RBF fee bumping, CPFP child spends, PSBT multisig signing, and Taproot scripts",
      "Deterministic proof bundle exports containing raw JSON-RPC queries, block receipts, and mempool proofs",
      "Strict safety model: Mainnet read-only default, zero private key generation on client, local token authentication",
      "Curriculum map covering Bitcoin protocol concepts from base transaction serialization to script execution",
    ],
    problemStatement:
      "Learning Bitcoin protocol mechanics solely through theoretical documentation or hosted block explorers obscures the actual behavior of Bitcoin Core validation rules, mempool replacement policies, transaction serialization, and script execution.",
    solutionApproach:
      "BitScope provides a controlled, local-first experimental environment. Learners construct raw transactions, submit them to a live regtest Bitcoin Core node, inspect mempool acceptance or rejection errors, simulate attack scenarios (e.g. double spends, timelock violations), and export complete, deterministic evidence archives.",
    engineeringPrinciples: [
      "Truth at the Node: Every transaction status, fee estimate, and script evaluation is derived directly from Bitcoin Core JSON-RPC.",
      "Deterministic Proof Archives: Lab runs generate downloadable proof bundles with exact inputs, raw tx hex, RPC responses, and mined block headers.",
      "Local-First Security: Spending, mining, and broadcast workflows require a local access token and are restricted to regtest environments.",
      "No Blind Trust: BitScope explicitly surfaces node limitations (e.g., lack of address indexing without wallet context or txindex).",
    ],
    workflow: [
      {
        step: "01",
        title: "Scenario Definition",
        description: "Selects an educational protocol scenario: RBF replacement, CPFP child spend, 2-of-3 PSBT multisig, or Taproot key path.",
        technicalDetails: ["Scenario catalog", "Regtest wallet funding", "Initial UTXO generation"],
      },
      {
        step: "02",
        title: "Raw Transaction Construction",
        description: "Builds inputs, outputs, locktimes, and witness data using exact Bitcoin wire format serialization and descriptor templates.",
        technicalDetails: ["BIP-174 PSBT", "Miniscript / Descriptors", "Taproot leaf trees"],
      },
      {
        step: "03",
        title: "Node Submission & Validation",
        description: "Submits raw transaction hex via testmempoolaccept or sendrawtransaction to observe Core's exact validation response.",
        technicalDetails: ["Bitcoin Core JSON-RPC", "Mempool policy checks", "BIP-125 RBF rules"],
      },
      {
        step: "04",
        title: "Edge Case & Attack Simulation",
        description: "Intentionally triggers invalid scripts, expired timelocks, insufficient fees, or conflicting UTXO spends to inspect rejection codes.",
        technicalDetails: ["CLTV/CSV timelock tests", "Fee replacement policy", "Script evaluation errors"],
      },
      {
        step: "05",
        title: "Deterministic Proof Bundle",
        description: "Packages raw transaction hex, RPC request/response logs, mined block headers, and verification hashes into an exportable proof archive.",
        technicalDetails: ["SHA-256 evidence bundle", "JSON artifact export", "Reviewer verification"],
      },
    ],
    securityAndSafety: [
      "Mainnet is strictly read-only; wallet generation, mining, and broadcast routes are locked to regtest.",
      "Educational key workflows use public descriptors and xpubs; never asks for seed phrases, private keys, or PINs.",
      "Backend endpoints require a unique BITSCOPE_LOCAL_ACCESS_TOKEN for mutation operations.",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/comwanga/BitScope", type: "github" },
      { label: "Static Documentation Site", url: "https://comwanga.github.io/BitScope/", type: "demo" },
      { label: "Architecture Guide", url: "https://github.com/comwanga/BitScope/blob/main/docs/architecture.md", type: "docs" },
    ],
  },
  {
    slug: "sentinelmesh",
    name: "SentinelMesh",
    tagline: "Decentralized community crisis coordination & private location mesh",
    summary:
      "A decentralized emergency communication and coordination PWA built with Nostr (NIP-17 encrypted messaging, NIP-29 public channels, NIP-98 authentication), Rust Axum gateway, Redis Streams, and MapLibre cartography.",
    category: "Decentralized Systems",
    status: "Active Research & Development",
    featured: false,
    order: 4,
    repo: "https://github.com/comwanga/sentinelmesh",
    technologies: [
      "Rust (Axum)",
      "TypeScript (React + Vite)",
      "Nostr Protocol (NIP-17, NIP-29, NIP-98)",
      "PostgreSQL",
      "Redis Streams",
      "MapLibre GL",
      "Docker Compose",
    ],
    highlights: [
      "NIP-17 end-to-end encrypted direct messaging and family circle coordination",
      "Signed NIP-29 public community channels with cryptographic identity verification",
      "Epoch-based location sharing with instant consent revocation",
      "Rust Axum API gateway with Redis Streams worker synthesis",
    ],
    problemStatement:
      "Centralized crisis communication tools are vulnerable to infrastructure shutdowns, lack cryptographic privacy guarantees, and leak precise geolocation metadata during sensitive community operations.",
    solutionApproach:
      "Combines decentralized Nostr relay architecture with coarsened geographic reporting, client-side encryption, and ephemeral location epochs to enable resilient, privacy-preserving community response.",
    engineeringPrinciples: [
      "Client-Side Cryptography: Direct messages and sensitive channel payloads are encrypted before leaving the browser.",
      "Location Coarsening: Coordinates are blurred to prevent pinpoint surveillance while retaining operational utility.",
      "Decentralized Relays: Messages propagate across independent Nostr relays with no single point of failure.",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/comwanga/sentinelmesh", type: "github" },
    ],
  },
  {
    slug: "privacy-jenga",
    name: "Privacy Jenga",
    tagline: "Interactive 3D Bitcoin privacy education game",
    summary:
      "An interactive educational experience that teaches 54 core Bitcoin privacy and operational security concepts through 3D physics tower mechanics built with React 18, Three.js, and React Three Fiber.",
    category: "Bitcoin Education",
    status: "Completed Lab",
    featured: false,
    order: 5,
    repo: "https://github.com/comwanga/Privacy-Jenga",
    demoUrl: "https://comwanga.github.io/Privacy-Jenga/",
    technologies: [
      "TypeScript",
      "React 18",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
      "Vite",
    ],
    highlights: [
      "54-block interactive 3D physics tower mapped to real Bitcoin privacy practices",
      "Covers on-chain heuristics, CoinJoin mechanics, address reuse risks, and Lightning privacy",
      "Interactive questions test learner knowledge to maintain physical tower stability",
      "Inspired by Amiti Uttarwar and D++'s educational curriculum",
    ],
    problemStatement:
      "Bitcoin privacy is often perceived as daunting and abstract, leaving beginners unaware of common heuristics (such as address reuse and change address linkage) that compromise financial sovereign privacy.",
    solutionApproach:
      "Translates complex privacy heuristics into a visceral 3D game where risky operational decisions structurally weaken the learner's tower, reinforcing privacy principles through immediate interactive feedback.",
    engineeringPrinciples: [
      "Gamified Protocol Mechanics: Every block corresponds to a verified on-chain or network-layer privacy concept.",
      "Accessible 3D Web Graphics: High-performance Three.js rendering optimized for mobile and desktop browsers.",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/comwanga/Privacy-Jenga", type: "github" },
      { label: "Play Live Game", url: "https://comwanga.github.io/Privacy-Jenga/", type: "demo" },
    ],
  },
];
