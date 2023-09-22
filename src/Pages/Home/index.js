import React from 'react'
import Logo from '../../Component/Navbar/Logo'
import Carousel from '../../Component/Slider'
import GridCard from '../../Component/GridCard'
import Grid from '../../Component/Grid'
import Footer from '../../Component/Footer'
import Box from '@mui/material/Box';


const index = () => {
  return (
    <div>
      <Box sx = {{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <Box>
      <Logo/>
        <Carousel/>
        <GridCard/>
        <Grid/>
        <Footer/>
      </Box>
    </Box>
        
    </div>
  )
}

export default index
