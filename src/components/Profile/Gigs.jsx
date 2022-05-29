import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Typography, Divider, CardMedia } from '@material-ui/core';

export default function Gigs(props) {
    const {image, description} = props;
    return (
        <>
            <Box component="div" xs={12} sx={{ width: 270, height:300 , border: '1px solid #e6e8e6', backgroundColor: '#ddb892', borderRadius:1, marginLeft:'1em', marginBottom:'1em'}}>
                <Grid container xs={12}>
                    <CardMedia
                    component="img"
                    height="194"
                    alt="Paella dish"
                    src={image}
                />
                </Grid>
                <Grid xs={12} style={{margin:40}}></Grid>
                <Grid container xs={12} justify="center">
                    <Typography style={{fontWeight:'bold', marginLeft:'0.5em'}}>
                        {description}
                    </Typography>
                </Grid>
            </Box>
        </>
    )
}
