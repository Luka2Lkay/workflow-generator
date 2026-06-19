require("dotenv").config();
const axios = require("axios");
const { safeParseJson } = require("../utils/prompt");

const OPENROUTER_URL = process.env.OPENROUTER_URL;
const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;

const generateWorkflowAnalysis = async (workflow) => {
  const response = await axios.post(
    OPENROUTER_URL,
    {
      model: "deepseek/deepseek-chat",
      messages: [
        {
          role: "system",
          content:
            "You are an operations analyst. Break workflows into steps, identify bottlenecks, suggest automation improvements, tools needed, and the estimation of time saved.",
        },
        {
          role: "user",
          content: workflow,
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_KEY}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Workflow Generator",
      },
    },
  );

  const result = response.data.choices?.[0].message?.content.trim();
  return safeParseJson(result);
};

module.exports = { generateWorkflowAnalysis };
