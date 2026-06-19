const { buildWorkflowPrompt } = require("../utils/prompt");
const { generateWorkflowAnalysis } = require("../services/openrouter_service");

const analyzeWorkflow = async (req, res) => {
  try {
    const { description } = req.body;
    const prompt = await buildWorkflowPrompt(description);
    const response = await generateWorkflowAnalysis(prompt);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { analyzeWorkflow };
