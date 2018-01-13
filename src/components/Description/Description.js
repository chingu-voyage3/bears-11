import React from 'react';
import './Description.css';

class Description extends React.Component{
    callbackToAppJs(){
        this.props.showAbout();
    }
    render(){
        return(
            <div className="description">
                <button onClick={this.callbackToAppJs.bind(this)} className="aboutBtn">
                    About
                </button>
                <h1 className="title">
                     Coding Project Generator
                </h1>
            </div>
        )
    }
}

export default Description;
