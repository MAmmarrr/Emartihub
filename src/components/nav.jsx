import React from 'react'
import BasicModal from './CreateProfileStepper/BaseModalIndex'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Grid, Typography } from '@mui/material'

export default function Nav() {
    return (
        <div>
        <React.Fragment>
            <AppBar color='light' position="fixed">
                <Toolbar>
                    <Grid container justifyContent="space-between">
                        <Grid item md={2}>
                            <Typography sx={{color: 'text.primary', fontSize: 18, fontWeight: 'bold', marginTop:'0.3em'}}>EmartiHub</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <BasicModal label={"Create Specialized Profile"} /> 
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
        </div>
    )
}
