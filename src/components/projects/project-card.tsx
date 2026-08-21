import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink, Activity, CheckCircle, ShieldCheck } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const getCategoryVariant = (category: Project["category"]) => {
    switch (category) {
      case "Bitcoin Infrastructure":
        return "bitcoin";
      case "Protocol Laboratory":
        return "warning";
      case "Operational Systems":
        return "default";
      case "Decentralized Systems":
        return "outline";
      case "Bitcoin Education":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 flex flex-col justify-between transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-md">
      <div className="space-y-4">
        {/* Top badges */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge variant={getCategoryVariant(project.category)}>
            {project.category}
          </Badge>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {project.name}
            </Link>
          </h3>
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400/90 mt-0.5">
            {project.tagline}
          </p>
        </div>

        {/* Summary */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.summary}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 pt-2">
            {project.highlights.slice(0, 3).map((highlight, idx) => (
              <li
                key={idx}
                className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2"
              >
                <span className="text-amber-500 mt-0.5 font-bold">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-500 border border-zinc-200 dark:border-zinc-800">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between flex-wrap gap-3">
        <Button
          variant="primary"
          size="sm"
          href={`/projects/${project.slug}`}
          className="group"
        >
          <span>Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Button>

        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.demoUrl}
              external
            >
              <span>Live Lab</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            href={project.repo}
            external
          >
            <Github className="w-3.5 h-3.5" />
            <span>Code</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
