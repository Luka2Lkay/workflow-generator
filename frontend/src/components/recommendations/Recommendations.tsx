import { type RecommendationsProps } from "../../interfaces/interface";

function Recommendations({ recommendations, tools = [], estimatedSavings }: RecommendationsProps) {
    return (
        <section className="bg-white rounded-xl shadow p-6">
            <div className="mb-4 text-center">
                <h2 className="text-xl font-semibold">Recommended Improvements</h2>
                <p className="text-gray-600 text-sm mt-1">
                    Suggested actions to reduce manual effort and improve workflow efficiency
                </p>
            </div>

            <div className="space-y-3 flex flex-col items-center">
                {recommendations.map((recommendation, index) => (
                    <div key={index} className="border rounder-lg p-4 w-1/2">
                        <div className="flex items-start gap-3">
                            <span>
                                #{index + 1}
                            </span>

                            <p>{recommendation}</p>
                        </div>
                    </div>
                ))}
            </div>

            {tools.length > 0 && (
                <div className="mt-6">
                    <h3 className="font-medium mb-3 text-center">Suggested Tools</h3>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {tools.map((tool) => (
                            <span key={tool} className="px-3 py-1 rounded-full border text-sm">{tool}</span>
                        ))}
                    </div>
                </div>
            )}

            {
                estimatedSavings && (
                    <div className="mt-6 border-t pt-4 w-1/2 flex flex-col items">
                        <p className="font-medium">Estimated Time Savings</p>
                        <p className="text-lg mt-1">{estimatedSavings}</p>
                    </div>
                )
            }
        </section>
    )
}

export default Recommendations