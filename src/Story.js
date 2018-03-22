import React, { Component } from 'react';

export default class Story extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        let {story} = this.props
        const {noun, verb, adj} = this.props

        story = story.split('$%a')
        for(var i = 0; i < adj.length; i++){
            story.splice(1 + (i*2), 0, adj[i]);
        }

        story = story.join('').split('$%n')
        for(var i = 0; i < noun.length; i++){
            story.splice(1 + (i*2), 0, noun[i]);
        }


        
        story = story.join('').split('$%v')
        for(var i = 0; i < verb.length; i++){
            story.splice(1 + (i*2), 0, verb[i]);
        }

        return (
            <div>{story}</div>
        );
    }
}