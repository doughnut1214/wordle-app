

interface Wordboardprops {
    target: string,
    recentGuess: string
}
//todo: make each character appear as it comes in
const Wordboard = ({ target, recentGuess }: Wordboardprops) => {

    const BuildHint = () =>{
        let hint: string = ""
        for(let i = 0; i < target.length; ++i){
            
            hint+=" _ "
        }
        return hint
    }
    if (recentGuess === target) {
        return (
            <h1 className="gametext">{target}</h1>
        )
    }
    else {
        
        return (
            <h1 className="gametext">{BuildHint()}</h1>
        )

    }
}
export default Wordboard