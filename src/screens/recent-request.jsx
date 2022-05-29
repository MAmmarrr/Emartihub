import React from 'react'
import RenderRequests from '../components/RenderRequests'
import { Grid } from '@mui/material'
import RequestFilter from '../components/RenderRequests/RenderRequestFilters'

export default function RecentRequest() {
    return (
        <div style={{padding:0}} >
                    <Grid container style={{ paddingTop:'2em', backgroundColor:"bg"}}>
                            <Grid item md={6} style={{marginLeft:'1px' }}>
                                <RenderRequests />
                            </Grid>
                            <Grid item md={5}>
                                <RequestFilter />
                            </Grid>
                    </Grid>
        </div>
    )
}
