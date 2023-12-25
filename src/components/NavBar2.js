import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem
} from '@mui/material'

import CastForEducationIcon from '@mui/icons-material/CastForEducation';


function Navbar2() {
   
  return (
    <>
    
   <AppBar position='static' color='primary'>

     <Toolbar>



<Stack direction = 'row' spacing = {2}>

    <Button color = 'inherit'>Home</Button>
    <Button color = 'inherit'>Pages</Button>
    <Button color = 'inherit'>Courses</Button>
    <Button color = 'inherit'>About Us</Button>
   
    </Stack>
    
    
    
    </Toolbar>   
    
      </AppBar>
       
      </>
      
  
   
  )
}

export default Navbar2
