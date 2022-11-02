
type Gamerowprops = {
    guess: string | undefined
}
const Gamerow = ({guess}: Gamerowprops) =>{

    
    return(
        <div>
            {guess? <p>{guess}</p> :<p>No word set</p> }

        </div>
    )
}
export default Gamerow