## Quick context for AI coding agents

This repository contains the frontend for an Esports Tournament web app (React, Create React App) and references to a Node/Express backend in the README. The workspace root is the React app used during local development.

Key locations
- `src/App.js` — main React router and home page carousel. Use this to find routes and top-level navigation.
- `src/components/*` — registration pages for games (BGMI, COC, Free Fire, Valorant). These are small, self-contained React components that render HTML forms and rely on static form POST actions (PHP endpoints in original codebase).
- `src/style.css` and component-scoped CSS files (e.g. `bgmi_regi_style.css`) — project uses plain CSS, not CSS modules or styled-components.
- `public/images/` — static image assets referenced by `slidesData` in `App.js`.
- `package.json` — use `npm start` (runs `react-scripts start`), `npm run build` to produce a production bundle.

Project big-picture
- Single-page React frontend (Create React App) that uses `react-router-dom` for client-side routes. The app is primarily static HTML/CSS driven with a few controlled React states (carousel index, small form validation helpers).
- The registration components currently post to server-side PHP endpoints (e.g. `bgmi_contact_thanks_index.php`). There is no API client abstraction (no `services/` directory presently) — if you add an API, prefer creating `src/services/api.js` and centralizing Axios calls there.

Developer workflows / commands
- Start development server: `npm install` then `npm start` (Windows PowerShell: run each command on its own line).
- Run tests: `npm test` (Create React App tooling).
- Build for production: `npm run build`.

Conventions and patterns discovered
- Routing: routes are declared in `src/App.js` via `<Routes>` and `<Route>`. Add new pages by creating a component under `src/components` and adding a `<Route path="/your-route" element={<YourComp/>} />`.
- Styling: global `src/style.css` plus component-specific CSS files placed next to components and imported at the top of the component file (e.g. `import './bgmi_regi_style.css'`). Keep that pattern for any new component-level styles.
- Forms: existing registration forms are plain HTML forms with `action` and `method` attributes. Refactors to a JSON API should:
  - Replace `action`/`method` with a controlled submit handler
  - Use a shared `src/services/api.js` with Axios
  - Keep the visible form fields and IDs intact where possible to avoid breaking any external integrations

Testing and safety notes for agents
- Avoid changing public route paths (e.g. `/bgmi-register`) without updating `App.js`. Tests or deploy scripts may rely on these stable paths.
- Do not remove static assets in `public/images` referenced from `slidesData` — the carousel expects these paths.

How to make small changes (examples)
- Add a new registration page:
  1. Create `src/components/MyGameRegister.js` (copy structure from `BgmiRegister.js`).
  2. Create `src/components/mygame_regi_style.css` and import it from the component.
  3. Add route in `src/App.js`: `<Route path="/mygame-register" element={<MyGameRegister/>} />`

- Convert a component form to use JSON API (example plan):
  1. Create `src/services/api.js` and export an Axios instance.
  2. Replace `<form action=...>` with `onSubmit={handleSubmit}` and preventDefault.
  3. Call `api.post('/registrations/bgmi', payload)` and show success UI.

What an AI agent should NOT change
- Do not assume or create backend endpoints; backend implementation is outside this repo. When adding API calls, put them behind a small feature-flag comment and request confirmation.
- Avoid migrating CSS to a different system (Tailwind / CSS-in-JS) in bulk — follow the existing CSS import pattern.

Files worth reading before large edits
- `src/App.js` — routing and UI flow
- `src/components/BgmiRegister.js` — canonical registration component
- `src/style.css` and any `*_regi_style.css` files — global visual conventions
- `package.json` — scripts and dependency versions

If you need to run more checks
- After edits run `npm start` and visually verify the routes and forms.
- Run `npm test` to catch any immediate regressions from React scripts.

If anything above is unclear or you hit missing backend info, ask the repository owner which server/API endpoints to target before implementing API integrations.
