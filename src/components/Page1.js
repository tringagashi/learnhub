import React from 'react'
import { IconButton ,Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Page1() {
    const myStyle = {
        backgroundColor: 'lightblue',
       
      };
  return (
    <>
     <div style={myStyle}>
     <h2>Free Online Courses

With Certificates &

Diplomas</h2>
<h5>25K Learners. 10 Years. 100% Free</h5>

     <IconButton 
            size = 'large'
            edge = 'start'
            color = 'inherit'
            aria-label = 'logo'
            
          
         
        >

           <Button color = 'primary'>
            <InstagramIcon />
            <h7>@learnhub
            </h7>
          </Button>

        </IconButton>
     <IconButton 
            size = 'large'
            edge = 'start'
            color = 'inherit'
            aria-label = 'logo'
            
          
         
        >

           <Button color = 'primary'>
           <TwitterIcon />
           <h7>learhub</h7>
          </Button>

        </IconButton>
     <IconButton 
            size = 'large'
            edge = 'start'
            color = 'inherit'
            aria-label = 'logo'
            
          
         
        >

           <Button color = 'primary'>
            <FacebookIcon />
            <h7>learnhub
                
            </h7>
          </Button>

        </IconButton>
     <IconButton 
            size = 'large'
            edge = 'start'
            color = 'inherit'
            aria-label = 'logo'
            
          
         
        >

           <Button color = 'primary'>
            <LocalPhoneIcon />
            <h6>+38349112225</h6>
          </Button>

        </IconButton>
     <IconButton 
            size = 'large'
            edge = 'start'
            color = 'inherit'
            aria-label = 'logo'
            
          
         
        >

           <Button color = 'primary'>
            <EmailIcon />
            <h7>learnhub@gmail.com</h7>
          </Button>

        </IconButton>

      
    
      </div>
      </>
  )
}

export default Page1