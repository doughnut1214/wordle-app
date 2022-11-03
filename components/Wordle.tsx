import { useEffect, useState } from "react"
import Guessform from "./Guessform"
import Gamerow from "./Gamerow"
import Wordboard from "./Wordboard"
import Victorybanner from "./Victorybanner"

const Wordle = () => {
    /*
        this component should keep track of all things happening in the game, pass the guess up from the guess form, fill the game row 
        with the guesses, change their color if they are right or wrong or missing
    */
    //todo: set successword from api returning random 4 letter word
    const [successWord, SetSuccessWord] = useState<string>('STEAMERS')
    const [pastGuesses, SetPastGuesses] = useState<string[]>([])
    const [isWon, SetIsWon] = useState<boolean>(false)
    let lastGuess = pastGuesses.length -1
    useEffect(()=>{
        SetPastGuesses([])
    },[successWord])

    return (
        <div>
            <Victorybanner hasWon={isWon}/>
            <Wordboard target={successWord} recentGuess={pastGuesses[lastGuess]} />
            <Gamerow targetword={successWord} key={1} guess={pastGuesses[0]} />
            <Gamerow targetword={successWord} key={2} guess={pastGuesses[1]} />
            <Gamerow targetword={successWord} key={3} guess={pastGuesses[2]} />
            <Gamerow targetword={successWord} key={4} guess={pastGuesses[3]} />
            <Gamerow targetword={successWord} key={5} guess={pastGuesses[4]} />
            

            <Guessform passGuess={SetPastGuesses} length={successWord.length} targetWord={successWord} passWin={SetIsWon} />
        </div>
    )
}
export default Wordle