import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/projects/project-card";
import { ContributionCard } from "@/components/github/contribution-card";
import { projects } from "@/data/projects";
import { openSourceContributions } from "@/data/open-source";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/data/site-config";
import {
  ArrowRight,
  Github,
  Twitter,
  Mail,
  Cpu,
  Layers,
  Globe2,
  Terminal,
  ExternalLink,
  BookOpen,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const flagshipProjects = projects.filter((p) => p.featured);
  const featuredContributions = openSourceContributions.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 py-10 sm:py-16">
      {/* Hero Section */}
      <section className="relative">
        <Container size="lg">
          <div className="space-y-6 max-w-3xl">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm text-xs font-mono text-zinc-600 dark:text-zinc-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{siteConfig.companyRole} at {siteConfig.company}</span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span>{siteConfig.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
              {siteConfig.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Specialized in deterministic Bitcoin/Lightning operational intelligence, reproducible protocol laboratories, production open-source collaboration in BTCPay Server, and technical Swahili Bitcoin education.
            </p>

            {/* CTAs */}
            <div className="flex items-center flex-wrap gap-3 pt-2">
              <Button variant="bitcoin" size="md" href="#selected-work">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="md" href="/open-source">
                <Github className="w-4 h-4" />
                <span>Open Source Contributions</span>
              </Button>
              <Button variant="ghost" size="md" href="/contact">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Button>
            </div>

            {/* Quick Tech Snapshot */}
            <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">
                Stack:
              </span>
              <span>Rust (Systems/Axum)</span>
              <span>TypeScript (Next.js)</span>
              <span>Bitcoin Core & LND</span>
              <span>PostgreSQL & SQLite</span>
              <span>C# / ASP.NET</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Flagship Selected Work */}
      <section id="selected-work" className="scroll-mt-24">
        <Container size="lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Layers className="w-4 h-4" />
                <span>Selected Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Flagship Systems & Laboratories
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-amber-500 inline-flex items-center gap-1 transition-colors"
            >
              <span>View all projects & labs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {flagshipProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </Container>
      </section>

      {/* Open Source Contributions Spotlight */}
      <section>
        <Container size="lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Github className="w-4 h-4" />
                <span>Open Source Collaboration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                BTCPay Server & Ecosystem
              </h2>
            </div>
            <Link
              href="/open-source"
              className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-amber-500 inline-flex items-center gap-1 transition-colors"
            >
              <span>Explore full contribution timeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredContributions.map((item) => (
              <ContributionCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Swahili Bitcoin Education Spotlight */}
      <section>
        <Container size="lg">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent dark:from-amber-500/10 dark:via-transparent dark:to-transparent p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Globe2 className="w-4 h-4" />
              <span>Accessibility & Education</span>
            </div>

            <div className="space-y-3 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Making Bitcoin Knowledge Accessible in Kiswahili
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                East Africa is home to over 200 million Swahili speakers and vibrant grassroots adoption. Technical Bitcoin documentation, however, has remained almost entirely in English. I lead community initiatives to translate definitive protocol literature and merchant interfaces into Kiswahili.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215]">
                <div className="text-xs font-mono text-amber-500 mb-1">PROPOSAL #1221</div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Mastering Bitcoin
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Swahili translation coordination for the 3rd edition.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215]">
                <div className="text-xs font-mono text-emerald-500 mb-1">100% COVERAGE</div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  BTCPay Server
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Complete Swahili POS and checkout language pack.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215]">
                <div className="text-xs font-mono text-purple-500 mb-1">COMMUNITY</div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Grassroots Cohorts
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Hands-on node & wallet workshops in Kibra, Nairobi.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="outline" size="sm" href="/bitcoin-swahili">
                <span>Learn about Swahili Bitcoin Initiatives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Practical Competencies & Domains */}
      <section>
        <Container size="lg">
          <div className="space-y-1 mb-8 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Cpu className="w-4 h-4" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Domain Expertise & Engineering Tooling
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Practical competencies grounded in implemented code and operational deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.domain}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-4 shadow-sm"
              >
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {cat.domain}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="space-y-0.5">
                      <div className="text-xs font-medium text-zinc-900 dark:text-zinc-200 font-mono">
                        {skill.name}
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                        {skill.context}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Direct Contact Banner */}
      <section>
        <Container size="lg">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#121215] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Interested in collaboration or infrastructure discussion?
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Open to discussions around Bitcoin/Lightning systems, open-source development, operational software, or East African developer education.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Button
                variant="bitcoin"
                size="md"
                href="mailto:mwanga02717@gmail.com"
              >
                <Mail className="w-4 h-4" />
                <span>mwanga02717@gmail.com</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                href="https://github.com/comwanga"
                external
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
