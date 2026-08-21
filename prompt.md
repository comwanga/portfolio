Build a **professional, production-quality personal portfolio website using TypeScript only**. The portfolio should present me primarily as a **Bitcoin/Open-Source/Systems-focused builder** with strong experience in operational software, developer tooling, public-sector systems, and Bitcoin education.

The portfolio must focus on the following work:

1. **Rieko**

   * Operational intelligence engine for Bitcoin and Lightning infrastructure.
   * Position it as my flagship technical project.
   * Emphasize deterministic detection, typed findings, recommendations, simulations, operational evidence, node telemetry, Bitcoin Core/LND integration, Rust systems architecture, and human-in-the-loop safety.
   * Do not market it as a generic “AI-powered dashboard.”
   * Core message:
     **Rieko helps Bitcoin and Lightning operators understand what is happening, why it matters, and what actions they should consider.**

2. **MazingiraOps**

   * Multi-ward environment operations platform.
   * Present it as a real-world operational/product engineering project.
   * Highlight staff management, QR attendance, Excel/CSV roster import, leave and sick-off workflows, field work evidence, reporting, approval chains, multi-role authorization, immutable reports, auditing, and deployment.
   * Emphasize its evolution from ward-level operations toward subcounty/county-level operational management.
   * Focus on solving real administrative workflow problems rather than presenting it as a generic CRUD application.

3. **BitScope**

   * Reproducible Bitcoin protocol laboratory backed by a real Bitcoin Core node.
   * Highlight transaction lifecycle experiments, RBF, CPFP, PSBT, multisig, timelocks, descriptors, Taproot, scripts, mempool behaviour, regtest, deterministic evidence bundles, and live Bitcoin Core verification.
   * Position BitScope as evidence of deep Bitcoin protocol learning and engineering.
   * Make clear that it is educational and experimental infrastructure, not a wallet or production custody system.

4. **BTCPay Server Open-Source Contributions**

   * Create a dedicated open-source contribution section rather than treating BTCPay Server as one of my own products.
   * Show contribution progression:

     * documentation work,
     * bug identification,
     * issue creation,
     * submitted fixes/PRs,
     * Swahili localization,
     * ongoing transition toward deeper C# contributions.
   * Present this as evidence that I can work inside a mature, production Bitcoin open-source codebase.
   * Where possible, dynamically surface relevant GitHub issues, pull requests, merged contributions, and repositories rather than relying entirely on hardcoded text.

5. **Mastering Bitcoin / Bitcoin Book Swahili Translation**

   * Present my Swahili Bitcoin translation work as a major education and accessibility contribution.
   * Explain the motivation: reducing the language barrier for Bitcoin learners in East Africa and the wider Swahili-speaking ecosystem.
   * Include a clean section explaining what was translated, why it matters, repository/source links, licensing/attribution where applicable, and intended educational impact.
   * Avoid framing translation as a minor side project. Treat it as part of my open-source and Bitcoin education work.

---

# Technical Constraints

Build the portfolio **entirely in TypeScript** for application code.

Preferred stack:

* Next.js latest stable version using App Router
* TypeScript with strict mode
* React
* Tailwind CSS
* Server Components where appropriate
* Minimal client-side JavaScript
* Zod for validating external data
* Next.js metadata API for SEO
* Static generation/server rendering where appropriate
* GitHub API integration for repository/contribution data
* Optional lightweight animation library only when it materially improves presentation
* No unnecessary backend service
* No Python
* No separate Express/Nest/FastAPI service
* No over-engineered database unless a clear feature genuinely requires persistence

The project should be easy to deploy to **Vercel**.

Use clean architecture and strong TypeScript typing. Avoid `any` except where absolutely unavoidable and justified.

---

# Design Direction

The portfolio should look like the website of a serious open-source engineer, not a generic developer-template portfolio.

Aim for:

* modern
* restrained
* technical
* clean
* high-trust
* excellent typography
* strong information hierarchy
* excellent desktop and mobile experience

Avoid:

* excessive gradients
* glassmorphism everywhere
* giant glowing cards
* unnecessary animated backgrounds
* skill-percentage bars
* generic “I turn coffee into code” copy
* excessive emojis
* fake metrics
* fake testimonials
* invented employers
* invented contributions
* invented project adoption numbers
* buzzword-heavy AI language

Use subtle motion, strong whitespace, good typography and small technical visual details instead.

A dark/light theme is acceptable, but both must look intentional.

---

# Homepage Structure

The homepage should communicate my technical identity within seconds.

## Hero

Create a short, strong introduction.

Suggested positioning:

**Bitcoin & Open-Source Engineer building operational systems, protocol tools and accessible Bitcoin infrastructure.**

Supporting text should reference:

* Bitcoin/Lightning infrastructure
* open-source development
* operational intelligence
* TypeScript/Rust/C#
* Bitcoin education/accessibility

Do not create a huge biography in the hero.

Include clear actions such as:

* View Projects
* GitHub
* Open Source Contributions
* Contact

---

# Flagship Work

Create a visually strong **Selected Work** section.

Order:

1. Rieko
2. MazingiraOps
3. BitScope

Each flagship project should contain:

* concise problem statement
* what the system does
* why it matters
* architecture/technical highlights
* current status
* repository
* documentation/demo link if available
* relevant screenshots if available
* technologies actually used
* major engineering decisions
* “What I learned / Engineering focus” where useful

Do not merely display three generic cards.

Each project should have its own detailed project page.

---

# Rieko Project Page

The Rieko page should feel like the centerpiece of the portfolio.

Suggested structure:

### Problem

Operating Bitcoin/Lightning infrastructure produces large amounts of technical telemetry, but understanding what is operationally important and what response is appropriate can be difficult.

### Approach

Explain:

Bitcoin Core/LND
→ ingestion
→ normalized domain objects
→ graph
→ detectors
→ typed findings
→ recommendations
→ deterministic simulations
→ explanations/alerts

### Engineering Principles

Highlight:

* deterministic detectors
* typed evidence
* LLM is optional and never the detector
* read-only by default
* simulations cannot mutate a node
* explicit execution safety boundaries
* reproducibility
* operational auditability

### Current capabilities

Only derive these from the actual repository.

### Architecture

Create a clean TypeScript-rendered architecture diagram or structured flow component.

Do not use fake architecture illustrations.

---

# MazingiraOps Project Page

Tell this as a **real workflow transformation story**.

Structure it around:

### Operational problem

Manual attendance, staff administration, work documentation, leave workflows and reporting create fragmented operational records.

### Product workflow

Staff roster
→ QR attendance
→ work activity
→ evidence
→ supervisor review
→ finalized report
→ archive/audit trail

### Engineering themes

Highlight:

* role-based authorization
* tenant/subcounty boundaries
* data integrity
* evidence handling
* staff import
* secure sessions
* audit trail
* deterministic reporting
* mobile-first field usage
* Railway deployment
* object storage
* privacy considerations

If screenshots exist, build a product gallery.

---

# BitScope Project Page

Present BitScope as a protocol laboratory.

Suggested headline:

**Learn Bitcoin by constructing and verifying what actually happens.**

Show a lab workflow such as:

Scenario
→ construct transaction
→ submit to Bitcoin Core
→ observe mempool/validation behaviour
→ intentionally attack/fail
→ collect evidence
→ export deterministic proof

Highlight:

* real Bitcoin Core
* regtest
* JSON-RPC
* transaction lifecycle
* mempool policy
* RBF
* CPFP
* PSBT
* multisig
* CLTV/CSV
* descriptors
* Taproot
* scripts
* deterministic proof bundles

Avoid presenting it as a blockchain explorer.

---

# Open Source Page

Create a dedicated `/open-source` page.

Sections should include:

## BTCPay Server

Show:

* contributions
* issues
* pull requests
* documentation
* localization
* progression toward code contributions

Where possible fetch this information from GitHub.

## Bitcoin ecosystem contributions

Leave room for future contributions to:

* BTCPay Server
* LDK
* rust-bitcoin
* Bitcoin Core-related projects
* documentation/localization

The structure should allow the contribution history to grow naturally.

---

# Swahili Bitcoin Education Page

Create a dedicated section/page around Swahili Bitcoin accessibility.

Possible heading:

**Making Bitcoin knowledge accessible in Swahili.**

Include:

* why technical language accessibility matters
* Mastering Bitcoin/Bitcoin Book Swahili translation
* BTCPay Server Swahili translation/localization
* relevant repositories
* attribution/license notices
* educational/community intent

Make this page visually connected to the technical portfolio rather than treating it as charity/community filler.

---

# About Page

Keep the About page concise and technically relevant.

Focus on the intersection of:

* Bitcoin
* systems engineering
* open source
* operational software
* public-sector problem solving
* education/accessibility

Do not write a long life story.

Include a **Current Focus** subsection:

* Rieko
* BTCPay Server C#
* Bitcoin/Lightning infrastructure
* Rust systems engineering
* TypeScript product engineering

---

# Skills

Do not create dozens of logos.

Group competencies by practical domain:

### Bitcoin

Bitcoin Core, Lightning, LND, PSBT, descriptors, mempool, transaction policy, Nostr where relevant.

### Systems

Rust, async systems, APIs, observability, deterministic processing.

### Product/Application Engineering

TypeScript, Next.js, React, PostgreSQL, API design, authorization, deployment.

### Open Source

Git, GitHub, issue triage, PR workflows, documentation, localization.

### Growing

C# / ASP.NET / BTCPay Server.

Do not claim mastery where evidence does not support it.

---

# GitHub Integration

Use GitHub as an important source of portfolio truth.

Create a typed GitHub data layer in TypeScript that can retrieve relevant information for selected repositories.

Potential data:

* stars
* forks
* latest release
* last update
* language
* repository URL
* selected commits
* issues
* PRs
* contribution links

Use caching/revalidation so the portfolio does not make unnecessary API calls.

Gracefully handle rate limits and GitHub API failure.

The website must remain usable even if the GitHub API is temporarily unavailable.

Do not display vanity metrics prominently if numbers are very small.

---

# Content Source Strategy

Do not hardcode large amounts of duplicated project description throughout components.

Create a typed content system.

For example:

```ts
type Project = {
  slug: string
  name: string
  tagline: string
  summary: string
  category: string
  status: string
  repo: string
  technologies: string[]
  highlights: string[]
  architecture?: ArchitectureNode[]
  links: ProjectLink[]
}
```

Use TypeScript data/config files or MDX with strongly typed metadata.

Prefer simplicity over building a CMS.

---

# Site Structure

Recommended routes:

```text
/
 /projects
 /projects/rieko
 /projects/mazingiraops
 /projects/bitscope
 /open-source
 /bitcoin-swahili
 /about
 /contact
```

Optional:

```text
/notes
```

Do not build a blog until there is actual content worth publishing.

---

# Contact

Create a simple professional contact section using direct external links.

Include configurable links for:

* GitHub
* LinkedIn
* X/Twitter
* email
* other relevant technical profiles

Do not introduce a database-backed contact system unless necessary.

---

# Accessibility and Quality

The portfolio must meet a professional quality bar.

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* strong contrast
* reduced-motion support
* accessible labels
* responsive layout
* correct heading hierarchy
* optimized images
* good Core Web Vitals
* graceful loading/error states

Target Lighthouse-quality implementation rather than visual appearance alone.

---

# SEO / Discoverability

Implement:

* proper metadata
* OpenGraph
* Twitter cards
* canonical URLs
* sitemap
* robots.txt
* project-specific metadata
* structured data where appropriate

Useful search concepts should naturally include:

* Bitcoin developer
* Lightning developer
* Bitcoin open source
* Rust Bitcoin
* BTCPay Server contributor
* Bitcoin Kenya
* Swahili Bitcoin
* Bitcoin infrastructure

Do not keyword-stuff.

---

# README

Create an excellent root README explaining:

* portfolio purpose
* architecture
* local setup
* environment variables
* GitHub integration
* deployment
* content management
* testing

---

# Testing and CI

Add appropriate tests without overengineering.

At minimum:

* TypeScript type checking
* ESLint
* production build
* basic component/unit tests where they provide value
* critical page smoke tests
* accessibility checks where practical

Create GitHub Actions CI for:

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run build
```

Use the project's actual package manager consistently.

---

# Implementation Method

Before coding:

1. Inspect the existing repository if one exists.
2. Inspect the live GitHub repositories for:

   * Rieko
   * MazingiraOps
   * BitScope
   * BTCPay Server contributions
   * Swahili Bitcoin translation
3. Extract factual descriptions from their READMEs/documentation.
4. Do not invent project features.
5. Identify available screenshots/assets.
6. Establish the information architecture.
7. Establish a reusable design system.
8. Then implement incrementally.

Work directly in the repository.

Create/edit the necessary files rather than merely describing what should be created.

---

# Important Product Principle

This portfolio should communicate a clear story:

**I build systems that help people understand, operate and use Bitcoin and real-world infrastructure more effectively.**

Rieko demonstrates Bitcoin infrastructure engineering.

BitScope demonstrates Bitcoin protocol understanding.

BTCPay Server demonstrates open-source collaboration inside production Bitcoin software.

Swahili Bitcoin translation demonstrates ecosystem accessibility and education.

MazingiraOps demonstrates the ability to take real operational pain and turn it into deployable software.

These should feel like parts of the **same engineering identity**, not five unrelated projects.

---

# Final Quality Bar

The final website should make a technically experienced visitor conclude:

> This person is developing genuine depth in Bitcoin infrastructure and open-source engineering, can build production-grade TypeScript applications, understands systems beyond frontend work, and applies engineering to real operational problems.

Prioritize **clarity, evidence, engineering depth and credibility** over flashy design.

Do not overengineer.

Do not invent achievements.

Do not manufacture adoption.

Do not describe unfinished features as production-ready.

Use the repositories and actual contribution history as the source of truth.
