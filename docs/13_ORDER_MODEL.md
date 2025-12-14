# Order Model

## Сущность Order (логическая модель)
### Основные поля
- id
- telegramUserId
- title (optional)
- goal (traffic/leads/installs/sales)
- niche (optional)
- geo (required)
- sources[] (list)
- totalBudget (required)
- dailyLimit (optional)
- durationDays or endDate (optional)
- kpiType (optional) : CPA/CPL/CPM/CPC
- kpiValue (optional)
- notes (optional)
- allocationMode: auto/manual
- allocations[] (если manual)

### Allocation (если manual)
- source
- percent
- cap (optional)

## Статусы
- draft
- pending_payment
- paid
- active
- paused
- completed
- canceled
- expired

## Метрики (когда включена «Метрика»)
- spent
- leads
- clicks
- impressions
- cpa/cpl фактические
- roi (если применимо)
