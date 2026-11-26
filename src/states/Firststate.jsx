import {useState} from 'react'

const Firststate = () => {

    // syntax : let [state,setState] = useState()
    
let [player , setPlayer] = useState("vaibhav")
console.log(player);

let [fruit, setFruit] = useState("mango")

let changePlayer = ()=>{
    setPlayer("shubham")

let [online , setOnline] = useState(true)
let [array, setArray] = useState([1,2,3])
let [movie , setMovie] = useState({
    moviename : "golmaal",
    moviepart : 1,
    movielanguage : "hindi"
})
console.log(movie);

let {moviename, moviepart, movielanguage} = movie

}

let changeMovie = ()=>{
    setMovie({moviename : "stuart little", moviepart : 2, movielanguage : "English"})
}

  return (
    <div>
      <h2>player : {player}</h2>
      <button onClick={changePlayer}>change player</button>
      <h2> Fruit: {fruit}</h2>
      <button onClick={()=>setFruit("grapes")}>change fruit</button>
      <h2>This weekend , i will watch {moviename} of part {moviepart} in {movielanguage}</h2>
      <button onClick={changeMovie}>change movie</button>
    </div>
  )
}

export default Firststate
