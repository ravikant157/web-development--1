import React from 'react'
import style from "./winter.module.css"

const Winter = () => {
    console.log(style); //{season : "css properties" , para : "css properties"}
  return (
    <div>
       <h2 className={style.season}>Winter season</h2>
       <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui recusandae hic nisi, exercitationem vel ut atque rem asperiores aliquam nostrum incidunt ipsum quo deleniti ipsam id. Sed, quaerat nobis?</p>
      
    </div>
  )
}

export default Winter
