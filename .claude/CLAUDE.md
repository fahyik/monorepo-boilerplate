# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Boilerplate/starter template for a Turborepo-based TypeScript monorepo with npm workspaces. `@packagename` is a placeholder scope — rename it throughout when forking for a real project. Uses npm (not yarn/pnpm/bun). Requires Node >= 24.14.0, npm >= 11.11.0.

## Commands

```bash
npm install                          # Install all dependencies
npm run dev                          # Start all apps in dev mode
npm run build                        # Build all packages and apps
npm run lint                         # Lint all packages and apps
npm run test                         # Run all tests
npm run format                       # Prettier format all .ts/.tsx/.md files

# Run commands for a specific workspace
npx turbo run build --filter=api
npx turbo run test --filter=api
npx turbo run lint --filter=web

# Run a single test file (from the workspace directory)
cd apps/api && npx jest path/to/test.ts --detectOpenHandles
cd packages/logger && npx jest path/to/test.ts
```

## Architecture

**Apps:**
- `apps/web` - Next.js 16 frontend (React 19, Tailwind CSS v4, port 3000)
- `apps/api` - Express 5 backend (Knex + PostgreSQL, JWT auth via express-jwt, port 3001)
- `apps/mobile` - Mobile app (placeholder)

**Shared packages** (all scoped `@packagename/*`):
- `packages/ui` - React component library (Radix UI, shadcn/ui pattern with CVA + tailwind-merge). Exports via `@packagename/ui/components` and `@packagename/ui/lib/*`
- `packages/logger` - Winston-based logger with Morgan HTTP logging. Builds to `dist/`
- `packages/eslint-config` - Shared ESLint flat configs: `server.mjs` (for api), `next.mjs` (for web), `react-internal.mjs` (for ui)
- `packages/typescript-config` - Shared tsconfig: `base.json`, `nextjs.json`, `react-library.json`
- `packages/jest-presets` - Jest preset using ts-jest

**Build dependency chain:** packages build first (`^build` in turbo.json), then apps consume them.

## Code Style

- Prettier: double quotes, semicolons, trailing commas (es5), 80 char width
- Import sorting via `@trivago/prettier-plugin-sort-imports` (order: @core, @server, @ui, relative, @packagename, @/)
- ESLint: `no-explicit-any` is an error, `no-floating-promises` is a warning, `import/no-cycle` is an error, `eqeqeq` is enforced
- Unused vars prefixed with `_` are allowed

## API App Structure

- `src/index.ts` - Entry point, server startup
- `src/app.ts` - Express app setup
- `src/controllers/` - Route handlers
- `src/middleware/` - Auth (JWT), error handler, interfaces
- `src/db/` - Knex database connection
- `src/server/` - Process lifecycle management
- Tests live in `src/__tests__/`

## Environment Variables

API uses `.env.development.local` for dev, `.env.production` for prod. Key env vars defined in `turbo.json`: `NEXT_PUBLIC_API_HOST`, `DB_*` (PostgreSQL), `AUTH_*` (JWT), `PORT`, `NODE_ENV`, `CLUSTER_ENVIRONMENT`.
