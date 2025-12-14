# BOT_MESSAGES (manager channel)
_Last updated: 2025-12-14_

All messages must be structured, readable, and include:
- Telegram userId
- username (if available)
- walletAddress (if linked)
- links/actions if applicable

## 1) New login
Title: EVILS / Login
Fields:
- userId
- username
- time

## 2) Wallet linked
Title: EVILS / Wallet Connected
Fields:
- userId
- walletAddress

## 3) Order created
Title: EVILS / New Order
Fields:
- userId, username
- orderId
- goal, geo, sources
- totalBudget, dailyLimit
- notes
- status (pending_payment) + expiresAt

## 4) Payment verified
Title: EVILS / Payment Verified
Fields:
- userId, username
- intentId, txHash
- amount
- ref (orderId/tariff)
- status success

## 5) Request ticket
Title: EVILS / Request
Fields:
- userId, username
- topic
- dynamic fields list
- message
- link (optional)
