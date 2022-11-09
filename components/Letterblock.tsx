import { useEffect } from "react"

//todo: make css for the blocks 
interface Letterblockprop{
    letter: string | undefined
    targetLetter: string | undefined
    targetWord: string
}
const Letterblock = ({letter, targetLetter, targetWord}: Letterblockprop) =>{
    
   
    if(!letter){
        return (<div className="letterblock gametext">_</div>)
    }
    if(letter === targetLetter){
        return(<div className="letterblock letterblock-match gametext">{letter}</div>)
    }
    //find out how to deal with duplicates 
    if(targetWord.includes(letter)){
        return(<div className="letterblock letterblock-contain gametext">{letter}</div>)
    }
    return (
        <div className="letterblock gametext">{letter}</div>
    )
}
export default Letterblock