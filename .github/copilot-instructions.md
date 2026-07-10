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
- **Preserve all existing mechanics:** Score, Coins, Levels, Combo, Best Score, Particle effects, Emoji system, Vibration feedback
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
- **Update PLAN.md** - Check off completed features in the roadmap
- **Test gameplay** - Verify the game works smoothly
- **Verify persistence** - Ensure localStorage and scores work correctly

## Feature Development

### When Adding Features
1. Identify which version (V3.1, V3.2, etc.)
2. Check PLAN.md for the feature status
3. Explain the implementation approach
4. Make changes with clear comments
5. Update PLAN.md when complete (change ☐ to ✅)

### File Structure
```
NothingQ/
├── index.html        (HTML structure, UI elements)
├── style.css         (Styling, animations, responsive design)
├── script.js         (Game logic, mechanics, state management)
├── PLAN.md           (Development roadmap)
├── README.md         (Project overview)
└── .github/
    └── copilot-instructions.md (This file)
```

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

### V3.1 Features (In Progress)
- ☐ Lives system (3 lives start)
- ☐ Life loss mechanics (miss target, bomb click)
- ☐ Game Over modal
- ☐ Restart functionality (preserves Best Score)
- ☐ UI polish

See PLAN.md for complete roadmap.

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

## Common Tasks

### To add a new game mechanic:
1. Add logic to script.js
2. Update PLAN.md status
3. Test thoroughly
4. Explain what changed

### To modify the UI:
1. Update index.html for structure
2. Update style.css for styling
3. Update script.js if needed for functionality
4. Explain the visual changes

### To fix a bug:
1. Identify the affected file
2. Locate the problematic code
3. Explain the fix
4. Make the change
5. Test the fix

## Git Commit Messages

Use clear, descriptive commit messages:
```
feat: Add lives system
fix: Prevent game over modal from showing multiple times
docs: Update PLAN.md with V3.1 completion status
style: Improve game over modal styling
refactor: Simplify target click handler
```

## Questions to Ask Yourself

- Is this vanilla HTML/CSS/JS only?
- Does this preserve existing gameplay?
- Will this slow down the game?
- Is the code easy to understand?
- Have I explained the changes clearly?
- Should PLAN.md be updated?
- Have I tested thoroughly?

---

**Last Updated:** July 10, 2026  
**Repository:** QnowLAB/NothingQ  
**Contact:** @QnowLAB
