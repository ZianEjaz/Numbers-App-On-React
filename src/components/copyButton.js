import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CopyButton extends Component{
state = {
    hover : false,
    hidden : "opacity-0"

}
render(){


    return (
        <div className="absolute top-0 right-0 text-center m-1">
        <p className={this.state.hover ? "bg-gray-700 p-3 rounded-lg z-40" : this.state.hidden}>click to copy</p>
        <span className= "bg-purple-600 rounded-2xl p-2 m-3 fixed animate__heartBeat" onMouseEnter={()=>this.setState({hover : true})} onMouseLeave={()=> this.setState({hover:false})}>
        
        <FontAwesomeIcon icon={['fas', 'clipboard']} className="text-3xl m-2"/>
        </span>
        </div>
    )
}
    
}

export default CopyButton
