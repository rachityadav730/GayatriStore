import React from 'react'
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MasterCard from './MasterCard'
import image1 from '../../Asset/Images/image1.jpg';
import image2 from '../../Asset/Images/image2.jpg';
import image3 from '../../Asset/Images/image3.jpg';
import image4 from '../../Asset/Images/image4.jpg';
import image5 from '../../Asset/Images/image5.jpg';
import image6 from '../../Asset/Images/image6.jpg';

const index = () => {
  return (
    <div>
        <Grid container spacing={2}>
        <Grid item xs={4}>
          <MasterCard src = {image1}/>
        </Grid>
        <Grid item xs={4}>
        <MasterCard src = {image2}/>
        </Grid>
        <Grid item xs={4}>
        <MasterCard src = {image3}/>
        </Grid>
        <Grid item xs={4}>
        <MasterCard src = {image4}/>
        </Grid>

        <Grid item xs={4}>
        <MasterCard src = {image5}/>
        </Grid>
        <Grid item xs={4}>
        <MasterCard src = {image6}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default index
