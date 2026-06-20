export interface Analysis {
  steps: string[];
  bottlenecks: string[];
  recommendations: string[];
  tools: string[];
  estimatedSavings: string;
}

export interface Recommendations {
  recommendations: string[];
  tools?: string[];
  estimatedSavings?: string;
}
