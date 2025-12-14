# EVILS Project Passport
_Last updated: 2025-12-14_

## 0) Product definition (one-liner)
EVILS — Telegram Mini App для закупки/арбитража трафика: пользователь сам собирает ордер или покупает услугу, оплачивает в TON, система автоматически подтверждает оплату по сети и отправляет менеджеру структурированный заказ.

## 1) Architecture (Variant B: on-chain verification)
**We choose Variant B**: автоматическая проверка транзакций в сети TON (без ручного подтверждения платежей).

### Components
1. **Telegram Mini App (Frontend)**
   - UI: Кабинет / Услуги / Создать ордер / Ресурсы
   - Получает Telegram initData
   - Подключает кошелёк через TON Connect
   - Инициирует оплату и отправляет заявки/ордера в API

2. **API Gateway (Backend without DB)**
   - Валидирует Telegram initData
   - Принимает события от Mini App
   - Генерирует payment intents (payload/comment)
   - Проверяет оплату в TON (polling TON API)
   - Отдаёт Mini App статусы (order/payment)
   - Отправляет менеджеру уведомления через Bot

3. **Telegram Bot (Operator channel)**
   - Принимает события от API
   - Отправляет менеджеру структурированные сообщения
   - (Опционально) команды менеджера: approve/reject, заметки

4. **TON Network + TON API Provider**
   - TON Connect для подписи/отправки транзакции
   - TON API (toncenter/tonapi) для проверки tx

## 2) Runtime flows (happy path)
### Auth
- Mini App -> API: /auth/telegram (initData)
- API validates initData -> returns session token (short-lived)

### Order + Payment
- Mini App -> API: /orders (payload) -> order status = pending_payment (TTL 48h)
- Mini App -> TON Connect: send transfer with payload/comment
- Mini App -> API: /payments/notify (txHash or walletAddress+amount+payload)
- API -> TON API: verify tx (confirmations)
- API -> update order/payment status = success/paid
- API -> Bot: message to manager (order details + user + payment)

### Metrics unlock
- После оплаты и подтверждения сети: вкладка «Метрика» становится доступной.
- В MVP: метрика может быть mock/placeholder, но вход должен быть закрыт по статусу.

## 3) No-DB policy (how we don't lose our mind)
Проект не использует полноценную БД. Но **какое-то** состояние нужно.
Рекомендуемый минимум:
- **Redis** (как state store + TTL для pending_payment)
- Если прям совсем без Redis: in-memory + периодический dump в файл (хуже)

## 4) Hosting / Resources (what must exist)
### Required
- HTTPS hosting for Mini App (static): Vercel/Netlify/Cloudflare Pages/any static host
- HTTPS hosting for API+Bot: VPS/Render/Fly.io/Cloudflare Workers (если подходит)
- Public URL для TON Connect manifest
- Telegram Bot (BotFather)

### Optional but recommended
- Redis (Upstash/Redis Cloud/self-host)
- Log collection (basic file logs is fine)

## 5) Version pinning (recommended)
Frontend:
- Node.js: **20.11+** (recommended 20 LTS)
- pnpm: **9.x**
- React: **18.x**
- Vite: **5.x**
- TypeScript: **5.x**
- TailwindCSS: **3.x**

Backend/Bot (Node):
- Node.js: **20.11+**
- TypeScript: **5.x**
- Framework: Fastify **4.x** (or Express 4.x)
- Bot: grammY **1.x** (or Telegraf 4.x)
- Redis client: ioredis **5.x** (if Redis used)

TON:
- TON Connect SDK: latest stable in package-lock
- TON API: toncenter/tonapi (provider-based)

## 6) Repo layout (suggested)
- /docs
- /apps/webapp        (Telegram Mini App frontend)
- /apps/bot           (Telegram Bot)
- /apps/api           (API Gateway + TON verification)
- /shared             (shared types, schemas)
- .env.example        (placeholders only)

## 7) Environment variables (placeholders)
Use `.env` locally and platform secrets in prod. See `.env.example` in this pack.

## 8) Security basics
- Validate Telegram initData on backend only.
- Never store private keys/seed phrases.
- Payment verification must be idempotent.
- Do not trust client-side “success” events.

