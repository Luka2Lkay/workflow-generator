import { AlertTriangle } from "lucide-react";

interface Props {
    bottlenecks: string[]
}

function bottlenecks({ bottlenecks }: Props) {

    if (!bottlenecks.length) return null;

    return (
        <div className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5" />
                <h2 className="text-xl font-semibold">
                    Identified Bottlenecks
                </h2>

                <div className="space-y-3">
                    {bottlenecks.map((bottleneck, index) => (
                        <div key={index} className="flex gap-3 p-4 rounded-lg border bg-red-50">
                            <span className="font-semibold text-red-600">
                                {index + 1}
                            </span>
                            <p className="text-sm text-gray-700">
                                {bottleneck}
                            </p>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default bottlenecks