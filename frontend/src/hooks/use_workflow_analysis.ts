import { useState } from "react";
import { analyzeWorkflow } from "../services/workflow_api";
import { type Analysis } from "../interfaces/interface";

export const useWorkflowAnalysis = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const runAnalysis = async (description: string) => {
    setLoading(true);

    try {
      const result = await analyzeWorkflow(description);

      // setAnalysis(result);
      setAnalysis(null)
      return result
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
