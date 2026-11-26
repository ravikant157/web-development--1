import React from 'react'

const Greet = (props) => {
    console.log(props); // children: happy diwali
    
    let children = props

  return (
    <div>
      {/* <h2>{props.children}</h2> */}
      <h3>{children}</h3>
      <h2>happy diwali</h2>
    </div>
  )
}

export default Greet;
