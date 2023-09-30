import React from 'react'
import {Link} from 'react-router-dom';
import Gaytri_outfit from '../../Asset/Images/Gaytri_outfit.png';
import {Box,Paper} from '@mui/material';
// import Paper from '@mui/material'

import NavItem from './NavItems'
// import TabWithMenuList from './NavItems/NavBar'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

const Logo = () => {
return (
    <AppBar position="fixed" sx={{backgroundColor: "white",padding: "20px",height: '90px'}}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Grid container sx={{p:2, flexDirection:'row', flexWrap:'nowrap'}}>
            <Grid item xs ={.5}> 
            </Grid>
            <Grid item xs = {1}>
                <Box pt={10} sx={{height: '80px',paddingTop: '10px! important'}} >
                <Link to="/">
                    <img src={Gaytri_outfit} width='70px' height='70px' object-fit = 'contain' alt = "Company logo"/>
                </Link>
                </Box>
                
            </Grid>
            <Grid item xs ={10.5}>
            <NavItem/>
            {/* <TabWithMenuList/> */}
            </Grid>
        </Grid>
    </Toolbar>
        </Container>      
    </AppBar>
  )
}

export default Logo
