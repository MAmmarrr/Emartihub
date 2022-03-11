import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Grid, Typography, Divider, CardMedia } from '@material-ui/core';
import { Avatar } from '@mui/material';

export default function Reviews(props) {
    const {image,name, rating, review} = props;
    console.log(rating)
    return (
        <>
           <Box component="div">
                <Grid container xs={12} style={{marginTop:'1em'}}>
                    <Grid item xs={1}>
                        <Avatar src={image} alt="as"></Avatar>
                    </Grid>
                    <Grid item container xs={10}>
                    
                    <Grid item container xs={12}>
                    <Grid item xs={2} >
                        <Typography style={{fontWeight:"bold"}}>{name}</Typography>
                    </Grid>
                    <Grid item xs={2} >
                        <Rating name="half-rating" value={rating} readOnly precision={0.5}/>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} style={{margin:10}}></Grid>
                    <Grid item xs={12} style={{marginTop:'0.2em', marginBottom:'1em'}}>
                        <Typography>
                            {review}
                        </Typography>
                    </Grid>
                    
                    </Grid>

                </Grid>
                <Divider style={{ marginLeft: '1em'}}/> 
            </Box>
        </>
    )
}
