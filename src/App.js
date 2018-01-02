import React, { Component } from 'react';
import Description from './components/Description/Description.js';
import ProjectBox from './components/ProjectBox/ProjectBox.js'
import './App.css';

//intead of authentication, use contributor key;
class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Description/>
        <ProjectBox/>
      </div>
    );
  }
}

export default App;
