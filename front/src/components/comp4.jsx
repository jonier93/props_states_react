import {useState} from 'react'

function Comp4() {
    let [cont, setCont] = useState(10) 
    function decrementar(){
        setCont(cont-1)
    }
    return(
        <div>
            <strong> conteo: {cont} </strong> <br></br>
            <button onClick={decrementar}> Decrementar </button> 
        </div>
    )
}

export default Comp4