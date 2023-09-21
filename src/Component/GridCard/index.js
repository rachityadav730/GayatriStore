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
const index = () => {
    var items = [
        {
            name: image1,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: image2,
            description: "Hello World!"
        },
        {
            name: image3,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: image4,
            description: "Hello World!"
        },{
            name: image5,
            description: "Probably the most random thing you have ever seen!"
        }
    ]
  return (
        <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h3">Responsive h3</Typography>
      <Carousel  navButtonsWrapperProps={{ style: {
            bottom: '0',
            top: 'unset'
        }}}>
      
      
      {
                items.map( (item, i) => {
                    return(
                        <Grid container spacing={0}>
        <Grid item xs={3}>
          <MainCard/>
        </Grid>
        <Grid item xs={3}>
        <MainCard/>
        </Grid>
        <Grid item xs={3}>
        <MainCard/>
        </Grid>
        <Grid item xs={3}>
        <MainCard/>
        </Grid>
      </Grid>

                    )
                } )
            }
        </Carousel>
      </Box>
  )
}

export default index
