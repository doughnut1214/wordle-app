import React, { useState, SetStateAction } from "react"

interface Guessformprops {
    passGuess: React.Dispatch<SetStateAction<string[]>> //pass the guess to parent Wordle component
    length: number  //length of the word as to set the input max attr
    targetWord: string //checks if target has won
    passWin: React.Dispatch<SetStateAction<boolean>>
}
const Guessform = ({ passGuess, length, targetWord, passWin }: Guessformprops) => {
    const [guess, SetGuess] = useState<string>('')
    const [disabled, SetDisabled] = useState<boolean>(false)
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("your guess:", guess)
        passGuess(prev => [...prev, guess.toUpperCase()])
        if(guess.toUpperCase() ===targetWord){
            passWin(true)
            SetDisabled(true)
        }
        SetGuess('')
    }
    return (
        <form onSubmit={HandleSubmit}  className="form">
            <h1>Guess Form</h1>
            <label htmlFor="guess" className="form-label">Your guess</label>
            <input type="text" value={guess} name="guess" disabled={disabled} className="form-input" maxLength={length} minLength={length} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { SetGuess(e.target.value) }} />
            <button type="submit" disabled={disabled} className="btn-primary">Make Guess</button>
        </form>
    )

}
export default Guessform