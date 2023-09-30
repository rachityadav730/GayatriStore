// // import React from 'react'
// import React,{ useState } from 'react'
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { styled, alpha } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import { Grid } from '@mui/material';
// import { Link } from "react-router-dom";
// import Popover from '@mui/material/Popover';
// import MenuList from '@mui/material/MenuList';

import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';




const TabData = (props) => {

    const [hovered, setHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleTabHover = (event) => {
      setHovered(true);
      setAnchorEl(event.currentTarget);
    };
  
    const handleTabBlur = () => {
      setHovered(false);
    };
  
    const handleMenuClose = () => {
      setMenuOpen(false);
    };
  
    return (
      <>
        <Tabs
          value={0}
          onMouseEnter={handleTabHover}
          onMouseLeave={handleTabBlur}
        >
          <Tab
            label="Tab with Hover Menu"
            aria-owns={menuOpen ? 'menu' : undefined}
            aria-haspopup="true"
            id="tab-with-hover-menu"
          />
        </Tabs>
  
        <Popover
          open={hovered}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuList autoFocusItem={menuOpen && hovered} id="menu">
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
          </MenuList>
        </Popover>
      </>
    );
  }


  export default TabData
  
  
  
