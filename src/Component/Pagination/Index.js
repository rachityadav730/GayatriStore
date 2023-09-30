import React,{ useState }  from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const Index = () => {

    const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{marginTop: "20px"}}>
                        <Stack spacing={2} style={{alignItems: "Center"}}>
                          <Pagination count={50} page={page} variant="outlined"  color="secondary" shape="rounded"  onChange={handleChange} />
                        </Stack>
    </Box>
  )
}

export default Index
