import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

function NavBar1() {
    const myStyle = {
        backgroundColor: 'white',
       
      };
  return (
    <>
    
       
      
      
   

   
<IconButton
    size = 'large'
    edge = 'start'
    color = 'danger'
    aria-label = 'logo'
>
    <CastForEducationIcon />
    <h5>Learn Hub</h5>
    

</IconButton>

   

{/* <Typography variant = 'h5' component = 'div' sx ={{ flexGrow: 1}}>
    Learn Hub
</Typography> */}




    </>
   
  )
}

export default NavBar1