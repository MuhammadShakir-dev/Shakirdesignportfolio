export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  preview: string;
  image: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "why-i-design-and-code",
    title: "Why I Design AND Code, And Why It Matters for Your Product",
    date: "12 Jan 2025",
    readTime: "6 min read",
    category: "Process",
    preview:
      "Most products suffer in the handoff between designer and developer. Here's why having one person do both leads to better results, faster launches, and fewer headaches.",
    image: "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=1200&q=80",
    content: [
      "There's a dirty secret in the product world: the gap between design and development is where great ideas go to die. A pixel-perfect Figma file gets handed to a developer, and somewhere between the mockup and the browser, things start to drift. Spacing is off. Animations feel wrong. The responsive behavior wasn't specced. And suddenly, that beautiful design looks mediocre in production.",
      "I've seen this happen over and over in my 4 years of working on digital products. It's not because designers are careless or developers don't care. It's a structural problem. When two different people with two different mental models try to translate a vision through static files and written specs, information gets lost.",
      "That's why I decided to do both. I design in Figma and I build in React and Next.js. What I design is exactly what ships. There's no handoff, no miscommunication, no 'that's not what I meant' moments. The person who obsessed over the 4px padding difference is the same person writing the CSS.",
      "This approach has three major benefits for my clients:",
      "First, speed. There's no back-and-forth between designer and developer. I can iterate in real-time, making design decisions in the browser when needed. A project that might take a team 6 weeks often takes me 3-4.",
      "Second, quality. Every hover state, every transition, every responsive breakpoint is intentional. I'm not hoping a developer will interpret my design correctly. I'm implementing it myself. The result is a more polished, cohesive product.",
      "Third, cost. You're hiring one person instead of two (or a whole agency). The budget that would go to managing handoff and fixing implementation bugs goes directly into making your product better.",
      "Does this mean I think every designer should learn to code? No. But I do think the industry's obsession with separating design and development creates unnecessary friction. If you're building a website or web app and you want the result to match the vision exactly, working with someone who does both is the shortest path to a great product.",
    ],
  },
  {
    slug: "landing-page-mistakes",
    title: "5 Landing Page Mistakes That Kill Your Conversions",
    date: "07 August 2025",
    readTime: "5 min read",
    category: "Design Tips",
    preview:
      "Your landing page looks great but nobody's signing up? These five common design mistakes might be the reason, and they're easy to fix.",
    image: "https://images.unsplash.com/photo-1625465329894-9cfaf8a63332?w=1200&q=80",
    content: [
      "You spent weeks perfecting your landing page. The visuals are stunning, the copy is clever, and you're proud of it. But the conversion rate? Barely above 1%. What's going on?",
      "After designing and building dozens of landing pages for startups and SaaS companies, I've noticed the same five mistakes come up again and again. The good news: they're all fixable.",
      "Mistake #1: Your headline is about you, not your visitor. 'We're the world's leading AI platform' tells visitors nothing about what they'll get. Instead, lead with the benefit: 'Ship your code 3x faster with AI-powered reviews.' People don't care about your company. They care about their problem.",
      "Mistake #2: Too many calls to action. When everything is a CTA, nothing is. I've seen landing pages with 'Sign Up', 'Book a Demo', 'Watch Video', 'Download PDF', and 'Join Waitlist' all competing for attention. Pick ONE primary action and make everything on the page point to it.",
      "Mistake #3: No social proof above the fold. Visitors decide whether to stay or leave within 3-5 seconds. If they don't see evidence that other people trust you (logos, testimonials, user counts) in that first viewport, you're relying entirely on your copy to convince them. Add at least one trust signal above the fold.",
      "Mistake #4: The page is too slow. Every second of load time kills conversions. If your hero image is a 4MB uncompressed file or you're loading 15 fonts, you're losing visitors before they even see your headline. Use WebP images, system fonts or subset your custom fonts, and lazy-load below-the-fold content.",
      "Mistake #5: You're not testing. The most successful landing pages I've worked on weren't nailed on the first try. They were iterated through A/B testing: different headlines, different CTAs, different layouts. If you're not measuring and testing, you're guessing. And guessing is expensive.",
      "The fix for most of these is straightforward: simplify, focus, and measure. A landing page isn't a brochure. It's a conversion machine. Every element should earn its place by moving the visitor closer to taking action.",
    ],
  },
  {
    slug: "figma-to-production-workflow",
    title: "From Figma to Production: My Design-to-Code Workflow",
    date: "30 June 2025",
    readTime: "8 min read",
    category: "Workflow",
    preview:
      "A behind-the-scenes look at how I go from an initial concept in Figma to a live, deployed website using React, Next.js, and Vercel.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
    content: [
      "People often ask me what my workflow looks like when I take a project from concept to live website. Since I handle both design and development, my process is a bit different from traditional workflows where files get 'handed off.' Here's a behind-the-scenes look at how I work.",
      "Phase 1: Discovery & Research. Before I open Figma, I spend time understanding the project. Who's the audience? What's the goal of the site? What do competitors look like? I create a simple brief document and share it with the client for alignment. This phase usually takes 1-2 days and saves weeks of revisions later.",
      "Phase 2: Wireframes & Structure. I start in Figma with low-fidelity wireframes. These are grayscale, no fancy styling, just layout, hierarchy, and content placement. I share these early to get feedback on structure before investing time in visual design. This is where we nail the information architecture.",
      "Phase 3: Visual Design. Once the wireframes are approved, I move to high-fidelity designs. This is where colors, typography, imagery, and interactions come to life. I design in components from the start, thinking about how each element will translate to React components. I also design responsive variations for tablet and mobile.",
      "Phase 4: Component Architecture. Before writing code, I plan my component structure. I identify reusable components, plan the state management, and set up the project structure. This planning step takes an hour but saves days of refactoring. I use Next.js for most projects because of its built-in routing, image optimization, and deployment simplicity.",
      "Phase 5: Build. This is where the magic happens. I build component by component, starting with the design system (typography, colors, spacing, buttons) and working outward to page layouts. I use Tailwind CSS for styling because it maps naturally to the design tokens I set up in Figma. As I build, I'm making micro-adjustments to the design, things that look good in Figma but don't feel right in the browser.",
      "Phase 6: Polish & Optimize. Once the pages are built, I spend time on the details: hover states, page transitions, loading states, scroll animations, image optimization, and accessibility. This phase often gets skipped by teams under pressure, but it's what separates a good website from a great one.",
      "Phase 7: Deploy & Launch. I deploy to Vercel, connect the custom domain, set up analytics, and do a final cross-browser/device check. The client gets a live URL they can share immediately. All code is pushed to GitHub with clean commits so future developers can pick up where I left off.",
      "The whole process typically takes 2-4 weeks depending on the project size. The biggest advantage of doing it all myself is speed. There's no waiting for handoffs, no lost-in-translation moments, and no coordination overhead. What I design is what gets built, and what gets built is what goes live.",
    ],
  },
];