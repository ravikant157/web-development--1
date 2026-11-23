import anonymous from "./anonymous"
import authenticated from "./authenticated"
const conditionalRendering = ()=>{

    let status = true
    let tour = "rajasthan"
    let wheather = "winter"
    let age = 19

    //! switch()

    // switch(wheather){
    //     case "summer" :
    //         return(
    //             <>
                
    //             </>
    //         )
    // }



    // //! else if: 
    //  if (tour = sikkim){
    //     return(
    //         <>
    //          <h3> sikkim  </h3>
    //          <p>Sikkim (/ˈsɪkɪm/ SIK-im; Nepali: [ˈsikːim]) is a state in northeast India. It borders Bhutan in the east, the Tibet Autonomous Region of China in the north and northeast, Koshi Province of Nepal in the west, and West Bengal in the south. Sikkim is one of the two Indian states that share their border with just one other Indian state — West Bengal.</p>
    //          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Buddha_statue_at_Buddha_Park_of_Ravangla%2C_Sikkim%2C_India_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled" alt="sikkim" />
    //         </>
           
    //     )
    //  }else if(tour === "kerale"){
    //     return(
    //         <>
    //         <h3>kerala tourism</h3>
    //         <p></p>
    //         </>
    //     )
    //  }
    // //! if else : 

    // if(status === true){

    //     return(
    //         <>
    //         <h2>welcome to conditional rendering</h2>
    //         <p>Lorem ipsum dolor sit amet.</p>
    //         </>
    //     )

    //     }else{
    //         <>
    //          <h2>user is offline</h2>
    //         </>
    // }





    //! // ! ternary operator :

    // return(
    //     <>
    //     <h2>conditional rendering</h2>

    //     <h3>{status === true ? "user is active" : "user is in active"}</h3>
    //     </>
    // )

    //! short circuit :-

    // return(
    //     <>
    //     <h2>short circuit</h2>
    //     <p>{age>18 && "you are eligible to get voter id"}</p>
    //     </>
    // )


    //! rendering component conditionally:-

    return(
        <>
        <h2>conditionally rendering component</h2>
        {status == true ? <authenticated/> : <anonymous/>}
        </>
    )
}
export default conditionalRendering