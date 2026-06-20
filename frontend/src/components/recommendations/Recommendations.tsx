import { type Recommendations } from "../../interfaces/interface";

function Recommendations({ recommendations, tools = [], estimatedSavings }: Recommendations) {
    return (
        <section className="bg-white rounded-xl shadow p-6">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Recommended Improvements</h2>
                <p className="text-gray-600 text-sm mt-1">
                    Suggested actions to reduce manual effort and improve workflow efficiency
                </p>
            </div>

            <div className="space-y-3">
                {recommendations.map((recommendation, index) => (
                    <div key={index} className="border rounder-lg p-4">
                        <div className="flex items-start gap-3">
                            <span>
                                #{index + 1}
                            </span>

                            <p>{recommendation}</p>
                        </div>
                    </div>
                ))

                }
            </div>
        </section>
    )
}

export default Recommendations