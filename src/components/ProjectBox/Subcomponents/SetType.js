import React from 'react';
import './PBComponents.css';

class SetType extends React.Component {

  render() {
    return(
      <div className='type right'>
        <h4>
          Select Type
        </h4>
          <div className='options'>
          <p className='label'>Clone</p>
          <input type='radio' name='type' value='clone' defaultChecked /><br/>
          <p className='label'>Non-profit Request</p>
          <input type='radio' name='type' value='npreq' /><br/>
          <p className='label'>GitHub Issue</p>
          <input type='radio' name='type' value='ghiss' />
        </div>
      </div>
    )
  }
}






export default SetType;
