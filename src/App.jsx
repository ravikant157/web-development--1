//! Function-based component

import Firstcomp from "./First_component";
import Secondcomponent from "./components/Secondcomponent";
import Classcomp from "./components/Classcomp";
import Compfrag from "./fragment/fragcomp";
import ConditionalRendering from "./conditional-Rendering/conditional-Rendering";
import Newcomp from "./Props/Newcomp";
import House from "./Props/House";
import Mapcomp from "./Props/Mapcomp";
import Greet from "./Props/Greet";
import ComponentA from "./Prop-drilling/ComponentA";
import Inline from "./css-react/Inline";
import "./global.css";
import Summer from "./css-react/Summer";
import Rainy from "./css-react/Rainy";
import Navbar from "./task/Navbar";
import Winter from "./css-react/Winter";
import Pewcomp4 from "./assignment-1/Pewcomp4";
import Firststate from "./states/Firststate";
import Displayusers from "./task/Displayusers";


const App = () => {
  let day = "Tuesday";
  let colors = ["violet","indigo","blue","yellow","orange","red","green","black"]

  return (
    <main>
      {/* <h2>Function Based Component</h2>
      <h3>Today is {day}</h3>

      <Firstcomp />
      <Secondcomponent />
      <Classcomp />
      <Compfrag />

      <ConditionalRendering /> */}

      {/* <Newcomp /> */}
      {/* <House house="red" captain="keerthi" students={150}/>
      <House house="green" captain="payal" students={100}/>
      <House house="yellow" captain="ravikant" students={157}/> */}
      {/* <Mapcomp  colors={colors}/> */}
      {/* <Greet>happy diwali</Greet>
      <Greet>happy chaath puja</Greet> */}
      {/* <ComponentA /> */}
      {/* <Inline /> */}
      {/* <Summer />
      <Winter />
      <Rainy /> 
      <Navbar/> */}
      {/* <Pewcomp4 /> */}
      <Displayusers />
      {/* <Firststate /> */}
    </main>
  );
};

export default App;







// //! function based component :-
// import Firstcomp from "./First_component"
// import Secondcomponent from "./components/Secondcomponent"
// import Classcomp from "./components/Classcomp"
// // import compfrag from "./fragment/fragcomp"
// // import conditionalRendering from "./conditional-Rendering/conditional-Rendering"
// import Compfrag from "./fragment/fragcomp"
// import ConditionalRendering from "./conditional-Rendering/conditional-Rendering"
// import Newcomp from "./Props/Newcomp"

// const App = () => {

//     let day = "tuesday"
//  // jsx : Extented syntax of javascript (js + xml).
//  // jsx : helps to write html like code along with js.
//  // Events should be used in camelCase => onClick , onSubmit

//     return(
//         <main className="">
//             {/* <h2>function based component</h2>
//             <label htmlFor=""></label>
//             <h3>today is {day}</h3>
//             <Firstcomp></Firstcomp>
//             <Secondcomponent></Secondcomponent>
//             <Classcomp></Classcomp>
//             <compfrag></compfrag> */}
//             {/* <conditionalRendering></conditionalRendering> */}
//             <Newcomp/>
            
//         </main>
        

        
//     )
// }
// export default App