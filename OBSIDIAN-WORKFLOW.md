# Obsidian Workflow for TILs

This document explains how to publish TILs from Obsidian to your GitHub Pages site using **Obsidian Git Publisher**.

## Setup

### 1. Install Obsidian Plugins

Install these plugins in Obsidian:

1. **Obsidian Git Publisher** (Required)
   - Settings → Community plugins → Browse → Search "GitHub Publisher"
   - Install and enable

2. **Templater** (Recommended)
   - For quick TIL creation with templates
   - Install and enable

### 2. Configure Obsidian Git Publisher

In Obsidian Settings → GitHub Publisher:

#### GitHub Configuration
- **GitHub username**: `sahuguet`
- **GitHub repo**: `til`
- **GitHub token**: Create a [Personal Access Token](https://github.com/settings/tokens) with `repo` scope
- **Main branch**: `main`

#### Upload Configuration
- **Root folder**: `src/content/tils`
  - This tells the plugin to upload files to the `src/content/tils/` directory in the repo

#### File Path (Optional)
- **Default folder**: Leave empty or set to your TIL folder in Obsidian
- **Folder behavior**: "YAML frontmatter path" if you want to control paths via frontmatter

#### Content
- **Frontmatter key to publish**: Set to `publish`
  - Only files with `publish: true` will be uploaded
- **Excluded value**: `false`
  - Files with `publish: false` won't be uploaded

#### Text & Links
- **Convert internal links to markdown links**: Enabled (if you use internal links)
- **Convert wikilinks to markdown links**: Enabled (if you use wikilinks)

### 3. Vault Setup

You have two options:

**Option A: Dedicated TIL Folder in Your Vault**
- Keep your existing Obsidian vault
- Create a `TILs` folder for your TIL notes
- Git Publisher will sync just the TIL files to the GitHub repo

**Option B: Use Repo as Vault**
- Clone the til repo and open it as an Obsidian vault
- All notes live in the repo
- Best for a dedicated TIL vault

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
5. Run command: **"GitHub Publisher: Upload single current active note"** (Cmd/Ctrl + P)
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

1. **Write** in Obsidian (anywhere in your vault)
2. **Set** `publish: true` when ready
3. **Upload** using one of these commands:
   - **Upload single file**: `GitHub Publisher: Upload single current active note`
   - **Upload all**: `GitHub Publisher: Upload all published notes`
   - **Upload all + delete**: `GitHub Publisher: Upload all notes and delete deleted notes`
4. **Auto-build** (GitHub Actions triggers on push)
5. **Live** at https://sahuguet.github.io/til/

## Publisher Commands

Access via Command Palette (Cmd/Ctrl + P):

- **Upload single current active note** - Publish the file you're currently editing
- **Upload all published notes** - Publish all files with `publish: true`
- **Upload all notes and delete deleted notes** - Full sync (adds, updates, removes)
- **Share on mobile** - Upload current note from mobile app
- **Delete current note** - Remove from GitHub repo

## Tips

- Keep `publish: false` while drafting
- Use meaningful filenames (they become URLs)
- Add tags for better organization
- Git Publisher shows notifications when uploading
- You can write TILs anywhere in your vault (plugin handles the path)

## Troubleshooting

**TIL not appearing on site?**
- Check `publish: true` is set
- Run "Upload single current active note" command
- Verify file uploaded to GitHub (check repo at https://github.com/sahuguet/til/tree/main/src/content/tils)
- Check GitHub Actions tab for build errors

**Upload failing?**
- Verify GitHub token is valid
- Check repo name is correct (`til` not `sahuguet/til`)
- Ensure frontmatter is valid YAML

**Build failing?**
- Ensure date is in YYYY-MM-DD format
- Check all required frontmatter fields present
- Review GitHub Actions logs at https://github.com/sahuguet/til/actions

**Want to unpublish?**
- Change `publish: true` to `publish: false`
- Run "Upload all notes and delete deleted notes" command
- Or manually delete the file from GitHub repo

**Advanced: Auto-upload on save**
In GitHub Publisher settings, you can enable:
- **Auto-clean up** - Automatically remove files from GitHub when deleted in Obsidian
- **Auto-upload on save** - Automatically publish when you save a file with `publish: true`
