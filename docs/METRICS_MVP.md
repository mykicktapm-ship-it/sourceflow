# METRICS_MVP
_Last updated: 2025-12-14_

## Unlock rule
metricsUnlocked becomes true only when:
- payment intent status == success
- AND keyIssued == true (from manager workflow or server flag)

## MVP UI
- Chart 1: Spend over time
- Chart 2: Leads over time
- Chart 3: Spend by source
- Table: source | spend | leads | cpa

## Data source
- MVP uses mock JSON returned by API: GET /metrics?orderId=...
- Later: real provider integrations

## States
- locked
- loading
- empty
- error
- success
