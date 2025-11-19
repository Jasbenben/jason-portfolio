# Jason Bennett Portfolio

A clean, minimal, Palantir-inspired personal portfolio website built with Next.js, React, TailwindCSS, and Framer Motion.

## Design Philosophy

- **Strictly monochrome**: Black, dark grey, and white only
- **Clean & minimal**: Sparse, engineered, structured layouts
- **Palantir-inspired**: Thin lines, subtle separators, no clutter
- **Smooth animations**: Subtle Framer Motion micro-animations (fade-in, slide-up, hover lift)

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Google Fonts** - Space Grotesk, Inter, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with font loading
│   ├── page.tsx         # Main page integrating all sections
│   └── globals.css      # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx         # Hero section with profile card
│   ├── Projects.tsx     # Projects grid with expandable detail panel
│   ├── Skills.tsx       # Skills section with grouped categories
│   └── Footer.tsx       # Minimal footer
├── tailwind.config.ts   # Tailwind configuration with custom colors
└── package.json         # Dependencies and scripts
```

## Sections

### 1. Hero Section
- 2-column layout (text + profile card)
- Name, title, and belief statement
- Profile image placeholder with metadata block

### 2. Projects Section
- Responsive grid (2-3 columns)
- Hover lift and border highlight effects
- Expandable detail panels with:
  - Project overview
  - Key contributions
  - Image placeholders
  - External links

### 3. Skills Section
- 3 grouped categories:
  - Technical
  - Product & Systems
  - Crypto / Ecosystems
- Hover lift effect on cards

### 4. Footer
- Copyright notice
- Scroll to top functionality

## Customization

### Colors (tailwind.config.ts)
```typescript
background: "#151617"  // Dark grey background
primary: "#F5F5F5"     // Primary text
secondary: "#A1A1A1"   // Secondary text
border: "#2A2C2F"      // Borders
accent: "#D2D2D2"      // Accent lines
```

### Fonts
- Headings: Space Grotesk
- Body: Inter
- Metadata: JetBrains Mono

### Content

Edit the following files to customize content:
- `components/Hero.tsx` - Update name, title, belief statement, metadata
- `components/Projects.tsx` - Update `projectsData` array with your projects
- `components/Skills.tsx` - Update `skillsData` array with your skills

## Future Enhancements

- Add actual profile image
- Add project screenshots/images
- Add contact section
- Add analytics
- Add blog section (optional)

## License

© Jason Bennett

