import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
        <div className="footer">
            <h4 className="description"> Project for Chingu Cohorts</h4>
            <div className="inline-content">
            <a href="https://github.com/jboxman"><h6>Jason B.</h6></a>
            <a href="https://github.com/mojicaj"><h6>Jason M.</h6></a>
            </div>
            <div className="inline-content">
            <a href="https://github.com/Renestl"><h6>Jennifer C.</h6></a>
            <a href="https://github.com/eolculnamo2"><h6>Rob B.</h6></a>
            </div>
            </div>
        )
    }
}

export default Footer;
