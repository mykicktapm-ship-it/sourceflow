# LOCAL_DEV_RUNBOOK
_Last updated: 2025-12-14_

## Prereqs
- Node.js 20 LTS
- pnpm 9.x

## Setup
1) Copy env:
   - cp .env.example .env
   - fill placeholders with dev values

2) Install:
   - pnpm install

## Run (3 terminals)
- Webapp:
  - cd apps/webapp
  - pnpm dev

- API:
  - cd apps/api
  - pnpm dev

- Bot:
  - cd apps/bot
  - pnpm dev

## Notes
- For Telegram WebApp, you need HTTPS in prod.
- In dev, you may use a tunnel for API callbacks if needed.
