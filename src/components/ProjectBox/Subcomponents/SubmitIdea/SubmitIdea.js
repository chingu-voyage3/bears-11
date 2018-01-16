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
                <input className='submit-radio' type="radio" name="tier" value = "Toucans"/> Toucans
                <input className='submit-radio' type="radio" name="tier" value = "Geckos"/> Geckos
                <input className='submit-radio' type="radio" name="tier" value = "Bears"/> Bears

                <h4>Type</h4>
                <input className='submit-radio' type='radio' name='type' value='clone' />Clone
                <input className='submit-radio' type='radio' name='type' value='npreq' />Non-profit Request
                <input className='submit-radio' type='radio' name='type' value='ghiss' />GitHub Issue

                <h4>
                    Url of Example Project <span className='small'>(optional)</span>
                    </h4>
                <input name="link" className="submit-input" placeholder="https://example.com"/>

                <h4>
                    Project Description <span className='small'>(optional)</span>
                </h4>
                <textarea />

                <br/><br/>
                <button type = "submit" className="submit-button submit">
                    Submit Idea
                    </button>
                <button type="button" onClick={this.callbackToParent.bind(this)} className="submit-button back">
                    Back
                    </button>
                </form>
            </div>
        )
    }
}

export default SubmitIdea;
