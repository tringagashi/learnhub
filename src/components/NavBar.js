import React, { useState } from 'react'



import Page from './HomePage';
import NavBar1 from './NavBar1';
import Navbar2 from './NavBar2';
import Page1 from './HomePage1';
import HomePage from './HomePage';
import HomePage1 from './HomePage1';















function Navbar() {
  const myStyle = {
    backgroundColor: 'lightblue',
   
  };
  
  return (

    <>
     <div style={myStyle}>
      
    

      <NavBar1 />
      <Navbar2 />
      <HomePage />
      <HomePage1 />
     
    
      </div>
      </>
      
  
   
  )
}

export default Navbar
