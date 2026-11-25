import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
let data = "guitar"

  return (
    <div>
        <h2>ComponentA is sending data to ComponentB</h2>
        <ComponentB data={data}/>
      
    </div>
  )
}

export default ComponentA
