# CODEX_BUILD_BRIEF — EVILS
_Last updated: 2025-12-14_

## Mission
Build a production-ready **Telegram Mini App** (EVILS) with:
- WebApp UI (Cabinet / Services / Create Order / Resources)
- Telegram auth (initData validation on server)
- TON Connect wallet linking
- **Variant B** payments: on-chain tx verification via TON API provider
- Manager/operator workflow through Telegram Bot (structured messages)

## Non-negotiables
- Telegram-only UX (mobile-first, narrow viewport, no hover)
- No real secrets committed. Use `.env` from `.env.example`
- Payment verification MUST be idempotent
- Orders can wait for payment **48h**, then expire
- Metrics tab is locked until payment verified + key issued

## Repo layout (required)
- /docs
- /apps/webapp         (Vite React TS)
- /apps/api            (Fastify TS)
- /apps/bot            (grammY TS)
- /shared              (shared types/schemas)
- .env.example

## Source of truth docs
- packs 1–6 already in /docs (EVILS docs)
- pack 7 adds the missing “build contract” and exact flows

## Deliverables checklist
1) WebApp runs in Telegram and displays user avatar/username
2) Wallet connect + wallet status
3) Create order wizard + order details screen
4) Payment intent generation + TON tx verification
5) Manager bot messages for: login, order created, payment verified, request ticket
6) Local dev runbook and env placeholders

