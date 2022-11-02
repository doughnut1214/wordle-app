//todo: make css for the blocks 
interface Letterblockprop{
    letter: string | undefined
    targetLetter: string | undefined
    targetWord: string
}
const Letterblock = ({letter, targetLetter, targetWord}: Letterblockprop) =>{

    if(!letter){
        return (<div>_</div>)
    }
    if(letter === targetLetter){
        return(<div className="text-green-300">{targetLetter}</div>)
    }
    if(targetWord.includes(letter)){
        return(<div className="text-yellow-300">{targetLetter}</div>)
    }
    return (
        <div>{letter}</div>
    )
}
export default Letterblock