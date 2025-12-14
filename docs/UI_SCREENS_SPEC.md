# UI_SCREENS_SPEC
_Last updated: 2025-12-14_

## Global rules
- Mobile-first
- Safe areas
- No hover
- Toast notifications
- Modals for deep actions

## Tab: Кабинет
Blocks:
- Header: avatar, username, wallet status, balance
- Buttons: Topup, Buy Tariff, Active Campaigns, Success Campaigns, Submit Request
States:
- loading / empty / error

## Tab: Услуги
- Category filter
- Service cards grid/list
- Service details modal
Actions:
- add to cart
- buy now
States:
- loading / empty

## Tab: Создать ордер
- Wizard (multi-step)
- Summary screen
Actions:
- pay now / pay later
States:
- validation errors
- pending_payment timer indicator

## Tab: Ресурсы
- Resource groups
- Resource card with status and action button
- Integration info modal

## Locked tab: Метрика (inside Cabinet or separate)
- Locked state until metricsUnlocked=true
- When unlocked (MVP):
  - 3 charts (mock data)
  - 1 table breakdown by source
