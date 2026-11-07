-- XLearn — schema do ranking da Temporada 1
-- Execute este arquivo uma única vez no SQL Editor do projeto Supabase.
-- A chave pública usada pelo app não cria tabelas: este script precisa ser
-- aplicado por alguém com acesso administrativo ao projeto.

-- Pontuação pública de cada participante por temporada. O e-mail nunca é
-- armazenado aqui; o vínculo com a conta é apenas o UUID do Supabase Auth.
create table if not exists public.season_scores (
  user_id uuid not null references auth.users (id) on delete cascade,
  season_id text not null,
  nickname text not null
    check (char_length(btrim(nickname)) between 2 and 24),
  level_number integer not null default 1
    check (level_number between 1 and 99),
  level_name text not null
    check (char_length(btrim(level_name)) between 1 and 40),
  coins integer not null default 0 check (coins >= 0),
  active_days integer not null default 0 check (active_days >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, season_id)
);

-- Consulta do ranking: moedas primeiro e, em caso de empate, mais dias
-- ativos e atualização mais antiga (quem chegou primeiro àquela marca).
create index if not exists season_scores_leaderboard_idx
  on public.season_scores (season_id, coins desc, active_days desc, updated_at asc);

-- Mantém updated_at coerente mesmo quando o cliente não o envia.
create or replace function public.touch_season_scores_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists season_scores_touch_updated_at on public.season_scores;
create trigger season_scores_touch_updated_at
  before insert or update on public.season_scores
  for each row execute function public.touch_season_scores_updated_at();

alter table public.season_scores enable row level security;

-- Leitura pública: apelido, nível, moedas e dias ativos. O e-mail continua
-- somente em auth.users e nunca é exposto por esta tabela.
drop policy if exists season_scores_public_read on public.season_scores;
create policy season_scores_public_read
  on public.season_scores
  for select
  to anon, authenticated
  using (true);

-- Cada usuário autenticado só pode criar/alterar a própria pontuação.
drop policy if exists season_scores_insert_own on public.season_scores;
create policy season_scores_insert_own
  on public.season_scores
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists season_scores_update_own on public.season_scores;
create policy season_scores_update_own
  on public.season_scores
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

revoke all on public.season_scores from anon;
revoke all on public.season_scores from authenticated;
grant select on public.season_scores to anon, authenticated;
grant insert, update on public.season_scores to authenticated;

-- Views do PostgREST usam as permissões do dono por padrão. security_invoker
-- garante que a RLS da tabela-base continue valendo para quem consulta.
drop view if exists public.season_leaderboard;
create view public.season_leaderboard
with (security_invoker = true)
as
select
  row_number() over (
    partition by season_id
    order by coins desc, active_days desc, updated_at asc, nickname asc
  ) as position,
  user_id,
  season_id,
  nickname,
  level_number,
  level_name,
  coins,
  active_days,
  updated_at
from public.season_scores
-- Só entram participantes com atividade real. Uma conta criada antes de
-- estudar não ocupa posição no ranking.
where coins > 0 or active_days > 0;

revoke all on public.season_leaderboard from anon;
revoke all on public.season_leaderboard from authenticated;
grant select on public.season_leaderboard to anon, authenticated;

-- Recarrega o cache de schema do PostgREST para que a tabela e a view
-- apareçam imediatamente nas chamadas REST.
notify pgrst, 'reload schema';
