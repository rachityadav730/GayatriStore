import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function SearchComponent() {
    const handleSearch = (event) => {
      // Handle the search logic here
      const searchTerm = event.target.value;
      console.log(`Searching for: ${searchTerm}`);
    };
  
    return (
      <div style={{marginTop: "20px !important"}}>
        <TextField
        //   label="Search"
          variant="outlined"
          size="small"
          fullWidth
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </div>
    );
  }
  
  export default SearchComponent;
  