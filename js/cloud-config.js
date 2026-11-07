/**
 * cloud-config.js — configuração pública do projeto Supabase.
 *
 * A chave publishable pode ficar no repositório: ela só identifica o projeto
 * e depende das políticas RLS de `supabase/schema.sql` para proteger os dados.
 * Tokens de sessão dos usuários nunca são gravados neste arquivo.
 */

export const CLOUD_CONFIG = Object.freeze({
  url: "https://qskeuqmlxbipiwsxyglv.supabase.co",
  publishableKey: "sb_publishable_0iSQUs_y5Cf8As8DY1a57Q_V0F4arM5",
});

export function isCloudConfigured(config = CLOUD_CONFIG) {
  return Boolean(
    config &&
      typeof config.url === "string" &&
      /^https:\/\/[^/]+/i.test(config.url.trim()) &&
      typeof config.publishableKey === "string" &&
      config.publishableKey.trim().length > 0
  );
}
