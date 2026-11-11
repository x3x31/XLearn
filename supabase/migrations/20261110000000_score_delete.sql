-- XLearn — permite que o próprio usuário apague a pontuação da temporada.
-- Execute este arquivo no SQL Editor do Supabase se o schema já foi aplicado.
-- O app usa esta permissão no botão "Apagar progresso" para remover a linha
-- correspondente em public.season_scores.

drop policy if exists season_scores_delete_own on public.season_scores;
create policy season_scores_delete_own
  on public.season_scores
  for delete
  to authenticated
  using (auth.uid() = user_id);

grant delete on public.season_scores to authenticated;

notify pgrst, 'reload schema';
