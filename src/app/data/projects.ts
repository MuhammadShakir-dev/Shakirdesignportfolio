import {
  paysenseImage,
  paysenseGallery1,
  paysenseGallery2,
  paysenseGallery3,
  productStudioImage,
  productStudioGallery1,
  productStudioGallery2,
  productStudioGallery3,
  productStudioGallery4,
} from "./images";

export interface Project {
  slug: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  year: string;
  client: string;
  duration: string;
  role: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
  platform?: string;
  industry?: string;
  phases?: { title: string; content: string[] }[];
  stats?: { value: string; label: string }[];
  keyDecisions?: { title: string; content: string }[];
  designSystem?: string;
  reflection?: string;
}

export const projects: Project[] = [
  {
    slug: "paysense-qr-payment-app",
    category: "Fintech",
    title: "Designing Pakistan's QR Payment & Digital Wallet App from Zero to Launch in 24 Days",
    desc: "As the sole product designer for Pay Sense, I owned the entire design lifecycle from user research through production-ready handoff, delivering 50+ screens across mobile, web, and admin dashboard in just 24 days.",
    tags: ["Mobile App", "Fintech", "QR Payments", "Digital Wallet", "Design System"],
    image: paysenseImage,
    year: "2023",
    client: "Pay Sense",
    duration: "24 days",
    role: "Solo Product Designer",
    platform: "Mobile app, Website, Admin dashboard",
    industry: "Fintech",
    overview:
      "Pay Sense is a fintech startup building QR-based payments and a digital wallet for the Pakistani market. As the sole product designer, I owned the entire design lifecycle from user research through production-ready handoff, delivering 50+ screens across mobile, web, and admin dashboard in just 24 days.",
    challenge:
      "Pakistan's digital payments landscape was rapidly growing, yet most existing solutions felt fragmented with complicated onboarding, cluttered interfaces, and a lack of trust signals that discouraged first-time users. Pay Sense needed to enter this competitive market with a product that felt effortless, trustworthy, and complete from day one. The core challenge was threefold: Speed (design and ship a production-ready product in just 24 days), Scope (deliver 50+ screens covering QR payments, wallet management, transaction history, onboarding, and the full admin experience), and Trust (build a fintech product that users would trust with their money).",
    solution:
      "With a 24-day window, every hour mattered. I structured the project into three focused phases that kept momentum high while ensuring quality never slipped.",
    phases: [
      {
        title: "Phase 1: Discover & Define (Days 1\u20136)",
        content: [
          "I kicked off by talking directly to the people who would use Pay Sense. I conducted research sessions with 20+ potential users \u2014 small merchants, freelancers, and everyday consumers across different age groups and tech-comfort levels.",
          "Users abandoned competitor apps during onboarding \u2014 too many verification steps upfront broke trust instead of building it.",
          "QR scanning needed to be front-and-center, not buried in navigation. Speed of payment was the top priority.",
          "Users wanted clear, instant confirmation after every transaction \u2014 uncertainty created anxiety around money.",
          "First-time digital payment users needed guided experiences, not assumptions about familiarity.",
        ],
      },
      {
        title: "Phase 2: Design & Iterate (Days 7\u201318)",
        content: [
          "Armed with user insights, I moved into rapid design. Rather than designing in isolation and revealing everything at the end, I worked in tight feedback loops with the engineering team and stakeholders \u2014 sharing progress daily and iterating based on technical feasibility and business priorities.",
          "Onboarding flow \u2014 progressive verification that builds trust without creating friction. Users could explore core features before completing full KYC.",
          "QR payment experience \u2014 scan-to-pay in under 3 seconds with clear confirmation states at every step.",
          "Digital wallet dashboard \u2014 balance, recent transactions, and quick actions all visible without scrolling.",
          "Web app \u2014 responsive companion experience for users who preferred desktop for larger transactions and account management.",
          "Admin dashboard \u2014 internal tool for user management, transaction monitoring, and analytics that gave the ops team full visibility.",
        ],
      },
      {
        title: "Phase 3: Handoff & Launch (Days 19\u201324)",
        content: [
          "The final phase was all about precision. I worked side-by-side with the engineering team to ensure every pixel, animation, and interaction translated faithfully from design to code.",
          "Annotated specifications for every screen with interaction notes, edge cases, and responsive behavior.",
          "Build-ready prototypes that developers could inspect directly for spacing, colors, and component structure.",
          "Daily design QA sessions where I reviewed implemented screens against the design, catching inconsistencies early.",
          "A complete asset library organized for developer consumption \u2014 icons, illustrations, and exportable components.",
          "This collaborative approach resulted in a 98% design-to-development accuracy rate, dramatically reducing rework cycles and keeping us on track for the aggressive launch timeline.",
        ],
      },
    ],
    designSystem:
      "Alongside the product screens, I built a comprehensive design system \u2014 reusable components, a consistent color palette, typography scale, spacing tokens, and interaction patterns. This wasn't just a style guide; it became the shared language between design and engineering, improving development efficiency by 40% and ensuring every new feature shipped with consistent quality.",
    stats: [
      { value: "50+", label: "Screens Designed" },
      { value: "24", label: "Days to Launch" },
      { value: "20+", label: "Users Researched" },
      { value: "40%", label: "Dev Efficiency Gain" },
      { value: "25%", label: "User Satisfaction Up" },
      { value: "98%", label: "Design Accuracy" },
    ],
    keyDecisions: [
      {
        title: "QR-First Home Screen",
        content:
          "Rather than a traditional dashboard, I placed the QR scanner one tap from the home screen. Research showed that 70% of user sessions would involve payments, so I designed the architecture around the most frequent action. This reduced average payment time to under 3 seconds from app open.",
      },
      {
        title: "Progressive Trust Architecture",
        content:
          "Instead of front-loading KYC verification (which killed conversion in competitor apps), I designed a progressive trust model. Users could set up a basic wallet and make small transactions immediately. Full verification unlocked higher limits over time. This approach respected the user's time while maintaining regulatory compliance.",
      },
      {
        title: "Confirmation-Heavy Transaction Flow",
        content:
          "Every transaction included clear pre-confirmation (amount, recipient, fees visible before final tap), animated success states, and immediate receipt generation. While this added steps, research told me that for financial products, confidence beats speed. Users needed to feel certain, not fast.",
      },
    ],
    reflection:
      "Pay Sense taught me that constraints can be the best creative fuel. The 24-day timeline pushed me to make research-backed decisions quickly, prioritize ruthlessly, and communicate constantly with engineering. There was no room for design indecision \u2014 every choice had to be deliberate and defensible. If I were to revisit this project, I'd invest more time in usability testing before launch. While the post-launch satisfaction numbers were strong, earlier testing could have surfaced edge cases we only discovered after release. I'd also build more robust accessibility patterns into the design system from day one. What I'm most proud of is the design system. It outlived the initial sprint and became the foundation that let the Pay Sense team ship new features with consistent quality long after my engagement ended. That's the kind of design work I care about \u2014 not just screens, but systems that scale.",
    results: [
      "50+ screens designed across mobile, web, and admin dashboard",
      "Launched on time within the 24-day timeline",
      "40% improvement in development efficiency through the design system",
      "25% increase in user satisfaction scores",
      "98% design-to-development accuracy rate",
      "Design system became the foundation for all future feature development",
    ],
    gallery: [
      paysenseGallery1,
      paysenseGallery2,
      paysenseGallery3,
    ],
  },
  {
    slug: "product-studio-vibe-coding-tool",
    category: "AI / Product Tools",
    title: "Designing a Vibe Coding Tool That Gives Product Managers the Confidence to Build",
    desc: "Product Studio is a concept exploration for an AI-powered workspace that lets Product Managers go from a single idea to a working prototype — without writing a line of code themselves. It combines PRD generation, visual design, user stories, flow mapping, and vibe coding into one unified tool.",
    tags: ["Web App", "AI", "Concept Exploration", "Product Tools", "Vibe Coding"],
    image: productStudioImage,
    year: "2025",
    client: "Product Studio",
    duration: "2-Week Sprint",
    role: "Solo Product Designer",
    platform: "Web App",
    industry: "AI / Product Tools",
    overview:
      "Product Studio is a concept exploration for an AI-powered workspace that lets Product Managers go from a single idea to a working prototype — without writing a line of code themselves. It combines PRD generation, visual design, user stories, flow mapping, and vibe coding into one unified tool with an AI Copilot that guides the entire journey.",
    challenge:
      "Product Managers are the people closest to the problem. They talk to users, define requirements, and shape product strategy. But when it comes to bringing their ideas to life, they hit a wall — they have to wait for engineering resources, explain their vision through documents that lose nuance, and watch their ideas get diluted through multiple handoffs.\n\nThe rise of AI-assisted coding (vibe coding) created a new possibility: what if PMs could go from idea to working prototype themselves? But existing tools like Cursor, Bolt, or Lovable were built for developers. They assumed coding knowledge, used developer-centric interfaces, and left non-technical users feeling overwhelmed instead of empowered.\n\nThe gap was clear: PMs had the product vision but no tool that spoke their language — PRDs, user stories, and flows, not terminals and package managers. Existing vibe coding tools started at the code layer. PMs needed a tool that started at the thinking layer. There was no single workspace where a PM could define what to build, see it take shape visually, and get working code — all without switching tools or context.",
    solution:
      "I set out to design a tool that meets Product Managers where they already work — in the world of requirements, user stories, and product thinking — and extends that world seamlessly into design and code. Not a developer tool with PM features bolted on, but a PM tool with building superpowers built in.\n\nThe Core Idea: What if a Product Manager could type a single sentence — \"Make an HR system where recruiters can see applied candidates and select or reject them\" — and watch it evolve into a PRD, user stories, visual design, and working code, all within the same workspace?",
    phases: [
      {
        title: "PRD — AI-Generated Requirements",
        content: [
          "The AI Copilot asks clarifying questions about users, goals, and scope, then generates a structured Product Requirements Document automatically.",
          "Rather than waiting for precise prompts (which intimidates non-technical users), the Copilot acts like a thoughtful collaborator — asking smart follow-up questions like 'Who are the users? Recruiter only, or Admin too?' and 'What does select mean in your process?'",
          "This conversational approach gathers the requirements needed to build something useful, and teaches PMs to think more precisely about their product — making the tool educational, not just generative.",
          "The PRD view feels familiar to anyone who's written a product spec — clean typography, numbered sections, clear hierarchy. The Copilot sits in the left panel while the PRD occupies the main canvas.",
        ],
      },
      {
        title: "User Stories & Flows",
        content: [
          "Requirements translate into actionable user stories with acceptance criteria, ready for sprint planning.",
          "User journeys and task flows are visualized so PMs can validate logic before a single pixel is designed.",
          "This split-view pattern carries through every tab, creating consistency across the entire experience.",
        ],
      },
      {
        title: "Design Tab — Where Ideas Become Visual",
        content: [
          "Based on the PRD and user stories, the AI generates a complete visual interface — not a wireframe, but a polished UI with real components, working navigation, search functionality, filters, and data-rich cards.",
          "For the HR System example, the Design tab generated a full candidate management interface: sidebar navigation, search bar with advanced filters, and candidate cards showing name, role, contact info, experience, match percentage, and stage selectors.",
          "The output is intentionally designed to look production-ready, not sketch-like. When a PM shows this to stakeholders or engineering, it communicates the full vision without ambiguity.",
        ],
      },
      {
        title: "Code Tab — Transparency Without Intimidation",
        content: [
          "PMs don't need to write code, but they need to feel in control. A familiar IDE-like layout with file explorer and code editor, stripped of intimidation.",
          "The file structure is organized intuitively with clear naming that PMs can understand. Code is well-commented with headers explaining what each file does in plain language.",
          "The AI Copilot remains in the sidebar, available to explain any code block, make changes through conversation, or add new features.",
          "Design Principle: Confidence, Not Competence — the goal was never to make PMs into developers, but to give them enough visibility and control to feel confident sharing, iterating, and even publishing their prototype.",
        ],
      },
    ],
    stats: [
      { value: "6", label: "Integrated Workspaces" },
      { value: "1", label: "Prompt to Start" },
      { value: "0", label: "Code Knowledge Required" },
      { value: "PRD → Code", label: "End-to-End Flow" },
      { value: "AI", label: "Copilot on Every Tab" },
      { value: "2 Weeks", label: "Concept Sprint" },
    ],
    keyDecisions: [
      {
        title: "Dark Theme as Default",
        content:
          "I chose a dark interface deliberately. It signals 'builder tool' rather than 'document editor.' It positions Product Studio alongside professional development tools, making PMs feel like they're stepping into a powerful workspace. The dark background also makes the generated designs pop visually on the Design tab.",
      },
      {
        title: "Persistent AI Copilot Across All Tabs",
        content:
          "The Copilot lives in the left sidebar and persists across every tab. Whether the PM is writing a PRD, reviewing the design, or looking at code, the AI is always accessible in the same position. This eliminates context switching and makes the AI feel like a teammate sitting next to you.",
      },
      {
        title: "Tab-Based Progressive Workflow",
        content:
          "The top navigation (PRD → User Stories → Flows → Design → System → Code) mirrors the natural product development sequence. PMs can jump to any tab, but the left-to-right flow guides first-time users through a logical progression. Each tab builds on the previous one.",
      },
      {
        title: "One-Prompt Start with Smart Scaffolding",
        content:
          "The entry point is a single text prompt: 'Let's build something together.' One sentence is all it takes to start. The AI then scaffolds the rest through guided conversation. This removes the blank-page anxiety that kills most builder tools for non-technical users.",
      },
    ],
    reflection:
      "Product Studio started as a question: 'What would a vibe coding tool look like if it was designed for the people with the ideas, not the people with the technical skills?' The two-week concept sprint gave me enough runway to explore that question deeply across all six workspaces.\n\nWhat I learned is that the real design challenge isn't the interface — it's the AI interaction model. How the Copilot asks questions, when it generates vs. waits, and how it explains what it built matters far more than layout or visual polish. The conversation design is the product.\n\nIf I were to take this further, I'd invest in user testing with real Product Managers to validate two hypotheses: first, does the tab-based workflow actually match how PMs think about product development? Second, at what point does seeing code help vs. hurt their confidence?\n\nThis project represents the kind of design thinking I'm most passionate about — finding the intersection of emerging technology and underserved user needs, and designing experiences that make powerful capabilities feel approachable.",
    results: [
      "6 integrated workspaces designed covering PRD, User Stories, Flows, Design, System, and Code",
      "Single-prompt entry point that removes blank-page anxiety for non-technical users",
      "AI Copilot interaction model designed as a thinking partner, not a command line",
      "End-to-end flow from natural language to production-ready React code",
      "Concept validated through a focused 2-week design sprint",
      "Dark theme and progressive workflow create a professional, empowering experience for PMs",
    ],
    gallery: [
      productStudioGallery1,
      productStudioGallery2,
      productStudioGallery3,
      productStudioGallery4,
    ],
  },
];