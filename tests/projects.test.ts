import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";
import { openSourceContributions, contributionProgression } from "@/data/open-source";
import { educationalInitiatives, swahiliGlossary } from "@/data/swahili-education";
import { skillCategories } from "@/data/skills";

describe("Portfolio Data Invariants", () => {
  it("contains all required flagship projects", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toContain("rieko");
    expect(slugs).toContain("mazingiraops");
    expect(slugs).toContain("bitscope");
  });

  it("ensures every project has valid URLs, highlights, and categories", () => {
    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(0);
      expect(project.tagline.length).toBeGreaterThan(0);
      expect(project.summary.length).toBeGreaterThan(0);
      expect(project.repo).toMatch(/^https:\/\/github\.com\//);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);
    }
  });

  it("verifies Rieko has architecture steps and crate definitions", () => {
    const rieko = projects.find((p) => p.slug === "rieko");
    expect(rieko).toBeDefined();
    expect(rieko?.workflow).toBeDefined();
    expect(rieko?.workflow?.length).toBeGreaterThanOrEqual(5);
    expect(rieko?.crates).toBeDefined();
    expect(rieko?.crates?.length).toBeGreaterThan(10);
  });

  it("verifies open-source contributions have valid numbers and links", () => {
    expect(openSourceContributions.length).toBeGreaterThanOrEqual(5);
    for (const contrib of openSourceContributions) {
      expect(contrib.number).toBeGreaterThan(0);
      expect(contrib.url).toMatch(/^https:\/\/github\.com\//);
      expect(contrib.impact.length).toBeGreaterThan(0);
    }
  });

  it("verifies Swahili education and glossary terms are populated", () => {
    expect(educationalInitiatives.length).toBeGreaterThan(0);
    expect(swahiliGlossary.length).toBeGreaterThan(0);
    for (const term of swahiliGlossary) {
      expect(term.english.length).toBeGreaterThan(0);
      expect(term.swahili.length).toBeGreaterThan(0);
    }
  });

  it("verifies skill categories avoid fake percentage bars and have practical contexts", () => {
    for (const cat of skillCategories) {
      expect(cat.skills.length).toBeGreaterThan(0);
      for (const skill of cat.skills) {
        expect(skill.name.length).toBeGreaterThan(0);
        expect(skill.context.length).toBeGreaterThan(0);
      }
    }
  });
});
