 import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'


const Newcomp = () => {
let skills = ["html","css","javascript","react js","node js"]

let course = {
  name : "mernstack",
  mode :"online",
  currentbatch : "react js"

}

  return (
    <div>
      <h2>Newcomp</h2>
      {/* <comp1 student = "kratika" rollno = {5} member = {true}></comp1> */}
      <Comp1 student="kratika" rollno={5} member={true} task= {task ? "task not done" : "task is done"} project={project? "not assigned" : "not assigned"}/>
      <Comp1 student="ravi kant" rollno={1} member={true} />
      <Comp1 />
      <Comp2 skills={skills}/>
      <Comp3 course={course}/>
    </div>
  )
}

export default Newcomp



// import Comp1 from "./Comp1";

// const Newcomp = () => {
//   return (
//     <div>
//       <h2>New Component</h2>

//       <Comp1
//         student="Kratika"
//         rollno={5}
//         member={true}
//       />

//       <Comp1
//         student="Ravikant"
//         rollno={10}
//         member={true}
//       />
//     </div>
//   );
// };

// export default Newcomp;