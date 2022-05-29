import React from "react";
import {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { TextField } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Typography } from "@mui/material";
import { Collapse } from "@material-ui/core";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "6rem",
    minWidth: "275",
    marginLeft: "1em",
    borderRadius: 10,
    backgroundColor: "#fffcf7 ",
  },
});

export default function RequestFilter() {
  const classes = useStyles();

  const [catFilter,setCatFilter] = useState(false);
  const [numberOfWorkersFilter,setNumberOfWorkers] = useState(false);
  const [projectLengthFilter,setProjectLengthFilter] = useState(false);
  const [clientLocationFilter,setClientLocationFilter] = useState(false);

  return (
    <Card className={classes.root}>

      <CardContent>
        <Typography color="primary" style={{fontSize:'2em', fontWeight:'bold'}}>Filter By</Typography>
      </CardContent>
      <Grid item xs={12} style={{marginLeft:'3em'}}>

      <CardActions >
        <Grid container>
          <Grid item md={10}>
            <Typography color="primary" style={{fontSize:'1em', fontWeight:'bold'}}>
              Category
            </Typography>
            <Collapse in={catFilter} timeout="auto" unmountOnExit>
            <CardContent>
              <TextField variant="outlined"  size="small" placeholder="search by category" />

            </CardContent>
          </Collapse>
          </Grid>
          <Grid item md={2}>
            <ExpandMore
            expand={catFilter}
            onClick={()=>{setCatFilter(!catFilter)}}
            aria-expanded={catFilter}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore>
          </Grid>
        </Grid>
      </CardActions>

      <CardActions>
        <Grid container>
          <Grid item md={10}>
            <Typography color="primary" style={{fontSize:'1em', fontWeight:'bold'}}>
              Project Length
            </Typography>
            <Collapse in={projectLengthFilter} timeout="auto" unmountOnExit>
            <CardContent>
              <TextField variant="outlined" fullWidth size="small" placeholder="search by project length"

              ></TextField>
            </CardContent>
          </Collapse>
          </Grid>
          <Grid item md={2}>
            <ExpandMore
            expand={projectLengthFilter}
            onClick={()=>{setProjectLengthFilter(!projectLengthFilter)}}
            aria-expanded={projectLengthFilter}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore>
          </Grid>
        </Grid>
      </CardActions>

      <CardActions>
        <Grid container>
          <Grid item md={10}>
            <Typography color="primary" style={{fontSize:'1em', fontWeight:'bold'}}>
              Number of Workers
            </Typography>
            <Collapse in={numberOfWorkersFilter} timeout="auto" unmountOnExit>
            <CardContent>
              <TextField variant="outlined" fullWidth size="small" placeholder="search by number of workers"

              ></TextField>
            </CardContent>
          </Collapse>
          </Grid>
          <Grid item md={2}>
            <ExpandMore
            expand={numberOfWorkersFilter}
            onClick={()=>{setNumberOfWorkers(!numberOfWorkersFilter)}}
            aria-expanded={numberOfWorkersFilter}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore>
          </Grid>
        </Grid>
      </CardActions>
      <CardActions>
        <Grid container>
          <Grid item md={10}>
            <Typography color="primary" style={{fontSize:'1em', fontWeight:'bold'}}>
              Client Location
            </Typography>
            <Collapse in={clientLocationFilter} timeout="auto" unmountOnExit>
            <CardContent>
              <TextField variant="outlined" fullWidth size="small" placeholder="search by location"

              ></TextField>
            </CardContent>
          </Collapse>
          </Grid>
          <Grid item md={2}>
            <ExpandMore
            expand={clientLocationFilter}
            onClick={()=>{setClientLocationFilter(!clientLocationFilter)}}
            aria-expanded={clientLocationFilter}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore>
          </Grid>
        </Grid>
      </CardActions>
      </Grid>

    </Card>
  );
}
