import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import {
  Mail,
  Github,
  Twitter,
  ArrowUpRight,
  MapPin,
  Building,
  KeyRound,
  Radio,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Collins Mwanga",
  description:
    "Direct communication channels and technical profiles for Collins Mwanga.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <Container size="lg">
        <div className="space-y-4 max-w-3xl border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Mail className="w-4 h-4" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Whether you want to discuss Bitcoin/Lightning operational infrastructure, open-source collaboration, public-sector systems, or East African Bitcoin education, feel free to reach out.
          </p>
        </div>
      </Container>

      {/* Contact Cards */}
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Direct */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Email
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Direct inbox for technical inquiries and engineering proposals.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={siteConfig.links.email}
                className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center justify-between"
              >
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                GitHub
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Explore active repositories, commit history, and pull requests.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 hover:underline flex items-center justify-between"
              >
                <span>github.com/{siteConfig.handle}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Twitter / X */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215] p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <Twitter className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Twitter / X
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Quick updates, technical thoughts, and ecosystem commentary.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 hover:underline flex items-center justify-between"
              >
                <span>@colmwanga</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Community & Location Info */}
      <Container size="lg">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#121215] p-6 lg:p-8 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Base of Operations
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Bitsacco Community & Nairobi Node
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-2">
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">Location</div>
                <div className="text-zinc-500">{siteConfig.location} (East Africa Time, UTC+3)</div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] flex items-start gap-3">
              <Building className="w-4 h-4 text-amber-500 mt-0.5" />
              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">Organization</div>
                <div className="text-zinc-500">{siteConfig.company} — Grassroots Bitcoin Hub</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
