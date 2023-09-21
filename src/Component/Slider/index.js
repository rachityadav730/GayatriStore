import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import image1 from '../../Asset/Images/image1.jpg';
import image2 from '../../Asset/Images/image2.jpg';
import image3 from '../../Asset/Images/image3.jpg';
import image4 from '../../Asset/Images/image4.jpg';
import image5 from '../../Asset/Images/image5.jpg';
import image6 from '../../Asset/Images/image6.jpg';
import image7 from '../../Asset/Images/image7.jpg';


const index = () => {
    var items = [
        {
            name: image1,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: image2,
            description: "Hello World!"
        },
        {
            name: image3,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: image4,
            description: "Hello World!"
        },{
            name: image5,
            description: "Probably the most random thing you have ever seen!"
        }
    ]
  return (
    <div>
        
      <Carousel  navButtonsWrapperProps={{ style: {
            bottom: '0',
            top: 'unset'
        }
    }} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </div>
  )
}

function Item(props)
{
    console.log("print image1 values",props.item.name,image1)

    return (
        <Paper style={{
            padding: 8,
            marginTop: 5,
            height: "30%"
          }}>
            <img src={props.item.name} style={{
    width: "100%", 
    height: "50%",
    objectFit: "contain"
}}
 alt = "Company logo"/>
            

            
        </Paper>
    )
}

export default index
