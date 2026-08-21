import React from "react";
import { ContributionItem } from "@/data/open-source";
import { Badge } from "@/components/ui/badge";
import { GitPullRequest, GitMerge, AlertCircle, FileText, Globe, ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ContributionCardProps {
  item: ContributionItem;
}

export function ContributionCard({ item }: ContributionCardProps) {
  const getTypeIcon = () => {
    switch (item.type) {
      case "Pull Request":
        return item.status === "Merged" ? (
          <GitMerge className="w-4 h-4 text-purple-500" />
        ) : (
          <GitPullRequest className="w-4 h-4 text-emerald-500" />
        );
      case "Issue":
        return <AlertCircle className="w-4 h-4 text-amber-500" />;
      case "Proposal":
        return <FileText className="w-4 h-4 text-blue-500" />;
      case "Translation Pack":
        return <Globe className="w-4 h-4 text-teal-500" />;
      default:
        return <GitPullRequest className="w-4 h-4 text-zinc-500" />;
    }
  };

  const getStatusBadge = () => {
    switch (item.status) {
      case "Merged":
        return <Badge variant="success">Merged</Badge>;
      case "Open":
        return <Badge variant="bitcoin">Open</Badge>;
      case "In Review":
        return <Badge variant="warning">In Review</Badge>;
      default:
        return <Badge variant="outline">{item.status}</Badge>;
    }
  };

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-5 space-y-3 transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          {getTypeIcon()}
          <a
            href={item.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors"
          >
            {item.repo}#{item.number}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-400">{formatDate(item.date)}</span>
          {getStatusBadge()}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-600 dark:hover:text-amber-400 inline-flex items-center gap-1 group transition-colors"
          >
            <span>{item.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
          </a>
        </h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between flex-wrap gap-2">
        <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          Impact: <span className="text-zinc-600 dark:text-zinc-400 font-normal">{item.impact}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
