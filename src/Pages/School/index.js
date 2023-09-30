import React from 'react'
import Logo from '../../Component/Navbar/Logo'
import Carousel from '../../Component/Slider'
import GridCard from '../../Component/GridCard'
import Grid from '../../Component/Grid'
import Footer from '../../Component/Footer'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'
import CommonDesign from '../../CommonDesign'
import Filter from '../../Component/Filter'
import Pagination from '../../Component/Pagination'


const Index = () => {
  

  return (
    <div>
      <CommonDesign>
          <Box sx= {{display: 'flex'}}>
              <Box sx = {{width: '28%'}}>
                  <Filter/>
              </Box>
              <Box sx = {{width: '68%'}}>
                <h2> Here Scool logo will come</h2>
                <Box>
                    <Grid/>
                    <Pagination/>
                </Box>
              </Box>
          </Box>
      </CommonDesign>  
    </div>
  )
}

export default Index
