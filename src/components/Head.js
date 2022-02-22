import React from 'react'
import logo from './../logo.svg';


const Head = () => {
  return (
      <div className='head'>
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="react-facts">ReactFacts</h3>

        <h4 className="tobb-etu-cs">TOBB ETU - Computer Scince</h4>
        <img src="/images/tobb_etu_dikey_en.png" alt=""/>
      </div>
  );
}

export default Head;