import React from 'react';
import SubmitIdea from './Subcomponents/SubmitIdea/SubmitIdea.js';
import GetIdea from './Subcomponents/GetIdea/GetIdea.js'
import './ProjectBox.css';

class ProjectBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            submitIdea: false
        }
        this.handleCallback=this.handleCallback.bind(this);
    }
    handleCallback(){
        //Handles changes which are called through buttons in subcomponents
        //through the callback props listed in the render functions below
        var ideaState = this.state.submitIdea;
        ideaState === false ? ideaState = true : ideaState = false;
        this.setState({submitIdea: ideaState})
    }
    render(){
        if(this.state.submitIdea){
           return <SubmitIdea callback={this.handleCallback}/>
        }
        else if(!this.state.submitIdea){
           return <GetIdea callback={this.handleCallback}/>
        }
    }
}


export default ProjectBox;