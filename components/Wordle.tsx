import { useState } from "react"
import Guessform from "./Guessform"
import Gamerow from "./GameRow"
const Wordle = () =>{
    /*
        this component should keep track of all things happening in the game, pass the guess up from the guess form, fill the game row 
        with the guesses, change their color if they are right or wrong or missing
    */
    const [successWord, SetSuccessWord] = useState('')
    const [pastGuesses, SetPastGuesses] = useState([])
    const [isWon, SetIsWon] = useState(false)
    
    
    return (
        <div>
            <h1>Game here</h1>
            <Gamerow />
            <Gamerow />
            <Gamerow />
            <Gamerow />
            <Gamerow />
            
            <Guessform />
        </div>
    )
}
export default Wordle