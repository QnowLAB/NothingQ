# Contributing to NothingQ

Thank you for contributing to NothingQ! This guide explains how to develop features, fix bugs, and release new versions.

---

## Getting Started

1. **Read the documentation**
   - `README.md` – Project overview
   - `PLAN.md` – Roadmap and features
   - `CHANGELOG.md` – Version history

2. **Check current version**
   - Read `PLAN.md` (Released section)
   - Read `CHANGELOG.md` (top entry)

3. **Understand the tech stack**
   - Vanilla HTML, CSS, JavaScript
   - No build tools or frameworks
   - Direct GitHub Pages deployment
   - Native browser APIs only

---

## Development Workflow

### 1. Pick a Feature

Check `PLAN.md` for upcoming features:
- V3.2 → Shop System
- V3.3 → Missions
- V3.4 → Achievements
- etc.

### 2. Create a Branch (Optional)

For significant features, create a branch:
```bash
git checkout -b feature/shop-system
```

Or work directly on `main` for small changes.

### 3. Implement the Feature

- Make focused, atomic commits
- One commit = one logical change
- Clear commit messages

Example:
```bash
git commit -m "feat: Add shop UI modal"
git commit -m "feat: Add coin spending logic"
git commit -m "feat: Add shop persistence"
```

### 4. Code Review

Before considering the feature complete:

**Check HTML**
- Valid syntax (no unclosed tags)
- All IDs match CSS/JavaScript
- No duplicate IDs

**Check CSS**
- Valid syntax
- No unused rules
- No conflicts

**Check JavaScript**
- Valid syntax (no errors)
- All referenced elements exist
- No duplicate logic
- No unused variables

**General**
- No console errors
- Comments explain "why"
- Variable names are clear

Run through the **Completion Checklist** in [.github/copilot-instructions.md](.github/copilot-instructions.md).

### 5. Play-Test

Test the game thoroughly:
- [ ] Gameplay is smooth
- [ ] All existing features work
- [ ] New feature works as intended
- [ ] Mobile touch works
- [ ] Best Score persists
- [ ] No regressions

### 6. Update Documentation

**Update PLAN.md**
- Mark feature complete (☐ → ✅)

**Update CHANGELOG.md**
- Add section for new version
- List Added/Fixed/Changed items

**Update README.md**
- Change version number if applicable

### 7. Commit & Push

```bash
git add .
git commit -m "feat: Complete shop system

- Add shop UI modal
- Implement coin spending
- Add purchase persistence"
git push origin main
```

### 8. Create Git Tag

```bash
git tag -a v3.2 -m "NothingQ V3.2 — Shop System"
git push origin v3.2
```

### 9. Create GitHub Release

1. Go to [Releases](https://github.com/QnowLAB/NothingQ/releases)
2. Click "Draft a new release"
3. Select tag: `v3.2`
4. Use `RELEASE_TEMPLATE.md` as guide
5. Write release notes
6. Publish

---

## Bug Fixes

When fixing a bug:

### 1. Identify Root Cause

Understand **why** the bug exists:
```
Root cause: combo was incrementing twice because
it was in the heart ❤️ handler AND at the end of 
every click handler.
```

### 2. Make Minimal Changes

Change only what's necessary:
```javascript
// ❌ Wrong: Rewrite entire logic
// ✅ Right: Move combo++ to specific handlers
```

### 3. Preserve Gameplay

Never change existing features, only fix behavior:
```javascript
// ❌ Wrong: Reduce lives from 3 to 2
// ✅ Right: Fix the life-loss logic
```

### 4. Verify No Regressions

Test thoroughly:
- Game still plays normally
- Existing features work
- New fix works
- No new console errors

### 5. Update Documentation

Add to `CHANGELOG.md`:
```markdown
## V3.1.1

### Fixed
- Prevented double combo increment on heart emoji
- Fixed premature life loss on game start
```

---

## Code Standards

### Naming Conventions

**JavaScript**
```javascript
let score = 0;           // ✅ meaningful
let s = 0;               // ❌ unclear
let gameIsActive = true; // ✅ clear
let flag = true;         // ❌ unclear
function removeLive() {} // ✅ describes action
function del() {}        // ❌ unclear
```

**HTML/CSS**
```html
<div id="lives-count">3</div>     <!-- ✅ descriptive -->
<div id="lc">3</div>              <!-- ❌ abbreviated -->
<div class="game-over-modal">     <!-- ✅ clear -->
<div class="gom">                 <!-- ❌ unclear -->
```

### Comments

```javascript
// ❌ Explains what
combo++;  // increment combo

// ✅ Explains why
combo++; // increase multiplier for next target

// ❌ Over-commented
let lives = 3; // set lives to 3
let score = 0; // set score to 0

// ✅ Only comment complex logic
// Calculate spawn position avoiding screen edges
const x = Math.random() * (window.innerWidth - 70);
```

### Structure

- One feature per commit
- Atomic commits (single logical change)
- Clear messages: `feat:`, `fix:`, `docs:`
- No commented-out code (unless explaining)

---

## Testing Guidelines

### Before Submitting a Feature

```
□ Game runs without console errors
□ Gameplay feels smooth (60fps)
□ All existing features work
□ New feature works correctly
□ Tested on mobile
□ localStorage persists data
□ No regressions
```

### What to Test

**Core Gameplay**
- Click targets
- Score increases correctly
- Combo system works
- Level progression works
- Speed increases correctly

**Lives System**
- Starts with 3 lives
- Missing target removes 1 life
- Bomb removes 1 life + penalty
- Game Over modal appears at 0 lives

**Persistence**
- Best Score saves to localStorage
- Best Score loads on page refresh
- Restart preserves Best Score

**Mobile**
- Touch taps work
- No double-clicks
- Responsive layout

---

## Release Process

### For Each New Version

1. **Complete feature** (see Development Workflow above)
2. **Code review** (use Completion Checklist)
3. **Play-test** (use Testing Guidelines)
4. **Update docs** (PLAN.md, CHANGELOG.md, README.md)
5. **Create tag** (`git tag -a v3.2 ...`)
6. **Create release** (use RELEASE_TEMPLATE.md)

### Release Requirements

Every release must have:
- ✅ PLAN.md updated
- ✅ CHANGELOG.md updated
- ✅ Git tag (v3.2, v3.3, etc.)
- ✅ GitHub Release with notes

### Release Template

Use `RELEASE_TEMPLATE.md` for consistency:
- Title: `NothingQ V3.2 — Shop System`
- Sections: Added, Fixed, Changed, Known Issues
- Comparison link: `v3.1...v3.2`
- Attribution

---

## Questions?

- Check `.github/copilot-instructions.md` for detailed rules
- Check `PLAN.md` for roadmap
- Check `CHANGELOG.md` for what changed before
- Ask in an issue or discussion

---

## Code of Conduct

- Be respectful
- Focus on the game's quality
- Keep features focused and minimal
- Test thoroughly
- Update documentation

---

**Last Updated:** July 10, 2026  
**Repository:** QnowLAB/NothingQ
