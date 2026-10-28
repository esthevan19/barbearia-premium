-- Execute no SQL Editor do seu projeto Supabase.
-- Este schema é uma base inicial; revise as regras antes de usar em produção.

create extension if not exists pgcrypto;

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  price_cents integer not null check (price_cents >= 0),
  duration_minutes integer not null check (duration_minutes > 0),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.barbers (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  bio text not null default '',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.barber_services (
  barber_id uuid not null references public.barbers(id) on delete cascade,
  service_id uuid not null references public.services(id) on delete cascade,
  primary key (barber_id, service_id)
);

create table if not exists public.business_hours (
  id uuid primary key default gen_random_uuid(),
  weekday smallint not null check (weekday between 0 and 6),
  opens_at time,
  closes_at time,
  closed boolean not null default false,
  check (closed or (opens_at is not null and closes_at is not null and closes_at > opens_at)),
  unique (weekday)
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_phone text not null,
  service_id uuid not null references public.services(id),
  barber_id uuid references public.barbers(id),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'pending' check (status in ('pending','confirmed','completed','cancelled')),
  notes text not null default '',
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create index if not exists appointments_starts_at_idx on public.appointments(starts_at);
create index if not exists appointments_barber_status_idx on public.appointments(barber_id, status);

alter table public.services enable row level security;
alter table public.barbers enable row level security;
alter table public.barber_services enable row level security;
alter table public.business_hours enable row level security;
alter table public.appointments enable row level security;

-- Acesso público somente para consulta dos dados que podem ser divulgados.
create policy "Public can read active services"
on public.services for select
to anon, authenticated
using (active = true);

create policy "Public can read active barbers"
on public.barbers for select
to anon, authenticated
using (active = true);

create policy "Public can read barber services"
on public.barber_services for select
to anon, authenticated
using (
  exists (select 1 from public.barbers b where b.id = barber_id and b.active = true)
  and exists (select 1 from public.services s where s.id = service_id and s.active = true)
);

create policy "Public can read business hours"
on public.business_hours for select
to anon, authenticated
using (true);

-- Não existe política pública para ler, criar, alterar ou apagar appointments.
-- A criação segura de reservas deve ser feita por endpoint server-side com validação,
-- limitação de requisições e verificação de conflito em transação/constraint apropriada.
-- Admin policies devem ser adicionadas somente após definir o modelo de perfis/roles.
