import React, { useState } from "react"

const Guessform = () =>{
    const [guess, SetGuess] = useState('')

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log("your guess:", guess)
        SetGuess('')
    }
    return (
        <form onSubmit={HandleSubmit} className=" bg-gray-500 rounded-lg text-white p-2 justify-center items-center">
            <h1>Guess Form</h1>
            <label htmlFor="guess" className="mr-2">Your guess</label>
            <input type="text" value={guess} name="guess" className="p-2 text-black" maxLength={4} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{SetGuess(e.target.value)}} />
            <button type="submit"  className="bg-gray-300 hover:bg-gray-200 rounded-lg p-2 ml-2 text-black">Make Guess</button>
        </form>
    )

} 
export default Guessform