 import React from 'react'

const Comp3 = (props) => {
    console.log(props) // {course: {...}}

    let {course} = props //destructuring of props obj
    console.log(course); //  { name: "mernstack", mode: "online", currentbatch: "react js"}

    let {name, mode, currentbatch} = course // destructuring of course obj
  return (
    <div>
        <h2>Comp3-Course detail</h2>
        <h2>enrolled for {name} with {mode} and ongoing batch is {currentbatch}</h2>
      
    </div>
  )
}

export default Comp3
