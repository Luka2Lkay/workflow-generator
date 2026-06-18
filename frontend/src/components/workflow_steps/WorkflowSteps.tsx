import { ArrowDown } from "lucide-react"

interface Props {
    steps: string[]
}
function WorkflowSteps({steps}: Props) {

    if(steps.length) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-6">Current Workflow</h2>

        <div className="flex flex-col items-center">
{steps.map((step,index) => {
    
})}
        </div>
    </div>
  )
}

export default WorkflowSteps