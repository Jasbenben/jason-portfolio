# Jason Bennett Portfolio - Project Overview

## ✅ Complete Project Structure

```
jason-bennett-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page (integrates all sections)
│   └── globals.css         # Global styles + Tailwind imports
├── components/
│   ├── Hero.tsx            # Hero section with 2-column layout
│   ├── Projects.tsx        # Projects grid + expandable detail panels
│   ├── Skills.tsx          # Skills section with 3 categories
│   ├── Footer.tsx          # Minimal footer
│   └── index.ts            # Component exports
├── public/
│   └── placeholder.txt     # Placeholder for static assets
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind with custom colors/fonts
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── README.md               # Full documentation
├── SETUP.md                # Quick setup guide
└── PROJECT_OVERVIEW.md     # This file
```

## 🎨 Design System

### Colors (Strictly Monochrome)
- **Background**: `#151617` - Dark grey base
- **Primary Text**: `#F5F5F5` - Off-white for headings
- **Secondary Text**: `#A1A1A1` - Grey for body text
- **Border**: `#2A2C2F` - Subtle borders
- **Accent**: `#D2D2D2` - Lighter accent for highlights

### Typography
- **Headings**: Space Grotesk (bold, large)
- **Body**: Inter (readable, clean)
- **Metadata**: JetBrains Mono (technical feel)

### Layout Philosophy
- **Palantir-inspired**: Sparse, engineered, structured
- **Minimal**: Thin lines, subtle separators, no clutter
- **Responsive**: Mobile-first with breakpoints at md/lg
- **Animated**: Subtle Framer Motion micro-interactions

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe development |
| TailwindCSS | Utility-first styling |
| Framer Motion | Smooth animations |
| Google Fonts | Space Grotesk, Inter, JetBrains Mono |

## 🏗️ Component Architecture

### 1. Hero Component (`components/Hero.tsx`)
**Purpose**: First impression section with profile information

**Features**:
- Two-column responsive layout
- Left: Name, title, belief statement
- Right: Profile card with image placeholder + metadata
- Fade-in animation on page load

**Customizable**:
- Personal information (name, title)
- Belief statement
- Metadata fields (status, location, alignment, function)
- Profile image

### 2. Projects Component (`components/Projects.tsx`)
**Purpose**: Showcase portfolio projects with detailed views

**Features**:
- Responsive grid (1/2/3 columns)
- 6 sample projects included
- Hover effects (lift + border highlight)
- Scroll-triggered fade animations
- Expandable detail panels with:
  - Project overview
  - Key contributions (bullet list)
  - Image placeholders
  - External links
  - Close button
  - Background blur overlay

**Customizable**:
- Project data array (easy to add/remove/edit)
- Each project has: title, description, role, year, type, details

### 3. Skills Component (`components/Skills.tsx`)
**Purpose**: Display categorized skills and capabilities

**Features**:
- 3-column responsive grid
- Categories:
  1. Technical
  2. Product & Systems
  3. Crypto / Ecosystems
- Hover lift effect
- Scroll-triggered fade animations
- Bullet-style skill lists

**Customizable**:
- Skill categories (add/remove/rename)
- Individual skills within each category

### 4. Footer Component (`components/Footer.tsx`)
**Purpose**: Minimal footer with copyright and navigation

**Features**:
- Copyright notice with dynamic year
- Scroll-to-top button
- Responsive flex layout

**Customizable**:
- Copyright text
- Additional navigation links

## 🎬 Animation Strategy

All animations use Framer Motion with consistent patterns:

1. **Page Load**: Hero fades in + slides up
2. **Scroll**: Cards fade in + rise when entering viewport
3. **Hover**: Cards lift 2px with smooth transition
4. **Panel**: Detail panel slides up + fades in with backdrop blur
5. **Exit**: Smooth fade out animations

**Performance**: 
- IntersectionObserver for scroll-triggered animations
- No animations during scroll for smooth performance
- Hardware-accelerated transforms only

## 🚀 Getting Started

### Quick Start
```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Build for Production
```bash
npm run build
npm run start
```

## 📝 Customization Guide

### Priority 1: Personal Information
1. `components/Hero.tsx` - Update name, title, belief, metadata
2. Add profile image to `/public` and update Hero component

### Priority 2: Content
1. `components/Projects.tsx` - Update `projectsData` array (line ~18)
2. `components/Skills.tsx` - Update `skillsData` array (line ~12)

### Priority 3: Images
1. Add project screenshots to `/public`
2. Update image paths in Projects detail panels

### Optional: Extend
1. Add contact section
2. Add social links
3. Integrate analytics
4. Add blog section

## 📊 Sample Data Included

### Projects (6 included)
1. AI Agent Marketplace
2. Workflow Orchestration Engine
3. Capital Deployment Automation
4. Document Processing Pipeline
5. Community Coordination Platform
6. Research Analysis Tooling

Each includes realistic role/year/type metadata and detailed contributions.

### Skills (3 categories)
1. **Technical**: Python, TS, React, ML, Smart Contracts, Databases
2. **Product**: Marketplace design, Orchestration, 0→1 development
3. **Crypto**: Solana, Ethereum, DeFi, DAOs, MEV

## 🎯 Design Principles

✅ **Clean**: No visual noise, every element serves a purpose  
✅ **Minimal**: Generous whitespace, subtle animations  
✅ **Monochrome**: Strictly black/grey/white palette  
✅ **Readable**: High contrast, clear typography hierarchy  
✅ **Responsive**: Works beautifully on mobile → desktop  
✅ **Fast**: Optimized animations, lazy loading, Next.js optimization  

## 🔧 Configuration Files

- `tailwind.config.ts` - Custom colors, fonts, Tailwind setup
- `tsconfig.json` - TypeScript compiler options
- `next.config.js` - Next.js configuration (currently minimal)
- `.eslintrc.json` - Linting rules
- `postcss.config.js` - PostCSS plugins for Tailwind

## 📚 Documentation

- `README.md` - Comprehensive project documentation
- `SETUP.md` - Quick setup guide with checklists
- `PROJECT_OVERVIEW.md` - This file (architectural overview)

## 🎁 What's Included

✅ Fully functional Next.js 14 portfolio site  
✅ 4 main components (Hero, Projects, Skills, Footer)  
✅ Responsive design (mobile → desktop)  
✅ Smooth Framer Motion animations  
✅ TypeScript throughout  
✅ TailwindCSS styling  
✅ Custom font loading (Google Fonts)  
✅ Sample content (6 projects, 3 skill categories)  
✅ Expandable project detail panels  
✅ Scroll animations  
✅ Hover effects  
✅ Clean, minimal, Palantir-inspired design  
✅ Strictly monochrome color scheme  
✅ Production-ready code  
✅ Comprehensive documentation  

## 🚧 Not Included (Future Enhancements)

- Contact form
- Social media links
- Blog section
- Analytics integration
- SEO meta tags (basic ones included)
- Actual images (placeholders provided)
- Dark/light mode toggle (already dark)
- Multi-language support

## 🎨 Style Guidelines

### DO
✅ Use monochrome colors (black/grey/white)  
✅ Keep layouts sparse and structured  
✅ Use thin borders (1px)  
✅ Maintain generous whitespace  
✅ Use subtle animations  
✅ Follow existing typography hierarchy  

### DON'T
❌ Add blue accents or neon colors  
❌ Use cyberpunk/glitch effects  
❌ Clutter the layout  
❌ Add heavy animations  
❌ Break the monochrome palette  
❌ Use decorative fonts  

## 📈 Next Steps

1. **Install dependencies**: `npm install`
2. **Run dev server**: `npm run dev`
3. **Customize content**: Update Hero, Projects, Skills
4. **Add images**: Profile pic + project screenshots
5. **Test responsive**: Check mobile/tablet/desktop
6. **Deploy**: Vercel, Netlify, or your preferred platform

## 💡 Tips

- Start with content customization (Hero, Projects, Skills)
- Add real images to `/public` folder
- Test on multiple screen sizes
- Keep the monochrome aesthetic
- Maintain the minimal, clean design
- Use existing animation patterns

## 🆘 Support

Check `SETUP.md` for troubleshooting common issues.

---

**Built with care for Jason Bennett**  
Clean. Minimal. Palantir-inspired. Monochrome.

