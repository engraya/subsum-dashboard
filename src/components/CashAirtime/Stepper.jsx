import React from 'react'

function Stepper() {
  return (
  <div className="">
  <div aria-label="Progress">
    <ol role="list" className="space-y-4 md:flex md:space-x-8 ">
      <li className="md:flex-1">
        <div className="group cursor-pointer flex flex-col py-2 pl-4 md:pb-0 md:pl-0 md:pt-4 border-l-4 border-indigo-600 md:border-l-0 md:border-t-4" aria-current="step">
          <span className="text-sm font-medium text-indigo-600">Step 1</span><span className="text-sm font-medium">Personal Details</span>
        </div>
      </li>
      <li className="md:flex-1">
        <div className="group cursor-pointer flex flex-col py-2 pl-4 md:pb-0 md:pl-0 md:pt-4 border-l-4 border-gray-200 hover:border-gray-300 md:border-l-0 md:border-t-4">
          <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step 2</span><span className="text-sm font-medium">Skin Profile</span>
        </div>
      </li>
      <li className="md:flex-1">
        <div className="group cursor-pointer flex flex-col py-2 pl-4 md:pb-0 md:pl-0 md:pt-4 border-l-4 border-gray-200 hover:border-gray-300 md:border-l-0 md:border-t-4">
          <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step 3</span><span className="text-sm font-medium">Current Routine (optional)</span>
        </div>
      </li>
    </ol>
  </div>
</div>

  )
}

export default Stepper
