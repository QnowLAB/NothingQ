# Copilot Instructions for NothingQ

These instructions guide development of NothingQ to maintain code quality, performance, and consistency.

---

## Core Philosophy

### Technology: Native First
- **Prefer native browser APIs before adding dependencies**
- Vanilla HTML, CSS, JavaScript only
- No frameworks (React, Vue, Angular, Svelte, etc.)
- No external libraries unless explicitly requested
- Keep the game lightweight and fast

### Architecture
- Keep the game playable directly from GitHub Pages
- Do not require npm, build steps, or tooling unless explicitly requested
- Deployable as static files
- Works in any modern browser

### Performance
- Avoid unnecessary DOM updates
- Reuse existing elements where practical
- Prefer simple algorithms over complex abstractions
- Target: 60fps gameplay, < 1s load time, < 50KB total

### Future Dependencies (Only When Requested)
- V5 → online multiplayer (may require backend)
- V6 → WebSockets (for multiplayer)
- V7 → Three.js (if 3D graphics requested)
- V8 → Phaser (if advanced game engine needed)
- Electron (if desktop build requested)

Otherwise: **keep it vanilla.**

---

## Before Any Task

Determine current version by reading:
1. `PLAN.md` – Check released versions
2. `CHANGELOG.md` – Check latest changes

**Do NOT** hard-code version numbers. Let documentation be the source of truth.

---

## Completion Checklist

### Code Review
Before considering any task complete, verify:

**HTML**
- [ ] Valid HTML syntax (no unclosed tags)
- [ ] All IDs referenced in CSS and JavaScript exist
- [ ] No duplicate IDs
- [ ] Semantic HTML where appropriate

**CSS**
- [ ] Valid CSS syntax
- [ ] No unused selectors
- [ ] No conflicting rules
- [ ] Responsive design maintained
- [ ] No console errors from styling

**JavaScript**
- [ ] Valid JavaScript syntax (no syntax errors)
- [ ] No console errors or warnings
- [ ] All referenced DOM elements exist
- [ ] All functions are called or exported
- [ ] No duplicate functions or logic

**General**
- [ ] No unused variables
- [ ] No commented-out code (unless explaining complex logic)
- [ ] Duplicate logic eliminated
- [ ] Variable/function names are meaningful
- [ ] Comments explain "why", not "what"

---

## Bug Fixes

When fixing bugs:

1. **Identify root cause** – Explain why the bug existed
2. **Minimal changes** – Change only what's necessary (usually 1-5 lines)
3. **Preserve gameplay** – No feature changes, only fix behavior
4. **Test thoroughly** – Verify the fix works and doesn't break anything else
5. **Explain the fix** – Clear description of what was wrong and how it's fixed

Example:
```
fix: Prevent double combo increment on heart emoji

Root cause: combo++ was being called twice—once in the 
else if block for ❤️, and again at the end of every click.

Solution: Moved combo++ inside target-specific handlers
instead of at the end. Now combo only increments once per click.

Verified: Game plays normally, combo counts correctly.
```

---

## Release Workflow

Follow this process for **every new version**:

### 1. Development
- Implement feature in focused, small commits
- One feature per version (V3.2 = Shop only, not Shop + Missions)
- Keep commits atomic and descriptive

### 2. Code Review
- Run through completion checklist above
- Ask Copilot to review for syntax/logic errors
- Fix any issues before proceeding

### 3. Testing
- Play-test the game yourself
- Verify all existing features still work
- Test new feature thoroughly
- Check mobile touch responsiveness
- Verify localStorage persistence

### 4. Documentation Updates
- Update `PLAN.md` – Mark feature complete (☐ → ✅)
- Update `CHANGELOG.md` – Add Added/Fixed/Changed sections
- Update `README.md` – Change version number if major update

### 5. Version Control
- Commit with clear message: `feat: Add shop system`
- Push to main branch

### 6. Git Tag
```bash
git tag -a v3.2 -m "NothingQ V3.2 — Shop System"
git push origin v3.2
```

### 7. GitHub Release
- Create release from tag (use `RELEASE_TEMPLATE.md` as guide)
- Write clear release notes
- Link comparison: `[Compare v3.1...v3.2](url)`

---

## Version Requirements

**Every completed version must include:**

- ✅ PLAN.md updated (feature marked ✅ in Released section)
- ✅ CHANGELOG.md updated (with Added/Fixed/Changed sections)
- ✅ README.md updated (if version number shown)
- ✅ Git tag created (`v3.2`, `v3.3`, etc.)
- ✅ GitHub Release published with notes

---

## File Structure & Purposes

```
NothingQ/
├── README.md                    # Project overview, quick start
├── PLAN.md                      # Future roadmap
├── CHANGELOG.md                 # Version history
├── CONTRIBUTING.md              # How to contribute
├── RELEASE_TEMPLATE.md          # GitHub Release format
├── .github/
│   └── copilot-instructions.md  # This file
├── index.html                   # Game structure
├── style.css                    # Game styling
└── script.js                    # Game logic
```

### File Purposes

**README.md**
- What is NothingQ?
- How to play
- Current version overview
- Quick links to other docs

**PLAN.md**
- Released versions checklist
- Upcoming versions with features
- Development guidelines
- Performance targets
- Design principles

**CHANGELOG.md**
- Complete version history
- What changed in each version
- Added, Fixed, Changed sections per version
- Release dates

**CONTRIBUTING.md**
- How to work on NothingQ
- Development workflow
- Testing guidelines
- Release process for humans

**RELEASE_TEMPLATE.md**
- Template for GitHub Releases
- Consistent format across all releases
- Ensures nothing is forgotten

**.github/copilot-instructions.md**
- How Copilot should work on this project
- Engineering principles and rules
- Code standards and checklists
- This file

---

## Versioning Strategy

Small, focused releases make debugging easier and create meaningful milestones:

- **V3.1** – Lives System ✅
- **V3.2** – Shop System
- **V3.3** – Missions
- **V3.4** – Achievements
- **V3.5** – Boss Mode
- **V3.6** – Daily Challenge
- **V3.7** – Themes & Sounds
- **V4.0** – Major milestone
- **V5+** – Consider major features (multiplayer, platforms, etc.)

Each version is:
- Small enough to ship in days/week
- Big enough to be meaningful
- Independently testable
- Tagged and released
- Has playable, preserved code

---

## Feature Development

### When Adding Features

1. **Explain approach** – What will change? Which files?
2. **Implement feature** – Focused commits, clear messages
3. **Review code** – Use completion checklist above
4. **Play-test** – Thoroughly test feature and existing gameplay
5. **Update docs** – PLAN.md, CHANGELOG.md, README.md
6. **Create tag** – `git tag -a v3.2 ...`
7. **Publish release** – GitHub Release with notes

### Key Game Files

**index.html**
- Game structure and UI
- HUD (Lives, Score, Coins, Best, Level, Combo)
- Game container and modals

**style.css**
- Dark theme (black background)
- Responsive design
- Animations and transitions
- Modal styling

**script.js**
- Game state (score, lives, level, combo, coins)
- Target mechanics and click handlers
- Level progression and speed scaling
- Particle effects
- localStorage persistence

---

## Code Standards

### Naming
- Meaningful variable names: `lives`, `gameActive`, not `x`, `flag`
- Function names describe action: `removeLive()`, `endGame()`
- CSS classes: `game-over-modal`, not `gom`
- HTML IDs: `lives-count`, not `lc`

### Comments
- Explain "why", not "what"
- ❌ `// increment combo`
- ✅ `// increase combo on successful hit to build multiplier`
- Comment complex logic only

### Structure
- One feature per commit
- Atomic commits (one change per commit)
- Clear commit messages: `feat:`, `fix:`, `docs:`, `refactor:`

---

## Emoji Targets Reference

```javascript
😀 - 1 point
⭐ - 5 points
💎 - 20 points
👑 - 50 points
🪙 - 2 points
⚡ - 3 points
❤️ - 0 points (bonus: +5 combo)
💣 - -10 coins + remove 1 life
```

---

## Testing Checklist

Before releasing a version:

- [ ] Game runs without errors or warnings
- [ ] Gameplay is smooth (60fps feel)
- [ ] All existing features still work
- [ ] New feature works as intended
- [ ] Score/coins/level/combo update correctly
- [ ] Particle effects display properly
- [ ] localStorage saves/loads (Best Score)
- [ ] Mobile touch works smoothly
- [ ] Vibration feedback works (if applicable)
- [ ] Game Over modal displays correctly
- [ ] Restart button works and preserves Best Score
- [ ] No console errors

---

## Common Tasks

### Add a new game mechanic
1. Explain what will change (files, logic)
2. Implement in script.js
3. Update HTML/CSS if UI needed
4. Review code (completion checklist)
5. Play-test thoroughly
6. Update PLAN.md and CHANGELOG.md
7. Commit and release

### Modify the UI
1. Describe visual changes
2. Update index.html (structure)
3. Update style.css (styling)
4. Update script.js (if logic needed)
5. Test on mobile
6. Update CHANGELOG.md
7. Commit and release

### Fix a bug
1. Identify root cause
2. Make minimal changes (1-5 lines usually)
3. Verify the fix works
4. Verify no regressions
5. Update CHANGELOG.md (under "Fixed")
6. Commit with clear message

---

## Git Commit Messages

Format: `type: description`

```
feat: Add shop system with coin spending
fix: Prevent premature life loss on game start
docs: Update CHANGELOG.md with V3.2 details
style: Improve game over modal appearance
refactor: Simplify target selection logic
```

---

## Questions Before Starting Any Task

- Is this vanilla HTML/CSS/JS only (unless explicitly requested)?
- Does this preserve existing gameplay?
- Have I identified affected files?
- Have I explained the approach?
- Will this slow down the game?
- Is the code easy to understand?
- Do I need to update documentation?
- Is this ready for a version release?

---

## Release Checklist

Before creating a Git tag and GitHub Release:

- [ ] Feature is complete and working
- [ ] Code passes completion checklist
- [ ] Play-tested the game thoroughly
- [ ] PLAN.md updated (feature marked ✅)
- [ ] CHANGELOG.md updated (Added/Fixed sections)
- [ ] README.md updated (version number if applicable)
- [ ] All commits pushed to main
- [ ] Ready to create Git tag
- [ ] Release notes prepared

---

**Last Updated:** July 10, 2026  
**Repository:** QnowLAB/NothingQ  
**Contact:** @QnowLAB
