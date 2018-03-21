import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Input from './Input'
import Story from './Story'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      verb:[],
      noun:[], 
      adjective:[],
      story: {
        text: 'this will be story',
        verb: 1,
        noun: 2,
        adjective: 3, 
      }
    }
    this.submitWord = this.submitWord.bind(this)
  }
  

  submitWord(word, type){
    let newArr = this.state[type].slice()
    newArr.push(word)

    let newStory = Object.assign({}, this.state.story)
    newStory[type]--

    this.setState({
      story: newStory,
      [type]: newArr
    })
  }
  render() {

    console.log('state', this.state)
    return (
      <div className="App">
        {this.state.story.noun > 0 ? <Input type={"noun"} submit={this.submitWord}/> : (this.state.story.verb > 0 ? <Input type={"verb"} submit={this.submitWord}/> : (this.state.story.adjective > 0 ? <Input type={"adjective"} submit={this.submitWord}/> : <Story verb={this.state.verb} noun={this.state.noun} 
        adjective={this.state.adjective} text={this.state.story.text}/>))}
      </div>
    );
  }
}

export default App;
