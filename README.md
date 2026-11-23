# Towers Hall website

A one-page website for Towers Hall, a student hall of residence at Loughborough University. Residents and freshers can use it to find hall events, meet the student committee and read about the hall's history.

Live site: https://towers-hall.vercel.app

## What it does

- Lists upcoming hall events with dates, times and venues. The Summer Ball is the featured event.
- Shows all 13 committee roles as cards you can filter by category, such as Leadership, Welfare or Fundraising. Clicking a role opens a detail view with each member's poster.
- Has a photo gallery that shuffles its order on every visit and links to the hall's Instagram.
- Tells the hall's story from 1964 to today with a scrolling strip of archive photos and a decade-by-decade timeline.
- Opens any history photo in a full-screen lightbox that closes with Escape.
- Works on phones, with a collapsible navbar that changes style once you scroll.

## How it's built

- Next.js 16 (App Router), React 19 and TypeScript, styled with Tailwind CSS 4. Icons come from lucide-react.
- The page is split into section components (`Hero`, `Events`, `Committee`, `Gallery`, `History`, `Footer`) under `src/components`, so each part can change on its own.
- Committee data lives in a typed file, `src/data/committee.ts`. Adding a new member or role means editing that file, not the UI code.
- The gallery shuffle runs in a `useEffect` after the page loads. This stops the server and browser from rendering a different order and causing a React hydration mismatch.
- Images go through `next/image`, and archive photos sit in `public/history`.

## Run it locally

You need Node.js and npm.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Use `npm run build` and `npm start` for a production build, and `npm run lint` to run ESLint.
