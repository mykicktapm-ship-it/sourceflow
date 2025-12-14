# ACCEPTANCE_CRITERIA
_Last updated: 2025-12-14_

## Must pass (MVP)
1) Opens inside Telegram as WebApp (mobile-first)
2) Shows user avatar + username (if available)
3) initData validated server-side
4) Wallet connect works (TON Connect)
5) Wallet address is linked to telegramUserId
6) User can create an order (wizard)
7) Order appears as pending_payment with 48h expiry
8) Payment intent generated with unique payload/comment
9) User can pay via TON Connect
10) Backend verifies tx via TON API provider
11) Payment status becomes success (idempotent)
12) Order status becomes paid
13) Manager receives "Order created" message
14) Manager receives "Payment verified" message
15) User can submit request ticket
16) Manager receives request ticket with all fields
17) Metrics locked until unlocked flag is true
18) App handles errors (toasts + retry)
