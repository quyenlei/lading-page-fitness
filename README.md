# Frontend

Next.js 16 App Router frontend with React 19 and Tailwind CSS v4.

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable                        | Side   | Default                  | Description                                    |
|---------------------------------|--------|--------------------------|------------------------------------------------|
| `API_URL`                       | Server | `http://localhost:8000`  | Base URL of the backend API (no trailing slash) |
| `NEXT_PUBLIC_API_URL`           | Client | `http://localhost:8000`  | Base URL of the backend API (client-side)       |
| `NEXT_PUBLIC_BASE_URL`          | Client | `http://localhost:3000`  | Frontend base URL, used for SEO/metadata        |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Client | —                      | Maps JavaScript API + enable **Maps Static API** for destination card thumbnails |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`  | Client | —                      | Google reCAPTCHA v3 site key                    |

## Data fetching

Two utilities are provided in `lib/fetcher/`:

### Server Components — `serverFetch`

```ts
import { serverFetch } from '@/lib/fetcher/server'

const data = await serverFetch<MyType>('/endpoint')
```

Prepends `API_URL` and defaults to `cache: 'force-cache'`. Pass `RequestInit` options as the second argument to override (e.g. `{ cache: 'no-store' }` or `{ next: { revalidate: 60 } }`).

### Client Components — `swrFetcher`

```ts
import useSWR from 'swr'
import { swrFetcher } from '@/lib/fetcher/client'

const { data } = useSWR<MyType>('/api/endpoint', swrFetcher)
```

Pass the full URL (e.g. a Next.js Route Handler) — no base URL is prepended.