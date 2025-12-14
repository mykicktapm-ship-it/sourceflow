# STACK_AND_RUNTIME.md
_Last updated: 2025-12-14_

## Stack (chosen)
- Frontend: React + TypeScript + Vite + Tailwind
- Telegram: Telegram WebApp SDK
- Wallet: TON Connect
- Backend: Node.js + TypeScript + Fastify
- Bot: grammY
- State (recommended): Redis (TTL-based)
- TON verification: TON API provider polling (toncenter/tonapi)

## Why Variant B
Потому что ручная проверка оплаты это хобби для людей, которым нечем заняться.
Нам нужна автоматическая проверка tx в сети TON.

## Local dev (minimum)
1) Run API
2) Run Bot
3) Run Webapp
4) Expose API with HTTPS tunnel (for Telegram WebApp, optional in dev)

## Payment verification approach
- The app creates a payment intent:
  - expectedAmount
  - recipientAddress
  - payload/comment (unique)
  - ttlSeconds (48h)
- User pays via TON Connect
- Backend verifies by:
  - walletAddress
  - amount
  - payload/comment match
  - time window
  - confirmations (>=1)

## Failure modes to handle
- User paid wrong amount
- User paid without payload/comment
- Payment arrives after TTL
- Provider API temporary failure (retry with backoff)
