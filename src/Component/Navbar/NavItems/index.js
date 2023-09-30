import React,{ useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TabData from './Tabs';
import SearchComponent from './SearchComponent'
import ListDividers from './ListDivider'
import MyTabs from './NavBar'


const NavItem = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const [isShown, setIsShown] = useState(false);
const [value, setValue] = React.useState(1);
const [anchorEl, setAnchorEl] = React.useState(null);
const [hovered, setHovered] = useState(false);
const [menudropdown, setMenudropdown] = useState(false);


const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setMenudropdown(true)
    // setHovered(true);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
    // setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setHovered(false);
  };

 

  const handleTabHover = (event) => {
    console.log("sdfsdfsd1",event)
    setHovered(true);
    setIsShown(true)
    // setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
     setHovered(false);
  };

  const handleTabBlur = (event) => {
    console.log("sdfsdfsd2",event)
    setHovered(false);
    setIsShown(false)
    setMenuOpen(false);
   
  };

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: "1px solid grey",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'grey',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const handleChange = (event, newValue) => {
  setValue(newValue);
};
    //   const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    //   };
  return (
    <>

    <Grid container>
    <Grid item xs = {.5}>

        </Grid>
        <Grid item xs = {4} sx={{height: '80px',paddingTop: '10px! important'}} >


<MyTabs/>

{/* <button onMouseEnter={(e) => handleTabHover(e)}
            onMouseLeave={handleTabBlur}  >
  hello moto
</button> */} 

        {/* <Tabs
            value={value}
            // onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            
            // TabIndicatorProps={{
            //   style: {
            //     backgroundColor: "#D97D54"
            //   }
            // }}
            >
          
            <Tab onClick={handleClick}  value={1} label="Schools" />

            {
              menudropdown && <ListDividers/>
            }
            
            {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
            {/* <Tab onClick={handleClick}    component={Link} to={`/shop/girl`} value={2}   label="Uniforms" /> */}
            {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
            {/* <Tab component={Link} to={`/shop/books`} value={3}  label="Books" />
        </Tabs> */} 
            
        </Grid>
        <Grid item xs = {2}>

        </Grid>
        <Grid item xs = {2}>

          <SearchComponent/>

        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon sx ={{color: "black"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for product"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        
        </Grid>
        <Grid item xs = {1}>

            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            onMouseEnter={handleClick}
        onMouseLeave={handleClose}
            style={{"float":"right"}}
          >
            Dashboard
          </Button>
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Typography>Welcome</Typography>
            <Typography>To access account and manage orders</Typography>
            <Link to= "/login">
              <Button >Sign up and login</Button>
            </Link>
            
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}
      </Grid>
      <Grid item xs = {2}>
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
            <Tab style={{width: "40px"}} component={Link} to={`/wishlist`}  icon={<FavoriteBorderOutlinedIcon />} aria-label="favorite" />
            <Tab style={{width: "40px"}} component={Link} to={`/cart`}  icon={<ShoppingBagOutlinedIcon />} aria-label="person" />
        </Tabs>
            
        </Grid>
    </Grid>
       

      

    

             
    </>  
        
  )
}

export default NavItem
