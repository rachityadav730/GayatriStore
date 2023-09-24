import React from 'react'
import { Box,Container,Typography } from '@mui/material'
import Filterchild from './Filterchild'
const Index = () => {

    const all_list = [
        {name: "Shirt",count: 10},
        {name: "TShirt",count: 10},
        {name: "Skirt",count: 10},
        {name: "Tunic",count: 10},
        {name: "Short",count: 10},
        {name: "Blazer",count: 10}]
        const Size = ["10","12","13","14","SL"]
        const Class = [,"1","2","3","4","5","10","12","13","14","SL"]
        const Waist = ["17","18","19","20","XXL"]
        const Length = ["171","181","191","201","Xl"]
  return (
    
        <Container maxWidth="sm" >
            <Box sx ={{display: 'flex',justifyContent: 'space-between',marginTop: "7%",marginBottom: "20px"}}>
                <Typography variant="h6">
                    Filter
                </Typography>

                <Typography variant="h6" style={{color: "#f24563"}}>
                    clearAll
                </Typography>
            </Box>
                
            <Box>
                    <Filterchild header = {"Category"} dataType = {1} data = {all_list}/>
            </Box>
            <Box>
                    <Filterchild header = {"Size"} dataType = {0} data = {Size} />
            </Box>

            <Box>
                    <Filterchild header = {"Class"} dataType = {0} data = {Class}/>
            </Box>
            <Box>
                    <Filterchild header = {"Waist"} dataType = {0} data = {Waist} />
            </Box>

            <Box>
                    <Filterchild header = {"Length"} dataType = {0} data = {Length} />
            </Box>


        </Container>
  )
}

export default Index
