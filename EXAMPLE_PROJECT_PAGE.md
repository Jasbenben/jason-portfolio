# Example Project Detail Page

## Visual Layout

Here's what the project detail page looks like:

```
┌─────────────────────────────────────────────────────────────────┐
│                        HEADER (sticky)                           │
│  [empty]            JASON BENNET                    Home →      │
└─────────────────────────────────────────────────────────────────┘

                    ┌─────────────────────────┐
                    │                         │
                    │   CENTERED CONTAINER    │
                    │   (max-width ~900px)    │
                    │                         │
                    │  ┌───────────────────┐  │
                    │  │   PROJECT CARD    │  │
                    │  │   (bg-card)       │  │
                    │  │                   │  │
                    │  │  Title            │  │
                    │  │  ROLE · YEAR · TYPE│  │
                    │  │                   │  │
                    │  │  ┌─────────────┐  │  │
                    │  │  │   IMAGE     │  │  │
                    │  │  │   16:9      │  │  │
                    │  │  └─────────────┘  │  │
                    │  │                   │  │
                    │  │  ─────────────────│  │
                    │  │                   │  │
                    │  │  Information      │  │
                    │  │  Paragraph 1...   │  │
                    │  │  Paragraph 2...   │  │
                    │  │                   │  │
                    │  │  Credits          │  │
                    │  │  Role → Name      │  │
                    │  │  Role → Name      │  │
                    │  │                   │  │
                    │  └───────────────────┘  │
                    │                         │
                    └─────────────────────────┘
```

## URL Structure

- Main portfolio: `http://localhost:3000/`
- Project detail: `http://localhost:3000/projects/[slug]`

### Available Pages

1. `http://localhost:3000/projects/jailbreak`
2. `http://localhost:3000/projects/ai-agent-marketplace`
3. `http://localhost:3000/projects/workflow-orchestration`

## Color Scheme (Dark Theme)

```
Background:        #151617 (bg-main)
Card Background:   #1A1C1D (bg-card)
Border:            #2A2C2F (border)

Text Primary:      #FFFFFF (white)
Text Secondary:    #D0D0D0 (light grey)
Text Body:         #C7C7C7 (medium grey)
Meta Label:        #7D7D7D (dark grey)
Meta Value:        #EDEDED (off-white)
```

## Typography Hierarchy

```
Page Title (Header):  text-sm/base, uppercase, tracking-[0.2em]
Project Title:        text-2xl/3xl, font-semibold, font-heading
Meta Info:            text-xs, uppercase, tracking-[0.2em]
Section Headings:     text-sm, uppercase, tracking-wide
Body Text:            text-sm/base, leading-relaxed
```

## Responsive Breakpoints

- **Mobile** (< 768px): Full width with minimal padding
- **Tablet** (768px - 1024px): Centered with breathing room
- **Desktop** (> 1024px): Max-width container, generous margins

## Interactive Elements

1. **Home Link** - Hover: underline + color change
2. **Project Title** - Clean, no interaction (it's the current page)
3. **Images** - Static display with border and rounded corners

## Example: Jailbreak Project Page

```
┌─────────────────────────────────────────────────────────────┐
│              JASON BENNET                    Home →         │
└─────────────────────────────────────────────────────────────┘

        Jailbreak — Co-Founder / Contributor
        ROLE: PLATFORM DESIGN · YEAR: 2024 · TYPE: AI SECURITY MARKETPLACE

        ┌─────────────────────────────────────────────────┐
        │                                                 │
        │           [Project Hero Image 16:9]             │
        │                                                 │
        └─────────────────────────────────────────────────┘

        ─────────────────────────────────────────────────────

        Information

        Jailbreak is a decentralized AI security marketplace where
        I co-designed the platform mechanics for prompt injection
        contests, challenge submissions, and reward pooling...

        The platform enables security researchers to test AI models
        for vulnerabilities through competitive challenges...

        Key innovations included the contest submission flow...

        Credits

        Product & Platform Design → Jason Bennet
        Smart Contract Engineering → Alex Chen
        Frontend Engineering → Sarah Kim
        Backend Infrastructure → Michael Torres
        Security Research Lead → Dr. Emily Rodriguez
```

## Key Features

✅ Fully responsive design
✅ Clean, minimal aesthetic
✅ Matches existing portfolio style
✅ SEO-friendly with metadata
✅ Static generation ready
✅ Type-safe with TypeScript
✅ Accessible navigation
✅ Fast page loads

## What to Customize

1. **Replace mock data** in `/types/project.ts`
2. **Add real images** to `/public/projects/`
3. **Update image URLs** in project data
4. **Add more fields** if needed (tech stack, links, etc.)
5. **Customize spacing** by adjusting Tailwind classes
6. **Add animations** for page transitions

