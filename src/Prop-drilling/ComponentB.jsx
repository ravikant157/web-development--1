import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
console.log(props) // {data: "guitar"}
let {data} = props

  return (
    <div>
      <h2>ComponentB is sending data to ComponentC</h2>
      <ComponentC data = {data}/>
    </div>
  )
}

export default ComponentB
