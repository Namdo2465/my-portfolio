const Groq = require("groq-sdk");

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

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    console.log("Received messages:", messages);

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Invalid request: messages array required",
        }),
      };
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-safeguard-20b",
      messages: [{ role: "system", content: PERSONAL_CONTEXT }, ...messages],
      max_tokens: 500,
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        message: completion.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Sorry, something went wrong.",
      }),
    };
  }
};
