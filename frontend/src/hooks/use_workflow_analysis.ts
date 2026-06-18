import { useState } from "react";
import { analyzeWorkflow } from "../services/workflow_api";

interface Props {
  description: string;
  url: string;
}

export const useWorkflowAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const runAnalysis = async ({ url, description }: Props) => {
    setLoading(true);

    try {
      const result = await analyzeWorkflow({ url, description });

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
