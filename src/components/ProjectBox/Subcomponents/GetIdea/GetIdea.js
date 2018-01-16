import React from 'react';
import './GetIdea.css';
/*https://api.mlab.com/api/1/databases/bears11/collections/ideas?apiKey=PW2ys0vyNkPOEltLYg4USjGExmEDu4YA
^API to our database
*/
import SetLevel from '../SetLevel.js';
import SetType from '../SetType.js'

class GetIdea extends React.Component{
    constructor(){
        super();
        this.state = {
            displayIdea: false,
            randomIdea: {
                name: "",
                tier: "",
                type: "",
                link: "",
                description: ""
            }
        }
    }

    getOptions() {
        let level = document.querySelector('input[name="level"]:checked').value;
        let type = document.querySelector('input[name="type"]:checked').value;
        this.fetchIdea(level);
    }

    fetchIdea(tier){
        fetch("https://api.mlab.com/api/1/databases/bears11/collections/ideas?apiKey=PW2ys0vyNkPOEltLYg4USjGExmEDu4YA")
        .then((response)=>{
           return response.json();
        })
        .then((data)=>{
            var holderArray = [];
            var holderObject = {};
            var randomIndex = 0;

            data.forEach((x,i)=>{
                if(x.tier === tier){
                    holderArray.push(x);
                }
            })
            randomIndex = Math.floor(Math.random()*holderArray.length);
            this.setState({
                randomIdea: holderArray[randomIndex],
                displayIdea: true
            });
        })
    }
    randomIdea(){
        var idea = this.state.randomIdea;
        return(
            <div>
                <h2>Project: </h2> {idea.name}<br/>
                <h2>Tier: </h2> {idea.tier}<br/>
                <h2>Type: </h2> {idea.type}<br/>
                <h2>Example: </h2>
                <p className = "link-box">
                    {idea.link}
                </p><br/>
                <h2>Description: </h2>
                <p className = "desc-box">
                    {idea.description}
                </p>
                </div>
        )
    }
    callbackToParent(){
        this.props.callback();
    }
    render(){
        return(
                <div className="outline">
                    <div>
                        <SetLevel />
                        <SetType />
                    </div>
                    <div className='pg_res'>
                    <button onClick={()=>{this.getOptions()}} className="getProjectBtn">
                        Get Project
                    </button>

                        <br/>
                        {this.randomIdea()}
                    </div>
                    <hr />
                    <h4>
                        Have a project idea?
                    </h4>
                    <button onClick={this.callbackToParent.bind(this)} className="tier-button new-idea">
                        Submit Your Idea
                    </button>
                </div>

        )
    }
}

export default GetIdea;
