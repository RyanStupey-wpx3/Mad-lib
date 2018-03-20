import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      message: '',
      verb:[],
      noun:[], 
      adjective:[],
      showHide: true,
      showMessage: false,
      story: {
        verb: 1,
        noun: 2,
        adjective: 3, 
      }
    }
    this.stateHandler = this.stateHandler.bind(this)
    this.showInput = this.showInput.bind(this)
  }

  componentDidMount(){
    axios.get('/api/message')
    .then((resp) => {
      this.setState({
        message: resp.data
      })
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  stateHandler(prop, val){
    let newArray = [...this.state[prop]]
    
  }

  showInput(){
    // axios.post('/api/')
    this.setState({
      showHide: false,
      showMessage: true,
    })
  }

  showNoun(){
    return(<div><input type="text" onChange={(e) => {this.stateHandler('noun', e.target.value)}} placeholder="noun" required/><input type="submit" value="submit"/></div>)
  }
  showVerb(){
    return(<div><input type="text" onChange={(e) => {this.stateHandler('verb', e.target.value)}} placeholder="verb" required/><input type="submit" value="submit"/></div>)
  }
  showAdjective(){
    return(<div><input type="text" onChange={(e) => {this.stateHandler('adjective', e.target.value)}} placeholder="adjective" required/><input type="submit" value="submit"/></div>)
  }

  render() {
    
    for(var i = 0; i<this.state.story.noun; i++){
      
    }


    console.log('state', this.state)
    return (
      <div className="App">
        <header className="App-header">
        </header>
        
        {this.state.showHide && 
          <div className={this.state.showHide}>
          
            <form>
               <input type="submit" onSubmit={this.showInput}/>
            </form>  
          </div>}
          {this.state.showMessage && <div>you have submitted your content</div>}
          


      </div>
    );
  }
}

export default App;
