import React from 'react'
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MainCard from './MainCard'
import image1 from '../../Asset/Images/image1.jpg';
import image2 from '../../Asset/Images/image2.jpg';
import image3 from '../../Asset/Images/image3.jpg';
import image4 from '../../Asset/Images/image4.jpg';
import image5 from '../../Asset/Images/image5.jpg';
import image6 from '../../Asset/Images/image5.jpg';
import image7 from '../../Asset/Images/image7.jpg';
import image8 from '../../Asset/Images/image8.jpg';
import image9 from '../../Asset/Images/image9.jpg';
import image10 from '../../Asset/Images/image10.jpg';
import image11 from '../../Asset/Images/image11.jpg';
import image12 from '../../Asset/Images/image12.jpg';

const index = () => {
    var items = [[
        {
            name: image1,
            description: "School1!"
        },
        {
            name: image2,
            description: "School2!"
        },
        {
            name: image3,
            description: "School3!"
        },
        {
            name: image4,
            description: "School4!"
        },{
            name: image5,
            description: "School5!"
        },
        {
            name: image6,
            description: "School6!"
        }
    ],
    [
        {
            name: image7,
            description: "School11!"
        },
        {
            name: image8,
            description: "School12!"
        },
        {
            name: image9,
            description: "School13!"
        },
        {
            name: image10,
            description: "School14!"
        },{
            name: image11,
            description: "School15!"
        },
        {
            name: image12,
            description: "School16!"
        }
    ],
]
  return (
        <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h3">Responsive h3</Typography>
      <Carousel  navButtonsWrapperProps={{ style: {
            bottom: '0',
            top: 'unset'
        }}}>
      
      
      {
                items.map( (item_data, i) => {
                    return(
                        <Grid container spacing={0}>
                            {
                                item_data.map((item,k)=>{
                                    return(
                                        <Grid item xs={2}>
                                            <MainCard item_data = {item}/>
                                        </Grid>
                                    )
                                })

                            }
                        </Grid>

                    )
                } )
            }
        </Carousel>
      </Box>
  )
}

export default index
