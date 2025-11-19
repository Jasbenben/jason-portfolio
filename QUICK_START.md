# Quick Start Guide - Adding Projects

## Step 1: Prepare Your Project Data

Gather the following information:
- ✅ Project title
- ✅ Your role (e.g., "LEAD ENGINEER", "CO-FOUNDER")
- ✅ Year (e.g., "2024")
- ✅ Project type (e.g., "PLATFORM", "AI SYSTEM")
- ✅ 2-3 paragraphs describing the project
- ✅ List of credits (role + name)
- ✅ Hero image (1200x700px recommended, 16:9 ratio)

## Step 2: Add Your Image

**Option A: Local Image**
1. Place image in `/public/projects/`
2. Use path: `/projects/your-image.jpg`

**Option B: External Image**
1. Upload to image host
2. Add domain to `next.config.js`:

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-host.com',
        pathname: '/**',
      },
    ],
  },
}
```

## Step 3: Add Project Data

Open `/types/project.ts` and add to the `projectsData` array:

```typescript
{
  slug: "my-project-slug",              // URL-friendly, lowercase-with-dashes
  title: "My Project Name",             // Display title
  role: "YOUR ROLE",                    // Uppercase, e.g. "LEAD ENGINEER"
  year: "2024",                         // Year as string
  type: "PROJECT TYPE",                 // Uppercase, e.g. "PLATFORM"
  image: "/projects/my-image.jpg",      // Path to image
  imageAlt: "My project screenshot",    // Alt text for accessibility
  information: [
    "First paragraph about the project. Describe what it does and your role.",
    "Second paragraph with more technical details or impact.",
    "Third paragraph with results, metrics, or key achievements."
  ],
  credits: [
    { role: "Your Role", name: "Your Name" },
    { role: "Another Role", name: "Team Member Name" },
    { role: "Designer", name: "Designer Name" },
  ]
}
```

## Step 4: Test Your Project Page

1. Start the dev server:
```bash
npm run dev
```

2. Visit your project page:
```
http://localhost:3000/projects/my-project-slug
```

3. Check:
- ✅ Title displays correctly
- ✅ Image loads properly
- ✅ Meta information formatted correctly
- ✅ All paragraphs show up
- ✅ Credits list completely
- ✅ Responsive on mobile

## Example: Adding "My AI Platform" Project

### 1. Prepare Image
Place `ai-platform.jpg` in `/public/projects/`

### 2. Add to projectsData:

```typescript
{
  slug: "my-ai-platform",
  title: "My AI Platform",
  role: "FOUNDER / LEAD ENGINEER",
  year: "2024",
  type: "AI PLATFORM",
  image: "/projects/ai-platform.jpg",
  imageAlt: "My AI Platform dashboard interface",
  information: [
    "Built an AI platform that connects developers with machine learning models. Led the entire product development from concept to launch, managing a team of 5 engineers.",
    "The platform features real-time model testing, automated deployment pipelines, and integrated monitoring. Architected the backend infrastructure to handle 10k+ API calls per minute with sub-100ms latency.",
    "Successfully onboarded 50+ enterprise clients in the first 6 months, processing over 1 million predictions daily. The platform reduced model deployment time from days to minutes."
  ],
  credits: [
    { role: "Product & Engineering", name: "Your Name" },
    { role: "ML Engineering", name: "Jane Smith" },
    { role: "Frontend Development", name: "John Doe" },
    { role: "DevOps", name: "Alex Johnson" },
  ]
}
```

### 3. View at:
```
http://localhost:3000/projects/my-ai-platform
```

## Tips for Good Project Pages

### Writing Information Paragraphs

**Paragraph 1**: What + Role
- What is the project?
- What does it do?
- What was your role?

**Paragraph 2**: How + Technical Details
- How did you build it?
- What technologies/approaches?
- What were the technical challenges?

**Paragraph 3**: Results + Impact
- What were the results?
- What metrics or achievements?
- What was the business/user impact?

### Image Guidelines

- **Aspect Ratio**: 16:9 (e.g., 1200x700, 1920x1080)
- **Format**: JPG or PNG
- **Size**: Optimize to < 500KB for fast loading
- **Content**: Show the product/interface, not just text
- **Quality**: High-resolution but compressed

### Slug Best Practices

- Use lowercase
- Separate words with dashes
- Keep it short (2-4 words)
- Make it memorable
- Match the project name

Good slugs:
- `ai-platform`
- `trading-engine`
- `document-processor`

Bad slugs:
- `AI_Platform_2024`
- `my-really-long-project-name-here`
- `project1`

### Credits Format

Always use the format: `{ role: "Role Name", name: "Person Name" }`

Good roles:
- "Product & Engineering"
- "Lead Developer"
- "UI/UX Design"
- "Backend Architecture"
- "Smart Contract Development"

## Syncing with Homepage Cards

After adding projects to `/types/project.ts`, also update `/components/Projects.tsx` if you want them to appear on the homepage grid.

Match the `slug` field in both places to ensure the links work correctly.

## Common Issues

### Image Not Loading
- Check the path is correct
- Verify image is in `/public/projects/`
- Check file extension matches (.jpg vs .jpeg)
- Add domain to next.config.js if external

### 404 Error
- Verify slug matches exactly
- Check slug is in `projectsData` array
- Restart dev server after adding new projects

### Styling Issues
- Check Tailwind classes are correct
- Verify custom colors are in tailwind.config.ts
- Clear cache: `rm -rf .next && npm run dev`

## Deploy Checklist

Before deploying:
- ✅ Replace all mock data
- ✅ Add real project images
- ✅ Test all project links
- ✅ Check mobile responsiveness
- ✅ Verify image optimization
- ✅ Test 404 page
- ✅ Check SEO metadata
- ✅ Verify "Home" link works

---

**You're all set! Add your projects and make the portfolio your own.**

