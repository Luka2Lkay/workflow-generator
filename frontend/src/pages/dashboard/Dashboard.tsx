import WorkflowForm from "../../components/workflow_form/WorkflowForm"
import { useWorkflowAnalysis } from "../../hooks/use_workflow_analysis"
import WorkflowSteps from "../../components/workflow_steps/WorkflowSteps";

export default function Dashboard() {

    const {loading, analysis, runAnalysis} = useWorkflowAnalysis();

  return (
    <div>

            <h1 className="text-center mt-4 font-bold text-xl">Workflow Generator</h1>
            <WorkflowForm  onSubmit={runAnalysis} />

            {loading &&(<p>Analyzing...</p>)}

            {/* {analysis && ( */}
              <WorkflowSteps steps={analysis?.steps} />

            {/* )} */}
    </div>
  )
}
