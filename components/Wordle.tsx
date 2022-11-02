import { useState } from "react"
import Guessform from "./Guessform"
import Gamerow from "./Gamerow"
import Wordboard from "./Wordboard"
const Wordle = () => {
    /*
        this component should keep track of all things happening in the game, pass the guess up from the guess form, fill the game row 
        with the guesses, change their color if they are right or wrong or missing
    */
    //todo: set successword from api returning random 4 letter word
    const [successWord, SetSuccessWord] = useState<string>('')
    const [pastGuesses, SetPastGuesses] = useState<string[]>([])
    const [isWon, SetIsWon] = useState<boolean>(false)


    return (
        <div>
            <Wordboard target="test" recentGuess={pastGuesses[0]} />
            <Gamerow guess={pastGuesses[0]} />
            <Gamerow guess={pastGuesses[1]} />
            <Gamerow guess={pastGuesses[2]} />
            <Gamerow guess={pastGuesses[3]} />
            <Gamerow guess={pastGuesses[4]} />
            

            <Guessform passGuess={SetPastGuesses} />
        </div>
    )
}
export default Wordle