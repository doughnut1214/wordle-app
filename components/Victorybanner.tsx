
interface Victorybannerprops {
    hasWon: boolean
}
//make CSS look nice and neat or whatever 
const Victorybanner = ({ hasWon }: Victorybannerprops) => {
    if (!hasWon) {
        return <></>
    }

    return (<h1>Victory!</h1>)


}
export default Victorybanner