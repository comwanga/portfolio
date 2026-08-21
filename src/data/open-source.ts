export interface ContributionItem {
  id: string;
  repo: string;
  repoUrl: string;
  number: number;
  title: string;
  type: "Pull Request" | "Issue" | "Proposal" | "Translation Pack";
  status: "Merged" | "Open" | "In Review";
  url: string;
  date: string;
  description: string;
  impact: string;
  tags: string[];
}

export interface ContributionProgressionPhase {
  phase: string;
  title: string;
  description: string;
  status: "Completed" | "Active" | "Upcoming";
  skills: string[];
  evidence: string[];
}

export const contributionProgression: ContributionProgressionPhase[] = [
  {
    phase: "Phase 1",
    title: "Documentation & Triage",
    description:
      "Identified broken navigation pathways, dead links, and documentation build errors across BTCPay Server official documentation, fixing 22 dead sidebar entries.",
    status: "Completed",
    skills: ["Markdown", "VuePress", "Docusaurus", "Static Site Generators", "GitHub Workflows"],
    evidence: [
      "btcpayserver/btcpayserver-doc#1621 (Fix 22 dead sidebar entries)",
      "btcpayserver/btcpayserver-doc#1618 (Sidebar config broken build triage)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Swahili Localization & Tooling",
    description:
      "Created and completed the comprehensive Swahili (Kiswahili) translation pack for BTCPay Server, bringing East African localization coverage to 100% of core UI strings.",
    status: "Completed",
    skills: ["Localization (i18n)", "Swahili Technical Lexicon", "Translation Tooling", "Quality Assurance"],
    evidence: [
      "btcpayserver/btcpayserver-translator#76 (Add Swahili language pack - Merged)",
      "btcpayserver/btcpayserver-translator#91 (Complete Swahili translations - Merged)",
      "btcpayserver/btcpayserver#7389 (Swahili documentation localization proposal)",
    ],
  },
  {
    phase: "Phase 3",
    title: "Bitcoin Ecosystem Protocol Tooling",
    description:
      "Conducted protocol analysis and exercises with Btrust Builders, identifying CI and Bitcoin CLI command discrepancies in regtest training environments.",
    status: "Completed",
    skills: ["Bitcoin Core CLI", "Regtest CI Workflows", "Bash Scripting", "RPC Validation"],
    evidence: [
      "btrust-builders/lbcli-week-1-exercises#8 (CI Failure: node version check fix)",
      "LBCLI Cohort Weeks 1-5 Exercises & Regtest Capstone",
    ],
  },
  {
    phase: "Phase 4",
    title: "C# / ASP.NET Core & LDK Gateway Contributions",
    description:
      "Deepening contributions into BTCPay Server's C# backend architecture, plugin ecosystem, and LDK (Lightning Development Kit) server gateway integrations.",
    status: "Active",
    skills: ["C#", ".NET / ASP.NET Core", "LDK (Lightning Development Kit)", "BTCPay Plugin System", "REST/gRPC"],
    evidence: [
      "BTCPay-LDK-Lightning-Gateway development",
      "Active exploration of BTCPay Server backend plugins and payment processors",
    ],
  },
];

export const openSourceContributions: ContributionItem[] = [
  {
    id: "btcpay-doc-1621",
    repo: "btcpayserver/btcpayserver-doc",
    repoUrl: "https://github.com/btcpayserver/btcpayserver-doc",
    number: 1621,
    title: "Fix 22 dead sidebar entries in Integrations and Plugins sections",
    type: "Pull Request",
    status: "Open",
    url: "https://github.com/btcpayserver/btcpayserver-doc/pull/1621",
    date: "2026-08-11",
    description:
      "Audited the documentation sidebar configuration and restored 22 missing or broken links across the Integrations and Plugins directories, ensuring docs build cleanly.",
    impact: "Repairs critical developer and merchant onboarding documentation pathways.",
    tags: ["Documentation", "Bugfix", "Navigation"],
  },
  {
    id: "btcpay-doc-1618",
    repo: "btcpayserver/btcpayserver-doc",
    repoUrl: "https://github.com/btcpayserver/btcpayserver-doc",
    number: 1618,
    title: "Sidebar config references pages that don't exist, breaking the build",
    type: "Issue",
    status: "Open",
    url: "https://github.com/btcpayserver/btcpayserver-doc/issues/1618",
    date: "2026-08-10",
    description:
      "Surfaced and documented non-existent file references causing build breakages in the static documentation generator.",
    impact: "Identified root cause for build failures and provided reproduction steps.",
    tags: ["Issue Triage", "CI/CD"],
  },
  {
    id: "btcpay-trans-91",
    repo: "btcpayserver/btcpayserver-translator",
    repoUrl: "https://github.com/btcpayserver/btcpayserver-translator",
    number: 91,
    title: "Complete Swahili translations across all merchant and pos flows",
    type: "Pull Request",
    status: "Merged",
    url: "https://github.com/btcpayserver/btcpayserver-translator/pull/91",
    date: "2026-07-29",
    description:
      "Finished missing and inconsistent Swahili translations for Point-of-Sale, invoice checkout, and store management views.",
    impact: "Enables merchants across Kenya and East Africa to run BTCPay Server in Kiswahili natively.",
    tags: ["Localization", "Swahili", "Merged"],
  },
  {
    id: "btcpay-trans-76",
    repo: "btcpayserver/btcpayserver-translator",
    repoUrl: "https://github.com/btcpayserver/btcpayserver-translator",
    number: 76,
    title: "feat(translations): add Swahili (sw) language pack",
    type: "Pull Request",
    status: "Merged",
    url: "https://github.com/btcpayserver/btcpayserver-translator/pull/76",
    date: "2026-06-17",
    description:
      "Created initial Swahili language pack, establishing standardized translations for Bitcoin, Lightning, and payment gateway terminology.",
    impact: "Established the official Swahili locale in BTCPay Server translator repository.",
    tags: ["Localization", "Feature", "Merged"],
  },
  {
    id: "btcpay-core-7389",
    repo: "btcpayserver/btcpayserver",
    repoUrl: "https://github.com/btcpayserver/btcpayserver",
    number: 7389,
    title: "Swahili Localization Proposal for BTCPay Server Documentation",
    type: "Proposal",
    status: "Open",
    url: "https://github.com/btcpayserver/btcpayserver/issues/7389",
    date: "2026-06-29",
    description:
      "Formulated a structured proposal and glossary for translating BTCPay Server official guides and documentation into Swahili to support East African merchants and developers.",
    impact: "Coordinates community translation standards for East African Bitcoin commerce.",
    tags: ["Proposal", "Community", "i18n"],
  },
  {
    id: "bitcoinbook-1221",
    repo: "bitcoinbook/bitcoinbook",
    repoUrl: "https://github.com/bitcoinbook/bitcoinbook",
    number: 1221,
    title: "Proposal: Swahili Translation for East African Bitcoin Education Community",
    type: "Proposal",
    status: "Open",
    url: "https://github.com/bitcoinbook/bitcoinbook/issues/1221",
    date: "2026-05-26",
    description:
      "Submitted a formal proposal to Mastering Bitcoin maintainers to coordinate a full Swahili translation of the 3rd edition for East African developers and grassroots educators.",
    impact: "Bridges the technical Bitcoin language barrier for over 200 million Swahili speakers.",
    tags: ["Education", "Translation", "Mastering Bitcoin"],
  },
  {
    id: "btrust-8",
    repo: "btrust-builders/lbcli-week-1-exercises",
    repoUrl: "https://github.com/btrust-builders/lbcli-week-1-exercises",
    number: 8,
    title: "CI Failure: 01.sh missing Bitcoin CLI command for node version check",
    type: "Issue",
    status: "Open",
    url: "https://github.com/btrust-builders/lbcli-week-1-exercises/issues/8",
    date: "2026-06-18",
    description:
      "Identified and reported a missing bitcoin-cli invocation in the automated regtest testing harness script causing CI failures.",
    impact: "Improved testing harness reliability for African Bitcoin protocol students.",
    tags: ["Bug Report", "CI/CD", "Bitcoin Core"],
  },
];
