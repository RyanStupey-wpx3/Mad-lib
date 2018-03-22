import React, {Component} from 'react';


class Input extends Component {
    constructor(props){
        super(props) 

        this.state = {
            word: ""
        }
        this.clearInput = this.clearInput.bind(this)
    }

    clearInput(){
        
        this.props.submit(this.state.word, this.props.type) 
        this.setState({
            word: "",
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <input onChange={(e) => {this.setState({word: e.target.value})}} type="text" placeholder={`please enter a ${this.props.type}: `} value={this.state.word}/>
                <button onClick={() => this.clearInput()}>click</button>
            </div>
        )
    }
}

export default Input;