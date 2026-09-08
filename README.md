# AILO Game Template

Reusable starter for browser games published under **AILO Games**.

A game created from this template gets:

- React 19 + Vinext
- Cloudflare Workers deployment
- automatic production hostname derived from one slug
- GitHub Actions checks and deployment on `main`
- a small interactive starter game you can replace

## 1. Create a game from this template

After this repository is marked as a GitHub template, use **Use this template** to create a new repository.

Then clone it and install dependencies:

```bash
npm install
```

Commit the generated `package-lock.json` so later CI runs use `npm ci` automatically.

## 2. Configure the game

Edit only `ailo.config.ts` first:

```ts
export const ailoGame = {
  slug: 'space-racer',
  title: 'Space Racer',
  description: 'Race through a collapsing asteroid field.',
} as const;
```

The slug automatically determines:

```text
Worker: ailo-space-racer
Domain: space-racer.ailocalops.com
```

Slugs must use lowercase letters, numbers, and single hyphens.

## 3. Build the game

Replace `components/game.tsx` with the actual browser game UI and logic. Add any assets under `public/`.

Run locally:

```bash
npm run dev
```

Validate before pushing:

```bash
npm run typecheck
npm run lint
npm run build
```

## 4. Add GitHub Actions secrets

In the new game repository:

**Settings → Secrets and variables → Actions**

Add:

```text
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```

Use the same Cloudflare account and deployment token used by the other AILO Workers. Never commit either value.

## 5. Deploy

Push to `main`:

```bash
git add .
git commit -m "Publish game"
git push
```

GitHub Actions will:

1. install dependencies
2. typecheck
3. lint
4. build
5. validate the AILO game config
6. deploy the Worker
7. attach `<slug>.ailocalops.com` as a Cloudflare Custom Domain

Pull requests run checks but do not deploy production.

The template repository itself deliberately skips deployment.

## 6. Add the game to the AILO portal

In `Rabbit57/game-site`, add the game to the catalog using an external launch URL:

```ts
{
  slug: 'space-racer',
  title: 'Space Racer',
  cover: '/images/space-racer.webp',
  coverAlt: 'Space Racer cover art.',
  description: 'Race through a collapsing asteroid field.',
  status: 'playable',
  launch: {
    kind: 'external',
    url: 'https://space-racer.ailocalops.com/',
    aspectRatio: 16 / 9,
  },
}
```

Then push `game-site/main`; the portal deploys automatically.

## Deployment model

```text
new game repo
   ↓ git push main
GitHub Actions
   ↓
Cloudflare Worker: ailo-<slug>
   ↓
https://<slug>.ailocalops.com
   ↓ embedded by
https://ailocalops.com
```

For large Unity/Godot/WASM/static builds, use the separate R2 publishing path rather than this Worker-app template.
