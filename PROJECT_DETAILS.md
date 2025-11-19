# Project Detail Pages

## Overview

I've created a dedicated project detail page system for your portfolio. When users click on a project card, they'll navigate to a full-page detail view with a clean, minimal dark aesthetic matching your existing site design.

## Files Created

1. **`/types/project.ts`** - Type definitions and mock project data
2. **`/app/projects/[slug]/page.tsx`** - Dynamic project detail page component
3. **`/app/projects/[slug]/not-found.tsx`** - 404 page for invalid project slugs

## Files Modified

1. **`/tailwind.config.ts`** - Added extended color palette for detail pages
2. **`/components/Projects.tsx`** - Updated to link to detail pages instead of modal

## How It Works

### Navigation Flow

1. User lands on the main portfolio page
2. Clicks on any project card in the grid
3. Navigates to `/projects/[slug]` (e.g., `/projects/ai-agent-marketplace`)
4. Full-page detail view loads with project information
5. User can click "Home" in the header to return to the main page

### Page Layout

The detail page follows your specifications:

- **Header**: Sticky top bar with your name centered and a "Home" link on the right
- **Main Content**: Centered card (max-width ~900px) with:
  - Project title and metadata (role, year, type)
  - Hero image (currently placeholder, aspect ratio 16:9)
  - Information section (multiple paragraphs)
  - Credits section (role → name format)

### Design System

All colors match your specified palette:

```css
--bg-main: #151617
--bg-card: #1A1C1D
--border: #2A2C2F

--text-primary: #FFFFFF
--text-secondary: #D0D0D0
--text-body: #C7C7C7
--text-meta-label: #7D7D7D
--text-meta-value: #EDEDED
```

## How to Add New Projects

### Method 1: Edit the Mock Data File

Open `/types/project.ts` and add a new project to the `projectsData` array:

```typescript
{
  slug: "your-project-slug",
  title: "Your Project Title",
  role: "YOUR ROLE",
  year: "2024",
  type: "PROJECT TYPE",
  image: "https://your-image-url.com/image.jpg",
  imageAlt: "Image description",
  information: [
    "First paragraph describing the project...",
    "Second paragraph with more details...",
    "Third paragraph with results and impact..."
  ],
  credits: [
    { role: "Role Name", name: "Person Name" },
    { role: "Another Role", name: "Another Person" }
  ]
}
```

### Method 2: Replace with Real Data Source

Later, you can replace the mock data with:
- API calls to a CMS (Contentful, Sanity, etc.)
- MDX files for each project
- Database queries
- JSON files

Just update the `getProjectBySlug()` function in `/types/project.ts` to fetch from your data source.

## Current Mock Projects

The system includes 3 mock projects with full detail pages:

1. **Jailbreak** (`/projects/jailbreak`) - AI security marketplace example
2. **AI Agent Marketplace** (`/projects/ai-agent-marketplace`)
3. **Workflow Orchestration** (`/projects/workflow-orchestration`)

## Image Handling

Currently using placeholder images. To add real images:

1. Place images in `/public/projects/` directory
2. Update the `image` field in the project data to `/projects/your-image.jpg`
3. Or use external URLs (must be configured in `next.config.js` if external)

For external images, add to `next.config.js`:

```javascript
module.exports = {
  images: {
    domains: ['your-image-host.com'],
  },
}
```

## Responsive Design

The page is fully responsive:

- **Mobile**: Full-width cards with reduced padding
- **Tablet**: Centered layout with breathing room
- **Desktop**: Max-width container with generous margins

## Typography

Uses your existing font system:
- **Headings**: Space Grotesk (var(--font-space-grotesk))
- **Body**: Inter (var(--font-inter))
- **Meta/Code**: JetBrains Mono (var(--font-jetbrains-mono))

## Next Steps

1. **Add Real Project Data**: Replace mock data in `/types/project.ts`
2. **Add Real Images**: Replace placeholder images with actual project screenshots
3. **Sync with Existing Projects**: Update the slugs in `/components/Projects.tsx` to match your data
4. **Add More Fields**: Extend the `ProjectData` type if you need additional fields (tech stack, links, etc.)
5. **Add Navigation**: Consider adding prev/next project navigation
6. **Add Animations**: Consider adding page transitions or scroll animations

## Testing

To test the pages:

1. Run `npm run dev`
2. Navigate to the main page
3. Click on any project card
4. Verify the detail page loads correctly
5. Click "Home" to return

Or visit directly:
- `http://localhost:3000/projects/jailbreak`
- `http://localhost:3000/projects/ai-agent-marketplace`
- `http://localhost:3000/projects/workflow-orchestration`

