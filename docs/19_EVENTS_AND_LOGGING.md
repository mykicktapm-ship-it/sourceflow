# Events & Logging

## Что логируем
- Вход пользователя (Telegram)
- Подключение кошелька
- Любые намерения оплатить
- Создание/изменение ордера
- Отправку заявок
- Ошибки UI/валидаций

## Event list (минимум)
- user_logged_in
- wallet_connected
- wallet_revoked
- payment_created
- payment_confirmed
- payment_failed
- order_created
- order_updated
- order_paid
- order_started
- order_paused
- order_completed
- request_submitted
- cart_updated

## Куда уходит лог
- В Telegram Bot менеджеру/оператору (структурировано)
- (опционально) локальный лог в консоль для отладки
