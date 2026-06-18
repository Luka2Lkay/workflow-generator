import { useState } from 'react'

interface Props {
  onSubmit: (value: string) => void
}

function WorkflowForm({ onSubmit }: Props) {

  const [workflow, setWorkflow] = useState("");


  return (
    <form className='w-1/2 mx-auto mt-4' onSubmit={(e) => {
      e.preventDefault();
      onSubmit(workflow)
    }}>


      <textarea className="border h-32 w-full" value={workflow} onChange={(e) => setWorkflow(e.target.value)} placeholder='Describe your workflow...' />

      <div className='flex justify-center'>
        <button className='bg-gray-400 p-2 cursor-pointer hover:bg-gray-500 hover:text-white rounded-md' type='submit'>Analyze</button>
      </div>
    </form>
  )
}

export default WorkflowForm