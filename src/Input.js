import React, {Component} from 'react';


class Input extends Component {
    constructor(props){
        super(props) 

        this.state = {
            word: ""
        }
    }

    render(){
        return(
            <div>
                <input onChange={(e) => {this.setState({word: e.target.value})}} type="text" placeholder={`please enter a ${this.props.type}: `}/>
                <button onClick={() => this.props.submit(this.state.word, this.props.type)}>click</button>
            </div>
        )
    }
}

export default Input;