# API Spec (Logical)

Так как отдельного backend-хранилища нет, API-слой рассматривается как логический контракт между Mini App и Bot/оператором.

## События/команды, которые Mini App отправляет в Telegram Bot
- auth/telegram: userId, username, initData validation result
- wallet/connect: walletAddress, status
- balance/topup_intent: amount, currency=TON
- payments/created: paymentId, amount, payload
- payments/status: pending/success/failed/expired
- tariffs/select: tariffId
- tariffs/purchased: tariffId, amount, status
- orders/create: orderPayload (вся структура ордера)
- orders/status: draft/pending_payment/paid/active/...
- services/add_to_cart: serviceId
- cart/status: items[], total
- requests/create: requestPayload (форма заявки)

## Ошибки (пример)
- TG_INITDATA_INVALID
- WALLET_NOT_CONNECTED
- INSUFFICIENT_BALANCE
- PAYMENT_EXPIRED
- VALIDATION_ERROR
