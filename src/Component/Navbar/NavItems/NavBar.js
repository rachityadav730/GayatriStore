import React,{useState} from 'react';
import { Tabs, Tab, Box, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';


const useStyles = makeStyles((theme) => ({
  tab: {
    '&:hover': {
      borderBottom: `2px solid #a60a4c`,
      color: 'black',
       // Change this to your desired border color
    },
  },
}));


const listStyle = {
  backgroundColor: 'lightblue',
  color: 'black' // Change this to your desired background color
};

function MyTabs() {

  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null); // Track the currently hovered tab

  const handleTabHover = (event, tabValue) => {
    setHoveredTab(tabValue);
  };

  const handleTabLeave = () => {
    setHoveredTab(null);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        onMo
        centered
      >
        <Tab
         label="Tab 1" 
         onMouseEnter={(e) => handleTabHover(e, 0)}
         onMouseLeave={handleTabLeave}
         className={ hoveredTab ==0 ? classes.tab : ''} 
         />
        <Tab label="Tab 2"
            onMouseEnter={(e) => handleTabHover(e, 1)}
            onMouseLeave={handleTabLeave}
            className={ hoveredTab == 1 ? classes.tab : ""} 
             />
      </Tabs>
      <TabPanel onMouseEnter={(e) => handleTabHover(e, hoveredTab)} onMouseLeave={handleTabLeave} value={hoveredTab} index={0}>
        <List>
          <ListItem button style={listStyle}>
            <ListItemText style={listStyle} primary="Item 1" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText  style={listStyle}  primary="Item 2" />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel onMouseEnter={(e) => handleTabHover(e, hoveredTab)} onMouseLeave={handleTabLeave} value={hoveredTab} index={1}>
        <List>
          <ListItem button>
            <ListItemText style={listStyle}  primary="Item A" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={listStyle}  primary="Item B" />
          </ListItem>
        </List>
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default MyTabs