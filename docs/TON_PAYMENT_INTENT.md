# TON_PAYMENT_INTENT (Variant B)
_Last updated: 2025-12-14_

## Goal
Make payments verifiable, idempotent, and safe:
- exact matching rules
- TTL
- provider retry logic

## Intent object
- intentId (uuid)
- type: topup | tariff | order | service_cart
- telegramUserId
- walletAddress (optional at creation, present at verify)
- recipientAddress (project wallet)
- amountTon (decimal)
- payload/comment (string, unique)
- createdAt
- expiresAt (createdAt + 48h)
- status: created | pending | success | failed | expired

## Payload/comment format (recommended)
EVILS:<intentId>:<telegramUserId>

Rules:
- Must include intentId
- Must be short enough for TON comment limits
- Must be unique per payment

## Verification rules (must match)
A tx counts as payment success only if:
1) recipient == recipientAddress
2) amount >= amountTon (exact preferred; allow tiny fee variance only if needed)
3) comment/payload contains exact `intentId`
4) txTime between createdAt and expiresAt
5) confirmations >= 1 (or provider-specific finality rule)

## Idempotency
- intentId is the idempotency key
- A txHash can be linked to only one intent
- Re-verifying same intent must return same final state (no duplicates)

## Failure handling
- wrong amount -> failed (reason WRONG_AMOUNT)
- missing payload -> failed (reason MISSING_PAYLOAD)
- late tx -> expired (reason TTL_EXPIRED)
- provider down -> retry with exponential backoff, return pending to client

## Security
- Never trust "client says paid"
- Verification is server-side only
