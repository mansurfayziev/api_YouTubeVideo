# IshTop MVP

Investor-ready MVP web platform for temporary jobs in Tajikistan and CIS.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + ShadCN UI
- Framer Motion
- Supabase (Auth + DB)
- Vercel

## Local Development
```bash
npm install
npm run dev
```

## Environment
Create `.env.local` based on `.env.example`:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Supabase Schema
```sql
create table users (
  id uuid primary key default gen_random_uuid(),
  name text,
  role text,
  rating numeric
);

create table jobs (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  payment text,
  location text,
  status text,
  customer_id uuid references users(id)
);

create table applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references jobs(id),
  worker_id uuid references users(id),
  status text
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  from_user uuid references users(id),
  to_user uuid references users(id),
  rating numeric,
  text text
);
```

## Deployment (Vercel)
1. `npm install`
2. `supabase setup` (configure project, apply schema)
3. Configure Supabase environment variables in Vercel.
4. `vercel --prod`

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
