import React from "react";
import { siteConfig } from "@/data/site-config";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: "https://github.com/comwanga",
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.twitter,
    ],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    knowsAbout: [
      "Bitcoin",
      "Lightning Network",
      "LND",
      "Rust",
      "TypeScript",
      "Next.js",
      "Deterministic Systems",
      "Open Source",
      "Kiswahili Localization",
    ],
    description: siteConfig.headline,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({
  name,
  description,
  url,
  codeRepository,
}: {
  name: string;
  description: string;
  url: string;
  codeRepository: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name,
    description,
    url,
    codeRepository,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
