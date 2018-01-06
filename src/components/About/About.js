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
                        <button onClick={this.callbackToAppJs.bind(this)}>
                            Back
                            </button>
                            About Chingu and Tiers etc. here
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