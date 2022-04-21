import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import { Button, Divider, Grid } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  newPosOfDialog: {
    top:'2.4em',
    left: "25%",
    height:'100%',
    width:'100em',
  },
  bidPosOfDialog:{
    top:'2.4em',
    right: "5%",
    height:'100%',
    width:'100em',
  }
}));
export default function ClientRequest({data}) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const openDialog = () => setOpen(true);
  const [expanded, setExpanded] = React.useState(false);
  const [expandBid, setExpandBid] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: '95%', borderRadius: 0, boxShadow:5, border:1,}} style={{marginTop: '1em'}}>
      <CardHeader md={8}
        avatar={
          <Avatar sx={{ bgcolor: '#fb8500' }} color="secondary" aria-label="recipe">
            {data["Avatar"]}
          </Avatar>
        }
        action={
          <Typography >
            {data["completion deadline"]}
              <IconButton aria-label="settings">
              <MoreVertIcon />
              </IconButton>
            </Typography>
        }
        title={data["client-ame"]}
        subheader={data["date-created"]}
      />
            <Link to="/request-details" style={{textDecoration: 'none'}}>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            {data["short-description"]}
        </Typography>
      </CardContent>
            </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Grid container alignContent='center'>
        <Grid item>
        <Typography style={{color: 'black', fontSize: 18, fontWeight: 'bold', marginLeft: '10%', marginTop:'0.4em'}} >details</Typography>
        </Grid>
        <Grid>
        <IconButton onClick={() => setExpanded(true)}>
          <ArrowForward />
        </IconButton>
        </Grid>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Dialog
    scroll={'paper'}
     classes={{
      paper: classes.newPosOfDialog
      }}
      BackdropProps={{
        style: {
          opacity: 1,
          boxShadow:0
        }}}
    open={expanded}
      >
        <Grid
    style={{backgroundColor: 'white'}}
        >

         <Divider style={{marginTop: '1em'}}/>
        <DialogContent>
          <Grid container xs={12}>
            <Grid item xs={0.5}>
          <IconButton aria-label="share">
          <ArrowBack onClick={()=> setExpanded(false)}/>
            </IconButton>
            </Grid>
            <Grid item xs={10}>
            <Typography style={{color: '#FF9E00', fontSize: 18, fontWeight: 'bold', marginLeft: '10%', marginTop:'1em'}} >{data['short-description']}</Typography>

            </Grid>
          </Grid>
          <Divider style={{marginTop: '1em'}}/>
          <Grid height={300}>
            <Grid container style={{marginLeft:'1em'}} justifyContent='center' alignItems='center'>
              <Grid item xs={8}>
            <Grid container xs={8}>
              <Grid item xs={4}>
                <LocationOnIcon />
            <Typography>
             Location
            </Typography>
              </Grid>
            </Grid>
              </Grid>
              <Grid itex xs={4}  >
              <Button onClick={()=> setExpandBid(true)}color='secondary' style={{backgroundColor:'#FF9E00', borderRadius: 30}}>
                Place Bid
              </Button>
              </Grid>
            </Grid>
          </Grid>
         <Divider style={{marginTop: '1em'}}/>
          <Grid height={450}>
            <Grid container style={{marginLeft:'1em'}} alignItems='center'>
              <Grid item xs={8}>
              <Typography style={{color: 'black', fontSize: 15, marginLeft: '10%', marginTop:'1em'}} >Full Details</Typography>
              </Grid>
            </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>

        </DialogActions>
        </Grid>
      </Dialog>
      </Collapse>

      <Collapse in={expandBid} timeout="auto" unmountOnExit>
      <Dialog
    scroll={'paper'}
     classes={{
      paper: classes.bidPosOfDialog
      }}
      BackdropProps={{
        style: {
          opacity: 1,
          boxShadow:0
        }}}
    open={expandBid}
      >
        <Grid
    style={{backgroundColor: 'white'}}
        >

         <Divider style={{marginTop: '1em'}}/>
        <DialogContent>
          <Grid container xs={12}>
            <Grid item xs={0.5}>
          <IconButton aria-label="share">
          <ArrowBack onClick={()=> setExpandBid(false)}/>
            </IconButton>
            </Grid>
            <Grid item xs={10}>
            <Typography style={{color: '#FF9E00', fontSize: 18, fontWeight: 'bold', marginLeft: '10%', marginTop:'1em'}} >{data['short-description']}</Typography>

            </Grid>
          </Grid>
          <Divider style={{marginTop: '1em'}}/>
          <Grid height={300}>
            <Grid container style={{marginLeft:'1em'}} justifyContent='center' alignItems='center'>
              <Grid item xs={8}>
            <Grid container xs={8}>
              <Grid item xs={4}>
                <LocationOnIcon />
            <Typography>
             Location
            </Typography>
              </Grid>
            </Grid>
              </Grid>
              <Grid itex xs={4}  >
              <Button color='secondary' style={{backgroundColor:'#FF9E00', borderRadius: 30}}>
                Place Bid
              </Button>
              </Grid>
            </Grid>
          </Grid>
         <Divider style={{marginTop: '1em'}}/>
          <Grid height={450}>
            <Grid container style={{marginLeft:'1em'}} alignItems='center'>
              <Grid item xs={8}>
              <Typography style={{color: 'black', fontSize: 15, marginLeft: '10%', marginTop:'1em'}} >Full Details</Typography>
              </Grid>
            </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>

        </DialogActions>
        </Grid>
      </Dialog>
      </Collapse>

    </Card>

      </>
  );
}
