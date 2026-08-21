import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  educationalInitiatives,
  swahiliGlossary,
} from "@/data/swahili-education";
import {
  Globe2,
  BookOpen,
  Languages,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Users,
  Terminal,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Making Bitcoin Knowledge Accessible in Kiswahili",
  description:
    "Technical Bitcoin translations and grassroots education initiatives in East Africa, including Mastering Bitcoin 3rd edition and BTCPay Server localization.",
};

export default function BitcoinSwahiliPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <Container size="lg">
        <div className="space-y-4 max-w-3xl border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Globe2 className="w-4 h-4" />
            <span>Technical Language Accessibility</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Making Bitcoin Knowledge Accessible in Kiswahili
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Reducing the technical language barrier for over 200 million Swahili speakers across East Africa through formal protocol literature translation, self-hosted merchant UI localization, and grassroots community education.
          </p>
        </div>
      </Container>

      {/* Why Language Accessibility Matters */}
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Users className="w-4 h-4" />
              <span>The Regional Reality</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Grassroots Adoption vs. The Language Barrier
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Kenya and East Africa boast some of the highest peer-to-peer and grassroots Bitcoin transaction volumes in the world. However, virtually all comprehensive technical resources—deep-dives into UTXO management, Lightning Network routing, script mechanics, and sovereign node verification—are published exclusively in English.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This language disparity restricts deep protocol mastery to English-fluent developers, leaving grassroots users and local cooperative merchants vulnerable to custodial scams or third-party intermediaries.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 lg:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Educational Mission</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Rigorous Technical Translation & Terminology
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our translation work is not superficial marketing or basic summaries. It focuses on translating canonical technical textbooks (such as Andreas Antonopoulos & David Harding&apos;s <em>Mastering Bitcoin</em>) and production payment infrastructure (BTCPay Server).
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              This includes establishing consistent, precise Swahili technical lexicons for complex cryptography, timelocks, and Lightning channels so local engineers can reason about protocols natively.
            </p>
          </div>
        </div>
      </Container>

      {/* Initiatives & Milestones */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Languages className="w-4 h-4" />
              <span>Core Initiatives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Active Translations & Community Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationalInitiatives.map((init) => (
              <div
                key={init.title}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {init.organization}
                    </span>
                    <Badge variant={init.status === "Completed" ? "success" : "bitcoin"}>
                      {init.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {init.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {init.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Impact: <span className="text-zinc-600 dark:text-zinc-400 font-normal">{init.impact}</span>
                  </div>

                  <div className="space-y-1">
                    {init.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Technical Swahili Lexicon */}
      <Container size="lg">
        <div className="space-y-6">
          <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Terminal className="w-4 h-4" />
              <span>Technical Lexicon</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Selected Swahili Bitcoin Terminology
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Standardized terminology developed for technical accuracy and natural linguistic intuition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {swahiliGlossary.map((term) => (
              <div
                key={term.english}
                className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] space-y-1.5"
              >
                <div className="text-zinc-500">{term.english}</div>
                <div className="text-amber-600 dark:text-amber-400 font-semibold">
                  {term.swahili}
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 pt-1 font-sans leading-relaxed">
                  {term.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Attribution & Open Source Licensing */}
      <Container size="lg">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#121215] p-6 lg:p-8 space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2 font-mono font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
            <FileText className="w-4 h-4 text-amber-500" />
            <span>Licensing & Attribution Notices</span>
          </div>
          <p className="leading-relaxed">
            <em>Mastering Bitcoin (3rd Edition)</em> is authored by Andreas M. Antonopoulos and David A. Harding and published under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) license. All community translation proposals and coordination respect upstream licensing requirements and upstream author permissions.
          </p>
          <p className="leading-relaxed">
            BTCPay Server translations are contributed under the MIT license in accordance with upstream BTCPay Server open-source guidelines.
          </p>
        </div>
      </Container>
    </div>
  );
}
