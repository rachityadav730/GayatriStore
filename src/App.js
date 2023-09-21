import './App.css';
import Box from '@mui/material/Box';
import Home from './Pages/Home'


function App() {
  return (
    <Box sx = {{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <Box>
        <Home/>
      </Box>
    </Box>
  );
}

export default App;
