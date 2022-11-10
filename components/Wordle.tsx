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
    
    const getWord = async () => {
        try {
            SetLoading(true)
            setError('')
            const result = await fetch("/api/wotd", {
                method: "GET", headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            if (!result.ok) throw new Error


            const data = await result.json()
            SetSuccessWord(data.word[0].toUpperCase())


        }
        catch {
            setError("Something went wrong.")
        } finally {
            SetLoading(false)
        }

    }
    const [successWord, SetSuccessWord] = useState<string>('')
    const [pastGuesses, SetPastGuesses] = useState<string[]>([])
    const [error, setError] = useState<string>('')
    const [isWon, SetIsWon] = useState<boolean>(false)
    const [reset, SetReset] = useState<boolean>(false)
    const [loading, SetLoading] = useState<boolean>(false)
    useEffect(() => {
        getWord()
        SetPastGuesses([])
    }, [reset])
    if (!successWord) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            {error && <h1 className="error"><b>{error}</b></h1>}
            <Victorybanner hasWon={isWon} />
            <Wordboard target={successWord} recentGuess={pastGuesses[pastGuesses.length - 1]} />
            <Gamerow targetword={successWord} key={1} guess={pastGuesses[0]} />
            <Gamerow targetword={successWord} key={2} guess={pastGuesses[1]} />
            <Gamerow targetword={successWord} key={3} guess={pastGuesses[2]} />
            <Gamerow targetword={successWord} key={4} guess={pastGuesses[3]} />
            <Gamerow targetword={successWord} key={5} guess={pastGuesses[4]} />
            {pastGuesses[4] && <p>The word was <span className="gametext letterblock-match">{successWord}</span></p>}

            <Guessform passGuess={SetPastGuesses} length={successWord.length} targetWord={successWord} passWin={SetIsWon} isWon={isWon} />
            <button onClick={() => {
                SetReset(!reset)
                SetIsWon(false)
            }} className="btn-primary" disabled={loading}>{loading? "Loading...":"Reset Game"}</button>
        </div>
    )
}
export default Wordle