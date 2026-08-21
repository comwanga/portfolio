import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "bitcoin" | "secondary" | "outline" | "success" | "warning";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700",
    bitcoin:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    secondary:
      "bg-zinc-200/60 text-zinc-700 dark:bg-zinc-850 dark:text-zinc-300 border-transparent",
    outline:
      "bg-transparent text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700",
    success:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    warning:
      "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
