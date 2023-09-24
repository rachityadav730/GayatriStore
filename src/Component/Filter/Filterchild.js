import React from 'react'
import { Box,Typography } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';


const Filterchild = (props) => {

    console.log("SAdfasdfa",props)
  return (
    <Box sx = {{borderTop: "1px solid grey",paddingTop: "20px",borderRight:"1px solid Grey"}}>
        <Typography variant='h6'>
                {props.header}
        </Typography>

        {props.dataType == 0 ? 
              props.data && props.data.map((v,i)=>{

                console.log("dasdasdqweqeqw",v)
                return(
                    <>

                    <FormGroup>
                         <FormControlLabel control={<Checkbox defaultChecked sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                  color: pink[600],
                                },
                              }} />} label= {v} />
                     </FormGroup>
                    
                
                    </>
                    
                )
                    
                }) 
    : 
    <>
    <FormGroup>
        {
            props.data && props.data.map((v,i)=>{
                console.log("dasdasd",v)
                return(
                        
                            <FormControlLabel control={<Checkbox         sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                  color: pink[600],
                                },
                              }}
                       />} label= {v.name} />
                )
            })
        }
    </FormGroup>
    </>
    
    }
        

    </Box>
  )
}

export default Filterchild
