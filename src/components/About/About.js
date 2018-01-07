import React from 'react';
import './About.css';

class About extends React.Component{
    callbackToAppJs(){
        this.props.hideAbout();
    }
    render(){
        if(this.props.visible){
            return(
                <div className="about">
                <center>
                    <div className="modal-box">
                        <button className = "back-button" onClick={this.callbackToAppJs.bind(this)}>
                            Back
                            </button>
                            <center>
                            <h2>
                                About
                                </h2>
                                <div className = "paragraph">
                                    When it comes to learning coding, time is valuable and too much is wasted
                                    on choosing appropriately challenging projects. For this reason, this application
                                    pulls ideas from many users and provides random project suggestions based on skill level.
                                    Here is a quick explanation of the Chingu Cohort Tier System that this application uses.
                                    </div>
                            <h2>
                                Tiers
                                </h2>
                                <div className = "tier-box">
                                <h4 className = "toucans-text">
                                    Toucans
                                    </h4>
                                    <p>
                                        Toucan projects are typically considered beginner projects. Although considered beginner,
                                        the skills practiced help establish the basics of HTML, CSS, and JavaScript. These projects
                                        are similar to the difficulty found in the Front-End Certificate on freeCodeCamp.
                                        </p>
                                <h4 className = "geckos-text">
                                        Geckos
                                    </h4> 
                                    <p>
                                        Gecko projects are intermediate in difficulty and use more complex front-end development.
                                        Many Gecko projects will include the use of JavaScript frameworks such as React, Angular, D3, etc
                                        and may often use APIs.
                                        </p>  
                                <h4 className = "bears-text">
                                        Bears
                                    </h4>
                                    <p>
                                        Bears are the advanced projects tier. Bear projects will typically make use of both front-end and
                                        back-end development. A Bear project is likely to include secure user authentication, stored data,
                                        CRUD operations, JavaScript frameworks, and APIs.
                                        </p> 
                                    </div>
                            </center>
                        </div>
                        </center>
                    </div>
            )
        }
        else{
            return null;
        }
    }
}
export default About;