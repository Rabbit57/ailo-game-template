export const ailoGame = {
  // Change this before deploying a real game.
  // Lowercase letters/numbers with single hyphens only.
  slug: 'change-me',
  title: 'AILO Game',
  description: 'Replace this starter with your next browser game.',
} as const;

export const ailoWorkerName = `ailo-${ailoGame.slug}`;
export const ailoProductionDomain = `${ailoGame.slug}.ailocalops.com`;
