import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Description from './components/Description/Description.js';
import ProjectBox from './components/ProjectBox/ProjectBox.js';
import About from './components/About/About.js';
import './App.css';

/*
The about state is handled through buttons nested in child components(Description and About)
and are updated via props which trigger handleCloseAbout and handleOpenAbout
*/

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      about: false
    }
    this.handleCloseAbout = this.handleCloseAbout.bind(this)
    this.handleOpenAbout = this.handleOpenAbout.bind(this)
  }
  handleCloseAbout(){
    this.setState({about: false});
  }
  handleOpenAbout(){
    this.setState({about: true});
  }
  render() {
    return (
      <div className='main'>
        <Header/>
        <Description showAbout = {this.handleOpenAbout}/>
        <ProjectBox/>
        <Footer/>
        <About visible = {this.state.about} hideAbout = {this.handleCloseAbout}/>
      </div>
    );
  }
}

export default App;
