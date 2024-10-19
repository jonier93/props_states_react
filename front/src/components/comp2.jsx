import React from 'react'
import {Comp3} from './comp3'

class Comp2 extends React.Component {
    render() {
        return(
            <div>
                <h1> {this.props.message} </h1>
                <div className="new_prop">
                    <Comp3  message="new prop" message2="5"/>
                </div>                
            </div>
        )
    }
}

export default Comp2