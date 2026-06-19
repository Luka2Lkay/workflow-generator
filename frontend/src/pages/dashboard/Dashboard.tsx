import WorkflowForm from "../../components/workflow_form/WorkflowForm"
import { useWorkflowAnalysis } from "../../hooks/use_workflow_analysis"
import WorkflowSteps from "../../components/workflow_steps/WorkflowSteps";
import Bottlenecks from "../../components/bottlenecks/bottlenecks";
import { Loader } from "lucide-react";

export default function Dashboard() {

  const { loading, analysis, runAnalysis } = useWorkflowAnalysis();

  return (
    <div>

      <h1 className="text-center mt-4 font-bold text-xl">Workflow Generator</h1>
      <WorkflowForm onSubmit={runAnalysis} />

      {loading && (<div className="flex items-center justify-center">
        <Loader className="h-5 w-5 mt-5 mb-2" />
        <p>Analyzing...</p>
      </div>)}

      {analysis && (
        <>
          <WorkflowSteps steps={analysis?.steps} />

          <Bottlenecks bottlenecks={analysis?.bottlenecks} />
        </>

      )}


    </div>
  )
}
