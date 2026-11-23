import React from 'react'

const Comp2 = (props) => {
    console.log(props) // skills : array{5}

    let {skills} = props // destructuring of the props obj
    console.log(skills); // {  `html`,`css`,`javascript`,`react js`,`node js`}

    let {sk1 , sk2 , sk3, sk4, sk5} = skills // destructuring of skills array

  return (
    <div>
        <h2>Comp2 - skills array</h2>
        <ul>
            <li>{sk1}</li>
            <li>{sk2}</li>
            <li>{sk3}</li>
            <li>{sk4}</li>
            <li>{sk5}</li>
        </ul>

      
    </div>
  )
}

export default Comp2
