# Nam's Portfolio Website

A modern, interactive portfolio website showcasing my work, skills, and experience. Features an AI-powered chatbot assistant that answers questions about my background using the Groq API.

**🌐 Live**: [whoisnamdo.netlify.app](https://whoisnamdo.netlify.app)

---

## ✨ Features

- **Interactive Portfolio**: Showcase of projects, experience, education, and skills
- **AI Chatbot**: Ask questions about Nam's background, skills, and experience
  - Powered by Groq API
  - Deployed as serverless Netlify Functions
  - Real-time responses
- **Smooth Animations**: Framer Motion for engaging UI transitions
- **Responsive Design**: Mobile-friendly layout
- **SPA Routing**: Fast, client-side navigation with React Router
- **Netlify Functions**: Serverless backend (no separate server needed)

---

## 🛠 Tech Stack

**Frontend:**
- **React** 18.2 - UI library
- **React Router** 6.4 - Client-side routing
- **Framer Motion** 7.6 - Animations and interactions
- **React Icons** 5.5 - Icon library
- **React Toastify** 10.0 - Toast notifications
- **Create React App** - Build tooling

**Backend:**
- **Netlify Functions** - Serverless compute
- **Groq API** - AI/LLM inference (`openai/gpt-oss-safeguard-20b` model)
- **Node.js** 18+ - JavaScript runtime

**Hosting & Deployment:**
- **Netlify** - Frontend & Functions hosting
- **GitHub** - Source control

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Groq API key (for chatbot functionality)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Namdo2465/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   cd my-portfolio-1
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your Groq API key
   GROQ_API_KEY=your_groq_api_key_here
   ```

   Get a free Groq API key at [console.groq.com](https://console.groq.com)

---

## 💻 Development

### Start the Development Server
```bash
cd my-portfolio-1
npm start
```
Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Test with Netlify Functions (Recommended)
To test the chatbot locally with Netlify Functions:

```bash
# From repo root
netlify dev
```
Opens [http://localhost:8888](http://localhost:8888) with functions available at `/.netlify/functions/*`

### Build for Production
```bash
npm run build
```
Creates optimized production build in `build/` folder.

### Run Tests
```bash
npm test                    # Watch mode
npm test -- --coverage      # With coverage report
npm test -- --no-coverage   # Without coverage (faster)
```

---

## 📁 Project Structure

```
my-portfolio/
├── my-portfolio-1/              # React frontend (main app)
│   ├── public/                  # Static assets (favicon, index.html)
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Chatbot.js       # AI assistant chat interface
│   │   │   ├── About.js         # About section
│   │   │   ├── Experience.js    # Work experience
│   │   │   ├── Education.js     # Education history
│   │   │   ├── Skills.js        # Technical skills
│   │   │   ├── Works.js         # Project portfolio
│   │   │   ├── Main.js          # Main page layout
│   │   │   └── navbar/          # Navigation components
│   │   ├── data/                # Static data (SkillsData.js, WorkData.js)
│   │   ├── styles/              # Component CSS files
│   │   ├── images/ & vectors/   # Media assets
│   │   └── index.js             # React entry point
│   ├── netlify/functions/       # Serverless functions
│   │   ├── chat.js              # POST /api/chat - Groq chatbot endpoint
│   │   └── hello.js             # Example endpoint
│   ├── netlify.toml             # Netlify build & deployment config
│   ├── package.json             # Dependencies & scripts
│   └── README.md                # Frontend-specific documentation
└── .github/
    └── copilot-instructions.md  # Copilot AI assistant guide
```

---

## 🤖 Chatbot Function

The chatbot is powered by a Netlify Function that uses the Groq API.

**Endpoint:** `/.netlify/functions/chat` (POST)

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "What's your experience with React?" }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "I have extensive experience with React including..."
}
```

**How it works:**
1. Frontend sends user message to the function
2. Function formats message with system prompt (Nam's personal context)
3. Groq API processes the request
4. Response is returned and displayed in the chat UI

---

## 🌐 Deployment

### Automatic Deployment
The site automatically deploys to Netlify when you push to the `main` branch.

**Deployment Steps:**
1. Commit changes: `git add . && git commit -m "Update portfolio"`
2. Push to main: `git push origin main`
3. Netlify automatically:
   - Runs `npm run build` from `my-portfolio-1/`
   - Deploys frontend to `whoisnamdo.netlify.app`
   - Deploys functions to `/.netlify/functions/*`

### Environment Variables
Set these in Netlify Site Settings → Environment:
- `GROQ_API_KEY` - Your Groq API key for the chatbot

---

## 📝 Components Overview

| Component | Purpose |
|-----------|---------|
| **Chatbot** | AI assistant interface using Groq API |
| **HeroSection** | Eye-catching landing section |
| **About** | Personal background and story |
| **Experience** | Work history and internships |
| **Education** | Academic background and achievements |
| **Skills** | Technical skills visualization |
| **Works** | Project portfolio and case studies |
| **Contact** | Contact information and links |
| **Navbar** | Navigation menu |

---

## 🔧 Customization

### Update Personal Information
Edit `my-portfolio-1/netlify/functions/chat.js` - update the `PERSONAL_CONTEXT` variable with your information.

### Update Work Experience & Education
Modify data files:
- `my-portfolio-1/src/data/WorkData.js` - Portfolio projects
- `my-portfolio-1/src/data/SkillsData.js` - Technical skills
- Component files in `my-portfolio-1/src/components/` - Content

### Style Changes
CSS files are colocated with components:
- `my-portfolio-1/src/styles/ComponentName.css` corresponds to `ComponentName.js`

---

## 🐛 Troubleshooting

### Chatbot not working
- Check that `GROQ_API_KEY` is set in `.env.local` (dev) or Netlify environment variables (prod)
- Ensure Groq API key is valid at [console.groq.com](https://console.groq.com)
- Check browser console for error messages

### `npm install` fails
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 18+

### Build errors
- Clear build cache: `rm -rf build/`
- Run `npm run build` again
- Check that all imports are correct

---

## 📚 Additional Resources

- [Groq API Docs](https://console.groq.com/docs)
- [React Documentation](https://react.dev)
- [Netlify Functions Guide](https://docs.netlify.com/functions/overview)
- [Framer Motion](https://www.framer.com/motion)
- [Copilot Instructions](./.github/copilot-instructions.md) - Guide for AI assistants

---

## 📄 License

This project is personal and not currently licensed for reuse. Feel free to use it as inspiration for your own portfolio.

---

## 👤 About

**Nam Do** - Computer Science & Mathematics student at Grinnell College

- 🌍 From Vietnam, studied in Singapore
- 💼 Software Engineer Intern at FinBud AI
- 🏅 Gold Medal in Singapore Mathematics Olympiad
- 🔗 [GitHub](https://github.com/Namdo2465) | [LinkedIn](https://linkedin.com/in/namdo2465)

---

## 🤝 Contributing

This is a personal portfolio project. If you have suggestions or spot issues, feel free to open an issue or contact me directly.

---

**Last Updated:** March 2026
