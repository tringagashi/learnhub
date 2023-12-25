import React, { useState } from 'react'



import Page from './Page';
import NavBar1 from './NavBar1';
import Navbar2 from './NavBar2';
import Page1 from './Page1';














function Navbar() {
  const myStyle = {
    backgroundColor: 'lightblue',
   
  };
  
  return (

    <>
     <div style={myStyle}>
      <h5>Online Education Courses</h5>
    

      <NavBar1 />
      <Navbar2 />
      <Page />  
      <Page1 />
    
      </div>
      </>
      
  
   
  )
}

export default Navbar
