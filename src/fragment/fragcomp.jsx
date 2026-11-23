import React, { Fragment } from "react";
const compfrag = () => {
  // return(
  //     //! first way:
  //     <React.Fragment>
  //         <h2>
  //             hello fragment
  //         </h2>
  //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, minus?</p>
  //     </React.Fragment>
  // )

  // return(
  //     // 2nd way :
  //     <Fragment>
  //         <h2> fragment is used to wrap multiple elements without creating any unneccesary nodes</h2>
  //     </Fragment>
  // )

  return (
    //third way:
    <>
      <h2>hello fragment</h2>
    </>
  );
};
export default compfrag;
