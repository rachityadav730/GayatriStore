import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const MainCard = (props) => {
  console.log("allprops1231212",props)
  return (
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <Link to = {"/school"}>
        <CardMedia
          component="img"
          height="140"
          // image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          image={props && props.item_data && props.item_data.name}

          alt="green iguana"
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
             props && props.item_data && props.item_data.description
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MainCard
