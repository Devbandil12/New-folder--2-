
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'



function dashboard() {
  return (
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3   px-12  '>

      <div className='ml-5'>
        <h1 className='text-4xl font-bold'>Dashboard</h1>
        <h3 className='text-lg text-gray-600'>Here your Interview starting point</h3>
<AddNewInterview/>
          </div>
  
    </div>
    
  )
}

export default dashboard