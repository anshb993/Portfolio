# Ansh — Portfolio

React + Vite + Tailwind. Cinematic dark theme with letterbox bars, timecode
section labels, and a play-hover creative grid.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy (Vercel)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite — just click Deploy.
4. Optionally connect a custom domain in Project Settings → Domains.

## Swapping placeholder content for real content

**Videos (src/components/Creative.jsx)**
Currently embedded directly from Google Drive via `<iframe>` as a placeholder.
Once you've uploaded to YouTube (unlisted is fine) or Vimeo, replace the `src`:

```jsx
// Drive (current placeholder):
src={`https://drive.google.com/file/d/${item.driveId}/preview`}

// YouTube:
src="https://www.youtube.com/embed/VIDEO_ID"

// Vimeo:
src="https://player.vimeo.com/video/VIDEO_ID"
```

**Vigil screenshot (src/components/Technical.jsx)**
Currently pulling from a Drive image link. Swap for a proper hosted image —
easiest is dropping the file into `public/` and pointing `src` to
`/your-image.png`.

**CTF / LeetCode / Agency copy**
All plain text in `Agency.jsx` and `Technical.jsx` — edit directly.

**Contact links (src/components/Footer.jsx)**
The WhatsApp / Email / Instagram links are currently `#` placeholders — add
your real `https://wa.me/...`, `mailto:...`, and Instagram URL.
