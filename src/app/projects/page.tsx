import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { Layers, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work & Systems",
  description:
    "Engineering portfolio of Bitcoin infrastructure, protocol laboratories, municipal operational platforms, and decentralized tools.",
};

export default function ProjectsPage() {
  const flagship = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <Container size="lg">
        {/* Header */}
        <div className="space-y-4 max-w-2xl border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Layers className="w-4 h-4" />
            <span>Systems Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Selected Work & Infrastructure
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Detailed architectures, design decision records, and source repositories across Bitcoin protocol engineering, operational platforms, and decentralized networks.
          </p>
        </div>

        {/* Flagship Section */}
        <div className="pt-8 space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
            Flagship Engineering Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {flagship.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </div>

        {/* Secondary / Laboratory Systems */}
        {secondary.length > 0 && (
          <div className="pt-16 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
              Protocols, Mesh Tools & Educational Labs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondary.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
