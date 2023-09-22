import React from 'react'
import Logo from '../../Component/Navbar/Logo'
import Carousel from '../../Component/Slider'
import GridCard from '../../Component/GridCard'
import Grid from '../../Component/Grid'
import Footer from '../../Component/Footer'
import Box from '@mui/material/Box';
import CommonDesign from '../../CommonDesign'


const index = () => {
  return (
    <div>

      <CommonDesign>
          <Carousel/>
          <GridCard/>
          <Grid/>
      </CommonDesign>  
    </div>
  )
}

export default index
