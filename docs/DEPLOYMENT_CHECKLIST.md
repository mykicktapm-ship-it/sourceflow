# DEPLOYMENT_CHECKLIST
_Last updated: 2025-12-14_

## WebApp
- Hosted over HTTPS
- Telegram Bot menu button opens WebApp URL
- Telegram domain whitelisting if required by platform

## TON Connect
- tonconnect-manifest.json reachable via HTTPS
- manifest URL configured in env

## API + Bot
- API public HTTPS endpoint
- Bot token set in env
- Webhook configured OR polling enabled
- Manager chat id configured

## Secrets
- Real secrets stored in platform env vars
- .env never committed

## Smoke tests
- login works in Telegram
- wallet connects
- intent created
- payment verified on-chain
- manager receives messages
