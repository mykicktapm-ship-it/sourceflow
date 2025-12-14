# API_CONTRACT (minimal)
_Last updated: 2025-12-14_

Base URL: /api

## Auth
### POST /auth/telegram
Request:
- initData: string
Response:
- sessionToken: string
- user: { telegramUserId, username?, avatarUrl? }

## Me
### GET /me
Headers: Authorization: Bearer <sessionToken>
Response: user + wallet + balance + flags (metricsUnlocked)

## Wallet
### POST /wallet/link
Body: { walletAddress: string }
Response: { status: connected }

## Orders
### POST /orders
Body: OrderPayload (see shared schema)
Response: Order (status pending_payment + expiresAt)

### GET /orders
Response: Order[]

### GET /orders/:id
Response: Order

## Payments
### POST /payments/intent
Body: { type, refId(orderId/tariffId), amountTon }
Response: PaymentIntent

### POST /payments/verify
Body (option A): { intentId, txHash }
Body (option B): { intentId, walletAddress }
Response: PaymentIntent (status pending/success/failed/expired)

## Requests
### POST /requests
Body: RequestTicketPayload
Response: { id, status }

## Catalog
### GET /catalog/services
Response: ServiceItem[]

### GET /catalog/tariffs
Response: TariffItem[]

## Errors (examples)
- TG_INITDATA_INVALID
- UNAUTHORIZED
- VALIDATION_ERROR
- PAYMENT_EXPIRED
- PAYMENT_NOT_FOUND
- PROVIDER_UNAVAILABLE
