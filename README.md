# EVILS Monorepo

Bootstrap monorepo for the EVILS project using pnpm workspaces. Phase 0 delivers minimal, buildable skeletons for the web app, API, bot, and shared packages without business logic.

## Structure
- `apps/webapp` — Vite + React + TypeScript skeleton with TailwindCSS configured.
- `apps/api` — Fastify + TypeScript skeleton with a basic health endpoint.
- `apps/bot` — grammY + TypeScript skeleton that starts without handlers.
- `shared` — placeholder shared module for future types and schemas.
- `docs` — project documentation.

## Getting started
1. Install prerequisites: Node.js 20 LTS and pnpm 9.x.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run development servers (separate terminals):
   ```bash
   pnpm --filter webapp dev
   pnpm --filter api dev
   pnpm --filter bot dev
   ```

## Scripts
- `pnpm dev` — run dev scripts for all workspaces where applicable.
- `pnpm build` — build all workspaces.
- `pnpm lint` — lint all workspaces.
- `pnpm typecheck` — run TypeScript checks for all workspaces.
