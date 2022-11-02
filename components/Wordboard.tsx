import { useState } from "react"

interface Wordboardprops {
    target: string,
    recentGuess: string
}
//todo: make each character appear as it comes in
const Wordboard = ({ target, recentGuess }: Wordboardprops) => {

    const [successChar, SetSuccessChar] = useState<string[]>([])
    if (recentGuess === target) {
        return (
            <h1>{target}</h1>
        )
    }
    else {
        return (
            <h1>_ _ _ _</h1>
        )

    }
}
export default Wordboard