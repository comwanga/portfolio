import { z } from "zod";

export const GitHubRepoSchema = z.object({
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable().optional(),
  html_url: z.string(),
  stargazers_count: z.number().default(0),
  forks_count: z.number().default(0),
  language: z.string().nullable().optional(),
  updated_at: z.string(),
  pushed_at: z.string().optional(),
  open_issues_count: z.number().default(0),
  topics: z.array(z.string()).default([]),
});

export type GitHubRepo = z.infer<typeof GitHubRepoSchema>;

export const GitHubIssueSchema = z.object({
  id: z.number(),
  number: z.number(),
  title: z.string(),
  state: z.string(),
  html_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  pull_request: z.any().optional(),
});

export type GitHubIssue = z.infer<typeof GitHubIssueSchema>;

// Static fallback data to ensure the portfolio never crashes and renders instantly
export const fallbackRepoData: Record<string, GitHubRepo> = {
  "comwanga/rieko": {
    name: "rieko",
    full_name: "comwanga/rieko",
    description: "Operational intelligence engine for Bitcoin/Lightning infrastructure.",
    html_url: "https://github.com/comwanga/rieko",
    stargazers_count: 5,
    forks_count: 0,
    language: "Rust",
    updated_at: "2026-08-10T23:16:28Z",
    open_issues_count: 0,
    topics: ["bitcoin", "lightning-network", "lnd", "rust", "telemetry", "deterministic-simulation"],
  },
  "comwanga/mazingiraops": {
    name: "mazingiraops",
    full_name: "comwanga/mazingiraops",
    description: "Multi-ward environment operations platform with QR attendance, field evidence, and immutable reporting.",
    html_url: "https://github.com/comwanga/mazingiraops",
    stargazers_count: 3,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-08-20T21:41:57Z",
    open_issues_count: 0,
    topics: ["typescript", "nextjs", "nestjs", "prisma", "postgresql", "railway", "operations"],
  },
  "comwanga/BitScope": {
    name: "BitScope",
    full_name: "comwanga/BitScope",
    description: "BitScope is a reproducible Bitcoin protocol laboratory that constructs, executes, attacks and verifies Bitcoin transactions against a real Bitcoin Core node.",
    html_url: "https://github.com/comwanga/BitScope",
    stargazers_count: 4,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-07-27T01:31:41Z",
    open_issues_count: 0,
    topics: ["bitcoin-core", "regtest", "psbt", "taproot", "timelocks", "mempool", "rpc"],
  },
  "comwanga/sentinelmesh": {
    name: "sentinelmesh",
    full_name: "comwanga/sentinelmesh",
    description: "Decentralized crisis coordination and private location mesh via Nostr and Rust.",
    html_url: "https://github.com/comwanga/sentinelmesh",
    stargazers_count: 2,
    forks_count: 0,
    language: "Rust",
    updated_at: "2026-08-15T02:01:11Z",
    open_issues_count: 0,
    topics: ["nostr", "nip17", "nip29", "rust", "axum", "crisis-coordination"],
  },
  "comwanga/Privacy-Jenga": {
    name: "Privacy-Jenga",
    full_name: "comwanga/Privacy-Jenga",
    description: "Interactive 3D Bitcoin Privacy Education Game.",
    html_url: "https://github.com/comwanga/Privacy-Jenga",
    stargazers_count: 3,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-06-09T13:27:28Z",
    open_issues_count: 0,
    topics: ["bitcoin", "privacy", "threejs", "react-three-fiber", "education"],
  },
};

export async function fetchGitHubRepo(ownerRepo: string): Promise<GitHubRepo> {
  const fallback = fallbackRepoData[ownerRepo] || {
    name: ownerRepo.split("/")[1] || ownerRepo,
    full_name: ownerRepo,
    description: null,
    html_url: `https://github.com/${ownerRepo}`,
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    updated_at: new Date().toISOString(),
    open_issues_count: 0,
    topics: [],
  };

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Collins-Mwanga-Portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(`https://api.github.com/repos/${ownerRepo}`, {
      headers,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return fallback;
    }

    const json = await response.json();
    const parsed = GitHubRepoSchema.safeParse(json);
    if (parsed.success) {
      return parsed.data;
    }

    return fallback;
  } catch {
    return fallback;
  }
}
