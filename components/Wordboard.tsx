

interface Wordboardprops {
    target: string,
    recentGuess: string
}
//todo: make each character appear as it comes in
const Wordboard = ({ target, recentGuess }: Wordboardprops) => {

    const BuildHint = () =>{
        let hint: string = ""
        for(let i = 0; i < target.length; ++i){
            console.log("building")
            hint+="_ "
        }
        return hint
    }
    if (recentGuess === target) {
        return (
            <h1>{target}</h1>
        )
    }
    else {
        
        return (
            <h1>{BuildHint()}</h1>
        )

    }
}
export default Wordboard