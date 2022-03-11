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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  newPosOfDialog: {
    top:'2.4em',
    left: "25%",
    height:'100%',
    width:'100em',
  }
}));
export default function ClientRequest({data}) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const openDialog = () => setOpen(true);
  const [expanded, setExpanded] = React.useState(false);
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
      
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Dialog
    scroll={'paper'}
     classes={{
      paper: classes.newPosOfDialog
      }}
      BackdropProps={{
        style: {
          opacity: 0.2,
          boxShadow:0
        }}}
    open={true}
      >
         <DialogTitle >Request Details</DialogTitle>
        <DialogContent>
          <DialogContentText
            >
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>
      </>
  );
}
