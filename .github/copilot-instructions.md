# Copilot Instructions for Nam's Portfolio

## Project Overview

This is a personal portfolio website with an integrated AI chatbot. The project is structured as a monorepo with a React frontend deployed to Netlify, and serverless functions running on Netlify Functions.

**Architecture:**
- **Frontend**: React app built with Create React App in `my-portfolio-1/`
- **Backend**: Netlify Functions (serverless) at `my-portfolio-1/netlify/functions/`
  - Chat function powered by Groq API
  - No separate backend repository (functions deploy with frontend)
- **Hosting**: Single Netlify site (`whoisnamdo.netlify.app`)
  - Frontend served from root
  - Functions available at `/.netlify/functions/*`

## Build, Test, and Dev Commands

All commands run from `my-portfolio-1/` directory:

```bash
# Development
npm start                    # Start dev server at http://localhost:3000

# Building
npm run build               # Build for production (creates build/ folder)

# Testing
npm test                    # Run tests in watch mode
npm test -- --coverage      # Run tests with coverage report
npm test -- --no-coverage   # Run tests without coverage (faster)

# Netlify local development
netlify dev                 # Run frontend + functions locally at http://localhost:8888
```

**Key notes:**
- Frontend dev server runs on port 3000
- Netlify dev server runs on port 8888 and serves both frontend and functions
- Functions are tested via `netlify dev` (no separate test command)
- GROQ_API_KEY must be set in `.env` or Netlify environment variables for the chatbot to work

## Project Structure

```
my-portfolio-1/
├── src/
│   ├── components/          # React components
│   │   ├── Chatbot.js       # AI chatbot (calls /.netlify/functions/chat)
│   │   ├── Main.js          # Main page layout
│   │   ├── About.js, Education.js, Experience.js, etc.
│   │   └── navbar/
│   ├── data/                # Static data (SkillsData, WorkData, etc.)
│   ├── styles/              # CSS files (one per component)
│   ├── pages/               # Page components
│   ├── images/ & vectors/   # Assets
│   └── index.js             # React root
├── public/                  # Static assets (favicon, index.html)
├── netlify/functions/       # Serverless functions
│   ├── chat.js              # POST /api/chat endpoint for Groq AI chatbot
│   └── hello.js             # Example hello endpoint
├── netlify.toml             # Netlify configuration
├── package.json             # Dependencies and scripts
└── README.md
```

## Key Conventions

### Component Structure
- **One component per file** in `src/components/`
- **CSS file per component** in `src/styles/` with matching name (e.g., `Chatbot.js` → `Chatbot.css`)
- Components are functional components with React hooks
- Framer Motion used for animations

### Netlify Functions
- **Location**: `netlify/functions/` (automatically served at `/.netlify/functions/{filename}`)
- **Handler exports**: Each file exports an async `handler(event, context)` function
- **Input/Output**: 
  - `event.body` contains request payload (must be parsed with `JSON.parse()`)
  - Response object includes `statusCode`, `body` (stringified JSON), and `headers`
  - CORS headers must be explicitly set in responses
- **Environment variables**: Accessed via `process.env.VARIABLE_NAME`
- **Real example**: `chat.js` accepts POST with `{ messages: [...] }`, calls Groq API, returns `{ success, message }`

### Chatbot Integration
- Frontend calls `/.netlify/functions/chat` (relative URL works in both dev and prod)
- API expects: `POST` with JSON body `{ messages: [{ role, content }, ...] }`
- API returns: `{ success: boolean, message: string }`
- Groq API key required in `.env` (for local dev) and Netlify environment variables (for production)
- System prompt defined in function as `PERSONAL_CONTEXT` variable

### Dependencies & Versions
- **Node**: >=18 (specified in `package.json` engines)
- **React**: ^18.2.0 (Create React App setup)
- **Netlify Build Image**: `ubuntu-jammy` for consistency
- **Key packages**:
  - `react-scripts`: Build tool (CRA)
  - `framer-motion`: Animations
  - `groq-sdk`: AI chatbot API calls (in functions)

### Environment Variables
- **Required for chatbot**: `GROQ_API_KEY`
- **Local development**: Create `.env` in `my-portfolio-1/` with `GROQ_API_KEY=...`
- **Production**: Set via Netlify Site Settings → Environment variables
- **Note**: `.env` is in `.gitignore`; use `.env.example` as template

### Routing & Redirects
- SPA routing handled by React Router (`react-router-dom`)
- Netlify redirect rule: all URLs `/.*` serve `index.html` (status 200) to support client-side routing

## Making Changes

**Frontend changes**: Edit files in `my-portfolio-1/src/`, test with `npm start`

**Function changes**: Edit files in `my-portfolio-1/netlify/functions/`, test with `netlify dev`

**Adding new functions**: Create new `.js` file in `my-portfolio-1/netlify/functions/`, accessible at `/.netlify/functions/{filename}`

**Updating chatbot prompt**: Edit `PERSONAL_CONTEXT` in `my-portfolio-1/netlify/functions/chat.js`

## Deployment

- **Source**: Main branch on GitHub (Namdo2465/my-portfolio)
- **Hosting**: Netlify (site: `whoisnamdo.netlify.app`)
- **Auto-deploy**: On push to main, Netlify runs `npm run build` and deploys
- **Build folder**: `build/` (published to root of site)
- **Functions**: Deployed from `netlify/functions/` folder
