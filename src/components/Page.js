import React from 'react'
import {CardMedia , Button} from '@mui/material'

function Page() {
  const myStyle = {
    backgroundColor: 'white',
   
  };
  return (
   <>
    <div style={myStyle}>
   <Button color = 'primary'>Learn and Get Certificates</Button>
   <CardMedia
         component = 'img'
         height = '500'
         image = 'https://blog.coursify.me/wp-content/uploads/2014/12/e-learning-platform-coursifyme.jpg'
         
   >
</CardMedia>


</div>

 
    
   </>
  )
}

export default Page