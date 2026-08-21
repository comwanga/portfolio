import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container size="sm">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 mx-auto">
            <Terminal className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
              404 / NOT_FOUND
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Page or Resource Not Found
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
              The requested route does not exist in this portfolio repository.
            </p>
          </div>

          <div className="pt-4">
            <Button variant="primary" size="md" href="/">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
