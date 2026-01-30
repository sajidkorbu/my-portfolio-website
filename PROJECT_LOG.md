# Project Log

## 2026-01-30
- Started local dev server on port 3001 for live review (background).
- Agreed on an ultra-safe cleanup approach: identify unused files, then archive to `src/legacy/` instead of deleting.
- Archived unused React files into `src/legacy/` (no deletions): `src/About.js`, `src/Library.js`, `src/Home.jsx`, `src/articles.js`, `src/pages/Home.js`, `src/pages/Home.jsx`, `src/pages/Home.css`, `src/pages/Profile.js`, `src/pages/Profile.css`, `src/pages/WhyHow.js`, `src/pages/WhyHow.css`, `src/components/Library.jsx`, `src/components/Bookshelf/Bookshelf.jsx`, `src/components/Bookshelf/Bookshelf.css`.
- Restored scroll-to-top on route change using a `ScrollToTop` helper in `src/App.js`.
- Applied the TinyExperiments washi theme globally by adding `washi-theme` to the app container and styling `.content-inner` as textured paper with torn edge.
- Updated the Now page life-happenings section with the website redesign story and shout-out to Anshuman on X, plus the Kimi 2.5 → Opus 4.5 → Codex workflow.
- Reordered the Now page life-happenings paragraph and linked the Anshuman shout-out.
- Switched the global washi treatment to apply to cards/blocks instead of the whole content area; removed the page-level paper box and fixed profile photo border by covering the container.
- Tweaked washi styling: hero box uses paper without torn edge, interests boxes use paper without torn edge, Now page cards are roomier and rounder, library container/modal now use washi texture, and profile photo reverted to original size without cropping.
- Added Tiny Experiments card #1 for the portfolio website itself.
- Updated sidebar hover/active colors to align with the washi theme palette.
- Library: removed the container box so the page floats on the background; applied washi cards to the "more" tab items.
- Shortened the active underline under the Library tabs so the "more" line is tighter to the text.
- Replaced washi paper cards with a glass-style transparent card treatment across pages and in the Library "more" cards.
- Tuned the glass effect to match the Home photo box (lighter transparency, no blur).
- Increased transparency of glass cards across pages and Library "more" cards.
- Matched card styling exactly to the Home photo container (transparent background + same shadow).
- Kept the ink-wash background at center 85% but restored it to fixed (no scroll movement).
- Updated Tiny Experiments cards to match the transparent Home photo box styling.
- Added a subtle border to Tiny Experiments cards for visibility.
- Matched Tiny Experiments cards to the global card style (transparent background, no border, same shadow).
