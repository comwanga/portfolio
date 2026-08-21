import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";
import { Github, Twitter, Mail, ArrowUpRight, Cpu } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0c0c0e] py-12 transition-colors">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Bio & Positioning */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-mono text-sm font-semibold">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Cpu className="w-3 h-3" />
              </span>
              <span>{siteConfig.name}</span>
              <span className="text-xs text-zinc-500 font-normal">({siteConfig.handle})</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              {siteConfig.headline}
            </p>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
              {siteConfig.companyRole} at {siteConfig.company} • {siteConfig.location}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Work & Systems
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects/rieko"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Rieko (Flagship Engine)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/mazingiraops"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  MazingiraOps
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/bitscope"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  BitScope Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/open-source"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  BTCPay Contributions
                </Link>
              </li>
              <li>
                <Link
                  href="/bitcoin-swahili"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Swahili Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Twitter / X</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.email}
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
          <div>
            © {currentYear} {siteConfig.name}. Built with TypeScript & Next.js.
          </div>
          <div className="flex items-center gap-4">
            <span>&quot;{siteConfig.bioQuote}&quot;</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
