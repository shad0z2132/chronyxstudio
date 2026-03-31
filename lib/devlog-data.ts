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
  slug: "enemy-behaviour-faction-reactivity",
  tag: "Game Design",
  icon: BookOpen,
  date: "Mar 13, 2026",
  title: "Enemy Behaviour and Faction Reactivity",
  excerpt: "Enemies react based on faction relationships and player actions, creating dynamic and believable encounters.",
  readTime: "3 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "We have been working on improving enemy behaviour to make encounters feel more natural and less predictable."
    },
    {
      type: "paragraph",
      text: "Instead of every enemy attacking the player on sight, behaviour is now driven by faction relationships and player actions."
    },
    {
      type: "heading",
      text: "Faction Based Behaviour"
    },
    {
      type: "paragraph",
      text: "Enemies belong to factions, and those factions determine how they react to both the player and other NPCs."
    },
    {
      type: "list",
      items: [
        "Some enemies will ignore the player if there is no hostility",
        "Hostile factions will attack on sight",
        "Neutral factions may observe before reacting",
        "Faction relationships influence world interactions"
      ]
    },
    {
      type: "heading",
      text: "Player Triggered Reactions"
    },
    {
      type: "paragraph",
      text: "Even if enemies are not initially hostile, attacking one will trigger a reaction from nearby enemies."
    },
    {
      type: "paragraph",
      text: "Once combat starts, enemies in the vicinity will retaliate, creating more intense and reactive encounters."
    },
    {
      type: "heading",
      text: "Why This Matters"
    },
    {
      type: "paragraph",
      text: "This system creates more believable scenarios where not every interaction leads to immediate combat, but your actions still have consequences."
    },
    {
      type: "quote",
      text: "The world should react to the player, not just exist around them.",
      author: "Chronyx Studios"
    },
    {
      type: "paragraph",
      text: "We will continue expanding this system with deeper behaviours, including coordination, reactions to faction wars, and more advanced AI responses."
    }
  ]
},

{
  slug: "ui-ux-importance-player-experience",
  tag: "Art & Design",
  icon: BookOpen,
  date: "Mar 12, 2026",
  title: "Why UI and UX Matter More Than You Think",
  excerpt: "We are refining our UI and UX to ensure every interaction feels intuitive, responsive, and immersive.",
  readTime: "4 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "One of the most underestimated parts of game development is UI and UX. It is often treated as a final layer, but in reality it directly shapes how players experience the game."
    },
    {
      type: "paragraph",
      text: "A great system can feel bad if the interface is confusing. A simple action can feel powerful if the feedback is clear and responsive. UI and UX are not just visuals, they define how the game feels moment to moment."
    },
    {
      type: "heading",
      text: "Clarity and Responsiveness"
    },
    {
      type: "paragraph",
      text: "Our goal is to make every interaction clear and immediate. When a player uses an ability, opens a menu, or interacts with the world, the response should feel instant and intuitive."
    },
    {
      type: "list",
      items: [
        "Clear visual feedback for player actions",
        "Responsive menus and interactions",
        "Minimal friction between intention and action",
        "Consistent design across all systems"
      ]
    },
    {
      type: "heading",
      text: "Supporting Gameplay Systems"
    },
    {
      type: "paragraph",
      text: "UI is not just decoration. It supports core systems like combat, abilities, inventory, and progression. As we build features like the ability system and faction mechanics, the UI must evolve alongside them."
    },
    {
      type: "paragraph",
      text: "Every system we design needs to be readable and understandable without overwhelming the player."
    },
    {
      type: "heading",
      text: "Immersion Through Design"
    },
    {
      type: "paragraph",
      text: "We are also focusing on making the interface feel like part of the world. The goal is to avoid breaking immersion while still delivering all necessary information."
    },
    {
      type: "paragraph",
      text: "This aligns with our overall philosophy of seamless experiences, where systems operate naturally in the background without distracting the player :contentReference[oaicite:0]{index=0}."
    },
    {
      type: "quote",
      text: "Good UI is invisible. Great UX makes the player feel in control without thinking about it.",
      author: "Chronyx Studios"
    },
    {
      type: "paragraph",
      text: "We are continuously iterating on UI and UX as new systems are introduced. It is not a one time task, but an ongoing process that evolves with the game."
    }
  ]
},

{
  slug: "starting-area-environment-worldbuilding",
  tag: "Art & Design",
  icon: Palette,
  date: "Mar 24, 2026",
  title: "Shaping the Starting Area and World Atmosphere",
  excerpt: "We have been refining one of our early starting areas with a focus on terrain, natural paths, and a more grounded sense of place.",
  readTime: "4 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "Lately we have been focusing on one of our early starting areas, not just from a gameplay perspective, but from a worldbuilding one as well."
    },
    {
      type: "paragraph",
      text: "This area is meant to be one of the first impressions players get, so it needs to feel grounded and believable. You are not arriving as a hero, you are arriving as a recruit, and the world should reflect that."
    },
    {
      type: "heading",
      text: "Building a More Natural Environment"
    },
    {
      type: "paragraph",
      text: "We worked on terrain shaping, road placement, vegetation density, and elevation changes to move away from a test map feel and toward something that feels like a real location."
    },
    {
      type: "paragraph",
      text: "Small details matter more than they seem. The way a path curves, how grass breaks up the terrain, and how the environment frames the player all contribute to immersion."
    },
    {
      type: "heading",
      text: "Early Progression Starts Here"
    },
    {
      type: "paragraph",
      text: "This area ties directly into early progression. You arrive, get your bearings, and start proving your worth before being sent further into the conflict."
    },
    {
      type: "paragraph",
      text: "It is meant to feel like the calm before things escalate. A grounded entry point before the world opens up."
    },
    {
      type: "heading",
      text: "Lighting and Atmosphere"
    },
    {
      type: "paragraph",
      text: "We are also iterating on lighting to achieve a softer and more natural look. The goal is to avoid harsh contrasts and create an environment that feels immersive during exploration."
    },
    {
      type: "list",
      items: [
        "Improved terrain composition and path readability",
        "Better vegetation blending and density",
        "More natural environment framing",
        "Ongoing lighting and atmosphere improvements"
      ]
    },
    {
      type: "quote",
      text: "A world is not built only through big moments, but through the quiet spaces in between.",
      author: "Chronyx Studios"
    },
    {
      type: "paragraph",
      text: "There is still a lot to improve, especially materials and lighting polish, but this is the direction we are pushing toward. We want the world to feel real from the very first steps."
    }
  ]
},

{
  slug: "sorceress-spell-system-gas",
  tag: "Game Design",
  icon: BookOpen,
  date: "Mar 10, 2026",
  title: "Sorceress Spell System Powered by GAS",
  excerpt: "We are building a powerful spell framework for the Sorceress class using Unreal Engine’s Gameplay Ability System.",
  readTime: "5 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "One of the most exciting systems we are currently building is the spell framework for the Sorceress class."
    },
    {
      type: "paragraph",
      text: "Spellcasting should feel powerful, responsive, and visually satisfying. The Sorceress is designed to be a high impact class capable of shaping the battlefield through destructive magic and tactical abilities."
    },
    {
      type: "heading",
      text: "Built on Unreal Engine GAS"
    },
    {
      type: "paragraph",
      text: "The entire spell system is built using Unreal Engine’s Gameplay Ability System. This allows us to create modular spells with cooldowns, effects, gameplay tags, and scalable logic."
    },
    {
      type: "paragraph",
      text: "Each spell is structured as an ability, meaning it can control damage logic, visual effects, casting time, and interactions with other gameplay systems."
    },
    {
      type: "heading",
      text: "Powerful Magical Abilities"
    },
    {
      type: "paragraph",
      text: "The Sorceress will have access to a wide range of magical abilities designed to dominate the battlefield."
    },
    {
      type: "list",
      items: [
        "Area of effect spells that damage multiple enemies",
        "Projectile based magic attacks",
        "Elemental abilities that control space and positioning",
        "Future expansion into advanced spell combinations"
      ]
    },
    {
      type: "heading",
      text: "Multiplayer Ready"
    },
    {
      type: "paragraph",
      text: "All spells are fully multiplayer replicated through the GAS framework. This ensures that casting, damage effects, and visual feedback are synchronized for all players in combat."
    },
    {
      type: "paragraph",
      text: "Whether fighting enemies or other players, spell interactions will behave consistently across the network."
    },
    {
      type: "quote",
      text: "Magic should feel dangerous, powerful, and impactful. The Sorceress embodies that philosophy.",
      author: "Chronyx Studios"
    },
    {
      type: "paragraph",
      text: "With the spell framework now taking shape, we can begin expanding the Sorceress arsenal with new spells, visual effects, and deeper gameplay interactions."
    }
  ]
},

{
  slug: "gas-ability-system-multiplayer",
  tag: "Engineering",
  icon: BookOpen,
  date: "Mar 9, 2026",
  title: "Building Our Ability System with GAS",
  excerpt: "We implemented a new class-based ability system using Unreal Engine's Gameplay Ability System with full multiplayer replication.",
  readTime: "5 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "One of the systems we worked on recently is our new ability framework built using Unreal Engine’s Gameplay Ability System, commonly known as GAS."
    },
    {
      type: "paragraph",
      text: "Abilities are the core of combat identity in our game. Each class needs to feel distinct, powerful, and responsive while still remaining scalable as we expand the roster of characters."
    },
    {
      type: "heading",
      text: "Class Based Abilities"
    },
    {
      type: "paragraph",
      text: "Each character or class has its own unique ability set. Instead of using a generic skill system, we designed the framework so abilities can be tailored specifically to the playstyle of each archetype."
    },
    {
      type: "list",
      items: [
        "Melee combat abilities focused on close range combat and impact",
        "Ranged archery abilities for precision and distance control",
        "Spell casting abilities for mage style gameplay",
        "Expandable framework for future class archetypes"
      ]
    },
    {
      type: "heading",
      text: "Why We Chose GAS"
    },
    {
      type: "paragraph",
      text: "Unreal Engine’s Gameplay Ability System provides a powerful architecture for handling abilities, cooldowns, effects, and gameplay tags in a structured way."
    },
    {
      type: "paragraph",
      text: "Using GAS allows us to build abilities that are modular, scalable, and easy to expand as the project grows."
    },
    {
      type: "heading",
      text: "Multiplayer Replication"
    },
    {
      type: "paragraph",
      text: "Since the game is designed around multiplayer experiences, we ensured the ability system works correctly across the network."
    },
    {
      type: "paragraph",
      text: "All abilities are fully replicated so their activation, effects, and results are synchronized between players and the server."
    },
    {
      type: "paragraph",
      text: "This ensures that combat interactions remain consistent and fair regardless of how many players are involved in a fight."
    },
    {
      type: "quote",
      text: "Abilities define how players express their combat style, so building a strong and scalable ability framework was essential for us.",
      author: "Chronyx Studios"
    },
    {
      type: "paragraph",
      text: "With the core ability framework now in place, we can begin expanding the system with more unique abilities, effects, and class identities as development continues."
    }
  ]
},

{
  slug: "chronyx-game-launcher-client",
  tag: "Engineering",
  icon: BookOpen,
  date: "March 05, 2026",
  title: "Our Own Game Launcher and Client",
  excerpt: "We built our own launcher to manage updates, testing builds, and future ecosystem features across our games.",
  readTime: "4 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "One important step for our development infrastructure has been building our own game launcher and client."
    },
    {
      type: "paragraph",
      text: "Instead of relying entirely on external platforms during development, we now have a dedicated launcher that allows us to distribute builds, manage updates, and test features much more efficiently."
    },
    {
      type: "heading",
      text: "Why Build Our Own Launcher"
    },
    {
      type: "paragraph",
      text: "When developing multiplayer games and live systems, iteration speed is extremely important. Having our own launcher allows us to control how builds are delivered and tested internally and with early players."
    },
    {
      type: "list",
      items: [
        "Faster internal testing and build distribution",
        "Controlled access for early testers",
        "Patch and update management",
        "Foundation for future ecosystem tools"
      ]
    },
    {
      type: "heading",
      text: "Built for Development and Community Testing"
    },
    {
      type: "paragraph",
      text: "The launcher allows us to share early versions of the game with testers without needing to push every iteration through external storefront pipelines."
    },
    {
      type: "paragraph",
      text: "This makes it easier to gather feedback, test new features, and fix issues faster during development."
    },
    {
      type: "heading",
      text: "Looking Ahead"
    },
    {
      type: "paragraph",
      text: "This launcher will continue evolving as development progresses. It will eventually support additional tools, updates, and systems needed for the broader Chronyx ecosystem."
    },
    {
      type: "quote",
      text: "Strong infrastructure behind the scenes allows us to move faster and build better games.",
      author: "Chronyx Studios"
    }
  ]
},

{
  slug: "faction-system-dynamic-ai-conflicts",
  tag: "Game Design",
  icon: BookOpen,
  date: "Feb 26, 2026",
  title: "Faction System and Dynamic AI Conflicts",
  excerpt: "We introduced a faction system where groups can be friendly or hostile toward each other, creating unscripted world conflicts.",
  readTime: "4 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "This week we focused on expanding the world simulation by introducing a faction system combined with improved AI behaviours."
    },
    {
      type: "paragraph",
      text: "The goal is simple but powerful. The world should not revolve around the player. It should feel alive even when you are not involved."
    },
    {
      type: "heading",
      text: "Faction Relationships"
    },
    {
      type: "paragraph",
      text: "Factions can now be either friendly or hostile toward one another. These relationships define how AI groups react when they encounter each other in the world."
    },
    {
      type: "list",
      items: [
        "Friendly factions ignore or support each other",
        "Hostile factions attack on sight",
        "Territories can become active conflict zones",
        "Encounters are behaviour driven, not scripted"
      ]
    },
    {
      type: "heading",
      text: "Emergent Combat Encounters"
    },
    {
      type: "paragraph",
      text: "You might be traveling across the map and suddenly witness two rival factions fighting. These battles are not pre scripted events. They happen because their relationship logic tells them they are enemies."
    },
    {
      type: "paragraph",
      text: "This creates dynamic moments where the player can intervene, assist a faction, exploit the chaos, or simply observe the world unfolding naturally."
    },
    {
      type: "heading",
      text: "Why This Matters"
    },
    {
      type: "paragraph",
      text: "A believable world needs internal conflict. When factions fight, defend territory, or cooperate without player input, it makes the environment feel reactive and alive."
    },
    {
      type: "quote",
      text: "The world should not wait for the player to act. It should evolve on its own.",
      author: "Sands of Avalon Development"
    },
    {
      type: "paragraph",
      text: "Next step is tying this system into reputation and long term world reactions so the player's choices influence faction relationships over time."
    }
  ]
},

{
  slug: "npc-dialogue-system-world-feels-alive",
  tag: "Game Design",
  icon: BookOpen,
  date: "Feb 24, 2026",
  title: "NPC Dialogue Update – Making the World Feel Alive",
  excerpt: "We rebuilt our NPC dialogue system from scratch to make the world feel reactive, immersive, and alive.",
  readTime: "5 min read",
  featured: true,
  content: [
    {
      type: "paragraph",
      text: "One thing that always bothered us in RPGs is how NPCs feel static. They stand in place, repeat one line, and completely ignore the player unless you press interact. It breaks immersion."
    },
    {
      type: "paragraph",
      text: "So we went back to the drawing board and rebuilt our NPC dialogue system inside Unreal Engine 5 to make characters react naturally to the player's presence."
    },
    {
      type: "heading",
      text: "What We Are Building"
    },
    {
      type: "list",
      items: [
        "NPCs notice when the player enters their proximity",
        "Idle voice lines trigger dynamically with cooldown control",
        "Dialogue respects combat state",
        "Characters no longer spam or overlap constantly",
        "System built modular for future scaling"
      ]
    },
    {
      type: "paragraph",
      text: "Earlier versions felt robotic. Timing was off. Two guards would speak at the same time and it felt chaotic. We implemented a cooldown system using game time checks so dialogue now flows naturally."
    },
    {
      type: "heading",
      text: "Combat-Aware Dialogue"
    },
    {
      type: "paragraph",
      text: "If an NPC is in combat state, idle dialogue will not trigger. No more immersion-breaking moments where a guard fighting for his life suddenly comments on the weather."
    },
    {
      type: "paragraph",
      text: "We check gameplay tags before triggering voice lines to ensure contextual consistency."
    },
    {
      type: "heading",
      text: "Structured Dialogue Data"
    },
    {
      type: "paragraph",
      text: "We are using structured dialogue entries so each line can contain text, audio cues, context type, cooldown control, and state requirements."
    },
    {
      type: "paragraph",
      text: "This makes it easy to expand later into faction-based reactions, reputation-aware dialogue, and story progression responses."
    },
    {
      type: "heading",
      text: "Guards Are No Longer Silent Statues"
    },
    {
      type: "paragraph",
      text: "Now when you pass near castle guards, they may greet you, warn you, comment on your presence, or react differently depending on the situation."
    },
    {
      type: "paragraph",
      text: "The goal is subtle storytelling through ambient dialogue. Not forced cutscenes. Not static lines. Just a living world reacting to the player."
    },
    {
      type: "quote",
      text: "NPCs should feel like they exist in the world, not like decorative assets placed on a map.",
      author: "Sands of Avalon Development Team"
    },
    {
      type: "paragraph",
      text: "Next step is expanding this system to react to time of day and eventually player reputation. We are building everything modular so iteration and scaling remain easy as the world grows."
    }
  ]
},

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
