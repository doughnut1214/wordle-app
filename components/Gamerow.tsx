
import Letterblock from './Letterblock'
type Gamerowprops = {
    guess: string | undefined 
    targetword: string
}
const Gamerow = ({guess, targetword}: Gamerowprops) =>{


    const BuildLetterblocks = () =>{
        let blocks: JSX.Element[] = []
        for(let i = 0; i < targetword.length; i++){
            
            if(!guess){
                blocks.push(<Letterblock letter="" key={i} targetLetter={targetword[i]} targetWord={targetword}/>)
                
            }
            else{
                blocks.push(<Letterblock letter={guess[i]} key={i} targetLetter={targetword[i]} targetWord={targetword} />)
            }
        }
        return blocks
    }
    
     
    return(
        <div className='flex grow w-full m-auto justify-center'>
            {BuildLetterblocks()}

        </div>
    )
}
export default Gamerow