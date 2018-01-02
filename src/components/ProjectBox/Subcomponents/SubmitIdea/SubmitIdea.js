import React from 'react';
import './SubmitIdea.css';

class SubmitIdea extends React.Component{
    callbackToParent(){
        this.props.callback();
    }
    render(){
        return(
        <div className="outline">
            <form method ="POST" action="/submitIdea">
                <h4>
                    Project Name
                    </h4>
                <input name="name" className="submit-input" placeholder="name"/>
                <h4>
                     Tier
                    </h4>
                <input type="radio" name="tier" value = "Toucans"/> Toucans<br/><br/>
                <input type="radio" name="tier" value = "Geckos"/> Geckos<br/><br/>
                <input type="radio" name="tier" value = "Bears"/> Bears<br/><br/>
                <h4>
                    URL for Example Project(optional)
                    </h4>
                <input name="link" className="submit-input" placeholder="https://example.com"/>
                <br/><br/>
                <button type = "submit" className="submit-button">
                    Submit Idea
                    </button>
                <button type="button" onClick={this.callbackToParent.bind(this)} className="submit-button">
                    Back
                    </button>
                </form>
            </div>
        )
    }
}

export default SubmitIdea;