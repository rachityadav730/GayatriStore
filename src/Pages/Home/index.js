import React from 'react'
import Logo from '../../Component/Navbar/Logo'
import Carousel from '../../Component/Slider'
import GridCard from '../../Component/GridCard'
import Grid from '../../Component/Grid'
import Footer from '../../Component/Footer'



const index = () => {
  return (
    <div>
        <Logo/>
        <Carousel/>
        <GridCard/>
        <Grid/>
        <Footer/>
    </div>
  )
}

export default index
