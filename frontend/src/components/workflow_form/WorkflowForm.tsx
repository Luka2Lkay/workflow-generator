import {useState} from 'react'

type Props = {
    onSubmit: (value: string) => void
}

function WorkflowForm({onSubmit}: Props) {

    const [workflow, setWorkflow] = useState("");


  return (
    <form>WorkflowForm</form>
  )
}

export default WorkflowForm