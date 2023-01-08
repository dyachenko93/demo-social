import React from 'react';
import preloader from '../../assets/images/loader.gif'

let Preloader = (props) => {
  return <div style={{ backgroundColor: 'white' }}>
    <img src={preloader} alt={'loader'} />
  </div>
}

export default Preloader