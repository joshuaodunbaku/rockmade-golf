# RockMade Golf — Front End

Front end for the RockMade Golf platform (React 19 + Vite 7). Public marketing
pages plus player registration/login and separate client and staff dashboards
covering golf courses, games, live scoring, leaderboards, contests, membership
plans and Paystack payments.

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite 7)
- The backend API (defaults to `http://localhost:2026`)

## Setup

```bash
npm install
cp .env.example .env.local   # optional: point VITE_API_URL at your backend
npm run dev
```

## Environment variables

| Variable       | Required | Description                                                 |
| -------------- | -------- | ----------------------------------------------------------- |
| `VITE_API_URL` | no       | Backend API base URL. Falls back to `http://localhost:2026`. |

Set it in a local `.env.local` file, or in your host's project settings
(Vercel: Project → Settings → Environment Variables).

## Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Dev server with HMR        |
| `npm run build`   | Production build to `dist` |
| `npm run preview` | Serve the production build |
| `npm run lint`    | Run ESLint                 |

## Notes

- `src/Utils/crypto-helper.js` holds the AES key and IV shared with the backend.
  It encrypts passwords and pagination cursors, and decrypts encrypted JWT
  claims (`mode`, `id`, `sub`) that drive role checks and routing. **It must
  stay in sync with the backend** — a mismatched key silently decrypts to an
  empty string, which fails every route guard and bounces users to `/login`.
- The key/IV live in the client bundle, so they are obfuscation rather than
  secret; rotate them on both ends if they ever need to change.

---

## React + Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
