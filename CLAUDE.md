# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
yarn dev          # Start development server

# Build & Deploy
yarn build        # Build for production
yarn export       # Export static files to /out
yarn deploy       # Deploy to GitHub Pages (gh-pages -d out)

# Linting
yarn lint         # Run ESLint
```

## Architecture

This is a Next.js 13 application that displays Qiita articles using the Qiita API.

### Tech Stack
- Next.js 13 (Pages Router)
- TypeScript with strict mode
- Material-UI (MUI) v5 for UI components
- Recoil for state management
- Emotion for styled components
- Axios for API requests

### Project Structure

```
src/
├── pages/           # Next.js pages (Pages Router)
│   ├── _app.tsx     # App wrapper with MUI ThemeProvider + RecoilRoot
│   ├── index.tsx    # Home page - article list with DataGrid
│   └── detail/[id].tsx  # Article detail page (dynamic route)
├── components/
│   ├── atoms/       # Basic styled components (Button)
│   ├── molecules/   # Composed components (DataGrid wrapper)
│   └── organisms/   # Complex components (TopBar with settings dialog)
├── utils/
│   ├── api.tsx      # Qiita API client (fetchItems, fetchItem)
│   └── state.tsx    # Recoil atoms (apiTokenState)
└── styles/          # CSS modules and global styles
```

### Key Patterns

- **Path alias**: `@/*` maps to `./src/*`
- **State management**: API token stored in Recoil atom (`apiTokenState`), shared between pages
- **API calls**: All Qiita API interactions in `src/utils/api.tsx`
- **Static export**: Configured with `basePath` and `assetPrefix` for GitHub Pages deployment at `/next-sample-qiita/`
