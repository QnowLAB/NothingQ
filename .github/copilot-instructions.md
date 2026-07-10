# Copilot Instructions for NothingQ

These instructions guide development of NothingQ to maintain code quality, performance, and consistency.

## Core Principles

### Technology Stack
- **Vanilla HTML, CSS, JavaScript ONLY**
- No frameworks (React, Vue, Angular, etc.)
- No external libraries or dependencies
- Keep the game lightweight and fast
- Minimize bundle size for quick load times

### Code Quality
- Write clean, well-commented code
- Use meaningful variable and function names
- Keep files organized and readable
- Follow consistent formatting and indentation
- One feature per commit with clear messages

### Gameplay Preservation
- **Never remove or break existing features** without explicit request
- **Preserve all existing mechanics:** Score, Coins, Levels, Combo, Best Score, Particle effects, Emoji system, Vibration feedback, Lives system
- When adding features, ensure they integrate smoothly with existing gameplay
- Test thoroughly to avoid introducing regressions

## Development Workflow

### Before Making Changes
1. **Explain the plan** - Always explain what you're about to change and why
2. **List files** - Clearly state which files will be modified
3. **Preview changes** - Show the user what's being changed before committing
4. **Get confirmation** - Wait for approval before applying changes

### Making Changes
- Edit existing code instead of rewriting files
- Make surgical, focused changes
- Add comments explaining significant logic
- Keep commits small and atomic
- Use clear commit messages

### After Changes
- **Summarize changes** - Explain every modification made
- **Verify gameplay** - Test the game works smoothly
- **Verify persistence** - Ensure localStorage and scores work correctly

## Release Workflow

**Follow this process for each new version:**

### 1. Development Phase
- Implement the feature in its own branch or directly on main
- Keep changes focused on one feature per version (e.g., V3.1 = Lives only)
- Review code for syntax errors, logic bugs, and unused variables
- Ask Copilot to review code before finalizing

### 2. Testing Phase
- Play-test the game yourself
- Verify all existing features still work
- Confirm new feature works as intended
- Check mobile touch responsiveness
- Test localStorage persistence (Best Score)

### 3. Documentation Phase
- Commit all changes with clear message
- Update `PLAN.md` – Mark feature complete (☐ → ✅)
- Update `CHANGELOG.md` – Add section for new version
- Update `README.md` – Change current version number

### 4. Release Phase
- Create Git tag: `git tag -a v3.1 -m "NothingQ V3.1 — Lives System"`
- Push tag: `git push origin v3.1`
- Create GitHub Release from tag with detailed release notes
- Link to GitHub Release in any announcements

---

## File Structure & Purposes

```
NothingQ/
├── README.md              # Project overview, quick start, links
├── PLAN.md                # Future roadmap and planned features
├── CHANGELOG.md           # Complete version history with changes
├── index.html             # HTML structure and UI elements
├── style.css              # Styling, animations, responsive design
├── script.js              # Game logic, mechanics, state management
├── .github/
│   └── copilot-instructions.md  # This file
└── .gitignore (if needed)
```

### File Purposes

**README.md**
- Project overview and description
- Quick start guide
- Current version highlights
- Links to other documentation
- Version history table
- Build info (built on Samsung S23 Ultra, etc.)

**PLAN.md**
- Released versions checklist
- Upcoming versions with features to implement
- Development guidelines and standards
- Performance targets
- Design principles

**CHANGELOG.md**
- Complete history of all versions
- What was added, fixed, changed in each version
- Release dates
- Follows Keep a Changelog format

**GitHub Releases**
- Polished public announcements
- Detailed release notes for each tag
- Marketing-friendly descriptions
- Comparison links (v2.9...v3.1)
- Files changed and impact

---

## Versioning Strategy

Small, focused releases make debugging easier and let players follow evolution:

- **V3.1** – Lives System ✅
- **V3.2** – Shop System
- **V3.3** – Missions & Achievements
- **V3.4** – Achievements (if split from V3.3)
- **V3.5** – Boss Mode
- **V3.6** – Daily Challenge
- **V3.7** – Themes & Sounds
- **V4.0** – Major milestone (PWA, polish, etc.)

Each version is:
- Small enough to ship quickly
- Big enough to be meaningful
- Tagged and released independently
- Playable and tested

---

## Feature Development

### When Adding Features
1. Identify which version (V3.2, V3.3, etc.)
2. Check PLAN.md for the feature status
3. Explain the implementation approach before coding
4. Make changes with clear comments
5. Review code for errors
6. Play-test thoroughly
7. Update PLAN.md when complete (change ☐ to ✅)
8. Update CHANGELOG.md with Added/Fixed sections
9. Create Git tag and GitHub Release

### Key Game Files

**index.html**
- Title and slogan
- HUD display (Lives, Score, Coins, Best, Level, Combo)
- Game container
- Game Over modal
- Particle containers

**style.css**
- Dark theme (black background)
- Responsive design
- Animations and transitions
- Modal and UI styling
- Emoji sizing and positioning

**script.js**
- Game state management (score, lives, level, combo, coins)
- Target mechanics (spawn, click handlers)
- Lives system and game over logic
- Level progression and speed scaling
- Particle effects
- localStorage for best score

---

## Performance Targets
- Page load: < 1 second
- Smooth 60fps gameplay
- Minimal CPU usage
- Small bundle size (< 50KB total)

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

## Current Version: V3.1

All V3.1 features completed:
- ✅ Lives system (3 lives start)
- ✅ Life loss mechanics (miss target, bomb click)
- ✅ Game Over modal
- ✅ Restart functionality (preserves Best Score)
- ✅ UI improvements
- ✅ Bug fixes

See PLAN.md for next version (V3.2).

---

## Testing Checklist

Before considering a feature complete:
- [ ] Game runs without errors
- [ ] Gameplay is smooth and responsive
- [ ] All existing features still work
- [ ] Score, coins, level, combo update correctly
- [ ] Particle effects display properly
- [ ] localStorage saves/loads Best Score
- [ ] Mobile touch works smoothly
- [ ] Vibration feedback triggers (if device supports it)
- [ ] Restart button resets game (keeps Best Score)
- [ ] No console errors
- [ ] Lives system works correctly (if feature includes it)
- [ ] Game Over modal displays properly (if feature includes it)

---

## Common Tasks

### To add a new game mechanic:
1. Explain the approach and affected files
2. Add logic to script.js
3. Update index.html if UI changes needed
4. Update style.css if styling changes needed
5. Review code for errors
6. Play-test thoroughly
7. Update PLAN.md and CHANGELOG.md
8. Create Git tag and GitHub Release

### To modify the UI:
1. Explain the visual changes
2. Update index.html for structure
3. Update style.css for styling
4. Update script.js if needed for functionality
5. Test on mobile
6. Update CHANGELOG.md

### To fix a bug:
1. Identify the affected file
2. Locate the problematic code
3. Explain the fix
4. Make the change with comments
5. Review for side effects
6. Test the fix and nearby features
7. Update CHANGELOG.md under "Fixed"

---

## Git Commit Messages

Use clear, descriptive commit messages:
```
feat: Add shop system with coin spending
fix: Prevent game over modal from showing multiple times
docs: Update PLAN.md with V3.2 completion status
style: Improve game over modal styling
refactor: Simplify target click handler
```

---

## Questions to Ask Yourself

- Is this vanilla HTML/CSS/JS only?
- Does this preserve existing gameplay?
- Will this slow down the game?
- Is the code easy to understand?
- Have I explained the changes clearly?
- Have I tested thoroughly?
- Should PLAN.md be updated?
- Should CHANGELOG.md be updated?
- Is this ready for a new version tag?

---

## Release Checklist

Before creating a Git tag and GitHub Release:
- [ ] Feature is complete and working
- [ ] Code review done (syntax, logic, errors)
- [ ] Play-tested the game
- [ ] PLAN.md updated (feature marked ✅)
- [ ] CHANGELOG.md has Added/Fixed sections
- [ ] README.md shows new version as current
- [ ] All commits are pushed
- [ ] Ready to create Git tag

---

**Last Updated:** July 10, 2026  
**Repository:** QnowLAB/NothingQ  
**Contact:** @QnowLAB
