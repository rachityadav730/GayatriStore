import React from 'react'
import Logo from '../Component/Navbar/Logo'
import Carousel from '../Component/Slider'
import GridCard from '../Component/GridCard'
import Grid from '../Component/Grid'
import Footer from '../Component/Footer'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';


const index = (props) => {
  return (
      <Box pt={10} sx = {{
      display: 'flex',
      // flexDirection: 'column',
      height: '100vh'
    }}>
      {/* <Box> */}
      <CssBaseline>
      <Paper>
      <Logo/>
        {props.children}
        <Footer/>
      </Paper>
      </CssBaseline>
      {/* </Box> */}
    </Box>
  )
}

export default index
