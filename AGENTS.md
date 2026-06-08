# Repository Guidelines

## Project Structure & Module Organization

This repository is a Create React App portfolio deployed on Netlify. Application source lives in `src/`: reusable UI sections are in `src/components/`, page composition is in `src/pages/` and `src/screen/`, static content arrays are in `src/data/`, component CSS is in `src/styles/`, and imported media is in `src/images/` or `src/vectors/`. Public files such as `index.html` and favicons live in `public/`. Netlify serverless endpoints live in `netlify/functions/`; `chat.js` backs the chatbot and reads `GROQ_API_KEY`. Production output is generated into `build/` and should not be edited by hand.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm start`: run the React dev server at `http://localhost:3000`.
- `npm run build`: create the optimized production bundle in `build/`.
- `npm test`: run Jest through `react-scripts` in watch mode.
- `npm test -- --coverage`: run tests with a coverage report.
- `netlify dev`: run the frontend with Netlify Functions available at `/.netlify/functions/*`; use this when changing chatbot behavior.

## Coding Style & Naming Conventions

Use JavaScript and React function components. Name component files and exported components in PascalCase, such as `HeroSection.js` and `WorkCard.js`. Keep CSS split by component in `src/styles/` with matching names where practical. Follow the existing two-space indentation in newer files, JSX with double quotes, and CRA ESLint rules from `react-app` and `react-app/jest`. Keep data-only portfolio content in `src/data/` instead of hardcoding repeated lists inside components.

## Testing Guidelines

No project-specific test suite is currently checked in, but Jest and React Testing Library are installed. Add tests beside the unit under test or in `src/__tests__/`, using names like `ComponentName.test.js`. Prefer tests for user-visible behavior: rendered section content, navigation interactions, form submission states, and chatbot error handling. Run `npm test -- --coverage` before larger UI or function changes.

## Commit & Pull Request Guidelines

Recent commits use short, imperative messages, for example `Add context for AI chatbot` and `Configure Netlify build for frontend subfolder`. Keep commits focused and describe the outcome, not the process. Pull requests should include a brief summary, test/build results, linked issues when relevant, screenshots for visual changes, and notes for any required Netlify or environment variable updates.

## Security & Configuration Tips

Do not commit secrets. Keep `GROQ_API_KEY` in local environment files or Netlify environment settings. Avoid logging request bodies or personal data from Netlify Functions unless needed for short-term debugging, and remove debug logs before merging.
