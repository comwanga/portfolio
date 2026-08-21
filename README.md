# Collins Mwanga (comwanga) - Personal Portfolio

Production-quality personal portfolio website presenting **Collins Mwanga (`comwanga`)** as a **Bitcoin and Open-Source Developer** with practical experience across Bitcoin/Lightning infrastructure, protocol engineering, municipal operations platforms, open-source contributions (BTCPay Server), and technical Swahili Bitcoin education.

Built entirely in **TypeScript** using **Next.js App Router**, **Tailwind CSS**, and **Vitest**.

---

## 🏛️ Flagship Work & Systems

1. **[Rieko](https://github.com/comwanga/rieko)** (`/projects/rieko`)
   - *Operational intelligence engine for Bitcoin and Lightning infrastructure.*
   - Ingests telemetry from Bitcoin Core and LND into a typed graph, evaluates deterministic detectors (liquidity bounds & drift trends), and generates replayable what-if liquidity redistribution simulations.
   - Built with Rust, Tokio, Axum, and SQLite (WAL single-writer model) with zero live node mutation.

2. **[MazingiraOps](https://github.com/comwanga/mazingiraops)** (`/projects/mazingiraops`)
   - *Multi-ward environment operations platform.*
   - Transitioned municipal field operations from unverified paper sign-in sheets to QR attendance, multi-role RBAC, private S3 evidence photos, supervisor approval state machines, and immutable PDF/CSV report generation across Makina Ward → Kibra Subcounty → Nairobi City County.
   - Monorepo built with Next.js, NestJS + Fastify, PostgreSQL (Prisma), Docker, and Railway.

3. **[BitScope](https://github.com/comwanga/BitScope)** (`/projects/bitscope`)
   - *Reproducible Bitcoin protocol laboratory backed by a real Bitcoin Core node.*
   - Constructed for hands-on protocol experimentation: RBF fee bumping, CPFP child spends, BIP-174 PSBT multisig signing, CLTV/CSV timelocks, output descriptors, and Taproot script trees on regtest. Produces deterministic SHA-256 proof bundles.

4. **[BTCPay Server Open-Source Contributions](https://github.com/btcpayserver/btcpayserver)** (`/open-source`)
   - Progression through documentation auditing, broken sidebar triage (PR #1621), bug reproduction, complete Swahili UI localization (PR #76, PR #91), and ongoing transition into C# backend plugins and daemons.

5. **[Mastering Bitcoin Swahili Translation](https://github.com/bitcoinbook/bitcoinbook/issues/1221)** (`/bitcoin-swahili`)
   - Formal initiative to translate Andreas Antonopoulos & David Harding's *Mastering Bitcoin (3rd Edition)* into Kiswahili to bridge the technical protocol language barrier for 200M+ East Africans.

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS with custom technical palette & dark/light theme support
- **Icons:** Lucide React
- **Validation:** Zod (for external GitHub API data)
- **SEO:** Next.js Metadata API, JSON-LD structured data (`Person`, `SoftwareSourceCode`), `sitemap.ts`, `robots.ts`
- **Testing:** Vitest, React Testing Library, JSDOM
- **CI/CD:** GitHub Actions

### Directory Layout

```text
portfolio/
├── .github/workflows/ci.yml       # GitHub Actions CI workflow
├── src/
│   ├── app/                       # Next.js App Router routes
│   │   ├── layout.tsx             # Root layout with metadata & theme provider
│   │   ├── page.tsx               # Homepage (Hero, Selected Work, Skills)
│   │   ├── projects/              # Projects catalog and deep dives
│   │   │   ├── page.tsx           # All projects index
│   │   │   ├── rieko/page.tsx     # Rieko flagship deep dive
│   │   │   ├── mazingiraops/page.tsx # MazingiraOps operational deep dive
│   │   │   └── bitscope/page.tsx  # BitScope protocol lab deep dive
│   │   ├── open-source/page.tsx   # BTCPay Server contribution roadmap & PRs
│   │   ├── bitcoin-swahili/page.tsx # Swahili Bitcoin translation & education
│   │   ├── about/page.tsx         # Engineering narrative & current focus
│   │   ├── contact/page.tsx       # Verified direct contact channels
│   │   ├── robots.ts              # Search engine crawler policies
│   │   ├── sitemap.ts             # Dynamic XML sitemap generator
│   │   └── not-found.tsx          # Custom 404 page
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, ThemeToggle
│   │   ├── ui/                    # Button, Card, Badge, Container
│   │   ├── projects/              # ArchitectureFlow visualizer, ProjectCard
│   │   ├── github/                # ContributionCard
│   │   └── seo/                   # JSON-LD schema components
│   ├── data/                      # Strongly-typed registries (projects, open-source, skills)
│   ├── lib/                       # GitHub API fetcher with Zod schemas & utils
│   └── styles/                    # Global Tailwind CSS and theme tokens
├── tests/                         # Vitest unit & invariant tests
└── tsconfig.json
```

---

## 🚀 Local Development Setup

### Prerequisites

- **Node.js**: v20+ or v24+
- **npm**: v10+

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/comwanga/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

The portfolio is designed to be fully functional without external secrets.

| Variable | Required | Description |
| :--- | :--- | :--- |
| `GITHUB_TOKEN` | Optional | Personal GitHub Access Token to avoid GitHub API rate limits during live fetches. If absent, the application gracefully uses verified static cache data. |

---

## 🧪 Verification & Testing

Run all quality gates locally before pushing:

```bash
# TypeScript typechecking
npm run typecheck

# ESLint validation
npm run lint

# Automated unit & data invariant tests
npm test

# Production build validation
npm run build
```

---

## 🚢 Deployment

The portfolio is optimized for zero-config deployment on **Vercel** or **GitHub Pages**:

### Vercel Deployment

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Click **Deploy**.

---

## 📄 License

MIT License. Designed and built by **Collins Mwanga (`comwanga`)**.
