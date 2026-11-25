import React from 'react'

const Mapcomp = () => {
    console.log(props); // {colors: Array(6)}
let colors = props
console.log(colors); //["violet","indigo","blue",]

  return (
    <div>
        <h2>lets learn react map method</h2>
        <ul>
            {
                colors.map((value,index)=>{
                    console.log(value,index);
                    return (
                        <li key = {index}>{value}</li>
                    )
                })
            }
        </ul>
      
    </div>
  )
}

export default Mapcomp
