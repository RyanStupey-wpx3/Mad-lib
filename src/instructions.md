figure out:

            I.then onsubmit post to database with body of post the state arrays


    3) iterate through story and input values given from input

        A.loop through story: have story be a string in template literal format and values can be input by properties in state 

            I.get request to db for place, noun, adjective, and verb arrays then setState of forementioned arrays.
            
 const story = 
    `there was a ${this.state.noun[0]} and that ${this.state.noun[0]}, ${this.state.verb[0]} into a ${this.state.place[0]}`



    string.replace & regex for each array 
    /1noun/
    /2verb/
    /3adjective/

    const story = 'there was a 1noun, this 2noun had just 1verb over to the huge house'
    story.replace('1noun')
    
    

        === replace them all at the same time



        add story(FROM APP.JS) to db

        submit completed story to db 

        submit button to db 

