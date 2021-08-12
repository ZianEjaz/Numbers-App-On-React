import React, { Component } from 'react';

class InputToArray extends Component{
    state={
        textareaValue : "",
        InputArray : []
    }
    inputToArray = (event)=>{
        
let InputArray = this.state.textareaValue.split('\n');
this.setState({InputArray});
console.log(this.state.InputArray);
event.preventDefault();
    }

    textareaValue = (event)=>{
        let InputValue = event.target.value;
        this.setState({
            textareaValue : InputValue
        })
    }
    
    
    render(){
        return(
            <div>
                <form onSubmit={this.inputToArray}>

                
                <textarea value={this.state.textareaValue} onChange={this.textareaValue}>
         </textarea>
         <button type='submit'>Submit</button>
         </form>
            </div>
        )
        }
    
}

export default InputToArray;