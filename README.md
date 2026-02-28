# DnD Sim4Fun

A D&D adventure game built with Firebase, Cloud Functions, and Genkit AI.

## Setup

1. Copy `.env.example` to `.env` and fill in your Firebase config values
2. Run `npm install` in the `functions/` and `dnd-sim4fun/` directories
3. Deploy with `firebase deploy`

## Project Structure

- `index.html` — Main React application (single-file)
- `functions/` — Cloud Functions (default codebase)
- `dnd-sim4fun/` — Cloud Functions (dnd-sim4fun codebase)
- `dataconnect/` — Firebase Data Connect schema and connectors
- `public/` — Firebase Hosting static files
- `firebase.json` — Firebase project configuration
- `firestore.rules` — Firestore security rules
- `storage.rules` — Cloud Storage security rules
