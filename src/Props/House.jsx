import React from 'react'

const House = (props) => {

    console.log(props) // {house: "red", student: "keerthi",students: 150

    // 1st way to give default values to the props

// let {house = "pink", captain= "no one", students="no-students"} = props

  return (
    <div>
       <h2>house-details</h2>
       <h3>house : {house || "yellow"}</h3>
       <h3>captain : {captain || "to be decided"}</h3>
       <h3>no of students : {students || "to be calculated"}</h3>
      
    </div>
  )
}

export default House
