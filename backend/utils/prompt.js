const buildWorkflowPrompt = (input) => {
  return `
    
    Analyze this business workflow:

    ${input}
    
    Return JSON ONLY in this format:

    {
        "steps": [],
        "bottlenecks": [],
        "recommendations": [],
        "tools": [],
        "estimatedSavings": "",
    }

    Rules:
        - Be practical and business-focused
        - Identify manual work and inefficiencies
        - Suggest realistic automation tools
        - Keep steps concise
    `;
};

const safeParseJson = (text) => {
  try {
    let cleanString = text.replace(/```json|```/g, "");
    cleanString = cleanString.replace(/\u00a0/g, " ");

    return JSON.parse(cleanString);
  } catch (error) {
    console.error(error.message);

    return {
      steps: [],
      bottlenecks: ["Unable to parse AI response"],
      recommendations: ["Retry analysis or refine input description"],
      tools: [],
      estimatedSavings: "Unknown",
    };
  }
};
module.exports = { buildWorkflowPrompt, safeParseJson };
