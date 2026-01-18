# Obsidian Workflow for TILs

This document explains how to publish TILs from Obsidian to your GitHub Pages site.

## Setup

### 1. Install Obsidian Plugins

Install these plugins in Obsidian:

1. **Obsidian Git** (Required)
   - Settings → Community plugins → Browse → Search "Obsidian Git"
   - Install and enable

2. **Templater** (Recommended)
   - For quick TIL creation with templates
   - Install and enable

### 2. Configure Obsidian Git

In Obsidian Settings → Obsidian Git:

- **Auto pull on startup**: On
- **Auto backup interval**: 10-30 minutes (your preference)
- **Auto push**: On
- **Commit message**: `Publish Obsidian → GitHub`

### 3. Point Obsidian Vault to Repository

Option A: Clone this repo as your Obsidian vault
```bash
cd ~/Documents/Obsidian
git clone https://github.com/sahuguet/til.git TILs
```

Option B: Link existing vault to this repo
- Initialize git in your vault folder
- Add this repo as remote
- Push to GitHub

## Creating a New TIL

### Manual Method

1. Create a new note in Obsidian
2. Add frontmatter:

```markdown
---
title: Your TIL Title
date: 2026-01-17
tags: [javascript, react]
publish: false
---

# Your TIL Title

Your content here...
```

3. Write your TIL
4. When ready to publish, change `publish: false` to `publish: true`
5. Obsidian Git will auto-commit and push
6. GitHub Actions will build and deploy automatically

### With Templater (Recommended)

1. Create a template file: `_templates/til-template.md`

```markdown
---
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags: []
publish: false
---

# <% tp.file.title %>

**What I learned:**

**Why it matters:**

**Example:**
```

2. In Templater settings:
   - Template folder location: `_templates`
   - Enable "Trigger Templater on new file creation"

3. Create new TIL:
   - Create new note
   - Insert template (Cmd/Ctrl + P → "Templater: Insert Template")
   - Fill in content
   - Change `publish: true` when ready

## Folder Structure

```
src/content/tils/
  ├── 2020-07-23-nginx-and-sudo.md
  ├── 2026-01-17-your-new-til.md
  └── ...
```

Keep all TILs in `src/content/tils/` folder.

## Frontmatter Fields

Required:
- `title`: String - Title of your TIL
- `date`: String (YYYY-MM-DD format) - Publication date
- `publish`: Boolean - true to publish, false to keep as draft

Optional:
- `tags`: Array of strings - Tags for categorization

## Publishing Flow

1. **Write** in Obsidian
2. **Set** `publish: true` when ready
3. **Auto-commit** (Obsidian Git does this)
4. **Auto-push** to GitHub
5. **Auto-build** (GitHub Actions)
6. **Live** at https://sahuguet.github.io/til/

## Tips

- Keep `publish: false` while drafting
- Use meaningful filenames (they become URLs)
- Add tags for better organization
- Obsidian Git shows status in bottom bar

## Troubleshooting

**TIL not appearing on site?**
- Check `publish: true` is set
- Verify git pushed (check GitHub repo)
- Check GitHub Actions tab for build errors

**Build failing?**
- Ensure date is in YYYY-MM-DD format
- Check all required frontmatter fields present
- Review GitHub Actions logs

**Want to unpublish?**
- Change `publish: true` to `publish: false`
- Or delete the file from `src/content/tils/`
