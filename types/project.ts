export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  type: string;
  network?: string;
  category?: string;
  image: string;
  imageAlt: string;
  information: string[];
  credits: ProjectCredit[];
  links?: ProjectLink[];
}

// Mock project data - replace with real data later
export const projectsData: ProjectData[] = [
  {
    slug: "lil-chillers-ai-nft",
    title: "Lil Chillers — AI NFT Collection",
    tagline: "AI-generated Solana NFT collection that sold out instantly and hit #1 on Magic Eden.",
    role: "FOUNDER / BUILDER",
    year: "2025",
    type: "NFT COLLECTION",
    network: "SOLANA",
    image: "/images/projects/chillhouseresize.png",
    imageAlt: "Lil Chillers NFT collection preview",
    information: [
      "Lil Chillers is the first AI-generated 1/1 NFT collection on Solana, created from start to finish by designing the concept, visuals, launch flow, and community experience. I built a custom automation system that bypassed OpenAI's API constraints, generated thousands of image variations, decoded and validated outputs, and uploaded every final asset and metadata directly to IPFS for minting. Once launched, the collection sold out within seconds and reached #1 on Magic Eden's leaderboard."
    ],
    credits: [
      { role: "Concept, Product & Automation System", name: "Jason Bennet" },
      
      { role: "Community Lead & Launch Operations", name: "Jason Bennet" }
    ],
    links: [
      { label: "Project X (Twitter)", url: "https://x.com/ChillHouseSOL" },
      { label: "Collection on Magic Eden", url: "https://magiceden.io/marketplace/lil_chillers" }
    ]
  },
  {
    slug: "jailbreak-ai-security-platform",
    title: "Jailbreak — AI Security Platform",
    tagline: "The first open-source AI security platform where users earn bounties for breaking AI agents.",
    role: "EARLY CO-FOUNDER / CONTRIBUTOR",
    year: "2024",
    type: "AI SECURITY PLATFORM",
    category: "AI SECURITY",
    image: "/images/projects/jailbreak.jpeg",
    imageAlt: "Jailbreak AI security challenge interface",
    information: [
      "Jailbreak is a open source-decentralized AI-security platform built around crowdfunded LLM prompt-injection challenges. Users submit protected prompts, the community funds a reward pool, and attackers pay per attempt to try breaking the model's guardrails. If someone succeeds, they instantly claim the prize—turning AI safety testing into an open, incentive-driven competition.",
      "As an early co-founder and contributor, I helped define the platform's foundational mechanics, including the core protocol logic, challenge flow, and the strategy behind the reward and payout system. My work contributed to the early structure of how challenges are created, funded, attempted, and resolved, shaping the direction of the project during its initial phase."
    ],
    credits: [
      { role: "Early Protocol Design & Core Mechanics", name: "Jason Bennet" },
      { role: "Reward System Strategy & Challenge Flow", name: "Jason Bennet" },
    ],
    links: [
      { label: "Website", url: "https://jailbreakme.xyz/" },
      { label: "GitBook", url: "https://jailbreak.gitbook.io/jailbreakme.xyz" },
      { label: "X (Twitter)", url: "https://x.com/jailbreakme_xyz" }
    ]
  },
  {
    slug: "octo-tools-solana-toolkit",
    title: "Octo Tools — Solana Toolkit (Archived)",
    tagline: "An experimental multi-launchpad token deployment toolkit (sunset prototype).",
    role: "CO-FOUNDER / PRODUCT LEAD",
    year: "2025",
    type: "SOLANA TOOLKIT (ARCHIVED)",
    category: "SOLANA TOOLKIT",
    image: "/images/projects/octotools.jpg",
    imageAlt: "Octo Tools Solana toolkit UI",
    information: [
      "Octo Tools was an experimental Solana toolkit designed to make token launches easier, safer, and more controlled for creators. The goal was to give developers a clean interface for planning launch strategies, running lightweight market-making logic, and managing deployments across major launchpads like Pump.fun and Bonk.fun. It was something most tools at the time didn't support.",
      "As a co-founder and product lead, I oversaw the design, user experience, and feature direction. I studied how existing toolkits failed, mapped out what creators actually needed, and built a simpler, more intuitive workflow. I hired and coordinated with a Solana developer, reviewed code decisions with him, and ensured cross-platform compatibility across multiple launchpad environments.",
      "The project was ultimately sunset after early testing showed limited product-market fit, but it became a valuable learning experience in leading a small team, coordinating work, and bringing a product from concept to launch."
    ],
    credits: [
      { role: "Product Direction & UX Design", name: "Jason Bennet" },
      
      { role: "Strategy, Feature Design & Launchpad Compatibility", name: "Jason Bennet" }
    ]
  },
  {
    slug: "telegram-copy-trading-bot",
    title: "Telegram Copy-Trading Bot",
    tagline: "Experimental bot that auto-executed trades from selected Telegram signal users.",
    role: "CREATOR",
    year: "2025",
    type: "PERSONAL AUTOMATION TOOL",
    category: "PERSONAL AUTOMATION",
    image: "/images/projects/resizetgbotlogo.png",
    imageAlt: "Wave Bot beach-style logo",
    information: [
      "This was an experimental Telegram automation bot I built for personal use after noticing that certain users in my crypto group chats consistently shared strong coin calls. The goal was to turn those messages into actionable trading signals ,even while I was asleep.",
      "The bot monitored selected Telegram users, parsed their messages in real time, and automatically executed trades with custom parameters. Users could configure buy amounts, take-profit and stop-loss percentages, and choose exactly which accounts to follow or track. A simple rules engine allowed it to manage multiple signal sources and maintain individualized settings for each one.",
      "Although it was never launched publicly, the project was a hands-on exercise in building automation systems, integrating trading APIs, and translating unstructured Telegram messages into structured decision logic."
    ],
    credits: [
      { role: "Bot Logic, Rules Engine & Signal Tracking", name: "Jason Bennet" },
      { role: "Trading API Integration & Configuration Workflow", name: "Jason Bennet" },
      { role: "Telegram Parsing & Monitoring", name: "Jason Bennet (Solo Project)" }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}

export function getAdjacentProjects(currentSlug: string): {
  previous: ProjectData | null;
  next: ProjectData | null;
} {
  const currentIndex = projectsData.findIndex(project => project.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? projectsData[currentIndex - 1] : null,
    next: currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null
  };
}

