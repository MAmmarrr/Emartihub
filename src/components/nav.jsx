import React from 'react'
import BasicModal from './CreateProfileStepper/BaseModalIndex'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Grid, Typography, Button } from '@mui/material'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
        <React.Fragment>
            <AppBar color='light' position="fixed">
                <Toolbar>
                    <Grid xs={12} container justifyContent="space-between" alignItems={'center'}>
                        <Grid item xs={2}>
                            <Link to="/recent-requests" style={{textDecoration: 'none'}}>
                            <Typography sx={{color: 'text.primary', fontSize: 18, fontWeight: 'bold', marginTop:'0.3em'}}>EmartiHub</Typography>
                            </Link>
                        </Grid>
                        <Grid item container xs={3}>
                            <Grid item xs={3}>
            <Link to="/profile" style={{textDecoration: 'none'}}>
                            <Button variant="outlined">Profile</Button>
                            </Link>
                            </Grid>
                            <Grid item xs={8}>
                            <BasicModal label={"Create Specialized Profile"} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
        </div>
    )
}
