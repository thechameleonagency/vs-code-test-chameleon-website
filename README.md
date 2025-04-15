# The Chameleon Agency Website

A sleek, minimal website for The Chameleon Agency.

## Setup

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/).
2. **Create Project**:
   - Create a folder: `chameleon-agency`
   - Copy all files into it.
3. **Install Dependencies**: Run `npm install`.
4. **Run Locally**: Run `npm run dev` and open `http://localhost:3000`.

## Deployment (Vercel)

1. **Push to GitHub**:
   - Initialize: `git init`
   - Add: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Create a repo on [github.com](https://github.com/)
   - Push: `git remote add origin <repo-url>`; `git branch -M main`; `git push -u origin main`
2. **Deploy**:
   - Sign up at [vercel.com](https://vercel.com/) (free with GitHub).
   - Import your repo, click "Deploy".
   - Get a live URL (e.g., `chameleon-agency.vercel.app`).

## Notes
- Images/videos use stock URLs (Unsplash/Pexels/Coverr). Replace in `*.js` files later.
- Contact form is static. Add Formspree for functionality: `<form action="https://formspree.io/f/your-id" method="POST">`.