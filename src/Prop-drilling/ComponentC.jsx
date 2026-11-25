import React from 'react'

const ComponentC = () => {
console.log(props)// data ="guitar"
let {data}= props

  return (
    <div>
       <h2>ComponentC has received the {data}</h2> 
      
    </div>
  )
}

export default ComponentC
