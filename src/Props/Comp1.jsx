// import React from "react";

const Comp1 = (props) => {
  console.log(props); // student : "kratika"
  let { student , rollno , member , task , project  } = props; // destructuring
  return (
    <div>
      <h2>student details</h2>
      <h3>student name : {student}</h3>
      <h3>Rollno : {rollno}</h3>
      <h3>library membership : {member ? "Active member" : "Expired"}</h3>
      <h3>task : {task? "not done" : "done"}</h3>
      <h3>project : {project}</h3>
    
    </div>
  );
};

export default Comp1;


// const Comp1 = ({ student, rollno, member }) => {
//   return (
//     <div>
//       <h2>Student Details</h2>

//       <h3>Student Name: {student}</h3>

//       <h3>Roll No: {rollno}</h3>

//       <h3>
//         Library Membership:
//         {" "}
//         {member ? "Active Member" : "Expired"}
//       </h3>
//     </div>
//   );
// };

// export default Comp1;
