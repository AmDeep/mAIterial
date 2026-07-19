# BioMat Finder

A semantic biomaterials discovery engine that maps biological species to extractable biomaterials using an AI-powered chat interface, a living knowledge graph with confidence scores, and a Bayesian belief revision system.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/biomat-finder run dev` — run the frontend (port varies, routed to `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Required env: `AI_INTEGRATIONS_GEMINI_BASE_URL`, `AI_INTEGRATIONS_GEMINI_API_KEY` — auto-provisioned by Base44 Gemini AI Integration

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite, Tailwind CSS v4, Wouter router, TanStack Query, Framer Motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- AI: Google Gemini (`gemini-2.5-flash`) via Base44 AI Integrations proxy — no user API key needed
- Validation: Zod (v3), drizzle-zod
- API codegen: Orval (from OpenAPI spec in `lib/api-spec/openapi.yaml`)
- Build: esbuild (CJS bundle); `@google/genai` must NOT be in esbuild externals (removed `@google/*` glob)

## Where things live

- `lib/api-spec/openapi.yaml` — single source of truth for all API contracts
- `lib/db/src/schema/` — Drizzle schema: species, materials, claims, evidence, conversations, messages
- `lib/integrations-gemini-ai/` — Gemini AI integration workspace package
- `artifacts/api-server/src/routes/` — all Express route handlers
- `artifacts/biomat-finder/src/` — React frontend (dark bioluminescent theme)

## Architecture decisions

- **Belief revision engine** (`routes/evidence.ts`): Bayesian-style confidence update using evidence type weights (replicated=+0.12, peer_reviewed=+0.08, experimental=+0.05, retracted=-0.15). Replication multiplier (log scale). Result sentiment analysis. Confidence clamped to [0.01, 0.99].
- **Prompt injection defense**: Two-layer protection. Layer 1: server-side regex pattern matching on all incoming chat messages AND evidence fields — injection attempts are logged, blocked, and returned as warning messages. Layer 2: Gemini system prompt explicitly instructs the model to never modify the knowledge base from user text. Text can never overwrite the DB.
- **SSE streaming chat**: `POST /api/chat/conversations/:id/messages` streams SSE. Frontend uses raw `fetch` + `ReadableStream` (not the generated hook) because Orval cannot generate SSE response types. Response embeds `<SPECIES_JSON>[...]</SPECIES_JSON>` which the server parses to extract species recommendations.
- **Knowledge graph**: Stored in PostgreSQL as species+materials nodes and claims edges with confidence (0-1). Graph endpoint assembles nodes+edges at query time. No separate graph DB needed.
- **esbuild external list**: Removed `@google/*` glob from `artifacts/api-server/build.mjs` so `@google/genai` gets bundled. Keep `@google-cloud/*` external.

## Product

- **Chat Copilot** (`/`): Users describe material properties in natural language; Gemini streams back species recommendations with confidence scores and extraction methods. Injection attempts are blocked and flagged.
- **Mission Control** (`/dashboard`): Stats overview — species count, materials, claim confidence distribution, injection blocks, recent verified discoveries.
- **Semantic Graph** (`/knowledge-graph`): Interactive species↔material graph with confidence threshold slider. Edge thickness/opacity reflects confidence.
- **Species Explorer** (`/species`): Searchable grid by kingdom (Animalia, Plantae, Bacteria, Fungi, Archaea).
- **Species Detail** (`/species/:id`): Taxonomy, habitat, all associated materials with confidence bars.
- **Materials Library** (`/materials`): Browse biomaterials by property or category.
- **Knowledge Claims** (`/claims`): Full claims table with status (verified/disputed/retracted/unverified).
- **Evidence Feed** (`/evidence`): Belief revision log — accepted evidence, blocked injections, confidence deltas.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- After any change to `lib/api-spec/openapi.yaml`, always re-run `pnpm --filter @workspace/api-spec run codegen` before touching the frontend or backend.
- Do NOT add `@google/*` back to the esbuild external list — it will break the Gemini integration at runtime.
- The `zod.looseObject` API exists in Zod v4 only. The workspace uses Zod v3 (`^3.25.76`). Avoid bare `type: object` without properties in the OpenAPI spec (Orval 8.x emits `looseObject` for those).
- Drizzle `push` works for dev schema changes. Production uses Base 44's publish-time diff flow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- See `lib/api-spec/openapi.yaml` for the full API contract
- See `.local/skills/ai-integrations-gemini/SKILL.md` for Gemini integration details
