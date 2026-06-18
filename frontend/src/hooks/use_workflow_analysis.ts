import { useState } from "react";
import { analyzeWorkflow } from "../services/workflow_api";


export const useWorkflowAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const runAnalysis = async (description: string) => {
    setLoading(true);

    try {
      const result = await analyzeWorkflow(description);

      setAnalysis(result);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    analysis,
    runAnalysis,
  };
};
