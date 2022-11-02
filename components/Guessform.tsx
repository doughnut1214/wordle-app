import React, { useState, SetStateAction } from "react"

interface Guessformprops {
    passGuess: React.Dispatch<SetStateAction<string[]>> //pass the guess to parent Wordle component
    length: number  //length of the word as to set the input max attr
}
const Guessform = ({ passGuess, length }: Guessformprops) => {
    const [guess, SetGuess] = useState<string>('')

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("your guess:", guess)
        passGuess(prev => [...prev, guess])
        SetGuess('')
    }
    return (
        <form onSubmit={HandleSubmit} className="form">
            <h1>Guess Form</h1>
            <label htmlFor="guess" className="form-label">Your guess</label>
            <input type="text" value={guess} name="guess" className="form-input" maxLength={length} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { SetGuess(e.target.value) }} />
            <button type="submit" className="btn-primary">Make Guess</button>
        </form>
    )

}
export default Guessform