# sds

Landing page for Социал Демократ Монголын Оюутны Холбоо (SDS), built with Next.js.

## Run locally

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

- All text, members, projects and scores: `app/data.ts`
- Member / project photos: put image files in `public/team/` (or any folder under `public/`) and set e.g. `photo: "/team/name.jpg"` in `app/data.ts`
- Styles: `app/globals.css`
