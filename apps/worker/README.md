# Praxis Navigator Worker

This is the Cloudflare Worker that handles API requests for the Praxis Navigator website, specifically the contact form submissions.

## Architecture

- **Location**: `/api/*` routes on `praxisnavigator.io`
- **Function**: Processes contact form submissions and sends emails via Microsoft Graph API
- **Dependencies**: KV storage for rate limiting and consumer email tracking

## Development

```bash
# Start local development server
npm run dev

# Deploy to Cloudflare
npm run deploy

# View logs
npm run tail
```

## From Root Directory

```bash
# Develop worker locally
npm run dev:worker

# Deploy worker to production
npm run deploy:worker
```

## Configuration

Environment variables are set in the Cloudflare dashboard:
- `CF_M365_TENANT_ID`: Microsoft 365 tenant ID
- `CF_M365_CLIENT_ID`: Azure app client ID  
- `CF_M365_SENDER`: Sender email address
- `RECIPIENT_EMAIL`: Recipient email address
- `CF_M365_CLIENT_SECRET`: Azure app client secret (set via: `npx wrangler secret put CF_M365_CLIENT_SECRET`)

## KV Namespaces

- `RATE_LIMIT_KV`: Stores rate limiting data
- `CONSUMER_EMAIL_KV`: Tracks consumer email submissions