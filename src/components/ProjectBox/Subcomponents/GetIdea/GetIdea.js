import React from 'react';
import './GetIdea.css';
/*https://api.mlab.com/api/1/databases/bears11/collections/ideas?apiKey=PW2ys0vyNkPOEltLYg4USjGExmEDu4YA
^API to our database
*/
class GetIdea extends React.Component{
    constructor(){
        super();
        this.state = {
            displayIdea: false,
            randomIdea: {
                name: "",
                tier: "",
                link: ""
            }
        }
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
                <h2>
                    Project: {idea.name}
                    </h2>
                <h2>
                    Tier: {idea.tier}
                    </h2>
                <h2>
                    Example:
                    </h2>
                <textbox>
                    {idea.link}
                    </textbox>    
                </div>
        )
    }
    callbackToParent(){
        this.props.callback();
    }
    render(){
        return(
            <div className="outline">
                <h2>
                    Select Level
                    </h2>
                    <button onClick={()=>{this.fetchIdea("Toucans")}} className="tier-button toucans">
                        Toucans (Tier-1)
                        </button>
                    <button onClick={()=>{this.fetchIdea("Geckos")}} className="tier-button geckos">
                        Geckos (Tier-2)
                        </button>
                    <button onClick={()=>{this.fetchIdea("Bears")}} className="tier-button bears">
                        Bears (Tier-3)
                        </button>
                        <br/>
                        {this.randomIdea()}
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