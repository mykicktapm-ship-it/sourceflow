# ARCHITECTURE_SEQUENCE
_Last updated: 2025-12-14_

## 1) Auth flow
1. WebApp reads Telegram `initData`
2. WebApp -> API: `POST /auth/telegram` with initData
3. API validates initData signature
4. API returns `sessionToken` (short-lived) + `user`

## 2) Wallet connect flow
1. User connects wallet via TON Connect
2. WebApp -> API: `POST /wallet/link` with walletAddress
3. API emits event to Bot (manager notification)

## 3) Order flow
1. WebApp -> API: `POST /orders` with order payload
2. API returns order with status `pending_payment` and TTL=48h
3. Order visible in Cabinet -> Active (pending_payment)

## 4) Payment Variant B flow (verification)
1. WebApp -> API: `POST /payments/intent` for order/tariff/topup
2. API returns intent: recipient, amount, payload/comment, expiresAt
3. WebApp uses TON Connect to send transfer
4. WebApp -> API: `POST /payments/verify` with txHash OR (walletAddress + intentId)
5. API polls TON API provider until confirmed or timeout
6. API sets payment status `success` and order status `paid`
7. API -> Bot: "Payment verified" + full context

## 5) Request/support flow
1. WebApp -> API: `POST /requests`
2. API -> Bot: structured ticket to manager with all fields
