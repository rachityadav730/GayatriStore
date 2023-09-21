import React from 'react'
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MainCard from '../GridCard/MainCard'
const index = () => {
  return (
    <div>
        <Grid container spacing={2}>
        <Grid item xs={4}>
          <MainCard/>
        </Grid>
        <Grid item xs={4}>
        <MainCard/>
        </Grid>
        <Grid item xs={4}>
        <MainCard/>
        </Grid>
        <Grid item xs={4}>
        <MainCard/>
        </Grid>

        <Grid item xs={4}>
        <MainCard/>
        </Grid>
        <Grid item xs={4}>
        <MainCard/>
        </Grid>
      </Grid>
    </div>
  )
}

export default index
