# Data Model (No DB Runtime)

Отдельной базы данных в проекте нет.
Ниже — логическая схема сущностей, чтобы сохранялась совместимость форматов и событий.

## Entities
- user: telegramUserId, username, avatarUrl
- wallet: telegramUserId, walletAddress, status
- balance: telegramUserId, tonAmount
- transaction: id, telegramUserId, type, amount, status, createdAt
- tariff: id, title, description, price, duration
- subscription: id, telegramUserId, tariffId, status, startedAt, endsAt
- order: (см. 13_ORDER_MODEL.md)
- order_allocation: orderId, source, percent, cap
- service: id, title, description, price
- cart: telegramUserId, items[]
- request: id, telegramUserId, topic, fields[], message, status
- resource: id, title, type, status
- integration: resourceId, method, status
