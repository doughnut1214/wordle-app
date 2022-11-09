import { useEffect, useState } from "react"


interface Wordboardprops {
    target: string,
    recentGuess: string
}
//todo: make each character appear as it comes in
const Wordboard = ({ target, recentGuess }: Wordboardprops) => {

    const [hint, setHint] = useState<string[]>([])
    useEffect(()=>{
        BuildHint()
    }, [target])
    const BuildHint = () =>{
        let hint: string[] = []
        for(let i = 0; i < target.length; ++i){
            
            hint.push(" _ ")
        }
        setHint(hint)
    }
    if (recentGuess === target) {
        return (
            <h1 className="gametext">{target}</h1>
        )
    }
    else {
        
        return (
            <h1 className="gametext">{[...hint]}</h1>
        )

    }
}
export default Wordboard