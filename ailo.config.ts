export const ailoCloudflare = {
  // Cloudflare Account ID is an identifier, not a secret.
  // Set it once in the template so repositories created from it inherit the value.
  accountId: 'CHANGE_ME_CLOUDFLARE_ACCOUNT_ID',
} as const;

export const ailoGame = {
  // Change this before deploying a real game.
  // Lowercase letters/numbers with single hyphens only.
  slug: 'change-me',
  title: 'AILO Game',
  description: 'Replace this starter with your next browser game.',
} as const;

export const ailoWorkerName = `ailo-${ailoGame.slug}`;
export const ailoProductionDomain = `${ailoGame.slug}.ailocalops.com`;
