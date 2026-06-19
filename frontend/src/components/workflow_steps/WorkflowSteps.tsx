import { ArrowDown } from "lucide-react"

interface Props {
    steps: string[]
}
function WorkflowSteps({ steps }: Props) {

    if (steps && steps.length < 0) return null;

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6 text-center">Current Workflow</h2>

            <div className="flex flex-col items-center">
                {steps && steps.map((step, index) => (
                    <div key={index}>
                        <div className="w-full max-w-lg p-4 border rounded-lg bg-gray-50 text-center">
                            {step}
                        </div>
                        {index < steps.length - 1 && (
                            <div className="flex justify-center">
                                <ArrowDown className="my-2" />
                            </div>

                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkflowSteps