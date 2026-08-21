import { describe, it, expect } from "vitest";
import {
  GitHubRepoSchema,
  fallbackRepoData,
  fetchGitHubRepo,
} from "@/lib/github";

describe("GitHub API Integration & Validation", () => {
  it("validates fallback repo data against GitHubRepoSchema", () => {
    for (const [repoKey, data] of Object.entries(fallbackRepoData)) {
      const parsed = GitHubRepoSchema.safeParse(data);
      expect(parsed.success, `Schema validation failed for ${repoKey}`).toBe(true);
    }
  });

  it("gracefully falls back to static data for known repos when network/token is absent", async () => {
    const repo = await fetchGitHubRepo("comwanga/rieko");
    expect(repo.name).toBe("rieko");
    expect(repo.full_name).toBe("comwanga/rieko");
    expect(repo.language).toBe("Rust");
  });

  it("handles unknown repos gracefully with deterministic fallback structure", async () => {
    const repo = await fetchGitHubRepo("nonexistent-user/nonexistent-repo");
    expect(repo.name).toBe("nonexistent-repo");
    expect(repo.full_name).toBe("nonexistent-user/nonexistent-repo");
  });
});
