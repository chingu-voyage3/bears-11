import React from 'react';
import './PBComponents.css';

class SetLevel extends React.Component {

  render() {
    return(
      <div className='level left'>
        <h4>
          Select Level
        </h4>
        <p className='label'>Toucans <span className='small'>(Tier 1)</span></p>
        <input type='radio' name='level' value='Toucans' defaultChecked /><br/>
        <p className='label'>Geckos <span className='small'>(Tier 2)</span></p>
        <input type='radio' name='level' value='Geckos' /><br/>
        <p className='label'>Bears <span className='small'>(Tier 3)</span></p>
        <input type='radio' name='level' value='Bears' />
      </div>
    )
  }
}






export default SetLevel;
