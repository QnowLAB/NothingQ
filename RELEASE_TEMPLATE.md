# Release Template

Use this template for every GitHub Release to ensure consistency.

---

## Title Format

```
NothingQ V3.2 — Shop System
```

Or for bug fix releases:

```
NothingQ V3.1.1 — Bug Fixes
```

---

## Release Notes Template

```markdown
# NothingQ V3.2 — Shop System

Brief one-sentence description of what this version adds.

## What's New

### Added
- Feature 1
- Feature 2
- Feature 3

### Fixed
- Bug 1
- Bug 2

### Changed
- Behavior change 1
- Behavior change 2

## Known Issues

- Issue 1 (workaround: ...)
- Issue 2

## Files Changed

- `index.html` – Added shop modal UI
- `style.css` – Added shop styling
- `script.js` – Implemented shop logic

## Technical

Built with:
- Vanilla HTML, CSS, JavaScript
- No frameworks or dependencies
- Lightweight (~50KB)

## Compare with Previous Version

[v3.1...v3.2](https://github.com/QnowLAB/NothingQ/compare/v3.1...v3.2)

---

Built by @QnowLAB on a Samsung S23 Ultra.
```

---

## Filling Out the Template

### Title
- Always include version number: `V3.2`
- Always include feature: `— Shop System`
- Use em dash (—) not double hyphen (--)

### What's New

**Added** – New features
```markdown
- ❤️ Lives system (start with 3 lives)
- Game Over modal
- Restart button
```

**Fixed** – Bug fixes
```markdown
- Prevented double combo increment
- Fixed premature life loss on game start
```

**Changed** – Behavior changes (not new features, not bug fixes)
```markdown
- Increased bomb damage from 5 to 10 coins
- Changed level requirement from 20 to 25 points
```

### Known Issues

List any known problems:
```markdown
## Known Issues

- Occasional stutter on low-end Android devices
  (Workaround: Close other apps)
- Touch double-click sometimes registers twice
  (Workaround: Use slow, deliberate taps)
```

If no issues, write:
```markdown
## Known Issues

None reported. Please file an issue if you find problems.
```

### Files Changed

List what changed and why:
```markdown
## Files Changed

- `index.html` – Added shop modal structure
- `style.css` – Added shop modal styling and animations
- `script.js` – Implemented shop logic and coin spending
```

### Compare Link

Always include a comparison:
```markdown
[v3.1...v3.2](https://github.com/QnowLAB/NothingQ/compare/v3.1...v3.2)
```

Format: `[v{old}...v{new}]` with comparison URL

### Attribution

End with:
```markdown
Built by @QnowLAB on a Samsung S23 Ultra.
```

---

## Example: Complete Release

```markdown
# NothingQ V3.2 — Shop System

Players can now spend coins on upgrades! Start with a basic shop and unlock new items as you progress.

## What's New

### Added
- 🏪 Shop modal (accessible anytime)
- Extra lives purchase (100 coins)
- Combo boost (+5 free combo, 50 coins)
- Speed slow power-up (next 10 targets slower, 75 coins)
- Purchase notification feedback
- Shop persistence (purchases saved to localStorage)

### Fixed
- Prevented accidental shop closes with backdrop clicks
- Fixed coin display not updating after purchase

### Changed
- Coins now have visual importance (larger emoji 🪙)

## Known Issues

None reported.

## Files Changed

- `index.html` – Added shop modal, purchase buttons, notifications
- `style.css` – Shop modal styling, animations, button states
- `script.js` – Shop logic, purchase validation, localStorage persistence

## Technical

Built with:
- Vanilla HTML, CSS, JavaScript
- No frameworks or dependencies
- Lightweight (~50KB)

## Compare with Previous Version

[v3.1...v3.2](https://github.com/QnowLAB/NothingQ/compare/v3.1...v3.2)

---

Built by @QnowLAB on a Samsung S23 Ultra.
```

---

## Tips

1. **Be specific** – "Added shop modal" is better than "Added features"
2. **Use emojis** – Makes release notes scannable (❤️ Lives, 🏪 Shop)
3. **Link comparisons** – Lets readers see exact code changes
4. **Be concise** – Aim for 5-10 bullet points per section
5. **Proofread** – Catch typos and unclear descriptions
6. **Test the links** – Verify comparison URL works before publishing

---

**Last Updated:** July 10, 2026  
**Repository:** QnowLAB/NothingQ
