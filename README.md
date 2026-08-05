# arcraiders

ARC Raiders **Loadout Planner** — a small, modern web app for building and
balancing a raid loadout. Built with Vite + React + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build         |
| `npm run lint`    | Lint the codebase with ESLint        |
| `npm run typecheck` | Type-check without emitting output |

## Cloud Agent environment

`.cursor/environment.json` configures the Cursor Cloud Agent environment:

- `install` runs `npm install` after checkout.
- A `dev-server` terminal runs `npm run dev` so the app is available while an
  agent works.
