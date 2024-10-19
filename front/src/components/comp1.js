import Comp2 from "./comp2"
import Comp4 from "./comp4"

function Comp1() {
    return(
        <div className="block_comp1">
            <h1>Buenas tardes</h1>
            <div className="hijo_comp2">
                <Comp2 message="sending a prop" />
                <Comp4 />                
            </div>            
        </div>
    )
}
export default Comp1