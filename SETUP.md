# Quick Setup Guide

## Installation Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## What You'll See

✅ **Hero Section** - Full-screen intro with your name, title, and profile card  
✅ **Projects Section** - Grid of 6 sample projects with expandable detail panels  
✅ **Skills Section** - 3 grouped skill categories  
✅ **Footer** - Minimal footer with copyright and scroll-to-top  

## Customization Checklist

### 1. Update Personal Information (`components/Hero.tsx`)
- [ ] Change name (currently "Jason Bennett")
- [ ] Update subheading/title
- [ ] Modify belief statement
- [ ] Update metadata (STATUS, LOCATION, ALIGNMENT, FUNCTION)
- [ ] Add your profile image (replace placeholder)

### 2. Update Projects (`components/Projects.tsx`)
Look for the `projectsData` array around line 18 and update:
- [ ] Project titles
- [ ] Descriptions
- [ ] Role, Year, Type metadata
- [ ] Full descriptions in details
- [ ] Contributions lists
- [ ] Project links
- [ ] Add/remove projects as needed

### 3. Update Skills (`components/Skills.tsx`)
Look for the `skillsData` array around line 12 and update:
- [ ] Technical skills
- [ ] Product & Systems skills
- [ ] Crypto/Ecosystems skills (or change category entirely)
- [ ] Add/remove skill categories as needed

### 4. Add Images
- [ ] Add profile image to `/public` folder
- [ ] Update Hero component to use real image
- [ ] Add project screenshots to `/public` folder
- [ ] Update Projects component to use real images

### 5. Optional Enhancements
- [ ] Add contact section
- [ ] Add social links (Twitter, LinkedIn, GitHub)
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Add meta tags for SEO
- [ ] Add Open Graph images

## Color Scheme

The site uses a strictly monochrome Palantir-inspired palette:

- **Background**: `#151617` (dark grey)
- **Primary Text**: `#F5F5F5` (off-white)
- **Secondary Text**: `#A1A1A1` (grey)
- **Borders**: `#2A2C2F` (dark border)
- **Accents**: `#D2D2D2` (light grey)

All colors are defined in `tailwind.config.ts` and can be modified there.

## Fonts

- **Headings**: Space Grotesk
- **Body**: Inter
- **Metadata/Code**: JetBrains Mono

Fonts are loaded from Google Fonts in `app/layout.tsx`.

## Animation Notes

The site uses Framer Motion for:
- Fade + rise animations on scroll
- Hover lift effects on cards
- Smooth panel expansion/collapse
- All animations are subtle and minimal

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

Or deploy the `.next` folder to any Node.js hosting platform.

## Troubleshooting

**Issue**: Fonts not loading  
**Solution**: Make sure Google Fonts can be accessed (check firewall/network)

**Issue**: Animations not working  
**Solution**: Check that Framer Motion is installed: `npm install framer-motion`

**Issue**: Build errors  
**Solution**: Run `npm install` again and ensure Node.js 18+ is installed

## Need Help?

Check the full README.md for more details on the project structure and customization options.

