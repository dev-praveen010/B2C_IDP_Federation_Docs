# INextLabs B2C Documentation

Documentation site for the INextLabs Azure AD B2C federation flow. Built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## Install

```bash
cd "B2C documentaion"
npm install
```

## Run Locally

```bash
npm run dev
```

The site will be available at http://localhost:5173

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
B2C documentaion/
├── index.html
├── package.json
├── public/
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── components/
    ├── pages/
    └── data/
```

## Key Docs Pages

- Internal setup guide: src/pages/InternalDocs.tsx
- Client integration guide: src/pages/ClientDocs.tsx

## Notes

- This site is static and does not require backend services to run.
- Content updates live in the files under src/pages/.
- Place the INextLabs logo at src/assets/inextlabs-logo.png for the header icon.
