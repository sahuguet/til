---
title: Setting up git in Obsidian
publish: "false"
date: 2026-01-17
---
## master vs main
The various git plugins I have been using for Obsidian assume that the default git branch is `master` and the UI does not let you change it. But Github now uses `main`as the default branch for newly created repos. This leads to frustrating `repository not found` error messages.
## How to fix it
1. go to the folder where your vault lives
2. go to the `.obsidian` folder
	1. edit `.obsidian/plugins/github-publisher/data.json
	2. make the change
	3. restart Obsidian
	

