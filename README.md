# TIL - Today I Learned

A collection of short snippets documenting things I learn, built with Astro and published to GitHub Pages.

🔗 **Live Site**: https://sahuguet.github.io/til/

## Overview

This is a static site generator setup that lets me write TILs in Obsidian and automatically publish them to GitHub Pages.

**Workflow:**
1. Write TILs in Obsidian
2. Set `publish: true` in frontmatter
3. Obsidian Git auto-commits and pushes
4. GitHub Actions builds and deploys
5. Site updates automatically

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding a New TIL

Create a markdown file in `src/content/tils/`:

```markdown
---
title: Your TIL Title
date: 2026-01-17
tags: [javascript, web]
publish: true
---

# Your TIL Title

Your content here...
```

## Project Structure

```
/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── content/
│   │   ├── config.ts       # Content collection schema
│   │   └── tils/           # TIL markdown files
│   ├── layouts/
│   │   └── Layout.astro    # Base layout
│   └── pages/
│       ├── index.astro     # Homepage (TIL list)
│       └── [...slug].astro # Individual TIL pages
├── astro.config.mjs        # Astro configuration
└── package.json
```

## Obsidian Integration

See [OBSIDIAN-WORKFLOW.md](./OBSIDIAN-WORKFLOW.md) for detailed instructions on:
- Setting up Obsidian Git plugin
- Creating TIL templates with Templater
- Publishing workflow

## Frontmatter Schema

**Required:**
- `title` (string): TIL title
- `date` (YYYY-MM-DD): Publication date
- `publish` (boolean): Set to `true` to publish

**Optional:**
- `tags` (array): Categories/topics

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`/`master` branch.

Manual deployment:
```bash
npm run build
# Upload ./dist to hosting service
```

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [GitHub Pages](https://pages.github.com) - Hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Obsidian](https://obsidian.md) - Content creation (optional)

## License

Content is my own. Feel free to use the code and setup for your own TIL site.
