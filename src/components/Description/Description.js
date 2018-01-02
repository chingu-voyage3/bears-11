import React from 'react';
import './Description.css';

class Description extends React.Component{
    render(){
        return(
            <div className="description">
                <h1 className="title">
                     Provocateur
                    </h1>
                    <em>Chingu Projects Challenger Picker</em>
                        <br/>
                        <h3> 
                            If you're like us, picking projects as a team is hard.<br/>
                            Don't you wish someone could <strong>pick for you?</strong>
                            </h3>
                            
                </div>
        )
    }
}

export default Description;