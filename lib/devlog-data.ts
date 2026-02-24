import { BookOpen, Palette, Trophy, Cpu, Users, Gamepad2, type LucideIcon } from "lucide-react"

export type DevlogTag =
  | "Dev Log"
  | "Art & Design"
  | "Esports"
  | "Engineering"
  | "Community"
  | "Game Design"

export interface DevlogPost {
  slug: string
  tag: DevlogTag
  icon: LucideIcon
  date: string
  title: string
  excerpt: string
  readTime: string
  content: DevlogContent[]
  featured?: boolean
  comingSoon?: boolean
}

export type DevlogContent =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }

// ─── Posts ────────────────────────────────────────────────────────────────────

export const devlogPosts: DevlogPost[] = [
  {
    slug: "building-progression-systems",
    tag: "Dev Log",
    icon: BookOpen,
    date: "Feb 20, 2026",
    title: "Building Progression Systems That Respect Players' Time",
    excerpt:
      "How Sands of Avalon's character advancement is designed around meaningful milestones — not time gates or purchase shortcuts.",
    readTime: "8 min read",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Progression systems are the backbone of any long-term RPG. They define how players grow, what they work toward, and — critically — whether that work feels meaningful or hollow. At Chronyx Studio, we've spent months debating, prototyping, and discarding approaches before landing on what we believe is right for Sands of Avalon.",
      },
      {
        type: "heading",
        text: "The Problem With Most Modern Progression",
      },
      {
        type: "paragraph",
        text: "Too many games today treat progression as a monetization lever rather than a design tool. Time gates, battle passes, and pay-to-progress mechanics have eroded player trust across the industry. We've seen it in our own community feedback — players are exhausted and suspicious. They've been burned before.",
      },
      {
        type: "quote",
        text: "Players don't mind grinding. They mind grinding that doesn't feel rewarding or fair.",
        author: "Internal Design Philosophy Doc",
      },
      {
        type: "heading",
        text: "Our Approach: Milestone-Based Advancement",
      },
      {
        type: "paragraph",
        text: "Instead of tying advancement to time spent online or premium currency, every major progression step in Sands of Avalon is tied to a meaningful in-world accomplishment. Defeat a dungeon boss. Master a crafting discipline. Unite a faction under your banner. Progress flows from achievement, not from waiting or paying.",
      },
      {
        type: "list",
        items: [
          "No energy systems or stamina caps limiting daily play",
          "All power-affecting items earnable through gameplay",
          "Cosmetic-only premium shop (skins, emotes, titles)",
          "Prestige systems for end-game players that loop back into the world",
          "Seasonal content that adds story depth, not mandatory FOMO grind",
        ],
      },
      {
        type: "heading",
        text: "What's Next",
      },
      {
        type: "paragraph",
        text: "We're currently in internal playtesting of our core advancement loop. The feedback has been incredibly positive — players feel like their time actually means something. Our next devlog will cover how we're designing the crafting and economy systems to complement this progression philosophy.",
      },
    ],
  },
  {
    slug: "designing-allegiance-systems",
    tag: "Art & Design",
    icon: Palette,
    date: "Feb 10, 2026",
    title: "Designing Allegiance Systems for a Living World",
    excerpt:
      "How faction loyalty, territory control, and player-driven politics create emergent narratives in Sands of Avalon.",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "One of our core design pillars at Chronyx Studio is that the world of Sands of Avalon should feel genuinely alive — shaped by the decisions of its players, not just its developers. Allegiance systems are central to that vision.",
      },
      {
        type: "heading",
        text: "The Three Pillars of Allegiance",
      },
      {
        type: "list",
        items: [
          "Faction Loyalty — choose a side, earn rewards, and shape your faction's standing",
          "Territory Control — factions compete over zones that change hands based on player activity",
          "Political Maneuvering — alliances, betrayals, and diplomacy between player-led guilds",
        ],
      },
      {
        type: "paragraph",
        text: "What makes this system different from traditional faction systems is that there's no single 'correct' faction. Each has genuine advantages and disadvantages depending on your playstyle. A solo player might thrive in a nimble, decentralized faction. A hardcore guild might prefer one with deep crafting bonuses. No choice is ever a trap.",
      },
      {
        type: "heading",
        text: "Emergent Stories",
      },
      {
        type: "paragraph",
        text: "During our internal alpha, we've already seen incredible emergent stories emerge from the system. A group of crafters quietly dominated the economy in one region until a rival faction organized a trade embargo. Political intrigue played out entirely through player decisions — we didn't script any of it. That's exactly what we're going for.",
      },
      {
        type: "quote",
        text: "The best story in a sandbox isn't the one we wrote — it's the one the players create.",
      },
    ],
  },
  {
    slug: "tournament-ready-fps",
    tag: "Esports",
    icon: Trophy,
    date: "Jan 28, 2026",
    title: "What Tournament-Ready Actually Means for an FPS",
    excerpt:
      "Spectator modes, anti-cheat, ranking frameworks, and event infrastructure — what we're building from day one.",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "When we say our upcoming competitive FPS is being built 'tournament-ready from day one,' we don't mean we'll bolt on esports features post-launch. We mean the entire technical and design foundation is being laid with competitive integrity as a first-class requirement.",
      },
      {
        type: "heading",
        text: "Anti-Cheat as a Foundation, Not a Patch",
      },
      {
        type: "paragraph",
        text: "The FPS genre has a rampant cheating problem. Most games ship first and deal with cheaters reactively. We're investing in anti-cheat architecture upfront — server-side hit validation, behavioral anomaly detection, and replay verification systems that allow any suspicious match to be reviewed. Trust must be earned and maintained.",
      },
      {
        type: "heading",
        text: "Spectator & Broadcast Infrastructure",
      },
      {
        type: "list",
        items: [
          "Dedicated spectator camera system with cinematic tools",
          "Real-time stat overlays built for broadcast",
          "Match replay with full timeline scrubbing",
          "Integrated observer controls for tournament organizers",
          "API access for third-party stats aggregators",
        ],
      },
      {
        type: "heading",
        text: "Ranking Systems That Scale",
      },
      {
        type: "paragraph",
        text: "Ranking is one of the hardest problems in competitive games. Elo-based systems are simple but flawed. We're implementing a multi-dimensional skill rating that accounts for individual performance, team contribution, and consistency over time. The goal: a ladder that actually feels fair at every level.",
      },
    ],
  },
  {
    slug: "unreal-engine-5-tech",
    tag: "Engineering",
    icon: Cpu,
    date: "Jan 15, 2026",
    title: "Why We Chose Unreal Engine 5 and What It Costs Us",
    excerpt:
      "An honest look at the tradeoffs of building on UE5 — the wins, the challenges, and what we've learned so far.",
    readTime: "9 min read",
    content: [
      {
        type: "paragraph",
        text: "We get this question a lot: why UE5? The honest answer is that Nanite and Lumen let a small team achieve visual fidelity that would've required three times the artists even five years ago. But UE5 comes with real tradeoffs, and we want to be transparent about them.",
      },
      {
        type: "heading",
        text: "Where UE5 Wins Big",
      },
      {
        type: "list",
        items: [
          "Nanite eliminates most LOD authoring work — massive time saver for a small team",
          "Lumen gives us dynamic global illumination without bake times",
          "MetaSounds gives our audio team composable, reactive sound design",
          "World Partition handles our large open zones without manual streaming setup",
        ],
      },
      {
        type: "heading",
        text: "The Real Challenges",
      },
      {
        type: "paragraph",
        text: "Compilation times are brutal. A full shader recompile can bring a dev machine to its knees for 20 minutes. We've invested heavily in Incredibuild and distributed compilation to manage this. Network replication in UE5 is also more complex than it should be — we've built a custom abstraction layer on top of the default system.",
      },
      {
        type: "quote",
        text: "UE5 is the best engine available for our goals. It's also the most demanding engine we've worked with. Both things are true.",
        author: "Lead Engineer",
      },
    ],
  },
  {
    slug: "building-our-community",
    tag: "Community",
    icon: Users,
    date: "Jan 5, 2026",
    title: "Building a Community Before the Game Ships",
    excerpt:
      "What we've learned from 6 months of Discord, early playtests, and transparent development with our growing community.",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Six months ago we opened our Discord server with zero members and a lot of ambition. Today we have thousands of engaged players, testers, and genuine fans who are invested in what we're building. Here's what we've learned.",
      },
      {
        type: "heading",
        text: "Transparency Builds Trust",
      },
      {
        type: "paragraph",
        text: "We made a decision early on to share both wins and struggles openly with our community. When a system wasn't working, we said so. When we had to pivot on a feature, we explained why. The response was overwhelmingly positive — people respect honesty far more than polished PR speak.",
      },
      {
        type: "heading",
        text: "Playtests Are a Two-Way Street",
      },
      {
        type: "list",
        items: [
          "We've run 4 closed playtests with community members",
          "Every piece of feedback is logged and reviewed by the design team",
          "Players who find significant bugs are credited in our dev notes",
          "We share aggregate playtest results back with the community",
        ],
      },
      {
        type: "paragraph",
        text: "The community has already shaped the game in meaningful ways. Our inventory UI was completely redesigned based on playtest feedback. A faction ability that felt broken was reworked after 50 players gave us detailed notes. This is how we want to build — together.",
      },
    ],
  },
  {
    slug: "combat-design-philosophy",
    tag: "Game Design",
    icon: Gamepad2,
    date: "Dec 18, 2025",
    title: "Combat That Feels Fair, Deep, and Satisfying",
    excerpt:
      "The design principles behind Sands of Avalon's combat system — and how we're balancing skill expression with accessibility.",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Combat is the moment-to-moment heartbeat of any action RPG. Get it wrong and the game feels bad regardless of how good everything else is. Get it right and players will forgive a lot of rough edges around it. We've been obsessing over this for the better part of a year.",
      },
      {
        type: "heading",
        text: "The Three Pillars of Our Combat Design",
      },
      {
        type: "list",
        items: [
          "Readability — every threat must be clearly telegraphed so skilled play is rewarded, not luck",
          "Depth without complexity — easy to learn the basics, years to master the full system",
          "Physical feedback — hits must feel impactful; animations and audio work together",
        ],
      },
      {
        type: "heading",
        text: "Accessibility Without Compromise",
      },
      {
        type: "paragraph",
        text: "We don't believe accessibility and depth are at odds. Our combat has meaningful difficulty options that adjust enemy aggression and reaction windows — but never dumb down the mechanics themselves. A player using accessibility settings still needs to understand positioning, resource management, and ability timing. The floor is lower; the ceiling is the same.",
      },
      {
        type: "quote",
        text: "The goal is that every player feels competent, and skilled players feel exceptional.",
        author: "Combat Designer",
      },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getPostBySlug(slug: string): DevlogPost | undefined {
  return devlogPosts.find((p) => p.slug === slug)
}

export function getFeaturedPost(): DevlogPost {
  return devlogPosts.find((p) => p.featured) ?? devlogPosts[0]
}

export function getRecentPosts(count: number, excludeSlug?: string): DevlogPost[] {
  return devlogPosts.filter((p) => p.slug !== excludeSlug).slice(0, count)
}

export const ALL_TAGS: DevlogTag[] = [
  "Dev Log",
  "Art & Design",
  "Esports",
  "Engineering",
  "Community",
  "Game Design",
]
