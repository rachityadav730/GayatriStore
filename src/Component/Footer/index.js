import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const index = () => {
  return (
    <Box sx={{
        
        backgroundColor: 'grey',
        '&:hover': {
          backgroundColor: 'light-grey',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
>
      <Typography variant="h3">
      ONLINE SHOPPING MADE EASY AT MYNTRA

      </Typography>
      <Typography variant="h5">
      If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
      </Typography>
    </Box>
  )
}

export default index
