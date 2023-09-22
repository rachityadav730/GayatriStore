import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../Asset/Images/logo.jpeg';
import Box from '@mui/material/Box';
import NavItem from './NavItems'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

const Logo = () => {
return (
    <Box>
       
    <AppBar position="static" sx={{backgroundColor: "white"}}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Grid container >
            <Grid item xs ={1}>
                <Link to="/">
                    <img src={logo} width={'100px'} alt = "Company logo"/>
                </Link>
            </Grid>
            <Grid item xs ={11}>
            <NavItem/>
            </Grid>
        </Grid>
    
    </Toolbar>
        </Container>      
    </AppBar>
    </Box>
  )
}

export default Logo
