"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "@/components/ui/container";
import { Menu, X, Terminal, Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/85 dark:bg-[#09090b]/85 backdrop-blur-md transition-colors">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Moniker */}
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-mono text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-mono text-xs shadow-sm">
              <Terminal className="w-4 h-4" />
            </span>
            <span>{siteConfig.handle}</span>
            <span className="hidden sm:inline-block text-xs font-normal text-zinc-500 dark:text-zinc-400">
              / bitcoin & systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors relative flex items-center gap-1.5",
                    isActive
                      ? "text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800/80 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40"
                  )}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Social links + Theme Toggle + Mobile Menu trigger */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800 space-y-1">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800/80 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40"
                  )}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3 px-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
