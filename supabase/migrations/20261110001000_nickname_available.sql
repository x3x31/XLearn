-- XLearn — verificação pública de disponibilidade de apelido.
-- Execute este arquivo no SQL Editor do Supabase se o schema já foi aplicado.
-- A função devolve apenas true/false e lê auth.users sem expor e-mails, IDs
-- ou a lista de apelidos. O cadastro usa esta RPC no evento blur do campo.

create or replace function public.nickname_available(candidate text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select char_length(btrim(coalesce(candidate, ''))) between 2 and 24
    and not exists (
      select 1
      from auth.users u
      where lower(btrim(coalesce(u.raw_user_meta_data->>'nickname', ''))) =
            lower(btrim(coalesce(candidate, '')))
    );
$$;

revoke all on function public.nickname_available(text) from public;
grant execute on function public.nickname_available(text) to anon, authenticated;

notify pgrst, 'reload schema';
