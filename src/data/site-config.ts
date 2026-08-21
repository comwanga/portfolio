export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  handle: string;
  email: string;
  location: string;
  company: string;
  companyRole: string;
  bioQuote: string;
  headline: string;
  subheadline: string;
  links: {
    github: string;
    twitter: string;
    email: string;
    nostr?: string;
  };
  navigation: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Collins Mwanga",
  role: "Bitcoin & Open-Source Developer",
  handle: "comwanga",
  email: "mwanga02717@gmail.com",
  location: "Nairobi, Kenya",
  company: "Bitsacco",
  companyRole: "Bitcoin Educator & Community Developer",
  bioQuote: "Experiment. Fail. Learn. Repeat. Rust it. Type it.",
  headline: "Bitcoin & Open-Source Developer building operational systems, protocol tools and accessible Bitcoin infrastructure.",
  subheadline: "Focused on deterministic Bitcoin/Lightning operational intelligence, reproducible protocol laboratories, production open-source contributions, and localized Bitcoin technical education.",
  links: {
    github: "https://github.com/comwanga",
    twitter: "https://x.com/colmwanga",
    email: "mailto:mwanga02717@gmail.com",
  },
  navigation: [
    { name: "Selected Work", href: "/projects" },
    { name: "Rieko", href: "/projects/rieko", badge: "Flagship" },
    { name: "MazingiraOps", href: "/projects/mazingiraops" },
    { name: "BitScope", href: "/projects/bitscope" },
    { name: "Open Source", href: "/open-source" },
    { name: "Bitcoin Swahili", href: "/bitcoin-swahili" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};
