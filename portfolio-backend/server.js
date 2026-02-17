const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
  })
);
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const PERSONAL_CONTEXT = `
You are Nam Do's personal AI assistant on his portfolio website.
Answer questions about Nam based on this information:

ABOUT:
- Full name: Do Hoang Nhat Nam
- Student at Grinnell College studying Computer Science and Mathematics
- From Vietnam, studied in Singapore on A*STAR Science Scholarship

EDUCATION:
- Grinnell College (2024-2028): BA in Computer Science & Mathematics
- Anglo-Chinese School Independent, Singapore (2021-2024): IB Diploma, 43/45

EXPERIENCE:
1. Software Engineer Intern at FinBud AI (Aug 2025 - Present)
   - Integrated financial chatbot with FastAPI and Vue.js
   - Engineered RAG pipeline using LangChain and ChromaDB

2. Software Engineer Intern at Center for Environmental Economics (May 2025 - Aug 2025)
   - Built operational research model for renewable energy in Vietnam

SKILLS: Python, JavaScript, Java, React, Vue.js, FastAPI, LangChain

ACHIEVEMENTS:
- Gold Medal in Singapore Mathematics Olympiad
- A*STAR Science Scholarship

Be friendly and helpful.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-safeguard-20b",
      messages: [{ role: "system", content: PERSONAL_CONTEXT }, ...messages],
      max_tokens: 500,
    });

    res.json({
      success: true,
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    res.json({
      success: false,
      message: "Sorry, something went wrong.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
